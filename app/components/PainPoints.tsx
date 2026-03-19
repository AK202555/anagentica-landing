'use client';

import FadeInUp from './animations/FadeInUp';

const pains = [
  {
    title: 'Менеджеры тратят полдня на рутину вместо продаж',
    desc: 'Ввод данных, копирование, ответы на типовые вопросы',
  },
  {
    title: 'Заявки теряются или обрабатываются слишком медленно',
    desc: 'Клиент ждёт — и уходит к конкуренту',
  },
  {
    title: 'Хочется внедрить AI, но непонятно с чего начать',
    desc: 'Инструментов много — что реально работает?',
  },
  {
    title: 'Нет времени заниматься стратегией — всё время в операционке',
    desc: 'Бизнес работает на вас, а не вы — на бизнес',
  },
  {
    title: 'Команда маленькая, а задач как у корпорации',
    desc: 'Стартапы, частные практики, небольшие команды',
  },
];

export default function PainPoints() {
  return (
    <section id="pains" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Звучит знакомо?
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-lg">
            Узнаёте себя?
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((pain, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="h-full p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-accent/40 dark:hover:border-accent-dark/40 transition-colors">
                <h3 className="text-base font-semibold mb-2">{pain.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{pain.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.5}>
          <p className="text-center mt-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Мы решаем именно это — без лишних затрат и без программиста в штате.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
