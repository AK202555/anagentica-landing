'use client';

// Deterministic star positions (no Math.random — safe for SSR)
const STARS = [
  { x: 3, y: 8, r: 1.2, o: 0.6, d: 3.1 },
  { x: 12, y: 22, r: 0.8, o: 0.4, d: 4.7 },
  { x: 25, y: 5, r: 1.5, o: 0.7, d: 2.8 },
  { x: 38, y: 18, r: 0.9, o: 0.5, d: 5.2 },
  { x: 47, y: 35, r: 1.1, o: 0.6, d: 3.9 },
  { x: 58, y: 10, r: 0.7, o: 0.4, d: 6.1 },
  { x: 67, y: 28, r: 1.4, o: 0.8, d: 2.5 },
  { x: 74, y: 42, r: 0.8, o: 0.3, d: 4.3 },
  { x: 83, y: 15, r: 1.0, o: 0.6, d: 5.8 },
  { x: 91, y: 38, r: 1.3, o: 0.5, d: 3.2 },
  { x: 7, y: 52, r: 0.9, o: 0.5, d: 4.1 },
  { x: 18, y: 68, r: 1.2, o: 0.7, d: 3.5 },
  { x: 29, y: 48, r: 0.6, o: 0.3, d: 6.7 },
  { x: 41, y: 72, r: 1.4, o: 0.6, d: 2.9 },
  { x: 53, y: 58, r: 0.8, o: 0.4, d: 5.4 },
  { x: 62, y: 82, r: 1.1, o: 0.7, d: 3.7 },
  { x: 71, y: 65, r: 0.7, o: 0.3, d: 7.2 },
  { x: 79, y: 78, r: 1.3, o: 0.6, d: 2.6 },
  { x: 88, y: 55, r: 0.9, o: 0.5, d: 4.8 },
  { x: 95, y: 90, r: 1.0, o: 0.4, d: 5.1 },
  { x: 15, y: 88, r: 1.5, o: 0.8, d: 3.3 },
  { x: 33, y: 92, r: 0.7, o: 0.3, d: 6.0 },
  { x: 50, y: 95, r: 1.2, o: 0.5, d: 4.5 },
  { x: 65, y: 88, r: 0.8, o: 0.4, d: 3.8 },
  { x: 85, y: 92, r: 1.1, o: 0.6, d: 5.6 },
  // brighter accent stars (teal-tinted)
  { x: 22, y: 40, r: 1.8, o: 0.9, d: 4.0 },
  { x: 55, y: 25, r: 2.0, o: 1.0, d: 3.0 },
  { x: 78, y: 50, r: 1.7, o: 0.85, d: 5.0 },
  { x: 44, y: 80, r: 1.9, o: 0.9, d: 3.6 },
  { x: 90, y: 20, r: 1.6, o: 0.8, d: 4.2 },
];

const ACCENT = [26, 27, 28, 29, 30]; // indices of bright teal stars

export default function Starfield() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {STARS.map((s, i) => {
        const isTeal = ACCENT.includes(i);
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.r * 2,
              height: s.r * 2,
              background: isTeal ? '#00c8ff' : '#ffffff',
              opacity: s.o,
              boxShadow: isTeal ? `0 0 ${s.r * 4}px rgba(0,200,255,0.6)` : 'none',
              animation: `nodeBlink ${s.d}s ease-in-out infinite`,
              animationDelay: `${(i * 0.37) % s.d}s`,
            }}
          />
        );
      })}
    </div>
  );
}
