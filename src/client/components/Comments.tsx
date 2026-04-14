import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

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
    <section className="space-y-12">
      <div className="space-y-2">
        <h3 className="text-lg font-medium tracking-tight">评论</h3>
        <p className="text-xs font-mono uppercase tracking-wider text-white/40">
          {comments.length} COMMENTS
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
        <div className="space-y-2">
          <Label htmlFor="comment-email" className="text-xs font-mono uppercase tracking-wider text-white/50">
            Email
          </Label>
          <Input
            id="comment-email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="comment-content" className="text-xs font-mono uppercase tracking-wider text-white/50">
            Comment
          </Label>
          <Textarea
            id="comment-content"
            placeholder="写下你的想法..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={4}
            className="resize-none"
          />
        </div>

        {message && (
          <div
            className={`font-mono text-xs uppercase tracking-wider ${
              message.includes('提交') && !message.includes('失败')
                ? 'text-white/70'
                : 'text-[#D71921]'
            }`}
          >
            {message}
          </div>
        )}

        <Button type="submit" disabled={submitting} className="rounded-none">
          <Send className="mr-2 h-4 w-4" />
          {submitting ? '提交中...' : '提交评论'}
        </Button>
      </form>

      {loading ? (
        <p className="text-xs font-mono uppercase tracking-wider text-white/40">加载评论中...</p>
      ) : (
        <div className="space-y-8">
          {comments.map((comment) => (
            <div key={comment.id} className="space-y-2">
              <p className="text-base text-white/90 leading-relaxed">{comment.content}</p>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-white/40">
                <span>{comment.email}</span>
                <span>·</span>
                <time>{new Date(comment.created_at).toLocaleDateString('zh-CN')}</time>
              </div>
            </div>
          ))}

          {comments.length === 0 && (
            <p className="text-xs font-mono uppercase tracking-wider text-white/40">
              暂无评论，来发表第一条评论吧
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default Comments;
