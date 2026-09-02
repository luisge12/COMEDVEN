import { Metadata } from 'next';
import Link from 'next/link';
import { medicosData } from '@/data/medicos';

export const metadata: Metadata = {
  title: 'Equipo Médico | Centro de Especialidades Digestivas',
  description: 'Conoce a nuestros especialistas en gastroenterología, hepatología, cirugía y endoscopia digestiva.',
};

export default function EquipoMedicoPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">Cuerpo Facultativo</span>
          <h1 className="section-title">Especialistas al Servicio de tu Salud</h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.1rem' }}>
            Médicos certificados con amplia experiencia clínica, académica e investigativa.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {medicosData.map(medico => (
            <div key={medico.id} className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              
              <div style={{
                backgroundColor: 'var(--color-primary-light)',
                borderRadius: 'var(--radius-md)',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '1.5rem'
              }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                  {medico.iniciales}
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  {medico.registro}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  {medico.colegio}
                </span>
              </div>

              <div>
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  backgroundColor: 'var(--color-primary-light)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '0.5rem'
                }}>
                  {medico.especialidad}
                </span>
                <h2 style={{ color: 'var(--color-primary-dark)', fontSize: '1.6rem', marginBottom: '0.25rem' }}>
                  {medico.nombre}
                </h2>
                <h4 style={{ color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '1rem' }}>
                  {medico.subespecialidad}
                </h4>
                <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {medico.biografia}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary)', display: 'block', marginBottom: '0.35rem' }}>
                    Áreas de Especial Enfoque:
                  </strong>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    {medico.destacados.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '0.2rem' }}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8' }}>Días de Atención:</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)' }}>{medico.dias} ({medico.horario})</span>
                  </div>
                  <Link href="/citas" className="btn btn-accent" style={{ fontSize: '0.9rem', padding: '0.6rem 1.25rem' }}>
                    Agendar Cita con este Especialista
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
