import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
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
      <div className="space-y-20">
        <div className="space-y-4">
          <Skeleton className="h-16 w-48" />
          <Skeleton className="h-5 w-80" />
        </div>
        <div className="space-y-16">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-4 pb-16 border-b border-white/10">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-32" />
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
        <p className="font-mono text-sm uppercase tracking-wider text-[#D71921]">
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-24">
      <div className="space-y-4">
        <h1 className="text-5xl font-medium tracking-tight text-white sm:text-6xl">
          博客
        </h1>
        <p className="text-lg text-white/60 max-w-md">
          记录思考、分享技术与生活。
        </p>
      </div>

      <div className="space-y-0">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="py-12 border-b border-white/10 first:pt-0"
          >
            <Link to={`/${post.slug}`} className="group block space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-white/70 sm:text-3xl">
                {post.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-white/40">
                <time>{new Date(post.date).toLocaleDateString('zh-CN')}</time>
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
              <p className="text-base text-white/60 leading-relaxed max-w-xl">
                {post.summary}
              </p>
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-mono text-sm uppercase tracking-wider text-white/40">
              暂无文章
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
