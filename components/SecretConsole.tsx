'use client';

import { useState, useEffect, useRef } from 'react';

interface Command {
  command: string;
  output: string[];
}

export default function SecretConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([
    {
      command: '',
      output: [
        '⚡ Romil Movaliya — Interactive Developer Terminal [v2.4]',
        'AWS Community Builder & Software Engineer',
        'Type "help" to see available commands or "superpower" for the reveal.',
        '──────────────────────────────────────────────────────────'
      ]
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Toggle console with Ctrl+` or keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Scroll to bottom on new output
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const commands: Record<string, string[]> = {
    help: [
      'Available commands:',
      '  superpower - Reveal my unique engineering tech superpower',
      '  projects   - Explore the 3 production mobile platforms (PTTR, NREX, Nuvio)',
      '  skills     - View React Native & mobile frontend capabilities',
      '  aws        - Check AWS Community Builder status & AWS Certifications',
      '  about      - Background on Romil Movaliya',
      '  contact    - Direct developer contact details',
      '  mcp        - Details on Claude Code + Model Context Protocol setup',
      '  joke       - Random developer humor',
      '  matrix     - Enter the Matrix simulation',
      '  clear      - Clear the console',
      '  exit       - Close the console'
    ],
    superpower: [
      '✨ ROMIL\'S TECH SUPERPOWER REVEAL:',
      '──────────────────────────────────────────────────────────',
      '🚀 "High-Performance Mobile Architecture & Production Telematics"',
      '',
      'Specializing in architecting mission-critical React Native mobile apps',
      '(PTTR, NREX, Nuvio) with real-time GPS tracking, commercial fleet routing,',
      'hardware laser barcode scanning, and cloud backends at scale.',
      '',
      'Combined with AWS Serverless and EventBridge architecture, this',
      'bridges pixel-perfect mobile UX with enterprise cloud scalability.'
    ],
    about: [
      'Romil Movaliya',
      'Software Engineer',
      'AWS Community Builder & AWS Solutions Architect Associate (SAA-C03)',
      '',
      'Specialized in complex mobile applications, freight TMS telematics,',
      'courier barcode scanners, and scalable cloud-connected mobile architectures.'
    ],
    projects: [
      '1. PTTR Freight Loadboard & Driver Mobile Ecosystem',
      '   - Apps: @pttr/mobile & @pttr/driver (Fleet telematics, BOL scanner, Notifee)',
      '   - Built with Claude Code + Multi-Agent MCP (GitHub, Supabase, Drive, Figma)',
      '',
      '2. NREX UK Parcel Delivery & Courier Mobile Suite',
      '   - 4 Coordinated React Native mobile apps for UK nationwide logistics',
      '   - Sub-300ms barcode scanning, Royal Mail PAF lookup, geofenced POD',
      '',
      '3. NUVIO — All-in-One Local Business Marketing App',
      '   - Pocket marketing assistant for cafés, salons, and shops',
      '   - Connects Instagram, Facebook & Google: post scheduler, reviews & AI replies',
      '   - Dynamic customer QR codes, newsletter builder & team management'
    ],
    skills: [
      'Mobile: React Native (0.81), Expo (~54/57), React Navigation, Reanimated 4',
      'State: Redux Toolkit, TanStack Query, MMKV, Nitro Modules, SQLite',
      'Hardware: Zebra EMDK Laser Wedge, Bluetooth Thermal Printers (ESC/POS)',
      'AI/Agentic: Claude Code CLI, MCP (GitHub, Supabase, Google Drive, Figma)',
      'Cloud: AWS Lambda, S3, EventBridge, CloudFront, Amplify Hosting'
    ],
    aws: [
      '⚡ AWS CREDENTIALS & COMMUNITY:',
      '──────────────────────────────────────────────────────────',
      '• AWS Community Builder (Global Program Member)',
      '• AWS Certified Solutions Architect – Associate (SAA-C03)',
      '  Credly: https://www.credly.com/badges/1c09a4cf-c60e-4458-9439-6af45b12a95f/public_url',
      '• AWS Certified Cloud Practitioner (CLF-C02)',
      '  Credly: https://www.credly.com/badges/081dc4f6-8321-4769-9178-f20c633e919f/linked_in_profile',
      '• AWS Builder Center: https://builder.aws.com/community/@romil?tab=badges',
      '• DEV Community: https://dev.to/romil_movaliya',
      '• YouTube: https://www.youtube.com/@TheApnaJosh'
    ],
    mcp: [
      '🤖 MODEL CONTEXT PROTOCOL (MCP) WORKFLOW IN PTTR:',
      '──────────────────────────────────────────────────────────',
      '• GitHub MCP: Automates monorepo package versioning, PRs, and branch sync',
      '• Supabase MCP: Inspects real-time schemas, executes queries, updates RLS',
      '• Google Drive MCP: Synchronizes live QA bug tracking sheets directly into code fixes',
      '• Figma MCP: Extracts design tokens and generates native layout components'
    ],
    contact: [
      '📧 Email: romilmovaliya2929@gmail.com',
      '📍 Location: Surat, Gujarat, India',
      '💼 LinkedIn: https://www.linkedin.com/in/romilmovaliya/',
      '💻 GitHub: https://github.com/romilmovaliya',
      '⚡ AWS Builder Center: https://builder.aws.com/community/@romil?tab=badges',
      '📝 DEV Community: https://dev.to/romil_movaliya',
      '▶️ YouTube Channel: https://www.youtube.com/@TheApnaJosh'
    ],
    joke: [
      'Why do mobile developers love React Native?',
      '',
      'Because they only have to write bugs once for both platforms! 📱🐛😄'
    ],
    matrix: [
      '01000001 01010111 01010011 00100000 01000011 01001100 01001111 01010101 01000100',
      'Wake up, Neo...',
      'You are exploring Romil Movaliya\'s AWS Cloud & React Native Architecture.',
      'Take the 🟢 green pill to build high-scale logistics apps!'
    ],
    clear: ['CLEAR'],
    exit: ['EXIT']
  };

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === '') return;

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === 'clear') {
      setHistory([{
        command: '',
        output: ['Terminal cleared. Type "help" or "superpower" for commands.']
      }]);
      return;
    }

    if (trimmedCmd === 'exit') {
      setIsOpen(false);
      return;
    }

    let output: string[];
    if (commands[trimmedCmd]) {
      output = commands[trimmedCmd];
    } else {
      output = [
        `Command not recognized: "${cmd}"`,
        'Type "help" to view all supported terminal commands.'
      ];
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <>
      {/* VISIBLE HACKATHON HINT / FLOATING TRIGGER PILL */}
      <div className="fixed bottom-6 right-6 z-40 print:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-800 text-indigo-300 hover:text-white border border-indigo-500/40 hover:border-indigo-400 shadow-xl shadow-black/50 backdrop-blur-md transition-all transform hover:scale-105"
          aria-label="Open Interactive Developer Terminal"
          title="Interactive Feature: Open Developer Terminal (Ctrl+`)"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold flex items-center gap-1.5">
            <span>💻</span>
            <span>Secret Terminal</span>
          </span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 border border-slate-700 rounded text-gray-400 group-hover:text-indigo-300">
            Ctrl+`
          </kbd>
        </button>
      </div>

      {/* MODAL CONSOLE WINDOW */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-3xl h-[540px] bg-slate-950 border-2 border-indigo-500/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header Bar */}
            <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-indigo-500/30">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="text-indigo-300 font-mono text-xs font-bold flex items-center gap-1.5">
                  <span>romil-movaliya@aws-cloud: ~</span>
                  <span className="text-[10px] text-gray-400 font-normal">[Interactive Creative Feature]</span>
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close terminal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Output Screen */}
            <div 
              ref={outputRef}
              className="flex-1 p-4 overflow-y-auto font-mono text-xs leading-relaxed space-y-3 custom-scrollbar bg-slate-950/90"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.command && (
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <span>$</span>
                      <span>{item.command}</span>
                    </div>
                  )}
                  {item.output.map((line, lineIdx) => (
                    <div key={lineIdx} className="text-gray-300 pl-3">
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Input Form Bar */}
            <form onSubmit={handleSubmit} className="bg-slate-900/90 px-4 py-3 border-t border-indigo-500/30 flex items-center gap-2">
              <span className="text-emerald-400 font-mono font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white font-mono text-xs outline-none placeholder-gray-500"
                placeholder='Type "superpower", "projects", "skills", "aws", or "help"...'
                autoComplete="off"
              />
              <button
                type="submit"
                className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs transition-colors"
              >
                Run
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
