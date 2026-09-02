'use client';

import { useState } from 'react';
import { medicosData } from '@/data/medicos';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensaje = `Hola, deseo confirmar mi solicitud de cita médica en el *Centro de Especialidades Digestivas*:\n\n` +
      `*Paciente:* ${formData.nombre}\n` +
      `*Cédula/ID:* ${formData.cedula}\n` +
      `*Teléfono:* ${formData.telefono}\n` +
      `*Especialista:* ${formData.medico || 'Cualquier especialista disponible'}\n` +
      `*Servicio:* ${formData.servicio}\n` +
      `*Fecha solicitada:* ${formData.fecha}\n` +
      `*Turno:* ${formData.turno}\n` +
      `*Modalidad de Pago:* ${formData.metodoPago}\n` +
      `*Motivo:* ${formData.motivo || 'Consulta preventiva'}`;

    const urlWhatsApp = `https://wa.me/584120000000?text=${encodeURIComponent(mensaje)}`;
    
    setEnviado(true);
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <div className="card" style={{ padding: '2.5rem', boxShadow: 'var(--shadow-lg)' }}>
      {enviado ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <h3 style={{ color: 'var(--color-primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>
            ¡Solicitud de Cita Iniciada!
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Hemos abierto tu canal de WhatsApp con los datos de tu reserva para que nuestra secretaría médica confirme tu turno de inmediato.
          </p>
          <button
            onClick={() => setEnviado(false)}
            className="btn btn-outline"
          >
            Modificar o Realizar Otra Solicitud
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
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

            {/* Pasarela y Modalidad de Pago */}
            <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '0.95rem' }}>Modalidad de Pago & Pasarela</h4>
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

            <button
              type="submit"
              className="btn btn-accent"
              style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '0.5rem' }}
            >
              Confirmar y Enviar Solicitud de Cita
            </button>

          </div>
        </form>
      )}
    </div>
  );
}
