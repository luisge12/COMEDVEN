import { Metadata } from 'next';
import DualViewCard from '@/components/DualViewCard';
import { enfermedadesData } from '@/data/enfermedades';

export const metadata: Metadata = {
  title: 'Directorio de Enfermedades Digestivas | Vista Dual',
  description: 'Catálogo especializado de patologías digestivas con información diferenciada para el público general y profesionales de la salud.',
};

export default function DirectorioPage() {
  const categorias = Array.from(new Set(enfermedadesData.map(e => e.categoria)));

  return (
    <div className="section">
      <div className="container">
        
        <div className="section-title-wrap">
          <span className="section-tag">Módulo Clínico Educativo</span>
          <h1 className="section-title">Directorio de Patologías Digestivas</h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.1rem' }}>
            Explora información médica rigurosa con nuestra tecnología de <strong>Vista Dual</strong>: alterna con un clic entre lenguaje comprensible para pacientes y criterios de diagnóstico para el personal médico.
          </p>
        </div>

        {/* Leyenda de Vista Dual */}
        <div style={{
          backgroundColor: 'var(--color-primary-light)',
          border: '1px solid #bfdbfe',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem 2rem',
          maxWidth: '850px',
          margin: '0 auto 3rem auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ fontSize: '2rem' }}>💡</div>
          <div style={{ flex: 1 }}>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1rem', marginBottom: '0.25rem' }}>
              ¿Cómo funciona la Vista Dual?
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
              Utiliza el botón <strong>&ldquo;👤 Paciente&rdquo;</strong> para comprender causas, síntomas y recomendaciones sencillas, o selecciona <strong>&ldquo;🩺 Personal Médico&rdquo;</strong> para acceder a fisiopatología, criterios Roma/Lyon, escalas endoscópicas y farmacoterapia de primera línea.
            </p>
          </div>
        </div>

        {/* Listado de Patologías con Vista Dual */}
        <div className="grid-2" style={{ gap: '2.5rem' }}>
          {enfermedadesData.map((enf) => (
            <DualViewCard key={enf.id} enfermedad={enf} />
          ))}
        </div>

      </div>
    </div>
  );
}
