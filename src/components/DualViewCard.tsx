'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Enfermedad } from '@/data/enfermedades';

interface Props {
  enfermedad: Enfermedad;
  initialMode?: 'publico' | 'medico';
}

export default function DualViewCard({ enfermedad, initialMode = 'publico' }: Props) {
  const [mode, setMode] = useState<'publico' | 'medico'>(initialMode);

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
      
      {/* Encabezado de la Tarjeta */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            backgroundColor: 'var(--color-primary-light)',
            padding: '0.2rem 0.6rem',
            borderRadius: 'var(--radius-full)'
          }}>
            {enfermedad.categoria}
          </span>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginTop: '0.35rem', fontFamily: 'var(--font-family-heading)' }}>
            {enfermedad.nombre}
          </h3>
        </div>
      </div>

      {/* Selector de Modo Vista Dual */}
      <div style={{
        display: 'flex',
        backgroundColor: '#e2e8f0',
        padding: '0.25rem',
        borderRadius: 'var(--radius-full)',
        marginBottom: '1.25rem',
        alignSelf: 'flex-start'
      }}>
        <button
          onClick={() => setMode('publico')}
          style={{
            border: 'none',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            backgroundColor: mode === 'publico' ? 'var(--color-primary)' : 'transparent',
            color: mode === 'publico' ? '#ffffff' : 'var(--color-text-muted)',
            transition: 'var(--transition-smooth)'
          }}
        >
          Vista Paciente
        </button>
        <button
          onClick={() => setMode('medico')}
          style={{
            border: 'none',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            backgroundColor: mode === 'medico' ? 'var(--color-primary)' : 'transparent',
            color: mode === 'medico' ? '#ffffff' : 'var(--color-text-muted)',
            transition: 'var(--transition-smooth)'
          }}
        >
          Personal Médico
        </button>
      </div>

      {/* Contenido Dinámico según la Vista */}
      <div style={{ flex: 1 }}>
        {mode === 'publico' ? (
          <div>
            <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              {enfermedad.publicoGeneral.resumen}
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.35rem' }}>
                Síntomas frecuentes:
              </strong>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                {enfermedad.publicoGeneral.sintomas.map((s, idx) => (
                  <li key={idx} style={{ marginBottom: '0.25rem' }}>{s}</li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
              <strong>Recomendación:</strong> {enfermedad.publicoGeneral.recomendaciones}
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '0.85rem' }}>
              <strong style={{ fontSize: '0.85rem', color: 'var(--color-accent-hover)', display: 'block' }}>
                Fisiopatología & Etiología:
              </strong>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', lineHeight: '1.5' }}>
                {enfermedad.personalSalud.fisiopatologia}
              </p>
            </div>
            <div style={{ marginBottom: '0.85rem' }}>
              <strong style={{ fontSize: '0.85rem', color: 'var(--color-accent-hover)', display: 'block' }}>
                Criterios Diagnósticos:
              </strong>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', lineHeight: '1.5' }}>
                {enfermedad.personalSalud.criteriosDiagnosticos}
              </p>
            </div>
            <div style={{ backgroundColor: '#ecfdf5', borderLeft: '3px solid var(--color-success)', padding: '0.65rem 0.85rem', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0', fontSize: '0.85rem', color: '#065f46', marginBottom: '1rem' }}>
              <strong>Manejo:</strong> {enfermedad.personalSalud.manejoTerapeutico}
            </div>
          </div>
        )}
      </div>

      {/* Enlace a Detalle */}
      <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
        <Link
          href={`/directorio/${enfermedad.id}`}
          className="btn btn-outline"
          style={{ width: '100%', fontSize: '0.9rem', padding: '0.6rem 1rem' }}
        >
          Consultar Ficha Médica Completa →
        </Link>
      </div>

    </div>
  );
}
