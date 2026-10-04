import { Metadata } from 'next';
import Link from 'next/link';
import { medicosData } from '@/data/medicos';

export const metadata: Metadata = {
  title: 'Equipo Médico | Centro de Especialidades Digestivas',
  description: 'Conoce a nuestros especialistas en Coloproctología, Gastroenterología de adultos y pediátrica, y Nutrición en Salud Digestiva.',
};

export default function EquipoMedicoPage() {
  return (
    <div className="section">
      <div className="container">
        
        {/* Encabezado */}
        <div className="section-title-wrap reveal-up">
          <span className="section-tag">Cuerpo Facultativo</span>
          <h1 className="section-title">Nuestros Especialistas</h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.1rem' }}>
            Un equipo multidisciplinario altamente calificado en patologías digestivas, proctológicas, pediátricas y nutrición clínica.
          </p>
        </div>

        {/* Listado de Médicos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {medicosData.map((medico, idx) => (
            <div
              key={medico.id}
              className={`card reveal-up delay-${((idx % 3) + 1) * 100}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '2.5rem',
                alignItems: 'start',
                borderLeft: '4px solid var(--color-primary)'
              }}
            >
              {/* Columna Izquierda: Iniciales e Identificación */}
              <div style={{
                backgroundColor: 'var(--color-primary-light)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                {medico.imagen ? (
                  <div style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden',
                    marginBottom: '1rem',
                    boxShadow: 'var(--shadow-md)',
                    border: '3px solid #ffffff',
                    backgroundColor: '#ffffff'
                  }}>
                    <img
                      src={medico.imagen}
                      alt={medico.nombre}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center'
                      }}
                    />
                  </div>
                ) : (
                  <div style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--color-primary)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    boxShadow: 'var(--shadow-md)',
                    border: '3px solid #ffffff'
                  }}>
                    {medico.iniciales}
                  </div>
                )}

                {medico.sociedades && (
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-primary-dark)',
                    backgroundColor: '#ffffff',
                    padding: '0.4rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    marginTop: '0.75rem',
                    lineHeight: '1.4'
                  }}>
                    <strong style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>
                      Sociedades Científicas:
                    </strong>
                    {medico.sociedades}
                  </div>
                )}
              </div>

              {/* Columna Derecha: Nombre, Especialidad y Formación */}
              <div>
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  marginBottom: '0.35rem'
                }}>
                  {medico.especialidad}
                </span>
                
                <h2 style={{ color: 'var(--color-primary-dark)', fontSize: '1.75rem', marginBottom: '1.25rem', fontFamily: 'var(--font-family-heading)' }}>
                  {medico.nombre}
                </h2>

                {/* Formación y Trayectoria Académica */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary)', display: 'block', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Formación Académica & Especialización:
                  </strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {medico.formacion.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '0.925rem',
                          color: 'var(--color-text-main)',
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.6rem',
                          lineHeight: '1.5'
                        }}
                      >
                        <span style={{ color: 'var(--color-accent)', fontWeight: 800 }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Barra Inferior de Acción */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--color-border)'
                }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8' }}>Modalidad de Atención:</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                      {medico.dias} ({medico.horario})
                    </span>
                  </div>
                  <Link href="/citas" className="btn btn-accent" style={{ fontSize: '0.9rem', padding: '0.6rem 1.35rem' }}>
                    Agendar Consulta
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
