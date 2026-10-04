'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export interface Cita {
  id: string;
  fechaCreacion: string;
  nombre: string;
  cedula: string;
  telefono: string;
  medico: string;
  servicio: string;
  fechaDeseada: string;
  turno: string;
  metodoPago: string;
  motivo: string;
  estado: 'Pendiente' | 'Confirmada' | 'Atendida' | 'Cancelada';
  notasInternas?: string;
}

export default function AdminCitasPage() {
  // Clave PIN por defecto para el personal administrativo (puedes cambiarla en cualquier momento)
  const PIN_CORRECTO = '1234';

  const [pinIngresado, setPinIngresado] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [pinError, setPinError] = useState(false);

  const [citas, setCitas] = useState<Cita[]>([]);
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState<string>('Todas');
  const [notaEnEdicion, setNotaEnEdicion] = useState<{ [id: string]: string }>({});
  const [guardandoId, setGuardandoId] = useState<string | null>(null);

  // Verificar si ya estaba autenticado en la sesión
  useEffect(() => {
    const sesion = sessionStorage.getItem('admin_citas_auth');
    if (sesion === 'true') {
      setAutenticado(true);
    }
  }, []);

  // Cargar citas cuando se autentica
  useEffect(() => {
    if (autenticado) {
      cargarCitas();
    }
  }, [autenticado]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinIngresado.trim() === PIN_CORRECTO) {
      setAutenticado(true);
      setPinError(false);
      sessionStorage.setItem('admin_citas_auth', 'true');
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    setAutenticado(false);
    sessionStorage.removeItem('admin_citas_auth');
  };

  const cargarCitas = async () => {
    setCargando(true);
    try {
      const res = await fetch('/api/citas');
      if (res.ok) {
        const data = await res.json();
        setCitas(data);
      }
    } catch (err) {
      console.error('Error cargando citas:', err);
    } finally {
      setCargando(false);
    }
  };

  const cambiarEstado = async (id: string, nuevoEstado: Cita['estado']) => {
    setGuardandoId(id);
    try {
      const res = await fetch('/api/citas', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, estado: nuevoEstado })
      });
      if (res.ok) {
        setCitas(prev => prev.map(c => c.id === id ? { ...c, estado: nuevoEstado } : c));
      }
    } catch (err) {
      console.error('Error cambiando estado:', err);
    } finally {
      setGuardandoId(null);
    }
  };

  const guardarNota = async (id: string) => {
    const nota = notaEnEdicion[id];
    setGuardandoId(id);
    try {
      const res = await fetch('/api/citas', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, notasInternas: nota })
      });
      if (res.ok) {
        setCitas(prev => prev.map(c => c.id === id ? { ...c, notasInternas: nota } : c));
      }
    } catch (err) {
      console.error('Error guardando nota:', err);
    } finally {
      setGuardandoId(null);
    }
  };

  const eliminarCita = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este registro de cita?')) return;
    setGuardandoId(id);
    try {
      const res = await fetch(`/api/citas?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setCitas(prev => prev.filter(c => c.id !== id));
      }
    } catch (err) {
      console.error('Error eliminando cita:', err);
    } finally {
      setGuardandoId(null);
    }
  };

  const descargarCSV = () => {
    if (citas.length === 0) {
      alert('No hay citas para exportar');
      return;
    }

    const encabezados = [
      'Fecha Registro',
      'Estado',
      'Paciente',
      'Cédula',
      'Teléfono',
      'Especialista',
      'Servicio',
      'Fecha Deseada',
      'Turno',
      'Método Pago',
      'Motivo Consulta',
      'Notas Internas'
    ];

    const filas = citas.map(c => [
      new Date(c.fechaCreacion).toLocaleString('es-VE'),
      c.estado,
      `"${c.nombre.replace(/"/g, '""')}"`,
      `"${c.cedula}"`,
      `"${c.telefono}"`,
      `"${c.medico.replace(/"/g, '""')}"`,
      `"${c.servicio.replace(/"/g, '""')}"`,
      c.fechaDeseada,
      c.turno,
      `"${c.metodoPago}"`,
      `"${(c.motivo || '').replace(/"/g, '""')}"`,
      `"${(c.notasInternas || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [encabezados.join(','), ...filas.map(f => f.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `citas_centro_digestivo_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtrado de citas
  const citasFiltradas = citas.filter(c => {
    const coincideEstado = filtroEstado === 'Todas' || c.estado === filtroEstado;
    const q = busqueda.toLowerCase().trim();
    const coincideBusqueda =
      !q ||
      c.nombre.toLowerCase().includes(q) ||
      c.cedula.toLowerCase().includes(q) ||
      c.telefono.toLowerCase().includes(q) ||
      c.medico.toLowerCase().includes(q) ||
      c.servicio.toLowerCase().includes(q) ||
      (c.motivo && c.motivo.toLowerCase().includes(q));

    return coincideEstado && coincideBusqueda;
  });

  // Métricas
  const total = citas.length;
  const pendientes = citas.filter(c => c.estado === 'Pendiente').length;
  const confirmadas = citas.filter(c => c.estado === 'Confirmada').length;
  const atendidas = citas.filter(c => c.estado === 'Atendida').length;

  // =========================================================================
  // PANTALLA DE ACCESO / PIN DE SEGURIDAD
  // =========================================================================
  if (!autenticado) {
    return (
      <div className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="card" style={{ maxWidth: '420px', width: '100%', padding: '2.5rem', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
          <h2 style={{ color: 'var(--color-primary-dark)', fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'var(--font-family-heading)' }}>
            Panel de Gestión de Citas
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Acceso exclusivo para el personal médico y administrativo del Centro de Especialidades Digestivas.
          </p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.25rem', textAlign: 'left' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
                Ingresa el PIN de Acceso:
              </label>
              <input
                type="password"
                placeholder="PIN (por defecto: 1234)"
                value={pinIngresado}
                onChange={e => setPinIngresado(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  letterSpacing: '0.2em',
                  border: pinError ? '2px solid var(--color-danger)' : '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)'
                }}
                autoFocus
              />
              {pinError && (
                <span style={{ display: 'block', color: 'var(--color-danger)', fontSize: '0.8rem', marginTop: '0.4rem', textAlign: 'center' }}>
                  PIN incorrecto. Intenta con 1234.
                </span>
              )}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem' }}>
              Desbloquear Panel
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
            <Link href="/" style={{ fontSize: '0.825rem', color: 'var(--color-primary)' }}>
              &larr; Volver al Portal Principal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // DASHBOARD PRINCIPAL DE GESTIÓN
  // =========================================================================
  return (
    <div className="section" style={{ backgroundColor: 'var(--color-bg-body)', minHeight: '90vh', paddingTop: '3rem' }}>
      <div className="container" style={{ maxWidth: '1280px' }}>
        
        {/* Cabecera del Panel */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <span className="section-tag" style={{ marginBottom: '0.25rem', display: 'inline-block' }}>
              Administración Interna
            </span>
            <h1 style={{ fontSize: '1.85rem', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-family-heading)', fontWeight: 700 }}>
              Control y Registro de Citas Médicas
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              Consulta, actualiza y gestiona las solicitudes recibidas a través del portal web.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={descargarCSV}
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', padding: '0.6rem 1rem' }}
              title="Exportar archivo CSV compatible con Excel"
            >
              📥 Exportar a Excel (CSV)
            </button>
            <button
              onClick={cargarCitas}
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', padding: '0.6rem 1rem' }}
            >
              🔄 {cargando ? 'Actualizando...' : 'Recargar'}
            </button>
            <button
              onClick={handleLogout}
              className="btn"
              style={{ fontSize: '0.85rem', padding: '0.6rem 1rem', backgroundColor: '#e2e8f0', color: '#475569' }}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>

        {/* Tarjetas de Métricas KPI */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem'
          }}
        >
          <div className="card" style={{ padding: '1.25rem', borderLeft: '4px solid var(--color-primary)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
              Total Solicitudes
            </span>
            <h3 style={{ fontSize: '2rem', color: 'var(--color-primary-dark)', marginTop: '0.25rem' }}>{total}</h3>
          </div>

          <div className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #f59e0b' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase' }}>
              Pendientes por Confirmar
            </span>
            <h3 style={{ fontSize: '2rem', color: '#b45309', marginTop: '0.25rem' }}>{pendientes}</h3>
          </div>

          <div className="card" style={{ padding: '1.25rem', borderLeft: '4px solid var(--color-accent)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase' }}>
              Confirmadas
            </span>
            <h3 style={{ fontSize: '2rem', color: 'var(--color-accent)', marginTop: '0.25rem' }}>{confirmadas}</h3>
          </div>

          <div className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #10b981' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase' }}>
              Atendidas / Completadas
            </span>
            <h3 style={{ fontSize: '2rem', color: '#047857', marginTop: '0.25rem' }}>{atendidas}</h3>
          </div>
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div
          className="card"
          style={{
            padding: '1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {/* Pestañas de Estado */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['Todas', 'Pendiente', 'Confirmada', 'Atendida', 'Cancelada'].map(estado => (
              <button
                key={estado}
                onClick={() => setFiltroEstado(estado)}
                style={{
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  cursor: 'pointer',
                  backgroundColor: filtroEstado === estado ? 'var(--color-primary)' : '#ffffff',
                  borderColor: filtroEstado === estado ? 'var(--color-primary)' : 'var(--color-border)',
                  color: filtroEstado === estado ? '#ffffff' : 'var(--color-text-main)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {estado} {estado === 'Todas' ? `(${total})` : estado === 'Pendiente' ? `(${pendientes})` : ''}
              </button>
            ))}
          </div>

          {/* Campo de Búsqueda */}
          <div style={{ flex: '1', minWidth: '240px', maxWidth: '380px' }}>
            <input
              type="text"
              placeholder="Buscar por paciente, cédula, teléfono o doctor..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 0.85rem',
                fontSize: '0.85rem',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: '#ffffff'
              }}
            />
          </div>
        </div>

        {/* Listado de Citas */}
        {citasFiltradas.length === 0 ? (
          <div className="card" style={{ padding: '3.5rem 2rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>📋</span>
            <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.15rem', marginBottom: '0.25rem' }}>
              No se encontraron citas
            </h3>
            <p style={{ fontSize: '0.85rem' }}>
              {busqueda ? 'No hay registros que coincidan con la búsqueda actual.' : 'Aún no hay citas registradas en esta categoría.'}
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {citasFiltradas.map(cita => {
              const telLimpio = cita.telefono.replace(/[^\d+]/g, '');
              const urlWhatsApp = telLimpio ? `https://wa.me/${telLimpio.replace(/^\+/, '')}` : null;
              const enGuardado = guardandoId === cita.id;

              // Color badge según estado
              const badgeStyle = {
                Pendiente: { bg: '#fef3c7', text: '#92400e', border: '#fcd34d' },
                Confirmada: { bg: '#e0f2fe', text: '#0369a1', border: '#7dd3fc' },
                Atendida: { bg: '#dcfce7', text: '#15803d', border: '#86efac' },
                Cancelada: { bg: '#fee2e2', text: '#b91c1c', border: '#fca5a5' }
              }[cita.estado] || { bg: '#f1f5f9', text: '#475569', border: '#cbd5e1' };

              return (
                <div
                  key={cita.id}
                  className="card"
                  style={{
                    padding: '1.5rem',
                    boxShadow: 'var(--shadow-sm)',
                    borderLeft: `5px solid ${badgeStyle.text}`,
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    {/* Paciente y Cédula */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', margin: 0, fontWeight: 700 }}>
                          {cita.nombre}
                        </h3>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            padding: '0.2rem 0.6rem',
                            borderRadius: 'var(--radius-full)',
                            backgroundColor: badgeStyle.bg,
                            color: badgeStyle.text,
                            border: `1px solid ${badgeStyle.border}`
                          }}
                        >
                          {cita.estado}
                        </span>
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.35rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
                        <span>🆔 Cédula: <strong>{cita.cedula}</strong></span>
                        <span>
                          📞 Teléfono: <strong>{cita.telefono}</strong>
                          {urlWhatsApp && (
                            <a
                              href={urlWhatsApp}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                marginLeft: '0.5rem',
                                color: 'var(--color-whatsapp)',
                                fontWeight: 600,
                                textDecoration: 'underline'
                              }}
                            >
                              Abrir WhatsApp &rarr;
                            </a>
                          )}
                        </span>
                        <span>Registrada el: {new Date(cita.fechaCreacion).toLocaleDateString('es-VE')}</span>
                      </div>
                    </div>

                    {/* Selector de Cambio de Estado Rápido */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Estado:</span>
                      <select
                        value={cita.estado}
                        disabled={enGuardado}
                        onChange={e => cambiarEstado(cita.id, e.target.value as Cita['estado'])}
                        style={{
                          padding: '0.4rem 0.6rem',
                          fontSize: '0.825rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--color-border)',
                          backgroundColor: '#ffffff',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        <option value="Pendiente">Pendiente</option>
                        <option value="Confirmada">Confirmada</option>
                        <option value="Atendida">Atendida</option>
                        <option value="Cancelada">Cancelada</option>
                      </select>

                      <button
                        onClick={() => eliminarCita(cita.id)}
                        disabled={enGuardado}
                        title="Eliminar este registro"
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          color: '#94a3b8',
                          padding: '0.3rem'
                        }}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>

                  {/* Detalles de la Consulta en Rejilla */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '1rem',
                      padding: '1rem',
                      backgroundColor: 'var(--color-bg-body)',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '1rem',
                      fontSize: '0.85rem'
                    }}
                  >
                    <div>
                      <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
                        Especialista:
                      </span>
                      <strong style={{ color: 'var(--color-primary-dark)' }}>{cita.medico}</strong>
                    </div>

                    <div>
                      <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
                        Servicio o Procedimiento:
                      </span>
                      <strong style={{ color: 'var(--color-primary)' }}>{cita.servicio}</strong>
                    </div>

                    <div>
                      <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
                        Fecha y Turno Deseado:
                      </span>
                      <strong>{cita.fechaDeseada} &bull; {cita.turno}</strong>
                    </div>

                    <div>
                      <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
                        Modalidad de Pago:
                      </span>
                      <span>💳 {cita.metodoPago}</span>
                    </div>
                  </div>

                  {/* Motivo de la Consulta */}
                  {cita.motivo && (
                    <div style={{ marginBottom: '1rem', fontSize: '0.85rem' }}>
                      <strong style={{ color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.2rem' }}>
                        Motivo de Consulta / Síntomas reportados:
                      </strong>
                      <p style={{ color: 'var(--color-text-main)', backgroundColor: '#ffffff', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', margin: 0, fontStyle: 'italic' }}>
                        &ldquo;{cita.motivo}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Notas Administrativas Internas */}
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="text"
                      placeholder="Escribir nota interna del consultorio (ej. Confirmada para las 3:00pm, requiere ayuno)..."
                      value={notaEnEdicion[cita.id] !== undefined ? notaEnEdicion[cita.id] : cita.notasInternas || ''}
                      onChange={e => setNotaEnEdicion({ ...notaEnEdicion, [cita.id]: e.target.value })}
                      style={{
                        flex: 1,
                        padding: '0.45rem 0.75rem',
                        fontSize: '0.825rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: '#ffffff'
                      }}
                    />
                    <button
                      onClick={() => guardarNota(cita.id)}
                      disabled={enGuardado}
                      className="btn btn-outline"
                      style={{ padding: '0.45rem 0.8rem', fontSize: '0.775rem' }}
                    >
                      Guardar Nota
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
