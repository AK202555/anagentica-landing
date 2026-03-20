'use client';

import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

const companies = ['Stada', 'Sanofi', 'Dr. Reddy\'s', 'AB InBev', 'Nestlé', 'Rolf Group', 'BAT'];

export default function AboutFounder() {
  const { locale, t } = useLocale();
  const s = translations.about;

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="flex flex-col items-center mb-12">
            <img
              src="/photo-anas.jpg"
              alt="Анас Хазиев"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white dark:border-white/10 shadow-lg mb-6"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
              {t(s.title)}
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {t(s.subtitle)}
            </p>
          </div>
        </FadeInUp>

        {/* Stats */}
        <FadeInUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {s.stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-center"
              >
                <div className="text-xl font-bold text-accent dark:text-accent-dark">
                  {typeof stat.value === 'string' ? stat.value : t(stat.value)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {t(stat.label)}
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>

        <div className="max-w-3xl mx-auto">
          {/* Bio */}
          <FadeInUp>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-10">
              {s.bio[locale].map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </FadeInUp>

          {/* Companies */}
          <FadeInUp>
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                {t(s.experienceLabel)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {companies.map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2 text-sm rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Achievements */}
          <FadeInUp>
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                {t(s.achievementsLabel)}
              </h3>
              <ul className="space-y-3">
                {s.achievements[locale].map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-accent dark:text-accent-dark mt-0.5 shrink-0">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>

          {/* Skills */}
          <FadeInUp>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                {t(s.skillsLabel)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.skills[locale].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
