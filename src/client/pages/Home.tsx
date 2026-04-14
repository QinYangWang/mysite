import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

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
    return (
      <div className="space-y-12">
        <div className="space-y-3">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-5 w-72" />
        </div>
        <div className="space-y-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3 pb-10 border-b border-[rgba(55,53,47,0.09)]">
              <Skeleton className="h-7 w-3/4" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-24 text-center">
        <p className="text-sm text-[#eb5757]">
          出现错误：{error}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="text-4xl mb-3">📚</div>
        <h1 className="text-[2.5rem] font-semibold tracking-tight text-[#37352f]">
          博客
        </h1>
        <p className="text-base text-[#9b9a97] max-w-md">
          记录思考、分享技术与生活。
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-0">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="py-8 border-b border-[rgba(55,53,47,0.09)] first:pt-0 group"
          >
            <Link to={`/${post.slug}`} className="block space-y-3">
              <h2 className="text-xl font-medium text-[#37352f] transition-colors group-hover:text-[#9b9a97] sm:text-[1.375rem]">
                {post.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-[#9b9a97]">
                <time>{new Date(post.date).toLocaleDateString('zh-CN')}</time>
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
              <p className="text-[#37352f]/80 leading-relaxed max-w-xl">
                {post.summary}
              </p>
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <div className="py-24 text-center">
            <div className="text-4xl mb-3">📝</div>
            <p className="text-sm text-[#9b9a97]">
              暂无文章
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
