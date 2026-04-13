import { useState, useEffect } from 'react';

function Admin() {
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'analytics' | 'comments'>('analytics');

  useEffect(() => {
    async function fetchData() {
      try {
        const [_analyticsRes, commentsRes] = await Promise.all([
          fetch('/api/analytics/stats?days=30'),
          fetch('/api/comments/admin/all'),
        ]);

        const commentsData = await commentsRes.json();

        if (commentsData.success) {
          setComments(commentsData.data);
        }
      } catch (err) {
        console.error('Failed to fetch admin data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">加载中...</div>;
  }

  return (
    <div className="admin-layout">
      <h1>管理后台</h1>

      <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
        <button
          className="btn"
          style={{
            marginRight: '1rem',
            background: activeTab === 'analytics' ? 'var(--primary-color)' : '#e5e7eb',
          }}
          onClick={() => setActiveTab('analytics')}
        >
          访问统计
        </button>
        <button
          className="btn"
          style={{
            background: activeTab === 'comments' ? 'var(--primary-color)' : '#e5e7eb',
          }}
          onClick={() => setActiveTab('comments')}
        >
          评论管理
        </button>
      </div>

      {activeTab === 'analytics' && (
        <div>
          <h2 style={{ marginBottom: '1.5rem' }}>访问统计</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">--</div>
              <div className="stat-label">总访问量</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">--</div>
              <div className="stat-label">本月访问量</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">--</div>
              <div className="stat-label">文章数</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{comments.length}</div>
              <div className="stat-label">评论数</div>
            </div>
          </div>
          <p style={{ color: '#6b7280' }}>
            Analytics Engine 统计功能需要配置 Analytics Engine 绑定
          </p>
        </div>
      )}

      {activeTab === 'comments' && (
        <div>
          <h2 style={{ marginBottom: '1.5rem' }}>评论管理</h2>
          {comments.length === 0 ? (
            <p style={{ color: '#6b7280' }}>暂无评论</p>
          ) : (
            <div>
              {comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <p>{comment.content}</p>
                  <p className="comment-email">
                    📧 {comment.email} ·{' '}
                    <time>
                      {new Date(comment.created_at).toLocaleDateString('zh-CN')}
                    </time>
                    {comment.approved === 0 && (
                      <span style={{ color: '#f59e0b', marginLeft: '1rem' }}>
                        待审核
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Admin;
