'use client';

import { useState } from 'react';
import { medicosData } from '@/data/medicos';

// =========================================================================
// ⚠️ ATENCIÓN / CONFIGURACIÓN DE CORREO DE RECEPCIÓN DE CITAS:
// Actualmente configurado para pruebas hacia: luisge1299@gmail.com
// 
// 👉 PARA PRODUCCIÓN: Cambiar estos valores por los correos oficiales de la clínica:
// const EMAIL_CLINICA_PRINCIPAL = 'comedven@gmail.com';
// const EMAIL_CLINICA_SECUNDARIO = 'info.comedven@gmail.com';
// =========================================================================
const EMAIL_CLINICA_PRINCIPAL = 'luisge1299@gmail.com';
const EMAIL_CLINICA_SECUNDARIO = ''; // Dejar vacío para pruebas, o 'info.comedven@gmail.com' para producción

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    medico: '',
    servicio: 'Consulta Gastroenterológica General',
    fecha: '',
    turno: 'Mañana (8:00 AM - 12:00 PM)',
    nombre: '',
    cedula: '',
    telefono: '',
    email: '',
    motivo: '',
    metodoPago: 'Pago Móvil / Transferencia Bancaria'
  });

  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [mensajeError, setMensajeError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setMensajeError(null);

    try {
      // 1. Enviar el correo directamente a la clínica sin requerir cuentas
      const emailPayload: Record<string, string> = {
        _subject: `🏥 Nueva Solicitud de Cita: ${formData.nombre} - ${formData.servicio}`,
        _template: 'table',
        _captcha: 'false',
        'Paciente': formData.nombre,
        'Cédula / Documento': formData.cedula,
        'Teléfono de Contacto': formData.telefono,
        'Correo del Paciente': formData.email || 'No proporcionado',
        'Especialista Solicitado': formData.medico || 'Cualquier especialista disponible',
        'Servicio o Procedimiento': formData.servicio,
        'Fecha Deseada': formData.fecha,
        'Turno de Atención': formData.turno,
        'Modalidad de Pago': formData.metodoPago,
        'Motivo de Consulta / Síntomas': formData.motivo || 'Consulta preventiva / chequeo general'
      };

      if (EMAIL_CLINICA_SECUNDARIO) {
        emailPayload._cc = EMAIL_CLINICA_SECUNDARIO;
      }

      const emailRes = await fetch(`https://formsubmit.co/ajax/${EMAIL_CLINICA_PRINCIPAL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      if (!emailRes.ok) {
        console.warn('Respuesta no óptima al enviar correo, continuando con guardado interno');
      }

      // 2. Guardar registro en la base de datos interna local (/api/citas)
      try {
        await fetch('/api/citas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } catch (errApi) {
        console.warn('Aviso al guardar en API local:', errApi);
      }

      setEnviado(true);
    } catch (err) {
      console.error('Error al enviar la cita:', err);
      setMensajeError('Hubo un inconveniente al procesar el envío. Puedes continuar por WhatsApp.');
      setEnviado(true); // Permitir ver la confirmación y el botón de WhatsApp
    } finally {
      setEnviando(false);
    }
  };

  const handleOpenWhatsApp = () => {
    const mensaje = `Hola, confirmo mi solicitud de cita enviada desde la web al correo de la clínica:\n\n` +
      `*Paciente:* ${formData.nombre}\n` +
      `*Cédula:* ${formData.cedula}\n` +
      `*Teléfono:* ${formData.telefono}\n` +
      `*Especialista:* ${formData.medico || 'Cualquiera disponible'}\n` +
      `*Servicio:* ${formData.servicio}\n` +
      `*Fecha solicitada:* ${formData.fecha}\n` +
      `*Turno:* ${formData.turno}\n` +
      `*Modalidad de Pago:* ${formData.metodoPago}\n` +
      `*Motivo:* ${formData.motivo || 'Consulta preventiva'}`;

    const urlWhatsApp = `https://wa.me/584127542400?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <div className="card" suppressHydrationWarning style={{ padding: '2.5rem', boxShadow: 'var(--shadow-lg)' }}>
      {enviado ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              background: '#dcfce7',
              color: 'var(--color-success)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.2rem',
              margin: '0 auto 1.25rem auto'
            }}
          >
            ✓
          </div>

          <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            ¡Solicitud de Cita Enviada al Correo de la Clínica!
          </h3>

          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
            Los datos de tu reserva han sido enviados automáticamente a{' '}
            <strong style={{ color: 'var(--color-primary)' }}>{EMAIL_CLINICA_PRINCIPAL}</strong>.
            Nuestro equipo de coordinación revisará tu horario y se pondrá en contacto contigo a la brevedad.
          </p>

          {/* Resumen del ticket */}
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1.5rem',
              textAlign: 'left',
              maxWidth: '550px',
              margin: '0 auto 1.75rem auto',
              fontSize: '0.9rem'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div><strong>Paciente:</strong> {formData.nombre}</div>
              <div><strong>Cédula:</strong> {formData.cedula}</div>
              <div><strong>Teléfono:</strong> {formData.telefono}</div>
              <div><strong>Fecha:</strong> {formData.fecha} ({formData.turno.split(' ')[0]})</div>
              <div style={{ gridColumn: 'span 2' }}><strong>Servicio:</strong> {formData.servicio}</div>
              <div style={{ gridColumn: 'span 2' }}><strong>Especialista:</strong> {formData.medico || 'Cualquiera disponible'}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={handleOpenWhatsApp}
              className="btn btn-primary"
              style={{
                background: '#25d366',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem',
                padding: '0.75rem 1.5rem'
              }}
            >
              <span>💬</span>
              <span>Notificar también por WhatsApp (Opcional)</span>
            </button>

            <button
              onClick={() => {
                setEnviado(false);
                setFormData({
                  medico: '',
                  servicio: 'Consulta Gastroenterológica General',
                  fecha: '',
                  turno: 'Mañana (8:00 AM - 12:00 PM)',
                  nombre: '',
                  cedula: '',
                  telefono: '',
                  email: '',
                  motivo: '',
                  metodoPago: 'Pago Móvil / Transferencia Bancaria'
                });
              }}
              className="btn btn-outline"
            >
              Realizar Otra Solicitud
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} suppressHydrationWarning>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Especialista o Servicio */}
            <div className="grid-2">
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                  Especialista Médico:
                </label>
                <select
                  value={formData.medico}
                  onChange={(e) => setFormData({ ...formData, medico: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#fff' }}
                >
                  <option value="">Selecciona especialista (opcional)...</option>
                  {medicosData.map(m => (
                    <option key={m.id} value={`${m.nombre} (${m.especialidad})`}>
                      {m.nombre} - {m.especialidad}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                  Procedimiento o Servicio:
                </label>
                <select
                  value={formData.servicio}
                  onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#fff' }}
                  required
                >
                  <option value="Consulta Gastroenterológica General">Consulta Gastroenterológica General</option>
                  <option value="Consulta Hepatológica y Vías Biliares">Consulta Hepatológica y Vías Biliares</option>
                  <option value="Gastroscopia Superior Diagnóstica">Gastroscopia Superior Diagnóstica</option>
                  <option value="Colonoscopia Total con Sedación">Colonoscopia Total con Sedación</option>
                  <option value="Test de Aire Espirado (SIBO / Fructosa)">Test de Aire Espirado (SIBO / Fructosa)</option>
                  <option value="Valoración Quirúrgica / Vesícula Biliar">Valoración Quirúrgica / Vesícula Biliar</option>
                </select>
              </div>
            </div>

            {/* Fecha y Turno */}
            <div className="grid-2">
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                  Fecha Deseada:
                </label>
                <input
                  type="date"
                  value={formData.fecha}
                  onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#fff' }}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                  Turno de Atención:
                </label>
                <select
                  value={formData.turno}
                  onChange={(e) => setFormData({ ...formData, turno: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#fff' }}
                  required
                >
                  <option value="Mañana (8:00 AM - 12:00 PM)">Mañana (8:00 AM - 12:00 PM)</option>
                  <option value="Tarde (1:30 PM - 5:30 PM)">Tarde (1:30 PM - 5:30 PM)</option>
                </select>
              </div>
            </div>

            {/* Datos del Paciente */}
            <div className="grid-3">
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                  Nombre y Apellido:
                </label>
                <input
                  type="text"
                  placeholder="Ej. Carmen Rodríguez"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#fff' }}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                  Cédula / Documento:
                </label>
                <input
                  type="text"
                  placeholder="Ej. V-12345678"
                  value={formData.cedula}
                  onChange={(e) => setFormData({ ...formData, cedula: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#fff' }}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                  Teléfono de Contacto:
                </label>
                <input
                  type="tel"
                  placeholder="Ej. +58 412 0000000"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#fff' }}
                  required
                />
              </div>
            </div>

            {/* Correo Electrónico del Paciente */}
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                Correo Electrónico del Paciente (Opcional):
              </label>
              <input
                type="email"
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#fff' }}
              />
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem', display: 'block' }}>
                Te enviaremos los detalles o indicaciones preparatorias a este correo si lo proporcionas.
              </span>
            </div>

            {/* Motivo de la Consulta */}
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                Motivo de la Consulta o Síntomas:
              </label>
              <textarea
                rows={3}
                placeholder="Describe brevemente tus síntomas o motivo de consulta (ej. ardor estomacal, control rutinario, sospecha de colon irritable, indicación de endoscopia)..."
                value={formData.motivo}
                onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#fff',
                  resize: 'vertical',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            {/* Modalidad de Pago */}
            <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '0.95rem' }}>Modalidad de Pago</h4>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                Selecciona la vía con la que deseas abonar o completar el pago de tu consulta:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Pago Móvil / Transferencia', 'Zelle / Dólares Efectivo', 'Punto de Venta Presencial', 'Enlace de Pago Tarjeta Internacional'].map(metodo => (
                  <label key={metodo} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', cursor: 'pointer', background: '#ffffff', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                    <input
                      type="radio"
                      name="metodoPago"
                      value={metodo}
                      checked={formData.metodoPago === metodo}
                      onChange={() => setFormData({ ...formData, metodoPago: metodo })}
                    />
                    <span>{metodo}</span>
                  </label>
                ))}
              </div>
            </div>

            {mensajeError && (
              <div style={{ color: 'var(--color-danger)', fontSize: '0.85rem', padding: '0.5rem', background: '#fee2e2', borderRadius: 'var(--radius-sm)' }}>
                {mensajeError}
              </div>
            )}

            <button
              type="submit"
              disabled={enviando}
              className="btn btn-accent"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.1rem',
                marginTop: '0.5rem',
                opacity: enviando ? 0.75 : 1,
                cursor: enviando ? 'not-allowed' : 'pointer'
              }}
            >
              {enviando ? '✉️ Enviando solicitud al correo de la clínica...' : '📨 Enviar Solicitud de Cita al Correo'}
            </button>

          </div>
        </form>
      )}
    </div>
  );
}
