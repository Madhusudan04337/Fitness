import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';

const services = [
  {
    title: 'PERSONAL TRAINING',
    description: 'One-on-one coaching customized for your body, current fitness level, and personal goals.',
    id: '01',
    image: '/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg',
  },
  {
    title: 'NUTRITION GUIDANCE',
    description: 'Sustainable nutrition planning tailored to your lifestyle. No crash diets, just balanced daily habits.',
    id: '02',
    image: '/assets/aistudio/side-view-man-doing-burpees_bcdc0943.jpg',
  },
  {
    title: 'STRENGTH & CONDITIONING',
    description: 'Progressive strength training to build functional muscle, increase stamina, and prevent injuries.',
    id: '03',
    image: '/assets/aistudio/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_7e7045cb.jpg',
  },
  {
    title: 'YOGA & MOBILITY',
    description: 'Improve flexibility, relieve joint stiffness, and enhance posture through guided mobility work.',
    id: '04',
    image: '/assets/aistudio/back-view-woman-doing-yoga-outdoors_fa4801ee.jpg',
  },
  {
    title: 'PROGRESS TRACKING',
    description: 'Clear monthly check-ins covering body composition, strength milestones, and workout consistency.',
    id: '05',
    image: '/assets/aistudio/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club_a3ab2b9a.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left - Sticky Hero Context */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-3 uppercase font-semibold"
          >
            WHAT WE OFFER
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-[1.05]"
          >
            <span className="text-[var(--theme-accent)]">NOT JUST WORKOUTS.</span>
            <br />
            A WHOLE APPROACH.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--theme-text-muted)] text-base md:text-lg mb-8 leading-relaxed font-light"
          >
            From personal training to nutrition and recovery — we cover everything you need to look, move, and feel your absolute best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#pricing"
              className="font-heading inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-black text-xs tracking-wider uppercase hover:brightness-110 transition-all shadow-md cursor-pointer"
            >
              EXPLORE PRICING
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-heading inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-text-main)] font-bold text-xs tracking-wider uppercase hover:border-[var(--theme-accent)] transition-colors cursor-pointer"
            >
              TOUR FACILITY
              <Play className="w-3 h-3 fill-current text-[var(--theme-accent)]" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="p-4 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-text-muted)] text-xs flex items-center gap-2 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
            <span>Comprehensive coaching, nutrition, and recovery under one roof.</span>
          </motion.div>
        </div>

        {/* Right - Service Rows animated one-by-one */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                x: 8,
              }}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:border-[var(--theme-accent)] transition-all shadow-sm gap-6 cursor-default"
            >
              <div className="flex items-center gap-5 flex-1">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[var(--theme-border)]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-black text-[var(--theme-text-main)] group-hover:text-[var(--theme-accent)] transition-colors mb-1.5 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[var(--theme-text-muted)] text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
              <div className="font-mono text-2xl font-black text-[var(--theme-text-muted)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--theme-accent)] transition-all self-end sm:self-center">
                {service.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
