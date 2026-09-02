import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articulosData } from '@/data/articulos';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articulo = articulosData.find(a => a.slug === slug);

  if (!articulo) {
    return { title: 'Artículo no encontrado | Centro Digestivo' };
  }

  return {
    title: `${articulo.titulo} | Blog Médico`,
    description: articulo.resumen,
    keywords: articulo.tags,
    openGraph: {
      title: articulo.titulo,
      description: articulo.resumen,
      type: 'article',
      authors: [articulo.autor],
    }
  };
}

export default async function ArticuloDetallePage({ params }: Props) {
  const { slug } = await params;
  const articulo = articulosData.find(a => a.slug === slug);

  if (!articulo) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '820px' }}>
        
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/blog" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
            ← Volver a Artículos del Blog
          </Link>
        </div>

        {/* Encabezado del Artículo */}
        <header style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag">{articulo.categoria}</span>
          <h1 style={{
            fontFamily: 'var(--font-family-heading)',
            fontSize: '2.5rem',
            color: 'var(--color-primary-dark)',
            lineHeight: 1.25,
            margin: '0.75rem 0 1rem 0'
          }}>
            {articulo.titulo}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.875rem', color: '#64748b', flexWrap: 'wrap' }}>
            <span>✍️ Escrito por: <strong>{articulo.autor}</strong></span>
            <span>📅 {articulo.fecha}</span>
            <span>⏱ {articulo.tiempoLectura}</span>
          </div>
        </header>

        {/* Resumen Destacado */}
        <div style={{
          backgroundColor: 'var(--color-primary-light)',
          borderLeft: '4px solid var(--color-primary)',
          padding: '1.25rem 1.5rem',
          borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
          fontSize: '1.1rem',
          color: 'var(--color-text-main)',
          fontStyle: 'italic',
          marginBottom: '2.5rem'
        }}>
          {articulo.resumen}
        </div>

        {/* Cuerpo del Artículo */}
        <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
          {articulo.contenido.map((parrafo, idx) => (
            <p key={idx} style={{ marginBottom: '1.5rem' }}>
              {parrafo}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>Temas relacionados:</span>
          {articulo.tags.map((t, i) => (
            <span key={i} style={{ fontSize: '0.8rem', backgroundColor: '#f1f5f9', color: '#334155', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>
              #{t}
            </span>
          ))}
        </div>

        {/* Caja de Conversión al Final del Artículo */}
        <div className="card" style={{ marginTop: '3.5rem', textAlign: 'center', backgroundColor: 'var(--color-primary-light)', border: '1px solid #cbd5e1' }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
            ¿Presentas síntomas digestivos recurrentes?
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', maxWidth: '580px', margin: '0 auto 1.5rem auto' }}>
            La información médica no sustituye el criterio de un especialista. Consulta con nuestros gastroenterólogos para una valoración personalizada.
          </p>
          <Link href="/citas" className="btn btn-accent" style={{ padding: '0.8rem 2rem' }}>
            Reservar Consulta Médica
          </Link>
        </div>

      </div>
    </div>
  );
}
