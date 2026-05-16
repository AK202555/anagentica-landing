interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInUp({ children, className }: FadeInUpProps) {
  return <div className={className}>{children}</div>;
}
