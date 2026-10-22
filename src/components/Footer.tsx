import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] py-16 px-6 border-t border-[var(--theme-border)] overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Col 1: Brand */}
        <div>
          <h3 className="font-heading text-[var(--theme-text-main)] font-black text-2xl mb-4 tracking-tight">
            HYPER<span className="text-[var(--theme-accent)]">FIT</span>
          </h3>
          <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed font-light">
            A modern fitness club dedicated to strength training, functional conditioning, and guided recovery. Built for those who value progress.
          </p>
        </div>

        {/* Col 2: Locations */}
        <div>
          <h4 className="font-heading text-[var(--theme-text-main)] font-black text-sm tracking-wider uppercase mb-4">LOCATIONS</h4>
          <div className="text-sm mb-4">
            <div className="font-mono font-bold text-[var(--theme-text-main)] text-xs">BANGALORE, INDIA</div>
            <div className="text-xs text-[var(--theme-text-muted)] mt-0.5">Level 4, Zenith Tower, Indiranagar</div>
          </div>
          <div className="text-sm">
            <div className="font-mono font-bold text-[var(--theme-text-main)] text-xs">DUBAI, UAE</div>
            <div className="text-xs text-[var(--theme-text-muted)] mt-0.5">Marina Gate II, Dubai Marina</div>
          </div>
        </div>

        {/* Col 3: Navigation */}
        <div>
          <h4 className="font-heading text-[var(--theme-text-main)] font-black text-sm tracking-wider uppercase mb-4">EXPLORE</h4>
          <ul className="text-sm space-y-2.5 font-mono text-xs">
            <li><a href="#about" className="hover:text-[var(--theme-accent)] transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-[var(--theme-accent)] transition-colors">Our Services</a></li>
            <li><a href="#pricing" className="hover:text-[var(--theme-accent)] transition-colors">Membership Plans</a></li>
            <li><a href="#coaches" className="hover:text-[var(--theme-accent)] transition-colors">Expert Coaches</a></li>
            <li><a href="#calculator" className="hover:text-[var(--theme-accent)] transition-colors">BMI Calculator</a></li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h4 className="font-heading text-[var(--theme-text-main)] font-black text-sm tracking-wider uppercase mb-4">NEWSLETTER</h4>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[var(--theme-bg)] border border-[var(--theme-border)] p-2.5 text-xs text-[var(--theme-text-main)] mb-2 rounded-xl font-sans focus:border-[var(--theme-accent)] outline-none"
          />
          <button className="font-mono bg-[var(--theme-accent)] hover:brightness-110 text-[var(--theme-accent-contrast)] text-xs font-black w-full py-2.5 rounded-xl uppercase tracking-wider transition-all cursor-pointer shadow-md">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-[var(--theme-border)] text-xs font-mono text-center text-[var(--theme-text-muted)] opacity-70">
        © 2025 HYPERFIT. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
