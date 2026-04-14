import matter from 'gray-matter';
import type { BlogPost, BlogPostMeta, Frontmatter } from '../types';

// 递归列出 R2 中所有 .md 文件
async function listAllMarkdownFiles(bucket: R2Bucket, prefix: string): Promise<R2Object[]> {
  const allObjects: R2Object[] = [];
  let cursor: string | undefined;

  do {
    const list = await bucket.list({
      prefix,
      limit: 1000,
      cursor,
    });

    for (const obj of list.objects) {
      if (obj.key.endsWith('.md')) {
        allObjects.push(obj);
      }
    }

    cursor = list.truncated ? list.cursor : undefined;
  } while (cursor);

  return allObjects;
}

// 从 R2 获取所有已发布的博客文章列表
export async function getPublishedPosts(bucket: R2Bucket, limit: number = 20, _cursor?: string): Promise<{ posts: BlogPostMeta[]; cursor?: string }> {
  const objects = await listAllMarkdownFiles(bucket, '');

  const posts: BlogPostMeta[] = [];

  for (const object of objects) {
    const file = await bucket.get(object.key);
    if (!file) continue;

    const content = await file.text();
    const parsed = parseMarkdown(content);

    if (!parsed.frontmatter.publish) continue;
    if (!parsed.frontmatter.slug) continue;

    posts.push({
      slug: parsed.frontmatter.slug,
      title: parsed.frontmatter.title || extractTitle(object.key),
      date: parsed.frontmatter.date || object.uploaded?.toISOString() || new Date().toISOString(),
      summary: parsed.frontmatter.summary || '',
      tags: normalizeTags(parsed.frontmatter.tags),
      coverImage: parsed.frontmatter.coverImage,
      content: parsed.content,
    });
  }

  // 按日期倒序排序
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    posts: posts.slice(0, limit),
    cursor: undefined, // 已一次性获取所有文件
  };
}

// 获取单个博客详情
export async function getPostBySlug(bucket: R2Bucket, slug: string): Promise<BlogPost | null> {
  const objects = await listAllMarkdownFiles(bucket, '');

  for (const object of objects) {
    const file = await bucket.get(object.key);
    if (!file) continue;

    const content = await file.text();
    const parsed = parseMarkdown(content);
    const postSlug = parsed.frontmatter.slug;

    if (!postSlug || !parsed.frontmatter.publish) continue;

    if (postSlug === slug) {
      return {
        slug: postSlug,
        title: parsed.frontmatter.title || extractTitle(object.key),
        date: parsed.frontmatter.date || object.uploaded?.toISOString() || new Date().toISOString(),
        summary: parsed.frontmatter.summary || '',
        tags: normalizeTags(parsed.frontmatter.tags),
        content: parsed.content,
        publish: parsed.frontmatter.publish || false,
        coverImage: parsed.frontmatter.coverImage,
      };
    }
  }

  return null;
}

// 获取所有图片
export async function getPublishedImages(bucket: R2Bucket, prefix: string = 'images/'): Promise<string[]> {
  const allObjects: R2Object[] = [];
  let cursor: string | undefined;

  do {
    const list = await bucket.list({
      prefix,
      limit: 1000,
      cursor,
    });
    allObjects.push(...list.objects);
    cursor = list.truncated ? list.cursor : undefined;
  } while (cursor);

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];

  return allObjects
    .filter((obj: R2Object) => {
      const ext = obj.key.substring(obj.key.lastIndexOf('.')).toLowerCase();
      return imageExtensions.includes(ext);
    })
    .map((obj: R2Object) => obj.key);
}

// 解析 markdown 文件
export function parseMarkdown(content: string): { frontmatter: Frontmatter; content: string } {
  const { data, content: postContent } = matter(content);
  
  return {
    frontmatter: {
      title: data.title,
      slug: data.slug,
      date: data.date,
      summary: data.summary,
      tags: data.tags,
      publish: data.publish ?? false,
      coverImage: data.coverImage,
    },
    content: postContent,
  };
}

// 规范化标签
function normalizeTags(tags: string | string[] | undefined): string[] {
  if (!tags) return [];
  if (typeof tags === 'string') return [tags];
  return tags;
}

// 从文件 key 提取标题
function extractTitle(key: string): string {
  const fileName = key
    .replace(/^posts\//, '')
    .replace(/\.md$/, '')
    .replace(/^.*\//, '');
  return fileName.replace(/[-_]/g, ' ');
}
