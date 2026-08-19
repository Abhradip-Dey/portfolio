import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Hammer, Search, FlaskConical, Sparkles, TrendingUp, Quote, CheckCircle } from 'lucide-react';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  const [activePrincipleId, setActivePrincipleId] = useState<number>(1);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Hammer': return Hammer;
      case 'Search': return Search;
      case 'FlaskConical': return FlaskConical;
      case 'Sparkles': return Sparkles;
      case 'TrendingUp': return TrendingUp;
      default: return CheckCircle;
    }
  };

  return (
    <section id="philosophy" className="py-24 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <span>06 // Mindset & Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Developer Philosophy
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            Guiding tenets for writing code, building software architectures, and growing as an engineer.
          </p>
        </div>

        {/* Central Quote Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-zinc-900 via-[#141414] to-zinc-900 border border-white/[0.1] rounded-3xl p-8 sm:p-12 mb-14 shadow-2xl overflow-hidden text-center max-w-4xl mx-auto"
        >
          <div className="absolute top-6 left-8 opacity-10 pointer-events-none">
            <Quote className="w-20 h-20 text-white" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Core Motto
            </span>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              “Learn the fundamentals. Build consistently. Keep improving.”
            </blockquote>
            <p className="text-sm font-mono text-zinc-400 pt-2">
              — Abhradip Dey • Swami Vivekananda University
            </p>
          </div>
        </motion.div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHILOSOPHY_PRINCIPLES.map((item, idx) => {
            const IconComp = getIcon(item.iconName);
            const isSelected = activePrincipleId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                onClick={() => setActivePrincipleId(item.id)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#161616] border-cyan-500/50 shadow-lg shadow-cyan-500/5'
                    : 'bg-[#121212] border-white/[0.08] hover:border-white/[0.18]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-400">
                      0{item.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] text-xs text-zinc-400 italic">
                  "{item.detailedInsight}"
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
