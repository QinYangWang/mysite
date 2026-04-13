import { useState, useEffect } from 'react';

interface Comment {
  id: number;
  email: string;
  content: string;
  created_at: string;
}

interface CommentsProps {
  slug: string;
}

function Comments({ slug }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`/api/comments/${slug}`);
        const data = await res.json();
        
        if (data.success) {
          setComments(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch comments:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !content) {
      setMessage('请填写邮箱和评论内容');
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      const res = await fetch(`/api/comments/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, content }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage('评论已提交，等待审核');
        setContent('');
      } else {
        setMessage(data.error || '评论提交失败');
      }
    } catch (err) {
      setMessage('网络错误');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="comments-section">
      <h3>评论 ({comments.length})</h3>

      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="你的邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="评论内容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        {message && (
          <p style={{ 
            marginBottom: '1rem',
            color: message.includes('成功') ? '#059669' : '#dc2626'
          }}>
            {message}
          </p>
        )}
        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? '提交中...' : '提交评论'}
        </button>
      </form>

      {loading ? (
        <p>加载评论中...</p>
      ) : (
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p>{comment.content}</p>
              <p className="comment-email">
                📧 {comment.email} ·{' '}
                <time>
                  {new Date(comment.created_at).toLocaleDateString('zh-CN')}
                </time>
              </p>
            </div>
          ))}
          {comments.length === 0 && (
            <p style={{ color: '#6b7280' }}>暂无评论</p>
          )}
        </div>
      )}
    </section>
  );
}

export default Comments;
