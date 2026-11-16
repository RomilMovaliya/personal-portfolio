'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ProjectScreenshotGallery from '@/components/ProjectScreenshotGallery';
import { NREX_SCREENSHOTS } from '@/lib/projectScreenshots';

// The 26 Comprehensive Pillars for NREX - Parcel Delivery & Courier Services UK (Mobile Frontend Architecture)
interface Pillar {
  id: number;
  title: string;
  category: 'core' | 'mobile' | 'logistics' | 'security' | 'cloud';
  summary: string;
  badge: string;
  icon: string;
  features: { name: string; desc: string; ukContext?: string }[];
}

const PILLARS_DATA: Pillar[] = [
  {
    id: 1,
    title: 'Onboarding & First-Run Experience',
    category: 'mobile',
    badge: 'Mobile UX',
    icon: '🚀',
    summary: 'High-conversion, frictionless React Native app bootstrap across iOS and Android with customized UK driver and sender onboarding.',
    features: [
      { name: 'Splash Screen & Branded Intro', desc: 'Native launch screen on cold boot followed by crisp Lottie courier van animations.', ukContext: 'NREX branded UK logistics theme.' },
      { name: 'Interactive Walkthrough Carousel', desc: 'Swipeable cards explaining instant booking, doorstep collection, and real-time live map tracking.' },
      { name: 'Permission Priming Screens', desc: 'High-conversion pre-prompts for Camera (barcode scans), Location (precise doorstep drop), and Notifications before OS dialogs.' },
      { name: 'Progressive Onboarding & Guest Mode', desc: 'Instant rate calculation and UK postal lookup without registration; prompts signup only at payment checkout.' },
      { name: 'Account Setup Wizard & Referrals', desc: 'Step-by-step sender profile setup, business account registration, and referral code entry with £5 first-delivery credit.' },
      { name: 'Deferred Deep Linking', desc: 'Seamlessly opens targeted parcel tracking link immediately after App Store or Google Play install.' },
    ],
  },
  {
    id: 2,
    title: 'Authentication & Identity',
    category: 'security',
    badge: 'Auth & Security',
    icon: '🔐',
    summary: 'Multi-tenant, high-security mobile authentication supporting biometric unlock, passkeys, and role-based access for drivers and senders.',
    features: [
      { name: 'UK Phone Number + Auto-OTP', desc: 'SMS verification via UK +44 numbers with iOS autofill keyboard suggestion and Android SMS Retriever API.' },
      { name: 'Email, Magic Links & Social SSO', desc: 'Passwordless login with deep-linked magic links plus Apple and Google Sign-In with private relay support.' },
      { name: 'Biometric Unlock & Local App Lock', desc: 'Face ID, Touch ID, and Android BiometricPrompt for fast unlock on courier devices without re-typing passwords in the field.' },
      { name: 'Role-Based Access Control (RBAC)', desc: 'Distinct authorization scopes: Customer Sender, Courier Driver, Regional Hub Sorter, and High-Street Parcel Shop.' },
      { name: 'Passkeys & WebAuthn', desc: 'Passwordless public-key credentials stored in iCloud Keychain and Google Password Manager.' },
      { name: 'Device Binding & Audit Trail', desc: 'Couriers bound to authorized handheld scanners; automatic session termination on lost device or role revocation.' },
    ],
  },
  {
    id: 3,
    title: 'Navigation & App Structure',
    category: 'mobile',
    badge: 'Mobile Nav',
    icon: '🧭',
    summary: 'Rock-solid React Native navigation with React Navigation bottom tabs, nested stacks, swipe gestures, and robust deep links.',
    features: [
      { name: 'Bottom Tab Navigation', desc: 'Instant access to Track, Book Delivery, My Parcels, Drop-off Points, and Account.' },
      { name: 'Stack & Detented Bottom Sheets', desc: 'Native half-sheets for parcel size selector, pickup time slots, and courier contact overlays.' },
      { name: 'Deep Linking & Universal Links', desc: 'Direct routing for `nrex://track/GB-LON-88942` and `https://nrex.co.uk/p/...` with state preservation.' },
      { name: 'Gesture Safety & Navigation Guards', desc: 'Unsaved shipment warning on back-swipe; hardware back-button interceptor on field driver apps.' },
      { name: 'Multi-Step Booking Wizard', desc: 'Stepper with address validation, parcel dimension verification, service tier, and payment steps.' },
    ],
  },
  {
    id: 4,
    title: 'UI/UX & Interaction',
    category: 'mobile',
    badge: 'Design System',
    icon: '🎨',
    summary: 'Tailwind and Design System tokens crafted for outdoor sunlight legibility, high tactile response, and fluid spring animations.',
    features: [
      { name: 'Dark Mode & High Contrast Mode', desc: 'Full system-following theming optimized for low-light evening courier drops and bright daylight navigation.' },
      { name: 'Safe Area & Edge-to-Edge Design', desc: 'Native compliance with Dynamic Island, camera punch-holes, and gesture navigation bars.' },
      { name: 'Haptic Feedback Engine', desc: 'Physical tactile pulses on barcode scan success, route milestone alerts, and error vibration patterns.' },
      { name: 'Skeleton Shimmer & Optimistic UI', desc: 'Instant shipment status updates with background synchronization, eliminating UI latency.' },
      { name: 'UK Form Ergonomics', desc: 'Postcode lookups (Royal Mail PAF standard), inline address validation, and interactive parcel weight sliders.' },
    ],
  },
  {
    id: 5,
    title: 'Notifications & Messaging',
    category: 'core',
    badge: 'Push & Alerts',
    icon: '🔔',
    summary: 'Critical real-time delivery alerts via APNs, FCM, SMS fallback, and iOS Live Activities for in-transit parcels.',
    features: [
      { name: 'iOS Live Activities & Dynamic Island', desc: 'Glanceable lock-screen widget displaying real-time courier van proximity, remaining stops, and ETA.' },
      { name: 'Rich Push Notifications', desc: 'Push notifications complete with doorstep delivery photo thumbnails, driver name, and 1-tap reschedule buttons.' },
      { name: 'Proactive SMS & WhatsApp Fallback', desc: 'Automated UK mobile text messages with 1-hour delivery window alerts when push is disabled.' },
      { name: 'In-App Notification Center', desc: 'Categorized notification inbox for delivery receipts, billing invoices, and schedule changes.' },
      { name: 'Geofence-Triggered Proximity Alerts', desc: 'Alerts sent to the customer when the courier van is 2 stops or 500 meters away.' },
    ],
  },
  {
    id: 6,
    title: 'User Profile & Account Management',
    category: 'core',
    badge: 'Account & CRM',
    icon: '👤',
    summary: 'Comprehensive sender management, UK address books with flat/house notes, courier KYC, and privacy controls.',
    features: [
      { name: 'Saved UK Address Book', desc: 'Home, Office, and frequent contacts with what3words coordinates, access codes, and safe place preferences.' },
      { name: 'Courier Driver KYC & Verification', desc: 'DVLA driving license verification, Right to Work checks, and vehicle insurance document repository.' },
      { name: 'Business Accounts & Invoicing', desc: 'Multi-user company accounts with consolidated monthly invoicing, VAT breakdown, and bulk discounts.' },
      { name: 'GDPR Data Portability & Erasure', desc: '1-click data export and self-service account deletion complying with UK GDPR regulations.' },
    ],
  },
  {
    id: 7,
    title: 'Settings & Preferences',
    category: 'core',
    badge: 'Preferences',
    icon: '⚙️',
    summary: 'Granular controls for delivery safe places, notification quiet hours, low-data modes, and developer diagnostics.',
    features: [
      { name: 'Default Safe Place Instructions', desc: 'Pre-set drop instructions: "In porch", "Behind side gate", or "With neighbour at No. 42".' },
      { name: 'Low-Data & Map Cache Settings', desc: 'Optimizes map tile downloads and restricts large photo syncs to Wi-Fi for field riders on metered plans.' },
      { name: 'Security & Active Sessions', desc: 'View all logged-in devices with location logs and remote revoke capability.' },
      { name: 'Developer & Environment Switcher', desc: 'Hidden diagnostic panel to toggle staging/sandbox backend, simulate GPS dropouts, and inspect network logs.' },
    ],
  },
  {
    id: 8,
    title: 'Device Hardware, Sensors & Permissions',
    category: 'mobile',
    badge: 'Hardware API',
    icon: '📱',
    summary: 'Deep integration with mobile cameras, GPS sensors, thermal printers, and dedicated logistics barcode sleds.',
    features: [
      { name: 'Continuous Barcode & QR Scanner', desc: 'Sub-second camera scanning of Code 128, QR, DataMatrix, and PDF417 courier waybills.' },
      { name: 'Bluetooth Thermal Label Printing', desc: 'Direct wireless printing from mobile app to Zebra, Rongta, and Brother mobile 4-inch label printers.' },
      { name: 'Hardware Barcode Wedge (Zebra/Honeywell)', desc: 'Support for hardware laser scan buttons on enterprise Android logistics terminals.' },
      { name: 'Torch & Low-Light Camera Boost', desc: 'Quick flashlight toggle with automatic camera gain adjustment for unlit evening porches.' },
      { name: 'Battery Optimization & Keep-Awake', desc: 'Screen keep-awake during active route navigation with battery throttle management.' },
    ],
  },
  {
    id: 9,
    title: 'Location, Maps & Geospatial',
    category: 'logistics',
    badge: 'Maps & GIS',
    icon: '🗺️',
    summary: 'Precision routing, reverse geocoding with UK postal polygons, and live courier van GPS tracking.',
    features: [
      { name: 'Live Courier Telemetry & Heading', desc: 'Real-time GPS coordinate streaming at 5-second intervals with smoothing and vehicle orientation.' },
      { name: 'Multi-Stop Route Optimization', desc: 'Travelling Salesman Problem (TSP) algorithm calculating the most fuel-efficient 80-stop delivery route.' },
      { name: 'Turn-by-Turn Navigation Handoff', desc: '1-tap handoff to Google Maps, Waze, or Apple Maps with the next stop coordinates pre-loaded.' },
      { name: 'Geofenced Proof-of-Delivery Validation', desc: 'Enforces driver to be within 50m of the delivery address polygon before unlocking delivery completion.' },
      { name: 'Fast Vector Map Caching', desc: 'Pre-cached UK street maps for ultra-fast, smooth driver navigation and zero map jitter.' },
    ],
  },
  {
    id: 10,
    title: 'Media, Camera & Content Creation',
    category: 'mobile',
    badge: 'Media & POD',
    icon: '📷',
    summary: 'Proof of Delivery (POD) photo capture with geotags, digital signature pads, and automated image compression.',
    features: [
      { name: 'Doorstep Photo Capture with Watermarking', desc: 'Captures parcel location stamped with date, time, GPS lat/long, and delivery tracking ID.' },
      { name: 'Client-Side Compression & EXIF Stripping', desc: 'Compresses photos under 150KB in under 50ms before upload to conserve field data bandwidth.' },
      { name: 'Smooth Signature Pad', desc: 'Finger or stylus customer signature capture with capacitive smoothing and stroke velocity curve.' },
      { name: 'PDF Waybill & Consignment Note Generator', desc: 'Instant client-side PDF rendering of printable UK courier manifests and customs declarations.' },
    ],
  },
  {
    id: 11,
    title: 'Real-Time Data Streaming & Cloud Sync',
    category: 'cloud',
    badge: 'Data Architecture',
    icon: '🔄',
    summary: 'High-throughput real-time data streaming with Supabase Realtime, edge caching, and atomic event synchronization.',
    features: [
      { name: 'Resilient Event Queue (Outbox Pattern)', desc: 'Drivers experience zero UI blocking on scan and signature captures; mutations stream reliably to the cloud.' },
      { name: 'Automatic Delta Sync & Event Reconciliation', desc: 'Replays local operations with exponential backoff on reconnection.' },
      { name: 'Idempotency Keys on All Actions', desc: 'Guarantees that retry storms never duplicate billing charges or parcel status events.' },
      { name: 'Stale-While-Revalidate Caching', desc: 'Instant parcel history rendering from local cache while querying backend for fresh updates.' },
    ],
  },
  {
    id: 12,
    title: 'Payments, Commerce & Monetization',
    category: 'cloud',
    badge: 'Fintech & Billing',
    icon: '💳',
    summary: 'Frictionless UK checkout supporting Apple Pay, Google Pay, Stripe, automated VAT receipts, and COD reconciliation.',
    features: [
      { name: 'Apple Pay & Google Pay 1-Tap', desc: 'Biometric 1-tap payment sheets with pre-filled billing and delivery details.' },
      { name: 'Stripe Card Processing with 3DS/SCA', desc: 'Fully compliant Strong Customer Authentication with UK bank challenge modal handling.' },
      { name: 'Dynamic UK Pricing & Surcharges', desc: 'Itemized rate breakdown: Base postage, Scottish Highlands surcharge, Next-Day guarantee, and 20% UK VAT.' },
      { name: 'Cash on Delivery (COD) Reconciliation', desc: 'Driver collection logging, cash drawer tracking, and daily bank deposit reconciliation.' },
      { name: 'Automated VAT Invoices', desc: 'HMRC-compliant PDF invoice generated instantly and emailed with company registration numbers.' },
    ],
  },
  {
    id: 13,
    title: 'Social, Communication & Community',
    category: 'core',
    badge: 'Comms',
    icon: '💬',
    summary: 'Privacy-masked driver-to-customer communications, in-app support chat, and real-time delivery notices.',
    features: [
      { name: 'Masked VoIP & Phone Calling', desc: 'Couriers can call recipients via Twilio proxy without revealing personal phone numbers on either side.' },
      { name: 'Direct In-App Delivery Chat', desc: 'Real-time two-way messaging for quick notes ("Gate code is 4491", "Leaving parcel by green bin").' },
      { name: 'Live Support Desk (Intercom/Zendesk)', desc: 'Integrated customer support with instant access to parcel telemetry and driver status.' },
      { name: 'Courier Tip & Praise Module', desc: 'Optional post-delivery tipping with preset £1, £2, £5 amounts and star rating feedback.' },
    ],
  },
  {
    id: 14,
    title: 'Search, Discovery & Content Organization',
    category: 'core',
    badge: 'Search & PAF',
    icon: '🔍',
    summary: 'Ultra-fast debounced UK address autocomplete, postal code indexer, and multi-facet parcel search.',
    features: [
      { name: 'Royal Mail PAF Postcode Lookup', desc: 'Type any UK postcode (e.g. SW1A 1AA) to instantly populate verified street and town data.' },
      { name: 'Debounced Tracking Search', desc: 'Instant autocomplete matching tracking numbers, recipient names, or customer reference codes.' },
      { name: 'Faceted Parcel Filters', desc: 'Quick filter tabs: Out for Delivery, Exceptions, Delivered Today, Pending Pickup, Returns.' },
      { name: 'Nearby Parcel Shop Finder', desc: 'Map and list view of nearest NREX drop-off shops sorted by distance with opening hours.' },
    ],
  },
  {
    id: 15,
    title: 'Real-Time & Live Features',
    category: 'cloud',
    badge: 'WebSockets',
    icon: '⚡',
    summary: 'Persistent bi-directional WebSocket and Supabase Realtime channels for live driver tracking and dispatch alerts.',
    features: [
      { name: 'Live Van Position Broadcast', desc: 'Real-time WebSocket streaming of courier vehicle coordinates directly to customer tracking maps.' },
      { name: 'Instant Dispatch Job Offers', desc: 'Interactive 30-second accept/reject countdown card for available ad-hoc courier pickups.' },
      { name: 'Live Delivery Status Stepper', desc: 'Instantaneous UI transitions as packages progress through sortation hubs and delivery stages.' },
      { name: 'Reconnection & Heartbeat Resiliency', desc: 'Automatic socket reconnect with exponential backoff and connection state banners.' },
    ],
  },
  {
    id: 16,
    title: 'Third-Party Integrations',
    category: 'cloud',
    badge: 'Ecosystem API',
    icon: '🔌',
    summary: 'Enterprise connections to payment rails, mapping engines, UK address registries, and cloud notification hubs.',
    features: [
      { name: 'Payment Gateways', desc: 'Stripe, Apple Pay, Google Pay, and direct BACS debit integration.' },
      { name: 'Mapping & Geocoding', desc: 'Google Maps Platform, Mapbox Vector Tiles, and OpenStreetMap UK.' },
      { name: 'Postal & Customs Services', desc: 'UK Royal Mail PAF, Postcodes.io, and HMRC customs documentation endpoints.' },
      { name: 'SMS & Comms Infrastructure', desc: 'Twilio SMS, Resend transactional emails, and OneSignal push.' },
      { name: 'Hardware Scanners & Printers', desc: 'Zebra EMDK, Honeywell Mobility SDK, and ESC/POS Bluetooth thermal printers.' },
    ],
  },
  {
    id: 17,
    title: 'Security, Privacy & Compliance',
    category: 'security',
    badge: 'Compliance',
    icon: '🛡️',
    summary: 'Hardened transport security, encryption at rest, UK GDPR compliance, and anti-tamper safeguards.',
    features: [
      { name: 'UK GDPR & Data Privacy Compliance', desc: 'Strict consent management, anonymized customer phone numbers, and automatic data retention purge.' },
      { name: 'End-to-End TLS & Certificate Pinning', desc: 'HTTPS enforcement with SSL pinning preventing man-in-the-middle attacks on field networks.' },
      { name: 'Secure Local Storage', desc: 'Authentication tokens and driver credentials stored in iOS Keychain and Android Keystore via React Native MMKV / SecureStore.' },
      { name: 'Mock GPS Detection & Anti-Spoofing', desc: 'Blocks artificial GPS coordinate manipulation to ensure verified proof-of-presence at delivery locations.' },
      { name: 'Screen Capture & Sensitive Field Masking', desc: 'Prevents screenshots on sensitive customer payment and identity verification screens.' },
    ],
  },
  {
    id: 18,
    title: 'Performance, Quality & Reliability',
    category: 'cloud',
    badge: 'Engineering',
    icon: '⏱️',
    summary: 'Sub-second cold start, 120fps list virtualization, zero-jank map rendering, and robust crash monitoring.',
    features: [
      { name: 'Virtual List Rendering', desc: 'Virtualization of 500+ stop driver manifests with zero frame drops or memory leaks via FlashList.' },
      { name: 'Image Compression & WebP/AVIF', desc: 'Next-gen image formats ensuring lightweight network payloads over 4G/5G mobile networks.' },
      { name: 'Sub-Second Cold Start', desc: 'Deferred module loading ensuring the driver app launches under 800ms even on rugged warehouse devices.' },
      { name: 'Sentry Crash & Performance Monitoring', desc: 'Real-time telemetry capturing symbolicated stack traces, breadcrumbs, and network latency.' },
    ],
  },
  {
    id: 19,
    title: 'Accessibility & Localization',
    category: 'mobile',
    badge: 'A11y & i18n',
    icon: '♿',
    summary: 'WCAG AAA compliance, VoiceOver/TalkBack support, scalable typography, and UK English & regional formatting.',
    features: [
      { name: 'Screen Reader Optimization', desc: 'Comprehensive VoiceOver and TalkBack labels, roles, and status announcements across all interactive flows.' },
      { name: 'Dynamic Type & High Contrast', desc: 'Scales smoothly up to 200% font size without clipping text; high-contrast outdoors toggle.' },
      { name: 'UK Date, Time & Currency Standards', desc: 'Standard DD/MM/YYYY formatting, 24-hour time options, and £ GBP currency display.' },
      { name: 'Bilingual Welsh (Cymraeg) Support', desc: 'Full bilingual interface support for UK public service and regional Welsh compliance.' },
    ],
  },
  {
    id: 20,
    title: 'Platform & OS Integrations',
    category: 'mobile',
    badge: 'OS Integrations',
    icon: '📱',
    summary: 'Native platform widgets, lock screen live tracking, Siri/Google Assistant shortcuts, and Apple CarPlay support.',
    features: [
      { name: 'iOS Home & Lock Screen Widgets', desc: 'Glanceable widget showing delivery status and estimated arrival window right on the user home screen.' },
      { name: 'Apple CarPlay & Android Auto UI', desc: 'Simplified, distraction-free driver navigation view mounted safely on courier van dashboards.' },
      { name: 'Siri & Google Assistant Shortcuts', desc: 'Voice query: "Hey Siri, where is my NREX parcel?" reads back the current stop and ETA.' },
      { name: 'Apple Wallet & Google Wallet Passes', desc: 'Add drop-off QR codes and pickup slips directly to the native phone wallet for fast contactless scanning.' },
    ],
  },
  {
    id: 21,
    title: 'AI, ML & Intelligent Features',
    category: 'core',
    badge: 'AI & Machine Learning',
    icon: '🤖',
    summary: 'Predictive delivery window AI, smart barcode deblurring, dynamic route grouping, and intelligent support agent.',
    features: [
      { name: 'Predictive ETA & Traffic Engine', desc: 'Machine learning model predicting UK motorway congestion (M1, M25, M6) to recalculate accurate 15-minute ETAs.' },
      { name: 'Computer Vision Barcode Deblurring', desc: 'On-device CoreML / TFLite model enhancing motion-blurred or damaged parcel labels in low light.' },
      { name: 'AI Customer Copilot', desc: 'Smart chatbot capable of rescheduling deliveries, answering tracking queries, and processing claim requests.' },
      { name: 'Automated Address Correction', desc: 'Detects and resolves common UK typos in street names and postcodes before label generation.' },
    ],
  },
  {
    id: 22,
    title: 'AR, 3D & Advanced Graphics',
    category: 'mobile',
    badge: 'AR & 3D',
    icon: '📦',
    summary: 'AR camera parcel dimensioning, 3D van loading optimization, and interactive delivery map tilt views.',
    features: [
      { name: 'AR Parcel Dimension Scanner', desc: 'Uses ARKit / ARCore to measure box length, width, and height with camera to calculate volumetric weight.' },
      { name: '3D Courier Van Cargo Visualizer', desc: 'Interactive 3D view showing drivers optimal package placement inside the cargo bay by delivery sequence.' },
      { name: '3D Extruded Delivery Map', desc: 'High-detail 3D building maps aiding couriers navigating complex London apartment complexes.' },
    ],
  },
  {
    id: 23,
    title: 'Health, Fitness & Wearables',
    category: 'mobile',
    badge: 'Health & Watch',
    icon: '⌚',
    summary: 'Courier wellness monitoring, daily step and stop counts, and Apple Watch quick delivery confirmations.',
    features: [
      { name: 'Apple Watch & Wear OS Companion', desc: 'Quick wrist notifications for the next drop, tap-to-mark arrived, and recipient contact display.' },
      { name: 'Courier Ergonomics & Step Counter', desc: 'Integrates with HealthKit to track driver daily walking distance and stairs climbed.' },
      { name: 'Hydration & Rest Break Reminders', desc: 'Automated UK Working Time Directive reminders prompting couriers to take mandated breaks.' },
    ],
  },
  {
    id: 24,
    title: 'Enterprise, Field-Ops & Industry Features',
    category: 'logistics',
    badge: 'Field Ops',
    icon: '🏭',
    summary: 'Hub sortation systems, bulk scanning, vehicle manifest loading, and end-of-day cash reconciliation.',
    features: [
      { name: 'Hub Sorter Inbound/Outbound Manifests', desc: 'High-speed scan-to-lane routing directing parcels into correct regional distribution cages.' },
      { name: 'Proof of Delivery (POD) Audit Vault', desc: 'Immutable storage of recipient signatures, delivery photos, GPS stamps, and courier IDs.' },
      { name: 'Parcel Shop Drop & Collect Operations', desc: 'Local shop POS interface for parcel intake, collection PIN verification, and return parcel handling.' },
      { name: 'End-of-Day Driver Settlement', desc: 'Full automated audit reconciling completed deliveries, attempted drops, returned parcels, and COD funds.' },
    ],
  },
  {
    id: 25,
    title: 'Analytics, Growth & Engagement',
    category: 'cloud',
    badge: 'BI & Analytics',
    icon: '📊',
    summary: 'Real-time logistics analytics, courier SLA dashboards, customer satisfaction NPS, and referral engine.',
    features: [
      { name: 'First-Attempt Delivery Success SLA', desc: 'Executive dashboard tracking real-time 99%+ first-time delivery rates across all UK postcode sectors.' },
      { name: 'Driver Velocity & Stop Efficiency Metrics', desc: 'Analyzes average dwell time per stop (e.g. 2.1 minutes) and identifies delivery bottleneck buildings.' },
      { name: 'Customer Satisfaction & Net Promoter Score (NPS)', desc: 'Post-delivery micro-survey capturing 1-tap ratings and courier compliments.' },
      { name: 'Referral Engine with Dual Rewards', desc: 'Shareable referral codes giving friends £5 off and rewarding senders with courier credits.' },
    ],
  },
  {
    id: 26,
    title: 'Release, Distribution & DevOps',
    category: 'cloud',
    badge: 'DevOps & CI/CD',
    icon: '🚢',
    summary: 'Automated CI/CD pipelines, runtime updates, multiple staging flavors, and enterprise app distribution.',
    features: [
      { name: 'Automated Fastlane & GitHub Actions CI/CD', desc: 'One-click builds and automated deployment to Apple TestFlight and Google Play Internal Testing tracks.' },
      { name: 'Over-The-Air (OTA) EAS & CodePush Updates', desc: 'Instant deployment of critical bug fixes and business rules directly to courier devices without App Store review.' },
      { name: 'Multi-Environment App Flavors', desc: 'Strict separation of Development, Staging, and Production apps with distinct icons and backend configurations.' },
      { name: 'Force Update & Minimum Version Shield', desc: 'Server-driven gate ensuring field couriers never operate on outdated or incompatible app builds.' },
    ],
  },
];

