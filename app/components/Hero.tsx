'use client';

import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function Hero() {
  const { t } = useLocale();
  const s = translations.hero;

  const stats = [
    ...s.stats,
    { value: { ru: 'NPS 90%+', en: 'NPS 90%+' }, label: { ru: 'после внедрения AI', en: 'after AI rollout' } },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: '#050b14',
        padding: '100px 24px 80px',
      }}
    >
      {/* Glass card */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto">
        <div
          className="text-center px-6 sm:px-12 py-14 sm:py-16"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(0,200,255,0.12)',
            borderRadius: 32,
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Badge */}
          <div className="fade-up delay-1 inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-pill border border-[rgba(0,200,255,0.3)] bg-[rgba(0,200,255,0.08)] text-[#00c8ff] text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c8ff] inline-block" />
            {t({ ru: 'AI-агентство · Реальные результаты', en: 'AI Agency · Real Results' })}
          </div>

          {/* H1 */}
          <h1
            className="fade-up delay-2 font-bold leading-[1.05] tracking-[-0.04em] mb-6 text-white"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
          >
            {t(s.title1)}<br />
            <span className="text-[#00c8ff]">{t(s.title2)}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="fade-up delay-3 text-white/60 mb-10 mx-auto"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', maxWidth: 540, lineHeight: 1.65 }}
          >
            {t(s.subtitle)}
          </p>

          {/* CTAs */}
          <div className="fade-up delay-4 flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#cta"
              className="inline-flex justify-center px-7 py-[13px] text-base font-semibold rounded-pill transition-all duration-200 hover:-translate-y-px"
              style={{ background: '#00c8ff', color: '#050b14' }}
            >
              {t(s.ctaPrimary)}
            </a>
            <a
              href="#cases"
              className="inline-flex justify-center px-7 py-[13px] text-base font-medium text-[#00c8ff] border border-[rgba(0,200,255,0.4)] hover:border-[rgba(0,200,255,0.8)] hover:bg-[rgba(0,200,255,0.05)] rounded-pill transition-all duration-200"
            >
              {t(s.ctaSecondary)} ›
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="fade-up delay-4 grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(0,200,255,0.1)', background: 'rgba(0,200,255,0.03)' }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`py-[20px] px-5 text-center ${i < stats.length - 1 ? 'border-b sm:border-b-0 border-r border-[rgba(0,200,255,0.08)] last:border-r-0' : ''}`}
              >
                <div className="text-xl font-bold text-white">{t(stat.value)}</div>
                <div className="text-xs text-white/45 mt-1">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
