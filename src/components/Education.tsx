import { GraduationCap, School, BookOpen, CheckCircle2, Clock, Circle } from 'lucide-react';
import { education } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';

const statusConfig = {
  ongoing: { icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-300 dark:border-amber-700', label: 'Ongoing' },
  completed: { icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-300 dark:border-emerald-700', label: 'Completed' },
  planned: { icon: Circle, color: 'text-ink-400', bg: 'bg-ink-50 dark:bg-ink-900', border: 'border-ink-300 dark:border-ink-700', label: 'Planned' },
};

const levelIcons = [GraduationCap, School, BookOpen];

export default function Education() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="education" className="py-24 md:py-32 relative bg-ink-100/50 dark:bg-ink-900/30">
      <div className="section-container">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-sm text-accent-500 mb-2 tracking-widest">04 / EDUCATION</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Education <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 rounded-full mx-auto" />
          <p className="max-w-2xl mx-auto mt-6 text-ink-500 dark:text-ink-400 text-base md:text-lg">
            My academic path and the institutions that shaped my learning.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-cyan-400 to-transparent md:-translate-x-1/2" />

          {education.map((item, i) => {
            const StatusIcon = statusConfig[item.status].icon;
            const LevelIcon = levelIcons[i] || BookOpen;
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-ink-950 border-2 border-accent-500 flex items-center justify-center md:-translate-x-1/2 z-10 shadow-lg shadow-accent-500/20">
                  <LevelIcon className="w-4 h-4 text-accent-500" />
                </div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                  <div className="glass-card p-6 rounded-2xl hover:shadow-xl hover:shadow-accent-500/5 hover:-translate-y-1 transition-all duration-500">
                    {/* Status badge */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusConfig[item.status].bg} ${statusConfig[item.status].color} border ${statusConfig[item.status].border} mb-3`}>
                      <StatusIcon className="w-3.5 h-3.5" />
                      {statusConfig[item.status].label}
                    </div>

                    {/* Period */}
                    <p className="font-mono text-sm text-accent-500 mb-2">{item.period}</p>

                    {/* Degree */}
                    <h3 className="font-display font-bold text-lg mb-1">{item.degree}</h3>

                    {/* Institution */}
                    <p className="text-sm font-medium text-ink-600 dark:text-ink-400 mb-3">{item.institution}</p>

                    {/* Description */}
                    <p className="text-sm text-ink-500 dark:text-ink-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
