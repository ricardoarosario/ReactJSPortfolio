'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  radius: number;
  opacity: number;
  lifetime?: number;
};

const MAX_PARTICLES = 140;
const LINK_DISTANCE = 160;
const POINTER_DISTANCE = 220;

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) return;

    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    const pointer = { x: -1, y: -1 };
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(
        MAX_PARTICLES,
        Math.max(48, Math.round((width * height) / 11000)),
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        velocityX: (Math.random() - 0.5) * 0.55,
        velocityY: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 1.5 + 0.8,
        opacity: Math.random() * 0.35 + 0.3,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        if (!motionPreference.matches) {
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;

          if (particle.x <= 0 || particle.x >= width) {
            particle.velocityX *= -1;
          }
          if (particle.y <= 0 || particle.y >= height) {
            particle.velocityY *= -1;
          }
          if (particle.lifetime !== undefined) {
            particle.lifetime -= 0.008;
          }
        }

        for (
          let nextIndex = index + 1;
          nextIndex < particles.length;
          nextIndex += 1
        ) {
          const nextParticle = particles[nextIndex];
          const distance = Math.hypot(
            particle.x - nextParticle.x,
            particle.y - nextParticle.y,
          );

          if (distance < LINK_DISTANCE) {
            const opacity = (1 - distance / LINK_DISTANCE) * 0.32;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(nextParticle.x, nextParticle.y);
            context.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }

        if (
          !motionPreference.matches &&
          pointer.x >= 0 &&
          Math.hypot(particle.x - pointer.x, particle.y - pointer.y) <
            POINTER_DISTANCE
        ) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(pointer.x, pointer.y);
          context.strokeStyle = 'rgba(0, 217, 255, 0.38)';
          context.lineWidth = 0.8;
          context.stroke();
        }

        const lifetime = particle.lifetime ?? 1;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(34, 211, 238, ${particle.opacity * lifetime})`;
        context.fill();
      }

      if (!motionPreference.matches) {
        particles = particles.filter(
          (particle) => particle.lifetime === undefined || particle.lifetime > 0,
        );
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const updatePointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const clearPointer = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        pointer.x = -1;
        pointer.y = -1;
      }
    };

    const pushParticles = (event: MouseEvent) => {
      if (
        motionPreference.matches ||
        (event.target instanceof Element &&
          event.target.closest('a, button, input, textarea, select'))
      ) {
        return;
      }

      for (let index = 0; index < 4; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.2 + 0.4;
        particles.push({
          x: event.clientX,
          y: event.clientY,
          velocityX: Math.cos(angle) * speed,
          velocityY: Math.sin(angle) * speed,
          radius: Math.random() * 1.4 + 1,
          opacity: 0.8,
          lifetime: 1,
        });
      }
    };

    const updateMotion = () => {
      window.cancelAnimationFrame(animationFrame);
      draw();
    };

    const handleResize = () => {
      resize();
      if (motionPreference.matches) draw();
    };

    const handleVisibilityChange = () => {
      window.cancelAnimationFrame(animationFrame);
      if (document.visibilityState === 'visible') draw();
    };

    resize();
    draw();
    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', updatePointer, { passive: true });
    window.addEventListener('pointerout', clearPointer);
    window.addEventListener('click', pushParticles);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    motionPreference.addEventListener('change', updateMotion);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('pointerout', clearPointer);
      window.removeEventListener('click', pushParticles);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      motionPreference.removeEventListener('change', updateMotion);
    };
  }, []);

  return (
    <div className='particles-background' aria-hidden='true'>
      <canvas ref={canvasRef} />
    </div>
  );
}
