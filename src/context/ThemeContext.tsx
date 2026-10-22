import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeId = 'atelier-clay' | 'nordic-slate' | 'chalk-editorial' | 'carbon-mono';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  tagline: string;
  colorSwatch: string;
  isDark: boolean;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'atelier-clay',
    name: 'Atelier Clay',
    tagline: 'Warm Graphite & Terracotta',
    colorSwatch: '#E06338',
    isDark: true,
  },
  {
    id: 'nordic-slate',
    name: 'Nordic Slate',
    tagline: 'Alpine Stone & Sage',
    colorSwatch: '#2D9377',
    isDark: true,
  },
  {
    id: 'chalk-editorial',
    name: 'Chalk Editorial',
    tagline: 'Swiss Minimalist Light',
    colorSwatch: '#D1392B',
    isDark: false,
  },
  {
    id: 'carbon-mono',
    name: 'Carbon Brutalist',
    tagline: 'Matte Black & Raw Silver',
    colorSwatch: '#E2E4E9',
    isDark: true,
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
    return 'atelier-clay';
  });

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('hyperfit-theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      if (newTheme === 'chalk-editorial') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'chalk-editorial') {
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
