'use client';

import { Clock, TrendingDown, HelpCircle, RefreshCw, Users, Sparkles, ArrowRight } from 'lucide-react';
import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

const icons = [Clock, TrendingDown, HelpCircle, RefreshCw, Users];

export default function PainPoints() {
  const { t } = useLocale();
  const s = translations.pains;

  return (
    <section id="pains" className="bg-[#f5f5f7] text-[#1d1d1f]" style={{ padding: '100px 24px' }}>
      <div className="max-w-[1000px] mx-auto">
        <FadeInUp>
          <p className="text-center text-xs font-semibold uppercase tracking-[1px] text-[#0071e3] mb-3">
            {t({ ru: 'Боли', en: 'Pain points' })}
          </p>
          <h2
            className="text-center font-bold leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            {t(s.title)}
          </h2>
          <p className="text-center text-[rgba(0,0,0,0.55)] mb-12 text-lg max-w-xl mx-auto">
            {t(s.subtitle)}
          </p>
        </FadeInUp>

        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {s.items.map((pain, i) => {
            const Icon = icons[i];
            return (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="h-full p-7 rounded-2xl border border-black/[0.06] bg-white transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-card">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(0,113,227,0.08)' }}
                  >
                    <Icon size={22} color="#0071e3" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-[17px] font-semibold mb-2 leading-snug">{t(pain.title)}</h3>
                  <p className="text-sm text-[rgba(0,0,0,0.55)] leading-relaxed">{t(pain.desc)}</p>
                </div>
              </FadeInUp>
            );
          })}

          {/* CTA card */}
          <FadeInUp delay={s.items.length * 0.1}>
            <div className="h-full p-7 rounded-2xl bg-[#0071e3] text-white transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-card-dk flex flex-col">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <Sparkles size={22} color="white" strokeWidth={1.7} />
              </div>
              <h3 className="text-[17px] font-semibold mb-2 leading-snug">
                {t({ ru: 'Мы решаем именно это', en: 'We solve exactly this' })}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6 flex-1">
                {t(s.footer)}
              </p>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:gap-3 transition-all"
              >
                {t({ ru: 'Записаться на разбор', en: 'Book a free audit' })}
                <ArrowRight size={16} />
              </a>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
