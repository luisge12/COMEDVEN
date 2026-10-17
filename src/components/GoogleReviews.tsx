'use client';

import React from 'react';

interface Review {
  id: string;
  nombre: string;
  iniciales: string;
  avatarColor: string;
  fecha: string;
  rating: number;
  comentario: string;
  procedimiento?: string;
}

const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    nombre: 'Mariana Corrales',
    iniciales: 'MC',
    avatarColor: '#0284c7',
    fecha: 'Hace 2 semanas',
    rating: 5,
    procedimiento: 'Endoscopia Digestiva & Colonoscopia',
    comentario: 'Excelente experiencia. Iba con mucho nerviosismo por el procedimiento de colonoscopia, pero el equipo médico y el personal de enfermería me brindaron una tranquilidad absoluta. La sedación fue perfecta, no sentí absolutamente nada y el informe fue muy claro y detallado.'
  },
  {
    id: '2',
    nombre: 'Carlos E. Mendoza',
    iniciales: 'CM',
    avatarColor: '#0f766e',
    fecha: 'Hace 1 mes',
    rating: 5,
    procedimiento: 'Consulta Especializada & Tratamiento de Reflujo',
    comentario: 'Instalaciones impecables en la Policlínica La Arboleda. Los doctores se toman el tiempo necesario para escuchar tus síntomas y explicar el plan de tratamiento con calma y empatía. Muy puntuales con las citas y la atención es de primer nivel.'
  },
  {
    id: '3',
    nombre: 'Elena Rodríguez V.',
    iniciales: 'ER',
    avatarColor: '#7c3aed',
    fecha: 'Hace 1 mes',
    rating: 5,
    procedimiento: 'Manometría & Fisiología Anorrectal',
    comentario: 'Profesionales altamente capacitados con tecnología de última generación. Me explicaron cada paso del estudio con muchísima delicadeza y respeto. Definitivamente el mejor centro para atender la salud digestiva en Caracas.'
  }
];

export default function GoogleReviews() {
  const googleMapsUrl = 'https://maps.app.goo.gl/TgtAUNNr5yodezkW6?g_st=ipc';

  return (
    <section id="testimonios" className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)', scrollMarginTop: '85px' }}>
      <div className="container">
        {/* Encabezado con Calificación Google */}
        <div className="section-title-wrap reveal-up" style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: 'rgba(66, 133, 244, 0.08)',
            border: '1px solid rgba(66, 133, 244, 0.25)',
            padding: '0.4rem 1rem',
            borderRadius: 'var(--radius-full)',
            marginBottom: '1rem'
          }}>
            {/* Logotipo Oficial Google (SVG) */}
            <svg width="18" height="18" viewBox="0 0 24 24" style={{ display: 'block' }}>
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>
              Reseñas Verificadas en Google Maps
            </span>
          </div>

          <h2 className="section-title">La Confianza de Nuestros Pacientes</h2>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginTop: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                4.9
              </span>
              <div style={{ display: 'flex', color: '#f59e0b', fontSize: '1.25rem' }}>
                {'★★★★★'}
              </div>
            </div>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
              | Excelencia médica y calidad humana comprobada
            </span>
          </div>
        </div>

        {/* Tarjetas de Reseñas */}
        <div className="grid-3" style={{ gap: '1.75rem', marginBottom: '3.5rem' }}>
          {REVIEWS_DATA.map((rev, idx) => (
            <div
              key={rev.id}
              className={`card reveal-up delay-${(idx + 1) * 100}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                backgroundColor: 'var(--color-bg-body)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                position: 'relative'
              }}
            >
              <div>
                {/* Cabecera del Autor */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: rev.avatarColor,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                      {rev.iniciales}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-dark)', margin: 0 }}>
                        {rev.nombre}
                      </h4>
                      <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                        {rev.fecha}
                      </span>
                    </div>
                  </div>

                  {/* Icono Google pequeño */}
                  <div title="Reseña verificada en Google" style={{ opacity: 0.85 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Estrellas */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <div style={{ color: '#f59e0b', fontSize: '1rem', letterSpacing: '2px' }}>
                    {'★'.repeat(rev.rating)}
                  </div>
                  {rev.procedimiento && (
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                      backgroundColor: 'rgba(0, 168, 150, 0.1)',
                      padding: '0.15rem 0.55rem',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      {rev.procedimiento}
                    </span>
                  )}
                </div>

                {/* Texto del testimonio */}
                <p style={{
                  fontSize: '0.925rem',
                  lineHeight: '1.65',
                  color: 'var(--color-text-main)',
                  fontStyle: 'italic',
                  marginBottom: '1rem'
                }}>
                  &ldquo;{rev.comentario}&rdquo;
                </p>
              </div>

              {/* Pie de la tarjeta */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
                color: '#64748b',
                paddingTop: '0.75rem',
                borderTop: '1px dashed var(--color-border)'
              }}>
                <span style={{ color: '#22c55e', fontWeight: 700 }}>✓</span> Paciente verificado
              </div>
            </div>
          ))}
        </div>

        {/* Llamado a la acción con enlace directo a Google Maps */}
        <div className="reveal-up" style={{
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '2rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)',
          maxWidth: '720px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 600, marginBottom: '1.25rem' }}>
            ¿Has tenido una consulta o procedimiento con nuestro equipo?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1.5rem',
                fontSize: '0.9rem',
                backgroundColor: '#ffffff'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Ver todas las reseñas en Google</span>
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1.5rem',
                fontSize: '0.9rem'
              }}
            >
              <span>⭐ Dejar una Reseña en Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
