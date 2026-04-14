// 自定义类型声明
declare module 'rss';

// Cloudflare 绑定类型
interface Env {
  BUCKET: R2Bucket;
  DB: D1Database;
  ANALYTICS: AnalyticsEngineDataset;
  API_TOKEN: string;
  ASSETS?: Fetcher;
}
