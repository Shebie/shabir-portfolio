import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolio';

const categoryColors = {
  tools: { accent: '#00f5ff', bg: 'rgba(0,245,255,0.05)', border: 'rgba(0,245,255,0.15)' },
  frameworks: { accent: '#0066ff', bg: 'rgba(0,102,255,0.05)', border: 'rgba(0,102,255,0.15)' },
  languages: { accent: '#7b2fff', bg: 'rgba(123,47,255,0.05)', border: 'rgba(123,47,255,0.15)' },
};

const categoryLabels = {
  tools: 'Tools & Platforms',
  frameworks: 'Frameworks & Libraries',
  languages: 'Programming Languages',
};

function SkillTag({ name, delay, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="relative group px-3 py-1.5 font-mono text-sm cursor-default"
      style={{
        border: `1px solid ${accent}30`,
        background: `${accent}08`,
        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
      }}
    >
      <span className="text-cyber-text/80 group-hover:text-white transition-colors">{name}</span>
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: accent }} />
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-cyber-cyan" />
            <span className="font-mono text-cyber-cyan text-xs tracking-[0.3em] uppercase">Skills</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-wider">
            TECH STACK
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-8">
          {Object.entries(portfolioData.skills).map(([cat, items], catIndex) => {
            const { accent, bg, border } = categoryColors[cat];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.15, duration: 0.6 }}
                className="relative border rounded-none clip-corner p-6 md:p-8"
                style={{ borderColor: border, background: bg }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-4 h-4"
                  style={{ borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }} />
                <div className="absolute bottom-0 right-0 w-4 h-4"
                  style={{ borderBottom: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }} />

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-6 rounded-full" style={{ background: accent }} />
                  <h3 className="font-display text-sm font-semibold tracking-widest uppercase"
                    style={{ color: accent }}>
                    {categoryLabels[cat]}
                  </h3>
                  <div className="flex-1 h-px" style={{ background: `${accent}20` }} />
                  <span className="font-mono text-xs" style={{ color: `${accent}60` }}>
                    {items.length} items
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill, i) => (
                    <SkillTag key={skill} name={skill} delay={catIndex * 0.1 + i * 0.04} accent={accent} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 border border-cyber-border bg-cyber-card/20 clip-corner p-6"
        >
          <h3 className="font-display text-xs tracking-[0.3em] text-cyber-muted uppercase mb-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {portfolioData.softSkills.map((skill, i) => (
              <span key={skill}
                className="font-body text-sm text-cyber-text/60 flex items-center gap-2">
                <span className="text-cyber-cyan/40">◆</span>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
