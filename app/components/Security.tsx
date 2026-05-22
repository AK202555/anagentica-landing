'use client';

import { ShieldCheck, FileText } from 'lucide-react';
import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';

const items = [
  {
    icon: ShieldCheck,
    title: { ru: 'Закрытый российский контур', en: 'Full data sovereignty' },
    text: {
      ru: 'Разворачиваем ИИ-платформу на ваших серверах или в аккредитованном российском облаке (Яндекс.Облако, VK Cloud и др.). Данные не покидают территорию РФ и не передаются в OpenAI или зарубежные сервисы.',
      en: 'Deploy on your own infrastructure or in a private cloud. No data ever reaches OpenAI or third-party servers. For regulated industries (healthcare, finance, government) we offer a fully air-gapped on-premise setup.',
    },
  },
  {
    icon: FileText,
    title: { ru: 'Правовой фундамент для РФ', en: 'International legal compliance' },
    text: {
      ru: 'Решения соответствуют 152-ФЗ «О персональных данных». До старта подписываем NDA с фиксацией штрафов и передаём юрслужбе готовый пакет регламентов для легального использования ИИ в контуре РФ.',
      en: 'Full compliance with GDPR and ISO 27001. We sign a strict NDA with penalty clauses before work begins and provide your legal team with a complete data processing agreement (DPA) package.',
    },
  },
];

export default function Security() {
  const { t } = useLocale();

  return (
    <section id="security" style={{ background: '#f5f5f7', padding: '100px 24px' }}>
      <div className="max-w-[1000px] mx-auto">
        {/* Eyebrow */}
        <FadeInUp>
          <p className="text-xs font-semibold uppercase tracking-[2px] text-[#00c8ff] mb-4">
            {t({ ru: 'Безопасность', en: 'Security' })}
          </p>
        </FadeInUp>

        {/* Heading */}
        <FadeInUp delay={0.05}>
          <h2
            className="font-bold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f] mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', maxWidth: 700 }}
          >
            {t({
              ru: 'Безопасность и правовой фундамент',
              en: 'Security & legal foundation',
            })}
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-black/50 mb-14" style={{ fontSize: '1.05rem', maxWidth: 580, lineHeight: 1.65 }}>
            {t({
              ru: 'Данные остаются в российском контуре. Юридическая база готова до старта работ.',
              en: 'Your data never leaves your infrastructure. Legal groundwork (GDPR and ISO 27001 compliant) is ready before work begins.',
            })}
          </p>
        </FadeInUp>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {items.map(({ icon: Icon, title, text }, i) => (
            <FadeInUp key={i} delay={0.1 + i * 0.1}>
              <div
                className="h-full rounded-2xl p-8 bg-white hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(0,200,255,0.12)', border: '1px solid rgba(0,200,255,0.2)' }}
                >
                  <Icon size={22} color="#00d4ff" />
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-3">{t(title)}</h3>
                <p className="text-black/55 text-sm leading-relaxed">{t(text)}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
