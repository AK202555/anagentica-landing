'use client';

import FadeInUp from './animations/FadeInUp';

const usps = [
  {
    title: 'Результат, а не технология',
    desc: 'Каждый проект считается в деньгах и часах: сколько сэкономили, насколько выросла выручка.',
  },
  {
    title: 'Работает без программиста',
    desc: 'После сдачи проекта ваша команда управляет системой сама. Никакой зависимости от подрядчика.',
  },
  {
    title: 'Под ваш масштаб и бюджет',
    desc: 'Без enterprise-контрактов и раздутых смет.',
  },
  {
    title: 'Полный цикл',
    desc: 'От стратегии до запуска и обучения — одна точка входа.',
  },
];

export default function USP() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Чем мы отличаемся
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {usps.map((u, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="h-full p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
                <h3 className="text-lg font-semibold mb-2">{u.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{u.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
