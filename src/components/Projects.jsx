import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const colorMap = {
  cyan: { accent: '#00f5ff', glow: 'rgba(0,245,255,0.15)', border: 'rgba(0,245,255,0.2)' },
  blue: { accent: '#0066ff', glow: 'rgba(0,102,255,0.15)', border: 'rgba(0,102,255,0.2)' },
  purple: { accent: '#7b2fff', glow: 'rgba(123,47,255,0.15)', border: 'rgba(123,47,255,0.2)' },
  pink: { accent: '#ff2d78', glow: 'rgba(255,45,120,0.15)', border: 'rgba(255,45,120,0.2)' },
  green: { accent: '#00ff88', glow: 'rgba(0,255,136,0.15)', border: 'rgba(0,255,136,0.2)' },
};

const filters = ['All', 'Full Stack', 'Blockchain', 'Real Client', 'Flagship'];

function ProjectCard({ project, index }) {
  const colors = colorMap[project.color];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative border clip-corner p-6 h-full flex flex-col"
      style={{
        borderColor: colors.border,
        background: `linear-gradient(135deg, ${colors.glow}, rgba(10,10,18,0.8))`,
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-0 right-6 px-3 py-0.5 text-xs font-mono font-semibold"
          style={{ background: colors.accent, color: '#050508' }}>
          FEATURED
        </div>
      )}

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)` }} />

      {/* Icon & type */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{project.icon}</span>
        <span className="font-mono text-xs px-2 py-0.5 rounded"
          style={{ color: colors.accent, border: `1px solid ${colors.border}`, background: colors.glow }}>
          {project.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-white font-semibold text-base mb-3 leading-snug group-hover:transition-colors duration-300"
        style={{ '--accent': colors.accent }}>
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-cyber-text/60 text-sm leading-relaxed mb-5 flex-1">
        {project.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map(tag => (
          <span key={tag} className="font-mono text-xs px-2 py-0.5"
            style={{ color: `${colors.accent}80`, border: `1px solid ${colors.border}`, background: `${colors.glow}` }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Link area */}
      <div className="flex items-center gap-3 pt-4 border-t"
        style={{ borderColor: colors.border }}>
        <a href="https://github.com/Shebie" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono transition-colors"
          style={{ color: `${colors.accent}80` }}
          onMouseEnter={e => e.currentTarget.style.color = colors.accent}
          onMouseLeave={e => e.currentTarget.style.color = `${colors.accent}80`}>
          <Github size={14} />
          Source
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView(0.05);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.type === activeFilter);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-cyber-cyan" />
            <span className="font-mono text-cyber-cyan text-xs tracking-[0.3em] uppercase">Projects</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-wider">
            MY WORK
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map(filter => (
            <button key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-mono text-xs px-4 py-1.5 clip-corner-sm transition-all duration-200
                ${activeFilter === filter
                  ? 'bg-cyber-cyan text-cyber-black font-semibold'
                  : 'border border-cyber-border text-cyber-muted hover:border-cyber-cyan/40 hover:text-cyber-text'}`}>
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a href="https://github.com/Shebie" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-cyber-cyan/30 text-cyber-cyan
              font-mono text-sm px-6 py-3 clip-corner hover:border-cyber-cyan hover:bg-cyber-cyan/10
              transition-all duration-300">
            <Github size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
