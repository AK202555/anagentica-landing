'use client';

import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { t } = useLocale();
  const s = translations.legal;

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <a
          href="/"
          className="inline-block text-sm text-accent dark:text-accent-dark hover:underline mb-8"
        >
          {t(s.backToHome)}
        </a>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-10">
          {t(s.lastUpdated)}: 20.03.2026
        </p>
        <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-li:text-gray-600 dark:prose-li:text-gray-400">
          {children}
        </div>
      </div>
    </div>
  );
}
