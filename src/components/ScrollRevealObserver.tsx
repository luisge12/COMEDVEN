'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealObserver() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Barra de progreso superior interactiva
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

  // 2. Motor de Scroll Reveal para cada componente de la web
  useEffect(() => {
    // Configuración del observador de intersección
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Dejar de observar una vez revelado
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px', // Se activa en cuanto el componente asoma en la pantalla
        threshold: 0.08,
      }
    );

    const scanAndObserve = () => {
      // 1. Elementos con clases explícitas de reveal
      const explicitElements = document.querySelectorAll(
        '.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal'
      );

      // 2. Además aplicamos automáticamente a componentes clave (tarjetas, títulos de sección, etc.)
      const autoElements = document.querySelectorAll(
        'main .card, main .section-title-wrap, main article, main .dual-view-card'
      );

      explicitElements.forEach((el) => {
        if (!el.classList.contains('revealed')) {
          observer.observe(el);
        }
      });

      autoElements.forEach((el, index) => {
        // Si no tiene clase de animación explícita, le asignamos reveal-up
        if (
          !el.classList.contains('reveal-up') &&
          !el.classList.contains('reveal-left') &&
          !el.classList.contains('reveal-right') &&
          !el.classList.contains('reveal-scale') &&
          !el.classList.contains('reveal')
        ) {
          el.classList.add('reveal-up');
          // Escalonamiento automático para elementos en cuadrícula
          const delayClass = `delay-${((index % 4) + 1) * 100}`;
          el.classList.add(delayClass);
        }

        if (!el.classList.contains('revealed')) {
          observer.observe(el);
        }
      });

      // Si algún elemento ya está dentro de la pantalla visible inicial al cargar, revelarlo suavemente
      const allElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal');
      allElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
          setTimeout(() => {
            el.classList.add('revealed');
          }, 60);
        }
      });
    };

    // Ejecutar escaneo inicial
    scanAndObserve();
    const timer1 = setTimeout(scanAndObserve, 80);
    const timer2 = setTimeout(scanAndObserve, 350);

    // Escuchar mutaciones de DOM en navegaciones
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 99999,
        pointerEvents: 'none',
        backgroundColor: 'transparent',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 50%, var(--color-secondary) 100%)',
          boxShadow: '0 0 12px rgba(0, 168, 150, 0.8)',
          transition: 'width 0.1s ease-out',
        }}
      />
    </div>
  );
}
