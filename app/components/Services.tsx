'use client';

import FadeInUp from './animations/FadeInUp';

const services = [
  {
    title: 'AI-аудит и стратегия',
    subtitle: 'Найдём, где AI сэкономит вам деньги прямо сейчас',
    items: [
      'Анализ процессов',
      'Топ-3 точки автоматизации',
      'Дорожная карта',
      'Расчёт экономии',
    ],
    price: 'от 50 000 ₽ · 2 недели',
  },
  {
    title: 'AI-автоматизация процессов',
    subtitle: 'Берём рутинный процесс и делаем его автоматическим',
    items: [
      'Проектирование',
      'Разработка',
      'Интеграция с CRM/1С',
      'Обучение команды',
    ],
    price: 'от 150 000 ₽ · 3–6 недель',
  },
  {
    title: 'Разработка AI-агентов',
    subtitle: 'AI-сотрудник, который работает 24/7 без выходных',
    items: [
      'Ассистент в Telegram/сайте',
      'Квалификация лидов',
      'База знаний компании',
    ],
    price: 'от 200 000 ₽ · 4–8 недель',
  },
  {
    title: 'AI-обучение команды',
    subtitle: 'Команда начинает экономить 2–5 часов в день уже с первого занятия',
    items: [
      'Воркшоп под ваши задачи',
      'Промпты, инструменты',
      'Стандарты работы',
    ],
    price: 'от 80 000 ₽ · 1–2 дня',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Что мы делаем
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="h-full p-6 md:p-8 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-accent/40 dark:hover:border-accent-dark/40 transition-colors flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-5">{s.subtitle}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-accent dark:text-accent-dark mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-medium text-accent dark:text-accent-dark">
                  {s.price}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
