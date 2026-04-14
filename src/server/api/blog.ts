import { Hono } from 'hono';
import { getPublishedPosts, getPostBySlug } from '../utils/r2';

const blogAPI = new Hono<{
  Bindings: Env;
}>();

// 获取文章列表
blogAPI.get('/posts', async (c) => {
  try {
    const limit = parseInt(c.req.query('limit') || '20');
    const cursor = c.req.query('cursor');
    const tag = c.req.query('tag');
    
    let { posts, cursor: nextCursor } = await getPublishedPosts(c.env.BUCKET, limit, cursor);
    
    if (tag) {
      posts = posts.filter((p: any) => p.tags && p.tags.includes(tag));
    }
    
    return c.json({
      success: true,
      data: posts,
      cursor: nextCursor,
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return c.json({
      success: false,
      error: 'Failed to fetch posts',
    }, 500);
  }
});

// 搜索文章
blogAPI.get('/search', async (c) => {
  try {
    const q = c.req.query('q')?.toLowerCase() || '';
    const { posts } = await getPublishedPosts(c.env.BUCKET, 1000);
    
    const results = posts.filter((p: any) => {
      const text = `${p.title} ${p.summary || ''} ${(p.tags || []).join(' ')}`.toLowerCase();
      return text.includes(q);
    });
    
    return c.json({
      success: true,
      data: results.slice(0, 20),
    });
  } catch (error) {
    console.error('Search error:', error);
    return c.json({ success: false, error: 'Search failed' }, 500);
  }
});

// 获取单篇文章
blogAPI.get('/posts/:slug', async (c) => {
  try {
    const slug = c.req.param('slug');
    const post = await getPostBySlug(c.env.BUCKET, slug);
    
    if (!post) {
      return c.json({
        success: false,
        error: 'Post not found',
      }, 404);
    }
    
    return c.json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    return c.json({
      success: false,
      error: 'Failed to fetch post',
    }, 500);
  }
});

// 获取图谱数据
blogAPI.get('/graph-data', async (c) => {
  try {
    const { posts } = await getPublishedPosts(c.env.BUCKET, 1000);
    const nodes = posts.map((p: any) => ({
      id: p.slug,
      title: p.title,
      tags: p.tags || [],
    }));
    
    const links: { source: string; target: string }[] = [];
    const slugMap = new Set(nodes.map((n: any) => n.id));
    
    for (const post of posts) {
      const content = post.content || '';
      // 匹配 [[wikilink]]
      const wikiMatches = [...content.matchAll(/\[\[([^\]]+)\]\]/g)];
      for (const m of wikiMatches) {
        const target = m[1].split('|')[0].trim().replace(/\.md$/, '');
        if (slugMap.has(target) && target !== post.slug) {
          links.push({ source: post.slug, target });
        }
      }
      // 匹配 [text](path.md)
      const mdMatches = [...content.matchAll(/\[([^\]]*)\]\(([^)]+\.md)\)/g)];
      for (const m of mdMatches) {
        const target = m[2].trim().replace(/\.md$/, '').replace(/^\.\//, '');
        if (slugMap.has(target) && target !== post.slug) {
          links.push({ source: post.slug, target });
        }
      }
    }
    
    return c.json({ success: true, data: { nodes, links } });
  } catch (error) {
    console.error('Graph data error:', error);
    return c.json({ success: false, error: 'Failed to fetch graph data' }, 500);
  }
});

// 获取图片
blogAPI.get('/images/:key+', async (c) => {
  try {
    const rawKey = c.req.param('key');
    const key = `images/${rawKey}`;

    const object = await c.env.BUCKET.get(key);
    if (object) {
      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('etag', object.httpEtag);
      headers.set('Cache-Control', 'public, max-age=31536000');

      return new Response(object.body, {
        headers,
      });
    }

    return c.json({ success: false, error: 'Image not found' }, 404);
  } catch (error) {
    console.error('Error fetching image:', error);
    return c.json({
      success: false,
      error: 'Failed to fetch image',
    }, 500);
  }
});

// 获取站点信息
blogAPI.get('/site', async (c) => {
  return c.json({
    success: true,
    data: {
      name: 'My Blog',
      description: 'A blog powered by Cloudflare Workers and R2',
      url: c.req.url.replace(/\/api\/blog\/site$/, ''),
    },
  });
});

export { blogAPI };
