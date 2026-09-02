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
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.18-.553-1.638-.677-2.704-2.338-2.787-2.449-.083-.111-.664-.883-.664-1.684 0-.802.42-1.196.57-1.356.15-.16.327-.2.436-.2.11 0 .22 0 .316.005.102.006.239-.039.373.285.144.35.49 1.195.534 1.284.044.089.073.193.013.311-.06.119-.089.193-.177.297-.089.104-.187.232-.267.311-.089.089-.182.185-.078.363.104.178.463.764.993 1.236.683.609 1.26.797 1.438.886.178.089.282.074.386-.045.104-.119.444-.519.563-.697.119-.178.238-.148.4-.089.162.059 1.028.485 1.205.574.177.089.296.133.34.208.044.074.044.43-.1 1.235z"/>
      </svg>
    </a>
  );
}
