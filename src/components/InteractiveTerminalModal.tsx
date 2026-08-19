import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, EDUCATION_DATA, CODE_SNIPPETS } from '../data/portfolioData';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminalModal: React.FC<InteractiveTerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-zinc-300 space-y-1">
          <p className="text-cyan-400 font-bold">Abhradip Dey - Interactive Developer CLI v2.4</p>
          <p className="text-zinc-400">Type <span className="text-cyan-300">help</span> to view all available commands.</p>
        </div>
      )
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1.5 text-zinc-300 text-xs">
            <p className="text-cyan-400 font-semibold mb-1">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono">
              <div><span className="text-yellow-400">about</span> - Background & bio</div>
              <div><span className="text-yellow-400">skills</span> - Languages & technologies</div>
              <div><span className="text-yellow-400">education</span> - BCA @ SVU details</div>
              <div><span className="text-yellow-400">projects</span> - Practical project list</div>
              <div><span className="text-yellow-400">contact</span> - Email & handles</div>
              <div><span className="text-yellow-400">code c</span> - Sample C pointer code</div>
              <div><span className="text-yellow-400">code py</span> - Sample Python snippet</div>
              <div><span className="text-yellow-400">clear</span> - Clear terminal window</div>
              <div><span className="text-yellow-400">exit</span> - Close terminal window</div>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'bio':
        response = (
          <div className="text-zinc-300 space-y-1 text-xs">
            <p className="text-white font-bold">{PERSONAL_INFO.name} ({PERSONAL_INFO.role})</p>
            <p className="text-zinc-400">{PERSONAL_INFO.bio}</p>
            <p className="text-zinc-400 mt-1">Institution: {PERSONAL_INFO.university} (Year 2)</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs">
            <p className="text-emerald-400 font-semibold">Core Languages (Familiar):</p>
            <p className="text-zinc-300 font-mono">C Language (Pointers, Memory, Structs) • Python (OOP, Scripting) • HTML5 (Semantic Web)</p>
            <p className="text-cyan-400 font-semibold mt-1">Currently Exploring:</p>
            <p className="text-zinc-300 font-mono">CSS3 • JavaScript • Git & GitHub • SQL Databases • Data Structures & Algorithms</p>
          </div>
        );
        break;

      case 'education':
        response = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-cyan-400 font-bold">{EDUCATION_DATA[0].degree}</p>
            <p className="text-white">{EDUCATION_DATA[0].institution} • {EDUCATION_DATA[0].yearStatus}</p>
            <p className="text-zinc-400">{EDUCATION_DATA[0].description}</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-xs">
            {PROJECTS_DATA.map((p, i) => (
              <div key={i} className="border-l-2 border-cyan-500 pl-2">
                <span className="text-white font-bold">{p.title}</span>
                <span className="text-zinc-400 block text-[11px]">{p.description}</span>
                <span className="text-cyan-400 text-[10px] font-mono">Stack: {p.techStack.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs font-mono text-zinc-300">
            <p>Email: <span className="text-cyan-400">{PERSONAL_INFO.email}</span></p>
            <p>GitHub: <span className="text-zinc-300">{PERSONAL_INFO.github}</span></p>
            <p>LinkedIn: <span className="text-zinc-300">{PERSONAL_INFO.linkedin}</span></p>
            <p>Location: <span className="text-zinc-400">{PERSONAL_INFO.location}</span></p>
          </div>
        );
        break;

      case 'code c':
        response = (
          <pre className="bg-black/90 p-2.5 rounded text-[11px] text-cyan-300 overflow-x-auto">
            <code>{CODE_SNIPPETS.c.code}</code>
          </pre>
        );
        break;

      case 'code py':
        response = (
          <pre className="bg-black/90 p-2.5 rounded text-[11px] text-amber-300 overflow-x-auto">
            <code>{CODE_SNIPPETS.python.code}</code>
          </pre>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInput('');
        return;

      default:
        response = (
          <p className="text-red-400 text-xs">
            Command not recognized: "{input}". Type <span className="text-cyan-400 font-bold">help</span> to view available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output: response }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0e0e0e] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden font-mono"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#151515] border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <TerminalIcon className="w-4 h-4 text-cyan-400" />
              <span>abhradip@svu:~$ terminal</span>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal body */}
          <div className="p-4 bg-[#0a0a0a] min-h-[300px] max-h-[420px] overflow-y-auto space-y-3 text-xs">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command !== 'welcome' && (
                  <div className="flex items-center gap-2 text-zinc-400">
                    <span className="text-cyan-400 font-bold">abhradip@svu:~$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                )}
                <div>{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 p-3 bg-[#121212] border-t border-white/[0.08]">
            <span className="text-cyan-400 font-bold text-xs pl-2">abhradip@svu:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'skills', 'about'..."
              className="flex-1 bg-transparent text-white text-xs focus:outline-none placeholder-zinc-600 font-mono"
            />
            <button
              type="submit"
              className="p-1.5 rounded bg-zinc-800 text-zinc-300 hover:text-cyan-400 text-xs flex items-center gap-1"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
