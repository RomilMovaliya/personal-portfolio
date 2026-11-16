'use client';

import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    category: 'React Native & Mobile Frontend',
    skills: [
      'React Native (0.81)',
      'Expo (~54/57)',
      'React Navigation (Drawer & Stack)',
      'React Native Reanimated 4',
      'React Native Gesture Handler',
      'React Native MMKV & Nitro Modules',
      'React Native Paper / RNEUI',
      'Live Activities & Dynamic Island'
    ]
  },
  {
    category: 'AI-Assisted Multi-Agent Development',
    skills: [
      'Claude Code Agentic CLI',
      'Model Context Protocol (MCP)',
      'GitHub MCP (Branch & PR Automation)',
      'Supabase MCP (Schema & Live DB Sync)',
      'Google Drive MCP (Bug Sheet Triage)',
      'Figma MCP (Design Token Extraction)',
      'Agentic Pair Programming Workflows'
    ]
  },
  {
    category: 'Mobile Telematics, GIS & Hardware',
    skills: [
      'Live GPS & Turn-by-Turn Telematics',
      'react-native-document-scanner-plugin',
      'react-native-pdf',
      'Zebra EMDK / Hardware Laser Wedge',
      'Bluetooth Thermal Label Printing (ESC/POS)',
      'Background Geolocation & Tracking',
      'Royal Mail PAF API / Postcodes.io'
    ]
  },
  {
    category: 'Mobile State, Data & Networking',
    skills: [
      'Redux Toolkit & Redux Persist',
      '@tanstack/react-query',
      'Supabase Realtime & PostgreSQL',
      'REST & WebSocket Channels',
      'Formik & Yup Validation',
      'react-native-gifted-charts'
    ]
  },
  {
    category: 'Notifications, Auth & Native Sleds',
    skills: [
      '@notifee/react-native',
      '@react-native-firebase/messaging',
      'Google Sign-In & Apple Authentication',
      'Biometric Unlock (Face ID / Fingerprint)',
      'Stripe React Native SDK',
      'react-native-keyboard-controller'
    ]
  },
  {
    category: 'AWS Cloud Architecture & DevOps',
    skills: [
      'AWS Community Builder Leadership',
      'AWS Solutions Architect (SAA-C03)',
      'AWS Cloud Practitioner (CLF-C02)',
      'AWS Lambda & EventBridge',
      'Fastlane & EAS Build CI/CD',
      'Sentry Mobile Crash Monitoring'
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">Technical Core</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Engineering Capabilities
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
              Full-spectrum software engineering expertise combined with cloud infrastructure, production telematics, and scalable native architectures.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div 
                className="bg-slate-950/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-all hover:transform hover:scale-[1.02]"
              >
                <h3 className="text-lg font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="px-3 py-1 bg-slate-900 border border-slate-800 text-gray-300 rounded-lg text-xs font-medium hover:border-indigo-400 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
