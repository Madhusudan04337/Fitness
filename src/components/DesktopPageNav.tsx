import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUp } from 'lucide-react';

export interface PageItem {
  id: string;
  number: string;
  label: string;
}

const pages: PageItem[] = [
  { id: 'hero', number: '01', label: 'Welcome' },
  { id: 'about', number: '02', label: 'About Us' },
  { id: 'services', number: '03', label: 'Our Services' },
  { id: 'showcase', number: '04', label: 'Community' },
  { id: 'pricing', number: '05', label: 'Pricing Plans' },
  { id: 'testimonials', number: '06', label: 'Member Stories' },
  { id: 'coaches', number: '07', label: 'Coaches' },
  { id: 'calculator', number: '08', label: 'BMI Calculator' },
  { id: 'faq', number: '09', label: 'FAQ' },
  { id: 'contact', number: '10', label: 'Contact & Hubs' },
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
      <div className="flex flex-col items-center gap-2 p-2.5 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] backdrop-blur-md shadow-2xl">
        {pages.map((page) => {
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
                    className="absolute right-9 px-3 py-1 rounded-lg bg-[var(--theme-surface-solid)] border border-[var(--theme-border)] text-[10px] font-mono tracking-widest text-[var(--theme-text-main)] whitespace-nowrap shadow-xl pointer-events-none z-50 flex items-center gap-2"
                  >
                    <span className="text-[var(--theme-accent)] font-bold">{page.number}</span>
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
                    className="w-4 h-4 rounded-full bg-[var(--theme-accent)] flex items-center justify-center shadow-[0_0_12px_var(--theme-accent)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent-contrast)]" />
                  </motion.div>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-[var(--theme-text-muted)] opacity-40 group-hover:opacity-90 group-hover:scale-125 transition-all" />
                )}
              </button>
            </div>
          );
        })}

        {/* Divider */}
        <div className="w-4 h-px bg-[var(--theme-border)] my-1" />

        {/* Animated Down / Next Page Button with bounce */}
        <motion.button
          onClick={scrollToNext}
          title={nextSection ? `Fold to ${nextSection.label}` : 'Back to Top'}
          aria-label="Next section"
          className="relative w-8 h-8 rounded-full bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] flex items-center justify-center hover:brightness-110 transition-all shadow-lg cursor-pointer focus:outline-none mt-1"
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
      <div className="text-[9px] font-mono tracking-widest text-[var(--theme-text-muted)] font-bold bg-[var(--theme-surface)] px-2.5 py-0.5 rounded-full border border-[var(--theme-border)] backdrop-blur-sm">
        {pages[currentIndex]?.number || '01'} / {pages[pages.length - 1].number}
      </div>
    </aside>
  );
}
