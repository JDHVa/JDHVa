import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function reveal(root: Element) {
  if (reduceMotion()) return;
  const items = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
  const seen = new Set<HTMLElement>();
  ScrollTrigger.batch(items, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) => {
      const fresh = (batch as HTMLElement[]).filter((el) => !seen.has(el));
      fresh.forEach((el) => seen.add(el));
      gsap.to(fresh, { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, duration: 0.8, ease: 'back.out(1.3)', stagger: 0.09, overwrite: true });
    },
  });
}

export { gsap, ScrollTrigger };