interface NrexShowcaseProps {
  isStandalonePage?: boolean;
}

export default function NrexShowcase({ isStandalonePage = false }: NrexShowcaseProps) {
  const [selectedPillar, setSelectedPillar] = useState<Pillar>(PILLARS_DATA[0]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePersona, setActivePersona] = useState<'customer' | 'rider' | 'hub' | 'shop'>('customer');

  const filteredPillars = useMemo(() => {
    return PILLARS_DATA.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.features.some(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()) || f.desc.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="nrex" className="py-16 sm:py-24 px-4 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Back Navigation Bar if on Standalone Screen */}
        {isStandalonePage && (
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
              <span className="text-white font-semibold">nrex</span>
            </div>
          </div>
        )}

        {/* Header Badge & Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            React Native Mobile Ecosystem • UK Nationwide Courier Architecture
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              NREX
            </span>{' '}
            <span className="text-gray-300 font-light">—</span>{' '}
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Parcel Delivery & Courier Services UK
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            A production-grade, multi-platform React Native mobile ecosystem engineered for high-throughput parcel tracking, 
            instant doorstep proof-of-delivery, automated hub sortation, and driver route optimization across UK postcodes.
          </p>
        </div>

        {/* Live Key Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm hover:border-indigo-500/50 transition-colors">
            <div className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-1">99.94%</div>
            <div className="text-sm font-semibold text-gray-200">UK On-Time Delivery SLA</div>
            <div className="text-xs text-gray-400 mt-1">Real-time postcode routing across England, Scotland & Wales</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm hover:border-indigo-500/50 transition-colors">
            <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">&lt; 300ms</div>
            <div className="text-sm font-semibold text-gray-200">Barcode Scan & AWB Decode</div>
            <div className="text-xs text-gray-400 mt-1">Camera & laser scanner batch parsing at 60 scans/min</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm hover:border-indigo-500/50 transition-colors">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-1">4 Native Apps</div>
            <div className="text-sm font-semibold text-gray-200">Unified Role Ecosystem</div>
            <div className="text-xs text-gray-400 mt-1">Customer, Courier Rider, Hub Sorter & Parcel Shop Manager</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm hover:border-indigo-500/50 transition-colors">
            <div className="text-3xl md:text-4xl font-extrabold text-purple-400 mb-1">React Native</div>
            <div className="text-sm font-semibold text-gray-200">Mobile Frontend</div>
            <div className="text-xs text-gray-400 mt-1">Cross-platform iOS & Android mobile ecosystem</div>
          </div>
        </div>

        {/* Section: Real Production Mobile Application Screens Gallery */}
        <ProjectScreenshotGallery
          projectName="NREX UK Logistics Suite"
          title="Production Mobile Application Screens"
          subtitle="Explore 19 live production React Native screens across customer parcel booking, Royal Mail postcode lookup, and courier driver field telematics."
          items={NREX_SCREENSHOTS}
          categories={[
            { key: 'customer', label: 'Customer App', count: 12 },
            { key: 'rider', label: 'Courier Rider App', count: 7 },
            { key: 'all', label: 'All Screens', count: 19 },
          ]}
          defaultCategory="customer"
        />

        {/* Section 1: Interactive Multi-Persona Ecosystem Preview */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">Ecosystem Architecture</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">4 Specialized Logistics Mobile Applications</h3>
              <p className="text-gray-400 text-sm mt-1">Explore how each persona interacts with the unified NREX real-time mobile platform.</p>
            </div>
            {/* Persona Switcher Tabs */}
            <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full no-scrollbar">
              {[
                { key: 'customer', label: '👤 Customer Portal & App', subtitle: 'Send & Track' },
                { key: 'rider', label: '🚚 Courier / Rider App', subtitle: 'Turn-by-Turn & POD' },
                { key: 'hub', label: '🏭 Hub Sorter App', subtitle: 'High-Speed Inbound' },
                { key: 'shop', label: '🏪 Parcel Shop Manager', subtitle: 'Drop-off & Collect' },
              ].map((p) => (
                <button
                  key={p.key}
                  onClick={() => setActivePersona(p.key as 'customer' | 'rider' | 'hub' | 'shop')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activePersona === p.key
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Persona Showcase Card */}
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-900/60 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-800">
            <div className="lg:col-span-7 space-y-6">
              {activePersona === 'customer' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                    Customer Experience • nrlogistics-customer-mobile & web
                  </div>
                  <h4 className="text-3xl font-extrabold text-white">
                    Instant UK Booking, Address Autocomplete & Live Map Tracking
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Designed for senders and recipients across the UK. Type any UK postcode (e.g. SW1A 1AA or M1 1AE) to populate verified Royal Mail PAF addresses, get instant parcel quotes, pay securely with Apple Pay or Stripe, and track the courier van live with 15-minute delivery windows.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">🗺️ Live Van Tracking</div>
                      <div className="text-xs text-gray-400">Streamed GPS vehicle coordinates on interactive map with stop countdown.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">📱 Dynamic Island & Live Activity</div>
                      <div className="text-xs text-gray-400">Lock-screen delivery widget showing real-time van distance and ETA updates.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">🛡️ Doorstep Safe Place</div>
                      <div className="text-xs text-gray-400">Specify porch, garden box, or neighbour drop instructions with photo verification.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">💳 Frictionless Payments</div>
                      <div className="text-xs text-gray-400">1-tap Apple Pay, Google Pay, and Stripe with instant HMRC-compliant VAT receipts.</div>
                    </div>
                  </div>
                </>
              )}

              {activePersona === 'rider' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                    Field Courier Mobile Operations • nrlogistics-rider-mobile
                  </div>
                  <h4 className="text-3xl font-extrabold text-white">
                    Smart Manifest, Turn-by-Turn GPS & Geofenced Proof of Delivery
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Built in React Native for daily delivery couriers handling 80–120 stops per shift. Features Travelling Salesman route sequencing, camera barcode scanning, live cloud sync, turn-by-turn navigation handoff, and geofence-locked proof-of-delivery (signature + timestamped photo).
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">📍 50m Geofence Lock</div>
                      <div className="text-xs text-gray-400">Enforces driver presence at delivery coordinate before unlocking POD capture.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">✍️ Digital Signature + Photo</div>
                      <div className="text-xs text-gray-400">Smooth capacitive signature pad and auto-compressed doorstep photo stamps.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">⚡ 1-Tap Nav Handoff</div>
                      <div className="text-xs text-gray-400">Instant handoff to Google Maps or Waze with next delivery coordinates pre-filled.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">🔄 Live Telemetry Stream</div>
                      <div className="text-xs text-gray-400">Continuous 5-second GPS updates broadcast to dispatch and customer maps.</div>
                    </div>
                  </div>
                </>
              )}

              {activePersona === 'hub' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold">
                    Distribution Sortation • nrlogistics-hubsorter-mobile
                  </div>
                  <h4 className="text-3xl font-extrabold text-white">
                    High-Throughput Batch Barcode Scanning & Lane Sortation
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Empowers regional hub operators to process thousands of arriving parcels per hour. Rapid laser/camera wedge scanning instantly matches waybills, routes parcels into correct cages (e.g. London SW vs Manchester North), and flags damaged or misrouted packages.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">⚡ Laser Wedge Support</div>
                      <div className="text-xs text-gray-400">Zero-lag hardware scanner integration for Zebra and Honeywell warehouse handhelds.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">🔊 Audio/Haptic Lane Alerts</div>
                      <div className="text-xs text-gray-400">Auditory frequency cues and vibration pulses indicating correct cage sorting.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">⚠️ Exception Handling</div>
                      <div className="text-xs text-gray-400">Instant 1-tap flag for damaged cartons, weight discrepancies, and relabelling.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">🚚 Inbound Trunk Unload</div>
                      <div className="text-xs text-gray-400">Automated vehicle manifest reconciliation with real-time discrepancy reports.</div>
                    </div>
                  </div>
                </>
              )}

              {activePersona === 'shop' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold">
                    Retail Drop-off Points • nrlogistics-parcel-shop-manager
                  </div>
                  <h4 className="text-3xl font-extrabold text-white">
                    High-Street Parcel Shop Intake, Storage & Customer Collection
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Enables local high-street convenience stores and pickup locations to act as authorized NREX Parcel Points. Quick barcode check-in assigns shelf bin locations, while secure customer collections are verified with 6-digit OTP codes or Apple Wallet passes.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">🔢 6-Digit OTP Handover</div>
                      <div className="text-xs text-gray-400">Secure contactless parcel release verified via customer SMS/Wallet PIN.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">📦 Storage Bin Allocator</div>
                      <div className="text-xs text-gray-400">Organizes packages into labelled retail storage shelves (e.g. Bin B-14) for fast retrieval.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">🔄 Customer Returns Intake</div>
                      <div className="text-xs text-gray-400">Print returns label on demand via Bluetooth thermal printer and hand over receipt.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="font-semibold text-white text-sm mb-1">🚚 Courier Handover Manifest</div>
                      <div className="text-xs text-gray-400">Bulk handoff of accumulated outward packages to daily NREX collection van.</div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Simulated Live Device Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] bg-slate-950 rounded-[44px] p-3.5 border-4 border-slate-700 shadow-2xl relative">
                {/* Speaker notch / Dynamic Island */}
                <div className="w-28 h-5 bg-black rounded-full mx-auto mb-3 flex items-center justify-between px-3">
                  <span className="w-2 h-2 rounded-full bg-slate-800" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                </div>

                {/* Device Screen Content */}
                <div className="bg-slate-900 rounded-[32px] p-4 text-xs font-sans min-h-[460px] flex flex-col justify-between border border-slate-800">
                  <div>
                    {/* Screen Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                      <div className="font-bold text-white text-sm flex items-center gap-1.5">
                        <span className="text-indigo-400 font-extrabold tracking-wider">NREX</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 uppercase">
                          {activePersona}
                        </span>
                      </div>
                      <div className="text-gray-400 font-mono text-[10px]">14:28 • 5G</div>
                    </div>

                    {/* Persona Screen Mockup Details */}
                    {activePersona === 'customer' && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                          <div className="text-[10px] text-gray-400 mb-1">IN TRANSIT • ON TIME</div>
                          <div className="font-bold text-white text-sm">Parcel #GB-LON-88942-X</div>
                          <div className="text-emerald-400 font-semibold text-xs mt-1">Arriving Today 14:15 - 15:15</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm">🚚</div>
                          <div>
                            <div className="font-semibold text-white text-[11px]">David M. is 2 stops away</div>
                            <div className="text-gray-400 text-[10px]">Mercedes eVito • Van #24</div>
                          </div>
                        </div>
                        <div className="h-28 rounded-xl bg-slate-800 border border-slate-700 relative overflow-hidden flex items-center justify-center text-center p-2">
                          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:12px_12px]" />
                          <div className="relative z-10">
                            <div className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center mx-auto mb-1 animate-bounce">📍</div>
                            <div className="font-mono text-[10px] text-gray-300">Kensington High St, W8</div>
                            <div className="text-[9px] text-emerald-400 font-semibold">Live GPS updates every 5s</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activePersona === 'rider' && (
                      <div className="space-y-3">
                        <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                          <div className="flex justify-between text-[10px]">
                            <span className="text-emerald-400 font-bold">ROUTE ACTIVE: LON-W8</span>
                            <span className="text-gray-400">Stop 18 of 64</span>
                          </div>
                          <div className="font-bold text-white text-xs mt-1">18 Kensington High St, W8 4PT</div>
                          <div className="text-gray-400 text-[10px]">Customer: Eleanor Vance • Signed Drop</div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/90 text-[10px]">
                            <span className="text-gray-300">Geofence Status</span>
                            <span className="text-emerald-400 font-semibold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Inside 50m
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/90 text-[10px]">
                            <span className="text-gray-300">Sync Status</span>
                            <span className="text-emerald-400 font-mono">Real-time Connected</span>
                          </div>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-800/50 border border-dashed border-slate-700 text-center">
                          <span className="text-[10px] text-gray-400">Proof of Delivery Ready</span>
                          <div className="mt-1 flex gap-1 justify-center">
                            <span className="px-2 py-0.5 rounded bg-indigo-600/30 text-indigo-300 text-[9px]">📷 Photo Ready</span>
                            <span className="px-2 py-0.5 rounded bg-emerald-600/30 text-emerald-300 text-[9px]">✍️ Sign Cap</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activePersona === 'hub' && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30">
                          <div className="text-[10px] text-purple-400 font-bold">BATCH SORTATION LANE #4</div>
                          <div className="text-lg font-mono font-bold text-white mt-1">SORT TO: CAGE-MAN-02</div>
                          <div className="text-gray-400 text-[10px]">Manchester Central Superhub Express</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="p-2 rounded-lg bg-slate-800">
                            <div className="text-[10px] text-gray-400">Scanned Today</div>
                            <div className="text-sm font-bold text-white">1,482</div>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-800">
                            <div className="text-[10px] text-gray-400">Scan Rate</div>
                            <div className="text-sm font-bold text-emerald-400">48 / min</div>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-[10px] space-y-1">
                          <div className="text-gray-400">Last Scanned Waybill:</div>
                          <div className="font-mono text-indigo-300">GB-MAN-10294-N (Weight: 2.40kg)</div>
                          <div className="text-emerald-400 font-semibold">✓ Verified Routing Manifest</div>
                        </div>
                      </div>
                    )}

                    {activePersona === 'shop' && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30">
                          <div className="text-[10px] text-amber-400 font-bold">NREX PARCEL POINT #881</div>
                          <div className="font-bold text-white text-xs mt-1">High St News & Post, Bath</div>
                          <div className="text-emerald-400 text-[10px]">14 Packages in Storage</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                          <div className="text-[10px] text-gray-300 font-semibold">Customer Collection Handover</div>
                          <div className="flex gap-1.5 justify-center font-mono text-sm tracking-widest font-bold text-white bg-slate-900 py-1 rounded">
                            <span>4</span><span>8</span><span>2</span><span>•</span><span>9</span><span>1</span><span>0</span>
                          </div>
                          <div className="text-[9px] text-center text-gray-400">Verified via 6-digit OTP code</div>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800 text-[10px] flex justify-between items-center">
                          <span className="text-gray-400">Shelf Bin Location:</span>
                          <span className="font-mono font-bold text-indigo-300">BAY-C / TIER-2</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Device Bottom Button */}
                  <div className="pt-3 border-t border-slate-800">
                    <button className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shadow-md shadow-indigo-600/30">
                      {activePersona === 'customer' && 'Track Courier Vehicle'}
                      {activePersona === 'rider' && 'Complete Stop #18'}
                      {activePersona === 'hub' && 'Scan Next Waybill'}
                      {activePersona === 'shop' && 'Confirm Customer Handover'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: The 26 Comprehensive Engineering Pillars Matrix */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">Technical Deep Dive</div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Comprehensive 26-Pillar Architecture
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Explore how every single layer of the enterprise logistics specification is implemented in the NREX mobile ecosystem.
            </p>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {[
                { id: 'all', label: 'All 26 Pillars' },
                { id: 'mobile', label: 'Mobile & UI/UX' },
                { id: 'core', label: 'Core Logistics' },
                { id: 'security', label: 'Security & Auth' },
                { id: 'cloud', label: 'Cloud & DevOps' },
                { id: 'logistics', label: 'Field Ops & GIS' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-800/80 text-gray-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search features (e.g. barcode, push)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 pl-9 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <svg
                className="w-4 h-4 text-gray-500 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Pillars Grid & Detail Modal/Drawer */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Pillars Cards List */}
            <div className="lg:col-span-5 max-h-[700px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
              {filteredPillars.map((p) => {
                const isSelected = selectedPillar.id === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPillar(p)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-500/10'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{p.icon}</span>
                        <span className="font-mono text-xs text-indigo-400 font-bold">#{p.id.toString().padStart(2, '0')}</span>
                        <h4 className="font-bold text-white text-sm">{p.title}</h4>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-gray-300 font-medium">
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {p.summary}
                    </p>
                  </div>
                );
              })}
              {filteredPillars.length === 0 && (
                <div className="text-center py-12 text-gray-500 text-sm">
                  No pillars match your search query.
                </div>
              )}
            </div>

            {/* Selected Pillar Technical Deep Dive Panel */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl sticky top-8">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-2xl">
                    {selectedPillar.icon}
                  </div>
                  <div>
                    <div className="text-xs text-indigo-400 font-mono font-bold">
                      PILLAR #{selectedPillar.id.toString().padStart(2, '0')} • {selectedPillar.badge}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedPillar.title}</h3>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-6 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                {selectedPillar.summary}
              </p>

              <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-4">
                Architecture Specifications & Features:
              </h4>

              <div className="space-y-3.5 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
                {selectedPillar.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="font-semibold text-white text-xs sm:text-sm mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {feat.name}
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed pl-3.5">
                      {feat.desc}
                    </p>
                    {feat.ukContext && (
                      <div className="mt-1.5 pl-3.5 text-[11px] text-indigo-300 font-medium">
                        🇬🇧 UK Context: {feat.ukContext}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: System Architecture & Tech Stack Summary */}
        <div className="mt-24 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-slate-800 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            React Native Mobile Tech Stack
          </h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-8">
            Engineered with modern TypeScript across React Native mobile applications, Supabase real-time databases, and AWS cloud infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              'React Native & Expo',
              'React Navigation',
              'TypeScript',
              'Tailwind CSS',
              'Supabase Realtime & PostgreSQL',
              'AWS Lambda & EventBridge',
              'Stripe UK & Apple Pay',
              'Royal Mail PAF API',
              'Zebra EMDK Barcode SDK',
              'Leaflet & Google Maps GIS',
              'APNs / FCM Push & Live Activities',
              'React Native MMKV & SecureStore',
              'Twilio Masked Voice/SMS',
              'Sentry Telemetry',
              'Fastlane & GitHub Actions CI/CD',
            ].map((tech, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-indigo-300 text-xs font-semibold hover:border-indigo-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
