import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowUpRight } from 'lucide-react';
import ScrollArrow from './ScrollArrow';

export default function Hero() {
  const hoverEffect = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-between min-h-screen pt-28 pb-10 px-6 text-center text-[var(--theme-text-main)] bg-[var(--theme-bg)] overflow-hidden transition-colors duration-300"
    >
      {/* Background with subtle athletic imagery and dynamic theme radial glow */}
      <img
        src="/assets/aistudio/young-beautiful-woman-doing-exercise-with-bar-gym-athletic-girl-doing-workout-fitness-center-dark-background-gym-dressed-sport-clothes_7870b930.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale contrast-125 pointer-events-none mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--theme-bg)]/90 via-[var(--theme-bg)]/60 to-[var(--theme-bg)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--theme-accent-glow)_0,transparent_65%)] pointer-events-none" />

      {/* 1. Top Tagline */}
      <div className="relative z-10 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] backdrop-blur-md shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--theme-accent)] animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.2em] text-[var(--theme-text-muted)] uppercase">
            PREMIUM FITNESS & RECOVERY • INDIRANAGAR
          </span>
        </motion.div>
      </div>

      {/* 2. Main Center Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto my-auto py-6">
        <motion.h1
          initial={{ opacity: 0, y: 55, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.92] mb-6 select-none"
        >
          TRAIN LIKE
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-text-main)] via-[var(--theme-text-main)] to-[var(--theme-accent)]">
            YOU
          </span>{' '}
          <span className="text-[var(--theme-accent)]">PERFORM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-2xl text-[var(--theme-text-muted)] max-w-3xl mb-8 leading-relaxed font-light"
        >
          World-class personal training, Olympic strength equipment, and science-backed recovery — built to help you reach your peak performance.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10"
        >
          <motion.a
            href="#pricing"
            className="group px-9 py-4 bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-bold rounded-lg text-sm tracking-wider uppercase flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_0_30px_var(--theme-accent-glow)] cursor-pointer"
            {...hoverEffect}
          >
            JOIN TODAY
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
          <motion.a
            href="#services"
            className="px-9 py-4 border border-[var(--theme-border)] bg-[var(--theme-surface)] backdrop-blur-sm text-[var(--theme-text-main)] font-bold rounded-lg text-sm tracking-wider uppercase flex items-center gap-2 hover:border-[var(--theme-accent)] transition-all cursor-pointer"
            {...hoverEffect}
          >
            <Play className="w-3.5 h-3.5 fill-current text-[var(--theme-accent)]" />
            VIEW SERVICES
          </motion.a>
        </motion.div>

        {/* Live Athletic Highlights Strip on Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6 pt-6 border-t border-[var(--theme-border)] w-full max-w-3xl text-left">
          {[
            {
              title: '01 / ASSESSMENT',
              desc: 'Personalized movement assessment and goal setting for every member',
              highlight: false,
            },
            {
              title: '02 / STRENGTH',
              desc: 'Customized training programs with competition-grade equipment',
              highlight: true,
            },
            {
              title: '03 / RECOVERY',
              desc: 'Cold plunge tubs, infrared sauna, and guided mobility recovery',
              highlight: false,
            },
          ].map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.75 + idx * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex flex-col ${idx === 1 ? 'border-x border-[var(--theme-border)] px-4' : idx === 2 ? 'pl-2' : ''}`}
            >
              <span className={`text-xl font-bold font-mono ${col.highlight ? 'text-[var(--theme-accent)]' : 'text-[var(--theme-text-main)]'}`}>
                {col.title}
              </span>
              <span className="text-xs text-[var(--theme-text-muted)] mt-1 leading-relaxed">
                {col.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Down Arrow Motion Animation Icon */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full flex justify-center"
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
