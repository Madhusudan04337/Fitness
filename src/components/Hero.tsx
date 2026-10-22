import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Compass, Shield, Flame, Activity } from 'lucide-react';
import ScrollArrow from './ScrollArrow';

export default function Hero() {
  const hoverEffect = { hover: { scale: 1.02 }, tap: { scale: 0.98 } };

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-between min-h-screen pt-28 pb-10 px-6 sm:px-10 lg:px-16 text-[var(--theme-text-main)] bg-[var(--theme-bg)] overflow-hidden transition-colors duration-300"
    >
      {/* Background Architectural Grid Lines - subtle, crisp, no lightning */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(var(--theme-text-main)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Top Technical Dispatch Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--theme-border)] text-[11px] font-mono tracking-widest text-[var(--theme-text-muted)] uppercase"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-xs bg-[var(--theme-accent)]" />
            <span className="text-[var(--theme-text-main)] font-semibold">INDIRANAGAR PERFORMANCE HUB</span>
            <span className="hidden sm:inline opacity-50">• 12.9716° N, 77.5946° E</span>
          </div>

          <div className="flex items-center gap-4 text-[10px]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>FLOOR OPEN (06:00 – 23:00)</span>
            </span>
            <span className="hidden md:inline opacity-50">|</span>
            <span className="hidden md:inline">CAPPED AT 250 ACTIVE MEMBERS</span>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Body: Asymmetric Editorial Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Bold Typography & Purpose */}
        <div className="lg:col-span-7 flex flex-col text-left">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-4 text-xs font-mono font-bold tracking-[0.25em] text-[var(--theme-accent)] uppercase"
          >
            <span>[ SYSTEM PROTOCOL 01 ]</span>
            <span className="opacity-40">// ATHLETIC ATELIER</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.94] mb-6 uppercase text-[var(--theme-text-main)]"
          >
            DISCIPLINE <br />
            <span className="text-[var(--theme-accent)]">IN FORM.</span> <br />
            RECOVERY <br />
            IN SCIENCE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[var(--theme-text-muted)] max-w-xl mb-8 leading-relaxed font-light"
          >
            A high-standard training collective built for purposeful lifting, metabolic conditioning, and cold-contrast recovery. Zero crowded floor, zero commercial distraction.
          </motion.p>

          {/* Action CTAs: Crisp, solid, zero neon glow */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <motion.a
              href="#pricing"
              className="px-7 py-3.5 bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-mono font-bold rounded-lg text-xs tracking-widest uppercase flex items-center gap-2 hover:brightness-105 transition-all shadow-xs cursor-pointer"
              {...hoverEffect}
            >
              EXPLORE MEMBERSHIPS
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#services"
              className="px-7 py-3.5 border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:border-[var(--theme-text-muted)] text-[var(--theme-text-main)] font-mono font-bold rounded-lg text-xs tracking-widest uppercase flex items-center gap-2 transition-all cursor-pointer"
              {...hoverEffect}
            >
              <Compass className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
              VIEW SERVICES
            </motion.a>
          </motion.div>

          {/* Architectural Specifications Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--theme-border)] max-w-xl"
          >
            <div>
              <div className="font-mono text-xs text-[var(--theme-accent)] font-bold">ELEIKO RIGS</div>
              <div className="text-[11px] text-[var(--theme-text-muted)] mt-0.5">Olympic calibrated bars</div>
            </div>
            <div>
              <div className="font-mono text-xs text-[var(--theme-accent)] font-bold">4°C PLUNGE</div>
              <div className="text-[11px] text-[var(--theme-text-muted)] mt-0.5">Active cold recovery</div>
            </div>
            <div>
              <div className="font-mono text-xs text-[var(--theme-accent)] font-bold">1-ON-1 COACH</div>
              <div className="text-[11px] text-[var(--theme-text-muted)] mt-0.5">Custom programming</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Architectural Framed Showcase Card */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-3 overflow-hidden shadow-xl"
          >
            {/* Technical Crosshairs */}
            <span className="absolute top-2 left-2 text-[10px] font-mono text-[var(--theme-text-muted)] opacity-40">+</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-[var(--theme-text-muted)] opacity-40">+</span>
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-[var(--theme-text-muted)] opacity-40">+</span>
            <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[var(--theme-text-muted)] opacity-40">+</span>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[var(--theme-surface-solid)]">
              <img
                src="/assets/aistudio/young-beautiful-woman-doing-exercise-with-bar-gym-athletic-girl-doing-workout-fitness-center-dark-background-gym-dressed-sport-clothes_7870b930.jpg"
                alt="Olympic lifting floor at Hyperfit Indiranagar"
                className="w-full h-full object-cover filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)] via-transparent to-black/30" />

              {/* Status Tags inside Frame */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white uppercase tracking-wider font-semibold">
                  STRENGTH BAY 02
                </span>
                <span className="px-2.5 py-1 rounded bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] text-[10px] font-mono font-bold tracking-wider uppercase">
                  ACTIVE
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="text-[10px] font-mono tracking-widest text-[var(--theme-accent)] uppercase mb-1">
                  CALIBRATED PLATFORMS
                </div>
                <div className="font-heading text-lg font-bold text-white leading-snug">
                  Engineered for serious athletes and dedicated newcomers.
                </div>
              </div>
            </div>

            {/* Quick Metrics Underneath */}
            <div className="mt-3 pt-3 px-1 border-t border-[var(--theme-border)] flex items-center justify-between text-[11px] font-mono text-[var(--theme-text-muted)]">
              <span>FACILITY ID: HYPER-BLR-01</span>
              <span className="text-[var(--theme-text-main)] font-bold">LIMITED TO 250 MEMBERS</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Arrow / Section Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full flex justify-center pt-2"
      >
        <ScrollArrow
          variant="hero"
          targetId="about"
          label="EXPLORE OUR SPACE"
          pageNumber="01 / 10"
        />
      </motion.div>
    </section>
  );
}
