'use client';

import { useEffect, type ReactNode } from 'react';

export default function ScrollReveal({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.dataset.revealed = 'true';
      });
      return;
    }

    root.dataset.motion = 'enabled';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.dataset.revealed = 'true';
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -36px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      delete root.dataset.motion;
    };
  }, []);

  return children;
}
