export default function Solution() {
  return (
    <section className="section section-how">
      <div className="section-meta" aria-hidden="true">
        <span>4</span>
        <span>Our Solution</span>
      </div>
      
      <div className="slide-content">
        <h1>RevDadas: Deteksi Anomali Otomatis untuk Bapenda</h1>
        <h2>RevDadas mengubah 20–30 hari rekonsiliasi menjadi deteksi anomali yang langsung muncul.</h2>
        
        <p style={{ 
          fontSize: '1.15rem', 
          textAlign: 'center', 
          maxWidth: '900px', 
          margin: '2rem auto',
          lineHeight: '1.7',
          color: '#1e293b',
          fontWeight: '500'
        }}>
          RevDadas membantu Bapenda provinsi mendeteksi anomali pencatatan PAD secara otomatis, langsung di browser, tanpa instalasi.
        </p>
        
        <div className="capability-pills" style={{ marginTop: '2.5rem' }}>
          <div className="pill core">
            <h3>FITUR UTAMA: Deteksi Anomali</h3>
            <p>Kecerdasan Buatan</p>
            <p>Identifikasi anomali PAD otomatis</p>
          </div>
          <div className="pill support">
            <h3>FITUR PENDUKUNG: Prediksi Revenue</h3>
            <p>Prediksi berbasis pola data historis</p>
            <p>Proyeksi revenue 6 sampai 24 bulan untuk perencanaan APBD</p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', fontStyle: 'italic', opacity: '0.9' }}>
              Catatan: Prediksi hanya sebagai referensi, bukan untuk keputusan audit
            </p>
          </div>
        </div>
        
        <div className="target-market" style={{ marginTop: '2rem' }}>
          <p><strong>Target pasar:</strong> 38 Bapenda Provinsi → ekspansi 514 Kab/Kota</p>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
