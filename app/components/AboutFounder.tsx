'use client';

import FadeInUp from './animations/FadeInUp';

const stats = [
  { value: '27 лет', label: 'опыт' },
  { value: '100+ млн ₽', label: 'подтверждённая экономия' },
  { value: '+46%', label: 'рост успешности проектов' },
  { value: 'NPS 90%+', label: 'после внедрения AI' },
];

const companies = ['Stada', 'Sanofi', 'Dr. Reddy\'s', 'AB InBev', 'Nestlé', 'Rolf Group', 'BAT'];

const achievements = [
  'Построил систему AI-автоматизации, сэкономившую 100+ млн ₽ в операционных расходах',
  'Повысил успешность проектов на 46% через внедрение AI-аналитики',
  'Запустил цифровую трансформацию в компаниях с 5 000+ сотрудников',
  'Обучил 500+ специалистов работе с AI-инструментами',
  'Внедрил AI-ассистентов, заменивших ручную обработку 10 000+ документов в месяц',
];

const skills = [
  'AI/LLM',
  'Автоматизация процессов',
  'CRM/ERP',
  'Low-code (N8N, Mendix)',
  'Digital transformation',
];

export default function AboutFounder() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Привет, я Анас — основатель Anagentica
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            27 лет в ИТ. Последние 10 — на стыке бизнеса и технологий
            в крупнейших международных компаниях.
          </p>
        </FadeInUp>

        {/* Stats */}
        <FadeInUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-center"
              >
                <div className="text-xl font-bold text-accent dark:text-accent-dark">
                  {s.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>

        <div className="max-w-3xl mx-auto">
          {/* Bio */}
          <FadeInUp>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-10">
              <p>
                Я прошёл путь от инженера до руководителя цифровой трансформации
                в международных корпорациях. Видел изнутри, как компании теряют
                миллионы на неэффективных процессах — и как AI может это изменить
                за недели, а не годы.
              </p>
              <p>
                Сегодня я помогаю малому и среднему бизнесу получить доступ
                к тем же AI-решениям, которые используют корпорации — но без
                корпоративных бюджетов и сроков.
              </p>
            </div>
          </FadeInUp>

          {/* Companies */}
          <FadeInUp>
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                Опыт работы
              </h3>
              <div className="flex flex-wrap gap-2">
                {companies.map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2 text-sm rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Achievements */}
          <FadeInUp>
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                Достижения
              </h3>
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-accent dark:text-accent-dark mt-0.5 shrink-0">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>

          {/* Skills */}
          <FadeInUp>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                Навыки
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
