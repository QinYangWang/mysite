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
    
    const { posts, cursor: nextCursor } = await getPublishedPosts(c.env.BUCKET, limit, cursor);
    
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

// 获取图片
blogAPI.get('/images/:key+', async (c) => {
  try {
    const key = `images/${c.req.param('key')}`;
    const object = await c.env.BUCKET.get(key);
    
    if (!object) {
      return c.json({ success: false, error: 'Image not found' }, 404);
    }
    
    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('etag', object.httpEtag);
    headers.set('Cache-Control', 'public, max-age=31536000');
    
    return new Response(object.body, {
      headers,
    });
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
