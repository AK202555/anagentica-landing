'use client';

import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function Approach() {
  const { t } = useLocale();
  const s = translations.approach;

  return (
    <section id="approach" className="bg-black text-white" style={{ padding: '100px 24px' }}>
      <div className="max-w-[1000px] mx-auto">
        <FadeInUp>
          <p className="text-center text-xs font-semibold uppercase tracking-[1px] text-[#2997ff] mb-3">
            {t({ ru: 'Подход', en: 'Approach' })}
          </p>
          <h2
            className="text-center font-bold leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            {t(s.title)}
          </h2>
          <p className="text-center text-white/55 mb-16 text-lg max-w-2xl mx-auto">
            {t(s.subtitle)}
          </p>
        </FadeInUp>

        {/* Desktop: 3 merged columns */}
        <div className="hidden md:flex gap-0.5">
          {s.steps.map((step, i) => {
            const isCenter = i === 1;
            const radiusClass = i === 0 ? 'rounded-l-2xl' : i === s.steps.length - 1 ? 'rounded-r-2xl' : '';
            return (
              <FadeInUp key={step.num} delay={i * 0.1} className="flex-1">
                <div
                  className={`h-full p-8 ${radiusClass} border`}
                  style={{
                    background: isCenter ? 'rgba(0,113,227,0.1)' : 'rgba(255,255,255,0.03)',
                    borderColor: isCenter ? 'rgba(0,113,227,0.3)' : 'rgba(255,255,255,0.07)',
                  }}
                >
                  <div
                    className="text-[48px] font-bold leading-none mb-6"
                    style={{ color: isCenter ? 'rgba(0,113,227,0.5)' : 'rgba(255,255,255,0.08)' }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 leading-snug">{t(step.title)}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{t(step.desc)}</p>
                </div>
              </FadeInUp>
            );
          })}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-4">
          {s.steps.map((step, i) => {
            const isCenter = i === 1;
            return (
              <FadeInUp key={step.num} delay={i * 0.1}>
                <div
                  className="p-7 rounded-2xl border"
                  style={{
                    background: isCenter ? 'rgba(0,113,227,0.1)' : 'rgba(255,255,255,0.03)',
                    borderColor: isCenter ? 'rgba(0,113,227,0.3)' : 'rgba(255,255,255,0.07)',
                  }}
                >
                  <div
                    className="text-[40px] font-bold leading-none mb-4"
                    style={{ color: isCenter ? 'rgba(0,113,227,0.5)' : 'rgba(255,255,255,0.1)' }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t(step.title)}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{t(step.desc)}</p>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
