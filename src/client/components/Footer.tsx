function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(55,53,47,0.09)] py-6 mt-auto">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <p className="text-xs text-[#9b9a97]">
          © {new Date().getFullYear()} 我的博客
        </p>
      </div>
    </footer>
  );
}

export default Footer;
