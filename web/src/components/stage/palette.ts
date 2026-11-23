export type Stroke = { c: string; w: number; o?: number; dash?: number[]; op?: number };
export type Preset = Stroke[];

export const sparklePath = 'M12 0C12.9 7.4 16.6 11.1 24 12C16.6 12.9 12.9 16.6 12 24C11.1 16.6 7.4 12.9 0 12C7.4 11.1 11.1 7.4 12 0Z';

export const starPath = 'M0 -14l6 13 14 2-10 10 2 14-12-7-12 7 2-14-10-10 14-2z';

export const shardPaths = [
  'M4 38L30 2L58 30L22 70Z',
  'M2 20L40 4L34 58Z',
  'M10 4L44 22L26 62L2 40Z',
  'M4 50L24 2L56 36Z',
  'M2 26L18 2L30 30L12 40Z',
  'M6 30L30 0L40 40Z',
];

export const presets: Record<string, Preset> = {
  deepBlue: [
    { c: '#5463D6', w: 168 },
    { c: '#3A47AE', w: 156 },
    { c: '#4A59C8', w: 22, dash: [160, 70, 60, 120], o: -34 },
  ],
  deepViolet: [
    { c: '#6754C4', w: 124 },
    { c: '#41348F', w: 112 },
    { c: '#5544A8', w: 16, dash: [90, 60, 200, 80], o: 26 },
  ],
  steel: [
    { c: '#4F70C9', w: 138 },
    { c: '#33509F', w: 126 },
  ],
  blue: [
    { c: '#CFE4FF', w: 96 },
    { c: '#6FA8FF', w: 86 },
    { c: '#5B92EC', w: 40, o: 18 },
    { c: '#9EC9FF', w: 14, dash: [180, 60, 80, 120], o: -22 },
    { c: '#CFE4FF', w: 6, dash: [40, 300], o: -30 },
  ],
  lavender: [
    { c: '#E4DAFF', w: 74 },
    { c: '#9B8CFF', w: 66 },
    { c: '#8574EE', w: 28, o: 14 },
    { c: '#C9B8FF', w: 12, dash: [120, 50, 60, 90], o: -18 },
  ],
  lilac: [
    { c: '#E4DAFF', w: 68 },
    { c: '#9B8CFF', w: 60 },
    { c: '#C9B8FF', w: 12, dash: [70, 40, 140, 60], o: -14 },
  ],
  aqua: [
    { c: '#CBFBFB', w: 30 },
    { c: '#8FF0F0', w: 24 },
    { c: '#5FD6DE', w: 8, o: 5 },
  ],
  thin: [
    { c: '#C9B8FF', w: 26 },
    { c: '#9B8CFF', w: 20 },
  ],
  curl: [
    { c: '#E4DAFF', w: 30 },
    { c: '#C9B8FF', w: 22 },
  ],
  cream: [
    { c: '#FBF1CF', w: 18, op: 0.85 },
    { c: '#F6E3A1', w: 12, op: 0.85 },
  ],
};

export const accentPreset = (a: { accent: string; soft: string; deep: string }): Preset => [
  { c: a.soft, w: 74 },
  { c: a.accent, w: 66 },
  { c: a.deep, w: 28, o: 14, op: 0.55 },
  { c: a.soft, w: 12, dash: [120, 50, 60, 90], o: -18, op: 0.8 },
];

export const accentThin = (a: { accent: string; soft: string; deep: string }): Preset => [
  { c: a.soft, w: 30 },
  { c: a.accent, w: 24 },
  { c: a.deep, w: 8, o: 5, op: 0.6 },
];

