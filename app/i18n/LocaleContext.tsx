'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Locale } from './translations';

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <T>(value: Record<Locale, T> | T) => T;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: 'ru',
  setLocale: () => {},
  t: (value) => (typeof value === 'object' && value !== null && 'ru' in value ? (value as Record<Locale, unknown>).ru : value) as never,
});

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function setCookie(name: string, value: string, days: number = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

function detectLocale(): Locale {
  // 1. Check cookie
  const saved = getCookie('locale');
  if (saved === 'ru' || saved === 'en') return saved;

  // 2. Check browser language
  if (typeof navigator !== 'undefined') {
    const lang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || '';
    if (lang.startsWith('ru') || lang.startsWith('uk') || lang.startsWith('be') || lang.startsWith('kk')) {
      return 'ru';
    }
    return 'en';
  }

  return 'ru';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ru');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectLocale());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setCookie('locale', locale);
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const t = useCallback(<T,>(value: Record<Locale, T> | T): T => {
    if (typeof value === 'object' && value !== null && 'ru' in value && 'en' in value) {
      return (value as Record<Locale, T>)[locale];
    }
    return value as T;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
