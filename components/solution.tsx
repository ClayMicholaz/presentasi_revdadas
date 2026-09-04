export default function Solution() {
  return (
    <section className="section section-how">
      <div className="section-meta" aria-hidden="true">
        <span>4</span>
        <span>Our Solution</span>
      </div>
      
      <div className="slide-content">
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
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
