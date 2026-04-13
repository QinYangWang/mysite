import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

function Home() {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blog/posts?limit=20');
        const data = await res.json();
        
        if (data.success) {
          setPosts(data.data);
        } else {
          setError(data.error || 'Failed to fetch posts');
        }
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // 记录页面访问
  useEffect(() => {
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: '/',
        referrer: document.referrer || undefined,
        userAgent: navigator.userAgent,
      }),
    }).catch(() => {});
  }, []);

  if (loading) {
    return <div className="loading">加载中...</div>;
  }

  if (error) {
    return <div className="error">错误: {error}</div>;
  }

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>博客文章</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <article key={post.slug} className="post-card">
            <h2>
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="post-meta">
              <time>{new Date(post.date).toLocaleDateString('zh-CN')}</time>
            </div>
            <p className="post-summary">{post.summary}</p>
            {post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
        {posts.length === 0 && (
          <p style={{ textAlign: 'center', color: '#6b7280' }}>
            暂无文章
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
