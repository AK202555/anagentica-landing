'use client';

import FadeInUp from './animations/FadeInUp';

const cases = [
  {
    badge: 'Демо · E-commerce',
    title: 'AI-обработка входящих лидов',
    desc: 'Автоматическая квалификация и распределение заявок с сайта, маркетплейсов и мессенджеров. AI анализирует запрос, определяет приоритет и направляет нужному менеджеру.',
    metrics: [
      { value: '−68%', label: 'время обработки' },
      { value: '+40%', label: 'конверсия' },
    ],
  },
  {
    badge: 'Демо · Услуги',
    title: 'AI-ассистент для продаж и поддержки',
    desc: 'Telegram-бот с базой знаний компании, который отвечает клиентам 24/7, квалифицирует заявки и передаёт горячие лиды менеджерам.',
    metrics: [
      { value: '−55%', label: 'нагрузка на команду' },
      { value: '24/7', label: 'без менеджера' },
    ],
  },
  {
    badge: 'Демо · Производство',
    title: 'Автоматизация документооборота',
    desc: 'AI-система обработки входящих документов: распознавание, классификация, извлечение данных и автоматическое внесение в учётную систему.',
    metrics: [
      { value: '−70%', label: 'ручной работы' },
      { value: '×2', label: 'скорость' },
    ],
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Что уже умеет делать AI для бизнеса
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-lg">
            Примеры решений
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="h-full p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 flex flex-col">
                <span className="inline-block self-start text-xs font-medium px-3 py-1 rounded-full bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark mb-4">
                  {c.badge}
                </span>
                <h3 className="text-lg font-semibold mb-3">{c.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1">
                  {c.desc}
                </p>
                <div className="flex gap-4">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-xl font-bold text-accent dark:text-accent-dark">
                        {m.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
