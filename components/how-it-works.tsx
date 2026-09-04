export default function HowItWorks() {
  return (
    <section className="section section-how">
      <div className="section-meta" aria-hidden="true">
        <span>03-04</span>
        <span>Solution & Differentiation</span>
      </div>
      
      <div className="slide-content">
        <div className="slide-3">
          <h1>RevDadas: Anomaly Detection untuk Bapenda</h1>
          <h2>RevDadas mengubah 20–30 hari rekonsiliasi menjadi deteksi anomali instan.</h2>
          
          <div className="value-prop">
            <p className="value-statement">
              RevDadas membantu Bapenda provinsi mendeteksi anomali pencatatan PAD secara otomatis dan instan — langsung di browser, tanpa instalasi.
            </p>
          </div>
          
          <div className="capability-pills">
            <div className="pill core">
              <h3>CORE — Anomaly Detection</h3>
              <p>Isolation Forest</p>
              <p>Identifikasi anomali PAD otomatis</p>
            </div>
            <div className="pill support">
              <h3>PENDUKUNG — Revenue Forecasting</h3>
              <p>Ensemble Prophet + Naive-Seasonal</p>
              <p>Proyeksi revenue 6–24 bulan</p>
            </div>
          </div>
          
          <div className="target-market">
            <p><strong>Target market:</strong> 38 Bapenda Provinsi → ekspansi 514 Kab/Kota</p>
          </div>
        </div>
        
        <div className="slide-4" style={{ marginTop: '4rem' }}>
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
              <div className="step-box">Identifikasi Wilayah Risiko</div>
              <div className="step-time">Instan</div>
            </div>
            <div className="arrow">→</div>
            <div className="flow-step">
              <div className="step-box">Export PDF</div>
              <div className="step-time">1 klik</div>
            </div>
            <div className="arrow">→</div>
            <div className="flow-step">
              <div className="step-box">Instruksi Audit</div>
              <div className="step-time">Segera</div>
            </div>
          </div>
          
          <div className="before-after">
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
                  <td>Instan (&lt;100ms)</td>
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
                <tr>
                  <td>Cakupan</td>
                  <td>Terbatas, sampling</td>
                  <td>14 komponen APBD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
