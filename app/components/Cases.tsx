'use client';

import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

const accentColors = ['#00c8ff', '#30d158', '#ff9f0a'];

export default function Cases() {
  const { t } = useLocale();
  const s = translations.cases;

  return (
    <section id="cases" className="bg-[#f5f5f7] text-[#1d1d1f]" style={{ padding: '100px 24px' }}>
      <div className="max-w-[1000px] mx-auto">
        <FadeInUp>
          <p className="text-center text-xs font-semibold uppercase tracking-[1px] text-[#00c8ff] mb-3">
            {t({ ru: 'Кейсы', en: 'Cases' })}
          </p>
          <h2
            className="text-center font-bold leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            {t(s.title)}
          </h2>
          <p className="text-center text-[rgba(0,0,0,0.55)] mb-12 text-lg">
            {t(s.subtitle)}
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {s.items.map((c, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="h-full rounded-[20px] border border-black/[0.07] bg-white overflow-hidden flex flex-col transition-all duration-[250ms] hover:-translate-y-[4px] hover:shadow-card-dk">
                {/* Top accent bar */}
                <div className="h-1" style={{ background: accentColors[i] }} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Badge */}
                  <span className="inline-block self-start text-xs font-medium px-3 py-1 rounded-pill bg-[rgba(0,0,0,0.06)] text-[rgba(0,0,0,0.5)] mb-4">
                    {t(c.badge)}
                  </span>

                  <h3 className="text-lg font-semibold mb-3 leading-snug">{t(c.title)}</h3>
                  <p className="text-sm text-[rgba(0,0,0,0.55)] leading-relaxed mb-6 flex-1">
                    {t(c.desc)}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-6 pt-4 border-t border-black/[0.07]">
                    {c.metrics.map((m) => (
                      <div key={m.value}>
                        <div className="text-2xl font-bold" style={{ color: accentColors[i] }}>
                          {m.value}
                        </div>
                        <div className="text-[11px] text-[rgba(0,0,0,0.45)] mt-0.5">
                          {t(m.label)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
