import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeId = 'onyx-gold' | 'nordic-emerald' | 'crimson-coral' | 'alabaster-light';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  tagline: string;
  colorSwatch: string;
  isDark: boolean;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'onyx-gold',
    name: 'Onyx & Gold',
    tagline: 'Luxury Athletic Club',
    colorSwatch: '#E5A93C',
    isDark: true,
  },
  {
    id: 'nordic-emerald',
    name: 'Nordic Slate',
    tagline: 'Bio-Recovery & Mint',
    colorSwatch: '#10B981',
    isDark: true,
  },
  {
    id: 'crimson-coral',
    name: 'Crimson Peak',
    tagline: 'High-Energy Performance',
    colorSwatch: '#E11D48',
    isDark: true,
  },
  {
    id: 'alabaster-light',
    name: 'Studio Daylight',
    tagline: 'Clean Minimalist Light',
    colorSwatch: '#B45309',
    isDark: false,
  },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  currentTheme: ThemeOption;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hyperfit-theme') as ThemeId;
      if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
        return saved;
      }
    }
    return 'onyx-gold';
  });

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('hyperfit-theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      if (newTheme === 'alabaster-light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'alabaster-light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  const currentTheme = THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
