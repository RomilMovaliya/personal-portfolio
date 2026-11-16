import { notFound } from 'next/navigation';
import Link from 'next/link';
import NrexShowcase from '@/components/NrexShowcase';
import ProjectScreenshotGallery from '@/components/ProjectScreenshotGallery';
import { NUVIO_SCREENSHOTS } from '@/lib/projectScreenshots';

export function generateStaticParams() {
  return [
    { slug: 'nrex' },
    { slug: 'pttr' },
    { slug: 'nuvio' },
  ];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === 'nrex') {
    return <NrexShowcase isStandalonePage={true} />;
  }

  if (slug === 'pttr') {
    return (
      <main className="min-h-screen bg-slate-950 text-white py-16 sm:py-24 px-4 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto">
          {/* Back Navigation Bar */}
          <div className="mb-10 flex items-center justify-between">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800/90 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium backdrop-blur-md shadow-sm hover:shadow-indigo-500/10 hover:shadow-lg transition-all duration-300"
            >
              <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700/60 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 flex items-center justify-center transition-all duration-200 text-slate-400">
                <svg className="w-3 h-3 transition-transform duration-200 group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </span>
              <span className="tracking-tight font-medium">Back to Portfolio</span>
            </Link>

            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-400">
              <span>projects</span>
              <span className="text-slate-600">/</span>
              <span className="text-white font-semibold">pttr</span>
            </div>
          </div>

          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Active Production Project • React Native Mobile Frontend Architecture
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
              PTTR Freight Loadboard & Transport Management System (TMS)
            </h1>
            <p className="text-indigo-300 text-lg sm:text-xl font-semibold mb-6">
              Two Specialized React Native Mobile Apps: Loadboard Carrier Exchange + Driver Field Telematics
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl">
              PTTR is an enterprise freight logistics ecosystem connecting motor carriers, dispatchers, and truck drivers. 
              Romil Movaliya engineered the mobile frontend architecture for both native mobile applications, utilizing 
              <strong> Claude Code with multi-agent MCP server capabilities</strong> (GitHub, Supabase, Google Drive bug sheets, and Figma design tokens).
            </p>
          </div>

          {/* Multi-Agent Claude Code & MCP Workflow Spotlight */}
          <div className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 border-2 border-indigo-500/40 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🤖</span>
              <div>
                <h3 className="text-2xl font-bold text-white">Multi-Agent Claude Code Engineering Architecture</h3>
                <p className="text-xs text-indigo-300 font-mono">Developed & Maintained with Connected Model Context Protocol (MCP) Servers</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              This project was architected utilizing Claude Code as an autonomous agentic pairing partner, coordinating complex tasks across multiple specialized MCP integrations:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <span>🐙</span> GitHub MCP
                </div>
                <div className="text-xs text-gray-400">
                  Automated branch management, pull request reviews, monorepo package versioning, and commit trace audits.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <span>⚡</span> Supabase MCP
                </div>
                <div className="text-xs text-gray-400">
                  Live schema inspections, real-time database queries, RLS security policy validation, and TypeScript type sync.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <span>📊</span> Google Drive MCP
                </div>
                <div className="text-xs text-gray-400">
                  Direct spreadsheet parsing of QA bug reports, field testing ticket triage, and automated resolution tracking.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <span>🎨</span> Figma MCP
                </div>
                <div className="text-xs text-gray-400">
                  Direct token extraction from mobile Figma prototypes, auto-converting layouts into pixel-perfect React Native components.
                </div>
              </div>
            </div>
          </div>

          {/* The Two Dedicated Mobile Apps */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* App 1: PTTR Loadboard Mobile */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">📱</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold">
                    @pttr/mobile
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">PTTR Loadboard Mobile App</h3>
                <p className="text-xs text-indigo-400 font-semibold mb-4">React Native • Expo • Redux Toolkit • Stripe</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Built for freight dispatchers, fleet owners, and owner-operators to search live loads, place bids, review carrier rate confirmations, and handle instant mobile invoice factoring.
                </p>

                <div className="space-y-2.5 text-xs text-gray-300 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-400">▹</span>
                    <span><strong>Live Load Search & Filters:</strong> Equipment type (Dry Van, Reefer, Flatbed), deadhead radius, and rate-per-mile filters.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-400">▹</span>
                    <span><strong>Instant Bidding & Rate Confirmation:</strong> One-tap counter-offer submission with instant push notifications via Notifee and FCM.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-400">▹</span>
                    <span><strong>Carrier Identity & Safety Check:</strong> In-app verification integrating FMCSA safety scores and insurance validation.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-400">▹</span>
                    <span><strong>Stripe In-App Payments:</strong> Secure mobile payment processing for load booking fees and premium loadboard access.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-gray-400 font-mono">
                Stack: React Native, Expo, React Navigation, Redux Toolkit, TanStack Query, Nitro Modules
              </div>
            </div>

            {/* App 2: PTTR Driver Mobile */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">🚛</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                    @pttr/driver
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">PTTR Driver Mobile App</h3>
                <p className="text-xs text-emerald-400 font-semibold mb-4">React Native • Fleet Telematics • Document Scanner • GPS Tracking</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Built specifically for commercial truck drivers on the road. Provides truck-safe turn-by-turn routing, live GPS tracking for dispatchers, and camera edge-detection for BOL/POD paperwork capture.
                </p>

                <div className="space-y-2.5 text-xs text-gray-300 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400">▹</span>
                    <span><strong>Commercial Truck Routing &amp; Telematics:</strong> Commercial vehicle navigation respecting bridge heights, weight limits, and hazardous material constraints.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400">▹</span>
                    <span><strong>Document Scanner Plugin:</strong> Auto-crops, deskews, and enhances paper Bill of Lading (BOL) and delivery receipts from camera.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400">▹</span>
                    <span><strong>Background Location Tracking:</strong> Continuous GPS telematics streaming via Expo Location and TaskManager for real-time load tracking.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400">▹</span>
                    <span><strong>In-App PDF Viewer:</strong> Native PDF inspection for rate confirmations and shipping documents using react-native-pdf.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-gray-400 font-mono">
                Stack: React Native, react-native-document-scanner-plugin, react-native-pdf, Fleet Telematics Engine, MMKV
              </div>
            </div>
          </div>

          {/* Monorepo Architecture Overview */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Turborepo Multi-Package Monorepo Architecture</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Both mobile applications share unified internal packages across the monorepo, ensuring 100% type safety and zero duplicate business logic:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                '@pttr/ui-mobile (Shared UI Components)',
                '@pttr/mobile-telematics (Fleet Telematics Engine)',
                '@pttr/paperwork-capture (BOL Camera Engine)',
                '@pttr/mobile-telemetry (Location Tracker)',
                '@pttr/mobile-push (Notifee & FCM Push)',
                '@pttr/mobile-auth (Session & Tokens)',
                '@pttr/identity-check (Carrier Safety)',
                '@pttr/supabase-client (Data Client)',
              ].map((pkg, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-indigo-300 font-mono text-xs"
                >
                  {pkg}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8 border-t border-slate-800">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-600/30 inline-flex items-center gap-2"
            >
              <span>✉️</span>
              <span>Discuss PTTR Mobile Architecture With Romil</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (slug === 'nuvio') {
    return (
      <main className="min-h-screen bg-slate-950 text-white py-16 sm:py-24 px-4 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-purple-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto">
          {/* Back Navigation Bar */}
          <div className="mb-10 flex items-center justify-between">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800/90 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium backdrop-blur-md shadow-sm hover:shadow-indigo-500/10 hover:shadow-lg transition-all duration-300"
            >
              <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700/60 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 flex items-center justify-center transition-all duration-200 text-slate-400">
                <svg className="w-3 h-3 transition-transform duration-200 group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </span>
              <span className="tracking-tight font-medium">Back to Portfolio</span>
            </Link>

            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-400">
              <span>projects</span>
              <span className="text-slate-600">/</span>
              <span className="text-white font-semibold">nuvio</span>
            </div>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              Production Mobile App • React Native (Expo) &amp; Supabase
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
              Nuvio — All-in-One Local Business Marketing App
            </h1>
            <p className="text-purple-300 text-lg sm:text-xl font-semibold mb-6">
              Pocket Marketing Assistant for Cafés, Salons, and Retail Shops
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl mb-6">
              Nuvio is a specialized mobile application built for small and local business owners. It provides a single, unified mobile command center to manage their online reputation, social media, customer relationships, and email promotions—with server-side AI to help draft high-converting copy. In short, it’s a <strong>pocket marketing assistant</strong> for local business owners.
            </p>

            {/* One-Line Summary Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/30 text-sm text-gray-200 shadow-xl">
              <div className="flex items-center gap-2 text-purple-300 font-bold text-xs uppercase tracking-wider mb-2">
                <span>💡</span> The Core Experience in One Line
              </div>
              <p className="italic text-base text-gray-100">
                &ldquo;You collect customers with a QR code, manage reviews and social posts across Instagram, Facebook &amp; Google, send newsletters and offers, manage staff and track it all on a dashboard, with AI helping you write.&rdquo;
              </p>
            </div>
          </div>

          {/* Architecture & Multi-Platform Integrations */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl mb-2">📱</div>
              <div className="font-bold text-white text-sm mb-1">React Native (Expo)</div>
              <div className="text-xs text-gray-400 leading-relaxed">
                Single cross-platform TypeScript codebase delivering 60fps native performance on iOS &amp; Android with custom Drawer and Stack navigators.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-bold text-white text-sm mb-1">Supabase Backend</div>
              <div className="text-xs text-gray-400 leading-relaxed">
                Handles PostgreSQL database relations, authentication, storage, and serverless Edge Functions for background tasks.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl mb-2">🌐</div>
              <div className="font-bold text-white text-sm mb-1">Social Graph APIs</div>
              <div className="text-xs text-gray-400 leading-relaxed">
                Deep integrations with Instagram Graph API, Facebook Pages API, and Google Business Profile to publish, schedule, and aggregate comments.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl mb-2">🤖</div>
              <div className="font-bold text-white text-sm mb-1">Secure Server AI</div>
              <div className="text-xs text-gray-400 leading-relaxed">
                AI features invoke server-side OpenAI proxies so API keys never reside on the mobile client, safeguarding credentials and rate limits.
              </div>
            </div>
          </div>

          {/* Real Production Mobile Application Screens Gallery */}
          <ProjectScreenshotGallery
            projectName="Nuvio Mobile"
            title="Live Production Mobile Screens"
            subtitle="Explore 8 live production React Native screens from Nuvio: from dashboard analytics and social platform OAuth hubs to AI reviews and QR customer loyalty."
            items={NUVIO_SCREENSHOTS}
          />

          {/* 13 Main Features Deep Dive */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Comprehensive Mobile Product Suite</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">13 Core Pillars of Nuvio</h2>
              <p className="text-gray-400 text-sm max-w-2xl mx-auto mt-2">
                Engineered from the ground up to solve daily marketing friction for busy brick-and-mortar proprietors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">🚀</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">Pillar 01</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Sign Up, Login &amp; Guided Onboarding</h3>
                  <p className="text-xs text-gray-400 leading-relaxed space-y-1">
                    Sign up and login via email &amp; password with OTP (one-time passcode) verification, secure password reset, and one-tap Google Sign-In. 
                    Includes an interactive onboarding wizard walking owners through business setup (name, category, contact, operating hours), social platform linking, and a celebration completion screen.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">📊</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">Pillar 02</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Business Command Dashboard</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    A visual home dashboard showing business health at a glance: post frequencies over time, customer and staff metrics, email campaign delivery stats, and quick-action analytical cards.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-purple-500/30 bg-purple-950/20 hover:border-purple-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">💬</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold">Pillar 03 • AI Powered</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Aggregated Reviews &amp; Comments</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Unifies Google Business reviews, Instagram comments, and Facebook comments into a single feed. Business owners can reply instantly without opening multiple apps, with <strong>&ldquo;Improve with AI&rdquo;</strong> suggestions generating polite, professional responses.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">📸</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">Pillar 04</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Social Media Posting &amp; Scheduler</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Create, schedule, and publish posts directly to Facebook and Instagram from mobile. Supports high-res image and video uploads with aspect-ratio cropping and video thumbnail extraction. Includes AI caption enhancement and a past post visual grid.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">🔗</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">Pillar 05</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Get Connected (Social Accounts)</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Secure OAuth connection hub to link or unlink Facebook, Instagram, and Google Business profiles. Allows owners with multi-location or multiple business entities to switch active connected accounts instantly.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">📲</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">Pillar 06</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">QR Code &amp; Customer Data Collection</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Each business generates a unique QR code to display at the register or table. Customers scan, submit their details, and are prompted to follow or review. The owner tracks collected customer lists, &ldquo;new this week&rdquo; counts, and active vs. expired offers with one-tap CSV export.
                  </p>
                </div>
              </div>

              {/* Feature 7 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">🏷️</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">Pillar 07</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Offers and Promotions</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Create, edit, and schedule promotional offers, happy hours, or customer discounts. Integrated with AI to polish promotional descriptions. Offers automatically sync to the public Micro Profile and the QR customer landing screen.
                  </p>
                </div>
              </div>

              {/* Feature 8 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">✉️</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">Pillar 08</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Newsletter &amp; Email Marketing</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Drag-and-drop mobile email builder using business logos, brand color palettes (preset or custom HEX), offer callouts, and clear CTA buttons. AI writes engaging email body copy. Filter recipients, broadcast emails, and review delivery logs.
                  </p>
                </div>
              </div>

              {/* Feature 9 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-indigo-500/30 bg-indigo-950/20 hover:border-indigo-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">🌐</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold">Pillar 09 • New Feature</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Micro Profile Mini-Website</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    A lightweight public mini-website auto-generated for each business displaying operating hours, social handles, review triggers, active discounts, and phone/directions buttons. Features live in-app preview and visitor analytics.
                  </p>
                </div>
              </div>

              {/* Feature 10 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">👥</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">Pillar 10</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Staff Access &amp; Team Management</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Owners can invite staff by email, adjust role permissions, or revoke access. Granular RBAC supporting <strong>Owner</strong>, <strong>Admin</strong>, and <strong>Staff</strong> roles with segregated view permissions and an immutable staff activity log.
                  </p>
                </div>
              </div>

              {/* Feature 11 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">🔔</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">Pillar 11</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Notifications &amp; Deep Linking</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Push notifications powered by Firebase Cloud Messaging (FCM) on iOS &amp; Android, plus an in-app notification center. Tapping any push alert automatically switches context to the right business and opens the relevant review or comment.
                  </p>
                </div>
              </div>

              {/* Feature 12 & 13 */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">💳</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">Pillars 12 &amp; 13</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Subscription Plans &amp; User Profile</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Three tiered plans: <strong>Free</strong>, <strong>Growth</strong>, and <strong>Premium</strong>. The mobile client actively enforces plan limits (number of staff, customer list size, active offers, comments, and AI generation credits) with upgrade prompts, alongside complete profile editing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Engineering Breakdown Table */}
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 mb-16 shadow-2xl">
            <div className="mb-6">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1">Architecture In Detail</div>
              <h3 className="text-2xl font-bold text-white">Mobile Frontend Engineering Work</h3>
              <p className="text-xs text-gray-400 mt-1">A transparent view of what was built across the React Native mobile codebase:</p>
            </div>

            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-purple-300 uppercase tracking-wider font-mono">
                    <th className="py-3 px-4 font-bold w-1/4">Functional Area</th>
                    <th className="py-3 px-4 font-bold">Engineering Implementation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-gray-300">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">Screens &amp; Navigation</td>
                    <td className="py-3 px-4 text-gray-300">About 22 screens, with a side drawer menu (Dashboard, Reviews, Social Posting, QR, Micro Profile, Staff, and more) and stack navigation for flows like login and onboarding.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">Forms &amp; Input Validation</td>
                    <td className="py-3 px-4 text-gray-300">Login, signup, business setup, customer capture, and staff forms built with Formik and Yup schema validation.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">Third-Party Logins &amp; OAuth</td>
                    <td className="py-3 px-4 text-gray-300">Native Google Sign-In, plus Facebook and Instagram account connection workflows through secure OAuth.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">Media Ingestion &amp; Processing</td>
                    <td className="py-3 px-4 text-gray-300">Picking, cropping, and uploading images and videos, automated video thumbnail generation, and saving/sharing dynamic QR codes.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">Charts &amp; Visual Analytics</td>
                    <td className="py-3 px-4 text-gray-300">Animated pie, bar, and line charts on the dashboard, customer QR metrics, and Micro Profile visitor screens using react-native-gifted-charts.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">Server-Side AI Assistance</td>
                    <td className="py-3 px-4 text-gray-300">&ldquo;Improve with AI&rdquo; buttons for captions, review replies, email copy, and discount offers. AI runs securely on the backend server, so OpenAI keys never sit in the mobile client.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">Push Notifications</td>
                    <td className="py-3 px-4 text-gray-300">Firebase Cloud Messaging (FCM) configured for Android and iOS background/foreground handlers with custom deep linking.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">Data &amp; State Management</td>
                    <td className="py-3 px-4 text-gray-300">React Query (TanStack Query) fetches, caches, and invalidates server data, while Redux Toolkit manages app-wide state such as the authenticated user and active business context.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">Subscription Plan Gating</td>
                    <td className="py-3 px-4 text-gray-300">Granular client-side checks and upgrade barriers that block or allow features based on the business&apos;s active subscription tier (Free, Growth, Premium).</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">UI Polish &amp; Micro-Interactions</td>
                    <td className="py-3 px-4 text-gray-300">Interactive toast alerts, custom modal dialogs, real-time preview screens, tooltip guides, keyboard handling, and responsive font-scaling across all device sizes.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Stack Tags */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Mobile Tech Stack &amp; Libraries</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Production-ready mobile libraries powering the Nuvio application:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                'React Native (0.81)',
                'Expo (~54)',
                'Supabase PostgreSQL & Auth',
                'Instagram Graph API',
                'Facebook Pages API',
                'Google Business Profile API',
                'Google Sign-In OAuth',
                'React Query (TanStack)',
                'Redux Toolkit',
                'Formik & Yup',
                'react-native-gifted-charts',
                '@react-native-firebase/messaging',
                'OpenAI Server-Side Proxy',
                'PapaParse CSV Exporter',
                'react-native-reanimated',
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-purple-300 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8 border-t border-slate-800">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-all shadow-lg shadow-purple-600/30 inline-flex items-center gap-2"
            >
              <span>✉️</span>
              <span>Discuss Nuvio Mobile Architecture With Romil</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  notFound();
}
