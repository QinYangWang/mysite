import { Link } from 'react-router-dom';
import { Rss, Lock } from 'lucide-react';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link to="/" className="text-sm font-medium tracking-tight text-white hover:text-white/70 transition-colors">
          MY BLOG
        </Link>

        <nav className="flex items-center gap-6">
          <a
            href="/feed.xml"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors"
            title="RSS Feed"
          >
            <Rss className="h-3.5 w-3.5" />
            RSS
          </a>

          <Link
            to="/admin"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors"
            aria-label="Admin"
          >
            <Lock className="h-3.5 w-3.5" />
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
