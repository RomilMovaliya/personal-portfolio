'use client';

import { useState } from 'react';

interface PlayingCardMilestone {
  id: string;
  rank: 'K';
  cardIndex: number;
  suit: '♠' | '♦' | '♣' | '♥';
  suitName: 'spades' | 'diamonds' | 'clubs' | 'hearts';
  suitColor: string;
  cardName: string;
  roleBadge: string;
  statNumber: string;
  statLabel: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  rotation: number;
  dicePair: [number, number];
}

const playingCards: PlayingCardMilestone[] = [
  {
    id: 'king-spades',
    rank: 'K',
    cardIndex: 1,
    suit: '♠',
    suitName: 'spades',
    suitColor: 'text-indigo-400',
    cardName: 'King of Spades',
    roleBadge: 'Telematics & Scale',
    statNumber: '250,000+',
    statLabel: 'UK Parcels Processed',
    title: 'Enterprise Mobile Proof-of-Delivery',
    description:
      'Architected end-to-end mobile proof-of-delivery, high-velocity barcode scanning, and driver telematics workflows for high-volume nationwide UK courier runs.',
    metrics: [
      { label: 'Scanning Reliability', value: '99.98%' },
      { label: 'Telematics Frequency', value: '30s Realtime' },
      { label: 'Network Resilience', value: 'Auto-Sync' },
    ],
    technologies: ['React Native', 'Expo', 'Redux Toolkit', 'Background Geolocation', 'CameraX'],
    rotation: -7,
    dicePair: [1, 0], // 1 + 0 = 1
  },
  {
    id: 'king-diamonds',
    rank: 'K',
    cardIndex: 2,
    suit: '♦',
    suitName: 'diamonds',
    suitColor: 'text-rose-500',
    cardName: 'King of Diamonds',
    roleBadge: 'Velocity & Hardware',
    statNumber: '< 300ms',
    statLabel: 'AWB & Barcode Ingestion',
    title: 'Ultra-Low Latency Laser & Camera Scanner',
    description:
      'Engineered camera and hardware laser scanning pipelines enabling warehouse hub sorters to scan and verify 60 packages per minute with zero UI latency.',
    metrics: [
      { label: 'Peak Scan Rate', value: '60 / Min' },
      { label: 'Hardware Latency', value: '< 300ms' },
      { label: 'Terminal Compatibility', value: 'Zebra EMDK' },
    ],
    technologies: ['React Native', 'Zebra EMDK', 'Hardware Laser Wedge', 'Native Audio Chime', 'MMKV'],
    rotation: -2.5,
    dicePair: [1, 1], // 1 + 1 = 2
  },
  {
    id: 'king-clubs',
    rank: 'K',
    cardIndex: 3,
    suit: '♣',
    suitName: 'clubs',
    suitColor: 'text-emerald-400',
    cardName: 'King of Clubs',
    roleBadge: 'Reliability & Routing',
    statNumber: '99.94%',
    statLabel: 'On-Time Delivery SLA',
    title: 'Mission-Critical Multi-Stop Route Telematics',
    description:
      'Implemented dynamic multi-stop routing and live motorway traffic recalculation across UK nationwide postcodes, meeting tight delivery windows with zero dispatch lag.',
    metrics: [
      { label: 'SLA Adherence', value: '99.94%' },
      { label: 'Routing Engine', value: 'TSP Solver' },
      { label: 'Address Accuracy', value: 'Royal Mail PAF' },
    ],
    technologies: ['Travelling Salesman Engine', 'Background GPS', 'Royal Mail Postcodes', 'Live ETA Calc'],
    rotation: 2.5,
    dicePair: [2, 1], // 2 + 1 = 3
  },
  {
    id: 'king-hearts',
    rank: 'K',
    cardIndex: 4,
    suit: '♥',
    suitName: 'hearts',
    suitColor: 'text-red-500',
    cardName: 'King of Hearts',
    roleBadge: 'Architecture & Ecosystem',
    statNumber: '3+ Suites',
    statLabel: 'Production Mobile Deployments',
    title: 'Cross-Platform React Native Architecture',
    description:
      'Architected and shipped production mobile applications across freight logistics (PTTR), courier delivery (NREX), and local business marketing (NUVIO).',
    metrics: [
      { label: 'Shipped Apps', value: '7+ Native' },
      { label: 'Framework Core', value: 'React Native 0.81' },
      { label: 'Backend Layer', value: 'Supabase & Cloud' },
    ],
    technologies: ['React Native', 'Expo 54', 'Turborepo Monorepo', 'TypeScript', 'Redux Toolkit'],
    rotation: 7,
    dicePair: [2, 2], // 2 + 2 = 4
  },
];

