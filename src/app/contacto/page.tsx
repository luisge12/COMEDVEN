import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto & Ubicación | Centro de Especialidades Digestivas',
  description: 'Canales directos de atención médica: ubicación, teléfonos, WhatsApp y horario de consultas.',
};

export default function ContactoPage() {
  return (
    <div className="section">
      <div className="container">
        
        <div className="section-title-wrap">
          <span className="section-tag">Canales Oficiales</span>
          <h1 className="section-title">Contáctanos y Ubícanos</h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.1rem' }}>
            Estamos a tu disposición para orientarte sobre procedimientos, citas y estudios especializados.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'start' }}>
          
          {/* Información del Centro */}
          <div className="card" style={{ borderTop: '4px solid var(--color-primary)' }}>
            <h2 style={{ color: 'var(--color-primary)', fontSize: '1.4rem', marginBottom: '1.25rem' }}>
              Información de la Sede
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.95rem' }}>
              <div>
                <strong style={{ color: 'var(--color-primary-dark)', display: 'block' }}>Dirección Física:</strong>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  Centro Médico Especializado, Torre B, Piso 4, Consultorios 4-B y 4-C.
                </p>
              </div>

              <div>
                <strong style={{ color: 'var(--color-primary-dark)', display: 'block' }}>Central Telefónica:</strong>
                <p style={{ color: 'var(--color-text-muted)' }}>+58 (000) 000-0000 / +58 (000) 111-2222</p>
              </div>

              <div>
                <strong style={{ color: 'var(--color-primary-dark)', display: 'block' }}>WhatsApp Coordinación Médica:</strong>
                <p style={{ color: 'var(--color-text-muted)' }}>+58 (412) 000-0000 (Atención rápida)</p>
              </div>

              <div>
                <strong style={{ color: 'var(--color-primary-dark)', display: 'block' }}>Correo Institucional:</strong>
                <p style={{ color: 'var(--color-text-muted)' }}>consultas@centroespecialidadesdigestivas.com</p>
              </div>

              <div>
                <strong style={{ color: 'var(--color-primary-dark)', display: 'block' }}>Horario de Atención:</strong>
                <p style={{ color: 'var(--color-text-muted)' }}>Lunes a Viernes: 8:00 AM – 5:30 PM | Sábados: 8:30 AM – 1:00 PM</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a
                href="https://wa.me/584120000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{ width: '100%' }}
              >
                Chatear con Atención al Paciente por WhatsApp
              </a>
            </div>
          </div>

          {/* Formulario Rápido de Mensaje Directo */}
          <div className="card" style={{ borderTop: '4px solid var(--color-accent)' }}>
            <h2 style={{ color: 'var(--color-primary)', fontSize: '1.4rem', marginBottom: '1.25rem' }}>
              Envíanos una Consulta
            </h2>

            <form action="https://wa.me/584120000000" method="GET" target="_blank">
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
                    placeholder="Ej. +58 412 1234567"
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                    Mensaje o Consulta:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Escribe tu consulta sobre estudios, especialistas o presupuesto..."
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                  Enviar Consulta Directa
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
