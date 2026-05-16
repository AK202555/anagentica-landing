'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function setCookie(name: string, value: string, days: number = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);
  const { t } = useLocale();
  const s = translations.cookie;

  useEffect(() => {
    const consent = getCookie('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const dismiss = (value: string) => {
    setCookie('cookie_consent', value);
    setHiding(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ${
        hiding ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] shadow-lg backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
          {t(s.text)}{' '}
          <a href="/privacy" className="text-accent dark:text-accent-dark hover:underline">
            {t(s.policyLink)}
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => dismiss('declined')}
            className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-white/15 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {t(s.decline)}
          </button>
          <button
            onClick={() => dismiss('accepted')}
            className="px-4 py-2 text-sm font-medium text-white bg-accent dark:bg-accent-dark rounded-lg hover:opacity-90 transition-opacity"
          >
            {t(s.accept)}
          </button>
        </div>
      </div>
    </div>
  );
}
