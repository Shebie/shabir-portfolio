import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-cyber-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border border-cyber-cyan/40 clip-corner-sm flex items-center justify-center">
            <span className="font-display text-cyber-cyan text-xs font-bold">SS</span>
          </div>
          <span className="font-mono text-cyber-muted text-xs">
            © 202 Sayed Shabir. Built with React & ❤️
          </span>
        </div>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/Shebie' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sayedshabir' },
            { icon: Mail, href: 'mailto:sayedshabir00@gmail.com' },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="text-cyber-muted hover:text-cyber-cyan transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
