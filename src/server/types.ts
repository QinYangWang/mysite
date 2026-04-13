// 博客相关的类型定义
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  publish: boolean;
  coverImage?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  coverImage?: string;
}

export interface Frontmatter {
  title?: string;
  slug?: string;
  date?: string;
  summary?: string;
  tags?: string | string[];
  publish?: boolean;
  coverImage?: string;
}
