'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const reveal = () => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right').forEach(el => {
        if (el.classList.contains('visible')) return;
        const { top, bottom } = el.getBoundingClientRect();
        if (top < vh + 60 && bottom > -60) el.classList.add('visible');
      });
    };

    reveal();
    const interval = setInterval(reveal, 120);
    setTimeout(() => clearInterval(interval), 8000);
    window.addEventListener('scroll', reveal, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return null;
}
