import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, Database, GitBranch, Github, 
  ExternalLink, Mail, User, GraduationCap, 
  ChevronRight, Send, Briefcase, Download, Code,
  Linkedin, Facebook, X
} from 'lucide-react';
import learnefyLogo from './assets/images/learnefy_logo_1787229310450.jpg';

const socialLinks = {
  github: "https://github.com/abyss8348",
  linkedin: "https://www.linkedin.com/in/anirban-roy-320069391",
  facebook: "https://www.facebook.com/share/1CHb55CdWr/",
  email: "royanirban630@gmail.com"
};

export default function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-red selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0 bg-[#0A0A0A]/90">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="font-display font-black text-xl sm:text-2xl text-[#F0F0F0] tracking-tighter uppercase truncate mr-4">Anirban Roy</div>
          <div className="hidden md:flex items-center gap-12 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
            <a href="#about" className="hover:text-brand-red transition-colors">About</a>
            <a href="#skills" className="hover:text-brand-red transition-colors">Skills</a>
            <a href="#projects" className="hover:text-brand-red transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-brand-red transition-colors">Certificates</a>
            <a href="#education" className="hover:text-brand-red transition-colors">Education</a>
            <a href="#contact" className="hover:text-brand-red transition-colors">Contact</a>
          </div>
          <button className="bg-brand-red hover:bg-brand-red-hover text-[#0A0A0A] px-4 md:px-6 py-2 rounded-none text-[10px] font-bold tracking-[0.2em] transition-colors uppercase shrink-0">
            Resume
          </button>
        </div>
      </nav>

      <main className="pt-24 md:pt-32 pb-16 md:pb-20">
        {/* Hero Section */}
        <motion.section 
          {...fadeIn}
          className="px-4 md:px-6 max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32 overflow-hidden"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-surface-border bg-surface-glass text-[10px] font-bold tracking-[0.3em] uppercase mb-8 opacity-70">
              <span className="w-2 h-2 rounded-none bg-brand-red animate-pulse"></span>
              <span className="text-gray-300">Available for work</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 tracking-[-0.04em] sm:tracking-[-0.06em] uppercase break-words">Anirban Roy</h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-display font-bold mb-4 sm:mb-6 tracking-tighter uppercase opacity-80">
              BTech CSE Student | Developer | Problem Solver
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl leading-relaxed text-balance">
              I build practical digital experiences while continuously learning software engineering, web development and emerging technologies.
            </p>

            {/* Mobile Portrait */}
            <div className="block lg:hidden relative w-full max-w-[280px] sm:max-w-xs mx-auto mb-10">
              <div className="aspect-square glass-panel p-2 rounded-3xl border border-white/5 shadow-2xl bg-black/20">
                <img 
                  src="/WhatsApp%20Image%202026-08-20%20at%2016.32.25.jpeg" 
                  alt="Anirban Roy" 
                  className="rounded-2xl w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]" 
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-12">
              <a href="#certificates" className="bg-brand-red hover:bg-brand-red-hover text-[#0A0A0A] w-full sm:w-auto px-6 sm:px-8 py-4 rounded-none text-[10px] tracking-[0.2em] font-bold transition-colors uppercase justify-center flex">
                View Certificates
              </a>
              <button className="glass-panel text-[#F0F0F0] w-full sm:w-auto px-6 sm:px-8 py-4 rounded-none text-[10px] tracking-[0.2em] font-bold flex items-center justify-center gap-2 uppercase">
                <Download size={16} /> Download Resume
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Visit Anirban Roy's GitHub" title="GitHub" className="glass-panel w-11 h-11 sm:w-12 sm:h-12 rounded-none flex items-center justify-center text-gray-400 hover:text-brand-red hover:-translate-y-1 transition-all duration-300">
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Anirban Roy's LinkedIn" title="LinkedIn" className="glass-panel w-11 h-11 sm:w-12 sm:h-12 rounded-none flex items-center justify-center text-gray-400 hover:text-brand-red hover:-translate-y-1 transition-all duration-300">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit Anirban Roy's Facebook" title="Facebook" className="glass-panel w-11 h-11 sm:w-12 sm:h-12 rounded-none flex items-center justify-center text-gray-400 hover:text-brand-red hover:-translate-y-1 transition-all duration-300">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href={socialLinks.email ? `mailto:${socialLinks.email}` : '#'} aria-label="Email Me" title="Email" className="glass-panel w-11 h-11 sm:w-12 sm:h-12 rounded-none flex items-center justify-center text-gray-400 hover:text-brand-red hover:-translate-y-1 transition-all duration-300">
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative lg:ml-auto w-full max-w-[400px]">
            <div className="aspect-square glass-panel p-3 rounded-3xl border border-white/5 shadow-2xl bg-black/20">
              <img 
                src="/WhatsApp%20Image%202026-08-20%20at%2016.32.25.jpeg" 
                alt="Anirban Roy" 
                className="rounded-[20px] w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]" 
              />
            </div>
          </div>
        </motion.section>

        {/* About & Education */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="about" 
          className="px-4 md:px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6 mb-20 md:mb-32 overflow-hidden"
        >
          <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-none relative overflow-hidden group">
            <User className="absolute -top-4 sm:-top-10 -right-4 sm:-right-10 w-32 h-32 sm:w-48 sm:h-48 text-[#F0F0F0]/[0.02] group-hover:text-brand-red/[0.04] transition-colors duration-500" />
            <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10 tracking-tighter uppercase">About Me</h3>
            <p className="text-gray-400 leading-relaxed relative z-10 font-medium text-sm sm:text-base">
              I am a dedicated Computer Science Engineering student with a deep passion for software development and complex problem-solving. My journey is driven by a constant desire to understand how systems work under the hood and to build efficient, scalable solutions that address real-world challenges.
            </p>
          </div>
          
          <div id="education" className="glass-panel p-6 sm:p-8 md:p-10 rounded-none relative overflow-hidden group flex flex-col">
            <GraduationCap className="absolute -top-4 sm:-top-10 -right-4 sm:-right-10 w-32 h-32 sm:w-48 sm:h-48 text-[#F0F0F0]/[0.02] group-hover:text-brand-red/[0.04] transition-colors duration-500" />
            <h3 className="text-2xl md:text-3xl font-black mb-8 relative z-10 tracking-tighter uppercase">Education</h3>
            
            <div className="relative z-10 border-l border-surface-border pl-6 sm:pl-8 ml-2 mt-auto">
              <div className="absolute w-2 h-2 bg-brand-red -left-[4.5px] top-1.5 rounded-none shadow-[0_0_10px_rgba(255,51,51,0.5)]"></div>
              <h4 className="text-[#F0F0F0] font-bold text-sm sm:text-base tracking-wide uppercase mb-1">
                B.Tech in Computer Science & Engineering
              </h4>
              <p className="text-brand-red font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
                Techno India University, West Bengal
              </p>
              <div className="inline-block bg-surface-glass border border-surface-border px-3 py-1 text-[10px] font-mono font-bold tracking-[0.2em] text-gray-400">
                2025 — 2029
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technical Arsenal */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="skills" 
          className="px-4 md:px-6 max-w-[1200px] mx-auto mb-20 md:mb-32 overflow-hidden"
        >
          <h3 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 text-[#F0F0F0] tracking-tighter uppercase break-words">Technical Arsenal</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-none flex flex-col items-center justify-center gap-3 sm:gap-4 group">
              <Terminal className="text-[#F0F0F0] group-hover:text-brand-red transition-colors w-6 h-6 sm:w-8 sm:h-8" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-gray-400 text-center">C / C++</span>
            </div>
            <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-none flex flex-col items-center justify-center gap-3 sm:gap-4 group">
              <span className="font-display font-black tracking-tighter text-xl sm:text-2xl text-[#F0F0F0] group-hover:text-brand-red transition-colors">HTML</span>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-gray-400 text-center">HTML & CSS</span>
            </div>
            <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-none flex flex-col items-center justify-center gap-3 sm:gap-4 group">
              <span className="font-display font-black tracking-tighter text-xl sm:text-2xl text-[#F0F0F0] group-hover:text-brand-red transition-colors">JS</span>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-gray-400 text-center">JavaScript</span>
            </div>
            <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-none flex flex-col items-center justify-center gap-3 sm:gap-4 group">
              <Database className="text-[#F0F0F0] group-hover:text-brand-red transition-colors w-6 h-6 sm:w-8 sm:h-8" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-gray-400 text-center">SQL</span>
            </div>
            
            <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-none flex flex-col items-center justify-center gap-3 sm:gap-4 group">
              <GitBranch className="text-[#F0F0F0] group-hover:text-brand-red transition-colors w-6 h-6 sm:w-8 sm:h-8" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-gray-400 text-center">Git</span>
            </div>
            <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-none flex flex-col items-center justify-center gap-3 sm:gap-4 group">
              <Github className="text-[#F0F0F0] group-hover:text-brand-red transition-colors w-6 h-6 sm:w-8 sm:h-8" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-gray-400 text-center">GitHub</span>
            </div>
            <div className="glass-panel p-6 md:p-8 rounded-none col-span-2 flex flex-col justify-center text-center sm:text-left">
              <span className="text-[10px] font-bold font-mono text-brand-red opacity-80 mb-2 uppercase tracking-[0.3em]">Currently Learning</span>
              <p className="text-gray-300 text-sm md:text-base font-medium">
                Advanced Data Structures, React.js ecosystem, and modern backend architecture patterns.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Featured Project */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="projects" 
          className="px-4 md:px-6 max-w-[1200px] mx-auto mb-20 md:mb-32 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-[#F0F0F0] tracking-tighter uppercase break-words">Featured Project</h3>
          </div>

          <div className="glass-panel rounded-none overflow-hidden grid md:grid-cols-2 group">
            <div className="h-48 sm:h-64 md:h-full relative overflow-hidden bg-[#000]">
              <img 
                src={learnefyLogo} 
                alt="Learnefy Platform" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-surface-border">
              <h4 className="text-2xl md:text-3xl font-black mb-2 text-[#F0F0F0] tracking-tighter uppercase break-words">Learnefy</h4>
              <p className="text-brand-red font-bold text-[10px] tracking-[0.2em] uppercase mb-6 block">Free & Accessible Technology Learning for Every Student</p>
              
              <div className="mb-6">
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  Learnefy is a learning platform designed to bring together free, high-quality YouTube tutorials and other freely available learning resources into structured learning paths. The platform helps students discover technology learning resources in one place, covering areas such as C, C++, Python, Java, Web Development, AI/ML, Data Science and other digital skills.
                </p>
              </div>
              
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block opacity-70">Problem</span>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  Students often struggle to identify the right tutorials among thousands of online videos. Many high-quality courses and learning platforms can also be expensive.
                </p>
              </div>
              
              <div className="mb-8">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block opacity-70">Solution</span>
                <p className="text-gray-300 text-sm leading-relaxed font-medium">
                  Organizes freely available learning resources into structured technology-focused learning paths, helping students find relevant educational content without depending on expensive courses.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-black/40 border border-surface-border rounded-none text-[10px] font-bold font-mono tracking-widest uppercase text-gray-300">Frontend & Backend Developer</span>
                <span className="px-3 py-1 bg-black/40 border border-surface-border rounded-none text-[10px] font-bold font-mono tracking-widest uppercase text-gray-300">Educational Technology</span>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 mt-auto">
                <a href="https://aistudio.google.com/apps/e4fc2094-8f0e-4b7b-8ad6-fe4a9bdfb88f?showAssistant=true&showPreview=true" target="_blank" rel="noopener noreferrer" className="text-[#0A0A0A] bg-brand-red hover:bg-brand-red-hover px-4 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors inline-flex items-center gap-2 rounded-none w-fit">
                  <ExternalLink size={14} /> View Prototype
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Certificates & Activities */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="certificates" 
          className="px-4 md:px-6 max-w-[1200px] mx-auto mb-20 md:mb-32 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-black text-[#F0F0F0] tracking-tighter uppercase break-words">Certificates & Activities</h3>
              <p className="text-gray-400 font-medium text-sm sm:text-base">Recognition of learning, participation and extracurricular involvement</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Certificate 1 */}
            <div className="glass-panel rounded-none overflow-hidden group flex flex-col">
              <div className="aspect-[4/3] bg-[#000] relative overflow-hidden border-b border-surface-border">
                <img 
                  src="/WhatsApp%20Image%202026-08-20%20at%2017.43.29.jpeg" 
                  alt="Google Student Ambassador Program 2026" 
                  className="w-full h-full object-contain p-2 md:p-4 group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-red mb-2 block">Certificate of Participation</span>
                  <h4 className="text-xl md:text-2xl font-black text-[#F0F0F0] tracking-tighter uppercase break-words leading-tight">Google Student Ambassador Program 2026 — Music Night Edition</h4>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6">
                  Actively participated in Music Night organized under the Google Student Ambassador Program 2026 and showcased creativity and enthusiasm.
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-gray-500 uppercase">12 June 2026</span>
                    <button 
                      onClick={() => setSelectedCertificate("/WhatsApp%20Image%202026-08-20%20at%2017.43.29.jpeg")}
                      className="text-[#0A0A0A] bg-[#F0F0F0] hover:bg-white px-4 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors inline-flex items-center justify-center gap-2 rounded-none"
                    >
                      <ExternalLink size={14} /> View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="glass-panel rounded-none overflow-hidden group flex flex-col">
              <div className="aspect-[4/3] bg-[#000] relative overflow-hidden border-b border-surface-border">
                <img 
                  src="/WhatsApp%20Image%202026-08-20%20at%2017.43.39.jpeg" 
                  alt="Virtual Internship — Sustainable Development" 
                  className="w-full h-full object-contain p-2 md:p-4 group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-red mb-2 block">Techno Billion AI</span>
                  <h4 className="text-xl md:text-2xl font-black text-[#F0F0F0] tracking-tighter uppercase break-words leading-tight">Virtual Internship — Sustainable Development, Innovation & Entrepreneurship</h4>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6">
                  Completed a virtual internship demonstrating consistent learning, active participation and understanding of the concepts covered.
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-gray-500 uppercase">Grade A</span>
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-gray-500 uppercase">1 March 2026</span>
                    </div>
                    <button 
                      onClick={() => setSelectedCertificate("/WhatsApp%20Image%202026-08-20%20at%2017.43.39.jpeg")}
                      className="text-[#0A0A0A] bg-[#F0F0F0] hover:bg-white px-4 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors inline-flex items-center justify-center gap-2 rounded-none"
                    >
                      <ExternalLink size={14} /> View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16">
            <h4 className="text-xl md:text-2xl font-black text-[#F0F0F0] tracking-tighter uppercase mb-6">Activities & Participation</h4>
            <div className="glass-panel p-6 sm:p-8 rounded-none relative overflow-hidden group flex flex-col border border-white/5 bg-black/20">
              <div className="relative z-10 border-l border-surface-border pl-6 sm:pl-8 ml-2">
                <div className="absolute w-2 h-2 bg-brand-red -left-[4.5px] top-1.5 rounded-none shadow-[0_0_10px_rgba(255,51,51,0.5)]"></div>
                <h5 className="text-[#F0F0F0] font-bold text-sm sm:text-base tracking-wide uppercase mb-1">
                  Music Night Edition
                </h5>
                <p className="text-brand-red font-bold text-[10px] tracking-[0.2em] uppercase mb-2">
                  Google Student Ambassador Program 2026
                </p>
                <p className="text-gray-400 font-medium text-sm mb-4">
                  Certificate of Participation
                </p>
                <div className="inline-block bg-surface-glass border border-surface-border px-3 py-1 text-[10px] font-mono font-bold tracking-[0.2em] text-gray-400 uppercase">
                  12 June 2026
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="contact" 
          className="px-4 md:px-6 max-w-[1200px] mx-auto overflow-hidden"
        >
          <div className="glass-panel rounded-none p-8 sm:p-12 md:p-16 text-center relative overflow-hidden border border-brand-red/30">
            <div className="absolute inset-0 bg-brand-red/[0.02]"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl font-black text-[#F0F0F0] tracking-tighter uppercase mb-4 break-words">Let's Connect</h3>
              <p className="text-gray-400 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium text-sm sm:text-base">
                Have an idea, opportunity, or just want to connect?
              </p>
              <a href={socialLinks.email ? `mailto:${socialLinks.email}` : '#'} className="bg-brand-red hover:bg-brand-red-hover text-[#0A0A0A] w-full sm:w-auto justify-center px-6 sm:px-8 py-4 rounded-none text-[10px] font-bold tracking-[0.2em] inline-flex items-center gap-2 transition-colors uppercase mb-8">
                <Send size={16} /> Let's Connect
              </a>
              
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Visit Anirban Roy's GitHub" title="GitHub" className="glass-panel w-11 h-11 sm:w-12 sm:h-12 rounded-none flex items-center justify-center text-gray-400 hover:text-brand-red hover:-translate-y-1 transition-all duration-300">
                  <Github size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Anirban Roy's LinkedIn" title="LinkedIn" className="glass-panel w-11 h-11 sm:w-12 sm:h-12 rounded-none flex items-center justify-center text-gray-400 hover:text-brand-red hover:-translate-y-1 transition-all duration-300">
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit Anirban Roy's Facebook" title="Facebook" className="glass-panel w-11 h-11 sm:w-12 sm:h-12 rounded-none flex items-center justify-center text-gray-400 hover:text-brand-red hover:-translate-y-1 transition-all duration-300">
                  <Facebook size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href={socialLinks.email ? `mailto:${socialLinks.email}` : '#'} aria-label="Email Me" title="Email" className="glass-panel w-11 h-11 sm:w-12 sm:h-12 rounded-none flex items-center justify-center text-gray-400 hover:text-brand-red hover:-translate-y-1 transition-all duration-300">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-surface-border bg-[#050505] py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display font-black tracking-tighter text-xl text-gray-300 uppercase">Anirban Roy</div>
          <div className="text-gray-500 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-center">
            © 2024 Anirban Roy. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Visit Anirban Roy's GitHub" className="hover:text-brand-red transition-colors">GitHub</a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Anirban Roy's LinkedIn" className="hover:text-brand-red transition-colors">LinkedIn</a>
            <a href={socialLinks.email ? `mailto:${socialLinks.email}` : '#'} aria-label="Email Me" className="hover:text-brand-red transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-5xl w-full max-h-[90vh] glass-panel border-white/10 overflow-hidden rounded-none shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="bg-black/50 hover:bg-brand-red text-white p-2 transition-colors border border-white/10 backdrop-blur-md"
                  aria-label="Close certificate"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="w-full h-full p-2 sm:p-4 bg-[#0A0A0A] flex items-center justify-center overflow-auto">
                <img
                  src={selectedCertificate}
                  alt="Certificate Full View"
                  className="w-full h-auto object-contain max-h-[85vh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
