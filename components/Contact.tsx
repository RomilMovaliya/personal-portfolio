'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Romil,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n-- Sent via Portfolio Contact Form`
    );
    
    window.location.href = `mailto:romilmovaliya2929@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Get In Touch
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
              Available for software engineering, UK freight telematics, and cloud architecture consulting.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Clean, Structured Info Cards */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={100} className="space-y-3.5">
            
            {/* 1. Direct Email Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-3.5">
                {/* Neutral Minimal Icon Box */}
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-slate-400">Direct Email</span>

                  <p className="mt-1">
                    <a
                      href="mailto:romilmovaliya2929@gmail.com"
                      className="text-white hover:text-indigo-300 font-semibold text-sm sm:text-base transition-colors truncate block"
                    >
                      romilmovaliya2929@gmail.com
                    </a>
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Direct inbox · Response within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Location Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-slate-400">Location</span>
                    <span className="text-xs text-slate-400">IST (UTC+5:30)</span>
                  </div>

                  <p className="text-white font-semibold text-sm sm:text-base mt-1">
                    Surat, Gujarat, India
                  </p>

                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <p className="text-xs text-slate-400">
                      Available for Worldwide Remote &amp; Hybrid Roles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. LinkedIn Profile Card */}
            <a
              href="https://www.linkedin.com/in/romilmovaliya/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors block group"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-slate-400">LinkedIn Profile</span>
                    <span className="text-xs text-slate-400 group-hover:text-white transition-colors flex items-center gap-1">
                      <span>Connect</span>
                      <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </div>

                  <p className="text-white group-hover:text-indigo-300 font-semibold text-sm sm:text-base mt-1 transition-colors truncate">
                    linkedin.com/in/romilmovaliya
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Professional network, recommendations &amp; endorsements
                  </p>
                </div>
              </div>
            </a>

            {/* Quick Profile Links: GitHub, AWS Builder, DEV Community, YouTube */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href="https://github.com/romilmovaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-3.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://builder.aws.com/community/@romil?tab=badges"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-3.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
              >
                <img src="/images/aws-community-builder.png" alt="AWS" className="h-3.5 w-auto object-contain shrink-0" />
                <span>AWS Builder</span>
              </a>

              <a
                href="https://dev.to/romil_movaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-3.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
              >
                <img src="/images/dev-community.png" alt="DEV" className="w-3.5 h-3.5 rounded object-contain shrink-0" />
                <span>DEV Community</span>
              </a>

              <a
                href="https://www.youtube.com/@TheApnaJosh"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-3.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-red-500 shrink-0" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>@TheApnaJosh</span>
              </a>
            </div>
            </ScrollReveal>
          </div>
          
          {/* Right Column: Clean Form */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={150}>
              <form onSubmit={handleSubmit} className="p-5 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950 text-white rounded-lg border border-slate-800 focus:border-slate-600 focus:outline-none transition-colors text-sm placeholder-slate-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950 text-white rounded-lg border border-slate-800 focus:border-slate-600 focus:outline-none transition-colors text-sm placeholder-slate-500"
                  placeholder="you@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3.5 py-2.5 bg-slate-950 text-white rounded-lg border border-slate-800 focus:border-slate-600 focus:outline-none transition-colors resize-none text-sm placeholder-slate-500"
                  placeholder="How can Romil help with your project?"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full h-11 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium text-sm transition-all duration-200 disabled:opacity-50 flex items-center justify-center shadow-sm shadow-indigo-600/20"
              >
                {status === 'sending' ? (
                  <span>Sending...</span>
                ) : status === 'success' ? (
                  <span>Message Dispatched ✓</span>
                ) : (
                  <span>Send Message</span>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center pt-0.5">
                Delivered directly to romilmovaliya2929@gmail.com
              </p>
            </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
