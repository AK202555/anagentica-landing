'use client';

import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

const stepDescs = {
  ru: [
    'Разбираемся в задаче, определяем потенциал автоматизации',
    'Анализируем процессы, готовим дорожную карту и расчёт ROI',
    'Строим решение под ваши инструменты и процессы',
    'Запускаем систему, обучаем команду управлять самостоятельно',
    'Помогаем масштабировать и улучшать результаты',
  ],
  en: [
    'We analyze the task and identify automation potential',
    'We analyze processes, prepare a roadmap and ROI calculation',
    'We build a solution tailored to your tools and processes',
    'We launch the system and train your team to manage it independently',
    'We help scale and improve results',
  ],
};

const stepTimes = ['30 мин / 30 min', '1–2 нед / 1–2 wk', '3–8 нед / 3–8 wk', '1 нед / 1 wk', 'ongoing'];

export default function Methodology() {
  const { locale, t } = useLocale();
  const s = translations.methodology;

  return (
    <section className="bg-black text-white" style={{ padding: '100px 24px' }}>
      <div className="max-w-[860px] mx-auto">
        <FadeInUp>
          <p className="text-center text-xs font-semibold uppercase tracking-[1px] text-[#2997ff] mb-3">
            {t({ ru: 'Как работаем', en: 'How we work' })}
          </p>
          <h2
            className="text-center font-bold leading-[1.1] mb-16"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            {t(s.title)}
          </h2>
        </FadeInUp>

        <div className="space-y-0">
          {s.steps.map((step, i) => {
            const isFirst = i === 0;
            const isLast = i === s.steps.length - 1;
            const time = t(step.time) || stepTimes[i].split(' / ')[locale === 'ru' ? 0 : 1];

            return (
              <FadeInUp key={i} delay={i * 0.08}>
                <div className="flex gap-8 relative" style={{ paddingBottom: isLast ? 0 : 40 }}>
                  {/* Left: circle + line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-base font-bold shrink-0"
                      style={isFirst ? {
                        background: '#0071e3',
                        color: '#fff',
                      } : {
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.7)',
                      }}
                    >
                      {step.num}
                    </div>
                    {!isLast && (
                      <div
                        className="flex-1 w-px mt-3"
                        style={{ background: 'rgba(255,255,255,0.07)', minHeight: 24 }}
                      />
                    )}
                  </div>

                  {/* Right: content */}
                  <div className="pb-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{t(step.title)}</h3>
                      {time && (
                        <span
                          className="text-xs font-medium px-3 py-1 rounded-pill"
                          style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}
                        >
                          {time}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {stepDescs[locale][i]}
                    </p>
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
