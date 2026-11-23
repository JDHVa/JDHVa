import type { Lang } from '../../i18n/ui';
import type { Act } from '../../data/content';

export const actStrings = {
  es: {
    label: 'LOS ACTOS',
    title: 'Proyectos',
    intro: 'Cuatro actos, cuatro proyectos. Cada uno con su problema, su solución y sus números.',
    playbill: 'Programa',
    problem: 'El problema',
    solution: 'La solución',
    results: 'Resultados',
    stack: 'Stack',
    media: 'Evidencia',
    mediaHint: 'desliza',
    note: 'Nota',
    github: 'Ver en GitHub',
    privateRepo: 'Repo privado · pronto',
    openRepo: 'abrir el repositorio en GitHub',
    newTab: '(se abre en otra pestaña)',
    role: 'Rol',
    layer: 'Capa',
    items: (n: number) => (n === 1 ? '1 punto' : `${n} puntos`),
    imageAlt: (name: string, i: number) => `${name} · evidencia ${i}`,
    videoLabel: (name: string, i: number) => `${name} · video ${i}`,
    duelTitle: 'La IA contra mí',
    duelAi: 'IA',
    duelMe: 'Yo',
    duelLap: 'mejor vuelta · A01',
    duelDiff: (d: string) => `${d} s más rápida`,
    chartModel: 'World model',
    chartBaseline: 'Copiar último cuadro',
    chartX: 'horizonte de predicción',
    chartY: 'PSNR (dB)',
    chartTable: 'Ver tabla',
    chartHorizon: 'Horizonte',
    motif: {
      lumen: 'Burbujas aisladas que se acercan y se conectan.',
      terraorbis: 'Grafo de plantas: una infección se propaga y el rover la detecta.',
      centinel: 'Onda de audio de una llamada y semáforo que cambia entre continuar, verificar y colgar.',
      trackmania: 'Un auto recorre una pista dibujada.',
    },
    light: { continue: 'continuar', verify: 'verificar', hang: 'colgar' },
    device: { human: 'HUMANO', ai: 'IA' },
    detected: 'detectado',
    trophy: 'Top 3',
  },
  en: {
    label: 'THE ACTS',
    title: 'Projects',
    intro: 'Four acts, four projects. Each with its problem, its solution and its numbers.',
    playbill: 'Playbill',
    problem: 'The problem',
    solution: 'The solution',
    results: 'Results',
    stack: 'Stack',
    media: 'Evidence',
    mediaHint: 'swipe',
    note: 'Note',
    github: 'View on GitHub',
    privateRepo: 'Private repo · soon',
    openRepo: 'open the repository on GitHub',
    newTab: '(opens in a new tab)',
    role: 'Role',
    layer: 'Layer',
    items: (n: number) => (n === 1 ? '1 point' : `${n} points`),
    imageAlt: (name: string, i: number) => `${name} · evidence ${i}`,
    videoLabel: (name: string, i: number) => `${name} · video ${i}`,
    duelTitle: 'The AI vs me',
    duelAi: 'AI',
    duelMe: 'Me',
    duelLap: 'best lap · A01',
    duelDiff: (d: string) => `${d} s faster`,
    chartModel: 'World model',
    chartBaseline: 'Copy last frame',
    chartX: 'prediction horizon',
    chartY: 'PSNR (dB)',
    chartTable: 'Show table',
    chartHorizon: 'Horizon',
    motif: {
      lumen: 'Isolated bubbles that drift together and connect.',
      terraorbis: 'Plant graph: an infection spreads and the rover detects it.',
      centinel: 'A call audio waveform and a traffic light cycling between continue, verify and hang up.',
      trackmania: 'A car drives along a drawn track.',
    },
    light: { continue: 'continue', verify: 'verify', hang: 'hang up' },
    device: { human: 'HUMAN', ai: 'AI' },
    detected: 'detected',
    trophy: 'Top 3',
  },
} as const;

export type ActStrings = (typeof actStrings)[Lang];

export const accents: Record<string, { accent: string; soft: string; deep: string }> = {
  lumen: { accent: '#F6E3A1', soft: '#FBF1CF', deep: '#C9A956' },
  terraorbis: { accent: '#8EE6A8', soft: '#CFF5DA', deep: '#3E9E6A' },
  centinel: { accent: '#FF7FA8', soft: '#FFD0E0', deep: '#C94E7A' },
  trackmania: { accent: '#8FF0F0', soft: '#CBFBFB', deep: '#2F8FB8' },
};

export const webmSiblings = new Set(['hackdaystec-ev1', 'hackmty-1', 'hackmty-2', 'hackmty-real-3am']);

export function parseCount(value: string) {
  const m = value.match(/^([~≥<>]?)(\d+(?:\.\d+)?)(\s?(?:\+|%|s|dB|GB|h|cm|min)?)$/);
  if (!m) return null;
  const decimals = m[2].includes('.') ? m[2].split('.')[1].length : 0;
  return { prefix: m[1], number: Number(m[2]), suffix: m[3], decimals };
}

export function psnrSeries(act: Act) {
  const group = act.metrics.find((g) => g.items.every((it) => /dB$/.test(it.value)));
  if (!group) return null;
  const points = group.items
    .map((it) => {
      const label = it.label.en;
      const horizon = label.match(/at\s+([\d.]+)\s*s/);
      const base = label.match(/:\s*([\d.]+)\)/);
      if (!horizon || !base) return null;
      return { horizon: Number(horizon[1]), model: parseFloat(it.value), baseline: Number(base[1]) };
    })
    .filter((p): p is { horizon: number; model: number; baseline: number } => p !== null);
  return points.length ? { title: group.title, points } : null;
}

export function lapDuel(act: Act) {
  for (const g of act.metrics) {
    for (const it of g.items) {
      if (!it.note || !/s$/.test(it.value)) continue;
      const human = it.note.en.match(/([\d.]+)\s*s/);
      if (!human) continue;
      const ai = parseFloat(it.value);
      return { ai, human: Number(human[1]), aiLabel: it.value, humanLabel: `${human[1]} s` };
    }
  }
  return null;
}
