export default function Problem1() {
  return (
    <section className="section section-problem">
      <div className="section-meta" aria-hidden="true">
        <span>2</span>
        <span>Problem Statement</span>
      </div>
      
      <div className="slide-content">
        <h1>Anomali fiskal Bapenda tidak terdeteksi — sampai terlambat.</h1>
        <h2>7.006 Kelemahan. Satu Penyebab.</h2>
        
        <div className="split-layout">
          <div className="left">
            <div className="big-number" style={{ color: '#dc2626', background: '#fee2e2', padding: '1.5rem', borderRadius: '0.75rem' }}>7.006</div>
            <p className="label" style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
              Kelemahan SPI — BPK RI IHPS I/2023
            </p>
          </div>
          
          <div className="right timeline">
            <div className="timeline-item">
              <strong>Awal Periode</strong>
              <p>Data self-assessment masuk</p>
            </div>
            <div className="timeline-item alert">
              <strong>Hari 1–30</strong>
              <p>Rekonsiliasi manual</p>
            </div>
            <div className="timeline-item failed">
              <strong>Hari 30+</strong>
              <p>Anomali terdeteksi... tapi anggaran sudah terkunci</p>
            </div>
          </div>
        </div>
        
        <ul className="body-points" style={{ marginTop: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          <li>705 entitas pemerintah teraudit</li>
          <li>Rekonsiliasi manual: <strong>20–30 hari/siklus</strong></li>
          <li>Ketika anomali ditemukan, siklus anggaran sudah terkunci</li>
        </ul>
        
        <div className="evidence-callout" style={{ marginTop: '1.5rem' }}>
          Sumber: BPK RI IHPS I/2023 | UU No.1/2022 (HKPD)
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
