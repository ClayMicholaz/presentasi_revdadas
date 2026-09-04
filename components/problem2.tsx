export default function Problem2() {
  return (
    <section className="section section-problem">
      <div className="section-meta" aria-hidden="true">
        <span>3</span>
        <span>Root Cause Analysis</span>
      </div>
      
      <div className="slide-content">
        <h1>Data Ada. Insight Tidak.</h1>
        <h2 style={{ textAlign: 'center' }}>Bapenda terjebak analysis paralysis — data berlimpah, tanpa instrumen validasi.</h2>
        
        <div className="three-column">
          <div className="column">
            <h3>WHO</h3>
            <p><strong>Kepala Bidang Pengawasan Bapenda Provinsi</strong></p>
            <p>Menerima ribuan baris data setoran self-assessment setiap bulan</p>
          </div>
          
          <div className="column">
            <h3>ROOT CAUSE</h3>
            <p><strong>Self-assessment tax = Asimetri informasi</strong></p>
            <p>Bapenda tidak punya instrumen validasi otomatis untuk cocokkan nilai setoran vs transaksi riil</p>
          </div>
          
          <div className="column">
            <h3>CONSEQUENCE</h3>
            <p><strong>Analysis Paralysis</strong></p>
            <p>Target APBD ditetapkan berbasis asumsi statis → defisit pembiayaan infrastruktur, kesehatan, pendidikan</p>
          </div>
        </div>
        
        <div className="bottom-strip">
          <div className="signal-item">
            <strong>Kesiapan institusional:</strong> 73,6% pemda sudah Digital (ETPD Sem.I/2023)
          </div>
          <div className="signal-item">
            <strong>Regulatory push:</strong> UU HKPD 2022 amanatkan optimasi PAD
          </div>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
