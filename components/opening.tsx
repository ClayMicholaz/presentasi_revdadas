export default function Opening() {
  return (
    <section className="section section-opening">
      <div className="section-meta" aria-hidden="true">
        <span>1</span>
        <span>Hackathon PIDI BI DIGDAYA 2026</span>
      </div>
      
      <div style={{ textAlign: 'center', maxWidth: '900px' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '2rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
          RevDadas
        </h1>
        <p className="subheadline" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 2rem)', marginBottom: '2.5rem', lineHeight: '1.4' }}>
          AI-Powered Revenue Analytics & Anomaly Detection untuk Optimalisasi Fiskal Pemerintah Daerah
        </p>
        <p className="tagline" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', marginBottom: '3rem', fontWeight: '600' }}>
          <a href="https://revdadas.vercel.app/" target="_blank" rel="noopener noreferrer">
            revdadas.vercel.app
          </a>
        </p>
        <p className="team" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1.125rem)', lineHeight: '1.6', opacity: '0.9' }}>
          Kwik Andreas Jonathan · Clay Micholaz Fu · Gwyneth Eunice Widjaja · Moses Chisthoper Adisam
        </p>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
