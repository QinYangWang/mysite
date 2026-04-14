import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { blogAPI } from './api/blog';
import { commentsAPI } from './api/comments';
import { analyticsAPI } from './api/analytics';
import { rssAPI, generateRSS } from './api/rss';
import { syncAPI } from './api/sync';
import { getPostBySlug } from './utils/r2';

const app = new Hono<{
  Bindings: Env;
}>();

// CORS 配置
app.use('/*', cors());

// Admin 认证中间件
const adminAuth = async (c: any, next: any) => {
  const authHeader = c.req.header('Authorization');
  const token = authHeader?.replace('Bearer ', '');
  if (token !== c.env.API_TOKEN) {
    return c.json({ success: false, error: 'Unauthorized' }, 401);
  }
  await next();
};

// 博客 API 路由
app.route('/api/blog', blogAPI);
app.route('/api/comments', commentsAPI);
app.route('/api/analytics', analyticsAPI);
app.route('/api/rss', rssAPI);

// 同步 API（需要 token 认证）
app.route('/api/sync', syncAPI);

// 认证校验路由
app.post('/api/auth/verify', async (c) => {
  try {
    const body = await c.req.json<{ token?: string }>();
    if (body.token === c.env.API_TOKEN) {
      return c.json({ success: true });
    }
    return c.json({ success: false, error: 'Invalid token' }, 401);
  } catch (error) {
    return c.json({ success: false, error: 'Invalid request' }, 400);
  }
});

// 保护管理后台接口
app.use('/api/analytics/*', adminAuth);
app.use('/api/comments/admin/*', adminAuth);
app.use('/api/comments/approve/*', adminAuth);

// RSS feed 路由
app.get('/feed.xml', async (c) => {
  const rss = await generateRSS(c.env.BUCKET);
  return c.body(rss, 200, {
    'Content-Type': 'application/xml',
    'Cache-Control': 'public, max-age=3600',
  });
});

// SPA fallback — serve index.html for unmatched non-API routes
app.get('*', async (c) => {
  const url = new URL(c.req.url);

  // API routes should not reach here
  if (url.pathname.startsWith('/api/')) {
    return c.notFound();
  }

  const assets = c.env.ASSETS;
  if (!assets) {
    // Development environment fallback
    return c.notFound();
  }

  // Check if this is a blog post route for OG tag injection
  const blogMatch = url.pathname.match(/^\/blog\/([^\/]+)\/?$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    try {
      const post = await getPostBySlug(c.env.BUCKET, slug);
      if (post) {
        const baseUrl = url.origin;
        const indexResponse = await assets.fetch(new URL('/index.html', c.req.url));
        let html = await indexResponse.text();

        const ogTags = [
          `<meta property="og:title" content="${escapeHtml(post.title)}" />`,
          `<meta property="og:description" content="${escapeHtml(post.summary || 'A blog post')}" />`,
          `<meta property="og:type" content="article" />`,
          `<meta property="og:url" content="${baseUrl}/blog/${slug}" />`,
          post.coverImage ? `<meta property="og:image" content="${baseUrl}/api/blog/images/${post.coverImage}" />` : '',
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${escapeHtml(post.title)}" />`,
          `<meta name="twitter:description" content="${escapeHtml(post.summary || 'A blog post')}" />`,
          post.coverImage ? `<meta name="twitter:image" content="${baseUrl}/api/blog/images/${post.coverImage}" />` : '',
          `<title>${escapeHtml(post.title)}</title>`,
          `<meta name="description" content="${escapeHtml(post.summary || 'A blog post')}" />`,
        ].filter(Boolean).join('\n');

        // Inject into <head>
        html = html.replace('</head>', `${ogTags}\n</head>`);

        return new Response(html, {
          status: 200,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
          },
        });
      }
    } catch (e) {
      console.error('OG tag injection error:', e);
    }
  }

  // Try to serve the static asset
  const assetResponse = await assets.fetch(c.req.raw);

  // If the asset is missing, fall back to index.html for SPA routing
  if (assetResponse.status === 404) {
    const indexResponse = await assets.fetch(new URL('/index.html', c.req.url));
    return new Response(indexResponse.body, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  }

  return assetResponse;
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default app;
