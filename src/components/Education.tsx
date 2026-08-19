import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2, Award, Sparkles, Building2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const edu = EDUCATION_DATA[0];

  return (
    <section id="education" className="py-24 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <span>04 // Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Formal Computer Applications Education
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            Structured academic curriculum bridging theoretical computer science principles with hands-on software development.
          </p>
        </div>

        {/* Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-[#121212] border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/[0.03] blur-3xl pointer-events-none rounded-full" />

            {/* Top Academic Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-1">
                    <span>{edu.yearStatus}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-400 text-sm mt-0.5">
                    <Building2 className="w-4 h-4 text-zinc-400" />
                    <span className="text-zinc-200 font-medium">{edu.institution}</span>
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-xs font-mono text-zinc-400 shrink-0">
                <span className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-lg border border-white/[0.06]">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.period}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{edu.location}</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="py-6 space-y-6">
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {edu.description}
              </p>

              {/* Core Academic Modules */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Key Academic Focus Areas & Coursework</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {edu.focusAreas.map((area, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04] text-xs sm:text-sm text-zinc-300 flex items-center gap-2.5 hover:border-cyan-500/30 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Methodologies */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Laboratory & Practical Competencies</span>
                </h4>
                <div className="space-y-2">
                  {edu.courseworkHighlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* University Note Badge */}
            <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
              <span>Program: Bachelor of Computer Applications</span>
              <span className="text-cyan-400">Swami Vivekananda University, West Bengal</span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
