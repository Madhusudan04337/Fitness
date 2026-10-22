import React from 'react';

const features = [
  { id: '01', title: 'COMMUNITY EVENTS', description: 'Join weekly group sessions and connect with fellow members in our vibrant community.' },
  { id: '02', title: 'VIRTUAL WORKSHOPS', description: 'Expert-led online workshops covering everything from mental health to recovery techniques.' },
  { id: '03', title: 'MEMBERSHIP PERKS', description: 'Enjoy exclusive discounts on partner products, gear, and wellness services.' },
];

export default function ServicesShowcase() {
  return (
    <section id="showcase" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side - Hero Content */}
        <div>
          <div className="text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-3 uppercase font-semibold">
            COMMUNITY & LIFESTYLE
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-[1.05]">
            A WHOLE <br />
            <span className="text-[var(--theme-accent)]">LIFE</span> APPROACH.
          </h2>

          <p className="text-[var(--theme-text-muted)] mb-8 max-w-md text-base md:text-lg leading-relaxed font-light">
            Great training is just the beginning. Our recovery facilities, expert guidance, and supportive community keep you inspired every day.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#coaches"
              className="font-heading px-7 py-3.5 bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-black rounded-lg text-xs tracking-wider uppercase hover:brightness-110 athletic-btn shadow-md cursor-pointer"
            >
              MEET OUR COACHES
            </a>
            <a
              href="#testimonials"
              className="font-heading px-7 py-3.5 border border-[var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-text-main)] font-bold rounded-lg text-xs tracking-wider uppercase hover:border-[var(--theme-accent)] athletic-btn transition-colors cursor-pointer"
            >
              MEMBER STORIES
            </a>
          </div>
        </div>

        {/* Right Side - List Cards */}
        <div className="flex flex-col gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group p-6 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:border-[var(--theme-accent)] transition-all duration-200 cursor-default shadow-sm athletic-card"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading text-2xl font-black text-[var(--theme-text-main)] group-hover:text-[var(--theme-accent)] transition-colors tracking-tight">
                  {feature.title}
                </h3>
                <span className="font-mono text-4xl font-black text-[var(--theme-text-muted)] opacity-30 group-hover:opacity-100 group-hover:text-[var(--theme-accent)] transition-all">
                  {feature.id}
                </span>
              </div>
              <p className="text-[var(--theme-text-muted)] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
