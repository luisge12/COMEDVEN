'use client';

import React, { useEffect, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function CalBooking() {
  const [calLink, setCalLink] = useState<string>('luis-gerardo-gonzalez-0ipyif');
  const [inputLink, setInputLink] = useState<string>('luis-gerardo-gonzalez-0ipyif');
  const [isConfiguring, setIsConfiguring] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Cargar link guardado en localStorage si existe
  useEffect(() => {
    const saved = localStorage.getItem('centro_digestivo_cal_link');
    if (saved) {
      setCalLink(saved);
      setInputLink(saved);
    } else {
      setCalLink('luis-gerardo-gonzalez-0ipyif');
      setInputLink('luis-gerardo-gonzalez-0ipyif');
    }
    setIsLoaded(true);
  }, []);

  // Inicializar UI de Cal.com cuando haya un link válido
  useEffect(() => {
    if (!calLink) return;

    (async function initCal() {
      try {
        const cal = await getCalApi({ namespace: 'citas-digestivas' });
        cal('ui', {
          theme: 'light',
          styles: {
            branding: { brandColor: '#0f4c81' },
          },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      } catch (err) {
        console.error('Error inicializando Cal.com:', err);
      }
    })();
  }, [calLink]);

  const handleSaveLink = (e: React.FormEvent) => {
    e.preventDefault();
    let cleaned = inputLink.trim();
    // Limpiar si el usuario pega la URL completa https://cal.com/usuario
    cleaned = cleaned.replace(/^https?:\/\/(www\.)?cal\.com\//i, '');
    cleaned = cleaned.replace(/^\/+|\/+$/g, '');

    if (cleaned) {
      setCalLink(cleaned);
      localStorage.setItem('centro_digestivo_cal_link', cleaned);
      setIsConfiguring(false);
    }
  };

  const handleClear = () => {
    setCalLink('');
    setInputLink('');
    localStorage.removeItem('centro_digestivo_cal_link');
  };

  if (!isLoaded) return null;

  return (
    <div style={{ width: '100%' }}>
      {/* Barra superior de estado / configuración */}
      <div
        style={{
          background: 'var(--color-bg-surface)',
          padding: '1.25rem 1.5rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--color-accent)',
            }}
          >
            Agenda Médica en la Nube
          </span>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', margin: '0.2rem 0' }}>
            Agendamiento Automatizado Cal.com
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
            {calLink ? (
              <span>
                Conectado a: <strong>cal.com/{calLink}</strong>
              </span>
            ) : (
              'Requiere vincular tu usuario gratuito de Cal.com'
            )}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {calLink && (
            <button
              type="button"
              onClick={handleClear}
              style={{
                padding: '0.5rem 0.85rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-danger)',
                background: '#fee2e2',
                border: '1px solid #fecaca',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
              }}
            >
              Desconectar
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsConfiguring(!isConfiguring)}
            style={{
              padding: '0.5rem 0.9rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              background: 'var(--color-primary-light)',
              border: '1px solid #bfdbfe',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
            }}
          >
            ⚙️ {isConfiguring ? 'Cerrar' : calLink ? 'Cambiar Enlace' : 'Conectar Mi Cuenta'}
          </button>
        </div>
      </div>

      {/* Formulario de conexión si está en modo configuración o si aún no hay enlace */}
      {(isConfiguring || !calLink) && (
        <div
          style={{
            background: '#ffffff',
            border: '2px dashed var(--color-primary)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔗</div>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              Conecta tu Cuenta Gratuita de Cal.com
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Para que el calendario muestre tus días y horas disponibles reales (y no dé error 404), debes ingresar tu usuario o evento registrado en Cal.com.
            </p>

            {/* Pasos explicativos */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                textAlign: 'left',
                marginBottom: '1.75rem',
              }}
            >
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.85rem' }}>Paso 1</span>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-main)', margin: '0.25rem 0 0' }}>
                  Crea tu cuenta gratis en{' '}
                  <a href="https://cal.com/signup" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'underline' }}>
                    cal.com/signup ↗
                  </a>
                </p>
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.85rem' }}>Paso 2</span>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-main)', margin: '0.25rem 0 0' }}>
                  Conecta tu Google Calendar y copia tu usuario (ej: <code>mi-clinica</code>).
                </p>
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.85rem' }}>Paso 3</span>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-main)', margin: '0.25rem 0 0' }}>
                  Pega tu enlace aquí abajo y haz clic en <strong>Guardar</strong>.
                </p>
              </div>
            </div>

            {/* Input para guardar el enlace */}
            <form onSubmit={handleSaveLink} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', width: '100%', maxWidth: '450px', alignItems: 'center' }}>
                <span
                  style={{
                    background: '#f1f5f9',
                    border: '1px solid var(--color-border)',
                    borderRight: 'none',
                    padding: '0.75rem 0.9rem',
                    borderRadius: '8px 0 0 8px',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-muted)',
                    fontWeight: 500,
                  }}
                >
                  cal.com/
                </span>
                <input
                  type="text"
                  value={inputLink}
                  onChange={(e) => setInputLink(e.target.value)}
                  placeholder="tu-usuario o tu-usuario/evento"
                  required
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0 8px 8px 0',
                    outline: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '0.75rem 2rem', fontWeight: 600, fontSize: '0.95rem' }}
              >
                ✓ Guardar y Cargar Calendario
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Widget Interactivo de Cal.com si hay un enlace configurado */}
      {calLink && (
        <div
          style={{
            width: '100%',
            minHeight: '700px',
            background: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
          }}
        >
          <Cal
            key={calLink}
            namespace="citas-digestivas"
            calLink={calLink}
            style={{ width: '100%', height: '100%', minHeight: '700px', overflow: 'scroll' }}
            config={{ layout: 'month_view', theme: 'light' }}
          />
        </div>
      )}

      {/* Ventajas */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '1.5rem',
        }}
      >
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>📅</div>
          <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary-dark)' }}>Sincronización en Vivo</strong>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '0.25rem 0 0' }}>Con Google Calendar y Outlook de los médicos.</p>
        </div>
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>✉️</div>
          <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary-dark)' }}>Confirmación Instantánea</strong>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '0.25rem 0 0' }}>Invitación por correo con enlace para reagendar.</p>
        </div>
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🔔</div>
          <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary-dark)' }}>Recordatorios Automáticos</strong>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '0.25rem 0 0' }}>Notificaciones previas a la fecha para evitar inasistencias.</p>
        </div>
      </div>
    </div>
  );
}
