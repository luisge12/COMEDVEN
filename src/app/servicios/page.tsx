import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios & Procedimientos | Centro de Endoscopias y Especialidades Digestivas',
  description: 'Unidad médica y quirúrgica de alta tecnología: Endoscopias, Ultrasonido Endoanal 360º, Biofeedback, Láser Diodo y Cirugía Colorrectal Mínimamente Invasiva.',
};

export default function ServiciosPage() {
  const gruposServicios = [
    {
      categoria: "Endoscopia Digestiva & Diagnóstico de Alta Resolución",
      items: [
        {
          titulo: "Endoscopias Digestivas Avanzadas",
          detalle: "Gastroscopias, colonoscopias totales y rectosigmoidoscopias diagnósticas y terapéuticas bajo monitorización y confort del paciente."
        },
        {
          titulo: "Anoscopias & Rectoscopias Rígidas",
          detalle: "Anoscopias simples y exploraciones con rectoscopio rígido para evaluación inmediata del conducto ano-rectal."
        },
        {
          titulo: "Citología Anal & Anoscopia Magnificada",
          detalle: "Detección precoz de lesiones premalignas con magnificación óptica de alta resolución y cribado celular especializado."
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
          titulo: "Ecografía Integral & Partes Blandas",
          detalle: "Ultrasonidos abdominales, pélvicos, transvaginales, transrectales y valoración ecográfica de tejidos y partes blandas."
        },
        {
          titulo: "Estudios Dinámicos & Ecofistulografía",
          detalle: "Estudios de tránsito colónico, videodefecografía, ecofistulografía y mapeo anatómico riguroso de fístulas anorrectales."
        }
      ]
    },
    {
      categoria: "Fisiología Anorrectal & Terapias de Rehabilitación",
      items: [
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
          titulo: "Cirugía Menor Ambulatoria (Anestesia Local Infiltrativa)",
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
          titulo: "Cirugía de Pared Abdominal & Vesícula Biliar",
          detalle: "Resolución quirúrgica de hernias inguinales, umbilicales y de la pared abdominal, así como colecistectomía por patología de vesícula biliar."
        },
        {
          titulo: "Cirugía Ginecológica, Piso Pélvico & Mamas",
          detalle: "Procedimientos quirúrgicos de prolapsos de órganos pélvicos, patologías de útero y ovarios, y abordaje de afecciones mamarias benignas y malignas."
        }
      ]
    }
  ];

  return (
    <div className="section">
      <div className="container">
        
        {/* Encabezado */}
        <div className="section-title-wrap" style={{ maxWidth: '850px' }}>
          <span className="section-tag">Cartera de Procedimientos</span>
          <h1 className="section-title">¿Qué Ofrecemos?</h1>
          <p style={{ color: 'var(--color-text-main)', marginTop: '1.25rem', fontSize: '1.15rem', lineHeight: '1.8' }}>
            Nuestra unidad cuenta con una amplia gama de equipos especializados y personal altamente calificado para el diagnóstico y tratamiento de las enfermedades que afectan al sistema digestivo, al colon, al recto y al ano, garantizando a nuestros pacientes una atención multidisciplinaria y así ofrecer siempre la mejor opción de tratamiento.
          </p>
        </div>

        {/* Bloques de Servicios por Categoría */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginBottom: '4.5rem' }}>
          {gruposServicios.map((grupo, gIdx) => (
            <div key={gIdx}>
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
                    className="card"
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
        <div className="card" style={{
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
            Alianza Institucional con La Policlínica La Arboleda
          </h2>
          <p style={{ color: 'var(--color-text-main)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Nuestra alianza con La Policlínica La Arboleda nos hace contar con instalaciones de primer nivel y recursos tecnológicos adecuados a las necesidades de nuestros pacientes como: laboratorio clínico, servicio de Rx, hospitalización, terapia intensiva, banco de sangre y quirófanos de última generación para los procedimientos de cirugía abierta y laparoscópica.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
            Asimismo, contamos con el apoyo directo de médicos especialistas en todas las áreas interconectadas: Medicina Interna, Cardiología, Endocrinología, Anestesiología, Oncología, Infectología, Psiquiatría y Nutrición.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/citas" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
              Agendar Procedimiento o Consulta
            </Link>
            <Link href="/contacto" className="btn btn-outline" style={{ padding: '0.75rem 1.75rem' }}>
              Ver Ubicación de la Sede
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
