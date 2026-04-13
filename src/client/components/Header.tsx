import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          My Blog
        </Link>
        <nav className="nav">
          <Link to="/">首页</Link>
          <a href="/feed.xml" className="rss-link" title="RSS Feed">
            📄 RSS
          </a>
          <Link to="/admin">管理</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
