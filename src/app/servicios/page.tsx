import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios Médicos & Endoscópicos | Centro de Especialidades Digestivas',
  description: 'Cartera de procedimientos diagnósticos y terapéuticos: Gastroscopia, Colonoscopia, Test SIBO y Polipectomía.',
};

export default function ServiciosPage() {
  const servicios = [
    {
      titulo: 'Gastroscopia Superior Diagnóstica & Terapéutica',
      descripcion: 'Exploración visual directa del esófago, estómago y duodeno con videoendoscopios de alta definición. Permite la toma de biopsias, hemostasia de sangrado y extracción de lesiones gástricas tempranas.',
      indicaciones: ['Acidez refractaria', 'Dificultad o dolor para tragar', 'Sospecha de úlcera péptica', 'Pesadez y dolor en la boca del estómago'],
      duracion: '15 - 20 minutos con sedación asistida'
    },
    {
      titulo: 'Colonoscopia Total & Polipectomía',
      descripcion: 'Examen exhaustivo del colon y recto para prevención activa del cáncer colorrectal. Si se encuentran pólipos, se realiza resección inmediata (polipectomía endoscópica) sin dolor.',
      indicaciones: ['Cribado preventivo a partir de los 45 años', 'Sangrado rectal o anemia no explicada', 'Cambio persistente en el ritmo evacuatorio'],
      duracion: '25 - 35 minutos con sedación monitorizada'
    },
    {
      titulo: 'Test de Aire Espirado (SIBO & Malabsorción)',
      descripcion: 'Prueba funcional respiratoria no invasiva para la detección de sobrecrecimiento bacteriano en intestino delgado (SIBO) e intolerancia a carbohidratos (lactosa y fructosa).',
      indicaciones: ['Distensión y gases crónicos postprandiales', 'Diarreas funcionales o dolor cólico', 'Sospecha de disbiosis bacteriana'],
      duracion: 'Estudio ambulatorio de 2 a 3 horas'
    },
    {
      titulo: 'Consulta de Hepatología & Fibrosis Hepática',
      descripcion: 'Evaluación integral del hígado graso metabólico (MASLD/MASH), cirrosis, hepatitis virales y enfermedades colestásicas con protocolos de estratificación de riesgo no invasivo.',
      indicaciones: ['Ecografía con infiltración grasa', 'Enzimas hepáticas (TGO/TGP) elevadas', 'Monitoreo de hepatopatías crónicas'],
      duracion: 'Consulta clínica de 45 minutos'
    },
    {
      titulo: 'Cirugía Digestiva Laparoscópica Mínimamente Invasiva',
      descripcion: 'Procedimientos quirúrgicos laparoscópicos de vesícula biliar (colecistectomía), reparación de hernias abdominales y cirugía antirreflujo (funduplicatura) con rápida reinserción.',
      indicaciones: ['Cálculos biliares (litiasis vesicular)', 'Hernia hiatal con reflujo severo', 'Colecistitis aguda o crónica'],
      duracion: 'Cirugía programada ambulatoria o estancia corta'
    },
    {
      titulo: 'Nutrición Clínica en Trastornos Digestivos',
      descripcion: 'Planes nutricionales terapéuticos personalizados basados en protocolos Low-FODMAP, dietas antiinflamatorias y restauración de la permeabilidad intestinal.',
      indicaciones: ['Síndrome de Intestino Irritable', 'Intolerancias alimentarias múltiples', 'Hígado graso no alcohólico'],
      duracion: 'Consulta y seguimiento nutricional'
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">Cartera de Procedimientos</span>
          <h1 className="section-title">Servicios Médicos de Precisión</h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.1rem' }}>
            Tecnología médica avanzada, confort del paciente y máximos estándares de bioseguridad.
          </p>
        </div>

        <div className="grid-3" style={{ gap: '2rem' }}>
          {servicios.map((srv, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.75rem', lineHeight: '1.35' }}>
                  {srv.titulo}
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {srv.descripcion}
                </p>

                <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
                  <strong style={{ fontSize: '0.8rem', color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.25rem' }}>
                    Indicaciones frecuentes:
                  </strong>
                  <ul style={{ listStyle: 'circle', paddingLeft: '1.1rem', fontSize: '0.8rem', color: 'var(--color-text-main)' }}>
                    {srv.indicaciones.map((ind, i) => (
                      <li key={i}>{ind}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1rem' }}>
                  ⏱ {srv.duracion}
                </span>
                <Link href="/citas" className="btn btn-outline" style={{ width: '100%', fontSize: '0.875rem', padding: '0.6rem' }}>
                  Solicitar este Servicio
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
