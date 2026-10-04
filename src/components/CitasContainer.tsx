'use client';

import React, { useState } from 'react';
import CalBooking from './CalBooking';
import AppointmentForm from './AppointmentForm';

export default function CitasContainer() {
  const [activeTab, setActiveTab] = useState<'cal' | 'manual'>('cal');

  return (
    <div>
      {/* Selector de Modalidad */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '2rem',
          background: 'var(--color-bg-surface)',
          padding: '0.5rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--color-border)',
          width: 'fit-content',
          margin: '0 auto 2rem auto',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <button
          type="button"
          onClick={() => setActiveTab('cal')}
          style={{
            padding: '0.65rem 1.4rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'var(--transition-smooth)',
            background: activeTab === 'cal' ? 'var(--color-primary)' : 'transparent',
            color: activeTab === 'cal' ? '#ffffff' : 'var(--color-text-muted)',
            boxShadow: activeTab === 'cal' ? 'var(--shadow-sm)' : 'none',
          }}
        >
          <span>⚡</span>
          <span>Agendamiento Automático (Cal.com)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('manual')}
          style={{
            padding: '0.65rem 1.4rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'var(--transition-smooth)',
            background: activeTab === 'manual' ? 'var(--color-primary)' : 'transparent',
            color: activeTab === 'manual' ? '#ffffff' : 'var(--color-text-muted)',
            boxShadow: activeTab === 'manual' ? 'var(--shadow-sm)' : 'none',
          }}
        >
          <span>📋</span>
          <span>Formulario Asistido / WhatsApp</span>
        </button>
      </div>

      {/* Contenido según la pestaña activa */}
      {activeTab === 'cal' ? (
        <CalBooking />
      ) : (
        <div>
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.25rem',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              color: 'var(--color-text-muted)',
            }}
          >
            ℹ️ ¿Prefieres coordinar tu cita directamente con nuestro equipo de secretaría o necesitas una indicación médica previa? Completa este formulario o envíanos un mensaje por WhatsApp.
          </div>
          <AppointmentForm />
        </div>
      )}
    </div>
  );
}
