import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Copy, Check, Terminal, ArrowRight, Sparkles, BookOpen, Code2, Layers, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO, CODE_SNIPPETS } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  const [activeTab, setActiveTab] = useState<'c' | 'python' | 'html' | 'about'>('c');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(true);

  // Typewriter effect state for cycling taglines
  const taglines = [
    'BCA Student @ Swami Vivekananda University',
    'C & Python Programming Enthusiast',
    'Building Foundational Web Architectures',
    'Aspiring Software Developer'
  ];
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = taglines[currentTaglineIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTaglineIndex]);

  const currentSnippet = CODE_SNIPPETS[activeTab];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 450);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:py-28 overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-violet-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/5 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/[0.08] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono text-zinc-300">
                {PERSONAL_INFO.statusTag}
              </span>
            </div>

            {/* Main Header */}
            <div className="space-y-2">
              <p className="text-zinc-400 font-mono text-sm tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              
              <div className="h-8 flex items-center">
                <h2 className="text-lg sm:text-xl font-medium text-cyan-400 font-mono flex items-center">
                  <span>{displayedText}</span>
                  <span className="animate-pulse ml-0.5 text-cyan-300">_</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {PERSONAL_INFO.bio}
            </p>

            {/* Tech badges inline */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-zinc-400 font-mono">Foundational Stack:</span>
              <span className="px-2.5 py-1 rounded bg-zinc-900/90 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                C Language
              </span>
              <span className="px-2.5 py-1 rounded bg-zinc-900/90 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
                Python
              </span>
              <span className="px-2.5 py-1 rounded bg-zinc-900/90 border border-amber-500/20 text-amber-300 text-xs font-mono">
                HTML5
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onExploreProjects}
                id="hero-view-work-btn"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/25 active:scale-95 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                id="hero-contact-btn"
                className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-600 text-zinc-200 hover:text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* University & Academic Highlights Badge */}
            <div className="pt-4 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-2.5 rounded-lg bg-zinc-900/40 border border-white/[0.04]">
                <div className="text-xs text-zinc-400">Education</div>
                <div className="text-sm font-semibold text-white">BCA — 2nd Year</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/40 border border-white/[0.04]">
                <div className="text-xs text-zinc-400">Institution</div>
                <div className="text-sm font-semibold text-white truncate" title={PERSONAL_INFO.university}>
                  Swami Vivekananda Univ.
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/40 border border-white/[0.04] col-span-2 sm:col-span-1">
                <div className="text-xs text-zinc-400">Objective</div>
                <div className="text-sm font-semibold text-cyan-400">Software Engineer</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code & Terminal Sandbox */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/[0.1] shadow-2xl shadow-black/80">
              
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>abhradip-workspace</span>
                  </span>
                </div>

                {/* Quick actions */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning}
                    id="run-code-btn"
                    title="Simulate Compile & Run"
                    className="p-1.5 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 text-xs flex items-center gap-1 font-mono transition-colors"
                  >
                    {isRunning ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current" />
                    )}
                    <span className="text-[11px] hidden sm:inline">Run</span>
                  </button>

                  <button
                    onClick={handleCopyCode}
                    id="copy-code-btn"
                    title="Copy Snippet"
                    className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex items-center gap-1 px-3 py-1.5 bg-[#101010] border-b border-white/[0.06] overflow-x-auto">
                {(['c', 'python', 'html', 'about'] as const).map((tab) => {
                  const isActive = activeTab === tab;
                  const item = CODE_SNIPPETS[tab];
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-zinc-800 text-cyan-300 border border-white/10 font-medium'
                          : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        tab === 'c' ? 'bg-cyan-400' :
                        tab === 'python' ? 'bg-amber-400' :
                        tab === 'html' ? 'bg-orange-400' : 'bg-violet-400'
                      }`} />
                      <span>{item.filename}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Area */}
              <div className="p-4 font-mono text-xs overflow-x-auto bg-[#0a0a0a] min-h-[220px] max-h-[260px] text-zinc-300 leading-relaxed scrollbar-thin">
                <pre>
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>

              {/* Output Preview Drawer */}
              <div className="border-t border-white/[0.08] bg-[#0c0c0c] p-3 font-mono text-[11px]">
                <div className="flex items-center justify-between text-zinc-400 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Output Terminal</span>
                  </span>
                  <span className="text-[10px] text-zinc-400">Status: Active</span>
                </div>
                <div className="bg-black/60 rounded-lg p-2.5 border border-white/[0.04] text-zinc-300 min-h-[60px] max-h-[100px] overflow-y-auto whitespace-pre-wrap">
                  {isRunning ? (
                    <div className="flex items-center gap-2 text-cyan-400">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Compiling and executing {currentSnippet.filename}...</span>
                    </div>
                  ) : showOutput ? (
                    <span className="text-zinc-300">{currentSnippet.output}</span>
                  ) : null}
                </div>
              </div>

            </div>

            {/* Micro Caption */}
            <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 font-mono px-2">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Real runnable snippets</span>
              </span>
              <span>Swami Vivekananda University</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
