import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowUpRight } from 'lucide-react';
import ScrollArrow from './ScrollArrow';

export default function Hero() {
  const hoverEffect = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-between min-h-screen pt-28 pb-10 px-6 text-center text-white bg-neutral-950 overflow-hidden"
    >
      {/* Background with subtle gym imagery and multi-layered gradient */}
      <img
        src="/assets/aistudio/young-beautiful-woman-doing-exercise-with-bar-gym-athletic-girl-doing-workout-fitness-center-dark-background-gym-dressed-sport-clothes_7870b930.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-25 filter grayscale contrast-125 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.12)_0,transparent_70%)] pointer-events-none" />

      {/* Top Tagline */}
      <div className="relative z-10 pt-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-300 uppercase">
            INDEX: 001 // ATHLETIC ARCHITECTURE // NO PRESSURE. NO HYPE.
          </span>
        </motion.div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto my-auto py-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.92] mb-6 select-none"
        >
          TRAIN LIKE
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF6B00]">
            YOU
          </span>{' '}
          <span className="text-[#FF6B00]">PERFORM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-neutral-300 max-w-3xl mb-8 leading-relaxed font-light"
        >
          Precision coaching, mechanical barbells, and science-backed recovery tailored to your physiology — built by athletes for those who value progress over perfection.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10"
        >
          <motion.a
            href="#about"
            className="group px-9 py-4 bg-[#FF6B00] text-black font-bold rounded-sm text-sm tracking-wider uppercase flex items-center gap-2 hover:bg-[#FFA500] transition-colors shadow-[0_0_30px_rgba(255,107,0,0.4)]"
            {...hoverEffect}
          >
            START YOUR JOURNEY
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
          <motion.a
            href="#services"
            className="px-9 py-4 border border-neutral-700/80 bg-neutral-900/60 backdrop-blur-sm text-white font-bold rounded-sm text-sm tracking-wider uppercase flex items-center gap-2 hover:bg-neutral-800 transition-colors"
            {...hoverEffect}
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#FF6B00]" />
            EXPLORE PLATFORMS
          </motion.a>
        </motion.div>

        {/* Live Athletic Highlights Strip on Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:grid grid-cols-3 gap-6 pt-4 border-t border-neutral-900 w-full max-w-3xl text-left"
        >
          <div className="flex flex-col">
            <span className="text-xl font-bold font-mono text-white">01 / CALIBRATION</span>
            <span className="text-xs text-neutral-400 mt-1">Biomechanical movement screening for every new member</span>
          </div>
          <div className="flex flex-col border-x border-neutral-900 px-4">
            <span className="text-xl font-bold font-mono text-[#FF6B00]">02 / ELEVATION</span>
            <span className="text-xs text-neutral-400 mt-1">Olympic lifting platforms & Eleiko certified bars</span>
          </div>
          <div className="flex flex-col pl-2">
            <span className="text-xl font-bold font-mono text-white">03 / RECOVERY</span>
            <span className="text-xs text-neutral-400 mt-1">Contrast hydrotherapy & infrared thermal sessions</span>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow Motion Animation Icon */}
      <div className="relative z-10 w-full flex justify-center">
        <ScrollArrow
          variant="hero"
          targetId="about"
          label="SCROLL TO FOLD PAGE"
          pageNumber="01 / 09"
        />
      </div>
    </section>
  );
}