function DieFace({
  value,
  isGold = false,
  isRolling = false,
}: {
  value: number;
  isGold?: boolean;
  isRolling?: boolean;
}) {
  return (
    <div
      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl p-1.5 shadow-lg border flex flex-col justify-between transition-all duration-300 ${
        isGold
          ? 'bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 border-amber-300 shadow-amber-500/20'
          : 'bg-gradient-to-br from-white via-slate-100 to-slate-200 border-white/90 shadow-black/40'
      } ${isRolling ? 'animate-spin' : 'hover:scale-105'}`}
    >
      {value === 0 && (
        <div className="w-full h-full flex items-center justify-center">
          <span className={`text-[10px] font-mono font-bold ${isGold ? 'text-amber-950/70' : 'text-slate-400'}`}>0</span>
        </div>
      )}
      {value === 1 && (
        <div className="w-full h-full flex items-center justify-center">
          <span className={`w-2.5 h-2.5 rounded-full ${isGold ? 'bg-slate-950' : 'bg-red-600'}`} />
        </div>
      )}
      {value === 2 && (
        <div className="w-full h-full flex flex-col justify-between p-0.5">
          <div className="flex justify-start">
            <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-slate-950' : 'bg-slate-900'}`} />
          </div>
          <div className="flex justify-end">
            <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-slate-950' : 'bg-slate-900'}`} />
          </div>
        </div>
      )}
      {value === 3 && (
        <div className="w-full h-full flex flex-col justify-between p-0.5">
          <div className="flex justify-start">
            <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-slate-950' : 'bg-slate-900'}`} />
          </div>
          <div className="flex justify-center">
            <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-slate-950' : 'bg-red-600'}`} />
          </div>
          <div className="flex justify-end">
            <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-slate-950' : 'bg-slate-900'}`} />
          </div>
        </div>
      )}
      {value === 4 && (
        <div className="w-full h-full flex flex-col justify-between p-0.5">
          <div className="flex justify-between">
            <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-slate-950' : 'bg-slate-900'}`} />
            <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-slate-950' : 'bg-slate-900'}`} />
          </div>
          <div className="flex justify-between">
            <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-slate-950' : 'bg-slate-900'}`} />
            <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-slate-950' : 'bg-slate-900'}`} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function MilestoneCardDeck() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [diceRolling, setDiceRolling] = useState(false);
  const [diceValues, setDiceValues] = useState<[number, number]>(playingCards[0].dicePair);

  const activeCard = playingCards[activeCardIndex];

  // Select card and align dice sum directly
  const handleSelectCard = (idx: number) => {
    setActiveCardIndex(idx);
    setDiceValues(playingCards[idx].dicePair);
  };

  // Roll 3D Dice to randomly draw a card, ensuring sum = cardIndex
  const handleRollDice = () => {
    if (diceRolling) return;
    setDiceRolling(true);

    const targetIdx = Math.floor(Math.random() * playingCards.length);
    const targetCard = playingCards[targetIdx];

    const rolls = 6;
    let count = 0;
    const interval = setInterval(() => {
      // Random tumbling values during animation
      const r1 = Math.floor(Math.random() * 3);
      const r2 = Math.floor(Math.random() * 3);
      setDiceValues([r1, r2]);
      count++;
      if (count >= rolls) {
        clearInterval(interval);
        setDiceRolling(false);
        // Land precisely on the target card's sum pair
        setDiceValues(targetCard.dicePair);
        setActiveCardIndex(targetIdx);
      }
    }, 100);
  };

  const diceSum = diceValues[0] + diceValues[1];

  return (
    <div className="w-full">
      {/* Header with Title and Interactive 3D Dice Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono uppercase tracking-wider mb-2">
            <span>♠</span>
            <span>The Four Kings of Mobile Engineering</span>
            <span>♦</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Production Operational Milestones
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Hover or tap any card to draw it into focus, or roll the dice to draw by sum.
          </p>
        </div>

        {/* Interactive 3D Dice Rolling Unit */}
        <div className="flex items-center gap-4 self-start md:self-auto">
          {/* Pair of 3D Dice Cubes with exact sum matching */}
          <div
            onClick={handleRollDice}
            className="flex items-center gap-2.5 cursor-pointer group p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors shadow-lg"
            title="Click to roll dice"
          >
            <DieFace value={diceValues[0]} isRolling={diceRolling} />
            <span className="text-slate-500 font-mono font-bold text-xs">+</span>
            <DieFace value={diceValues[1]} isGold={true} isRolling={diceRolling} />
          </div>

          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={handleRollDice}
              disabled={diceRolling}
              className="h-10 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>🎲</span>
              <span>{diceRolling ? 'Rolling...' : 'Roll Dice'}</span>
            </button>
            <span className="text-[11px] font-mono text-slate-400 text-center">
              Sum: {diceSum} → Card #{diceSum}
            </span>
          </div>
        </div>
      </div>

      {/* FANNED OUT OVERLAPPING FOUR KINGS PLAYING CARDS (Matching user's photo) */}
      <div className="relative py-12 px-2 overflow-visible">
        {/* Felt Card Table Platform with Radial Glow */}
        <div className="absolute inset-0 bg-slate-900/30 rounded-3xl pointer-events-none -z-10" />

        <div className="flex justify-center items-center max-w-5xl mx-auto min-h-[460px]">
          {playingCards.map((card, idx) => {
            const isSelected = activeCardIndex === idx;

            // Fanned overlapping style exactly like 4 King playing cards on a table
            const baseRotation = card.rotation;
            const currentRotation = isSelected ? 0 : baseRotation;
            const currentTranslateY = isSelected ? -36 : 0;
            const currentScale = isSelected ? 1.06 : 1;
            const zIndex = isSelected ? 40 : 10 + idx * 5;

            return (
              <div
                key={card.id}
                onClick={() => handleSelectCard(idx)}
                style={{
                  transform: `translateY(${currentTranslateY}px) rotate(${currentRotation}deg) scale(${currentScale})`,
                  zIndex,
                }}
                className={`relative w-[240px] sm:w-[270px] md:w-[290px] h-[390px] sm:h-[420px] rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-500 ease-out select-none flex-shrink-0 ${
                  idx > 0 ? '-ml-16 sm:-ml-24 md:-ml-28 lg:-ml-32' : ''
                } group`}
              >
                {/* Playing Card Ambient Drop Shadow */}
                <div
                  className={`absolute -inset-1 rounded-2xl sm:rounded-3xl bg-indigo-500/10 blur-xl transition-opacity duration-500 ${
                    isSelected ? 'opacity-90 blur-2xl' : 'opacity-0 group-hover:opacity-40'
                  }`}
                />

                {/* PLAYING CARD BODY (Royal Ivory / Obsidian Finish) */}
                <div
                  className={`relative w-full h-full rounded-2xl sm:rounded-3xl bg-slate-900 border p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-2xl transition-all ${
                    isSelected
                      ? 'border-indigo-500 ring-1 ring-indigo-500/50'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Subtle Playing Card Watermark Texture */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                  {/* Specular Holographic Sheen on hover / active */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none transition-opacity duration-700 ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* TOP-LEFT CORNER INDEX (Traditional King Suit) */}
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-xl sm:text-2xl font-black font-serif text-white tracking-tighter">
                        {card.rank}
                      </span>
                      <span className={`text-xl sm:text-2xl leading-none ${card.suitColor}`}>
                        {card.suit}
                      </span>
                    </div>

                    {/* Role Pill */}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-gray-300 font-bold">
                      {card.roleBadge}
                    </span>
                  </div>

                  {/* CENTERPIECE: Royal Ornate Medallion with Hero Metric */}
                  <div className="my-auto text-center py-4 px-2 rounded-2xl bg-slate-950/80 border border-slate-800/80 relative shadow-inner">
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300 tracking-tight font-mono">
                      {card.statNumber}
                    </div>
                    <div className="text-[11px] font-bold text-gray-300 uppercase tracking-wider mt-1">
                      {card.statLabel}
                    </div>
                    <div className="text-xs text-amber-400 font-semibold mt-1 font-serif italic">
                      &ldquo;{card.cardName}&rdquo;
                    </div>
                  </div>

                  {/* BOTTOM-RIGHT INVERTED CORNER INDEX (Traditional Card Backing) */}
                  <div className="flex items-end justify-between">
                    <div className="text-[10px] font-mono text-gray-400 truncate max-w-[140px]">
                      {card.title}
                    </div>

                    <div className="flex flex-col items-center leading-none rotate-180">
                      <span className="text-xl sm:text-2xl font-black font-serif text-white tracking-tighter">
                        {card.rank}
                      </span>
                      <span className={`text-xl sm:text-2xl leading-none ${card.suitColor}`}>
                        {card.suit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DETAILED ACTIVE CARD INSPECTOR DISPLAY (Clean, Lead UI/UX Aesthetics) */}
      <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden animate-fade-in-up">
        {/* Ambient colored lighting behind inspector */}
        <div className="absolute top-0 right-0 w-[450px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid md:grid-cols-12 gap-6 items-center">
          {/* Card Identifier & Suit Emblem */}
          <div className="md:col-span-4 p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-center relative shadow-inner">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className={`text-3xl ${activeCard.suitColor}`}>{activeCard.suit}</span>
              <span className="text-2xl font-black font-serif text-white">{activeCard.cardName}</span>
            </div>
            <div className="text-4xl font-black text-amber-300 font-mono tracking-tight mt-2">
              {activeCard.statNumber}
            </div>
            <div className="text-xs font-bold text-gray-300 uppercase tracking-wider mt-1">
              {activeCard.statLabel}
            </div>
          </div>

          {/* Architecture Details & Verified Metrics (Without Awkward Green SLA Pill) */}
          <div className="md:col-span-8 space-y-4">
            <div>
              <h4 className="text-lg font-bold text-white mb-1.5 flex items-center justify-between">
                <span>{activeCard.title}</span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Production Telematics
                </span>
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {activeCard.description}
              </p>
            </div>

            {/* 3 Telemetry Metrics */}
            <div className="grid grid-cols-3 gap-2.5">
              {activeCard.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
                >
                  <div className="text-[10px] font-mono text-gray-400 truncate">{m.label}</div>
                  <div className="text-xs font-bold text-white mt-0.5 truncate">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-1">
              {activeCard.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
