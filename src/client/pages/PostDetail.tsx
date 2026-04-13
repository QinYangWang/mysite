import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Comments from '../components/Comments';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  coverImage?: string;
}

function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      
      try {
        const res = await fetch(`/api/blog/posts/${slug}`);
        const data = await res.json();
        
        if (data.success) {
          setPost(data.data);
        } else {
          setError(data.error || 'Post not found');
        }
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  // 记录页面访问
  useEffect(() => {
    if (slug) {
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: `/posts/${slug}`,
          referrer: document.referrer || undefined,
          userAgent: navigator.userAgent,
        }),
      }).catch(() => {});
    }
  }, [slug]);

  if (loading) {
    return <div className="loading">加载中...</div>;
  }

  if (error || !post) {
    return <div className="error">错误: {error || '文章不存在'}</div>;
  }

  return (
    <article className="post-detail">
      <h1>{post.title}</h1>
      <div className="post-meta">
        <time>{new Date(post.date).toLocaleDateString('zh-CN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}</time>
        {post.tags.length > 0 && (
          <div className="post-tags" style={{ marginTop: '0.5rem' }}>
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {post.coverImage && (
        <img
          src={`/api/blog/images/${post.coverImage}`}
          alt={post.title}
          style={{ marginBottom: '2rem', width: '100%' }}
        />
      )}

      <div className="post-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <Comments slug={slug!} />
    </article>
  );
}

export default PostDetail;
