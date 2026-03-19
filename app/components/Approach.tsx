'use client';

import FadeInUp from './animations/FadeInUp';

const steps = [
  {
    num: '01',
    title: 'Разбираемся в вашем бизнесе',
    desc: 'Не навязываем готовые решения. Сначала разбираемся, где реально теряются деньги и время.',
  },
  {
    num: '02',
    title: 'Строим под вас, а не по шаблону',
    desc: 'Каждое решение — под вашу команду, ваши инструменты и ваши процессы.',
  },
  {
    num: '03',
    title: 'Сдаём работающую систему',
    desc: 'После внедрения ваша команда управляет всем сама. Без зависимости от нас и без программиста.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-16 md:py-24 bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            AI, который реально работает в&nbsp;вашем деле
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-16 text-lg max-w-3xl mx-auto">
            Мы не продаём технологию ради технологии. Берём конкретную задачу вашего
            бизнеса и решаем её с помощью AI — измеримо, понятно, без лишнего.
          </p>
        </FadeInUp>

        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <FadeInUp key={step.num} delay={i * 0.15}>
              <div className="relative pl-16 pb-12 last:pb-0">
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[23px] top-12 bottom-0 w-px bg-gray-200 dark:bg-white/10" />
                )}
                {/* Number badge */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-accent dark:bg-accent-dark flex items-center justify-center text-white text-sm font-bold">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{step.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
