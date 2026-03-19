'use client';

import { useState, FormEvent } from 'react';
import FadeInUp from './animations/FadeInUp';

export default function CTA() {
  const [form, setForm] = useState({ name: '', contact: '', task: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Разберём вашу задачу бесплатно
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
              30 минут — и вы уйдёте с конкретным пониманием, что и как можно
              автоматизировать. Без давления и без обязательств.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            {submitted ? (
              <div className="p-8 rounded-xl border border-accent/30 dark:border-accent-dark/30 bg-accent/5 dark:bg-accent-dark/10">
                <p className="text-lg font-semibold text-accent dark:text-accent-dark">
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-shadow"
                    placeholder="Как вас зовут?"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium mb-1.5">
                    Телефон или Telegram
                  </label>
                  <input
                    id="contact"
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-shadow"
                    placeholder="+7 999 123-45-67 или @username"
                  />
                </div>
                <div>
                  <label htmlFor="task" className="block text-sm font-medium mb-1.5">
                    Опишите задачу
                  </label>
                  <textarea
                    id="task"
                    rows={4}
                    value={form.task}
                    onChange={(e) => setForm({ ...form, task: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-shadow resize-none"
                    placeholder="Что хотите автоматизировать или улучшить?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 text-base font-medium text-white bg-accent dark:bg-accent-dark rounded-lg hover:opacity-90 transition-opacity"
                >
                  Записаться на разбор
                </button>
              </form>
            )}
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Или напишите напрямую в{' '}
              <a
                href="https://t.me/anagentica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent dark:text-accent-dark hover:underline"
              >
                Telegram
              </a>
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
