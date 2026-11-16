'use client';

import { useState, useEffect } from 'react';

const phrases = [
  "Romil Movaliya",
  "Software Engineer",
  "AWS Community Builder & Solutions Architect",
  "Production Cloud & Mobile Architect"
];

export default function Hero() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (text.length > 0) {
          setText(currentPhrase.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-12 pb-16">
      {/* Decorative Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse delay-1000"></div>
        <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* AWS Community Builder, DEV, YouTube & GitHub Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <a
            href="https://builder.aws.com/community/@romil?tab=badges"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium backdrop-blur-sm transition-all duration-200 shadow-sm"
          >
            <img 
              src="/images/aws-community-builder.png" 
              alt="AWS Community Builders" 
              className="h-3.5 w-auto object-contain shrink-0" 
            />
            <span>AWS Community Builder</span>
          </a>

          <a
            href="https://dev.to/romil_movaliya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium backdrop-blur-sm transition-all duration-200 shadow-sm"
          >
            <img 
              src="/images/dev-community.png" 
              alt="DEV Community" 
              className="w-3.5 h-3.5 object-contain rounded shrink-0" 
            />
            <span>DEV Community</span>
          </a>

          <a
            href="https://www.youtube.com/@TheApnaJosh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium backdrop-blur-sm transition-all duration-200 shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-red-500 shrink-0" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>@TheApnaJosh</span>
          </a>

          <a
            href="https://github.com/romil-movaliya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium backdrop-blur-sm transition-all duration-200 shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>

        {/* Featured Profile Photo Avatar Showcase */}
        <div className="relative mb-8 group">
          {/* Subtle Ambient Glow Halo */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-blue-500/20 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Premium Titanium Bezel Frame */}
          <div className="relative p-1.5 rounded-full bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-slate-900/90 border border-slate-700/50 shadow-2xl shadow-indigo-950/40">
            {/* Clean Unobstructed Photo Circle */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border border-slate-800 bg-slate-900 relative">
              <img
                src="/romil.jpg"
                alt="Romil Movaliya — Software Engineer"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Sleek Glassmorphic Pedestal Status Badge (Cleanly anchored at bottom rim, zero photo obstruction) */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-slate-900/95 backdrop-blur-md border border-slate-800 hover:border-slate-700 shadow-xl shadow-black/60 flex items-center gap-2 whitespace-nowrap transition-transform duration-300 group-hover:scale-105">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-tight">Available for Roles</span>
            </div>
          </div>
        </div>

        {/* Dynamic Typewriter Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-white min-h-[90px] sm:min-h-[110px] flex items-center justify-center tracking-tight">
          <span>{text}</span>
          <span className="terminal-cursor text-indigo-400 ml-1">|</span>
        </h1>

        {/* Core Profile Description */}
        <div className="max-w-2xl mx-auto mb-10 px-4">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Crafting high-performance applications, production freight &amp; courier telematics, and scalable cloud-connected architectures.
          </p>
        </div>

        {/* Hero Action CTAs with Unified Height & Lead UI/UX Aesthetics */}
        <div className="flex gap-3 justify-center flex-wrap items-center">
          <a 
            href="#projects" 
            className="h-11 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 text-sm shadow-sm shadow-indigo-600/20 group"
          >
            <span>Explore Core Projects</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="13 5 20 12 13 19" />
            </svg>
          </a>
          <a 
            href="#achievements" 
            className="h-11 px-6 bg-slate-900 border border-slate-800 text-slate-300 font-medium rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-colors text-sm inline-flex items-center justify-center"
          >
            AWS Certifications &amp; Badges
          </a>
          <a 
            href="#contact" 
            className="h-11 px-6 bg-slate-900 border border-slate-800 text-slate-300 font-medium rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-colors text-sm inline-flex items-center justify-center"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
