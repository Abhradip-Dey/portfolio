import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Github, Linkedin, MapPin, GraduationCap, Code2, Terminal, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#111111] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#181818] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white font-mono">Curriculum Vitae</span>
              <span className="text-xs text-zinc-400 font-mono hidden sm:inline">| {PERSONAL_INFO.name}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close CV preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Sheet */}
          <div className="p-6 sm:p-10 text-zinc-300 space-y-8 bg-[#0d0d0d] font-sans max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible print:bg-white print:text-black">
            
            {/* Header */}
            <div className="border-b border-white/[0.1] pb-6 print:border-black/20">
              <h1 className="text-3xl font-bold text-white print:text-black">{PERSONAL_INFO.name}</h1>
              <p className="text-sm font-mono text-cyan-400 print:text-cyan-800 mt-1">
                {PERSONAL_INFO.role} • {PERSONAL_INFO.university}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-zinc-400 print:text-zinc-600 font-mono">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Github className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.github}</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-black font-bold mb-2">
                Executive Profile
              </h2>
              <p className="text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">
                Second-year Bachelor of Computer Applications (BCA) undergraduate at Swami Vivekananda University with a passion for structured programming, algorithm logic, and software engineering. Proficient in C, Python, and semantic HTML5, actively expanding knowledge in modern web architecture, data structures, and database systems.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-black font-bold mb-3">
                Education
              </h2>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] print:border-zinc-300 print:bg-zinc-50 space-y-1.5">
                <div className="flex items-center justify-between text-sm font-bold text-white print:text-black">
                  <span>Bachelor of Computer Applications (BCA)</span>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">2024 - Present (2nd Year)</span>
                </div>
                <div className="text-xs text-cyan-300 print:text-zinc-700">Swami Vivekananda University, West Bengal</div>
                <p className="text-xs text-zinc-400 print:text-zinc-600 pt-1">
                  Core coursework: Programming in C, Python Scripting & OOP, Semantic Web (HTML5), Discrete Mathematics, Computer Fundamentals, Data Structures foundations.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-black font-bold mb-3">
                Technical Proficiencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-zinc-900/40 border border-white/[0.04] print:border-zinc-200">
                  <span className="font-mono text-zinc-400 print:text-zinc-600 block mb-1">Core Languages (Familiar):</span>
                  <div className="font-semibold text-white print:text-black">C (Structured & Pointers), Python (OOP & Scripting), HTML5</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/40 border border-white/[0.04] print:border-zinc-200">
                  <span className="font-mono text-zinc-400 print:text-zinc-600 block mb-1">Currently Exploring:</span>
                  <div className="font-semibold text-white print:text-black">CSS3, JavaScript, Git & GitHub, Relational Databases (SQL), Data Structures</div>
                </div>
              </div>
            </div>

            {/* Practical Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-black font-bold mb-3">
                Practical Academic Projects
              </h2>
              <div className="space-y-3">
                {PROJECTS_DATA.map((p, idx) => (
                  <div key={p.id} className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/[0.04] print:border-zinc-200">
                    <div className="flex items-center justify-between text-xs font-bold text-white print:text-black">
                      <span>{p.title}</span>
                      <span className="font-mono text-zinc-400 print:text-zinc-500 font-normal">{p.techStack.join(', ')}</span>
                    </div>
                    <p className="text-xs text-zinc-400 print:text-zinc-700 mt-1">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer inside modal */}
          <div className="px-6 py-4 bg-[#141414] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Verified Student Profile • Abhradip Dey</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
