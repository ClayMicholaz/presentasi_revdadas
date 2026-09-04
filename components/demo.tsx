export default function Demo() {
  return (
    <section className="section section-demo">
      <div className="section-meta" aria-hidden="true">
        <span>06-07</span>
        <span>Prototype & Technology</span>
      </div>
      
      <div className="slide-content">
        <div className="slide-6">
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
          
          <div className="components-checklist" style={{ marginTop: '2rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#f6f1e7' }}>9 Komponen:</h3>
            <ul style={{ maxWidth: '900px', margin: '0 auto' }}>
              <li>KPI Cards (Revenue, Anomali, Revenue Loss, Kemandirian Fiskal)</li>
              <li>Heatmap Geospasial Indonesia (Leaflet)</li>
              <li>Anomaly Detection Table (Isolation Forest + AI Reason)</li>
              <li>Impact Calculator</li>
              <li>Revenue Historical vs Forecast Chart</li>
              <li>Proportion Chart (14 Komponen APBD)</li>
              <li>AI Policy Recommendations</li>
              <li>Interactive Sidebar</li>
              <li>Export PDF Eksekutif</li>
            </ul>
          </div>
          
          <div className="data-coverage" style={{ marginTop: '2rem' }}>
            <p style={{ color: '#1e293b' }}>8 Provinsi Tervalidasi · 14 Komponen APBD · Data DJPK 2023–2025 · 110 Skenario Validated</p>
          </div>
        </div>
        
        <div className="slide-7" style={{ marginTop: '4rem' }}>
          <h1>DEMO: Core Use Case</h1>
          <h2>Deteksi Anomali DKI Jakarta</h2>
          
          <div className="demo-description" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p>Menunjukkan: Pilih Provinsi → KPI Cards → Anomali Severity Tinggi → Heatmap → Export PDF</p>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p className="demo-link">
              <a href="https://revdadas.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', fontSize: '2rem', fontWeight: '600' }}>
                revdadas.vercel.app
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
