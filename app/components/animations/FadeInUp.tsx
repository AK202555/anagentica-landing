'use client';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

export default function FadeInUp({ children, delay = 0, className, direction = 'up' }: FadeInUpProps) {
  const revealClass =
    direction === 'left' ? 'reveal-left' :
    direction === 'right' ? 'reveal-right' :
    'reveal';

  return (
    <div
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={`${revealClass}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
}
