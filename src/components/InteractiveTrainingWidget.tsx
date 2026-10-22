import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Flame, Activity, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const WORKOUT_PROGRAMS = [
  {
    id: 'strength',
    name: 'STRENGTH & OLYMPIC LIFTING',
    duration: '60 MINS',
    intensity: 'HIGH INTENSITY',
    coach: 'Alex Rivera (CSCS)',
    focus: 'Barbell Squats, Clean & Jerk, Deadlift Mechanics',
    calories: '650–800 KCAL',
    image: '/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg',
  },
  {
    id: 'conditioning',
    name: 'METABOLIC CONDITIONING',
    duration: '45 MINS',
    intensity: 'MAX EFFORT',
    coach: 'Marcus Thorne',
    focus: 'Kettlebells, Rowing Intervals, Assault Bike & Core',
    calories: '750–950 KCAL',
    image: '/assets/aistudio/side-view-man-doing-burpees_bcdc0943.jpg',
  },
  {
    id: 'mobility',
    name: 'MOBILITY & SPINE FLOW',
    duration: '50 MINS',
    intensity: 'MODERATE',
    coach: 'Sarah Jenkins (RYT-500)',
    focus: 'Active Joint Relief, Deep Stretching & Posture Correction',
    calories: '350–450 KCAL',
    image: '/assets/aistudio/back-view-woman-doing-yoga-outdoors_fa4801ee.jpg',
  },
  {
    id: 'recovery',
    name: 'CONTRAST THERAPY PROTOCOL',
    duration: '30 MINS',
    intensity: 'RESTORATIVE',
    coach: 'Recovery Lounge Team',
    focus: '4°C Cold Plunge Tubs & 85°C Cedar Dry Sauna',
    calories: '200 KCAL (REST)',
    image: '/assets/aistudio/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club_a3ab2b9a.jpg',
  },
];

export default function InteractiveTrainingWidget() {
  const [activeTab, setActiveTab] = useState(WORKOUT_PROGRAMS[0].id);
  const currentProgram = WORKOUT_PROGRAMS.find((p) => p.id === activeTab) || WORKOUT_PROGRAMS[0];

  return (
    <section className="py-20 lg:py-28 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[11px] font-mono tracking-[0.25em] text-[var(--theme-accent)] uppercase mb-4 shadow-xs">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE TRAINING MATRIX</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--theme-text-main)] leading-tight mb-4">
            CHOOSE YOUR <span className="text-[var(--theme-accent)]">TRAINING PATH</span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--theme-text-muted)] leading-relaxed font-light">
            Select a discipline below to preview live session specifics, coaching allocation, and energy expenditures.
          </p>

          {/* Program Selector Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {WORKOUT_PROGRAMS.map((prog) => {
              const isActive = prog.id === activeTab;
              return (
                <button
                  key={prog.id}
                  onClick={() => setActiveTab(prog.id)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer athletic-btn ${
                    isActive
                      ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] shadow-md'
                      : 'bg-[var(--theme-surface)] text-[var(--theme-text-muted)] border border-[var(--theme-border)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-text-main)]'
                  }`}
                >
                  {prog.name.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Program Display Card */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-surface)] backdrop-blur-xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 athletic-card">
          {/* Left Column: Image with Animated Overlay */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-[var(--theme-surface-solid)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentProgram.id}
                src={currentProgram.image}
                alt={currentProgram.name}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter contrast-110"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)] via-black/40 to-transparent" />
            <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[var(--theme-accent)] font-bold uppercase">
              {currentProgram.intensity}
            </div>
          </div>

          {/* Right Column: Dynamic Specs & Details */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProgram.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-[var(--theme-accent)] font-mono text-xs font-bold tracking-widest uppercase mb-2">
                  SESSION OVERVIEW • {currentProgram.duration}
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-black text-[var(--theme-text-main)] uppercase tracking-tight mb-4">
                  {currentProgram.name}
                </h3>

                <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed mb-6">
                  {currentProgram.focus}
                </p>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-[var(--theme-border)] mb-6">
                  <div>
                    <div className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase">Assigned Coach</div>
                    <div className="font-heading text-base font-black text-[var(--theme-text-main)] mt-0.5">{currentProgram.coach}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase">Energy Burn</div>
                    <div className="font-heading text-base font-black text-[var(--theme-accent)] mt-0.5">{currentProgram.calories}</div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2.5 text-xs text-[var(--theme-text-muted)] font-mono">
                    <CheckCircle className="w-4 h-4 text-[var(--theme-accent)]" />
                    <span>Custom progression scaled to your exact strength level</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[var(--theme-text-muted)] font-mono">
                    <CheckCircle className="w-4 h-4 text-[var(--theme-accent)]" />
                    <span>Complimentary towel service & sauna access included</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <a
              href="#pricing"
              className="w-full py-4 rounded-xl bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg athletic-btn cursor-pointer"
            >
              <span>BOOK THIS SESSION</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
