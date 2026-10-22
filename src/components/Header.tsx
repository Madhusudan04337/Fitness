import React from 'react';
import { motion } from 'motion/react';
import ThemeSelector from './ThemeSelector';

export default function Header() {
  const hoverEffect = { hover: { scale: 1.03 }, tap: { scale: 0.97 } };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4 backdrop-blur-md bg-[var(--theme-surface)] border-b border-[var(--theme-border)] transition-colors duration-300">
      {/* Brand Wordmark */}
      <motion.a
        href="/"
        className="font-heading text-lg sm:text-xl font-black tracking-tight text-[var(--theme-text-main)] whitespace-nowrap shrink-0 flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
      >
        <span className="w-2 h-2 rounded-xs bg-[var(--theme-accent)]" />
        HYPER<span className="text-[var(--theme-accent)]">FIT</span>
      </motion.a>

      {/* Center Navigation Links */}
      <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-7 xl:gap-9 font-mono text-[11px] font-bold text-[var(--theme-text-muted)] tracking-[0.2em] uppercase">
        {['ABOUT', 'SERVICES', 'PRICING', 'TESTIMONIALS', 'FAQ'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-[var(--theme-text-main)] transition-colors whitespace-nowrap shrink-0"
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
          className="font-mono px-4 sm:px-5 py-2 text-xs font-bold bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] rounded-lg hover:brightness-105 transition-all whitespace-nowrap shrink-0 tracking-wider cursor-pointer shadow-xs"
          {...hoverEffect}
        >
          JOIN CLUB
        </motion.a>
      </div>
    </header>
  );
}
