import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-primary-dark)', color: '#e2e8f0', padding: '4.5rem 0 2rem 0', marginTop: 'auto' }}>
      <div className="container grid-3" style={{ gap: '3rem' }}>
        
        <div>
          <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '1.25rem', fontFamily: 'var(--font-family-heading)' }}>
            Centro de Especialidades Digestivas
          </h3>
          <p style={{ fontSize: '0.925rem', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '1.5rem' }}>
            Institución médica de referencia dedicada a la prevención, diagnóstico de alta resolución y tratamiento de afecciones del aparato digestivo y glándulas anexas.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Rif: J-00000000-0 | Registro Sanitario Vigente</span>
          </div>
        </div>

        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1.25rem' }}>Enlaces Rápidos</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem' }}>
            <li><Link href="/nosotros" style={{ color: '#cbd5e1' }}>Acerca de Nosotros & Actividades Académicas</Link></li>
            <li><Link href="/equipo-medico" style={{ color: '#cbd5e1' }}>Especialistas & Cuerpo Médico</Link></li>
            <li><Link href="/servicios" style={{ color: '#cbd5e1' }}>Endoscopia & Servicios Diagnósticos</Link></li>
            <li><Link href="/directorio" style={{ color: '#cbd5e1' }}>Directorio de Patologías (Vista Dual)</Link></li>
            <li><Link href="/blog" style={{ color: '#cbd5e1' }}>Blog Médico & Consejos de Salud</Link></li>
            <li><Link href="/citas" style={{ color: '#cbd5e1' }}>Reservación de Citas en Línea</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1.25rem' }}>Canales Oficiales & Contacto</h4>
          <p style={{ fontSize: '0.925rem', marginBottom: '0.6rem' }}>Dirección: Torre Médica Especializada, Piso 4, Consultorio 4-B</p>
          <p style={{ fontSize: '0.925rem', marginBottom: '0.6rem' }}>Central: +58 (000) 000-0000</p>
          <p style={{ fontSize: '0.925rem', marginBottom: '0.6rem' }}>WhatsApp Directo: +58 (000) 000-0000</p>
          <p style={{ fontSize: '0.925rem', marginBottom: '1.25rem' }}>Canal Educativo en YouTube: @CentroEspecialidadesDigestivas</p>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: '#94a3b8' }}>
            Nota: Este portal ofrece información médica orientativa y no sustituye la consulta facultativa presencial.
          </div>
        </div>

      </div>

      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', marginTop: '3.5rem', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: '#94a3b8' }}>
        <div className="container">
          © <span suppressHydrationWarning>{currentYear}</span> Centro de Especialidades Digestivas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
