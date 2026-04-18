'use client';

import { useState, FormEvent } from 'react';
import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function CTA() {
  const [form, setForm] = useState({ name: '', contact: '', task: '' });
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLocale();
  const s = translations.cta;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setConsentError(true);
      return;
    }
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(s.title)}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
              {t(s.subtitle)}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            {submitted ? (
              <div className="p-8 rounded-xl border border-accent/30 dark:border-accent-dark/30 bg-accent/5 dark:bg-accent-dark/10">
                <p className="text-lg font-semibold text-accent dark:text-accent-dark">
                  {t(s.thankYou)}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    {t(s.nameLabel)}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-shadow"
                    placeholder={t(s.namePlaceholder)}
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium mb-1.5">
                    {t(s.contactLabel)}
                  </label>
                  <input
                    id="contact"
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-shadow"
                    placeholder={t(s.contactPlaceholder)}
                  />
                </div>
                <div>
                  <label htmlFor="task" className="block text-sm font-medium mb-1.5">
                    {t(s.taskLabel)}
                  </label>
                  <textarea
                    id="task"
                    rows={4}
                    value={form.task}
                    onChange={(e) => setForm({ ...form, task: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-shadow resize-none"
                    placeholder={t(s.taskPlaceholder)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (e.target.checked) setConsentError(false);
                      }}
                      className="mt-1 w-4 h-4 rounded border-gray-300 dark:border-white/20 text-accent dark:text-accent-dark focus:ring-accent dark:focus:ring-accent-dark shrink-0"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {t(s.consent)}{' '}
                      <a href="/privacy" className="text-accent dark:text-accent-dark hover:underline">
                        {t(s.consentLink)}
                      </a>
                    </span>
                  </label>
                  {consentError && (
                    <p className="text-xs text-red-500">{t(s.consentRequired)}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 text-base font-medium text-white bg-accent dark:bg-accent-dark rounded-lg hover:opacity-90 transition-opacity"
                >
                  {t(s.submit)}
                </button>
              </form>
            )}
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              {t(s.telegram)}{' '}
              <a
                href="https://t.me/Anagentica_Asistant_bot"
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
