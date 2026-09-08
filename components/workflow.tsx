export default function Workflow() {
  return (
    <section className="section section-how">
      <div className="section-meta" aria-hidden="true">
        <span>5</span>
        <span>How It Works</span>
      </div>
      
      <div className="slide-content">
        <h1>Dari Data ke Keputusan Audit: Proses Cepat</h1>
        <h2>Satu workflow sederhana: dari buka browser sampai dapat laporan audit.</h2>
        
        <div className="workflow">
          <div className="flow-step">
            <div className="step-box">Buka Browser</div>
            <div className="step-time">Langkah 1</div>
          </div>
          <div className="arrow">→</div>
          <div className="flow-step">
            <div className="step-box">Pilih Provinsi</div>
            <div className="step-time">Langkah 2</div>
          </div>
          <div className="arrow">→</div>
          <div className="flow-step">
            <div className="step-box">Lihat Anomali</div>
            <div className="step-time">Langkah 3</div>
          </div>
          <div className="arrow">→</div>
          <div className="flow-step">
            <div className="step-box">Export Laporan</div>
            <div className="step-time">Langkah 4</div>
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
                <td>Langsung tampil</td>
              </tr>
              <tr>
                <td>Jenis audit</td>
                <td>Acak, merata</td>
                <td>Fokus pada data berisiko</td>
              </tr>
              <tr>
                <td>Dokumentasi</td>
                <td>Ketik manual</td>
                <td>Export otomatis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
