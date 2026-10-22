import React from 'react';
import { motion } from 'motion/react';
import ThemeSelector from './ThemeSelector';

export default function Header() {
  const hoverEffect = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4 sm:py-5 backdrop-blur-md bg-[var(--theme-surface)] border-b border-[var(--theme-border)] transition-colors duration-300">
      {/* Brand Logo */}
      <motion.a
        href="/"
        className="font-heading text-xl sm:text-2xl font-black tracking-tighter text-[var(--theme-text-main)] whitespace-nowrap shrink-0"
        whileHover={{ scale: 1.03 }}
      >
        HYPER<span className="text-[var(--theme-accent)] transition-colors">FIT</span>
      </motion.a>

      {/* Center Navigation Links */}
      <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8 xl:gap-10 font-mono text-[11px] font-bold text-[var(--theme-text-muted)] tracking-[0.2em] uppercase">
        {['ABOUT', 'SERVICES', 'PRICING', 'TESTIMONIALS', 'FAQ'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-[var(--theme-accent)] transition-colors whitespace-nowrap shrink-0"
            {...hoverEffect}
          >
            {item}
          </motion.a>
        ))}
      </nav>

      {/* Right Controls: Theme Selector & Action CTA */}
      <div className="flex items-center gap-3 shrink-0">
        <ThemeSelector />

        <motion.a
          href="#pricing"
          className="font-heading px-5 sm:px-7 py-2 sm:py-2.5 text-xs font-black bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] rounded-full hover:brightness-110 transition-all whitespace-nowrap shrink-0 tracking-wider shadow-[0_0_20px_var(--theme-accent-glow)] cursor-pointer"
          {...hoverEffect}
        >
          JOIN NOW
        </motion.a>
      </div>
    </header>
  );
}
