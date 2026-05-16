'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInUp({ children, delay = 0, className }: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}s`;
          el.classList.add('fade-in-up');
          observer.unobserve(el);
        }
      },
      { rootMargin: '-50px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={{ opacity: 0 }} className={className}>
      {children}
    </div>
  );
}
