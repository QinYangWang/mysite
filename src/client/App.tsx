import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Admin from './pages/Admin';
import Graph from './pages/Graph';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <div className="min-h-screen bg-background flex font-sans text-foreground transition-colors">
      {/* Desktop Sidebar */}
      <Sidebar workspaceName="我的博客" className="hidden md:flex" />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 w-[260px] bg-sidebar z-50 md:hidden shadow-lg">
            <Sidebar workspaceName="我的博客" className="flex" />
          </div>
        </>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-end px-6 py-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-foreground" />
            ) : (
              <Sun className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-30 flex items-center justify-between gap-3 px-4 py-3 bg-background border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 rounded-[6px] hover:bg-sidebar-accent transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-sidebar-foreground" />
            </button>
            <span className="text-sm font-medium text-foreground">我的博客</span>
          </div>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-[6px] hover:bg-sidebar-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-foreground" />
            ) : (
              <Sun className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        <main className="flex-1 w-full max-w-[900px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<PostDetail />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/analytics" element={<Admin />} />
            <Route path="/graph" element={<Graph />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
