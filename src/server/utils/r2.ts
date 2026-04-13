import matter from 'gray-matter';
import type { BlogPost, BlogPostMeta, Frontmatter } from '../types';

// 从 R2 获取所有已发布的博客文章列表
export async function getPublishedPosts(bucket: R2Bucket, limit: number = 20, cursor?: string): Promise<{ posts: BlogPostMeta[]; cursor?: string }> {
  const list = await bucket.list({
    prefix: 'posts/',
    delimiter: '/',
    limit: 100,
    cursor,
  });

  const posts: BlogPostMeta[] = [];

  for (const object of list.objects) {
    if (!object.key.endsWith('.md')) continue;

    const file = await bucket.get(object.key);
    if (!file) continue;

    const content = await file.text();
    const parsed = parseMarkdown(content);

    if (!parsed.frontmatter.publish) continue;

    posts.push({
      slug: parsed.frontmatter.slug || generateSlug(object.key),
      title: parsed.frontmatter.title || extractTitle(object.key),
      date: parsed.frontmatter.date || object.uploaded?.toISOString() || new Date().toISOString(),
      summary: parsed.frontmatter.summary || '',
      tags: normalizeTags(parsed.frontmatter.tags),
      coverImage: parsed.frontmatter.coverImage,
    });
  }

  // 按日期倒序排序
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    posts: posts.slice(0, limit),
    cursor: list.truncated ? list.cursor : undefined,
  };
}

// 获取单个博客详情
export async function getPostBySlug(bucket: R2Bucket, slug: string): Promise<BlogPost | null> {
  // 尝试查找匹配的 markdown 文件
  const list = await bucket.list({
    prefix: 'posts/',
    limit: 1000,
  });

  for (const object of list.objects) {
    if (!object.key.endsWith('.md')) continue;

    const file = await bucket.get(object.key);
    if (!file) continue;

    const content = await file.text();
    const parsed = parseMarkdown(content);
    const postSlug = parsed.frontmatter.slug || generateSlug(object.key);

    if (postSlug === slug) {
      // 检查是否发布
      if (!parsed.frontmatter.publish) {
        return null;
      }

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

// 获取所有图片（仅已发布文章关联的图片）
export async function getPublishedImages(bucket: R2Bucket, prefix: string = 'images/'): Promise<string[]> {
  const list = await bucket.list({
    prefix,
    limit: 1000,
  });

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];
  
  return list.objects
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

// 从文件名生成 slug
function generateSlug(key: string): string {
  const fileName = key.replace('posts/', '').replace('.md', '');
  return fileName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

// 从文件名提取标题
function extractTitle(key: string): string {
  const fileName = key.replace('posts/', '').replace('.md', '');
  return fileName.replace(/[-_]/g, ' ');
}
