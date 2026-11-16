'use client';

import { useState, useEffect, useCallback } from 'react';

export interface ScreenshotItem {
  id: string;
  title: string;
  category: string;
  categoryLabel?: string;
  image: string;
  description: string;
  tags?: string[];
}

interface ProjectScreenshotGalleryProps {
  title: string;
  subtitle?: string;
  projectName: string;
  items: ScreenshotItem[];
  categories?: { key: string; label: string; count: number }[];
  defaultCategory?: string;
}

export default function ProjectScreenshotGallery({
  title,
  subtitle,
  projectName,
  items,
  categories,
  defaultCategory,
}: ProjectScreenshotGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    defaultCategory || (categories && categories[0] ? categories[0].key : 'all')
  );
  const [selectedScreenIndex, setSelectedScreenIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  const filteredItems = items.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const selectedItem = selectedScreenIndex !== null ? filteredItems[selectedScreenIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedScreenIndex === null) return;
    setSelectedScreenIndex((prev) => ((prev! + 1) % filteredItems.length));
  }, [selectedScreenIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedScreenIndex === null) return;
    setSelectedScreenIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  }, [selectedScreenIndex, filteredItems.length]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedScreenIndex === null) return;
      if (e.key === 'Escape') setSelectedScreenIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedScreenIndex, handleNext, handlePrev]);

  return (
    <div className="w-full my-12">
      {/* Header bar with titles and tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium mb-2 whitespace-nowrap">
            <span className="text-white font-semibold">Production UI</span>
            <span className="text-slate-500">•</span>
            <span>{filteredItems.length} Screens</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Category Tabs & View Mode */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          {categories && categories.length > 1 && (
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setSelectedScreenIndex(null);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="ml-1.5 text-[10px] opacity-75 font-mono">({cat.count})</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* View mode toggle */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              type="button"
              onClick={() => setViewMode('carousel')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                viewMode === 'carousel' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Horizontal Carousel View"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                viewMode === 'grid' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Full Grid View"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Display Area */}
      {viewMode === 'carousel' ? (
        <div className="relative">
          {/* Scrollable track without any visible scrollbar indicator */}
          <div className="flex gap-6 overflow-x-auto pb-4 pt-2 px-1 snap-x snap-mandatory no-scrollbar">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedScreenIndex(idx)}
                className="snap-center shrink-0 w-[240px] sm:w-[270px] md:w-[285px] cursor-pointer group focus:outline-none"
              >
                {/* Device Frame */}
                <div className="relative rounded-[36px] p-2.5 bg-slate-900 border-2 border-slate-800 hover:border-indigo-500/60 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1">
                  {/* Speaker pill notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                  </div>

                  {/* Screen Container */}
                  <div className="relative rounded-[26px] overflow-hidden bg-slate-950 aspect-[9/19.5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Subtle bottom gradient overlay for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-[11px] text-white font-medium flex items-center gap-1.5">
                        <span>Click to Enlarge</span>
                        <svg className="w-3.5 h-3.5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 3 21 3 21 9" />
                          <polyline points="9 21 3 21 3 15" />
                          <line x1="21" y1="3" x2="14" y2="10" />
                          <line x1="3" y1="21" x2="10" y2="14" />
                        </svg>
                      </span>
                    </div>

                    {/* Index badge */}
                    <div className="absolute top-4 right-3 px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-300 backdrop-blur-sm z-10">
                      #{idx + 1}
                    </div>
                  </div>
                </div>

                {/* Caption below frame */}
                <div className="mt-3.5 px-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-white font-bold text-xs sm:text-sm tracking-tight truncate group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h4>
                    {item.categoryLabel && (
                      <span className="text-[10px] font-mono text-slate-500 shrink-0">
                        {item.categoryLabel}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-xs mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mt-3">
            <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m7 16-4-4 4-4M17 8l4 4-4 4M3 12h18"/>
            </svg>
            <span className="font-medium text-slate-400">Scroll or swipe horizontally to view all {filteredItems.length} screens</span>
          </div>
        </div>
      ) : (
        /* Grid View */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedScreenIndex(idx)}
              className="cursor-pointer group focus:outline-none"
            >
              <div className="relative rounded-[28px] p-2 bg-slate-900 border border-slate-800 hover:border-indigo-500/60 transition-all duration-300 shadow-lg group-hover:-translate-y-1">
                <div className="relative rounded-[20px] overflow-hidden bg-slate-950 aspect-[9/19.5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-[9px] font-mono text-slate-300 backdrop-blur-sm">
                    #{idx + 1}
                  </div>
                </div>
              </div>

              <div className="mt-2.5 px-1">
                <h4 className="text-white font-semibold text-xs truncate group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-[11px] mt-0.5 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedItem && selectedScreenIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedScreenIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col md:flex-row gap-6 items-center max-h-[92vh] overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedScreenIndex(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold z-30 transition-colors"
              aria-label="Close Preview"
            >
              ✕
            </button>

            {/* Left/Prev button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center text-lg z-30 transition-colors shadow-lg hidden sm:flex"
              aria-label="Previous Screen"
            >
              ‹
            </button>

            {/* Right/Next button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center text-lg z-30 transition-colors shadow-lg hidden sm:flex"
              aria-label="Next Screen"
            >
              ›
            </button>

            {/* Device Frame in Modal */}
            <div className="shrink-0 w-[260px] sm:w-[300px] rounded-[40px] p-3 bg-slate-950 border-2 border-slate-700 shadow-2xl relative">
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-950" />
              </div>

              <div className="rounded-[30px] overflow-hidden bg-slate-950 aspect-[9/19.5]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Metadata and Context Description */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-medium">
                    {projectName}
                  </span>
                  <span className="text-slate-400 text-xs font-mono">
                    Screen {selectedScreenIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selectedItem.title}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedItem.description}
              </p>

              {selectedItem.tags && selectedItem.tags.length > 0 && (
                <div>
                  <div className="text-xs font-medium text-slate-400 mb-2">
                    Engineered Features &amp; Architecture:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation controls in modal */}
              <div className="pt-4 flex items-center justify-end border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors inline-flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Next</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
