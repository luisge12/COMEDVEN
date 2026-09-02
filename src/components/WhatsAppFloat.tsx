'use client';

export default function WhatsAppFloat() {
  const phoneNumber = "584120000000"; // Número configurable
  const defaultText = encodeURIComponent("Hola, me comunico desde el portal web del Centro de Especialidades Digestivas. Deseo información sobre consultas.");
  const url = `https://wa.me/${phoneNumber}?text=${defaultText}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '62px',
        height: '62px',
        backgroundColor: 'var(--color-whatsapp)',
        color: '#ffffff',
        borderRadius: 'var(--radius-full)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
        zIndex: 999,
        transition: 'var(--transition-smooth)',
        textDecoration: 'none'
      }}
      title="Atención directa por WhatsApp"
      aria-label="Contactar por WhatsApp"
    >
      💬
    </a>
  );
}
