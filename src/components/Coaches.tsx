import React from 'react';
import { motion } from 'motion/react';

const coaches = [
  {
    name: 'ALEX RIVERA',
    role: 'HEAD OF STRENGTH',
    expertise: 'Olympic Weightlifting & Progressive Strength',
    credentials: 'CSCS • 12+ Yrs Coaching',
    image: '/assets/aistudio/handsome-man-is-engaged-gym_62bdbfe3.jpg',
  },
  {
    name: 'SARAH JENKINS',
    role: 'MOBILITY & RECOVERY LEAD',
    expertise: 'Joint Mobility, Yoga & Active Muscle Recovery',
    credentials: 'RYT-500 • Mobility Certified',
    image: '/assets/aistudio/fitness-girl-practising-yoga_a5ad19ea.jpg',
  },
  {
    name: 'MARCUS THORNE',
    role: 'CONDITIONING COACH',
    expertise: 'High-Intensity Conditioning & Muscle Building',
    credentials: 'EXOS Performance Certified',
    image: '/assets/aistudio/muscular-sportsman-building-biceps-with-dumbbell_23f81afc.jpg',
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-2 uppercase font-semibold">
              OUR COACHES
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              GUIDED BY EXPERTS,<br />
              <span className="text-[var(--theme-accent)]">DRIVEN BY YOU.</span>
            </h2>
          </div>
          <p className="text-[var(--theme-text-muted)] text-sm max-w-sm mt-4 md:mt-0 font-light">
            Certified personal trainers with over a decade of real-world coaching experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:border-[var(--theme-accent)] overflow-hidden shadow-sm cursor-default athletic-card"
            >
              <div className="relative w-full h-72 overflow-hidden bg-[var(--theme-surface-solid)]">
                <img
                  src={coach.image}
                  alt={coach.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)] via-[var(--theme-bg)]/20 to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[var(--theme-surface-solid)]/80 border border-[var(--theme-border)] backdrop-blur-sm text-[10px] font-mono text-[var(--theme-accent)] font-bold">
                  {coach.credentials}
                </div>
              </div>

              <div className="p-6 pt-3">
                <div className="text-[var(--theme-accent)] font-mono text-xs font-bold tracking-wider mb-1 uppercase">
                  {coach.role}
                </div>
                <h3 className="font-heading text-2xl font-black text-[var(--theme-text-main)] mb-2 tracking-tight">{coach.name}</h3>
                <p className="text-[var(--theme-text-muted)] text-sm leading-relaxed">{coach.expertise}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
