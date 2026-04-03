export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-8 z-50 text-white">
      <a href="/" className="text-xs tracking-widest uppercase hover:text-gray-400 transition-colors">
        KARTj
      </a>
      <nav className="flex gap-8 text-[10px] tracking-widest">
        <a href="/work" className="hover:text-gray-400 transition-colors">
          PROJECTS
        </a>
        <a href="/journal" className="hover:text-gray-400 transition-colors">
          JOURNAL
        </a>
        <a href="/about" className="hover:text-gray-400 transition-colors">
          ABOUT
        </a>
      </nav>
    </header>
  );
}
