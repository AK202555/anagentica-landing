'use client';

import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function Footer() {
  const { t } = useLocale();
  const s = translations.footer;

  const footerLinks = [
    { label: t(s.links.services), href: '#services' },
    { label: t(s.links.approach), href: '#approach' },
    { label: t(s.links.cases), href: '#cases' },
    { label: t(s.links.about), href: '#about' },
    { label: t(s.links.contact), href: '#cta' },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-accent dark:text-accent-dark mb-1">
              Anagentica
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t(s.tagline)}
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-gray-400 dark:text-gray-500">
            &copy; 2025 Anagentica
          </div>
        </div>
      </div>
    </footer>
  );
}
