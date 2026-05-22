'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function Hero() {
  const { t } = useLocale();
  const s = translations.hero;
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (glow1Ref.current) glow1Ref.current.style.transform = `translate(-50%, calc(-50% + ${y * 0.3}px))`;
      if (glow2Ref.current) glow2Ref.current.style.transform = `translate(-50%, calc(-50% + ${y * 0.15}px))`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const stats = [
    ...s.stats,
    { value: { ru: 'NPS 90%+', en: 'NPS 90%+' }, label: { ru: 'после внедрения AI', en: 'after AI rollout' } },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
      style={{ padding: '100px 24px 80px', transform: 'translateZ(0)', willChange: 'transform' }}
    >
      {/* Parallax glow 1 */}
      <div
        ref={glow1Ref}
        className="pointer-events-none absolute"
        style={{
          top: '30%', left: '50%',
          width: 800, height: 500,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(0,113,227,0.15) 0%, transparent 65%)',
          animation: 'pulse 6s ease-in-out infinite',
        }}
      />
      {/* Parallax glow 2 */}
      <div
        ref={glow2Ref}
        className="pointer-events-none absolute"
        style={{
          top: '60%', left: '30%',
          width: 300, height: 300,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(0,113,227,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[720px] mx-auto text-center">
        {/* Badge */}
        <div className="fade-up delay-1 inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-pill border border-[rgba(0,113,227,0.3)] bg-[rgba(0,113,227,0.12)] text-[#2997ff] text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff] inline-block" />
          {t({ ru: 'AI-агентство · Реальные результаты', en: 'AI Agency · Real Results' })}
        </div>

        {/* H1 */}
        <h1
          className="fade-up delay-2 font-bold leading-[1.05] tracking-[-0.04em] mb-6 text-white"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
        >
          {t(s.title1)}<br />
          <span className="text-[#0071e3]">{t(s.title2)}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="fade-up delay-3 text-white/65 mb-10 mx-auto"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', maxWidth: 560, lineHeight: 1.6 }}
        >
          {t(s.subtitle)}
        </p>

        {/* CTAs */}
        <div className="fade-up delay-4 flex flex-col sm:flex-row gap-4 justify-center mb-[72px]">
          <a
            href="#cta"
            className="inline-flex justify-center px-7 py-[13px] text-base font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] hover:-translate-y-px rounded-pill transition-all duration-200"
          >
            {t(s.ctaPrimary)}
          </a>
          <a
            href="#cases"
            className="inline-flex justify-center px-7 py-[13px] text-base font-medium text-[#2997ff] border border-[rgba(41,151,255,0.4)] hover:border-[rgba(41,151,255,0.8)] hover:bg-[rgba(41,151,255,0.05)] rounded-pill transition-all duration-200"
          >
            {t(s.ctaSecondary)} ›
          </a>
        </div>

        {/* Stats bar */}
        <div className="fade-up delay-4 grid grid-cols-2 sm:grid-cols-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-[22px] px-6 text-center ${i < stats.length - 1 ? 'border-b sm:border-b-0 border-r border-white/[0.08] last:border-r-0' : ''}`}
            >
              <div className="text-xl font-bold text-white">{t(stat.value)}</div>
              <div className="text-xs text-white/50 mt-1">{t(stat.label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
