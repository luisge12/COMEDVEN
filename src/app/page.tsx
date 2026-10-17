import Link from 'next/link';
import Image from 'next/image';
import DualViewCard from '@/components/DualViewCard';
import { enfermedadesData } from '@/data/enfermedades';
import { medicosData } from '@/data/medicos';
import { articulosData } from '@/data/articulos';
import SponsorBanners from '@/components/SponsorBanners';
import HeroSlider from '@/components/HeroSlider';
import GoogleReviews from '@/components/GoogleReviews';

export default function Home() {
  return (
    <>
      {/* Hero Section Simplificado & Directo con Transiciones Reveal */}
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
          <div className="reveal-left">
            <a
              href="https://maps.app.goo.gl/TgtAUNNr5yodezkW6?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir ubicación en Google Maps"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #bfdbfe',
                padding: '0.45rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-sm)',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              <span className="pulse-dot" />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '0.05em' }}>
                POLICLÍNICA LA ARBOLEDA • PISO 2 📍
              </span>
            </a>

            <h1 style={{
              fontFamily: 'var(--font-family-heading)',
              fontSize: 'clamp(1.75rem, 4.2vw, 3.1rem)',
              color: 'var(--color-primary-dark)',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em'
            }}>
              Atención integral y avanzada en <span className="text-gradient">salud digestiva</span>
            </h1>

            <p style={{
              color: 'var(--color-text-muted)',
              fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
              lineHeight: 1.65,
              marginBottom: '2.5rem'
            }}>
              Unidad médica y quirúrgica especializada en el diagnóstico y tratamiento de las enfermedades del sistema digestivo.
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

          {/* Columna Derecha: Slider Dinámico de Fotografías del Centro */}
          <div className="reveal-right" style={{ position: 'relative' }}>
            <HeroSlider
              images={[
                {
                  src: '/HERO2.jpeg',
                  alt: 'Consultorio Médico de Especialidades Digestivas'
                },
                {
                  src: '/HERO4.jpeg',
                  alt: 'Recepción y Sala de Espera del Centro de Especialidades Digestivas'
                },
                {
                  src: '/HERO3.jpeg',
                  alt: 'Unidad de Endoscopia y Procedimientos Diagnósticos'
                }
              ]}
              intervalMs={5000}
            />

            {/* Botón flotante de Google sobre la imagen (abajo a la izquierda) */}
            <a
              href="#testimonios"
              title="Ver opiniones de pacientes en Google"
              style={{
                position: 'absolute',
                bottom: '52px',
                left: '34px',
                zIndex: 20,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                padding: '0.55rem 1rem',
                borderRadius: 'var(--radius-full)',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.18)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" style={{ display: 'block', flexShrink: 0 }}>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e293b' }}>5.0</span>
                <span style={{ color: '#f59e0b', fontSize: '0.9rem' }}>★★★★★</span>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Google Reviews ↓</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Módulo 1: Servicios Médicos Destacados con Iconos */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrap reveal-up">
            <span className="section-tag">Procedimientos Especializados</span>
            <h2 className="section-title">Servicios Clínicos Especializados</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.05rem' }}>
              Equipos de última generación para diagnóstico y tratamiento del sistema digestivo.
            </p>
          </div>

          <div className="grid-3">
            <div className="card reveal-up delay-100">
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
                Gastroscopias, colonoscopias y rectosigmoidoscopias bajo monitorización estricta y confort para el paciente.
              </p>
              <Link href="/servicios" style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Ver detalles del procedimiento →
              </Link>
            </div>

            <div className="card reveal-up delay-200">
              <div className="icon-box">
                🩺
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Fisiología Digestiva & Anorrectal
              </span>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.6rem', fontSize: '1.3rem' }}>
                Manometría Anorrectal
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Manometría anorrectal de alta resolución para la valoración funcional de las presiones esfinterianas, sensibilidad y reflejos recto-anales.
              </p>
              <Link href="/servicios" style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Ver detalles del procedimiento →
              </Link>
            </div>

            <div className="card reveal-up delay-300">
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
          <div className="section-title-wrap reveal-up">
            <span className="section-tag">Directorio Clínico Interactivo</span>
            <h2 className="section-title">Directorio de Patologías Digestivas</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
              Alterna entre la explicación clara para pacientes y los criterios técnicos para profesionales de la salud.
            </p>
          </div>

          <div className="grid-2">
            {enfermedadesData.slice(0, 2).map((enf, idx) => (
              <div key={enf.id} className={`reveal-up delay-${(idx + 1) * 100}`}>
                <DualViewCard enfermedad={enf} />
              </div>
            ))}
          </div>

          <div className="reveal-up delay-300" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/directorio" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
              Ver Catálogo Completo de Patologías ({enfermedadesData.length})
            </Link>
          </div>
        </div>
      </section>

      {/* Módulo 3: Conoce al Equipo Médico */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrap reveal-up">
            <span className="section-tag">Cuerpo Facultativo</span>
            <h2 className="section-title">Nuestros Especialistas</h2>
          </div>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {medicosData.map((m, idx) => (
              <div
                key={m.id}
                className={`card reveal-scale delay-${((idx % 3) + 1) * 100}`}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.5rem' }}
              >
                <div>
                  {m.imagen ? (
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      height: '240px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                      backgroundColor: 'var(--color-primary-light)'
                    }}>
                      <Image
                        src={m.imagen}
                        alt={m.nombre}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        quality={95}
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center 15%'
                        }}
                      />
                    </div>
                  ) : (
                    <div style={{
                      backgroundColor: 'var(--color-primary-light)',
                      height: '240px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--color-primary)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.75rem',
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
          <div className="section-title-wrap reveal-up" style={{ marginBottom: '3.5rem' }}>
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
              Combinamos experiencia médica con tecnologías de última generación y un trato humano centrado en tu comunidad.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.75rem' }}>
            <div className="dark-feature-card reveal-up delay-100">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
              <h4 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Máximo Confort</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Procedimientos ambulatorios bajo anestesia local infiltrativa o sedación asistida. Rápida recuperación sin dolor.
              </p>
            </div>

            <div className="dark-feature-card reveal-up delay-200">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔬</div>
              <h4 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Equipamiento Avanzado</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Equipos de endoscopias digestivas, equipos de manometría anorrectal, Ultrasonido 360º, Láser Diodo y anoscopia magnificada.
              </p>
            </div>

            <div className="dark-feature-card reveal-up delay-300">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>👥</div>
              <h4 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Enfoque Integral</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Coloproctología, gastroenterología para adultos y niños, y nutrición digestiva articulada para un tratamiento integral.
              </p>
            </div>

            <div className="dark-feature-card reveal-up delay-400">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏥</div>
              <h4 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Respaldo Clínico</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Instalaciones quirúrgicas, bioseguridad hospitalaria y servicios de apoyo gracias a nuestras alianzas comerciales.
              </p>
            </div>
          </div>

          <div className="reveal-up delay-500" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/citas" className="btn btn-accent" style={{ fontSize: '1.05rem', padding: '0.9rem 2.5rem', boxShadow: '0 8px 24px rgba(0, 168, 150, 0.4)' }}>
              Solicitar Presupuesto o Agendar Cita
            </Link>
          </div>
        </div>
      </section>

      {/* Módulo: Opiniones Verificadas de Pacientes en Google */}
      <GoogleReviews />

      {/* Módulo 4: Blog Médico & Estrategia SEO */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-body)' }}>
        <div className="container">
          <div className="section-title-wrap reveal-up">
            <span className="section-tag">Blog de Salud & Prevención</span>
            <h2 className="section-title">Artículos Médicos Recientes</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.05rem' }}>
              Consejos prácticos y evidencia científica para el cuidado de tu aparato digestivo.
            </p>
          </div>

          <div className="grid-3">
            {articulosData.map((art, idx) => (
              <article
                key={art.slug}
                className={`card reveal-up delay-${(idx + 1) * 100}`}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
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

      {/* Módulo 5: Espacio Publicitario & Alianzas Comerciales */}
      <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-title-wrap reveal-up" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">Alianzas & Patrocinios</span>
            <h2 className="section-title">Espacio Publicitario Disponible</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.05rem' }}>
              Plataforma de alta visibilidad para laboratorios, marcas de salud digestiva y tecnología médica.
            </p>
          </div>

          <SponsorBanners />
        </div>
      </section>
    </>
  );
}
