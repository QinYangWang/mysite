import { Link } from 'react-router-dom';
import { Home, FileQuestion } from 'lucide-react';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 rounded-full bg-secondary p-6">
        <FileQuestion className="h-12 w-12 text-muted-foreground" />
      </div>
      <h1 className="text-[2rem] font-semibold tracking-tight text-foreground mb-2">404</h1>
      <p className="text-muted-foreground mb-8 max-w-xs">
        页面不存在或已被移除。
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
      >
        <Home className="h-4 w-4" />
        返回首页
      </Link>
    </div>
  );
}

export default NotFound;
