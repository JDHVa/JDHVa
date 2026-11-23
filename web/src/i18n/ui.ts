export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ownerName = {
  full: 'Jesús Daniel Hernández Valero',
  lines: ['Jesús Daniel', 'Hernández Valero'],
  monogram: 'JDHVA',
} as const;

export const quote = {
  before: 'We are what we repeatedly do.',
  oldWord: 'Excellence',
  newWord: 'Larping',
  after: ', then, is not an act, but a habit.',
} as const;

export const ui = {
  es: {
    'meta.title': 'Jesús Daniel Hernández Valero · IA, robótica y automatización',
    'meta.description':
      'Portafolio de Jesús Daniel Hernández Valero: entusiasta de la ciencia que construye proyectos de IA, robótica y automatización en su tiempo libre.',
    'hero.label': 'ACTO 0 · APERTURA',
    'hero.tagline': 'Entusiasta de la ciencia y desarrollador de proyectos en mi tiempo libre.',
    'hero.roles': ['IA', 'Robótica', 'Automatización'],
    'hero.rolesLabel': 'Áreas de trabajo',
    'hero.cta': 'Ver proyectos',
    'hero.attribution': 'Aristóteles (probablemente)',
    'hero.replay': 'Repetir la cita',
    'hero.replayHint': 'toca para repetir',
    'hero.scroll': 'Bajar a proyectos',
    'nav.home': 'Inicio, Jesús Daniel Hernández Valero',
    'nav.lang': 'Idioma',
  },
  en: {
    'meta.title': 'Jesús Daniel Hernández Valero · AI, robotics and automation',
    'meta.description':
      'Portfolio of Jesús Daniel Hernández Valero: science enthusiast building AI, robotics and automation projects in his free time.',
    'hero.label': 'ACT 0 · OPENING',
    'hero.tagline': 'Science enthusiast and builder of projects in my free time.',
    'hero.roles': ['AI', 'Robotics', 'Automation'],
    'hero.rolesLabel': 'Areas of work',
    'hero.cta': 'See projects',
    'hero.attribution': 'Aristotle (probably)',
    'hero.replay': 'Replay the quote',
    'hero.replayHint': 'tap to replay',
    'hero.scroll': 'Scroll to projects',
    'nav.home': 'Home, Jesús Daniel Hernández Valero',
    'nav.lang': 'Language',
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
