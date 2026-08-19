import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Code2, CheckCircle2, Terminal, Layers, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#121212] border border-white/[0.12] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-800 text-zinc-300 border border-white/10">
                Status: {project.status}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-sm font-mono text-zinc-400 mt-1">{project.subtitle}</p>
          </div>

          {/* Project Details */}
          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Overview & Objectives</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Key Highlights & Architecture</h4>
              <div className="space-y-2">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/[0.08] text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Sample Code Snippet if present */}
            {project.codeSnippet && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Representative Logic</span>
                </h4>
                <div className="p-3 bg-black/80 rounded-xl border border-white/[0.08] font-mono text-xs text-zinc-300 overflow-x-auto">
                  <pre><code>{project.codeSnippet}</code></pre>
                </div>
              </div>
            )}

            {/* Placeholder / Replacement Notice */}
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] text-xs text-zinc-400 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Easily editable via <code>portfolioData.ts</code> or the editor guide.</span>
              </span>
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-medium text-white flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Preview</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
