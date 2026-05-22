'use client';

import { Search, Settings, Bot, BookOpen, ArrowRight } from 'lucide-react';
import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

const icons = [Search, Settings, Bot, BookOpen];
const tags = [
  { ru: 'Стратегия', en: 'Strategy' },
  { ru: 'Автоматизация', en: 'Automation' },
  { ru: 'Агенты ⭐', en: 'Agents ⭐' },
  { ru: 'Обучение', en: 'Training' },
];

export default function Services() {
  const { locale, t } = useLocale();
  const s = translations.services;

  return (
    <section id="services" className="bg-[#f5f5f7] text-[#1d1d1f]" style={{ padding: '100px 24px' }}>
      <div className="max-w-[1000px] mx-auto">
        <FadeInUp>
          <p className="text-center text-xs font-semibold uppercase tracking-[1px] text-[#00c8ff] mb-3">
            {t({ ru: 'Услуги', en: 'Services' })}
          </p>
          <h2
            className="text-center font-bold leading-[1.1] mb-16"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            {t(s.title)}
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {s.items.map((svc, i) => {
            const Icon = icons[i];
            const tag = tags[i];
            const isHighlighted = i === 2;

            return (
              <FadeInUp key={i} delay={i * 0.1}>
                <div
                  className="h-full p-7 rounded-2xl border flex flex-col relative overflow-hidden transition-all duration-[250ms] hover:-translate-y-1"
                  style={isHighlighted ? {
                    background: '#050b14',
                    borderColor: 'rgba(255,255,255,0.1)',
                  } : {
                    background: '#fff',
                    borderColor: 'rgba(0,0,0,0.07)',
                  }}
                >
                  {isHighlighted && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at top right, rgba(0,200,255,0.2) 0%, transparent 60%)' }}
                    />
                  )}

                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Tag + Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-pill"
                        style={{
                          background: isHighlighted ? 'rgba(0,200,255,0.2)' : 'rgba(0,200,255,0.08)',
                          color: isHighlighted ? '#00d4ff' : '#00c8ff',
                        }}
                      >
                        {t(tag)}
                      </span>
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        color={isHighlighted ? '#00d4ff' : '#00c8ff'}
                      />
                    </div>

                    <h3
                      className={`text-xl font-semibold mb-2 ${isHighlighted ? 'text-white' : 'text-[#1d1d1f]'}`}
                    >
                      {t(svc.title)}
                    </h3>
                    <p className={`text-sm mb-5 leading-relaxed ${isHighlighted ? 'text-white/60' : 'text-[rgba(0,0,0,0.55)]'}`}>
                      {t(svc.subtitle)}
                    </p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {svc.items[locale].map((item) => (
                        <li key={item} className={`flex items-start gap-2 text-sm ${isHighlighted ? 'text-white/70' : 'text-[rgba(0,0,0,0.65)]'}`}>
                          <span className={`mt-0.5 ${isHighlighted ? 'text-[#00d4ff]' : 'text-[#00c8ff]'}`}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="flex items-end justify-between pt-4 border-t" style={{ borderColor: isHighlighted ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.07)' }}>
                      <div>
                        <div className={`text-[18px] font-bold ${isHighlighted ? 'text-white' : 'text-[#1d1d1f]'}`}>
                          {t(svc.price).split('·')[0].trim()}
                        </div>
                        <div className={`text-xs mt-0.5 ${isHighlighted ? 'text-white/40' : 'text-[rgba(0,0,0,0.4)]'}`}>
                          {t(svc.price).split('·')[1]?.trim()}
                        </div>
                      </div>
                      <a
                        href="#cta"
                        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all ${isHighlighted ? 'text-[#00d4ff] hover:text-white' : 'text-[#00c8ff] hover:text-[#0066cc]'}`}
                      >
                        {t({ ru: 'Узнать подробнее', en: 'Learn more' })}
                        <ArrowRight size={14} />
                      </a>
                    </div>
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
