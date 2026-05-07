import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-cyber-card/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" />

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
            <span className="font-mono text-cyber-cyan text-xs tracking-[0.3em] uppercase">Experience</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-wider">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan/40 via-cyber-purple/40 to-transparent hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="relative md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-5 top-6 w-4 h-4 border border-cyber-cyan/60 bg-cyber-dark
                  rotate-45 hidden md:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-cyber-cyan rotate-45" />
                </div>

                <div className="group border border-cyber-border bg-cyber-card/30 clip-corner p-6 md:p-8
                  hover:border-cyber-cyan/30 transition-all duration-300 hover:bg-cyber-card/50">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-white font-semibold text-lg tracking-wide">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-body text-cyber-cyan/80 text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <span className="font-mono text-cyber-muted text-xs bg-cyber-border/50 px-3 py-1
                      clip-corner-sm whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  <p className="font-body text-cyber-text/70 text-sm leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag}
                        className="font-mono text-xs text-cyber-cyan/60 border border-cyber-cyan/15 
                          px-2 py-0.5 bg-cyber-cyan/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="font-display text-sm tracking-[0.3em] text-cyber-muted uppercase mb-6">
            Certification
          </h3>
          {portfolioData.certifications.map(cert => (
            <div key={cert.title}
              className="flex items-center gap-5 border border-cyber-border bg-cyber-card/20 clip-corner p-5
                hover:border-cyber-cyan/30 transition-colors">
              <span className="text-3xl">{cert.icon}</span>
              <div>
                <div className="font-display text-white text-sm font-semibold">{cert.title}</div>
                <div className="font-body text-cyber-muted text-sm mt-1">
                  {cert.issuer} · {cert.instructor} · <span className="text-cyber-cyan/70">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" />
    </section>
  );
}
