import { Metadata } from 'next';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Agendar Cita Médica & Pagos | Centro de Especialidades Digestivas',
  description: 'Módulo interactivo de reserva de citas con gastroenterólogos, hepatólogos y estudios endoscópicos. Métodos de pago flexibles.',
};

export default function CitasPage() {
  return (
    <div className="section" style={{ backgroundColor: 'var(--color-bg-body)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <div className="section-title-wrap">
          <span className="section-tag">Agendamiento en Línea</span>
          <h1 className="section-title">Reserva tu Cita Especializada</h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.05rem' }}>
            Completa el siguiente formulario interactivo. Nuestro equipo de coordinación médica se pondrá en contacto para confirmar tu horario y brindarte las indicaciones previas a tu estudio.
          </p>
        </div>

        {/* Formulario Interactivo */}
        <AppointmentForm />

        {/* Información de Apoyo al Paciente */}
        <div className="grid-2" style={{ marginTop: '3.5rem', gap: '1.5rem' }}>
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Preparación para Endoscopias
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
              Para gastroscopias se requiere ayuno mínimo de 8 horas. Para colonoscopias se suministra un protocolo de preparación intestinal con 48 horas de anticipación.
            </p>
          </div>

          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Seguridad & Bioseguridad
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
              Todas las endoscopias se realizan bajo supervisión de un médico anestesiólogo certificado y desinfección automatizada de alto nivel en cada procedimiento.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
