import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { blogAPI } from './api/blog';
import { commentsAPI } from './api/comments';
import { analyticsAPI } from './api/analytics';
import { rssAPI, generateRSS } from './api/rss';
import { syncAPI } from './api/sync';

const app = new Hono<{
  Bindings: Env;
}>();

// CORS 配置
app.use('/*', cors());

// 博客 API 路由
app.route('/api/blog', blogAPI);
app.route('/api/comments', commentsAPI);
app.route('/api/analytics', analyticsAPI);
app.route('/api/rss', rssAPI);

// 同步 API（需要 token 认证）
app.route('/api/sync', syncAPI);

// RSS feed 路由
app.get('/feed.xml', async (c) => {
  const rss = await generateRSS(c.env.BUCKET);
  return c.body(rss, 200, {
    'Content-Type': 'application/xml',
    'Cache-Control': 'public, max-age=3600',
  });
});

export default app;
