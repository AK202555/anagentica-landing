'use client';

import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

const companies = ["Stada", "Sanofi", "Dr. Reddy's", "AB InBev", "Nestlé", "Rolf Group", "BAT"];

export default function AboutFounder() {
  const { locale, t } = useLocale();
  const s = translations.about;

  return (
    <section id="about" className="bg-white text-[#1d1d1f]" style={{ padding: '100px 24px' }}>
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left column */}
          <FadeInUp direction="left" className="flex-1 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[1px] text-[#0071e3] mb-3">
              {t({ ru: 'Основатель', en: 'Founder' })}
            </p>
            <h2
              className="font-bold leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
            >
              {t(s.title)}
            </h2>

            <div className="space-y-4 text-[rgba(0,0,0,0.65)] mb-8 text-[17px] leading-relaxed">
              {s.bio[locale].map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {s.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#f5f5f7]">
                  <div className="text-xl font-bold text-[#0071e3]">
                    {typeof stat.value === 'string' ? stat.value : t(stat.value)}
                  </div>
                  <div className="text-xs text-[rgba(0,0,0,0.45)] mt-1">{t(stat.label)}</div>
                </div>
              ))}
            </div>

            {/* Companies */}
            <p className="text-xs font-semibold uppercase tracking-[1px] text-[rgba(0,0,0,0.4)] mb-3">
              {t(s.experienceLabel)}
            </p>
            <div className="flex flex-wrap gap-2">
              {companies.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 text-sm rounded-lg border border-black/[0.08] bg-[#f5f5f7] text-[rgba(0,0,0,0.65)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </FadeInUp>

          {/* Right column */}
          <FadeInUp direction="right" className="md:w-[320px] shrink-0">
            {/* Photo */}
            <div className="mb-8">
              <picture>
                <source srcSet="/photo-anas.webp" type="image/webp" />
                <img
                  src="/photo-anas.jpg"
                  alt="Анас Хазиев"
                  loading="lazy"
                  width={320}
                  height={320}
                  className="w-full rounded-2xl object-cover"
                  onError={e => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = 'none';
                    const placeholder = el.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div
                  className="w-full aspect-square rounded-2xl hidden items-center justify-center text-white/40 text-sm"
                  style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0071e3 100%)', display: 'none' }}
                >
                  Анас Хазиев
                </div>
              </picture>
            </div>

            {/* Achievements */}
            <p className="text-xs font-semibold uppercase tracking-[1px] text-[rgba(0,0,0,0.4)] mb-4">
              {t(s.achievementsLabel)}
            </p>
            <ul className="space-y-3">
              {s.achievements[locale].map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[rgba(0,0,0,0.65)] leading-relaxed">
                  <span className="text-[#0071e3] mt-0.5 shrink-0">•</span>
                  {a}
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
