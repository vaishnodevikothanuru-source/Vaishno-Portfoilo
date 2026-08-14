import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, Filter, GitFork, Loader2, AlertCircle } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

const categoryOrder = ['All', 'Web Development', 'Programming'];

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [activeFilter, setActiveFilter] = useState('All');
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [githubLoading, setGithubLoading] = useState(true);
  const [githubError, setGithubError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/vaishnodevi/repos?sort=updated&per_page=6');
        if (!res.ok) throw new Error('Failed to fetch');
        const data: GitHubRepo[] = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setGithubRepos(data);
        } else {
          setGithubError(true);
        }
      } catch {
        setGithubError(true);
      } finally {
        setGithubLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-sm text-accent-500 mb-2 tracking-widest">03 / PROJECTS</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 rounded-full mx-auto" />
          <p className="max-w-2xl mx-auto mt-6 text-ink-500 dark:text-ink-400 text-base md:text-lg">
            A collection of projects I've built while learning and exploring web development.
          </p>
        </div>

        {/* Filter buttons */}
        <div ref={ref} className={`flex flex-wrap items-center justify-center gap-3 mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Filter className="w-4 h-4 text-ink-400 mr-1" />
          {categoryOrder.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-accent-500 to-cyan-500 text-white shadow-lg shadow-accent-500/25 scale-105'
                  : 'glass-card text-ink-600 dark:text-ink-400 hover:scale-105 hover:border-accent-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* GitHub Repos Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-ink-900 dark:bg-ink-100 flex items-center justify-center">
              <Github className="w-5 h-5 text-white dark:text-ink-900" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl">Latest from GitHub</h3>
              <p className="text-sm text-ink-500 dark:text-ink-500">Live data from my repositories</p>
            </div>
          </div>

          {githubLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 text-accent-500 animate-spin" />
            </div>
          ) : githubError ? (
            <div className="glass-card rounded-2xl p-8 text-center">
              <AlertCircle className="w-8 h-8 text-ink-400 mx-auto mb-3" />
              <p className="text-ink-500 dark:text-ink-400 text-sm">
                GitHub repositories will appear here once available. Connect a GitHub account to see live project data.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {githubRepos.slice(0, 6).map((repo, i) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card p-5 rounded-2xl hover:shadow-xl hover:shadow-accent-500/5 hover:-translate-y-1 transition-all duration-500 group ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-sm text-accent-600 dark:text-accent-400 group-hover:underline truncate pr-2">
                      {repo.name}
                    </h4>
                    <ExternalLink className="w-4 h-4 text-ink-400 shrink-0 group-hover:text-accent-500 transition-colors" />
                  </div>
                  <p className="text-xs text-ink-500 dark:text-ink-500 mb-4 line-clamp-2 min-h-[2rem]">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-ink-400">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  return (
    <div
      className={`group glass-card rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-accent-500/10 hover:-translate-y-2 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Card header with gradient */}
      <div className="relative h-32 bg-gradient-to-br from-accent-500 via-cyan-500 to-blue-500 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
              <Star className="w-3 h-3" />
              Featured
            </span>
          )}
          <span className="ml-auto text-white/80 text-xs font-mono">{project.category}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="font-display font-bold text-lg mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag-accent">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-ink-200/60 dark:border-ink-800/60">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-600 dark:text-ink-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-600 dark:text-ink-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
