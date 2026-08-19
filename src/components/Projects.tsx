import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Code2, Terminal, Globe, ArrowUpRight, Sparkles, Layers, Info, Edit3 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showEditGuide, setShowEditGuide] = useState<boolean>(false);

  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
              <span>03 // Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Practical Builds & Prototypes
            </h2>
            <p className="mt-3 text-zinc-400 text-base">
              Hands-on implementations demonstrating core programming concepts, data structures, scripting, and web interfaces.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowEditGuide(!showEditGuide)}
              className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-cyan-400 flex items-center gap-2 transition-all"
            >
              <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
              <span>{showEditGuide ? 'Hide Guide' : 'How to Edit Projects'}</span>
            </button>
          </div>
        </div>

        {/* Edit Guide Banner if toggled */}
        {showEditGuide && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-10 p-5 rounded-2xl bg-zinc-900/90 border border-cyan-500/30 text-zinc-300 text-xs sm:text-sm space-y-2 font-mono"
          >
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Project Placeholder Customization Guide</span>
            </div>
            <p className="text-zinc-400">
              Each project card below is pre-structured with truthful foundational templates. You can easily modify titles, descriptions, live demo links, and GitHub repositories inside <code>/src/data/portfolioData.ts</code> under <code>PROJECTS_DATA</code>.
            </p>
          </motion.div>
        )}

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative bg-[#121212] hover:bg-[#151515] border border-white/[0.08] hover:border-white/[0.2] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Visual Preview / Terminal Mockup Header */}
                <div className="relative h-48 bg-gradient-to-b from-zinc-900 to-[#0c0c0c] p-4 border-b border-white/[0.06] flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle decorative code pattern in background */}
                  <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
                  
                  {/* Top Bar: Identifier + Status */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-black/60 border border-white/10 text-cyan-400">
                      PROJ_0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${
                        project.status === 'Completed' ? 'bg-emerald-400' : 'bg-cyan-400'
                      }`} />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  {/* Visual Center Mockup */}
                  <div className="relative z-10 my-auto py-2">
                    <div className="p-3 rounded-xl bg-black/70 border border-white/[0.08] font-mono text-[11px] text-zinc-300 flex items-center justify-between group-hover:border-cyan-500/40 transition-colors">
                      <div className="flex items-center gap-2 truncate">
                        {project.id === 'project-01' ? <Terminal className="w-4 h-4 text-cyan-400 shrink-0" /> :
                         project.id === 'project-02' ? <Code2 className="w-4 h-4 text-amber-400 shrink-0" /> :
                         <Globe className="w-4 h-4 text-emerald-400 shrink-0" />}
                        <span className="truncate font-semibold text-zinc-200">{project.subtitle}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors shrink-0" />
                    </div>
                  </div>

                  {/* Category Banner */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>{project.category}</span>
                    <span>SVU Lab & Practice</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/[0.06] text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Inspect Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub Repository (Editable placeholder)"
                        className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/[0.04]"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Live Demo Preview"
                          className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-500/20"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
