'use client';

import Image from 'next/image';
import { getActiveSponsors, SPONSOR_CONTACT_INFO, SponsorBanner } from '@/data/banners';

interface Props {
  showHeader?: boolean;
}

export default function SponsorBanners({ showHeader = false }: Props) {
  const activeBanners = getActiveSponsors(3);

  const whatsappUrl = `https://wa.me/${SPONSOR_CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    SPONSOR_CONTACT_INFO.whatsappMessage
  )}`;
  const emailUrl = `mailto:${SPONSOR_CONTACT_INFO.email}?subject=${encodeURIComponent(
    SPONSOR_CONTACT_INFO.asuntoEmail
  )}`;

  // =========================================================================
  // CASO 1: NO HAY NINGÚN PATROCINADOR ACTIVO (LISTA VACÍA O TODOS EN activo: false)
  // Muestra un bloque profesional de captación para invitar a marcas a patrocinar.
  // =========================================================================
  if (activeBanners.length === 0) {
    return (
      <div
        className="card reveal-up"
        style={{
          margin: '1.5rem 0 2.5rem 0',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-md)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div style={{ padding: '3rem 2rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          {/* Badge de Oportunidad */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              backgroundColor: 'var(--color-primary-light)',
              padding: '0.35rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1.25rem',
              border: '1px solid rgba(15, 76, 129, 0.15)'
            }}
          >
            📢 Espacio Publicitario Disponible
          </span>

          <h3
            style={{
              fontSize: '1.75rem',
              color: 'var(--color-primary-dark)',
              fontFamily: 'var(--font-family-heading)',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '1rem'
            }}
          >
            Aquí puedes promocionar tu marca con nosotros
          </h3>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}
          >
            Ofrecemos un espacio ético y de máxima visibilidad para <strong>laboratorios farmacéuticos</strong>,{' '}
            <strong>suplementación clínica</strong>, <strong>nutrición avanzada</strong> y{' '}
            <strong>tecnología médica</strong>. Conecta con médicos especialistas y miles de pacientes con
            patologías digestivas que consultan nuestra plataforma día a día.
          </p>

          {/* Tres pilares de valor */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
              textAlign: 'left'
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--color-bg-body)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎯</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
                Audiencia Calificada
              </h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Pacientes en búsqueda activa de soluciones y médicos en ejercicio clínico.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-bg-body)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔬</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
                Respaldo Institucional
              </h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Alianzas de prestigio bajo el marco de rigor del Centro de Especialidades Digestivas.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-bg-body)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📍</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
                Presencia Destacada
              </h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Ubicación preferencial en el portal principal y en contenidos especializados.
              </p>
            </div>
          </div>

          {/* Botones de Acción Inmediata */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                backgroundColor: 'var(--color-whatsapp)',
                borderColor: 'var(--color-whatsapp)',
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.6rem',
                fontWeight: 600
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.18-.553-1.638-.677-2.704-2.338-2.787-2.449-.083-.111-.664-.883-.664-1.684 0-.802.42-1.196.57-1.356.15-.16.327-.2.436-.2.11 0 .22 0 .316.005.102.006.239-.039.373.285.144.35.49 1.195.534 1.284.044.089.073.193.013.311-.06.119-.089.193-.177.297-.089.104-.187.232-.267.311-.089.089-.182.185-.078.363.104.178.463.764.993 1.236.683.609 1.26.797 1.438.886.178.089.282.074.386-.045.104-.119.444-.519.563-.697.119-.178.238-.148.4-.089.162.059 1.028.485 1.205.574.177.089.296.133.34.208.044.074.044.43-.1 1.235z" />
              </svg>
              Promocionar mi Marca vía WhatsApp
            </a>

            <a
              href={emailUrl}
              className="btn btn-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.6rem',
                fontWeight: 600
              }}
            >
              ✉️ Solicitar Tarifas por Correo
            </a>
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>
            Atención comercial directa:{' '}
            <strong style={{ color: 'var(--color-primary-dark)' }}>{SPONSOR_CONTACT_INFO.telefono}</strong> &bull;{' '}
            <span>{SPONSOR_CONTACT_INFO.email}</span>
          </p>
        </div>
      </div>
    );
  }

  // =========================================================================
  // CASO 2: HAY PATROCINADORES ACTIVOS (1, 2 O 3)
  // Si hay menos de 3 patrocinadores, completa la cuadrícula con una tarjeta
  // de invitación para que siempre haya armonía visual y se atraigan nuevas marcas.
  // =========================================================================
  const showAvailableSlot = activeBanners.length > 0 && activeBanners.length < 3;

  return (
    <div style={{ margin: '1rem 0 2rem 0' }}>
      {showHeader && (
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#94a3b8'
            }}
          >
            Marcas Patrocinantes & Alianzas Estratégicas del Sector Salud
          </span>
        </div>
      )}

      <div className="grid-3" style={{ gap: '1.5rem', alignItems: 'stretch' }}>
        {activeBanners.map((banner: SponsorBanner, idx: number) => (
          <div
            key={banner.id}
            className={`card reveal-up delay-${((idx % 3) + 1) * 100}`}
            style={{
              backgroundColor: '#ffffff',
              padding: '1.75rem 1.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                backgroundColor: 'var(--color-accent)'
              }}
            />

            {/* Espacio para Imagen / Banner Publicitario de la Marca */}
            <div
              style={{
                width: '100%',
                height: '170px',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                marginBottom: '1.25rem',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {banner.imagen ? (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    src={banner.imagen}
                    alt={banner.marca}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    quality={92}
                    style={{
                      objectFit: 'contain',
                      padding: '0.5rem',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.8rem',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <span style={{ fontSize: '1.75rem' }}>🖼️</span>
                  <span>Espacio para Imagen / Logo</span>
                </div>
              )}
            </div>

            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                  backgroundColor: 'var(--color-primary-light)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '0.85rem'
                }}
              >
                {banner.badge}
              </span>
              <h4
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--color-primary-dark)',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-family-heading)'
                }}
              >
                {banner.marca}
              </h4>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.55',
                  marginBottom: '1.25rem'
                }}
              >
                {banner.descripcion}
              </p>
            </div>

            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}
              >
                &ldquo;{banner.tagline}&rdquo;
              </span>
              <a
                href={banner.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '0.825rem', padding: '0.5rem 1rem', width: '100%' }}
              >
                Conocer Más ↗
              </a>
            </div>
          </div>
        ))}

        {/* Tarjeta de invitación complementaria si hay 1 o 2 patrocinadores */}
        {showAvailableSlot && (
          <div
            className="card"
            style={{
              backgroundColor: '#fafbfc',
              border: '2px dashed var(--color-border)',
              padding: '1.75rem 1.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '170px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(15, 76, 129, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem'
              }}
            >
              <span style={{ fontSize: '2.5rem' }}>✨</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                Espacio Disponible
              </span>
            </div>

            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#059669',
                  backgroundColor: '#ecfdf5',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '0.85rem'
                }}
              >
                Oportunidad Comercial
              </span>
              <h4
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--color-primary-dark)',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-family-heading)'
                }}
              >
                Tu Marca Aquí
              </h4>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.55',
                  marginBottom: '1.25rem'
                }}
              >
                Promociona tu laboratorio, suplementación o equipamiento médico ante nuestra comunidad de pacientes y especialistas.
              </p>
            </div>

            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  color: '#64748b',
                  marginBottom: '1rem'
                }}
              >
                &ldquo;Visibilidad estratégica en salud digestiva&rdquo;
              </span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  fontSize: '0.825rem',
                  padding: '0.5rem 1rem',
                  width: '100%',
                  backgroundColor: 'var(--color-whatsapp)',
                  borderColor: 'var(--color-whatsapp)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem'
                }}
              >
                Promocionar Aquí ↗
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Nota inferior discreta para nuevos anunciantes */}
      <div
        style={{
          marginTop: '1.5rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'var(--color-text-muted)'
        }}
      >
        ¿Representas a una marca o laboratorio del área médica?{' '}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--color-primary)',
            fontWeight: 600,
            textDecoration: 'underline'
          }}
        >
          Contáctanos para promocionar tu marca con nosotros &rarr;
        </a>
      </div>
    </div>
  );
}
