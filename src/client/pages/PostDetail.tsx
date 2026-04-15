import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { ChevronLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import Comments from '../components/Comments';
import 'katex/dist/katex.min.css';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  coverImage?: string;
}

interface Heading {
  level: number;
  text: string;
  id: string;
}

interface GraphNode {
  id: string;
  title: string;
  tags: string[];
}

interface GraphLink {
  source: string;
  target: string;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

// Parse callout syntax: > [!type] title\n> content...
function parseCallout(text: string): { type: string; title: string; content: string } | null {
  const match = text.match(/^\[!\s*(\w+)\s*\]\s*(.*)?\n?/);
  if (!match) return null;
  return {
    type: match[1].toLowerCase(),
    title: match[2] || match[1].toUpperCase(),
    content: text.slice(match[0].length).replace(/^>\s?/gm, ''),
  };
}

const calloutIcons: Record<string, string> = {
  note: '📓',
  tip: '💡',
  warning: '⚠️',
  danger: '🚨',
  info: 'ℹ️',
  quote: '“',
};

const calloutColors: Record<string, string> = {
  note: 'border-l-blue-400 bg-blue-50/40 dark:bg-blue-900/20',
  tip: 'border-l-green-400 bg-green-50/40 dark:bg-green-900/20',
  warning: 'border-l-amber-400 bg-amber-50/40 dark:bg-amber-900/20',
  danger: 'border-l-red-400 bg-red-50/40 dark:bg-red-900/20',
  info: 'border-l-cyan-400 bg-cyan-50/40 dark:bg-cyan-900/20',
  quote: 'border-l-gray-400 bg-gray-50/40 dark:bg-gray-900/20',
};

function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeHeading, setActiveHeading] = useState<string>('');
  const [backlinks, setBacklinks] = useState<GraphNode[]>([]);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      try {
        const res = await fetch(`/api/blog/posts/${slug}`);
        const data = await res.json();
        if (data.success) setPost(data.data);
        else setError(data.error || 'Post not found');
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (slug) {
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: `/${slug}`, referrer: document.referrer || undefined, userAgent: navigator.userAgent }),
      }).catch(() => {});
    }
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    fetch('/api/blog/graph-data')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const graph: GraphData = data.data;
          const incoming = graph.links
            .filter((link) => link.target === slug)
            .map((link) => graph.nodes.find((n) => n.id === link.source))
            .filter(Boolean) as GraphNode[];
          setBacklinks(incoming);
        }
      })
      .catch(() => {});
  }, [slug]);

  const headings = useMemo<Heading[]>(() => {
    if (!post) return [];
    const lines = post.content.split('\n');
    const result: Heading[] = [];
    lines.forEach((line) => {
      const match = line.match(/^(#{2,4})\s+(.+)$/);
      if (match) {
        const id = match[2].trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\u4e00-\u9fa5-]/g, '');
        result.push({ level: match[1].length, text: match[2].trim(), id });
      }
    });
    return result;
  }, [post]);

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
        <p className="text-sm text-[#eb5757]">出现错误：{error || '文章不存在'}</p>
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-foreground hover:text-muted-foreground transition-colors underline underline-offset-2">
          <ChevronLeft className="h-4 w-4" />
          返回首页
        </Link>
      </div>
    );
  }

  const markdownComponents = {
    h2: ({ children }: any) => {
      const id = String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\u4e00-\u9fa5-]/g, '');
      return <h2 id={id} className="text-[1.5rem] font-semibold tracking-tight text-foreground mt-10 mb-4">{children}</h2>;
    },
    h3: ({ children }: any) => {
      const id = String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\u4e00-\u9fa5-]/g, '');
      return <h3 id={id} className="text-[1.25rem] font-semibold tracking-tight text-foreground mt-8 mb-3">{children}</h3>;
    },
    h4: ({ children }: any) => {
      const id = String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\u4e00-\u9fa5-]/g, '');
      return <h4 id={id} className="text-base font-semibold tracking-tight text-foreground mt-6 mb-2">{children}</h4>;
    },
    blockquote: ({ children }: any) => {
      // Check if first child is a paragraph with callout syntax
      const first = children?.[0]?.props?.children;
      const text = typeof first === 'string' ? first : Array.isArray(first) ? first.join('') : '';
      const callout = typeof text === 'string' ? parseCallout(text) : null;
      if (callout) {
        const colorClass = calloutColors[callout.type] || calloutColors.note;
        return (
          <div className={`my-4 rounded-[3px] border-l-4 p-4 ${colorClass}`}>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-1">
              <span>{calloutIcons[callout.type] || calloutIcons.note}</span>
              <span>{callout.title}</span>
            </div>
            <div className="text-[#37352f] dark:text-foreground/90 text-sm leading-relaxed whitespace-pre-line">{callout.content}</div>
          </div>
        );
      }
      return <blockquote className="border-l-4 border-border pl-4 italic text-muted-foreground my-4">{children}</blockquote>;
    },
    code({ inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      const lang = match?.[1];
      if (lang === 'mermaid') {
        return <MermaidBlock content={String(children).replace(/\n$/, '')} />;
      }
      return (
        <code className={`${inline ? 'px-1.5 py-0.5 text-sm rounded-[3px] bg-secondary text-[#eb5757]' : 'block'} ${className || ''}`} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children }: any) => {
      // Don't wrap mermaid in pre styling
      if (children?.props?.className?.includes('language-mermaid')) {
        return <>{children}</>;
      }
      return <pre className="rounded-[3px] border border-border bg-secondary p-4 overflow-x-auto my-4 font-mono text-sm">{children}</pre>;
    },
  };

  return (
    <article className="space-y-10 relative">
      {/* TOC Sidebar - Desktop */}
      {headings.length > 0 && (
        <aside className="hidden xl:block fixed left-[calc(50%+470px)] top-32 w-56 max-h-[70vh] overflow-y-auto">
          <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">本页大纲</p>
          <nav className="space-y-1 border-l border-border">
            {headings.map((h) => (
              <button
                key={h.id}
                onClick={() => scrollToHeading(h.id)}
                className={`block text-left text-sm transition-colors hover:text-foreground ${
                  activeHeading === h.id ? 'text-foreground font-medium' : 'text-muted-foreground'
                } ${h.level === 2 ? 'pl-3' : h.level === 3 ? 'pl-6' : 'pl-9'}`}
              >
                {h.text}
              </button>
            ))}
          </nav>
        </aside>
      )}

      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors hover:underline underline-offset-2">首页</Link>
        <span>/</span>
        <span className="text-foreground truncate">{post.title}</span>
      </div>

      {/* Page Header */}
      <div className="space-y-5">
        <div className="text-[2.5rem] leading-none">📝</div>
        <h1 className="text-[2rem] sm:text-[2.5rem] font-semibold tracking-tight text-foreground">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <time>
            {new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
          {post.tags.length > 0 && (
            <>
              <span>·</span>
              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <Link key={tag} to={`/?tag=${encodeURIComponent(tag)}`} className="px-2 py-0.5 text-xs rounded-[3px] bg-secondary text-foreground hover:bg-secondary/80">
                    {tag}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
        {post.coverImage && (
          <img src={`/api/blog/images/${post.coverImage}`} alt={post.title} className="w-full object-cover max-h-[24rem] rounded-none" />
        )}
      </div>

      {/* Content */}
      <div className="prose-custom">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={markdownComponents}>
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Backlinks */}
      {backlinks.length > 0 && (
        <div className="pt-8 border-t border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">反向链接</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {backlinks.map((node) => (
              <Link
                key={node.id}
                to={`/blog/${node.id}`}
                className="group block rounded-[6px] border border-border bg-secondary p-4 hover:bg-secondary/80 transition-colors"
              >
                <div className="font-medium text-foreground group-hover:underline underline-offset-2">{node.title}</div>
                {node.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {node.tags.map((tag) => (
                      <span key={tag} className="px-1.5 py-0.5 text-[10px] rounded-[3px] bg-background text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Comments */}
      <div className="pt-8 border-t border-border">
        <Comments slug={slug!} />
      </div>
    </article>
  );
}

function MermaidBlock({ content }: { content: string }) {
  const [svg, setSvg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    import('mermaid').then((m) => {
      m.default.initialize({ startOnLoad: false, theme: isDark ? 'dark' : 'default' });
      m.default.render(`mermaid-${Math.random().toString(36).slice(2)}`, content).then((result) => {
        if (mounted) setSvg(result.svg);
      }).catch((e) => {
        if (mounted) setErr(String(e));
      });
    });
    return () => { mounted = false; };
  }, [content]);

  if (err) return <div className="text-sm text-[#eb5757]">Mermaid render error: {err}</div>;
  if (!svg) return <div className="text-sm text-muted-foreground">Rendering diagram...</div>;
  return <div className="my-4 overflow-x-auto" dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default PostDetail;
