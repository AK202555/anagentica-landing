'use client';

import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function Footer() {
  const { t } = useLocale();
  const s = translations.footer;
  const ci = s.companyInfo;

  const navLinks = [
    { label: t(s.links.services), href: '#services' },
    { label: t(s.links.approach), href: '#approach' },
    { label: t(s.links.cases), href: '#cases' },
    { label: t(s.links.about), href: '#about' },
    { label: t(s.links.contact), href: '#cta' },
  ];

  const legalLinks = [
    { label: t(s.legal.privacy), href: '/privacy' },
    { label: t(s.legal.terms), href: '/terms' },
    { label: t(s.legal.offer), href: '/offer' },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <div className="mb-1">
              <img src="/assets/logo-dark.svg" alt="Anagentica" className="hidden dark:block h-5" />
              <img src="/assets/logo-light.svg" alt="Anagentica" className="dark:hidden block h-5" />
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t(s.tagline)}
            </div>
          </div>

          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Company details + legal links */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Company info */}
          <div className="text-xs text-gray-400 dark:text-gray-500 space-y-1">
            <div className="font-medium text-gray-500 dark:text-gray-400">{ci.name}</div>
            <div>{t(ci.inn)} &middot; {t(ci.ogrnip)}</div>
          </div>

          {/* Legal links */}
          <nav className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-gray-400 dark:text-gray-500 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-xs text-gray-400 dark:text-gray-500">
            &copy; 2025 Anagentica
          </div>
        </div>
      </div>
    </footer>
  );
}
