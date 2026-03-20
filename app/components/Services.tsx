'use client';

import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function Services() {
  const { locale, t } = useLocale();
  const s = translations.services;

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t(s.title)}
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {s.items.map((svc, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="h-full p-6 md:p-8 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-accent/40 dark:hover:border-accent-dark/40 transition-colors flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{t(svc.title)}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-5">{t(svc.subtitle)}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {svc.items[locale].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-accent dark:text-accent-dark mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-medium text-accent dark:text-accent-dark">
                  {t(svc.price)}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
