import React from 'react';
import { motion } from 'motion/react';
import { Award, Dumbbell, Users } from 'lucide-react';

export default function CompanyTrustAndAbout() {
  const brands = ['INVERT', 'STARI', 'CIRCLE', 'AMARA', 'NEXUS'];
  const features = [
    { icon: Award, title: '10+', subtitle: 'YEARS OF EXPERIENCE' },
    { icon: Dumbbell, title: '5000+', subtitle: 'TRAINING SESSIONS' },
    { icon: Users, title: '140+', subtitle: 'OFFLINE & ONLINE EVENTS' },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      {/* 1. Trusted Brands Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <div className="text-[var(--theme-text-muted)] text-xs tracking-widest mb-6 uppercase font-mono opacity-80">
          TRUSTED BY OVER 2,000+ DEDICATED MEMBERS
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 text-[var(--theme-text-muted)] font-bold text-sm md:text-base">
          {brands.map((brand, i) => (
            <span
              key={brand}
              className="flex items-center gap-2 hover:text-[var(--theme-text-main)] transition-colors cursor-default"
            >
              {i === 2 && <span className="w-2 h-2 rounded-full bg-[var(--theme-accent)]"></span>}
              {brand}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 2. Philosophy & About Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <div className="text-[var(--theme-accent)] font-mono text-xs md:text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
          Not Just a Gym.
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-tight text-[var(--theme-text-main)]">
          A PLACE TO BELONG.
        </h2>

        <p className="text-[var(--theme-text-muted)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          We're more than just a gym. We're a space built for every kind of journey — whether you're just starting or looking to push your limits. Here, it's not about perfection. It's about progress, your way.
        </p>
      </motion.div>

      {/* 3. Features Pill Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto border border-[var(--theme-border)] rounded-2xl md:rounded-full p-6 flex flex-col md:flex-row items-center justify-between mb-16 bg-[var(--theme-surface)] backdrop-blur-md gap-6 md:gap-0 shadow-sm"
      >
        {features.map((feature, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-4 px-4 w-full md:w-auto">
              <feature.icon className="w-8 h-8 text-[var(--theme-accent)] shrink-0" />
              <div className="text-left">
                <div className="font-heading text-2xl font-black text-[var(--theme-text-main)]">{feature.title}</div>
                <div className="text-[var(--theme-text-muted)] font-mono text-xs tracking-wider">{feature.subtitle}</div>
              </div>
            </div>
            {i < features.length - 1 && <div className="hidden md:block h-12 w-px bg-[var(--theme-border)]"></div>}
          </React.Fragment>
        ))}
      </motion.div>

      {/* 4. Editorial Showcase Cards Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10">
        {/* Left Column - Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-2xl h-[320px] sm:h-[400px] md:h-[500px] border border-[var(--theme-border)] bg-[var(--theme-surface)] shadow-lg hover:border-[var(--theme-accent)] athletic-card"
        >
          <img
            src="/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg"
            alt="Indiranagar Performance Hub"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-8">
            <div className="font-mono text-[10px] sm:text-xs text-[var(--theme-accent)] uppercase tracking-wider mb-1">MAIN FACILITY • BANGALORE</div>
            <div className="font-heading text-white font-black text-xl sm:text-2xl lg:text-3xl tracking-tight mb-1">
              INDIRANAGAR PERFORMANCE HUB
            </div>
            <div className="text-neutral-300 text-xs sm:text-sm">
              Full-range free weights, squat racks & lifting platforms
            </div>
          </div>
        </motion.div>

        {/* Right Column - Stacked Cards */}
        <div className="flex flex-col gap-5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl h-[190px] sm:h-[238px] border border-[var(--theme-border)] bg-[var(--theme-surface)] shadow-lg hover:border-[var(--theme-accent)] athletic-card"
          >
            <img
              src="/assets/aistudio/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_7e7045cb.jpg"
              alt="Mindful Movement"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <div className="font-heading text-[var(--theme-accent)] font-black text-lg sm:text-xl tracking-wider mb-0.5">
                MINDFUL MOVEMENT
              </div>
              <div className="text-xs text-neutral-200">
                Guided mobility, flexibility, and core stability
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl h-[190px] sm:h-[238px] border border-[var(--theme-border)] bg-[var(--theme-surface)] shadow-lg hover:border-[var(--theme-accent)] athletic-card"
          >
            <img
              src="/assets/aistudio/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club_a3ab2b9a.jpg"
              alt="Restoration & Recovery"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <div className="font-heading text-[var(--theme-accent)] font-black text-lg sm:text-xl tracking-wider mb-0.5">
                RESTORATION & RECOVERY
              </div>
              <div className="text-xs text-neutral-200">
                Cold plunge tubs, infrared sauna & recovery lounge
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
