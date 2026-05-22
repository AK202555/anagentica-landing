'use client';

import { Building2, Stethoscope, Rocket } from 'lucide-react';
import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

const icons = [Building2, Stethoscope, Rocket];

export default function TargetAudience() {
  const { t } = useLocale();
  const s = translations.audience;

  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f]" style={{ padding: '100px 24px' }}>
      <div className="max-w-[1000px] mx-auto">
        <FadeInUp>
          <p className="text-center text-xs font-semibold uppercase tracking-[1px] text-[#00c8ff] mb-3">
            {t({ ru: 'Клиенты', en: 'Clients' })}
          </p>
          <h2
            className="text-center font-bold leading-[1.1] mb-12"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            {t(s.title)}
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {s.items.map((a, i) => {
            const Icon = icons[i];
            return (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="h-full p-7 rounded-2xl border border-black/[0.06] bg-white text-center transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-card">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(0,200,255,0.08)' }}
                  >
                    <Icon size={26} color="#00c8ff" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{t(a.title)}</h3>
                  <p className="text-sm text-[rgba(0,0,0,0.55)] leading-relaxed">{t(a.desc)}</p>
                </div>
              </FadeInUp>
            );
          })}
        </div>

        <FadeInUp delay={0.3}>
          <p className="text-center mt-10 text-[rgba(0,0,0,0.5)] max-w-xl mx-auto text-[15px]">
            {t(s.footer)}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
