import { Download } from 'lucide-react';
import { downloadResume } from '@/lib/resume';

export default function ResumeButton() {
  return (
    <button
      onClick={downloadResume}
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
      aria-label="Download Resume"
    >
      <Download className="w-4 h-4 group-hover:animate-bounce" />
      <span className="hidden sm:inline">Resume</span>
    </button>
  );
}
