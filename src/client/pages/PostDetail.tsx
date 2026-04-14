import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronLeft } from 'lucide-react';
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
      <div className="space-y-10">
        <Skeleton className="h-6 w-24" />
        <div className="space-y-4">
          <Skeleton className="h-14 w-4/5" />
          <Skeleton className="h-4 w-40" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="space-y-8 text-center py-24">
        <p className="text-sm text-[#eb5757]">
          出现错误：{error || '文章不存在'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-[#37352f] hover:text-[#9b9a97] transition-colors underline underline-offset-2"
        >
          <ChevronLeft className="h-4 w-4" />
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-[#9b9a97]">
        <Link to="/" className="hover:text-[#37352f] transition-colors hover:underline underline-offset-2">
          首页
        </Link>
        <span>/</span>
        <span className="text-[#37352f] truncate">{post.title}</span>
      </div>

      {/* Page Header */}
      <div className="space-y-5">
        <div className="text-[2.5rem] leading-none">📝</div>
        <h1 className="text-[2rem] sm:text-[2.5rem] font-semibold tracking-tight text-[#37352f]">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-[#9b9a97]">
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
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-[3px] bg-[#f7f6f3] text-[#37352f]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {post.coverImage && (
          <img
            src={`/api/blog/images/${post.coverImage}`}
            alt={post.title}
            className="w-full object-cover max-h-[24rem] rounded-none"
          />
        )}
      </div>

      {/* Content */}
      <div className="prose-custom">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      {/* Comments */}
      <div className="pt-8 border-t border-[rgba(55,53,47,0.09)]">
        <Comments slug={slug!} />
      </div>
    </article>
  );
}

export default PostDetail;
