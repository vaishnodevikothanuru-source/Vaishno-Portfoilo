import { User, Target, Heart, Sparkles } from 'lucide-react';
import { profileData, achievements } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-sm text-accent-500 mb-2 tracking-widest">01 / ABOUT</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 rounded-full mx-auto" />
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left: Avatar / Visual */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative group">
              {/* Decorative gradient ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-400 to-cyan-400 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative glass-card p-8 rounded-3xl">
                {/* Avatar */}
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-accent-500 via-cyan-500 to-blue-500 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <span className="font-display font-extrabold text-7xl text-white relative z-10">
                    VD
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Quick info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <User className="w-4 h-4 text-accent-500 shrink-0" />
                    <span className="text-ink-500 dark:text-ink-400">B.Tech CS Student</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Target className="w-4 h-4 text-accent-500 shrink-0" />
                    <span className="text-ink-500 dark:text-ink-400">Frontend Developer</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Heart className="w-4 h-4 text-accent-500 shrink-0" />
                    <span className="text-ink-500 dark:text-ink-400">Web Development Learner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: About text */}
          <div className={`lg:col-span-3 space-y-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight">
              Crafting digital experiences with{' '}
              <span className="gradient-text">passion & precision</span>
            </h3>

            <div className="space-y-4">
              {profileData.about.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-ink-600 dark:text-ink-400 leading-relaxed text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Achievements */}
            <div className="pt-4">
              <h4 className="flex items-center gap-2 font-display font-semibold text-lg mb-4">
                <Sparkles className="w-5 h-5 text-accent-500" />
                Key Highlights
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl glass-card transition-all duration-500 hover:scale-105 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0" />
                    <span className="text-sm text-ink-600 dark:text-ink-400">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
