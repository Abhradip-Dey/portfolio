import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Code2, Sparkles, BookOpen, Layers, Terminal, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onExploreSkills: () => void;
}

export const About: React.FC<AboutProps> = ({ onExploreSkills }) => {
  const pillars = [
    {
      title: 'Strong Core Fundamentals',
      desc: 'Mastering low-level logic, memory management, and structured syntax in C, paired with versatile object-oriented scripting in Python.',
      icon: Terminal,
      accent: 'border-cyan-500/20 bg-cyan-500/[0.03] text-cyan-400'
    },
    {
      title: 'Semantic Web Architecture',
      desc: 'Understanding clean document hierarchy, accessibility standards, and web structure with HTML5, expanding toward modern responsive design.',
      icon: Code2,
      accent: 'border-emerald-500/20 bg-emerald-500/[0.03] text-emerald-400'
    },
    {
      title: 'Consistent Hands-on Practice',
      desc: 'Focusing on building practical utility scripts, solving algorithmic logic problems, and reinforcing classroom theory with tangible code.',
      icon: Layers,
      accent: 'border-violet-500/20 bg-violet-500/[0.03] text-violet-400'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0a0a0a] border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Developing Strong Foundations in Software Engineering
          </h2>
          <p className="mt-3 text-zinc-400 text-base sm:text-lg">
            A second-year undergraduate dedicated to mastering computer science basics, clean code, and practical problem-solving.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#121212] rounded-2xl p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <GraduationCap className="w-48 h-48 text-white" />
            </div>

            <div className="space-y-5 text-zinc-300 leading-relaxed font-normal relative z-10">
              <p className="text-base sm:text-lg text-zinc-200">
                Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. I am currently in my second year pursuing a <strong className="text-cyan-300 font-semibold">{PERSONAL_INFO.degree}</strong> at <strong className="text-white font-semibold">{PERSONAL_INFO.university}</strong>.
              </p>
              
              <p className="text-zinc-400">
                My primary focus is developing strong, resilient programming fundamentals. I actively work with <strong className="text-zinc-200">C</strong> for procedural logic, pointers, and memory mechanics, and <strong className="text-zinc-200">Python</strong> for versatile object-oriented scripting and problem-solving. On the web side, I have solid knowledge of <strong className="text-zinc-200">HTML5</strong> for semantic structuring.
              </p>

              <p className="text-zinc-400">
                I am deeply enthusiastic about software engineering and web technologies. Rather than rushing into frameworks without a solid base, I prioritize understanding the core mechanics — how code compiles, how data structures behave in memory, and how software systems fit together.
              </p>

              {/* What I Value List */}
              <div className="pt-3 border-t border-white/[0.06] space-y-2.5">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Core Development Principles:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Algorithmic logic in C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Scripting & OOP in Python</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Semantic web architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Continuous daily learning</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onExploreSkills}
                  className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
                >
                  <span>Explore my technical skill breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Truthful Metrics & Pillars */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Metric Blocks (Truthful, realistic) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#141414] border border-white/[0.08] hover:border-cyan-500/30 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">2nd Year</div>
                <div className="text-xs text-cyan-400 font-mono mt-1">BCA Degree</div>
                <div className="text-xs text-zinc-400 mt-1 truncate">Swami Vivekananda Univ.</div>
              </div>

              <div className="p-5 rounded-xl bg-[#141414] border border-white/[0.08] hover:border-emerald-500/30 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">3 Core</div>
                <div className="text-xs text-emerald-400 font-mono mt-1">Technologies</div>
                <div className="text-xs text-zinc-400 mt-1">C, Python & HTML</div>
              </div>

              <div className="p-5 rounded-xl bg-[#141414] border border-white/[0.08] hover:border-violet-500/30 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">Daily</div>
                <div className="text-xs text-violet-400 font-mono mt-1">Learning Rhythm</div>
                <div className="text-xs text-zinc-400 mt-1">Hands-on coding</div>
              </div>

              <div className="p-5 rounded-xl bg-[#141414] border border-white/[0.08] hover:border-amber-500/30 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">100%</div>
                <div className="text-xs text-amber-400 font-mono mt-1">Growth Mindset</div>
                <div className="text-xs text-zinc-400 mt-1">Exploring new tech</div>
              </div>
            </div>

            {/* Focus Pillars */}
            <div className="space-y-3">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border ${pillar.accent} transition-all`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{pillar.title}</h4>
                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
