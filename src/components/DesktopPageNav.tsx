import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUp } from 'lucide-react';

export interface PageItem {
  id: string;
  number: string;
  label: string;
}

const pages: PageItem[] = [
  { id: 'hero', number: '01', label: 'Overview' },
  { id: 'about', number: '02', label: 'Philosophy & Hub' },
  { id: 'services', number: '03', label: 'Services Matrix' },
  { id: 'showcase', number: '04', label: 'Beyond The Gym' },
  { id: 'testimonials', number: '05', label: 'Member Stories' },
  { id: 'coaches', number: '06', label: 'Master Coaches' },
  { id: 'calculator', number: '07', label: 'Performance Metric' },
  { id: 'faq', number: '08', label: 'Intelligence / FAQ' },
  { id: 'contact', number: '09', label: 'Global Hubs' },
];

export default function DesktopPageNav() {
  const [activeId, setActiveId] = useState<string>('hero');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = pages.length - 1; i >= 0; i--) {
        const el = document.getElementById(pages[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(pages[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentIndex = pages.findIndex((p) => p.id === activeId);
  const nextSection = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  const scrollToNext = () => {
    if (nextSection) {
      document.getElementById(nextSection.id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Desktop Section Navigation"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 select-none"
    >
      {/* Background Pill */}
      <div className="flex flex-col items-center gap-2 p-2.5 rounded-full bg-neutral-950/80 border border-neutral-800/80 backdrop-blur-md shadow-2xl">
        {pages.map((page, idx) => {
          const isActive = page.id === activeId;
          return (
            <div
              key={page.id}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredId(page.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Tooltip on hover */}
              <AnimatePresence>
                {hoveredId === page.id && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-9 px-3 py-1 rounded bg-neutral-900 border border-neutral-700 text-[10px] font-mono tracking-widest text-white whitespace-nowrap shadow-xl pointer-events-none z-50 flex items-center gap-2"
                  >
                    <span className="text-[#FF6B00]">{page.number}</span>
                    <span className="uppercase">{page.label}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Indicator button */}
              <button
                onClick={() => scrollToSection(page.id)}
                aria-label={`Jump to page ${page.number}: ${page.label}`}
                className="group relative flex items-center justify-center w-7 h-7 rounded-full transition-all cursor-pointer focus:outline-none"
              >
                {isActive ? (
                  <motion.div
                    layoutId="activeDot"
                    className="w-4 h-4 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-[0_0_12px_#FF6B00]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  </motion.div>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-neutral-600 group-hover:bg-neutral-300 group-hover:scale-125 transition-all" />
                )}
              </button>
            </div>
          );
        })}

        {/* Divider */}
        <div className="w-4 h-px bg-neutral-800 my-1" />

        {/* Animated Down / Next Page Button with bounce */}
        <motion.button
          onClick={scrollToNext}
          title={nextSection ? `Fold to ${nextSection.label}` : 'Back to Top'}
          aria-label="Next section"
          className="relative w-8 h-8 rounded-full bg-[#FF6B00] hover:bg-[#FFA500] text-black flex items-center justify-center transition-colors shadow-lg cursor-pointer focus:outline-none mt-1"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          {nextSection ? (
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4 stroke-[3]" />
            </motion.div>
          ) : (
            <ArrowUp className="w-4 h-4 stroke-[3]" />
          )}
        </motion.button>
      </div>

      {/* Floating active page indicator text */}
      <div className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold bg-neutral-900/70 px-2 py-0.5 rounded border border-neutral-800/60 backdrop-blur-sm">
        {pages[currentIndex]?.number || '01'} / {pages[pages.length - 1].number}
      </div>
    </aside>
  );
}
