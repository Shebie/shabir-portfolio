import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, GraduationCap, Code2, Blocks } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const stats = [
  { label: 'Projects Built', value: '7+', icon: Code2 },
  { label: 'Blockchain Apps', value: '4', icon: Blocks },
  { label: 'Year of Study', value: '3rd', icon: GraduationCap },
  { label: 'Location', value: 'PKS', icon: MapPin },
];

export default function About() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-cyber-cyan" />
            <span className="font-mono text-cyber-cyan text-xs tracking-[0.3em] uppercase">About</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-wider">
            WHO I AM
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-cyber-text/80 text-lg leading-relaxed mb-6">
              I'm a <span className="text-cyber-cyan font-semibold">Software Engineer</span> focused on 
              Full Stack Web Development and Blockchain. Currently pursuing my BS in Software Engineering 
              at IMSciences Peshawar.
            </p>
            <p className="font-body text-cyber-text/60 leading-relaxed mb-8">
              I love building modern, user-friendly web applications and exploring the decentralized web. 
              From crafting React frontends to writing Solidity smart contracts, I'm always pushing into 
              new territory. Passionate about learning, problem-solving, and delivering quality code that 
              makes a real impact.
            </p>

            {/* Education highlight */}
            {portfolioData.education.slice(0, 1).map(edu => (
              <div key={edu.degree}
                className="border border-cyber-border bg-cyber-card/50 clip-corner p-5 hover:border-cyber-cyan/30 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{edu.icon}</span>
                  <div>
                    <div className="font-display text-white text-sm font-semibold">{edu.degree}</div>
                    <div className="font-body text-cyber-muted text-sm mt-1">{edu.school}</div>
                    <div className="font-mono text-cyber-cyan/60 text-xs mt-1">{edu.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ label, value, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group border border-cyber-border bg-cyber-card/30 clip-corner p-6
                  hover:border-cyber-cyan/40 hover:bg-cyber-card/60 transition-all duration-300"
              >
                <Icon size={20} className="text-cyber-cyan/50 group-hover:text-cyber-cyan mb-3 transition-colors" />
                <div className="font-display text-3xl font-bold text-white mb-1 text-glow-cyan">{value}</div>
                <div className="font-body text-cyber-muted text-sm">{label}</div>
              </motion.div>
            ))}

            {/* Large GDG card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="col-span-2 border border-cyber-border bg-cyber-card/30 clip-corner p-5
                hover:border-cyber-cyan/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                <span className="font-mono text-cyber-cyan/70 text-xs tracking-widest">CURRENTLY ACTIVE</span>
              </div>
              <div className="font-body text-cyber-text text-sm">
                Lead <span className="text-cyber-cyan">Notion Campus Leader</span> on Campus (IMS) 
                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" />
    </section>
  );
}
