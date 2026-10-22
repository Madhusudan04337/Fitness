import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme, THEME_OPTIONS, ThemeId } from '../context/ThemeContext';

interface ThemeSelectorProps {
  compact?: boolean;
}

export default function ThemeSelector({ compact = false }: ThemeSelectorProps) {
  const { theme, setTheme, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Website Visual Theme"
        title={`Current Theme: ${currentTheme.name}`}
        className={`flex items-center gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:border-[var(--theme-accent)] transition-all cursor-pointer backdrop-blur-md shadow-sm ${
          compact
            ? 'px-2.5 py-1.5 text-xs'
            : 'px-3.5 py-1.5 text-xs'
        }`}
      >
        <span
          className="w-3 h-3 rounded-full shrink-0 shadow-xs border border-white/20"
          style={{ backgroundColor: currentTheme.colorSwatch }}
        />
        <span className="font-mono text-[10px] tracking-wider text-[var(--theme-text-main)] uppercase font-semibold hidden sm:inline">
          {compact ? currentTheme.name : `THEME: ${currentTheme.name}`}
        </span>
        <Palette className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to close */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute right-0 top-full mt-2 z-50 w-64 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-solid)] p-3 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-[var(--theme-border)]">
                <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[var(--theme-accent)] uppercase font-bold">
                  <Sparkles className="w-3 h-3" />
                  <span>CURATED THEMES</span>
                </div>
                <span className="text-[9px] font-mono text-[var(--theme-text-muted)]">
                  Instant switch
                </span>
              </div>

              <div className="space-y-1.5">
                {THEME_OPTIONS.map((opt) => {
                  const isSelected = opt.id === theme;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setTheme(opt.id);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--theme-accent-badge)] border border-[var(--theme-accent)]'
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-4 h-4 rounded-full shrink-0 shadow-md border border-white/30"
                          style={{ backgroundColor: opt.colorSwatch }}
                        />
                        <div>
                          <div
                            className={`text-xs font-heading font-bold tracking-tight ${
                              isSelected
                                ? 'text-[var(--theme-accent)]'
                                : 'text-[var(--theme-text-main)]'
                            }`}
                          >
                            {opt.name}
                          </div>
                          <div className="text-[10px] text-[var(--theme-text-muted)] font-mono">
                            {opt.tagline}
                          </div>
                        </div>
                      </div>

                      {isSelected && (
                        <Check className="w-4 h-4 text-[var(--theme-accent)] stroke-[2.5]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
