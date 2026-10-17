import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios & Procedimientos | Centro de Endoscopias y Especialidades Digestivas',
  description: 'Unidad médica y quirúrgica de alta tecnología: Endoscopias, Ultrasonido Endoanal 360º, Manometría Anorrectal de Alta Resolución, Biofeedback, Láser Diodo y Cirugía Colorrectal Mínimamente Invasiva.',
};

export default function ServiciosPage() {
  const gruposServicios = [
    {
      categoria: "Endoscopia Digestiva & Diagnóstico de Alta Resolución",
      items: [
        {
          titulo: "Endoscopia Digestiva Superior o Gastroscopia",
          detalle: "Exploración endoscópica del esófago, estómago y duodeno para el diagnóstico y tratamiento de reflujo, gastritis, úlceras y lesiones digestivas altas bajo sedación y confort."
        },
        {
          titulo: "Endoscopia Digestiva Inferior o Colonoscopia",
          detalle: "Estudio exhaustivo de la mucosa de todo el colon y recto para la detección oportuna y resección de pólipos, prevención del cáncer colorrectal y control inflamatorio."
        },
        {
          titulo: "Rectosigmoidoscopia Rígida y Flexible",
          detalle: "Evaluación endoscópica del recto y colon sigmoide para el diagnóstico de sangrado digestivo bajo, pólipos distales y patología anorrectal baja."
        }
      ]
    },
    {
      categoria: "Imagenología & Ultrasonido Especializado",
      items: [
        {
          titulo: "Ultrasonido Endoanal & Endorrectal 360º",
          detalle: "Equipamiento de vanguardia para la evaluación tridimensional y en 360 grados del aparato esfinteriano, fístulas y lesiones rectales."
        },
        {
          titulo: "Ecografía Integral",
          detalle: "Ultrasonidos abdominales y pélvicos."
        },
        {
          titulo: "Estudios de Tránsito Colónico",
          detalle: "Evaluación funcional del tiempo de motilidad colónica y videodefecografía para el diagnóstico certero del estreñimiento crónico y trastornos evacuatorios."
        }
      ]
    },
    {
      categoria: "Fisiología Anorrectal & Terapias de Rehabilitación",
      items: [
        {
          titulo: "Manometría Anorrectal de Alta Resolución",
          detalle: "Estudio diagnóstico de referencia para la cuantificación precisa de las presiones esfinterianas, sensibilidad rectal, reflejos recto-anales y valoración integral del estreñimiento crónico e incontinencia fecal."
        },
        {
          titulo: "Terapia de Biofeedback Anorrectal",
          detalle: "Reentrenamiento neuromuscular y biorretroalimentación asistida para trastornos evacuatorios, anismo y disinergia del piso pélvico."
        },
        {
          titulo: "Estimulación del Nervio Tibial Posterior",
          detalle: "Terapia de neuromodulación percutánea altamente efectiva para el tratamiento conservador de la incontinencia anal y urgencia fecal."
        }
      ]
    },
    {
      categoria: "Procedimientos Ambulatorios & Tecnología Láser Diodo",
      items: [
        {
          titulo: "Cirugía Menor",
          detalle: "Resección de plicomas anales, resección de condilomas, ligadura hemorroidal elástica y hemorroidectomías ambulatorias con rápida recuperación."
        },
        {
          titulo: "Láser Diodo & Electrocauterio de Precisión",
          detalle: "Equipos de láser Diodo, electrocauterio de alta precisión, instrumental proctológico especializado y dispositivos de iluminación portátil."
        }
      ]
    },
    {
      categoria: "Cirugía General & Mínima Invasión",
      items: [
        {
          titulo: "Cirugía Colorrectal de Mínima Invasión",
          detalle: "Abordaje laparoscópico avanzado para patologías colónicas, rectales y anorrectales tanto oncológicas como benignas."
        },
        {
          titulo: "Cirugía de Pared Abdominal, Vesícula Biliar & Apéndice",
          detalle: "Resolución quirúrgica de hernias inguinales, umbilicales y de la pared abdominal, así como colecistectomía por patología de vesícula biliar y cirugía de apéndice (apendicectomía)."
        },
        {
          titulo: "Cirugía Ginecológica, Piso Pélvico & Mamas",
          detalle: "Procedimientos quirúrgicos de prolapsos de órganos pélvicos."
        }
      ]
    }
  ];

  return (
    <div className="section">
      <div className="container">
        
        {/* Encabezado */}
        <div className="section-title-wrap reveal-up" style={{ maxWidth: '850px' }}>
          <span className="section-tag">Procedimientos Médicos & Quirúrgicos</span>
          <h1 className="section-title">¿Qué Ofrecemos?</h1>
          <p style={{ color: 'var(--color-text-main)', marginTop: '1.25rem', fontSize: '1.15rem', lineHeight: '1.8' }}>
            Nuestra unidad cuenta con una amplia gama de equipos especializados y personal altamente calificado para el diagnóstico y tratamiento de las enfermedades que afectan al sistema digestivo, al colon, al recto y al ano, garantizando a nuestros pacientes una atención multidisciplinaria y así ofrecer siempre la mejor opción de tratamiento.
          </p>
        </div>

        {/* Bloques de Servicios por Categoría */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginBottom: '4.5rem' }}>
          {gruposServicios.map((grupo, gIdx) => (
            <div key={gIdx} className="reveal-up">
              <h2 style={{
                fontSize: '1.35rem',
                color: 'var(--color-primary-dark)',
                marginBottom: '1.5rem',
                borderLeft: '4px solid var(--color-primary)',
                paddingLeft: '1rem',
                fontFamily: 'var(--font-family-heading)'
              }}>
                {grupo.categoria}
              </h2>

              <div className="grid-3" style={{ gap: '1.5rem' }}>
                {grupo.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className={`card reveal-scale delay-${((iIdx % 3) + 1) * 100}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '1.5rem'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '0.75rem', lineHeight: '1.35' }}>
                        {item.titulo}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                        {item.detalle}
                      </p>
                    </div>

                    <Link href="/citas" className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem', padding: '0.5rem 0.75rem' }}>
                      Solicitar Información
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sección Destacada: Alianza Policlínica La Arboleda */}
        <div className="card reveal-up" style={{
          backgroundColor: '#ffffff',
          borderTop: '5px solid var(--color-accent)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '3rem'
        }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Infraestructura Hospitalaria & Respaldo
          </span>
          <h2 style={{ color: 'var(--color-primary-dark)', fontSize: '1.6rem', margin: '0.5rem 0 1rem 0', fontFamily: 'var(--font-family-heading)' }}>
            Instalaciones Clínicas de Primer Nivel
          </h2>
          <p style={{ color: 'var(--color-text-main)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Contamos con instalaciones de primer nivel y recursos clínicos avanzados en la Policlínica La Arboleda, Grupo Médico Santa Paula y Policlínica Metropolitana: laboratorio clínico, servicio de Rx, hospitalización, terapia intensiva y quirófanos de última generación para cirugías abiertas y laparoscópicas.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/citas" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
              Agendar Procedimiento o Consulta
            </Link>
            <a
              href="https://maps.app.goo.gl/TgtAUNNr5yodezkW6?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '0.75rem 1.75rem' }}
            >
              Ver Ubicación en Google Maps
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