export const rng = (seed: number) => {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const r1 = (n: number) => Math.round(n * 10) / 10;

export function vwave(o: { x: number; amp: number; step: number; y0: number; y1: number; seed: number; wander?: number; enter?: number; exit?: number }) {
  const rand = rng(o.seed);
  const pts: [number, number][] = [];
  let y = o.y0;
  let side = rand() > 0.5 ? 1 : -1;
  const wander = o.wander ?? 0;
  while (y < o.y1) {
    const center = o.x + Math.sin(y / 2300 + o.seed) * wander;
    pts.push([center + side * o.amp * (0.45 + rand() * 0.75), y]);
    side = -side;
    y += o.step * (0.7 + rand() * 0.6);
  }
  pts.push([o.x + side * o.amp * 0.5, o.y1]);
  if (o.enter !== undefined) pts[0][0] = o.enter;
  if (o.exit !== undefined) pts[pts.length - 1][0] = o.exit;
  let d = `M${r1(pts[0][0])} ${r1(pts[0][1])}`;
  for (let i = 1; i < pts.length; i++) {
    const [ax, ay] = pts[i - 1];
    const [bx, by] = pts[i];
    const h = (by - ay) * 0.55;
    d += `C${r1(ax)} ${r1(ay + h)} ${r1(bx)} ${r1(by - h)} ${r1(bx)} ${r1(by)}`;
  }
  return d;
}

export type Particle = { kind: 'bubble' | 'sparkle' | 'shard' | 'star'; x: number; y: number; s: number; c?: string; r?: number; d?: string; m: boolean; dl: number; du: number };

const sparkleColors = ['#F6E3A1', '#FFFFFF', '#8FF0F0', '#C9B8FF'];

export function scatter(o: { seed: number; count: number; colors?: string[]; edge?: number; center?: number }) {
  const rand = rng(o.seed);
  const out: Particle[] = [];
  const colors = o.colors ?? sparkleColors;
  const edge = o.edge ?? 13;
  const centerShare = o.center ?? 0.28;
  for (let i = 0; i < o.count; i++) {
    const roll = rand();
    const kind: Particle['kind'] = roll < 0.3 ? 'bubble' : roll < 0.72 ? 'sparkle' : roll < 0.9 ? 'shard' : 'star';
    const inCenter = rand() < centerShare;
    const left = rand() < 0.5;
    const x = inCenter ? 18 + rand() * 64 : left ? rand() * edge : 100 - edge + rand() * edge;
    const y = (i + rand()) / o.count * 100;
    const big = !inCenter;
    let s = 0;
    if (kind === 'bubble') s = big ? 30 + rand() * 80 : 14 + rand() * 18;
    if (kind === 'sparkle') s = big ? 14 + rand() * 18 : 10 + rand() * 8;
    if (kind === 'shard') s = big ? 32 + rand() * 30 : 22 + rand() * 10;
    if (kind === 'star') s = big ? 18 + rand() * 10 : 12 + rand() * 6;
    out.push({
      kind,
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
      s: Math.round(s),
      c: colors[Math.floor(rand() * colors.length)],
      r: Math.round(-30 + rand() * 60),
      d: shardPaths[Math.floor(rand() * shardPaths.length)],
      m: !inCenter && rand() < 0.45,
      dl: Math.round(rand() * 40) / 10,
      du: Math.round((kind === 'sparkle' ? 1.6 + rand() * 1.8 : 5 + rand() * 4) * 10) / 10,
    });
  }
  return out;
}

export function smooth(pts: [number, number][], t = 1) {
  let d = `M${r1(pts[0][0])} ${r1(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1 = [p1[0] + ((p2[0] - p0[0]) / 6) * t, p1[1] + ((p2[1] - p0[1]) / 6) * t];
    const c2 = [p2[0] - ((p3[0] - p1[0]) / 6) * t, p2[1] - ((p3[1] - p1[1]) / 6) * t];
    d += `C${r1(c1[0])} ${r1(c1[1])} ${r1(c2[0])} ${r1(c2[1])} ${r1(p2[0])} ${r1(p2[1])}`;
  }
  return d;
}

export function spiral(cx: number, cy: number, r0: number, r1v: number, turns: number, start = 0, steps = 28) {
  const pts: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = start + t * turns * Math.PI * 2;
    const r = r0 + (r1v - r0) * t;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.82]);
  }
  return { d: smooth(pts), pts };
}
