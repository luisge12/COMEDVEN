import Link from 'next/link';
import DualViewCard from '@/components/DualViewCard';
import SponsorBanners from '@/components/SponsorBanners';
import { enfermedadesData } from '@/data/enfermedades';
import { medicosData } from '@/data/medicos';
import { articulosData } from '@/data/articulos';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #e8f4fa 0%, #ffffff 50%, #f0fdf9 100%)',
        padding: '5.5rem 0 4.5rem 0',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
          <div>
            <span className="section-tag">Atención Médica de Excelencia</span>
            <h1 style={{
              fontFamily: 'var(--font-family-heading)',
              fontSize: '2.9rem',
              color: 'var(--color-primary-dark)',
              lineHeight: 1.18,
              marginBottom: '1.25rem'
            }}>
              Diagnóstico de alta resolución y salud digestiva integral
            </h1>
            <p style={{
              color: 'var(--color-text-muted)',
              fontSize: '1.15rem',
              lineHeight: 1.65,
              marginBottom: '2.25rem'
            }}>
              Un equipo multidisciplinario de gastroenterólogos, hepatólogos y endoscopistas dedicados a tu bienestar con tecnología diagnóstica de última generación.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/citas" className="btn btn-accent" style={{ fontSize: '1.05rem', padding: '0.85rem 1.8rem' }}>
                Agendar Consulta en Línea
              </Link>
              <Link href="/directorio" className="btn btn-outline" style={{ fontSize: '1.05rem', padding: '0.85rem 1.8rem' }}>
                Consultar Enfermedades
              </Link>
            </div>
          </div>

          {/* Tarjeta Flotante Hero / Citas Rápidas */}
          <div className="card" style={{
            padding: '2.5rem',
            boxShadow: 'var(--shadow-lg)',
            borderTop: '5px solid var(--color-primary)'
          }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase' }}>
              Citas Inmediatas
            </span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', margin: '0.4rem 0 1rem 0' }}>
              ¿Tienes molestias o requieres un estudio?
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-success)', fontWeight: 800 }}>•</span> Sedación consciente sin dolor en endoscopias
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-success)', fontWeight: 800 }}>•</span> Resultados e informes histopatológicos oportunos
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-success)', fontWeight: 800 }}>•</span> Vista médica orientada a pacientes y personal de salud
              </li>
            </ul>
            <Link href="/citas" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
              Reservar con un Especialista
            </Link>
          </div>
        </div>
      </section>

      {/* Módulo 5: Espacios de Marcas Comerciales Patrocinantes */}
      <section className="container">
        <SponsorBanners />
      </section>

      {/* Módulo 1: Servicios Médicos Destacados */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Procedimientos Avanzados</span>
            <h2 className="section-title">Servicios Clínicos Especializados</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
              Protocolos rigurosos para una exploración segura, confortable y exacta.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3 style={{ color: 'var(--color-primary)', margin: '0.75rem 0', fontSize: '1.3rem' }}>
                Gastroscopia de Alta Definición
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', marginBottom: '1.25rem' }}>
                Exploración del esófago y estómago para diagnóstico precoz de gastritis, Helicobacter pylori, úlceras y lesiones tempranas.
              </p>
              <Link href="/servicios" style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.9rem' }}>
                Más detalles →
              </Link>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--color-primary)', margin: '0.75rem 0', fontSize: '1.3rem' }}>
                Colonoscopia Preventiva
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', marginBottom: '1.25rem' }}>
                Detección oportuna y resección de pólipos premalignos con sedación anestésica asistida para máxima tranquilidad.
              </p>
              <Link href="/servicios" style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.9rem' }}>
                Más detalles →
              </Link>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--color-primary)', margin: '0.75rem 0', fontSize: '1.3rem' }}>
                Test de Aire Espirado (SIBO)
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', marginBottom: '1.25rem' }}>
                Prueba funcional no invasiva para sobrecrecimiento bacteriano en intestino delgado e intolerancias a la lactosa/fructosa.
              </p>
              <Link href="/servicios" style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.9rem' }}>
                Más detalles →
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

          <div className="grid-3">
            {medicosData.map(m => (
              <div key={m.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  backgroundColor: 'var(--color-primary-light)',
                  height: '140px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  marginBottom: '1rem'
                }}>
                  {m.iniciales}
                </div>
                <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>{m.nombre}</h3>
                <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{m.especialidad}</p>
                <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1rem' }}>{m.registro} | {m.colegio}</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1.5rem', flex: 1 }}>
                  {m.biografia}
                </p>
                <Link href="/citas" className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem', padding: '0.5rem 0.75rem' }}>
                  Agendar con Especialista
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulo 4: Blog Médico & Estrategia SEO */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-body)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Blog de Salud & Prevención</span>
            <h2 className="section-title">Artículos Médicos Recientes</h2>
          </div>

          <div className="grid-3">
            {articulosData.map(art => (
              <article key={art.slug} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {art.categoria}
                </span>
                <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.15rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                  {art.titulo}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '1.25rem', flex: 1 }}>
                  {art.resumen}
                </p>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1rem' }}>
                  ⏱ {art.tiempoLectura} • {art.fecha}
                </div>
                <Link href={`/blog/${art.slug}`} style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                  Leer Artículo Completo →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
