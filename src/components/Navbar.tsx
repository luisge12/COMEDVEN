'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/equipo-medico', label: 'Equipo Médico' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/directorio', label: 'Directorio Médico' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <>
      {/* Header Fijo */}
      <header
        className="site-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div className="container navbar-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '75px' }}>
          
          {/* Logotipo */}
          <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.15rem', color: 'var(--color-primary)', fontFamily: 'var(--font-family-heading)', textDecoration: 'none' }}>
            <span>Centro de Especialidades Digestivas</span>
          </Link>

          {/* Botón Hamburguesa para Móviles y Tablets */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: 'var(--color-primary-dark)',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

          {/* Navegación Desktop */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: isActive ? 'var(--color-accent)' : 'var(--color-text-main)',
                    borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
                    paddingBottom: '0.25rem',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link href="/citas" className="btn btn-primary" style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}>
              Agendar Cita
            </Link>
          </nav>
        </div>

        {/* Menú Desplegable Móvil */}
        {isOpen && (
          <div className="mobile-nav-menu" style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid var(--color-border)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-md)'
          }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: isActive ? 'var(--color-accent)' : 'var(--color-text-main)',
                    padding: '0.4rem 0'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/citas"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '0.5rem', padding: '0.65rem 1rem', fontSize: '0.9rem', textAlign: 'center' }}
            >
              Agendar Cita
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
