'use client';

import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function Cases() {
  const { t } = useLocale();
  const s = translations.cases;

  return (
    <section id="cases" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t(s.title)}
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-lg">
            {t(s.subtitle)}
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {s.items.map((c, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="h-full p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 flex flex-col">
                <span className="inline-block self-start text-xs font-medium px-3 py-1 rounded-full bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark mb-4">
                  {t(c.badge)}
                </span>
                <h3 className="text-lg font-semibold mb-3">{t(c.title)}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1">
                  {t(c.desc)}
                </p>
                <div className="flex gap-4">
                  {c.metrics.map((m) => (
                    <div key={m.value}>
                      <div className="text-xl font-bold text-accent dark:text-accent-dark">
                        {m.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t(m.label)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
