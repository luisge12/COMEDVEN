export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-primary-dark)', color: '#e2e8f0', padding: '4.5rem 0 2rem 0', marginTop: 'auto' }}>
      <div className="container grid-2" style={{ gap: '4rem' }}>
        
        <div>
          <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '1.25rem', fontFamily: 'var(--font-family-heading)' }}>
            Centro de Endoscopias y Especialidades Digestivas
          </h3>
          <p style={{ fontSize: '0.925rem', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '1.5rem' }}>
            Unidad Médica y Quirúrgica especializada en la atención de pacientes con patologías del tracto digestivo y evacuatorio. Alianza estratégica con La Policlínica La Arboleda.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Web: www.tuendoscopia.com.ve | Instagram: @tuendoscopia</span>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Caracas 1061, Distrito Capital, Venezuela</span>
          </div>
        </div>

        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1.25rem' }}>Canales Oficiales & Ubicación</h4>
          <p style={{ fontSize: '0.925rem', marginBottom: '0.5rem' }}>
            <strong>Ubicación:</strong> Policlínica La Arboleda, Piso 2, Consultorio 211, San Bernardino.
          </p>
          <p style={{ fontSize: '0.925rem', marginBottom: '0.5rem' }}>
            <strong>Móvil / WhatsApp:</strong> 0412-7542400 / 0412-3219381 / 0424-3050121
          </p>
          <p style={{ fontSize: '0.925rem', marginBottom: '0.5rem' }}>
            <strong>Central Telefónica:</strong> 0212-5550340 / 0212-5550211
          </p>
          <p style={{ fontSize: '0.925rem', marginBottom: '1.25rem' }}>
            <strong>Correos:</strong> info.comedven@gmail.com | comedven@gmail.com
          </p>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: '#94a3b8' }}>
            Nota: Este portal ofrece información médica orientativa y no sustituye la consulta facultativa presencial.
          </div>
        </div>

      </div>

      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', marginTop: '3.5rem', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: '#94a3b8' }}>
        <div className="container">
          © <span suppressHydrationWarning>{currentYear}</span> Centro de Endoscopias y Especialidades Digestivas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
