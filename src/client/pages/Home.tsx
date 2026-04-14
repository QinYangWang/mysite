import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const urlTag = searchParams.get('tag') || '';

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blog/posts?limit=100');
        const data = await res.json();
        if (data.success) setPosts(data.data);
        else setError(data.error || 'Failed to fetch posts');
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: '/', referrer: document.referrer || undefined, userAgent: navigator.userAgent }),
    }).catch(() => {});
  }, []);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (urlTag) {
      result = result.filter((p) => p.tags.includes(urlTag));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((p) => {
        const text = `${p.title} ${p.summary || ''} ${p.tags.join(' ')}`.toLowerCase();
        return text.includes(q);
      });
    }
    return result;
  }, [posts, urlTag, search]);

  if (loading) {
    return (
      <div className="space-y-12">
        <div className="space-y-3">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-5 w-72" />
        </div>
        <div className="space-y-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3 pb-10 border-b border-border">
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
        <p className="text-sm text-[#eb5757]">出现错误：{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="text-4xl mb-3">📚</div>
        <h1 className="text-[2.5rem] font-semibold tracking-tight text-foreground">博客</h1>
        <p className="text-base text-muted-foreground max-w-md">记录思考、分享技术与生活。</p>
      </div>

      {/* Search & Tags */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索文章..."
            className="pl-9 pr-8"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary rounded">
              <X className="h-3 w-3 text-muted-foreground" />
            </button>
          )}
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSearchParams({})}
              className={`px-2.5 py-1 text-xs rounded-[3px] border transition-colors ${
                !urlTag ? 'bg-foreground text-background border-foreground' : 'bg-transparent text-foreground border-border hover:bg-secondary'
              }`}
            >
              全部
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchParams({ tag })}
                className={`px-2.5 py-1 text-xs rounded-[3px] border transition-colors ${
                  urlTag === tag ? 'bg-foreground text-background border-foreground' : 'bg-transparent text-foreground border-border hover:bg-secondary'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Posts List */}
      <div className="space-y-0">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="py-8 border-b border-border first:pt-0 group">
            <Link to={`/${post.slug}`} className="block space-y-3">
              <h2 className="text-xl font-medium text-foreground transition-colors group-hover:text-muted-foreground sm:text-[1.375rem]">
                {post.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <time>{new Date(post.date).toLocaleDateString('zh-CN')}</time>
                {post.tags.length > 0 && (
                  <>
                    <span>·</span>
                    <div className="flex flex-wrap items-center gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs rounded-[3px] bg-secondary text-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <p className="text-foreground/80 leading-relaxed max-w-xl">{post.summary}</p>
            </Link>
          </article>
        ))}

        {filteredPosts.length === 0 && (
          <div className="py-24 text-center">
            <div className="text-4xl mb-3">📝</div>
            <p className="text-sm text-muted-foreground">暂无文章</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
