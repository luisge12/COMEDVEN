'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export interface SlideImage {
  src: string;
  alt: string;
  caption?: string;
}

interface HeroSliderProps {
  images?: SlideImage[];
  intervalMs?: number;
}

const DEFAULT_IMAGES: SlideImage[] = [
  {
    src: '/HERO2.jpeg',
    alt: 'Consultorio Médico de Especialidades Digestivas'
  },
  {
    src: '/HERO4.jpeg',
    alt: 'Recepción y Sala de Espera del Centro de Especialidades Digestivas'
  },
  {
    src: '/HERO3.jpeg',
    alt: 'Unidad de Endoscopia y Procedimientos Diagnósticos'
  }
];

export default function HeroSlider({
  images = DEFAULT_IMAGES,
  intervalMs = 4500
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPaused, intervalMs, nextSlide, images.length]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: '0 24px 50px rgba(15, 76, 129, 0.18)',
        border: '4px solid #ffffff',
        background: '#0f172a',
        aspectRatio: '4/3',
        position: 'relative',
        userSelect: 'none'
      }}
    >
      {/* Slides con Crossfade suave */}
      {images.map((image, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={image.src}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1)' : 'scale(1.04)',
              transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 1.4s ease-out',
              pointerEvents: isActive ? 'auto' : 'none',
              zIndex: isActive ? 1 : 0
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={idx === 0}
              loading={idx === 0 ? "eager" : "lazy"}
              quality={92}
              sizes="(max-width: 900px) 100vw, 600px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
        );
      })}

      {/* Flechas de Navegación Lateral */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Imagen anterior"
            style={{
              position: 'absolute',
              top: '50%',
              left: '12px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(6px)',
              border: 'none',
              color: 'var(--color-primary-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            aria-label="Siguiente imagen"
            style={{
              position: 'absolute',
              top: '50%',
              right: '12px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(6px)',
              border: 'none',
              color: 'var(--color-primary-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ›
          </button>

          {/* Indicadores / Dots inferiores */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(15, 23, 42, 0.45)',
              backdropFilter: 'blur(8px)'
            }}
          >
            {images.map((_, dotIdx) => {
              const isDotActive = dotIdx === currentIndex;
              return (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Ir a la diapositiva ${dotIdx + 1}`}
                  style={{
                    width: isDotActive ? '22px' : '8px',
                    height: '8px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isDotActive ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.6)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0
                  }}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
