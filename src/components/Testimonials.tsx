import React from 'react';
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
          <div className="text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-3 uppercase font-semibold">
            MEMBER REVIEWS
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black mb-3 tracking-tight leading-tight">
            BECAUSE STAYING FIT<br />
            <span className="text-[var(--theme-accent)]">SHOULD FEEL GOOD.</span>
          </h2>

          <p className="text-[var(--theme-text-muted)] text-base font-light">
            Just a high-standard community where you can grow — your way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="relative p-7 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:border-[var(--theme-accent)] flex flex-col justify-between shadow-sm cursor-default athletic-card"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[var(--theme-accent)] text-sm tracking-wider font-mono font-bold">
                    ★★★★★ <span className="ml-2 text-[var(--theme-text-muted)] text-xs">{item.rating}</span>
                  </div>
                  <Quote className="w-5 h-5 text-[var(--theme-accent)] opacity-70" />
                </div>
                <p className="font-quote text-base sm:text-lg text-[var(--theme-text-main)] leading-relaxed mb-6 opacity-95">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
