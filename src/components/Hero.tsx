import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, MapPin } from 'lucide-react';
import { profileData } from '@/data/portfolio';

const roles = [
  'Web Development Learner',
  'Frontend Developer',
  'B.Tech CS Student',
  'Problem Solver',
];

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedRole(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-400/20 dark:bg-accent-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400/15 dark:bg-cyan-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern -z-10" />

      <div className="section-container text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-down opacity-0-init" style={{ animationFillMode: 'forwards' }}>
          <Sparkles className="w-4 h-4 text-accent-500" />
          <span className="text-sm font-medium text-ink-600 dark:text-ink-400">Welcome to my portfolio</span>
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4 animate-fade-in-up opacity-0-init animate-delay-200" style={{ animationFillMode: 'forwards' }}>
          <span className="block text-ink-900 dark:text-white">Kothanuru</span>
          <span className="block gradient-text-animated text-shadow-glow">Vaishno Devi</span>
        </h1>

        {/* Typing role */}
        <div className="h-8 mb-6 animate-fade-in-up opacity-0-init animate-delay-400" style={{ animationFillMode: 'forwards' }}>
          <p className="text-lg md:text-xl font-mono text-ink-600 dark:text-ink-400">
            <span className="text-accent-500">&gt;</span> {displayedRole}
            <span className="inline-block w-0.5 h-5 bg-accent-500 ml-1 animate-pulse" />
          </p>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-ink-500 dark:text-ink-400 leading-relaxed mb-8 animate-fade-in-up opacity-0-init animate-delay-500" style={{ animationFillMode: 'forwards' }}>
          {profileData.tagline}. Currently learning modern web technologies and building projects that make a difference.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 mb-10 text-sm text-ink-500 dark:text-ink-500 animate-fade-in-up opacity-0-init animate-delay-700" style={{ animationFillMode: 'forwards' }}>
          <MapPin className="w-4 h-4" />
          <span>{profileData.location}</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up opacity-0-init animate-delay-1000" style={{ animationFillMode: 'forwards' }}>
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary">
            View My Work
            <ArrowDown className="w-4 h-4" />
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-ghost">
            Get In Touch
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-10 animate-fade-in opacity-0-init animate-delay-1000" style={{ animationFillMode: 'forwards' }}>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 rounded-xl glass-card flex items-center justify-center hover:scale-110 hover:border-accent-500 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-ink-600 dark:text-ink-400 group-hover:text-accent-500 transition-colors" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 rounded-xl glass-card flex items-center justify-center hover:scale-110 hover:border-accent-500 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-ink-600 dark:text-ink-400 group-hover:text-accent-500 transition-colors" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Email"
            className="w-11 h-11 rounded-xl glass-card flex items-center justify-center hover:scale-110 hover:border-accent-500 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-ink-600 dark:text-ink-400 group-hover:text-accent-500 transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 rounded-full border-2 border-ink-300 dark:border-ink-700 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
