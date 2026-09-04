export default function Demo() {
  return (
    <section className="section section-demo">
      <div className="section-meta" aria-hidden="true">
        <span>6</span>
        <span>Live Prototype</span>
      </div>
      
      <div className="slide-content">
        <h1>Bukan Mockup. Ini Live.</h1>
        <h2>RevDadas sudah live — 9 komponen fungsional, data real, dapat diakses sekarang.</h2>
        
        <div className="badges">
          <span className="badge live">LIVE</span>
          <span className="badge">
            <a href="https://revdadas.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              revdadas.vercel.app
            </a>
          </span>
          <span className="badge">Next.js 16 + React 19</span>
        </div>
        
        <div className="components-checklist" style={{ marginTop: '1.5rem' }}>
          <ul style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
            <li>KPI Cards (Revenue, Anomali, Loss, Kemandirian)</li>
            <li>Heatmap Geospasial Indonesia</li>
            <li>Anomaly Detection Table (IF + AI Reason)</li>
            <li>Impact Calculator</li>
            <li>Revenue Historical vs Forecast Chart</li>
            <li>Proportion Chart (14 Komponen APBD)</li>
            <li>AI Policy Recommendations</li>
            <li>Interactive Sidebar</li>
            <li>Export PDF Eksekutif</li>
          </ul>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>8 Provinsi Tervalidasi · 14 Komponen APBD · Data DJPK 2023–2025</p>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
