import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { enfermedadesData } from '@/data/enfermedades';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const enfermedad = enfermedadesData.find(e => e.id === slug);

  if (!enfermedad) {
    return { title: 'Enfermedad no encontrada | Centro Digestivo' };
  }

  return {
    title: `${enfermedad.nombre} | Directorio Médico`,
    description: enfermedad.publicoGeneral.resumen,
  };
}

export default async function EnfermedadDetallePage({ params }: Props) {
  const { slug } = await params;
  const enfermedad = enfermedadesData.find(e => e.id === slug);

  if (!enfermedad) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/directorio" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
            ← Volver al Directorio de Enfermedades
          </Link>
        </div>

        {/* Encabezado Principal */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '3rem' }}>{enfermedad.icono}</span>
          <div>
            <span className="section-tag">{enfermedad.categoria}</span>
            <h1 style={{ fontFamily: 'var(--font-family-heading)', color: 'var(--color-primary-dark)', fontSize: '2.2rem', lineHeight: '1.2' }}>
              {enfermedad.nombre}
            </h1>
          </div>
        </div>

        {/* Panel 1: Sección para el Paciente */}
        <div className="card" style={{ marginBottom: '2rem', borderTop: '4px solid var(--color-accent)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>👤</span>
            <h2 style={{ color: 'var(--color-primary)', fontSize: '1.4rem' }}>
              Guía para el Paciente (Lenguaje Accesible)
            </h2>
          </div>

          <p style={{ color: 'var(--color-text-main)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {enfermedad.publicoGeneral.resumen}
          </p>

          <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '0.75rem' }}>
            Síntomas de Alerta Principales:
          </h3>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            {enfermedad.publicoGeneral.sintomas.map((s, idx) => (
              <li key={idx} style={{ marginBottom: '0.4rem' }}>{s}</li>
            ))}
          </ul>

          <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem' }}>
            <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.25rem' }}>
              Consejos de Prevención y Estilo de Vida:
            </strong>
            <p style={{ color: 'var(--color-text-main)', fontSize: '0.925rem' }}>
              {enfermedad.publicoGeneral.recomendaciones}
            </p>
          </div>

          <div style={{ backgroundColor: '#fffbeb', borderLeft: '4px solid var(--color-warning)', padding: '1rem', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0', fontSize: '0.9rem', color: '#92400e' }}>
            ⚠️ <strong>¿Cuándo acudir al especialista?</strong> {enfermedad.publicoGeneral.cuandoConsultar}
          </div>
        </div>

        {/* Panel 2: Sección para el Personal de la Salud */}
        <div className="card" style={{ marginBottom: '2.5rem', borderTop: '4px solid var(--color-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🩺</span>
            <h2 style={{ color: 'var(--color-primary)', fontSize: '1.4rem' }}>
              Ficha Clínico-Científica (Personal de la Salud)
            </h2>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--color-accent-hover)', fontSize: '1rem', marginBottom: '0.35rem' }}>
              Fisiopatología & Mecanismos Moleculares / Motores:
            </h4>
            <p style={{ color: 'var(--color-text-main)', fontSize: '0.925rem', lineHeight: '1.6' }}>
              {enfermedad.personalSalud.fisiopatologia}
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--color-accent-hover)', fontSize: '1rem', marginBottom: '0.35rem' }}>
              Criterios Diagnósticos & Algoritmos de Imagen / Endoscópicos:
            </h4>
            <p style={{ color: 'var(--color-text-main)', fontSize: '0.925rem', lineHeight: '1.6' }}>
              {enfermedad.personalSalud.criteriosDiagnosticos}
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--color-accent-hover)', fontSize: '1rem', marginBottom: '0.35rem' }}>
              Manejo Terapéutico Escalonado:
            </h4>
            <p style={{ color: 'var(--color-text-main)', fontSize: '0.925rem', lineHeight: '1.6' }}>
              {enfermedad.personalSalud.manejoTerapeutico}
            </p>
          </div>

          <div style={{ backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', color: '#334155' }}>
            💡 <strong>Perla Clínica:</strong> {enfermedad.personalSalud.perlasClinicas}
          </div>
        </div>

        {/* CTA de Consulta */}
        <div style={{ textAlign: 'center', padding: '2.5rem', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
            ¿Sospechas que puedes presentar esta afección?
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Un diagnóstico a tiempo evita complicaciones a largo plazo. Agenda hoy con nuestros gastroenterólogos.
          </p>
          <Link href="/citas" className="btn btn-accent" style={{ padding: '0.85rem 2rem' }}>
            Agendar Consulta Médica
          </Link>
        </div>

      </div>
    </div>
  );
}
