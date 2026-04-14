import { Hono } from 'hono';

const analyticsAPI = new Hono<{
  Bindings: Env;
}>();

const DATASET = 'mysite_analytics';

async function queryAnalyticsEngine(env: Env, sql: string) {
  const accountId = env.CF_ACCOUNT_ID;
  const token = env.CF_ANALYTICS_TOKEN;

  if (!accountId || !token) {
    throw new Error('Analytics Engine credentials not configured');
  }

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/analytics_engine/sql`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'text/plain',
      },
      body: sql,
    }
  );

  if (!res.ok) {
    const text = await res.text().catch(() => 'Unknown error');
    throw new Error(`Analytics Engine query failed: ${res.status} ${text}`);
  }

  const json = (await res.json()) as {
    success?: boolean;
    errors?: { message: string }[];
    result?: {
      data?: Record<string, unknown>[];
      meta?: { name: string; type: string }[];
      rows?: number;
    };
  };

  if (!json.success && json.errors && json.errors.length > 0) {
    throw new Error(json.errors.map((e) => e.message).join(', '));
  }

  return json.result || { data: [], meta: [], rows: 0 };
}

// 记录页面访问
analyticsAPI.post('/track', async (c) => {
  try {
    const body = await c.req.json<{
      path: string;
      referrer?: string;
      userAgent?: string;
    }>();

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
    return c.json(
      {
        success: false,
        error: 'Failed to track page view',
      },
      500
    );
  }
});

// 获取访问统计（管理功能）
analyticsAPI.get('/stats', async (c) => {
  try {
    const days = parseInt(c.req.query('days') || '30');

    const totalPvSql = `
      SELECT SUM(_sample_interval) as total_pv
      FROM ${DATASET}
      WHERE timestamp > NOW() - INTERVAL '${days}' DAY
    `;

    const totalUvSql = `
      SELECT COUNT(DISTINCT blob4) as total_uv
      FROM ${DATASET}
      WHERE timestamp > NOW() - INTERVAL '${days}' DAY
    `;

    const todayPvSql = `
      SELECT SUM(_sample_interval) as today_pv
      FROM ${DATASET}
      WHERE toDate(timestamp) = toDate(NOW())
    `;

    const [totalPvResult, totalUvResult, todayPvResult] = await Promise.all([
      queryAnalyticsEngine(c.env, totalPvSql).catch(() => ({ data: [{ total_pv: 0 }] })),
      queryAnalyticsEngine(c.env, totalUvSql).catch(() => ({ data: [{ total_uv: 0 }] })),
      queryAnalyticsEngine(c.env, todayPvSql).catch(() => ({ data: [{ today_pv: 0 }] })),
    ]);

    const totalPv = Number(totalPvResult.data?.[0]?.total_pv || 0);
    const totalUv = Number(totalUvResult.data?.[0]?.total_uv || 0);
    const todayPv = Number(todayPvResult.data?.[0]?.today_pv || 0);

    return c.json({
      success: true,
      data: {
        totalPv,
        totalUv,
        todayPv,
        periodDays: days,
      },
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return c.json(
      {
        success: false,
        error: 'Failed to fetch analytics',
      },
      500
    );
  }
});

// 获取时间序列数据
analyticsAPI.get('/timeseries', async (c) => {
  try {
    const days = parseInt(c.req.query('days') || '30');

    const sql = `
      SELECT
        toStartOfDay(timestamp) as date,
        SUM(_sample_interval) as pv,
        COUNT(DISTINCT blob4) as uv
      FROM ${DATASET}
      WHERE timestamp > NOW() - INTERVAL '${days}' DAY
      GROUP BY date
      ORDER BY date ASC
      FORMAT JSON
    `;

    const result = await queryAnalyticsEngine(c.env, sql);

    const data = (result.data || []).map((row) => ({
      date: String(row.date).split(' ')[0],
      pv: Number(row.pv || 0),
      uv: Number(row.uv || 0),
    }));

    return c.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching timeseries:', error);
    return c.json(
      {
        success: false,
        error: 'Failed to fetch timeseries',
      },
      500
    );
  }
});

// 获取页面访问排名
analyticsAPI.get('/top-pages', async (c) => {
  try {
    const limit = parseInt(c.req.query('limit') || '10');
    const days = parseInt(c.req.query('days') || '30');

    const sql = `
      SELECT
        blob1 as path,
        SUM(_sample_interval) as views
      FROM ${DATASET}
      WHERE timestamp > NOW() - INTERVAL '${days}' DAY
      GROUP BY path
      ORDER BY views DESC
      LIMIT ${limit}
      FORMAT JSON
    `;

    const result = await queryAnalyticsEngine(c.env, sql);

    const data = (result.data || []).map((row) => ({
      path: String(row.path || '/'),
      views: Number(row.views || 0),
    }));

    return c.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching top pages:', error);
    return c.json(
      {
        success: false,
        error: 'Failed to fetch top pages',
      },
      500
    );
  }
});

// 获取国家分布
analyticsAPI.get('/countries', async (c) => {
  try {
    const limit = parseInt(c.req.query('limit') || '10');
    const days = parseInt(c.req.query('days') || '30');

    const sql = `
      SELECT
        blob5 as country,
        SUM(_sample_interval) as views
      FROM ${DATASET}
      WHERE timestamp > NOW() - INTERVAL '${days}' DAY
        AND country != ''
      GROUP BY country
      ORDER BY views DESC
      LIMIT ${limit}
      FORMAT JSON
    `;

    const result = await queryAnalyticsEngine(c.env, sql);

    const data = (result.data || []).map((row) => ({
      country: String(row.country || 'Unknown'),
      views: Number(row.views || 0),
    }));

    return c.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching countries:', error);
    return c.json(
      {
        success: false,
        error: 'Failed to fetch countries',
      },
      500
    );
  }
});

// 获取设备分布（简单 UA 解析）
analyticsAPI.get('/devices', async (c) => {
  try {
    const days = parseInt(c.req.query('days') || '30');

    const sql = `
      SELECT
        blob3 as ua,
        SUM(_sample_interval) as views
      FROM ${DATASET}
      WHERE timestamp > NOW() - INTERVAL '${days}' DAY
        AND ua != ''
      GROUP BY ua
      FORMAT JSON
    `;

    const result = await queryAnalyticsEngine(c.env, sql);

    const counts: Record<string, number> = { Desktop: 0, Mobile: 0, Tablet: 0, Other: 0 };

    for (const row of result.data || []) {
      const ua = String(row.ua || '').toLowerCase();
      const views = Number(row.views || 0);

      if (ua.includes('tablet') || ua.includes('ipad')) {
        counts.Tablet += views;
      } else if (ua.includes('mobile') || ua.includes('android') || ua.includes('iphone')) {
        counts.Mobile += views;
      } else if (ua.includes('windows') || ua.includes('macintosh') || ua.includes('linux')) {
        counts.Desktop += views;
      } else {
        counts.Other += views;
      }
    }

    const data = Object.entries(counts)
      .map(([device, views]) => ({ device, views }))
      .sort((a, b) => b.views - a.views);

    return c.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching devices:', error);
    return c.json(
      {
        success: false,
        error: 'Failed to fetch devices',
      },
      500
    );
  }
});

export { analyticsAPI };
