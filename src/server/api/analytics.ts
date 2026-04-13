import { Hono } from 'hono';

const analyticsAPI = new Hono<{
  Bindings: Env;
}>();

// 记录页面访问
analyticsAPI.post('/track', async (c) => {
  try {
    const body = await c.req.json<{
      path: string;
      referrer?: string;
      userAgent?: string;
    }>();
    
    // 使用 Analytics Engine 记录数据
    const analytics = c.env.ANALYTICS;
    
    if (analytics) {
      await analytics.writeDataPoint({
        doubles: [],
        blobs: [
          body.path || '',
          body.referrer || '',
          body.userAgent || '',
          c.req.raw.headers.get('CF-Connecting-IP') || '',
          c.req.raw.headers.get('CF-IPCountry') || '',
        ],
      });
    }
    
    return c.json({ success: true });
  } catch (error) {
    console.error('Error tracking page view:', error);
    return c.json({
      success: false,
      error: 'Failed to track page view',
    }, 500);
  }
});

// 获取访问统计（管理功能）
analyticsAPI.get('/stats', async (c) => {
  try {
    const days = parseInt(c.req.query('days') || '30');
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    return c.json({
      success: true,
      data: {
        message: 'Analytics Engine integration requires proper query setup',
        period: `${days} days`,
      },
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return c.json({
      success: false,
      error: 'Failed to fetch analytics',
    }, 500);
  }
});

// 获取页面访问排名
analyticsAPI.get('/top-pages', async (c) => {
  try {
    return c.json({
      success: true,
      data: {
        message: 'Top pages analytics requires Analytics Engine query',
      },
    });
  } catch (error) {
    console.error('Error fetching top pages:', error);
    return c.json({
      success: false,
      error: 'Failed to fetch top pages',
    }, 500);
  }
});

// 获取来源统计
analyticsAPI.get('/referrers', async (c) => {
  try {
    return c.json({
      success: true,
      data: {
        message: 'Referrers analytics requires Analytics Engine query',
      },
    });
  } catch (error) {
    console.error('Error fetching referrers:', error);
    return c.json({
      success: false,
      error: 'Failed to fetch referrers',
    }, 500);
  }
});

export { analyticsAPI };
