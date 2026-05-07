import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, Github, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'sayedshabir00@gmail.com', href: 'mailto:sayedshabir00@gmail.com', color: '#00f5ff' },
  { icon: Github, label: 'GitHub', value: 'github.com/Shebie', href: 'https://github.com/Shebie', color: '#7b2fff' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/sayedshabir', href: 'https://www.linkedin.com/in/sayedshabir', color: '#0066ff' },
  { icon: Phone, label: 'Phone', value: '+923231394096', href: 'tel:+923231394096', color: '#00ff88' },
];

export default function Contact() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-cyber-card/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,245,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-8 h-px bg-cyber-cyan" />
            <span className="font-mono text-cyber-cyan text-xs tracking-[0.3em] uppercase">Contact</span>
            <div className="w-8 h-px bg-cyber-cyan" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-wider mb-4">
            GET IN TOUCH
          </h2>
          <p className="font-body text-cyber-muted max-w-xl mx-auto">
            Open to internships, freelance projects, and collaboration. Let's build something great together.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="border border-cyber-cyan/20 bg-cyber-card/30 clip-corner p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative corner lines */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyber-cyan/40" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyber-cyan/40" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cyber-cyan/40" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyber-cyan/40" />

          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin size={14} className="text-cyber-cyan/50" />
            <span className="font-mono text-cyber-muted text-xs">Peshawar, Pakistan</span>
          </div>

          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-display text-cyber-cyan text-lg md:text-xl font-bold tracking-widest mb-6"
          >
            sayedshabir00@gmail.com
          </motion.div>

          <a href="mailto:sayedshabir00@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-cyber-cyan text-cyber-black 
              font-display text-sm font-bold tracking-widest clip-corner
              hover:bg-cyber-cyan/90 transition-all duration-300 hover:scale-105 active:scale-95 mb-10">
            <Send size={14} />
            SEND MESSAGE
          </a>

          {/* Contact links grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group flex items-center gap-4 border border-cyber-border bg-cyber-dark/50 clip-corner-sm
                  p-4 text-left hover:border-opacity-50 transition-all duration-300"
                style={{ '--hover-border': color }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${color}40`}
                onMouseLeave={e => e.currentTarget.style.borderColor = ''}
              >
                <div className="w-10 h-10 flex items-center justify-center border clip-corner-sm transition-colors"
                  style={{ borderColor: `${color}30`, background: `${color}10` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-xs text-cyber-muted mb-0.5">{label}</div>
                  <div className="font-body text-cyber-text text-sm truncate group-hover:text-white transition-colors">
                    {value}
                  </div>
                </div>
                <ExternalLink size={12} className="text-cyber-muted/40 group-hover:text-cyber-muted flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
