import React from 'react';
import { motion } from 'motion/react';
import { Layout, Binary, Code2, GitPullRequest, Database, BrainCircuit, Sparkles, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { LEARNING_JOURNEY } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout': return Layout;
      case 'Binary': return Binary;
      case 'Code2': return Code2;
      case 'GitPullRequest': return GitPullRequest;
      case 'Database': return Database;
      case 'BrainCircuit': return BrainCircuit;
      default: return Sparkles;
    }
  };

  return (
    <section id="journey" className="py-24 relative bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <span>05 // Continuous Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Currently Learning & Exploring
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            An open and authentic roadmap of subjects, tools, and computer science concepts actively being studied and expanded.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_JOURNEY.map((item, idx) => {
            const IconComp = getIcon(item.iconName);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-[#121212] hover:bg-[#151515] border border-white/[0.08] hover:border-cyan-500/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Status & Icon Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>{item.status}</span>
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-2">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Sub-topics list */}
                <div className="pt-3 border-t border-white/[0.06] space-y-2">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Target Milestones:</div>
                  <div className="space-y-1">
                    {item.topics.map((t, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Consistent Learning Rhythm</div>
              <div className="text-xs text-zinc-400">Balancing university coursework with independent code projects and problem sets.</div>
            </div>
          </div>

          <div className="text-xs font-mono text-cyan-400 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 shrink-0">
            Status: Active Student
          </div>
        </div>

      </div>
    </section>
  );
};
