'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

interface ProjectPreviewScreen {
  src: string;
  label: string;
}

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  metricNumber: string;
  metricLabel: string;
  accentGlow: string;
  metricColor: string;
  tagColor: string;
  route: string;
  description: string;
  tags: string[];
  screenBadge?: string;
  screenCount?: string;
  previewScreenshots?: ProjectPreviewScreen[];
}

const featuredProjects: ProjectData[] = [
  {
    id: 'pttr',
    title: 'PTTR Freight & Fleet Telematics',
    subtitle: 'Dual React Native Mobile Ecosystem (@pttr/mobile + @pttr/driver)',
    badge: 'Production Logistics',
    metricNumber: '2 Native Apps',
    metricLabel: 'CARRIER & DRIVER TELEMATICS',
    accentGlow: 'from-cyan-500/10 via-blue-500/5 to-transparent hover:border-cyan-500/30',
    metricColor: 'text-cyan-400',
    tagColor: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-200 hover:border-cyan-500/40',
    route: '/projects/pttr',
    description: 'Enterprise freight ecosystem synchronizing motor carriers, dispatchers, and truck drivers with background GPS telemetry, automated BOL camera capture, and real-time load booking.',
    tags: ['React Native 0.76', 'Fleet Telematics', 'Camera eBOL Scanner', 'Supabase Monorepo', 'Claude Code MCP'],
  },
  {
    id: 'nrex',
    title: 'NREX UK Courier Logistics Suite',
    subtitle: 'Multi-Role React Native Courier Ecosystem (iOS & Android)',
    badge: 'UK Nationwide Suite',
    metricNumber: '19 Screens',
    metricLabel: 'CUSTOMER & COURIER ECOSYSTEM',
    accentGlow: 'from-indigo-500/10 via-purple-500/5 to-transparent hover:border-indigo-500/30',
    metricColor: 'text-indigo-400',
    tagColor: 'border-indigo-500/20 bg-indigo-500/5 text-indigo-200 hover:border-indigo-500/40',
    route: '/projects/nrex',
    screenBadge: '12 Customer · 7 Courier Rider',
    screenCount: '19 Screens',
    previewScreenshots: [
      { src: '/images/projects/nrex-customer/02-home-dashboard.png', label: 'Customer Hub' },
      { src: '/images/projects/nrex-customer/03-parcel-tracking.png', label: 'Realtime Tracking' },
      { src: '/images/projects/nrex-rider/03-parcel-scanner.png', label: 'Barcode Scanner' },
      { src: '/images/projects/nrex-customer/05-book-step2-size-pricing.png', label: 'Dynamic Pricing' },
    ],
    description: 'Complete multi-role UK courier platform providing synchronized mobile applications for customer parcel booking, Royal Mail postcode lookup, and sub-300ms laser/camera sorting.',
    tags: ['Zebra Laser EMDK', 'Royal Mail PAF', 'Live Van GPS Telematics', 'Dynamic Island & POD', 'Multi-Role Monorepo'],
  },
  {
    id: 'nuvio',
    title: 'Nuvio Local Commerce Assistant',
    subtitle: 'Pocket Marketing & Social CRM for Cafés, Salons & High-Street Retail',
    badge: 'Production CRM App',
    metricNumber: '8 Workflows',
    metricLabel: '22+ MOBILE SCREENS SHIPPED',
    accentGlow: 'from-amber-500/10 via-purple-500/5 to-transparent hover:border-amber-500/30',
    metricColor: 'text-amber-400',
    tagColor: 'border-amber-500/20 bg-amber-500/5 text-amber-200 hover:border-amber-500/40',
    route: '/projects/nuvio',
    screenBadge: '8 Core Workflows',
    screenCount: '8 Screens',
    previewScreenshots: [
      { src: '/images/projects/nuvio/02-home-dashboard.png', label: 'Command Dashboard' },
      { src: '/images/projects/nuvio/05-pulse-inbox-reviews.png', label: 'AI Review Assistant' },
      { src: '/images/projects/nuvio/06-micro-profile.png', label: 'Micro Profile' },
      { src: '/images/projects/nuvio/07-loyalty-qr-code.png', label: 'In-Store QR Capture' },
    ],
    description: 'All-in-one pocket marketing platform for small businesses. Connects Instagram, Facebook & Google to schedule posts, automate review replies with AI, and capture in-store loyalty with QR.',
    tags: ['Meta & Google OAuth', 'AI Review Assistant', 'In-Store QR Loyalty', 'Supabase & Expo', 'Marketing CRM'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
              Selected Works
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Featured Mobile Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              High-performance React Native mobile applications engineered for freight logistics, UK courier operations, and intelligent enterprise workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* The 3 Core Projects Display with Sleek, Reduced-Content Architecture */}
        <div className="space-y-8">
          {featuredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 120}>
              <div
                className={`rounded-3xl p-6 sm:p-8 md:p-10 bg-slate-900/60 border border-slate-800 shadow-2xl transition-all duration-300 backdrop-blur-sm relative overflow-hidden group ${project.accentGlow}`}
              >
                {/* Atmospheric Corner Ambient Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none rounded-tr-3xl" />

                {/* Top Row: Title, Role Badge, and Reference-Style Top-Right Metric */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800/90 text-slate-300 border border-slate-700/60">
                        {project.badge}
                      </span>
                      <span className="text-slate-500 font-mono text-xs">
                        Project #{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Top-Right Metric Highlight (Matching Reference Screenshot) */}
                  <div className="text-left sm:text-right shrink-0">
                    <div className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${project.metricColor}`}>
                      {project.metricNumber}
                    </div>
                    <div className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mt-0.5 font-bold">
                      {project.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Concise Punchy 2-Line Description (No giant wall of bullet points) */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl mb-4">
                  {project.description}
                </p>

                {/* Single Row of Curated Pill Tags (Matching Reference Screenshot) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${project.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Production Screenshots Preview Showcase Deck (for visual impact) */}
                {project.previewScreenshots && project.previewScreenshots.length > 0 && (
                  <div className="pt-6 border-t border-slate-800/80 mb-6">
                    {/* Cohesive Studio Header Strip */}
                    <div className="flex items-center justify-between gap-3 mb-4 p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                            <path d="M12 18h.01"/>
                          </svg>
                        </span>
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-xs font-bold text-white tracking-tight truncate">
                            Production UI
                          </span>
                          {project.screenBadge && (
                            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-[10px] font-medium text-slate-300 whitespace-nowrap">
                              {project.screenBadge}
                            </span>
                          )}
                        </div>
                      </div>

                      <Link
                        href={project.route}
                        className="group/cta inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-indigo-600 border border-slate-800 hover:border-indigo-500 text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 shrink-0 shadow-sm"
                      >
                        <span>Explore Gallery</span>
                        <span className="hidden sm:inline text-[11px] text-slate-400 group-hover/cta:text-indigo-200">({project.screenCount})</span>
                        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5 text-indigo-400 group-hover/cta:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>

                    {/* 4 Sleek Phone Mockups with Micro Bezel */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      {project.previewScreenshots.map((screen, sIdx) => (
                        <Link
                          key={sIdx}
                          href={project.route}
                          className="group/screen relative rounded-2xl p-1.5 sm:p-2 bg-slate-950 border border-slate-800 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 block overflow-hidden hover:-translate-y-1.5"
                        >
                          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-slate-900 rounded-full z-20 pointer-events-none border border-slate-800/60" />
                          <div className="relative rounded-xl overflow-hidden aspect-[9/19] bg-slate-900 shadow-inner">
                            <img
                              src={screen.src}
                              alt={screen.label}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/screen:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/screen:opacity-100 transition-opacity duration-200 pointer-events-none">
                              <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[10px] font-medium text-white shadow-lg">
                                View UI
                              </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-2.5 flex items-end">
                              <span className="text-[11px] font-semibold text-white truncate w-full text-center tracking-tight">
                                {screen.label}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* For PTTR: High-Tech Telematics Architecture Strip */}
                {project.id === 'pttr' && (
                  <div className="pt-5 border-t border-slate-800/80 mb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { label: 'Carrier Routing', value: 'Commercial Truck GPS' },
                        { label: 'Paperwork eBOL', value: 'Camera Edge Processing' },
                        { label: 'Driver Telematics', value: 'Real-time EventBridge' },
                        { label: 'Mobile Monorepo', value: 'Turborepo + Supabase' },
                      ].map((item, iIdx) => (
                        <div key={iIdx} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                          <div className="text-[10px] font-mono text-slate-500">{item.label}</div>
                          <div className="text-xs font-semibold text-slate-200 mt-0.5 truncate">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons Row */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={project.route}
                    className="h-10 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm transition-all duration-200 inline-flex items-center gap-2 shadow-sm shadow-indigo-600/20 group/btn"
                  >
                    <span>View Mobile Case Study</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1 shrink-0"
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
                  </Link>

                  <a
                    href="#contact"
                    className="h-10 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 font-medium text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
                  >
                    <span>Discuss Architecture</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
