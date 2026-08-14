import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 dark:bg-ink-950/80 backdrop-blur-xl border-b border-ink-200/60 dark:border-ink-800/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-accent-500/30 group-hover:scale-110 transition-transform duration-300">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
            Vaishno<span className="text-accent-500">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-ink-200 dark:border-ink-800 hover:border-accent-500 hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all duration-300"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-ink-700" />
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-ink-200 dark:border-ink-800 hover:border-accent-500 transition-all duration-300"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-container py-4 flex flex-col gap-1 bg-white/90 dark:bg-ink-950/90 backdrop-blur-xl border-t border-ink-200/60 dark:border-ink-800/60">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? 'bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400'
                  : 'text-ink-600 dark:text-ink-400 hover:bg-ink-100 dark:hover:bg-ink-900'
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
