import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ScrollArrowProps {
  targetId?: string;
  label?: string;
  pageNumber?: string;
  className?: string;
  variant?: 'hero' | 'section';
}

export default function ScrollArrow({
  targetId,
  label = 'SCROLL DOWN',
  pageNumber,
  className = '',
  variant = 'section',
}: ScrollArrowProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        <button
          onClick={handleClick}
          aria-label="Scroll to next page"
          className="group relative flex flex-col items-center focus:outline-none cursor-pointer"
        >
          {/* Subtle pulse ring around arrow */}
          <motion.div
            className="absolute -inset-2 rounded-full border border-[#FF6B00]/40 pointer-events-none"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Button circle with icon */}
          <motion.div
            className="relative w-12 h-12 rounded-full bg-neutral-900/90 border border-neutral-700/80 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00]/10 flex items-center justify-center text-white group-hover:text-[#FF6B00] transition-colors shadow-lg backdrop-blur-sm"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ChevronDown className="w-5 h-5 text-[#FF6B00]" strokeWidth={2.5} />
            </motion.div>
          </motion.div>

          {/* Micro text label */}
          <div className="mt-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-ping" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 group-hover:text-white transition-colors uppercase">
              {label} {pageNumber && <span className="text-neutral-500">[{pageNumber}]</span>}
            </span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center pt-8 pb-4 ${className}`}>
      <button
        onClick={handleClick}
        aria-label="Fold to next section"
        className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-neutral-900/80 border border-neutral-800/90 hover:border-[#FF6B00]/60 hover:bg-neutral-800/80 transition-all cursor-pointer backdrop-blur-sm shadow-md"
      >
        <span className="text-[11px] font-mono tracking-widest text-neutral-400 group-hover:text-neutral-200 transition-colors uppercase">
          {label}
        </span>
        <motion.div
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-5 h-5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-black transition-colors"
        >
          <ChevronDown className="w-3.5 h-3.5" strokeWidth={2.5} />
        </motion.div>
      </button>
    </div>
  );
}
