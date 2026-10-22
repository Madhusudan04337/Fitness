import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'DEEPA KHAN',
    role: 'Product Designer',
    date: 'May 2024',
    rating: '5.0',
    quote: 'When I started, I was nervous about lifting weights. But the coaches made me feel completely comfortable from day one, fixed my form, and helped me build confidence without any injuries.',
    tags: ['Personal Training', 'Mobility'],
  },
  {
    name: 'MARCUS VANCE',
    role: 'Software Engineer',
    date: 'August 2024',
    rating: '5.0',
    quote: 'Hyperfit changed how I look at training. The coaches take time to understand your pace, tailor your weekly workouts, and keep you accountable every step of the way.',
    tags: ['Strength Training', 'Conditioning'],
  },
  {
    name: 'PRIYA SHARMA',
    role: 'Marketing Director',
    date: 'November 2024',
    rating: '5.0',
    quote: 'The Indiranagar facility is exceptionally clean, well-equipped, and never overcrowded. The coaches are attentive and the recovery sauna makes all the difference after a hard workout.',
    tags: ['Free Weights', 'Recovery'],
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-3 uppercase font-semibold"
          >
            MEMBER REVIEWS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-5xl font-black mb-3 tracking-tight leading-tight"
          >
            BECAUSE STAYING FIT<br />
            <span className="text-[var(--theme-accent)]">SHOULD FEEL GOOD.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--theme-text-muted)] text-base font-light"
          >
            Just a high-standard community where you can grow — your way.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
              }}
              className="relative p-7 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:border-[var(--theme-accent)] transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[var(--theme-accent)] text-sm tracking-wider font-mono font-bold">
                    ★★★★★ <span className="ml-2 text-[var(--theme-text-muted)] text-xs">{item.rating}</span>
                  </div>
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.4 }}
                  >
                    <Quote className="w-5 h-5 text-[var(--theme-accent)] opacity-70" />
                  </motion.div>
                </div>
                <p className="font-editorial italic text-lg md:text-xl text-[var(--theme-text-main)] leading-relaxed mb-6 opacity-90">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--theme-border)]">
                <div className="font-heading font-black text-[var(--theme-text-main)] text-base tracking-wide">{item.name}</div>
                <div className="text-xs text-[var(--theme-text-muted)] font-mono mt-0.5">{item.role} • {item.date}</div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--theme-bg)] border border-[var(--theme-border)] text-[var(--theme-text-muted)]">
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
