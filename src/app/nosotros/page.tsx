import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Acerca de Nosotros | Centro de Especialidades Digestivas',
  description: 'Conoce la misión, visión, trayectoria profesional y actividades académicas del Centro de Especialidades Digestivas.',
};

export default function NosotrosPage() {
  return (
    <div className="section">
      <div className="container">
        
        {/* Encabezado: ¿Quiénes Somos? */}
        <div className="section-title-wrap" style={{ maxWidth: '850px' }}>
          <span className="section-tag">Institucional</span>
          <h1 className="section-title">¿Quiénes Somos?</h1>
          <p style={{ color: 'var(--color-text-main)', marginTop: '1.25rem', fontSize: '1.15rem', lineHeight: '1.8' }}>
            El Centro de Endoscopias y Especialidades Digestivas es una Unidad Médica y Quirúrgica especializada en la atención de pacientes con patologías del tracto digestivo y evacuatorio. Nuestro objetivo es garantizar que nuestros pacientes gocen de una excelente salud y mejorar su calidad de vida para que pueden disfrutar a plenitud cada uno de sus días.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid-2" style={{ marginBottom: '4.5rem', gap: '2rem' }}>
          <div className="card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
            <h2 style={{ color: 'var(--color-primary)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>Misión</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.75' }}>
              Proporcionar atención médica integral especializada para las enfermedades de las vías digestivas, con tecnología de vanguardia y un equipo humano altamente calificado y capacitado. Centramos nuestros esfuerzos en un diagnóstico preciso y tratamientos efectivos, guiados por principios éticos y un trato humano, para restaurar tu salud, bienestar y calidad de vida.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
            <h2 style={{ color: 'var(--color-primary)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>Visión</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.75' }}>
              Ser el principal centro de referencia en Coloproctología del país, ofreciendo diagnósticos tempranos y tratamientos de vanguardia adaptados a las necesidades particulares de cada paciente. Nuestro compromiso es proporcionarte una medicina de excelencia y altamente calificada, centrada en tu dignidad y calidad de vida, con un acceso equitativo y un firme compromiso social.
            </p>
          </div>
        </div>

        {/* Sección de Actividades Académicas y Eventos (Punto 1 de la cotización) */}
        <div className="section-title-wrap">
          <span className="section-tag">Educación Médica Continua</span>
          <h2 className="section-title">Actividades Académicas & Eventos</h2>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
            Fomentamos la actualización constante del gremio médico y la educación comunitaria de nuestros pacientes.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          <div className="card">
            <h3 style={{ color: 'var(--color-primary)', margin: '0.75rem 0 0.5rem 0', fontSize: '1.2rem' }}>
              Simposio de Motilidad & Eje Microbiota
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Jornada anual de actualización enfocada en avances terapéuticos en SII, SIBO y nuevas clasificaciones de Roma.
            </p>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent)' }}>Evento Académico Anual</span>
          </div>

          <div className="card">
            <h3 style={{ color: 'var(--color-primary)', margin: '0.75rem 0 0.5rem 0', fontSize: '1.2rem' }}>
              Talleres Prácticos de Endoscopia
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Entrenamiento en técnicas de polipectomía avanzada, cromoscopia virtual e inyección hemostática para médicos residentes.
            </p>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent)' }}>Capacitación Hospitalaria</span>
          </div>

          <div className="card">
            <h3 style={{ color: 'var(--color-primary)', margin: '0.75rem 0 0.5rem 0', fontSize: '1.2rem' }}>
              Campañas de Detección Temprana
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Charlas comunitarias abiertas sobre factores de riesgo, nutrición antiinflamatoria y el valor de la colonoscopia oportuna.
            </p>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent)' }}>Difusión Abierta al Público</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', backgroundColor: 'var(--color-primary-light)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>¿Deseas participar o consultar con nuestro equipo?</h3>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
            Nuestros especialistas están a tu disposición tanto para atención clínica como para colaboraciones científicas.
          </p>
          <Link href="/citas" className="btn btn-primary">
            Contactar con el Centro
          </Link>
        </div>

      </div>
    </div>
  );
}
