export default function Value() {
  return (
    <section className="section section-value scrollable">
      <div className="section-meta" aria-hidden="true">
        <span>8</span>
        <span>Technology & Impact</span>
      </div>
      
      <div className="slide-content">
        <h1>Teknologi & Dampak Terukur</h1>
        <h2>Dari data mentah ke rekomendasi audit — dengan teknologi yang sudah diuji.</h2>
        
        <div className="two-column" style={{ marginTop: '2rem' }}>
          <div>
            <h3>Cara Kerja Teknologi</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              <strong>1. Pembersihan Data</strong><br/>
              • Hapus data duplikat dan koreksi angka yang salah<br/>
              • Lebih dari 1.000 baris data rusak dibersihkan<br/><br/>
              
              <strong>2. Analisis Pola</strong><br/>
              • Bandingkan pendapatan setiap bulan<br/>
              • Deteksi pola tidak normal dan pola musiman<br/><br/>
              
              <strong>3. Kecerdasan Buatan (AI)</strong><br/>
              • Deteksi anomali otomatis<br/>
              • Prediksi pendapatan 6-24 bulan ke depan<br/><br/>
              
              <strong>4. Dashboard Cepat</strong><br/>
              • 110 skenario sudah dihitung sebelumnya<br/>
              • Dashboard muncul langsung tanpa loading
            </p>
          </div>
          
          <div>
            <h3>Impact Terukur</h3>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <h4 style={{ color: '#059669', marginBottom: '1rem' }}>MEASURED</h4>
              <table style={{ fontSize: '0.85rem' }}>
                <tbody>
                  <tr>
                    <td><strong>Waktu deteksi anomali</strong></td>
                    <td>20-30 hari → <strong>&lt;2 detik</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Cakupan analisis</strong></td>
                    <td>14 komponen × 8 provinsi</td>
                  </tr>
                  <tr>
                    <td><strong>Data quality</strong></td>
                    <td>110 skenario tervalidasi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div style={{ background: '#fef3c7', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <h4 style={{ color: '#92400e', marginBottom: '1rem' }}>ESTIMATED</h4>
              <table style={{ fontSize: '0.85rem' }}>
                <tbody>
                  <tr>
                    <td><strong>Potensi Recovery PAD</strong></td>
                    <td>Rp 8.8-17.7 T/tahun</td>
                  </tr>
                  <tr>
                    <td><strong>Basis</strong></td>
                    <td>Recovery rate 5-10% konservatif</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ fontSize: '0.75rem', marginTop: '1rem', fontStyle: 'italic', color: '#78350f' }}>
                *Estimasi berbasis PAD DJPK 2024 (DKI + Jabar + Jatim + Banten = Rp 176.68T).
                Angka aktual bergantung hasil audit lapangan. Pilot dengan Bapenda adalah langkah validasi berikutnya.
              </p>
              <p style={{ fontSize: '0.75rem', marginTop: '0.75rem', fontWeight: '600', color: '#92400e' }}>
                Pengawasan Manusia Tetap Diperlukan: RevDadas adalah alat bantu keputusan — anomali harus dikonfirmasi oleh tim audit Bapenda.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
