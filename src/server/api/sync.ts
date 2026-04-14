import { Hono } from 'hono';

const syncAPI = new Hono<{
  Bindings: Env;
}>();

// Token 验证中间件
syncAPI.use('*', async (c, next) => {
  const token = c.req.header('Authorization');
  const expectedToken = c.env.API_TOKEN;

  if (!expectedToken) {
    return c.json({ success: false, error: 'API_TOKEN not configured' }, 500);
  }

  if (!token || token !== `Bearer ${expectedToken}`) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }

  await next();
});

// 计算内容的 hash（使用 Web Crypto API，Cloudflare Workers 原生支持）
async function computeHash(content: string | ArrayBuffer): Promise<string> {
  const data =
    typeof content === 'string'
      ? new TextEncoder().encode(content)
      : new Uint8Array(content);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

// 上传文件（增量，支持 hash 冲突检测）
syncAPI.post('/upload', async (c) => {
  try {
    const body = await c.req.json<{
      key: string;
      content: string;
      contentType?: string;
      encoding?: 'utf-8' | 'base64';
      lastKnownHash?: string; // 乐观锁：客户端上次已知的远程 hash
    }>();

    if (!body.key || body.content === undefined) {
      return c.json({ success: false, error: 'key and content are required' }, 400);
    }

    // 乐观锁冲突检测
    if (body.lastKnownHash) {
      const existing = await c.env.BUCKET.head(body.key);
      if (existing) {
        const remoteHash = existing.customMetadata?.contentHash;
        if (remoteHash && remoteHash !== body.lastKnownHash) {
          return c.json(
            {
              success: false,
              error: 'Conflict: remote file has been modified',
              code: 'CONFLICT',
              remoteHash,
            },
            409
          );
        }
      }
    }

    let fileContent: string | ArrayBuffer;
    if (body.encoding === 'base64') {
      const binary = atob(body.content);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      fileContent = bytes.buffer;
    } else {
      fileContent = body.content;
    }

    const contentType = body.contentType || 'application/octet-stream';

    // 计算内容 hash并存储到 customMetadata
    const contentHash = await computeHash(fileContent);

    await c.env.BUCKET.put(body.key, fileContent, {
      httpMetadata: { contentType },
      customMetadata: { contentHash },
    });

    return c.json({ success: true, data: { key: body.key, contentHash } });
  } catch (error) {
    console.error('Upload error:', error);
    return c.json({ success: false, error: 'Upload failed' }, 500);
  }
});

// 下载文件（返回 contentHash）
syncAPI.get('/download/:key+', async (c) => {
  try {
    const key = c.req.param('key');
    if (!key) {
      return c.json({ success: false, error: 'Key is required' }, 400);
    }

    const object = await c.env.BUCKET.get(key);

    if (!object) {
      return c.json({ success: false, error: 'File not found' }, 404);
    }

    const isText =
      object.httpMetadata?.contentType?.startsWith('text/') ||
      object.httpMetadata?.contentType === 'application/json';

    let content: string;
    if (isText) {
      content = await object.text();
    } else {
      // 二进制文件返回 base64
      const buffer = await object.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      content = btoa(binary);
    }

    return c.json({
      success: true,
      data: {
        key,
        content,
        contentType: object.httpMetadata?.contentType,
        size: object.size,
        uploaded: object.uploaded?.toISOString(),
        contentHash: object.customMetadata?.contentHash,
        encoding: isText ? 'utf-8' : 'base64',
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return c.json({ success: false, error: 'Download failed' }, 500);
  }
});

// 批量获取文件元数据（用于增量同步的快速比对）
syncAPI.post('/batch-meta', async (c) => {
  try {
    const body = await c.req.json<{
      keys?: string[];
      prefix?: string;
    }>();

    let keys: string[] = [];

    if (body.prefix) {
      // 获取指定前缀的所有文件 key
      let cursor: string | undefined;
      do {
        const list = await c.env.BUCKET.list({
          prefix: body.prefix,
          limit: 1000,
          cursor,
        });
        keys.push(...list.objects.map((obj) => obj.key));
        cursor = list.truncated ? list.cursor : undefined;
      } while (cursor);
    } else if (body.keys) {
      keys = body.keys;
    } else {
      return c.json({ success: false, error: 'keys or prefix is required' }, 400);
    }

    const metas: Array<{
      key: string;
      size: number;
      uploaded?: string;
      httpEtag?: string;
      contentHash?: string;
      contentType?: string;
    }> = [];

    // 使用 head 获取元数据，避免下载内容
    for (const key of keys) {
      const object = await c.env.BUCKET.head(key);
      if (object) {
        metas.push({
          key,
          size: object.size,
          uploaded: object.uploaded?.toISOString(),
          httpEtag: object.httpEtag,
          contentHash: object.customMetadata?.contentHash,
          contentType: object.httpMetadata?.contentType,
        });
      }
    }

    return c.json({
      success: true,
      data: { files: metas, count: metas.length },
    });
  } catch (error) {
    console.error('Batch meta error:', error);
    return c.json({ success: false, error: 'Batch meta failed' }, 500);
  }
});

// 批量下载文件（增量同步）
syncAPI.post('/download-batch', async (c) => {
  try {
    const body = await c.req.json<{
      keys: string[];
      prefix?: string;
    }>();

    let keys: string[] = [];

    if (body.prefix) {
      // 获取指定前缀的所有文件
      const list = await c.env.BUCKET.list({ prefix: body.prefix });
      keys = list.objects.map((obj) => obj.key);
    } else if (body.keys) {
      keys = body.keys;
    } else {
      return c.json({ success: false, error: 'keys or prefix is required' }, 400);
    }

    const files: Array<{
      key: string;
      content: string;
      contentType?: string;
      size: number;
      uploaded?: string;
      contentHash?: string;
    }> = [];

    for (const key of keys) {
      const object = await c.env.BUCKET.get(key);
      if (object) {
        files.push({
          key,
          content: await object.text(),
          contentType: object.httpMetadata?.contentType,
          size: object.size,
          uploaded: object.uploaded?.toISOString(),
          contentHash: object.customMetadata?.contentHash,
        });
      }
    }

    return c.json({ success: true, data: { files, count: files.length } });
  } catch (error) {
    console.error('Batch download error:', error);
    return c.json({ success: false, error: 'Batch download failed' }, 500);
  }
});

// 列出文件
syncAPI.get('/list', async (c) => {
  try {
    const prefix = c.req.query('prefix') || '';
    const cursor = c.req.query('cursor');

    const list = await c.env.BUCKET.list({
      prefix,
      limit: parseInt(c.req.query('limit') || '100'),
      cursor,
    });

    return c.json({
      success: true,
      data: {
        files: list.objects.map((obj) => ({
          key: obj.key,
          size: obj.size,
          uploaded: obj.uploaded?.toISOString(),
          httpEtag: obj.httpEtag,
        })),
        cursor: list.truncated ? list.cursor : undefined,
      },
    });
  } catch (error) {
    console.error('List error:', error);
    return c.json({ success: false, error: 'List failed' }, 500);
  }
});

// 获取文件元数据（用于检查是否需要更新）
syncAPI.get('/meta/:key+', async (c) => {
  try {
    const key = c.req.param('key');
    if (!key) {
      return c.json({ success: false, error: 'Key is required' }, 400);
    }

    const object = await c.env.BUCKET.head(key);

    if (!object) {
      return c.json({ success: false, error: 'File not found' }, 404);
    }

    return c.json({
      success: true,
      data: {
        key,
        size: object.size,
        uploaded: object.uploaded?.toISOString(),
        httpEtag: object.httpEtag,
        contentType: object.httpMetadata?.contentType,
        contentHash: object.customMetadata?.contentHash,
      },
    });
  } catch (error) {
    console.error('Meta error:', error);
    return c.json({ success: false, error: 'Meta failed' }, 500);
  }
});

// 删除文件
syncAPI.delete('/delete/:key+', async (c) => {
  try {
    const key = c.req.param('key');
    if (!key) {
      return c.json({ success: false, error: 'Key is required' }, 400);
    }

    await c.env.BUCKET.delete(key);

    return c.json({ success: true, data: { key } });
  } catch (error) {
    console.error('Delete error:', error);
    return c.json({ success: false, error: 'Delete failed' }, 500);
  }
});

// 批量删除
syncAPI.post('/delete-batch', async (c) => {
  try {
    const body = await c.req.json<{ keys: string[] }>();

    const deleted: string[] = [];
    for (const key of body.keys) {
      try {
        await c.env.BUCKET.delete(key);
        deleted.push(key);
      } catch {
        // 忽略单个删除失败
      }
    }

    return c.json({ success: true, data: { deleted, count: deleted.length } });
  } catch (error) {
    console.error('Batch delete error:', error);
    return c.json({ success: false, error: 'Batch delete failed' }, 500);
  }
});

// 发布资源上传（图片/附件）
syncAPI.post('/publish-assets', async (c) => {
  try {
    const body = await c.req.json<{
      assets: Array<{ key: string; content: string; contentType?: string; encoding?: 'utf-8' | 'base64' }>;
    }>();
    const uploaded: string[] = [];
    for (const asset of body.assets || []) {
      let fileContent: string | ArrayBuffer = asset.content;
      if (asset.encoding === 'base64') {
        const binary = atob(asset.content);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        fileContent = bytes.buffer;
      }
      const contentType = asset.contentType || 'application/octet-stream';
      await c.env.BUCKET.put(asset.key, fileContent, {
        httpMetadata: { contentType },
      });
      uploaded.push(asset.key);
    }
    return c.json({ success: true, data: { uploaded, count: uploaded.length } });
  } catch (error) {
    console.error('Publish assets error:', error);
    return c.json({ success: false, error: 'Publish assets failed' }, 500);
  }
});

// 接收发布索引
syncAPI.post('/publish-index', async (c) => {
  try {
    const body = await c.req.json<{ index: any }>();
    await c.env.BUCKET.put('publish-index.json', JSON.stringify(body.index), {
      httpMetadata: { contentType: 'application/json' },
    });
    return c.json({ success: true, data: { saved: true } });
  } catch (error) {
    console.error('Publish index error:', error);
    return c.json({ success: false, error: 'Publish index failed' }, 500);
  }
});

export { syncAPI };
