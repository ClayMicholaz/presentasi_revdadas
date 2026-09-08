export default function Demo() {
  return (
    <section className="section section-demo">
      <div className="section-meta" aria-hidden="true">
        <span>6</span>
        <span>Live Prototype</span>
      </div>
      
      <div className="slide-content">
        <h1>Prototype yang Bisa Langsung Dicoba</h1>
        <h2>RevDadas sudah live dan bisa diakses publik. 9 fitur lengkap dengan data real dari DJPK. Belum diuji oleh Bapenda (target: validasi dengan Bapenda pada fase pilot).</h2>
        
        <div className="badges">
          <span className="badge live">PROTOTIPE FUNGSIONAL</span>
          <span className="badge">
            <a href="https://revdadas.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              revdadas.vercel.app
            </a>
          </span>
        </div>
        
        <div className="components-checklist" style={{ marginTop: '1.5rem' }}>
          <ul style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
            <li>KPI Cards (Revenue, Anomali, Loss, Kemandirian)</li>
            <li>Peta Indonesia dengan Heatmap</li>
            <li>Tabel Deteksi Anomali + Alasan AI</li>
            <li>Kalkulator Dampak</li>
            <li>Chart Historis vs Prediksi Revenue</li>
            <li>Chart Proporsi 14 Komponen APBD</li>
            <li>Rekomendasi Kebijakan dari AI</li>
            <li>Sidebar Interaktif</li>
            <li>Export Laporan PDF</li>
          </ul>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>8 Provinsi Tervalidasi · 14 Komponen APBD · Data DJPK 2023–2025</p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.5rem' }}>Export: PDF (editable untuk laporan audit)</p>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
