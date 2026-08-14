import { Code, Palette, Braces, Atom, Wind, Terminal, FileCode, Coffee, Database, GitBranch, Code2, Smartphone, type LucideIcon } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, LucideIcon> = {
  Code, Palette, Braces, Atom, Wind, Terminal, FileCode, Coffee, Database, GitBranch, Code2, Smartphone,
};

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-ink-100/50 dark:bg-ink-900/30">
      <div className="section-container">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-sm text-accent-500 mb-2 tracking-widest">02 / SKILLS</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 rounded-full mx-auto" />
          <p className="max-w-2xl mx-auto mt-6 text-ink-500 dark:text-ink-400 text-base md:text-lg">
            A growing toolkit of technologies I use to bring ideas to life on the web.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`glass-card p-6 rounded-2xl transition-all duration-700 hover:shadow-xl hover:shadow-accent-500/5 hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center">
                  <Code className="w-4 h-4 text-accent-500" />
                </span>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill.icon] || Code;
                  const delay = skillIndex * 100;
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-ink-400 dark:text-ink-500" />
                          <span className="text-sm font-medium text-ink-700 dark:text-ink-300">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono text-ink-400 dark:text-ink-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-ink-200 dark:bg-ink-800 overflow-hidden">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${delay + catIndex * 150}ms`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
