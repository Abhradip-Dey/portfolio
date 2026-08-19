import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, FileText, Menu, X, ChevronRight, Github, Mail, Moon, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  theme: 'dark' | 'midnight';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  onOpenResume,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'journey', label: 'Learning' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section tracker
      const sections = ['hero', ...navLinks.map((l) => l.id)];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const isMidnight = theme === 'midnight';

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070707]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 rounded p-1"
            aria-label="Scroll to top"
          >
            <div className="w-8 h-8 bg-cyan-500 rounded-sm flex items-center justify-center font-bold text-black text-xs shrink-0 shadow-sm">
              AD
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tighter text-sm uppercase text-white group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-white/40 font-mono tracking-wider uppercase">
                SVU • BCA Year 2
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101010]/90 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3.5 py-1.5 text-[11px] uppercase tracking-widest font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBadge"
                      className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/30 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Utilities: Theme Toggler, Terminal, Resume, Contact */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              id="theme-toggle-btn"
              title={`Switch to ${isMidnight ? 'Obsidian Dark' : 'Midnight Blue'} Mode`}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-white/80 hover:text-cyan-300 transition-all flex items-center gap-2 group active:scale-95"
              aria-label="Toggle theme mode"
            >
              {isMidnight ? (
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
              )}
              <span className="text-[11px] uppercase tracking-wider font-semibold">
                {isMidnight ? 'Midnight' : 'Dark'}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </button>

            <button
              onClick={onOpenTerminal}
              id="terminal-shortcut-btn"
              title="Open Interactive Terminal"
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-zinc-300 hover:text-cyan-400 transition-all flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLI</span>
              <kbd className="text-[10px] bg-black/50 px-1.5 py-0.5 rounded border border-white/10 text-zinc-400">~</kbd>
            </button>

            <button
              onClick={onOpenResume}
              id="resume-btn"
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-medium text-zinc-200 hover:text-white transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              id="nav-connect-btn"
              className="px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-all active:scale-95 uppercase tracking-wider"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex md:hidden items-center gap-1.5">
            {/* Mobile Theme Toggle */}
            <button
              onClick={onToggleTheme}
              id="mobile-theme-toggle"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono"
              aria-label="Toggle theme mode"
              title={`Switch to ${isMidnight ? 'Dark' : 'Midnight Blue'} mode`}
            >
              {isMidnight ? <Sparkles className="w-4 h-4 text-cyan-400" /> : <Moon className="w-4 h-4 text-zinc-300" />}
            </button>

            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono"
              aria-label="Open CLI terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 overflow-hidden"
          >
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium'
                        : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Theme Switcher Row */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-2 text-xs font-mono">
              <span className="text-white/60 uppercase tracking-wider">Aesthetic Theme:</span>
              <button
                onClick={onToggleTheme}
                className="px-3 py-1 rounded bg-white/5 border border-white/10 text-cyan-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]"
              >
                {isMidnight ? <Sparkles className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
                <span>{isMidnight ? 'Midnight Blue' : 'Obsidian Dark'}</span>
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white flex items-center justify-center gap-2"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-2.5 px-3 rounded-lg bg-cyan-500 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
