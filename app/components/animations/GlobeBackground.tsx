'use client';

import { useEffect, useRef } from 'react';

const POINT_COUNT = 180;
const CONNECTION_DIST = 0.44; // sphere radius = 1

// Fibonacci sphere — evenly distributed points on unit sphere
function fibonacciSphere(n: number): [number, number, number][] {
  const pts: [number, number, number][] = [];
  const golden = Math.PI * (1 + Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const theta = Math.acos(1 - (2 * i) / (n - 1));
    const phi = golden * i;
    pts.push([
      Math.sin(theta) * Math.cos(phi),
      Math.sin(theta) * Math.sin(phi),
      Math.cos(theta),
    ]);
  }
  return pts;
}

// Pre-calculate edge pairs once
const BASE_POINTS = fibonacciSphere(POINT_COUNT);
const EDGES: [number, number][] = [];
for (let i = 0; i < POINT_COUNT; i++) {
  for (let j = i + 1; j < POINT_COUNT; j++) {
    const [ax, ay, az] = BASE_POINTS[i];
    const [bx, by, bz] = BASE_POINTS[j];
    const dx = ax - bx, dy = ay - by, dz = az - bz;
    if (Math.sqrt(dx * dx + dy * dy + dz * dz) < CONNECTION_DIST) {
      EDGES.push([i, j]);
    }
  }
}

const TILT = 0.28; // slight X-axis tilt (radians)
const cosTilt = Math.cos(TILT);
const sinTilt = Math.sin(TILT);

export default function GlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rot = 0;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const radius = Math.min(canvas.width * 0.42, canvas.height * 0.72);
      const cx = canvas.width * 0.5;
      const cy = canvas.height * 0.5;

      rot += 0.0025;
      const cosR = Math.cos(rot);
      const sinR = Math.sin(rot);

      // Project all points
      const proj = BASE_POINTS.map(([x, y, z]) => {
        // Rotate Y axis
        const rx = x * cosR + z * sinR;
        const ry = y;
        const rz = -x * sinR + z * cosR;
        // Tilt X axis
        const fy = ry * cosTilt - rz * sinTilt;
        const fz = ry * sinTilt + rz * cosTilt;
        return {
          px: cx + rx * radius,
          py: cy + fy * radius,
          depth: (fz + 1) / 2, // 0 = back, 1 = front
        };
      });

      // Draw edges
      for (const [a, b] of EDGES) {
        const pa = proj[a], pb = proj[b];
        const minDepth = Math.min(pa.depth, pb.depth);
        const alpha = minDepth * minDepth * 0.22;
        if (alpha < 0.01) continue;
        ctx.beginPath();
        ctx.moveTo(pa.px, pa.py);
        ctx.lineTo(pb.px, pb.py);
        ctx.strokeStyle = `rgba(0,200,255,${alpha.toFixed(3)})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      // Draw nodes (front nodes brighter and bigger)
      for (const p of proj) {
        const r = 0.7 + p.depth * 1.6;
        const opacity = 0.12 + p.depth * 0.75;
        ctx.beginPath();
        ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,255,${opacity.toFixed(3)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full"
      aria-hidden
    />
  );
}
