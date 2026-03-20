'use client';

import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function USP() {
  const { t } = useLocale();
  const s = translations.usp;

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t(s.title)}
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {s.items.map((u, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="h-full p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
                <h3 className="text-lg font-semibold mb-2">{t(u.title)}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t(u.desc)}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
