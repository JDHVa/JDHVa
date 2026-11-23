import type { Lang } from '../i18n/ui';
import { acts, minorProjects, type ProjectId } from './content';

export const sparklePath = 'M12 0C12.9 7.4 16.6 11.1 24 12C16.6 12.9 12.9 16.6 12 24C11.1 16.6 7.4 12.9 0 12C7.4 11.1 11.1 7.4 12 0Z';

export const projectIndex: { id: ProjectId; name: string; href: string }[] = [
  ...acts.map((a) => ({ id: a.id, name: a.name, href: `#acto-${a.id}` })),
  ...minorProjects.map((m) => ({ id: m.id, name: m.name, href: `#minor-${m.id}` })),
];

export const githubReposUrl = 'https://github.com/JDHVa?tab=repositories';

export const sectionText = {
  es: {
    prologue: {
      label: 'PRÓLOGO',
      title: 'Sobre mí',
      photoAlt: 'Jesús Daniel con los brazos abiertos al atardecer',
      photoCaption: 'En escena',
      bio: [
        'Me muevo entre la inteligencia artificial, la robótica y la automatización.',
        'Hoy soy AI Intern Developer en Fourier, donde trabajo en automatización, desarrollo full-stack y flujos con n8n.',
        'Fundé Lumen, programo como Lead Programmer en Iron Lion 4977 (FRC) y quedé Top 3 en HackMTY 2026.',
      ],
      nowLabel: 'Ahora mismo',
      now: 'Entrenando un world model en TrackMania',
      statsLabel: 'Datos clave',
      studying: 'Estudio',
      learning: 'Aprendiendo',
    },
    minor: {
      label: 'ENTREACTO',
      title: 'Otros proyectos',
      repo: 'Repositorio',
      video: 'Video de demostración de PI-Gem',
      all: 'Ver todos en GitHub (49 repos)',
    },
    journey: {
      label: 'TRAYECTORIA',
      title: 'Dónde he estado',
      current: 'En cartelera',
      education: 'Escuela',
    },
    repertoire: {
      label: 'REPERTORIO',
      title: 'Lo que sé hacer',
      hint: 'Toca una habilidad para ver en qué proyectos la usé.',
      used: 'Usada en',
      none: 'Experiencia / práctica',
      legend: 'Proyectos',
      pick: 'Nada seleccionado todavía',
    },
    ovations: {
      label: 'OVACIONES',
      title: 'Logros',
      more: 'Más constancias',
      also: 'También',
      secondary: 'Secundaria',
      prep: 'Preparatoria',
      certificate: 'Constancia',
      close: 'Cerrar',
      prev: 'Anterior',
      next: 'Siguiente',
      open: 'Ampliar',
    },
    backstage: {
      label: 'TRAS BAMBALINAS',
      title: 'Fuera del escenario',
      languages: 'Idiomas',
      streak: 'Racha',
      interests: 'Me gusta',
      of: 'de',
    },
    finale: {
      label: 'TELÓN FINAL',
      title: 'Hablemos',
      looking: 'Estoy buscando',
      next: 'Siguiente paso',
      lead: 'Si algo de lo que viste te dio ideas, escríbeme.',
      copy: 'Copiar',
      copied: 'Copiado',
      write: 'Escribir un correo',
      socials: 'Redes',
      cv: 'CV · pronto',
      footer: 'Hecho con Astro, GSAP y demasiado café · © 2026 Jesús Daniel Hernández Valero',
      egg: 'Larping',
    },
  },
  en: {
    prologue: {
      label: 'PROLOGUE',
      title: 'About me',
      photoAlt: 'Jesús Daniel with open arms at sunset',
      photoCaption: 'On stage',
      bio: [
        'I move between artificial intelligence, robotics and automation.',
        'Right now I am an AI Intern Developer at Fourier, working on automation, full-stack development and n8n workflows.',
        'I founded Lumen, I am Lead Programmer at Iron Lion 4977 (FRC) and I placed Top 3 at HackMTY 2026.',
      ],
      nowLabel: 'Right now',
      now: 'Training a world model in TrackMania',
      statsLabel: 'Key numbers',
      studying: 'Studying',
      learning: 'Learning',
    },
    minor: {
      label: 'INTERMISSION',
      title: 'Other projects',
      repo: 'Repository',
      video: 'PI-Gem demo video',
      all: 'See all on GitHub (49 repos)',
    },
    journey: {
      label: 'JOURNEY',
      title: 'Where I’ve been',
      current: 'Now showing',
      education: 'Education',
    },
    repertoire: {
      label: 'REPERTOIRE',
      title: 'What I can do',
      hint: 'Tap a skill to see which projects used it.',
      used: 'Used in',
      none: 'Experience / practice',
      legend: 'Projects',
      pick: 'Nothing selected yet',
    },
    ovations: {
      label: 'OVATIONS',
      title: 'Achievements',
      more: 'More certificates',
      also: 'Also',
      secondary: 'Middle school',
      prep: 'High school',
      certificate: 'Certificate',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
      open: 'Enlarge',
    },
    backstage: {
      label: 'BACKSTAGE',
      title: 'Off stage',
      languages: 'Languages',
      streak: 'Streak',
      interests: 'Into',
      of: 'of',
    },
    finale: {
      label: 'FINAL CURTAIN',
      title: 'Let’s talk',
      looking: 'I’m looking for',
      next: 'Next step',
      lead: 'If anything you saw sparked an idea, write to me.',
      copy: 'Copy',
      copied: 'Copied',
      write: 'Write an email',
      socials: 'Social links',
      cv: 'CV · soon',
      footer: 'Made with Astro, GSAP and too much coffee · © 2026 Jesús Daniel Hernández Valero',
      egg: 'Larping',
    },
  },
} satisfies Record<Lang, unknown>;

export const levelScore: Record<string, number> = {
  Nativo: 6,
  'B2 aprox.': 4,
  Básico: 2,
  A1: 1,
};

export function st(lang: Lang) {
  return sectionText[lang];
}
