export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer suppressHydrationWarning style={{ backgroundColor: 'var(--color-primary-dark)', color: '#e2e8f0', padding: '4.5rem 0 2rem 0', marginTop: 'auto' }}>
      <div className="container grid-2" suppressHydrationWarning style={{ gap: '4rem' }}>
        
        <div>
          <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '1.25rem', fontFamily: 'var(--font-family-heading)' }}>
            Centro de Endoscopias y Especialidades Digestivas
          </h3>
          <p style={{ fontSize: '0.925rem', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '1.5rem' }}>
            Unidad Médica y Quirúrgica especializada en la atención de pacientes con patologías del tracto digestivo y evacuatorio. Alianza estratégica con La Policlínica La Arboleda.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
              Instagram:{' '}
              <a
                href="https://instagram.com/tuendoscopia"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#67e8f9', textDecoration: 'underline', fontWeight: 600 }}
              >
                @tuendoscopia
              </a>
            </span>
            <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
              Caracas 1061, Distrito Capital, Venezuela
            </span>
          </div>
        </div>

        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1.25rem' }}>Canales Oficiales & Ubicación</h4>
          <p style={{ fontSize: '0.925rem', marginBottom: '0.5rem' }}>
            <strong>Ubicación:</strong> Policlínica La Arboleda, Piso 2, Consultorio 211, San Bernardino, Caracas.
          </p>
          <p style={{ fontSize: '0.925rem', marginBottom: '0.5rem' }}>
            <strong>Atención Móvil / WhatsApp:</strong>{' '}
            <a href="https://wa.me/584127542400" target="_blank" rel="noopener noreferrer" style={{ color: '#67e8f9' }}>
              0412-7542400
            </a>{' '}
            / 0412-3219381 / 0424-3050121
          </p>
          <p style={{ fontSize: '0.925rem', marginBottom: '0.5rem' }}>
            <strong>Central Telefónica:</strong> 0212-5550340 / 0212-5550211
          </p>
          <p style={{ fontSize: '0.925rem', marginBottom: '1.25rem' }}>
            <strong>Correos:</strong>{' '}
            <a href="mailto:comedven@gmail.com" style={{ color: '#67e8f9' }}>
              comedven@gmail.com
            </a>{' '}
            | info.comedven@gmail.com
          </p>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: '#94a3b8' }}>
            Nota: Este portal ofrece información médica orientativa y no sustituye la consulta facultativa presencial.
          </div>
        </div>

      </div>

      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', marginTop: '3.5rem', paddingTop: '1.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          © <span suppressHydrationWarning>{currentYear}</span> Centro de Endoscopias y Especialidades Digestivas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
