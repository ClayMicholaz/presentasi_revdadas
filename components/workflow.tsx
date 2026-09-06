export default function Workflow() {
  return (
    <section className="section section-how">
      <div className="section-meta" aria-hidden="true">
        <span>5</span>
        <span>How It Works</span>
      </div>
      
      <div className="slide-content">
        <h1>Dari Data ke Keputusan Audit: &lt;5 Menit</h1>
        <h2>Satu workflow — dari data ke instruksi audit terfokus — dalam kurang dari 5 menit.</h2>
        
        <div className="workflow">
          <div className="flow-step">
            <div className="step-box">Buka Browser</div>
            <div className="step-time">1 detik</div>
          </div>
          <div className="arrow">→</div>
          <div className="flow-step">
            <div className="step-box">Pilih Provinsi</div>
            <div className="step-time">2 detik</div>
          </div>
          <div className="arrow">→</div>
          <div className="flow-step">
            <div className="step-box">Lihat Anomali</div>
            <div className="step-time">Instan</div>
          </div>
          <div className="arrow">→</div>
          <div className="flow-step">
            <div className="step-box">Export PDF</div>
            <div className="step-time">1 klik</div>
          </div>
        </div>
        
        <div className="before-after" style={{ marginTop: '2rem' }}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Sebelum (Manual)</th>
                <th>Setelah (RevDadas)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Waktu deteksi</td>
                <td>20–30 hari</td>
                <td>Instan (&lt;2 detik)</td>
              </tr>
              <tr>
                <td>Jenis audit</td>
                <td>Acak, merata</td>
                <td>Targeted, berbasis risiko</td>
              </tr>
              <tr>
                <td>Dokumentasi</td>
                <td>Manual spreadsheet</td>
                <td>PDF otomatis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
