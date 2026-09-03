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
      {/* Barra de Contacto Superior */}
      <aside suppressHydrationWarning style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', fontSize: '0.85rem', padding: '0.5rem 0' }}>
        <div className="container" suppressHydrationWarning style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p suppressHydrationWarning style={{ margin: 0 }}>
            Atención: 0412-7542400 / 0212-5550340 | Policlínica La Arboleda, Piso 2, Consultorio 211
          </p>
          <div suppressHydrationWarning style={{ display: 'flex', gap: '1.25rem' }}>
            <span>Caracas, Distrito Capital</span>
            <a href="https://instagram.com/tuendoscopia" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#67e8f9' }}>
              Instagram: @tuendoscopia
            </a>
          </div>
        </div>
      </aside>

      {/* Header Fijo */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          
          {/* Logotipo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-primary)', fontFamily: 'var(--font-family-heading)' }}>
            <span>Centro de Especialidades Digestivas</span>
          </Link>

          {/* Navegación Desktop */}
          <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
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

            <Link href="/citas" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
              Agendar Cita
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
