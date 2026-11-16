'use client';

import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">About The Engineer</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Romil Movaliya
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
              Software Engineer, AWS Community Builder, and Certified Solutions Architect.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I am a dedicated <strong className="text-indigo-300">Software Engineer</strong> specializing in building complex, production-grade applications across mobile and cloud platforms. My core work encompasses high-velocity freight logistics platforms, courier telematics, and intelligent enterprise architectures.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Currently, I am actively engineering the <strong className="text-white">PTTR Freight Loadboard &amp; Driver Mobile Ecosystem</strong>, comprising two specialized React Native apps (@pttr/mobile and @pttr/driver) featuring live GPS telematics, camera bill-of-lading scanning, and real-time carrier dispatch operations.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              As an <strong className="text-amber-300">AWS Community Builder</strong> and AWS Certified Solutions Architect, I pair deep mobile frontend expertise with a solid understanding of cloud infrastructure, real-time WebSockets, and serverless architectures.
            </p>
            
            <div className="flex flex-wrap gap-2.5 pt-4 items-center">
              <a 
                href="https://www.linkedin.com/in/romilmovaliya/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-11 px-4 bg-[#0077b5]/15 border border-[#0077b5]/40 rounded-xl hover:bg-[#0077b5] text-blue-200 hover:text-white transition-all inline-flex items-center gap-2.5 text-xs font-semibold shadow-md shadow-blue-500/10 hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://github.com/romilmovaliya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-11 px-4 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-colors inline-flex items-center gap-2.5 text-xs font-medium"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a 
                href="https://dev.to/romil_movaliya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-11 px-4 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-colors inline-flex items-center gap-2.5 text-xs font-medium"
                aria-label="DEV Community Profile"
              >
                <img 
                  src="/images/dev-community.png" 
                  alt="DEV" 
                  className="w-4 h-4 rounded object-contain shrink-0" 
                />
                <span>DEV Community</span>
              </a>

              <a 
                href="https://builder.aws.com/community/@romil?tab=badges" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-11 px-4 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-colors inline-flex items-center gap-2.5 text-xs font-medium"
                aria-label="AWS Builder Center"
              >
                <img 
                  src="/images/aws-community-builder.png" 
                  alt="AWS" 
                  className="h-4 w-auto object-contain rounded-sm shrink-0" 
                />
                <span>AWS Community Builder</span>
              </a>

              <a 
                href="https://www.youtube.com/@TheApnaJosh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-11 px-4 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-colors inline-flex items-center gap-2.5 text-xs font-medium"
                aria-label="YouTube Channel"
              >
                <svg className="w-4 h-4 fill-red-500 shrink-0" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>@TheApnaJosh</span>
              </a>

              <a 
                href="#contact" 
                className="h-11 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors inline-flex items-center gap-2 text-xs font-medium shadow-sm"
                aria-label="Contact Romil"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
          
          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-600 to-amber-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-600 to-amber-400 mx-auto mb-4 shadow-2xl">
                      <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-950 bg-slate-900">
                        <img
                          src="/romil.jpg"
                          alt="Romil Movaliya"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                    <h3 className="text-white font-extrabold text-2xl">Romil Movaliya</h3>
                    <p className="text-indigo-400 font-semibold text-sm mt-1">Software Engineer</p>
                    <p className="text-slate-400 font-normal text-xs mt-0.5">AWS Community Builder &amp; SAA Certified</p>

                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">React Native (0.81)</span>
                      <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">TypeScript &amp; Redux</span>
                      <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">AWS Community Builder</span>
                      <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">Expo &amp; Reanimated</span>
                      <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">Live GPS &amp; Telematics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
