import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, FileText, Home, Rss, Settings, GitGraph } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PostMeta {
  slug: string;
  title: string;
}

interface SidebarProps {
  workspaceName?: string;
  className?: string;
}

function Sidebar({ workspaceName = '我的博客', className }: SidebarProps) {
  const location = useLocation();
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [postsOpen, setPostsOpen] = useState(true);

  useEffect(() => {
    fetch('/api/blog/posts?limit=50')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={cn("w-[240px] shrink-0 flex-col bg-sidebar h-screen sticky top-0 overflow-y-auto border-r border-sidebar-border", className)}>
      {/* Workspace Header */}
      <div className="flex items-center gap-2 px-4 py-3 hover:bg-sidebar-accent cursor-pointer transition-colors">
        <div className="h-5 w-5 rounded-[3px] bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground text-[10px] font-medium">
          {workspaceName.charAt(0)}
        </div>
        <span className="flex-1 text-sm font-medium text-sidebar-foreground truncate">{workspaceName}</span>
        <ChevronDown className="h-3 w-3 text-muted-foreground" />
      </div>

      {/* Navigation Tree */}
      <nav className="flex-1 px-2 py-1">
        {/* Home */}
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2 rounded-[3px] px-2 py-1.5 text-sm transition-colors",
            isActive('/') ? "bg-sidebar-accent text-sidebar-foreground font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent"
          )}
        >
          <Home className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span className="truncate">首页</span>
        </Link>

        {/* Posts Group */}
        <div className="mt-1">
          <button
            onClick={() => setPostsOpen(!postsOpen)}
            className="w-full flex items-center gap-1 rounded-[3px] px-2 py-1 text-sm text-muted-foreground hover:bg-sidebar-accent transition-colors"
          >
            <ChevronDown className={cn("h-3 w-3 shrink-0 transition-transform", !postsOpen && "-rotate-90")} />
            <span className="truncate">文章</span>
          </button>
          {postsOpen && (
            <div className="mt-0.5 space-y-0.5">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/${post.slug}`}
                  className={cn(
                    "flex items-center gap-2 rounded-[3px] px-2 py-1 pl-7 text-sm transition-colors",
                    isActive(`/${post.slug}`)
                      ? "bg-sidebar-accent text-sidebar-foreground font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  )}
                >
                  <FileText className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  <span className="truncate">{post.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Graph */}
        <Link
          to="/graph"
          className={cn(
            "flex items-center gap-2 rounded-[3px] px-2 py-1.5 text-sm transition-colors mt-1",
            isActive('/graph') ? "bg-sidebar-accent text-sidebar-foreground font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent"
          )}
        >
          <GitGraph className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span className="truncate">图谱</span>
        </Link>

        {/* Admin */}
        <Link
          to="/admin"
          className={cn(
            "flex items-center gap-2 rounded-[3px] px-2 py-1.5 text-sm transition-colors mt-1",
            isActive('/admin') ? "bg-sidebar-accent text-sidebar-foreground font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent"
          )}
        >
          <Settings className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span className="truncate">管理后台</span>
        </Link>
      </nav>

      {/* Footer Actions */}
      <div className="px-2 py-2 border-t border-sidebar-border space-y-0.5">
        <a
          href="/feed.xml"
          className="flex items-center gap-2 rounded-[3px] px-2 py-1 text-sm text-muted-foreground hover:bg-sidebar-accent transition-colors"
        >
          <Rss className="h-4 w-4 shrink-0" />
          <span>RSS 订阅</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
