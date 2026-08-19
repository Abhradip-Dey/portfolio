import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { LearningJourney } from './components/LearningJourney';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  
  // Theme state: 'dark' (Obsidian Charcoal) vs 'midnight' (Midnight Blue High-Contrast)
  const [theme, setTheme] = useState<'dark' | 'midnight'>(() => {
    try {
      const savedTheme = localStorage.getItem('abhradip_portfolio_theme');
      return (savedTheme === 'midnight' || savedTheme === 'dark') ? savedTheme : 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'midnight' : 'dark';
      try {
        localStorage.setItem('abhradip_portfolio_theme', next);
      } catch {
        // Ignore localStorage error in restricted iframe
      }
      return next;
    });
  };

  useEffect(() => {
    if (theme === 'midnight') {
      document.documentElement.classList.add('theme-midnight');
      document.body.classList.add('theme-midnight');
    } else {
      document.documentElement.classList.remove('theme-midnight');
      document.body.classList.remove('theme-midnight');
    }
  }, [theme]);

  // Keyboard shortcut: Pressing '~' or '`' opens/closes the terminal modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        // Prevent toggle if currently typing in an input or textarea
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== 'input' && activeTag !== 'textarea') {
          e.preventDefault();
          setIsTerminalOpen((prev) => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      id="app-root"
      className={`min-h-screen font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative transition-colors duration-300 ${
        theme === 'midnight'
          ? 'theme-midnight bg-[#040914] text-[#F0F6FC]'
          : 'bg-[#070707] text-[#F5F5F5]'
      }`}
    >
      {/* Background Grid & Texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Sticky Header Navbar with Theme Toggler */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. About Me Section */}
        <About onExploreSkills={() => scrollToSection('skills')} />

        {/* 3. Skills Showcase */}
        <Skills />

        {/* 4. Projects Showcase */}
        <Projects />

        {/* 5. Education Timeline */}
        <Education />

        {/* 6. Learning Journey ("Currently Learning & Exploring") */}
        <LearningJourney />

        {/* 7. Developer Philosophy */}
        <Philosophy />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <InteractiveTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
