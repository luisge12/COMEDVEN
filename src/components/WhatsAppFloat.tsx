'use client';

export default function WhatsAppFloat() {
  const phoneNumber = "584123219381"; // Número oficial de atención
  const defaultText = encodeURIComponent("Hola, me comunico desde el portal web del Centro de Endoscopias y Especialidades Digestivas. Deseo información sobre consultas y procedimientos.");
  const urlWhatsApp = `https://wa.me/${phoneNumber}?text=${defaultText}`;
  const urlInstagram = "https://instagram.com/tuendoscopia";

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        alignItems: 'center'
      }}
    >
      {/* Botón Flotante Instagram (sobre el de WhatsApp) */}
      <a
        href={urlInstagram}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '58px',
          height: '58px',
          background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          color: '#ffffff',
          borderRadius: 'var(--radius-full)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(220, 39, 67, 0.45)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          textDecoration: 'none'
        }}
        title="Síguenos en Instagram @tuendoscopia"
        aria-label="Instagram @tuendoscopia"
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(220, 39, 67, 0.65)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 39, 67, 0.45)';
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>

      {/* Botón Flotante WhatsApp */}
      <a
        href={urlWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        style={{
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
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          textDecoration: 'none'
        }}
        title="Atención directa por WhatsApp"
        aria-label="Contactar por WhatsApp"
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.65)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.45)';
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.18-.553-1.638-.677-2.704-2.338-2.787-2.449-.083-.111-.664-.883-.664-1.684 0-.802.42-1.196.57-1.356.15-.16.327-.2.436-.2.11 0 .22 0 .316.005.102.006.239-.039.373.285.144.35.49 1.195.534 1.284.044.089.073.193.013.311-.06.119-.089.193-.177.297-.089.104-.187.232-.267.311-.089.089-.182.185-.078.363.104.178.463.764.993 1.236.683.609 1.26.797 1.438.886.178.089.282.074.386-.045.104-.119.444-.519.563-.697.119-.178.238-.148.4-.089.162.059 1.028.485 1.205.574.177.089.296.133.34.208.044.074.044.43-.1 1.235z"/>
        </svg>
      </a>
    </div>
  );
}
