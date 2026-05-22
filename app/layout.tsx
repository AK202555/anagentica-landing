import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import { Providers } from './providers';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'optional',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Anagentica — AI-агентство. Меньше рутины. Больше бизнеса.',
  description:
    'Автоматизация бизнес-процессов с помощью AI. AI-агенты, AI-аудит, обучение команд. Бесплатный разбор задачи за 30 минут.',
  openGraph: {
    title: 'Anagentica — AI-агентство',
    description: 'Меньше рутины. Больше бизнеса.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning className={jakarta.variable}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        <Script id="scroll-reveal" strategy="afterInteractive">{`
          (function() {
            var observer = new IntersectionObserver(function(entries) {
              entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

            function init() {
              document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function(el) {
                if (!el._revealObserved) {
                  el._revealObserved = true;
                  observer.observe(el);
                }
              });
            }

            setTimeout(init, 200);
            window.addEventListener('scroll', init, { passive: true });
          })();
        `}</Script>
      </body>
    </html>
  );
}
