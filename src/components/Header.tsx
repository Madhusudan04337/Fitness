import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Menu, X, ArrowUpRight, Compass, Dumbbell, ShieldCheck, HelpCircle, Activity, MessageSquare } from 'lucide-react';
import ThemeSelector from './ThemeSelector';
import { fastSmoothScrollTo } from '../utils/smoothScroll';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const hoverEffect = { hover: { scale: 1.03 }, tap: { scale: 0.97 } };

  const navLinks = [
    { label: 'ABOUT', href: '#about', number: '01' },
    { label: 'SERVICES', href: '#services', number: '02' },
    { label: 'PRICING', href: '#pricing', number: '03' },
    { label: 'TESTIMONIALS', href: '#testimonials', number: '04' },
    { label: 'FAQ', href: '#faq', number: '05' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    fastSmoothScrollTo(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-10 py-3.5 backdrop-blur-md bg-[var(--theme-surface)] border-b border-[var(--theme-border)] transition-colors duration-300">
        {/* Brand Wordmark */}
        <motion.a
          href="/"
          className="font-heading text-lg sm:text-xl font-black tracking-tight text-[var(--theme-text-main)] whitespace-nowrap shrink-0 flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <span className="w-2 h-2 rounded-xs bg-[var(--theme-accent)]" />
          HYPER<span className="text-[var(--theme-accent)]">FIT</span>
        </motion.a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-7 xl:gap-9 font-mono text-[11px] font-bold text-[var(--theme-text-muted)] tracking-[0.2em] uppercase">
          {navLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="hover:text-[var(--theme-text-main)] transition-colors whitespace-nowrap shrink-0"
              {...hoverEffect}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Right Controls: Theme Selector, Desktop CTA, & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <ThemeSelector />

          <motion.a
            href="#pricing"
            className="hidden sm:inline-flex font-mono px-4 sm:px-5 py-2 text-xs font-bold bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] rounded-lg hover:brightness-105 transition-all whitespace-nowrap shrink-0 tracking-wider cursor-pointer shadow-xs"
            {...hoverEffect}
          >
            JOIN CLUB
          </motion.a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--theme-surface-solid)] border border-[var(--theme-border)] text-[var(--theme-text-main)] hover:border-[var(--theme-accent)] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Ambient Top Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--theme-accent)] origin-left pointer-events-none"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      {/* Mobile Navigation Drawer / Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[57px] bottom-0 z-40 lg:hidden bg-[var(--theme-bg)]/95 backdrop-blur-xl border-b border-[var(--theme-border)] overflow-y-auto px-6 py-6 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-2">
              <div className="text-[10px] font-mono tracking-widest text-[var(--theme-text-muted)] uppercase mb-2">
                Navigation Landmark Matrix
              </div>

              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--theme-surface)] border border-[var(--theme-border)] hover:border-[var(--theme-accent)] text-left transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[var(--theme-accent)]">
                      {item.number}
                    </span>
                    <span className="font-heading font-black text-lg tracking-tight text-[var(--theme-text-main)] group-hover:text-[var(--theme-accent)] transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--theme-text-muted)] group-hover:text-[var(--theme-accent)] transition-colors" />
                </button>
              ))}

              {/* Extra Utility Links */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => handleNavClick('#feedback')}
                  className="p-3 rounded-xl bg-[var(--theme-surface)] border border-[var(--theme-border)] text-left hover:border-[var(--theme-accent)] transition-colors text-xs font-mono text-[var(--theme-text-muted)] hover:text-[var(--theme-text-main)] flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span>Member Feedback</span>
                </button>
                <button
                  onClick={() => handleNavClick('#calculator')}
                  className="p-3 rounded-xl bg-[var(--theme-surface)] border border-[var(--theme-border)] text-left hover:border-[var(--theme-accent)] transition-colors text-xs font-mono text-[var(--theme-text-muted)] hover:text-[var(--theme-text-main)] flex items-center gap-2 cursor-pointer"
                >
                  <Activity className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span>BMI Calculator</span>
                </button>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="p-3 rounded-xl bg-[var(--theme-surface)] border border-[var(--theme-border)] text-left hover:border-[var(--theme-accent)] transition-colors text-xs font-mono text-[var(--theme-text-muted)] hover:text-[var(--theme-text-main)] flex items-center gap-2 cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span>Locations & Hours</span>
                </button>
              </div>
            </div>

            {/* Bottom Actions & Status */}
            <div className="pt-6 border-t border-[var(--theme-border)] mt-6 space-y-4">
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md cursor-pointer hover:brightness-105"
              >
                JOIN CLUB NOW
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--theme-text-muted)] px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Indiranagar Hub Open</span>
                </span>
                <span>06:00 – 23:00</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
