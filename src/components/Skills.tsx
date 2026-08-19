import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Globe, Code, Cpu, Palette, GitBranch, Database, Layers, ArrowUpRight, CheckCircle, Sparkles, Filter } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';
import { SkillDetailModal } from './SkillDetailModal';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalSkill, setActiveModalSkill] = useState<SkillItem | null>(null);

  const categories = ['All', 'Programming', 'Web Development', 'Currently Exploring'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code': return Code;
      case 'Terminal': return Terminal;
      case 'Globe': return Globe;
      case 'Palette': return Palette;
      case 'Cpu': return Cpu;
      case 'GitBranch': return GitBranch;
      case 'Database': return Database;
      default: return Layers;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
              <span>02 // Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Core Languages & Technology Foundations
            </h2>
            <p className="mt-3 text-zinc-400 text-base">
              Distinguishing between core technologies already practiced and emerging tools currently under active exploration.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900/80 rounded-xl border border-white/[0.08] backdrop-blur-sm self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-zinc-800 text-white shadow-sm border border-white/10'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Level Legend Bar */}
        <div className="mb-8 p-3 rounded-xl bg-zinc-900/50 border border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-4 text-zinc-300">
            <span className="text-zinc-400">Proficiency Classification:</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Familiar (Core Base)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Exploring / Learning</span>
            </span>
          </div>
          <span className="text-zinc-400 hidden sm:inline">
            Click any card for syllabus & code notes
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const IconComp = getIcon(skill.iconName);
            const isFamiliar = skill.level === 'Familiar';

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => setActiveModalSkill(skill)}
                className="group relative bg-[#121212] hover:bg-[#161616] border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Level Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${
                          isFamiliar
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        }`}
                      >
                        {skill.level}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Skill Name & Category */}
                  <div className="mb-2">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      {skill.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Key Topic Badges */}
                <div className="pt-3 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase mb-2">Key Concepts:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.keyTopics.slice(0, 3).map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-zinc-900/80 border border-white/[0.04] text-[11px] text-zinc-300 font-mono"
                      >
                        {topic}
                      </span>
                    ))}
                    {skill.keyTopics.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] text-zinc-400 font-mono">
                        +{skill.keyTopics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Skill Detail Modal */}
      <SkillDetailModal
        skill={activeModalSkill}
        onClose={() => setActiveModalSkill(null)}
      />
    </section>
  );
};
