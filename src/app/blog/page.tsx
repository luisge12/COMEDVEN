import { Metadata } from 'next';
import Link from 'next/link';
import { articulosData } from '@/data/articulos';

export const metadata: Metadata = {
  title: 'Blog Médico & Salud Digestiva | Centro de Endoscopias y Especialidades Digestivas',
  description: 'Artículos de educación médica, síntomas de alarma, prevención del cáncer digestivo y nutrición clínica.',
};

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container">
        
        <div className="section-title-wrap">
          <span className="section-tag">Divulgación & Prevención</span>
          <h1 className="section-title">Blog Médico</h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.1rem' }}>
            Respuestas basadas en evidencia científica para tus dudas más comunes sobre el sistema digestivo.
          </p>
        </div>

        <div className="grid-3" style={{ gap: '2rem' }}>
          {articulosData.map((art) => (
            <article key={art.slug} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                  marginBottom: '0.75rem'
                }}>
                  {art.categoria}
                </span>

                <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.75rem', lineHeight: '1.35' }}>
                  <Link href={`/blog/${art.slug}`} style={{ color: 'inherit' }}>
                    {art.titulo}
                  </Link>
                </h2>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {art.resumen}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {art.tags.map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', color: '#475569', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)', fontSize: '0.8rem', color: '#94a3b8' }}>
                  <span>⏱ {art.tiempoLectura}</span>
                  <Link href={`/blog/${art.slug}`} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
                    Leer más →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
