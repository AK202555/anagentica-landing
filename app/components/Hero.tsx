'use client';

import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function Hero() {
  const { t } = useLocale();
  const s = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-dark/10 dark:from-accent-dark/10 dark:via-transparent dark:to-accent/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
        <div className="max-w-3xl hero-enter">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            {t(s.title1)}{' '}
            <span className="text-accent dark:text-accent-dark">{t(s.title2)}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
            {t(s.subtitle)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#cta"
              className="inline-flex justify-center px-8 py-4 text-base font-medium text-white bg-accent dark:bg-accent-dark rounded-xl hover:opacity-90 transition-opacity"
            >
              {t(s.ctaPrimary)}
            </a>
            <a
              href="#cases"
              className="inline-flex justify-center px-8 py-4 text-base font-medium border border-gray-300 dark:border-white/20 rounded-xl hover:border-accent dark:hover:border-accent-dark transition-colors"
            >
              {t(s.ctaSecondary)}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
          {s.stats.map((stat, i) => (
            <div
              key={i}
              className="px-6 py-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5"
            >
              <div className="text-2xl font-bold text-accent dark:text-accent-dark">
                {t(stat.value)}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {t(stat.label)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
