import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
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
          path: `/${slug}`,
          referrer: document.referrer || undefined,
          userAgent: navigator.userAgent,
        }),
      }).catch(() => {});
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="space-y-16">
        <Skeleton className="h-16 w-4/5" />
        <Skeleton className="h-4 w-40" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="space-y-10 text-center py-24">
        <p className="font-mono text-sm uppercase tracking-wider text-[#D71921]">
          Error: {error || '文章不存在'}
        </p>
        <Button variant="outline" asChild className="rounded-none">
          <Link to="/">返回首页</Link>
        </Button>
      </div>
    );
 }

  return (
    <article className="space-y-20">
      <div className="space-y-8">
        <Button variant="ghost" size="sm" className="group -ml-3 px-3 py-2 h-auto" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            返回
          </Link>
        </Button>

        <div className="space-y-6">
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-white/40">
            <time>
              {new Date(post.date).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.tags.length > 0 && (
              <>
                <span>·</span>
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {post.coverImage && (
          <img
            src={`/api/blog/images/${post.coverImage}`}
            alt={post.title}
            className="w-full border border-white/10 object-cover max-h-[24rem]"
          />
        )}
      </div>

      <div className="prose-custom">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      <div className="pt-8 border-t border-white/10">
        <Comments slug={slug!} />
      </div>
    </article>
  );
}

export default PostDetail;
