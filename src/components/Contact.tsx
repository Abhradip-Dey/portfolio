import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, Copy, Check, Sparkles, MapPin, Building2, MessageSquare, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields before sending.');
      return;
    }

    setStatus('submitting');
    
    // Simulate reliable delivery feedback
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <span>07 // Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Build Something Together
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            Have an idea, project, or opportunity? I'd be happy to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Connect Overview Card */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-white/[0.08] space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Open for Conversations</span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Whether you're looking to discuss programming fundamentals, student collaborations, open-source projects, or internship opportunities, feel free to reach out.
              </p>
              
              <div className="pt-2 border-t border-white/[0.06] space-y-3">
                {/* Email Box */}
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-zinc-400 font-mono">Direct Email</div>
                      <div className="text-xs font-mono text-white truncate">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* GitHub Box */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-900/80 border border-white/[0.06] hover:border-cyan-500/30 flex items-center justify-between gap-3 transition-colors group"
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-cyan-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-zinc-400 font-mono">GitHub Profile</div>
                      <div className="text-xs font-mono text-zinc-300 group-hover:text-white truncate">
                        {PERSONAL_INFO.github.replace('https://', '')}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                {/* LinkedIn Box */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-900/80 border border-white/[0.06] hover:border-cyan-500/30 flex items-center justify-between gap-3 transition-colors group"
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-zinc-400 font-mono">LinkedIn Network</div>
                      <div className="text-xs font-mono text-zinc-300 group-hover:text-white truncate">
                        {PERSONAL_INFO.linkedin.replace('https://', '')}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                {/* Location / Campus */}
                <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/[0.04] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800/80 text-zinc-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400 font-mono">Academic Base</div>
                    <div className="text-xs text-zinc-300">{PERSONAL_INFO.university}, Kolkata</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note about placeholders */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.04] text-xs font-mono text-zinc-400 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Social handles and contact addresses are configured with editable placeholders ready to be updated with your actual accounts.
              </span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-[#121212] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-xs text-zinc-400 mb-6 font-mono">
              Fill out the form below or drop a note at {PERSONAL_INFO.email}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Collaboration on C/Python project"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Write your note, feedback, or inquiry here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none font-sans"
                />
              </div>

              {/* Error state */}
              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Success state */}
              {status === 'success' && (
                <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Message sent successfully! Thank you for getting in touch.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                id="contact-submit-btn"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/15 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
