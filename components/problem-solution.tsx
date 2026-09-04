export default function ProblemSolution() {
  return (
    <section className="section section-problem">
      <div className="section-meta" aria-hidden="true">
        <span>01-02</span>
        <span>Problem &amp; Validation</span>
      </div>
      
      <div className="slide-content">
        <div className="slide-1">
          <h1>7.006 Kelemahan. Satu Penyebab.</h1>
          <h2>Anomali fiskal Bapenda tidak terdeteksi — sampai terlambat.</h2>
          
          <div className="split-layout">
            <div className="left">
              <div className="big-number">7.006</div>
              <p className="label">Kelemahan SPI — BPK RI IHPS I/2023</p>
            </div>
            
            <div className="right timeline">
              <div className="timeline-item">
                <strong>Bulan 1</strong>
                <p>Data self-assessment masuk</p>
              </div>
              <div className="timeline-item alert">
                <strong>Hari 1–30</strong>
                <p>Rekonsiliasi manual</p>
              </div>
              <div className="timeline-item failed">
                <strong>Hari 30+</strong>
                <p>Anomali terdeteksi... tapi anggaran sudah terkunci ❌</p>
              </div>
            </div>
          </div>
          
          <ul className="body-points">
            <li>705 entitas pemerintah teraudit</li>
            <li>Rekonsiliasi manual: <strong>20–30 hari/siklus</strong></li>
            <li>Ketika anomali ditemukan, siklus anggaran sudah terkunci</li>
            <li>Problem Statement: <strong>Elektronifikasi Keuangan Daerah</strong></li>
          </ul>
          
          <div className="evidence-callout">
            🔴 Sumber: BPK RI IHPS I/2023 | UU No.1/2022 (HKPD)
          </div>
        </div>
        
        <div className="slide-2">
          <h1>Data Ada. Insight Tidak.</h1>
          <h2>Bapenda terjebak analysis paralysis — data berlimpah, tanpa instrumen validasi.</h2>
          
          <div className="three-column">
            <div className="column">
              <h3>WHO</h3>
              <p>👤 <strong>Kepala Bidang Pengawasan Bapenda Provinsi</strong></p>
              <p>Menerima ribuan baris data setoran self-assessment setiap bulan</p>
            </div>
            
            <div className="column">
              <h3>ROOT CAUSE</h3>
              <p>⚠️ <strong>Self-assessment tax = Asimetri informasi</strong></p>
              <p>Bapenda tidak punya instrumen validasi otomatis untuk cocokkan nilai setoran vs transaksi riil</p>
            </div>
            
            <div className="column">
              <h3>CONSEQUENCE</h3>
              <p>📉 <strong>Analysis Paralysis</strong></p>
              <p>Target APBD ditetapkan berbasis asumsi statis → defisit pembiayaan infrastruktur, kesehatan, pendidikan</p>
            </div>
          </div>
          
          <div className="bottom-strip">
            <div className="signal-item">
              <strong>🏛️ Kesiapan institusional:</strong> 73,6% pemda sudah Digital (ETPD Sem.I/2023)
            </div>
            <div className="signal-item">
              <strong>📜 Regulatory push:</strong> UU HKPD 2022 amanatkan optimasi PAD
            </div>
          </div>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
