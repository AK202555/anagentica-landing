'use client';

// Node positions across a 1440×800 viewport
const NODES: [number, number][] = [
  [60, 100], [220, 180], [400, 90], [580, 220], [800, 60],
  [1000, 150], [1200, 100], [1380, 220], [80, 380], [300, 420],
  [520, 300], [720, 400], [940, 350], [1150, 430], [1360, 380],
  [150, 620], [380, 680], [600, 590], [820, 700], [1060, 620],
  [1280, 700], [1420, 580], [700, 200], [900, 500],
];

// Edges between nearby nodes (pre-calculated pairs)
const EDGES: [number, number][] = [
  [0,1],[0,8],[1,2],[1,3],[1,9],[2,3],[3,4],[3,10],[3,22],
  [4,5],[4,22],[5,6],[5,12],[5,22],[6,7],[6,13],[7,14],
  [8,9],[8,15],[9,10],[9,16],[9,15],[10,11],[10,17],[11,12],
  [11,17],[11,18],[11,23],[12,13],[12,23],[13,14],[13,19],
  [14,21],[15,16],[16,17],[17,18],[17,23],[18,19],[18,23],
  [19,20],[19,21],[20,21],
];

// Nodes that get a larger glow ring
const GLOW_NODES = new Set([1, 4, 9, 12, 17, 22]);

export default function TechBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Edges */}
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]} y1={NODES[a][1]}
            x2={NODES[b][0]} y2={NODES[b][1]}
            stroke="rgba(0,200,255,0.18)"
            strokeWidth="0.8"
          />
        ))}

        {/* Nodes */}
        {NODES.map(([x, y], i) => (
          <g key={i}>
            {/* Outer glow ring on selected nodes */}
            {GLOW_NODES.has(i) && (
              <circle cx={x} cy={y} r="18" fill="url(#nodeGlow)" className="node-pulse" />
            )}
            {/* Halo */}
            <circle cx={x} cy={y} r="5" fill="rgba(0,200,255,0.08)" />
            {/* Core dot */}
            <circle
              cx={x} cy={y} r="2.2"
              fill="#00c8ff"
              style={{ opacity: 0.4 + (i % 4) * 0.12 }}
              className={i % 5 === 0 ? 'node-blink' : ''}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
