'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle, Send } from 'lucide-react';
import FadeInUp from './animations/FadeInUp';
import { useLocale } from '../i18n/LocaleContext';
import { translations } from '../i18n/translations';

export default function CTA() {
  const [form, setForm] = useState({ name: '', contact: '', task: '' });
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);
  const { t } = useLocale();
  const s = translations.cta;

  const inputStyle = {
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 10,
    padding: '13px 16px',
    color: '#fff',
    width: '100%',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.15s',
  } as const;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!consent) { setConsentError(true); return; }
    const val = form.contact.trim();
    const isPhone = /^\+?[\d\s\-().]{7,15}$/.test(val);
    const isTelegram = /^@[\w]{3,}$/.test(val);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (!isPhone && !isTelegram && !isEmail) { setContactError(true); return; }
    setLoading(true); setSendError(false);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name: form.name, contact: form.contact, task: form.task },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
    } catch { setSendError(true); } finally { setLoading(false); }
  };

  return (
    <section id="cta" className="text-white" style={{ background: '#050b14', padding: '100px 24px' }}>
      <div className="max-w-[680px] mx-auto text-center">
        <FadeInUp>
          <p className="text-xs font-semibold uppercase tracking-[1px] text-[#00d4ff] mb-3">
            {t({ ru: 'Контакт', en: 'Contact' })}
          </p>
          <h2
            className="font-bold leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            {t(s.title)}
          </h2>
          <p className="text-white/55 mb-10 text-lg leading-relaxed">
            {t(s.subtitle)}
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-16">
              <div className="w-16 h-16 rounded-full bg-[rgba(0,200,255,0.15)] flex items-center justify-center">
                <CheckCircle size={32} color="#00d4ff" />
              </div>
              <p className="text-xl font-semibold">{t({ ru: 'Заявка отправлена!', en: 'Request sent!' })}</p>
              <p className="text-white/55 max-w-sm">
                {t({ ru: 'Свяжемся с вами в течение рабочего дня, чтобы согласовать время разбора.', en: "We'll contact you within a business day to schedule your audit." })}
              </p>
            </div>
          ) : (
            <div
              className="text-left"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: '40px 36px',
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">{t(s.nameLabel)}</label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder={t(s.namePlaceholder)}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'rgba(0,200,255,0.6)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">{t(s.contactLabel)}</label>
                  <input
                    type="text" required
                    value={form.contact}
                    onChange={e => { setForm({ ...form, contact: e.target.value }); setContactError(false); }}
                    placeholder={t(s.contactPlaceholder)}
                    style={{ ...inputStyle, borderColor: contactError ? '#ff453a' : 'rgba(255,255,255,0.12)' }}
                    onFocus={e => (e.target.style.borderColor = contactError ? '#ff453a' : 'rgba(0,200,255,0.6)')}
                    onBlur={e => (e.target.style.borderColor = contactError ? '#ff453a' : 'rgba(255,255,255,0.12)')}
                  />
                  {contactError && <p className="text-xs text-[#ff453a] mt-1">{t(s.contactError)}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">{t(s.taskLabel)}</label>
                  <textarea
                    rows={4} required
                    value={form.task}
                    onChange={e => setForm({ ...form, task: e.target.value })}
                    placeholder={t(s.taskPlaceholder)}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(0,200,255,0.6)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={e => { setConsent(e.target.checked); if (e.target.checked) setConsentError(false); }}
                    className="mt-1 w-4 h-4 shrink-0 rounded"
                  />
                  <span className="text-xs text-white/40">
                    {t(s.consent)}{' '}
                    <a href="/privacy" className="text-[#00d4ff] hover:underline">{t(s.consentLink)}</a>
                  </span>
                </label>
                {consentError && <p className="text-xs text-[#ff453a]">{t(s.consentRequired)}</p>}
                {sendError && <p className="text-sm text-[#ff453a] text-center">Не удалось отправить. Напишите в Telegram.</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-[15px] text-base font-medium text-white bg-[#00c8ff] hover:bg-[#0077ed] disabled:opacity-60 transition-colors"
                  style={{ borderRadius: 12 }}
                >
                  {loading ? '...' : t(s.submit)}
                </button>
              </form>
            </div>
          )}
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="mt-6 text-sm text-white/40 flex items-center justify-center gap-2">
            {t(s.telegram)}{' '}
            <a
              href="https://t.me/Anagentica_Asistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#00d4ff] hover:underline font-medium"
            >
              <Send size={14} />
              Telegram
            </a>
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
