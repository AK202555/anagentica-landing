'use client';

const footerLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Как работаем', href: '#approach' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#cta' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-accent dark:text-accent-dark mb-1">
              Anagentica
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Меньше рутины. Больше бизнеса.
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
