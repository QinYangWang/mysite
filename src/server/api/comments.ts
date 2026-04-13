import { Hono } from 'hono';

const commentsAPI = new Hono<{
  Bindings: Env;
}>();

// 获取文章的评论
commentsAPI.get('/:slug', async (c) => {
  try {
    const slug = c.req.param('slug');
    
    const { results } = await c.env.DB.prepare(
      'SELECT id, email, content, created_at FROM comments WHERE post_slug = ? AND approved = 1 ORDER BY created_at DESC'
    ).bind(slug).all();
    
    return c.json({
      success: true,
      data: results || [],
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return c.json({
      success: false,
      error: 'Failed to fetch comments',
    }, 500);
  }
});

// 提交新评论
commentsAPI.post('/:slug', async (c) => {
  try {
    const slug = c.req.param('slug');
    const body = await c.req.json<{ email: string; content: string }>();
    
    if (!body.email || !body.content) {
      return c.json({
        success: false,
        error: 'Email and content are required',
      }, 400);
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return c.json({
        success: false,
        error: 'Invalid email format',
      }, 400);
    }
    
    // 检查文章是否存在且已发布
    const post = await c.env.BUCKET.list({
      prefix: 'posts/',
      limit: 1000,
    });
    
    let postExists = false;
    for (const object of post.objects) {
      if (!object.key.endsWith('.md')) continue;
      
      const file = await c.env.BUCKET.get(object.key);
      if (file) {
        const content = await file.text();
        if (content.includes(`slug: ${slug}`) && content.includes('publish: true')) {
          postExists = true;
          break;
        }
      }
    }
    
    if (!postExists) {
      return c.json({
        success: false,
        error: 'Post not found or not published',
      }, 404);
    }
    
    // 插入评论（默认待审核）
    await c.env.DB.prepare(
      'INSERT INTO comments (post_slug, email, content, approved, created_at) VALUES (?, ?, ?, 0, ?)'
    ).bind(slug, body.email, body.content, new Date().toISOString()).run();
    
    return c.json({
      success: true,
      data: {
        message: 'Comment submitted and awaiting approval',
      },
    });
  } catch (error) {
    console.error('Error submitting comment:', error);
    return c.json({
      success: false,
      error: 'Failed to submit comment',
    }, 500);
  }
});

// 审核评论（管理功能）
commentsAPI.patch('/approve/:id', async (c) => {
  try {
    const id = parseInt(c.req.param('id'));
    
    await c.env.DB.prepare(
      'UPDATE comments SET approved = 1 WHERE id = ?'
    ).bind(id).run();
    
    return c.json({
      success: true,
      data: { message: 'Comment approved' },
    });
  } catch (error) {
    console.error('Error approving comment:', error);
    return c.json({
      success: false,
      error: 'Failed to approve comment',
    }, 500);
  }
});

// 获取所有评论（管理功能）
commentsAPI.get('/admin/all', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM comments ORDER BY created_at DESC'
    ).all();
    
    return c.json({
      success: true,
      data: results || [],
    });
  } catch (error) {
    console.error('Error fetching all comments:', error);
    return c.json({
      success: false,
      error: 'Failed to fetch comments',
    }, 500);
  }
});

export { commentsAPI };
