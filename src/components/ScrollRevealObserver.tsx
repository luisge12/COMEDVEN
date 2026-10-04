'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealObserver() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Barra de progreso superior
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Observador de intersección para animaciones de scroll
  useEffect(() => {
    // Si el usuario prefiere reducir movimiento, revelamos todo de inmediato
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Dejar de observar una vez revelado para máxima fluidez y performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Se activa un poco antes de que toque el fondo de la pantalla
        threshold: 0.12,
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal'
      );

      elements.forEach((el) => {
        if (prefersReducedMotion) {
          el.classList.add('revealed');
        } else if (!el.classList.contains('revealed')) {
          observer.observe(el);
        }
      });
    };

    // Observar elementos iniciales y tras un leve delay para hidratación de componentes
    observeElements();
    const timeoutId = setTimeout(observeElements, 100);

    // Observar si se añaden nuevos elementos al DOM
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return (
    <>
      {/* Barra de progreso de lectura ultra-fina en el tope */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          zIndex: 9999,
          pointerEvents: 'none',
          backgroundColor: 'transparent',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 50%, var(--color-secondary) 100%)',
            boxShadow: '0 0 10px rgba(0, 168, 150, 0.7)',
            transition: 'width 0.12s ease-out',
          }}
        />
      </div>
    </>
  );
}
