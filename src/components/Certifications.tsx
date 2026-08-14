import { Award, ExternalLink, Calendar, BadgeCheck } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';

export default function Certifications() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="section-container">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-sm text-accent-500 mb-2 tracking-widest">05 / CERTIFICATIONS</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 rounded-full mx-auto" />
          <p className="max-w-2xl mx-auto mt-6 text-ink-500 dark:text-ink-400 text-base md:text-lg">
            Continuous learning through online courses and certifications.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`group glass-card p-6 rounded-2xl transition-all duration-700 hover:shadow-2xl hover:shadow-accent-500/10 hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-accent-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-white dark:border-ink-950">
                  <BadgeCheck className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-base mb-1 leading-tight group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm font-medium text-ink-600 dark:text-ink-400 mb-2">{cert.issuer}</p>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-xs text-ink-400 mb-4">
                <Calendar className="w-3.5 h-3.5" />
                <span>{cert.date}</span>
              </div>

              {/* Link */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-600 dark:text-accent-400 hover:gap-2.5 transition-all"
                >
                  View Certificate
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
