'use client';

import { useEffect, useRef, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL ?? 'http://localhost:8000';

function getSessionId(): string {
  const key = 'anagentica_session_id';
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [pulse, setPulse] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setPulse(true), 8000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open || messages.length > 0) return;
    fetch(`${API_URL}/api/session/${getSessionId()}/init`)
      .then(r => r.json())
      .then(data => setMessages([{ role: 'bot', text: data.greeting }]))
      .catch(() => setMessages([{ role: 'bot', text: 'Привет! Расскажите, какой процесс вы хотите автоматизировать?' }]));
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: getSessionId(), message: text }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.response }]);
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Что-то пошло не так. Попробуйте ещё раз.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => { setOpen(o => !o); setPulse(false); }}
        aria-label="Открыть чат"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent dark:bg-accent-dark text-white shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity ${pulse && !open ? 'animate-bounce' : ''}`}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-accent dark:bg-accent-dark text-white font-semibold text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            Anagentica Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-accent dark:bg-accent-dark text-white rounded-br-none'
                      : 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-gray-100 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-white/10 px-3 py-2 rounded-xl rounded-bl-none text-sm text-gray-400 dark:text-gray-500">
                  <span className="animate-pulse">···</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-2 border-t border-gray-200 dark:border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Напишите сообщение..."
              className="flex-1 text-sm px-3 py-2 rounded-lg border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="px-3 py-2 rounded-lg bg-accent dark:bg-accent-dark text-white text-sm font-medium hover:opacity-90 disabled:opacity-40 transition-opacity"
            >
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
}
