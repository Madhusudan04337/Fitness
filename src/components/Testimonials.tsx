import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'DEEPA KHAN',
    role: 'Product Architect',
    date: 'May 29, 2024',
    rating: '5.0',
    quote: 'When I joined, I was nervous about barbell mechanics. But the trainers never made me feel behind. They calibrated my squat and gave me the space to progress injury-free.',
    tags: ['Personal Training', 'Mobility'],
  },
  {
    name: 'MARCUS VANCE',
    role: 'Endurance Triathlete',
    date: 'August 14, 2024',
    rating: '5.0',
    quote: 'Hyperfit completely redefined my power-to-weight ratio. The coaches don’t throw generic templates at you — they test your anaerobic ceiling and prescribe exact load progressions.',
    tags: ['Strength & Conditioning', 'Cardio Lab'],
  },
  {
    name: 'PRIYA SHARMA',
    role: 'Venture Partner & Lifter',
    date: 'November 03, 2024',
    rating: '5.0',
    quote: 'The Indiranagar hub is an architectural masterpiece. Olympic platforms, zero crowding, clean air filtration, and coaches with Olympic lifting backgrounds. Unrivaled standard.',
    tags: ['Olympic Platforms', 'Recovery'],
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 lg:py-16 px-6 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-neutral-500 text-xs font-mono tracking-[0.25em] mb-2 uppercase">MEMBER VOICES // TESTIMONIALS</div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black mb-3 tracking-tight">
            BECAUSE STAYING FIT<br />
            <span className="text-[#FF6B00]">SHOULD FEEL GOOD.</span>
          </h2>
          <p className="text-neutral-400 text-base font-light">Just a high-standard community where you can grow — your way.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -8, borderColor: 'rgba(255,107,0,0.5)', backgroundColor: 'rgba(23,23,23,0.85)' }}
              transition={{ duration: 0.25 }}
              className="relative p-7 rounded-xl border border-neutral-800/80 bg-neutral-900/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#FF6B00] text-sm tracking-wider font-mono">
                    ★★★★★ <span className="ml-2 text-neutral-400 text-xs">{item.rating}</span>
                  </div>
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.4 }}
                  >
                    <Quote className="w-5 h-5 text-[#FF6B00]/60" />
                  </motion.div>
                </div>
                <p className="font-editorial italic text-lg md:text-xl text-neutral-200 leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-900">
                <div className="font-heading font-black text-white text-base tracking-wide">{item.name}</div>
                <div className="text-xs text-neutral-500 font-mono mt-0.5">{item.role} • {item.date}</div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
