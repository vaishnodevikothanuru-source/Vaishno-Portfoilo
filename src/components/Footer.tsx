import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from 'lucide-react';
import { profileData } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-ink-200/60 dark:border-ink-800/60 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-accent-500/20">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-sm">Kothanuru Vaishno Devi</p>
              <p className="text-xs text-ink-400">B.Tech CS Student & Web Developer</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:scale-110 hover:border-accent-500 transition-all duration-300 group">
              <Github className="w-4 h-4 text-ink-600 dark:text-ink-400 group-hover:text-accent-500 transition-colors" />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:scale-110 hover:border-accent-500 transition-all duration-300 group">
              <Linkedin className="w-4 h-4 text-ink-600 dark:text-ink-400 group-hover:text-accent-500 transition-colors" />
            </a>
            <a href={`mailto:${profileData.email}`} aria-label="Email" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:scale-110 hover:border-accent-500 transition-all duration-300 group">
              <Mail className="w-4 h-4 text-ink-600 dark:text-ink-400 group-hover:text-accent-500 transition-colors" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-accent-500/20 hover:scale-110 transition-transform duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-ink-200/40 dark:border-ink-800/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-400">
          <p>&copy; {new Date().getFullYear()} Kothanuru Vaishno Devi. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
