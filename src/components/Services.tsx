import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';

const services = [
  {
    title: 'PERSONAL TRAINING',
    description: 'One-on-one coaching, fully focused on your goals, fitness level, and biomechanical progress.',
    id: '01',
    image: '/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg',
  },
  {
    title: 'NUTRITION GUIDANCE',
    description: 'Simple, practical food advice that works in real life. No extremes, just bio-available balance.',
    id: '02',
    image: '/assets/aistudio/side-view-man-doing-burpees_bcdc0943.jpg',
  },
  {
    title: 'STRENGTH & CONDITIONING',
    description: 'Structured periodization to build lean muscle mass, boost stamina, and stay bulletproof.',
    id: '03',
    image: '/assets/aistudio/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_7e7045cb.jpg',
  },
  {
    title: 'YOGA & MOBILITY',
    description: 'Find balance in your body and mind with calming, joint-mobility and active recovery sessions.',
    id: '04',
    image: '/assets/aistudio/back-view-woman-doing-yoga-outdoors_fa4801ee.jpg',
  },
  {
    title: 'PROGRESS TRACKING',
    description: 'We track what matters — load velocity, recovery metrics, and weekly body composition analytics.',
    id: '05',
    image: '/assets/aistudio/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club_a3ab2b9a.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 lg:py-16 px-6 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left - Sticky Hero Context */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="text-neutral-500 text-xs font-mono tracking-[0.25em] mb-3 uppercase">OUR SERVICES</div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-[1.05]">
            <span className="text-[#FF6B00]">NOT JUST WORKOUTS.</span>
            <br />
            A WHOLE APPROACH.
          </h2>
          <p className="text-neutral-400 text-base md:text-lg mb-8 leading-relaxed font-light">
            From personal training to nutrition and recovery — we cover what your body truly needs for sustained physical output.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#pricing"
              className="font-heading inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-black text-xs tracking-wider uppercase hover:bg-[#FF6B00] hover:text-white transition-colors"
            >
              EXPLORE PRICING
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-heading inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 bg-neutral-900/60 text-white font-bold text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors"
            >
              WATCH VIDEO
              <Play className="w-3 h-3 fill-current text-[#FF6B00]" />
            </button>
          </div>

          <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-900/40 text-neutral-400 font-mono text-xs">
            [ 01 - 05 SERVICES MATRIX // FULL SYSTEM INTEGRATION ]
          </div>
        </div>

        {/* Right - Service Rows */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ x: 8, borderColor: 'rgba(255,107,0,0.5)', backgroundColor: 'rgba(23,23,23,0.8)' }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-neutral-800/80 bg-neutral-900/50 transition-all shadow-md gap-6 cursor-default"
            >
              <div className="flex items-center gap-5 flex-1">
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-neutral-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-black text-white group-hover:text-[#FF6B00] transition-colors mb-1.5 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
              <div className="font-mono text-4xl lg:text-5xl font-black text-neutral-700 group-hover:text-white transition-colors shrink-0">
                {service.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
