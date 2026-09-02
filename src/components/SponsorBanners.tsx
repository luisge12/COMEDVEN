import { sponsorBannersData } from '@/data/banners';

export default function SponsorBanners() {
  const activeBanners = sponsorBannersData.filter(b => b.activo).slice(0, 3);

  return (
    <div style={{ margin: '3rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#94a3b8'
        }}>
          Marcas Patrocinantes & Alianzas Estratégicas del Sector Salud
        </span>
      </div>

      <div className="grid-3" style={{ gap: '1.25rem' }}>
        {activeBanners.map(banner => (
          <div
            key={banner.id}
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              transition: 'var(--transition-smooth)'
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: 'var(--color-accent)' }}></div>
            
            <div>
              <span style={{
                display: 'inline-block',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-primary-light)',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '0.75rem'
              }}>
                {banner.badge}
              </span>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
                {banner.marca}
              </h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>
                {banner.descripcion}
              </p>
            </div>

            <div>
              <span style={{ display: 'block', fontSize: '0.775rem', fontStyle: 'italic', color: '#64748b', marginBottom: '0.75rem' }}>
                &ldquo;{banner.tagline}&rdquo;
              </span>
              <a
                href={banner.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.9rem', width: '100%' }}
              >
                Conocer Más ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
