'use client';

import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function TargetAudience() {
  const { t } = useLocale();
  const s = translations.audience;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t(s.title)}
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {s.items.map((a, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="h-full p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-center">
                <h3 className="text-lg font-semibold mb-3">{t(a.title)}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t(a.desc)}</p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.3}>
          <p className="text-center mt-10 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            {t(s.footer)}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
