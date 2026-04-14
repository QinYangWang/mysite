function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-10">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-[11px] font-mono uppercase tracking-wider text-white/40">
          © {new Date().getFullYear()} My Blog
        </p>
      </div>
    </footer>
  );
}

export default Footer;
