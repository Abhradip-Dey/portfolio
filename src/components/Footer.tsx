import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Terminal, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'journey', label: 'Learning' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/[0.08] py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Brand Column */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center font-mono font-bold text-cyan-400">
              &lt;AD/&gt;
            </div>
            <div>
              <div className="font-bold text-white tracking-tight">{PERSONAL_INFO.name}</div>
              <div className="text-xs text-zinc-400 font-mono">BCA Student • Swami Vivekananda University</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-zinc-400">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Socials & CLI trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              title="Open Interactive Terminal"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Terminal className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
          <div>
            © 2026 {PERSONAL_INFO.name}. Built with curiosity and code.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Open to Learning & Opportunities</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
