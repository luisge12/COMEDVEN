import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto & Ubicación | Centro de Endoscopias y Especialidades Digestivas',
  description: 'Ubicación en Policlínica La Arboleda, teléfonos directos, WhatsApp de citas y correos de atención al paciente.',
};

export default function ContactoPage() {
  return (
    <div className="section">
      <div className="container">
        
        <div className="section-title-wrap">
          <span className="section-tag">Canales Oficiales</span>
          <h1 className="section-title">¿Dónde Estamos y Cómo Contactarnos?</h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.1rem' }}>
            Estamos ubicados en las instalaciones de la Policlínica La Arboleda en San Bernardino, Caracas.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'start' }}>
          
          {/* Información de Ubicación y Contacto */}
          <div className="card" style={{ borderTop: '4px solid var(--color-primary)' }}>
            <h2 style={{ color: 'var(--color-primary)', fontSize: '1.4rem', marginBottom: '1.25rem', fontFamily: 'var(--font-family-heading)' }}>
              Centro de Endoscopias y Especialidades Digestivas
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.95rem' }}>
              <div>
                <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.25rem' }}>
                  ¿Dónde Estamos? (Dirección Física):
                </strong>
                <p style={{ color: 'var(--color-text-main)', lineHeight: '1.6' }}>
                  Policlínica La Arboleda, Centro de Endoscopias y Especialidades Digestivas, Piso 2, Consultorio 211, San Bernardino. Caracas 1061, Distrito Capital.
                </p>
                <div style={{ marginTop: '0.5rem' }}>
                  <a
                    href="https://maps.app.goo.gl/TgtAUNNr5yodezkW6?g_st=ipc"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.875rem' }}
                  >
                    Abrir ubicación en Google Maps →
                  </a>
                </div>
              </div>

              <div>
                <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.25rem' }}>
                  Líneas de Atención Móvil & WhatsApp:
                </strong>
                <p style={{ color: 'var(--color-text-main)', lineHeight: '1.6' }}>
                  0412-7542400 | 0412-3219381 | 0424-3050121
                </p>
              </div>

              <div>
                <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.25rem' }}>
                  Central Telefónica Local:
                </strong>
                <p style={{ color: 'var(--color-text-main)' }}>
                  0212-5550340 / 0212-5550211
                </p>
              </div>

              <div>
                <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.25rem' }}>
                  Correos Electrónicos Institucionales:
                </strong>
                <p style={{ color: 'var(--color-text-main)' }}>
                  info.comedven@gmail.com | comedven@gmail.com
                </p>
              </div>

              <div>
                <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.25rem' }}>
                  Portal Web & Redes Sociales:
                </strong>
                <p style={{ color: 'var(--color-text-main)' }}>
                  Web: <strong>www.tuendoscopia.com.ve</strong> <br />
                  Instagram: <strong>@tuendoscopia</strong>
                </p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a
                href="https://wa.me/584127542400"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{ width: '100%' }}
              >
                Chatear por WhatsApp Directo (0412-7542400)
              </a>
            </div>
          </div>

          {/* Formulario Rápido de Mensaje Directo */}
          <div className="card" style={{ borderTop: '4px solid var(--color-accent)' }}>
            <h2 style={{ color: 'var(--color-primary)', fontSize: '1.4rem', marginBottom: '1.25rem', fontFamily: 'var(--font-family-heading)' }}>
              Envíanos una Consulta
            </h2>

            <form action="https://wa.me/584127542400" method="GET" target="_blank">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                    Nombre y Apellido:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Ana Martínez"
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                    Teléfono o WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 0412 1234567"
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                    Mensaje o Consulta sobre Procedimientos:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Escribe tu consulta sobre endoscopias, consultas, ultrasonido o cirugías..."
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                  Enviar Consulta a WhatsApp
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
