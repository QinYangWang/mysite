import { Hono } from 'hono';
import RSS from 'rss';
import { getPublishedPosts } from '../utils/r2';

const rssAPI = new Hono<{
  Bindings: Env;
}>();

// 生成 RSS Feed
async function generateRSS(bucket: Env['BUCKET']) {
  const { posts } = await getPublishedPosts(bucket, 20);
  
  const feed = new RSS({
    title: 'My Blog',
    description: 'A blog powered by Cloudflare Workers and R2',
    feed_url: 'https://mysite.com/feed.xml',
    site_url: 'https://mysite.com',
    language: 'zh-CN',
    pubDate: new Date(),
    ttl: 60,
  });
  
  for (const post of posts) {
    feed.item({
      title: post.title,
      description: post.summary,
      url: `https://mysite.com/posts/${post.slug}`,
      categories: post.tags,
      date: new Date(post.date),
    });
  }
  
  return feed.xml();
}

// RSS API 端点
rssAPI.get('/feed', async (c) => {
  try {
    const rss = await generateRSS(c.env.BUCKET);
    
    return c.body(rss, 200, {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    });
  } catch (error) {
    console.error('Error generating RSS:', error);
    return c.json({
      success: false,
      error: 'Failed to generate RSS feed',
    }, 500);
  }
});

export { rssAPI, generateRSS };
