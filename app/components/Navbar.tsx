'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lightBg, setLightBg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  const navLinks = [
    { label: t(translations.nav.services), href: '#services' },
    { label: t(translations.nav.approach), href: '#approach' },
    { label: t(translations.nav.cases), href: '#cases' },
    { label: t(translations.nav.about), href: '#about' },
  ];

  useEffect(() => {
    const getOpaqueBg = (el: Element): string => {
      let cur: Element | null = el;
      while (cur && cur !== document.documentElement) {
        const bg = getComputedStyle(cur).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
        cur = cur.parentElement;
      }
      return getComputedStyle(document.body).backgroundColor;
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const els = document.elementsFromPoint(window.innerWidth / 2, 26);
      const behind = els.find(el => !el.closest('nav'));
      if (behind) {
        const bg = getOpaqueBg(behind);
        setLightBg(bg === 'rgb(245, 245, 247)' || bg === 'rgb(255, 255, 255)');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/88 backdrop-blur-[20px] border-b border-white/[0.07]'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
      style={{ height: 52 }}
    >
      <div className="max-w-7xl mx-auto px-7 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-[22px] font-bold leading-none select-none">
          <span className="text-[#00c8ff] underline decoration-[3px] underline-offset-2">An</span>
          <span className={`transition-colors duration-300 ${lightBg ? 'text-[#1d1d1f]' : 'text-white'}`}>agentica</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] transition-colors duration-300 ${lightBg ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right block */}
        <div className="flex items-center gap-3.5">
          <button
            onClick={() => setLocale(locale === 'ru' ? 'en' : 'ru')}
            className={`text-[13px] font-medium transition-colors duration-300 uppercase tracking-wide ${lightBg ? 'text-black/60 hover:text-black' : 'text-white/70 hover:text-white'}`}
            aria-label="Switch language"
          >
            {locale === 'ru' ? 'EN' : 'RU'}
          </button>

          <a
            href="#cta"
            className="hidden md:inline-flex px-[18px] py-[7px] text-[13px] font-medium text-white bg-[#00c8ff] hover:bg-[#0077ed] rounded-pill transition-colors"
          >
            {t(translations.nav.cta)}
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition-colors duration-300 ${lightBg ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-[20px] border-t border-white/[0.07] px-7 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[15px] text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMobileOpen(false)}
            className="inline-flex px-5 py-2.5 text-sm font-medium text-white bg-[#00c8ff] rounded-pill"
          >
            {t(translations.nav.cta)}
          </a>
        </div>
      )}
    </nav>
  );
}
