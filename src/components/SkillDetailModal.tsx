import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Code, Terminal, Globe, CheckCircle, Sparkles, BookOpen, Layers } from 'lucide-react';
import { SkillItem } from '../types';

interface SkillDetailModalProps {
  skill: SkillItem | null;
  onClose: () => void;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({ skill, onClose }) => {
  if (!skill) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#121212] border border-white/[0.12] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400 font-mono text-xl shrink-0">
              {skill.category === 'Programming' ? <Terminal className="w-6 h-6" /> :
               skill.category === 'Web Development' ? <Globe className="w-6 h-6" /> :
               <Code className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                  skill.level === 'Familiar'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                }`}>
                  Level: {skill.level}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  Category: {skill.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-zinc-300 text-sm leading-relaxed">
              {skill.description}
            </p>

            {/* Key Topics Studied */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Foundational Topics & Concepts Covered</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skill.keyTopics.map((topic, i) => (
                  <div key={i} className="p-2 rounded-lg bg-zinc-900/60 border border-white/[0.04] text-xs text-zinc-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="truncate">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Sample if available */}
            {skill.codeSample && (
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1 px-1">
                  <span>Code Study Example ({skill.codeSample.filename})</span>
                  <span>{skill.codeSample.language}</span>
                </div>
                <div className="p-3.5 bg-black/80 rounded-xl border border-white/[0.08] font-mono text-xs text-zinc-300 overflow-x-auto">
                  <pre><code>{skill.codeSample.code}</code></pre>
                </div>
              </div>
            )}

            {/* Student Note */}
            <div className="p-3.5 rounded-xl bg-cyan-500/[0.04] border border-cyan-500/20 text-xs text-zinc-400 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Academic Context:</strong> Studied as part of the BCA curriculum at Swami Vivekananda University and reinforced through personal coding practice.
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
