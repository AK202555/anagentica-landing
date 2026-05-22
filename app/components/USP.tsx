'use client';

import { LineChart, Unlock, Scale, RotateCw } from 'lucide-react';
import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

const icons = [LineChart, Unlock, Scale, RotateCw];

export default function USP() {
  const { t } = useLocale();
  const s = translations.usp;

  return (
    <section className="bg-black text-white" style={{ padding: '100px 24px' }}>
      <div className="max-w-[1000px] mx-auto">
        <FadeInUp>
          <p className="text-center text-xs font-semibold uppercase tracking-[1px] text-[#2997ff] mb-3">
            {t({ ru: 'Почему мы', en: 'Why us' })}
          </p>
          <h2
            className="text-center font-bold leading-[1.1] mb-16"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            {t(s.title)}
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {s.items.map((u, i) => {
            const Icon = icons[i];
            return (
              <FadeInUp key={i} delay={i * 0.1}>
                <div
                  className="h-full p-8 rounded-2xl border flex gap-5 items-start transition-all duration-[250ms] cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.12)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  }}
                >
                  {/* Icon chip */}
                  <div
                    className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shrink-0"
                    style={{
                      background: 'rgba(0,113,227,0.1)',
                      border: '1px solid rgba(0,113,227,0.2)',
                    }}
                  >
                    <Icon size={24} color="#2997ff" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 leading-snug">{t(u.title)}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{t(u.desc)}</p>
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
