import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="min-h-screen bg-black text-white/90 flex flex-col font-sans">
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<PostDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/analytics" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
