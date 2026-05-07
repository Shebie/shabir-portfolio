import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const TITLES = [
  'Full Stack Developer',
  'Blockchain Engineer',
  'Web3 Builder',
  'React Specialist',
  'Smart Contract Dev',
];

function TypeWriter({ texts }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex(t => (t + 1) % texts.length);
    }
    setDisplayed(current.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  return (
    <span className="text-cyber-cyan text-glow-cyan font-mono">
      {displayed}
      <span className="cursor-blink">_</span>
    </span>
  );
}

// Animated background particles
function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyber-cyan"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(0,245,255,0.04) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(123,47,255,0.06) 0%, transparent 70%)' }} />

      <Particles />

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 text-cyber-cyan/20 font-mono text-xs leading-6 hidden lg:block">
        {['> init_portfolio()', '> loading modules...', '> status: ONLINE', '> location: PKS'
        ].map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.2 }}>
            {line}
          </motion.div>
        ))}
      </div>

      <div className="absolute top-24 right-6 text-cyber-cyan/20 font-mono text-xs leading-6 text-right hidden lg:block">
        {['react.js', 'node.js', 'solidity', 'motoko'].map((tech, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.2 }}>
            {tech} ■
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-cyber-cyan/20 bg-cyber-cyan/5 
            px-4 py-1.5 rounded-full mb-8 font-mono text-xs text-cyber-cyan/70"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1
            className="glitch-text font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-white"
            data-text="SAYED SHABIR"
          >
            SAYED SHABIR
          </h1>
        </motion.div>

        {/* Animated title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-xl md:text-2xl text-cyber-text/80 mb-6 h-8"
        >
          <TypeWriter texts={TITLES} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-body text-cyber-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building modern web applications & decentralized systems from Peshawar, Pakistan. 
          Turning complex problems into elegant solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3 bg-cyber-cyan text-cyber-black font-display text-sm 
              font-bold tracking-widest clip-corner hover:bg-cyber-cyan/90 transition-all duration-300
              hover:scale-105 active:scale-95"
          >
            VIEW MY WORK
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-cyber-cyan/40 text-cyber-cyan font-display text-sm 
              tracking-widest clip-corner hover:border-cyber-cyan hover:bg-cyber-cyan/10 
              transition-all duration-300 hover:scale-105 active:scale-95"
          >
            CONTACT ME
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/Shebie', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sayedshabir', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:sayedshabir00@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-2 text-cyber-muted hover:text-cyber-cyan 
                transition-colors duration-300">
              <Icon size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs hidden sm:block">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cyber-muted/40"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
