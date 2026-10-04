import Link from 'next/link';
import DualViewCard from '@/components/DualViewCard';
import { enfermedadesData } from '@/data/enfermedades';
import { medicosData } from '@/data/medicos';
import { articulosData } from '@/data/articulos';

export default function Home() {
  return (
    <>
      {/* Hero Section Simplificado & Directo */}
      <section style={{
        position: 'relative',
        background: 'radial-gradient(120% 120% at 50% -10%, #e0f2fe 0%, #f0fdf9 40%, #ffffff 100%)',
        padding: '5.5rem 0 5rem 0',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)'
      }}>
        {/* Resplandor decorativo de fondo */}
        <div style={{
          position: 'absolute',
          top: '-120px',
          right: '-80px',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 168, 150, 0.12) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container grid-2" style={{ alignItems: 'center', gap: '3.5rem', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #bfdbfe',
              padding: '0.45rem 1.15rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <span className="pulse-dot" />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '0.05em' }}>
                POLICLÍNICA LA ARBOLEDA • PISO 2
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-family-heading)',
              fontSize: '3.1rem',
              color: 'var(--color-primary-dark)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em'
            }}>
              Atención integral y avanzada en <span className="text-gradient">salud digestiva</span>
            </h1>

            <p style={{
              color: 'var(--color-text-muted)',
              fontSize: '1.2rem',
              lineHeight: 1.7,
              marginBottom: '2.5rem'
            }}>
              Unidad médica y quirúrgica especializada en el diagnóstico y tratamiento de las enfermedades del sistema digestivo, colon, recto y ano.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link
                href="/servicios"
                className="btn btn-primary"
                style={{
                  fontSize: '1.05rem',
                  padding: '0.95rem 2.2rem',
                  boxShadow: '0 8px 24px rgba(15, 76, 129, 0.25)'
                }}
              >
                ¿Qué Ofrecemos? Ver Servicios →
              </Link>
              <Link
                href="/citas"
                className="btn btn-accent"
                style={{
                  fontSize: '1.05rem',
                  padding: '0.95rem 2rem',
                  boxShadow: '0 8px 24px rgba(0, 168, 150, 0.25)'
                }}
              >
                Agendar Consulta
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Fotografía HERO Limpia */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 24px 50px rgba(15, 76, 129, 0.18)',
              border: '4px solid #ffffff',
              background: '#ffffff',
              aspectRatio: '4/3',
              position: 'relative'
            }}>
              <img
                src="/HERO.jpg"
                alt="Centro de Especialidades Digestivas"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>

            {/* Badge Flotante Sede y Respaldo Institucional */}
            <div className="floating-badge" style={{
              position: 'absolute',
              bottom: '-20px',
              left: '20px',
              zIndex: 2
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: '#ecfdf5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem'
              }}>
                🏥
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-success)', textTransform: 'uppercase' }}>
                  Alianza Institucional
                </span>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-primary-dark)' }}>
                  Policlínica La Arboleda, Caracas
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 1: Servicios Médicos Destacados con Iconos */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Cartera de Procedimientos</span>
            <h2 className="section-title">Servicios Clínicos Especializados</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.05rem' }}>
              Equipos de última generación para diagnóstico y tratamiento del sistema digestivo, colon, recto y ano.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="icon-box">
                🔬
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Estudios Diagnósticos & Terapéuticos
              </span>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.6rem', fontSize: '1.3rem' }}>
                Endoscopias Digestivas
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Gastroscopias, colonoscopias y rectosigmoidoscopias completas bajo monitorización estricta y confort para el paciente.
              </p>
              <Link href="/servicios" style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Ver detalles del procedimiento →
              </Link>
            </div>

            <div className="card">
              <div className="icon-box">
                🩺
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Imagenología Anorrectal de Vanguardia
              </span>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.6rem', fontSize: '1.3rem' }}>
                Ultrasonido Endoanal y Endorrectal 360º
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Evaluación tridimensional y en 360 grados del aparato esfinteriano, fístulas anorrectales y lesiones del recto.
              </p>
              <Link href="/servicios" style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Ver detalles del procedimiento →
              </Link>
            </div>

            <div className="card">
              <div className="icon-box">
                ⚡
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Procedimientos Ambulatorios & Cirugía
              </span>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.6rem', fontSize: '1.3rem' }}>
                Láser Diodo & Procedimientos Ambulatorios
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Resección de plicomas, condilomas, ligaduras y hemorroidectomías con anestesia local infiltrativa, electrocauterio y láser diodo.
              </p>
              <Link href="/servicios" style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Ver detalles del procedimiento →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 2: Directorio de Enfermedades (Vista Dual Interactiva en Inicio) */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-body)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Directorio Clínico Interactivo</span>
            <h2 className="section-title">Enfermedades con Vista Dual</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
              Alterna entre la explicación clara para pacientes y los criterios técnicos para profesionales de la salud.
            </p>
          </div>

          <div className="grid-2">
            {enfermedadesData.slice(0, 2).map((enf) => (
              <DualViewCard key={enf.id} enfermedad={enf} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/directorio" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
              Ver Catálogo Completo de Patologías ({enfermedadesData.length})
            </Link>
          </div>
        </div>
      </section>

      {/* Módulo 1: Conoce al Equipo Médico */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Cuerpo Facultativo</span>
            <h2 className="section-title">Nuestros Especialistas</h2>
          </div>

          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {medicosData.map(m => (
              <div key={m.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.5rem' }}>
                <div>
                  {m.imagen ? (
                    <div style={{
                      height: '160px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                      backgroundColor: 'var(--color-primary-light)'
                    }}>
                      <img
                        src={m.imagen}
                        alt={m.nombre}
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
                      backgroundColor: 'var(--color-primary-light)',
                      height: '160px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--color-primary)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        boxShadow: 'var(--shadow-sm)'
                      }}>
                        {m.iniciales}
                      </div>
                    </div>
                  )}
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem', letterSpacing: '0.04em' }}>
                    {m.especialidad}
                  </span>
                  <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.15rem', marginBottom: '0.45rem', lineHeight: '1.3', fontFamily: 'var(--font-family-heading)' }}>
                    {m.nombre}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                    {m.dias} &bull; {m.horario}
                  </p>
                </div>
                <div>
                  <Link href="/equipo-medico" className="btn btn-outline" style={{ width: '100%', fontSize: '0.8rem', padding: '0.45rem 0.6rem' }}>
                    Ver Credenciales →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulo Especial: Pilares de Calidad y Confianza Médica */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, #06233d 100%)',
        color: '#ffffff',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Círculo de luz decorativo */}
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 168, 150, 0.2) 0%, rgba(6, 35, 61, 0) 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-title-wrap" style={{ marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#67e8f9',
              background: 'rgba(103, 232, 249, 0.12)',
              border: '1px solid rgba(103, 232, 249, 0.25)',
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '0.85rem'
            }}>
              Estándares de Excelencia
            </span>
            <h2 style={{
              fontFamily: 'var(--font-family-heading)',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2
            }}>
              ¿Por qué confiar tu salud digestiva en nosotros?
            </h2>
            <p style={{ color: '#94a3b8', marginTop: '0.85rem', fontSize: '1.1rem', maxWidth: '650px', margin: '0.85rem auto 0 auto' }}>
              Combinamos experiencia médica universitaria, tecnología de última generación y un trato humano centrado en tu comodidad.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.75rem' }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem 1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
              <h4 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Máximo Confort</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Procedimientos ambulatorios bajo anestesia local infiltrativa o sedación asistida. Rápida recuperación sin dolor.
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem 1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔬</div>
              <h4 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Equipamiento Avanzado</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Ultrasonido 360º, Láser Diodo, electrocauterio, anoscopia magnificada de alta resolución y rectoscopias rígidas.
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem 1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>👥</div>
              <h4 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Enfoque Integral</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Coloproctología, gastroenterología clínica, pediatría y nutrición digestiva articuladas para un diagnóstico completo.
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem 1.5rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏥</div>
              <h4 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Respaldo Clínico</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Instalaciones quirúrgicas, bioseguridad hospitalaria y servicios de apoyo en la Policlínica La Arboleda de Caracas.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/citas" className="btn btn-accent" style={{ fontSize: '1.05rem', padding: '0.9rem 2.5rem', boxShadow: '0 8px 24px rgba(0, 168, 150, 0.4)' }}>
              Solicitar Presupuesto o Agendar Cita
            </Link>
          </div>
        </div>
      </section>

      {/* Módulo 4: Blog Médico & Estrategia SEO */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-body)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Blog de Salud & Prevención</span>
            <h2 className="section-title">Artículos Médicos Recientes</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.05rem' }}>
              Consejos prácticos y evidencia científica para el cuidado de tu aparato digestivo.
            </p>
          </div>

          <div className="grid-3">
            {articulosData.map(art => (
              <article key={art.slug} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', backgroundColor: 'var(--color-primary-light)', padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      {art.categoria}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>⏱ {art.tiempoLectura}</span>
                  </div>
                  <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.2rem', marginBottom: '0.75rem', lineHeight: '1.35' }}>
                    <Link href={`/blog/${art.slug}`} style={{ color: 'inherit' }}>
                      {art.titulo}
                    </Link>
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {art.resumen}
                  </p>
                </div>
                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{art.fecha}</span>
                  <Link href={`/blog/${art.slug}`} style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
