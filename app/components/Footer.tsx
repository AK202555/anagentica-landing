'use client';

import { Send } from 'lucide-react';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function Footer() {
  const { t } = useLocale();
  const s = translations.footer;
  const ci = s.companyInfo;

  return (
    <footer
      className="text-white"
      style={{ background: '#050b14', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '60px 24px 40px' }}
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2">
            <a href="#" className="text-[22px] font-bold leading-none inline-block mb-3">
              <span className="text-[#00c8ff] underline decoration-[3px] underline-offset-2">An</span>
              <span className="text-white">agentica</span>
            </a>
            <p className="text-sm text-white/45 mb-4 max-w-[200px] leading-relaxed">
              {t(s.tagline)}
            </p>
            <a
              href="https://t.me/Anagentica_Asistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#00d4ff] hover:text-white transition-colors"
            >
              <Send size={14} />
              Telegram
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[1px] text-white/30 mb-4">
              {t({ ru: 'Услуги', en: 'Services' })}
            </p>
            <div className="space-y-2.5">
              {[
                { ru: 'AI-аудит', en: 'AI audit', href: '#services' },
                { ru: 'Автоматизация', en: 'Automation', href: '#services' },
                { ru: 'AI-агенты', en: 'AI agents', href: '#services' },
                { ru: 'Обучение', en: 'Training', href: '#services' },
              ].map(link => (
                <a key={link.ru} href={link.href} className="block text-sm text-white/50 hover:text-white transition-colors">
                  {t(link)}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[1px] text-white/30 mb-4">
              {t({ ru: 'Компания', en: 'Company' })}
            </p>
            <div className="space-y-2.5">
              {[
                { label: t(s.links.about), href: '#about' },
                { label: t(s.links.cases), href: '#cases' },
                { label: t(s.links.approach), href: '#approach' },
                { label: t(s.links.contact), href: '#cta' },
              ].map(link => (
                <a key={link.href} href={link.href} className="block text-sm text-white/50 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[1px] text-white/30 mb-4">
              {t({ ru: 'Правовые', en: 'Legal' })}
            </p>
            <div className="space-y-2.5">
              <a href="/privacy" className="block text-sm text-white/50 hover:text-white transition-colors">
                {t(s.legal.privacy)}
              </a>
              <a href="/offer" className="block text-sm text-white/50 hover:text-white transition-colors">
                {t(s.legal.offer)}
              </a>
              <a href="/terms" className="block text-sm text-white/50 hover:text-white transition-colors">
                {t(s.legal.terms)}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs text-white/30">
            © 2025 Anagentica
          </p>
        </div>
      </div>
    </footer>
  );
}
