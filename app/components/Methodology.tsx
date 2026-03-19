'use client';

import FadeInUp from './animations/FadeInUp';

const steps = [
  { num: 1, title: 'Бесплатный разбор', time: '30 минут' },
  { num: 2, title: 'Аудит и план', time: '1–2 недели' },
  { num: 3, title: 'Разработка и интеграция', time: '3–8 недель' },
  { num: 4, title: 'Запуск и обучение', time: '' },
  { num: 5, title: 'Поддержка и развитие', time: '' },
];

export default function Methodology() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            От заявки до результата — прозрачно
          </h2>
        </FadeInUp>

        {/* Desktop: horizontal */}
        <FadeInUp>
          <div className="hidden md:flex items-start justify-between relative">
            {/* Line */}
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-gray-200 dark:bg-white/10" />

            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center w-1/5">
                <div className="w-12 h-12 rounded-full bg-accent dark:bg-accent-dark flex items-center justify-center text-white text-sm font-bold mb-4 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                {step.time && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {step.time}
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="relative pl-14 pb-8 last:pb-0">
                {i < steps.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gray-200 dark:bg-white/10" />
                )}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-accent dark:bg-accent-dark flex items-center justify-center text-white text-sm font-bold">
                  {step.num}
                </div>
                <h3 className="text-base font-semibold">{step.title}</h3>
                {step.time && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {step.time}
                  </span>
                )}
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
