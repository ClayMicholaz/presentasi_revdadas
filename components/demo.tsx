export default function Demo() {
  return (
    <section className="section section-demo">
      <div className="section-meta" aria-hidden="true">
        <span>06-07</span>
        <span>Prototype &amp; Technology</span>
      </div>
      
      <div className="slide-content">
        <div className="slide-6">
          <h1>Bukan Mockup. Ini Live.</h1>
          <h2>RevDadas sudah live — 9 komponen fungsional, data real, dapat diakses sekarang.</h2>
          
          <div className="badges">
            <span className="badge live">🟢 LIVE</span>
            <span className="badge">revdadas.vercel.app</span>
            <span className="badge">Next.js 16 + React 19</span>
          </div>
          
          <div className="components-checklist">
            <h3>9 Komponen:</h3>
            <ul>
              <li>✅ KPI Cards (Revenue, Anomali, Revenue Loss, Kemandirian Fiskal)</li>
              <li>✅ Heatmap Geospasial Indonesia (Leaflet)</li>
              <li>✅ Anomaly Detection Table (Isolation Forest + AI Reason)</li>
              <li>✅ Impact Calculator</li>
              <li>✅ Revenue Historical vs Forecast Chart</li>
              <li>✅ Proportion Chart (14 Komponen APBD)</li>
              <li>✅ AI Policy Recommendations</li>
              <li>✅ Interactive Sidebar</li>
              <li>✅ Export PDF Eksekutif</li>
            </ul>
          </div>
          
          <div className="data-coverage">
            <p>📁 8 Provinsi Tervalidasi · 14 Komponen APBD · Data DJPK 2023–2025 · 110 Skenario Validated</p>
          </div>
        </div>
        
        <div className="slide-7">
          <h1>▶ DEMO: Core Use Case</h1>
          <h2>Deteksi Anomali DKI Jakarta</h2>
          
          <div className="demo-description">
            <p>Menunjukkan: Pilih Provinsi → KPI Cards → Anomali Severity Tinggi → Heatmap → Export PDF</p>
          </div>
          
          <div className="demo-placeholder">
            <p>[Live Demo / Screen Share]</p>
            <p className="demo-link">🌐 revdadas.vercel.app</p>
          </div>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
