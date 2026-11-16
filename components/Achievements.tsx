'use client';

import MilestoneCardDeck from '@/components/MilestoneCardDeck';
import ScrollReveal from './ScrollReveal';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    badgeImage: '/certifications/aws-solutions-architect-associate.png',
    issuer: 'Amazon Web Services (AWS)',
    level: 'Associate Level (SAA-C03)',
    status: 'Active & Verified',
    credlyUrl: 'https://www.credly.com/badges/1c09a4cf-c60e-4458-9439-6af45b12a95f/public_url',
    description: 'Validates comprehensive expertise in architecting secure, resilient, high-performing, and cost-optimized distributed systems on AWS.',
    skills: [
      'Resilient Multi-Tier Architectures & High-Availability',
      'Event-Driven Serverless (AWS Lambda, EventBridge, SQS, SNS)',
      'VPC Security, Microsegmentation & Identity (IAM, KMS)',
      'Cost-Effective Storage & Compute (S3, ECS, RDS, DynamoDB)',
      'Fault Tolerance, Disaster Recovery & Decoupled Systems'
    ]
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    badgeImage: '/certifications/aws-cloud-practitioner.png',
    issuer: 'Amazon Web Services (AWS)',
    level: 'Foundational Level (CLF-C02)',
    status: 'Active & Verified',
    credlyUrl: 'https://www.credly.com/badges/081dc4f6-8321-4769-9178-f20c633e919f/linked_in_profile',
    description: 'Validates overall foundational understanding of AWS cloud platform concepts, security models, compliance, and cloud economics.',
    skills: [
      'AWS Cloud Architecture Principles & Well-Architected Framework',
      'Shared Responsibility Security & Compliance Model',
      'Core AWS Cloud Infrastructure & High-Availability Services',
      'Cloud Economics, Billing, Resource Pricing & Governance'
    ]
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">Verified Credentials & Community</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              AWS Certifications & Community Leadership
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
              Official cloud architecture credentials, AWS Community Builder honors, and operational engineering milestones.
            </p>
          </div>
        </ScrollReveal>

        {/* AWS COMMUNITY BUILDER SPOTLIGHT CARD */}
        <ScrollReveal delay={100}>
          <div className="mb-16 p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
                  <img 
                    src="/images/aws-community-builder.png" 
                    alt="AWS" 
                    className="h-3.5 w-auto object-contain shrink-0" 
                  />
                  <span>Official AWS Community Recognition</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  AWS Community Builder
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Selected for the global AWS Community Builders program. Actively contributing technical articles, cloud architecture guides, and mobile backend tutorials to the developer ecosystem.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <a
                  href="https://builder.aws.com/community/@romil?tab=badges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-11 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-all duration-200 flex items-center justify-center gap-2 shadow-sm shadow-indigo-600/20"
                >
                  <img 
                    src="/images/aws-community-builder.png" 
                    alt="AWS" 
                    className="h-3.5 w-auto object-contain shrink-0" 
                  />
                  <span>AWS Builder Center Profile</span>
                  <svg 
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 opacity-90 group-hover:opacity-100" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.75" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
                <a
                  href="https://dev.to/romil_movaliya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-11 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 font-medium text-xs transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <img 
                    src="/images/dev-community.png" 
                    alt="DEV" 
                    className="h-3.5 w-3.5 object-contain rounded shrink-0" 
                  />
                  <span>DEV Community Articles</span>
                  <svg 
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 opacity-70 group-hover:opacity-100" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.75" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FEATURED: Official AWS Certifications Grid */}
        <ScrollReveal delay={150}>
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">🎖️</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Official AWS Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border-2 border-indigo-500/40 hover:border-indigo-500 transition-all shadow-2xl relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-28 h-28 sm:w-32 sm:h-32 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-indigo-500/60 transition-all shadow-xl block"
                        title="Verify on Credly"
                      >
                        <img
                          src={cert.badgeImage}
                          alt={cert.title}
                          className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(99,102,241,0.25)]"
                        />
                      </a>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {cert.status}
                      </span>
                      <div className="text-xs text-slate-400 font-mono mt-2">{cert.level}</div>
                    </div>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug">
                    {cert.title}
                  </h4>
                  <div className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    {cert.issuer}
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  {/* Validated Skills */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Validated Capabilities:
                    </div>
                    {cert.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="text-indigo-400">✓</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="text-gray-400 font-medium">
                    Issuer: <span className="text-gray-200">Amazon Web Services</span>
                  </div>
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/30 transform hover:scale-105"
                  >
                    <span>Verify on Credly</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>

        {/* Engineering Production Milestones as an Interactive Card Game Deck */}
        <ScrollReveal delay={200}>
          <div className="pt-4">
            <MilestoneCardDeck />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
