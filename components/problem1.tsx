export default function Problem1() {
  return (
    <section className="section section-problem">
      <div className="section-meta" aria-hidden="true">
        <span>2</span>
        <span>Problem Statement</span>
      </div>
      
      <div className="slide-content" style={{ paddingTop: '3rem' }}>
        <h1>Anomali fiskal Bapenda tidak terdeteksi — sampai terlambat.</h1>
        <h2>7.006 Kelemahan. Satu Penyebab: Rekonsiliasi Manual yang Memakan Waktu 30 Hari.</h2>
        
        <div className="split-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', marginTop: '2.5rem', alignItems: 'start' }}>
          <div className="left">
            <div style={{ textAlign: 'center' }}>
              <div className="big-number" style={{ 
                color: '#dc2626', 
                background: '#fee2e2', 
                padding: '1.5rem', 
                borderRadius: '0.75rem', 
                fontSize: '4rem',
                fontWeight: 'bold',
                lineHeight: '1'
              }}>
                7.006
              </div>
              <p style={{ 
                fontSize: '0.95rem', 
                color: '#1e293b', 
                marginTop: '1.25rem',
                fontWeight: '600',
                lineHeight: '1.6'
              }}>
                Temuan Kelemahan SPI oleh BPK RI<br/>
                (IHPS I/2023) di 705 entitas pemerintah
              </p>
            </div>
          </div>
          
          <div className="right timeline" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="timeline-item" style={{ 
              background: '#eff6ff', 
              padding: '1.25rem', 
              borderRadius: '0.5rem',
              border: '2px solid #3b82f6'
            }}>
              <strong style={{ fontSize: '1rem', color: '#1e40af' }}>Awal Periode</strong>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Data self-assessment masuk</p>
            </div>
            
            <div style={{ textAlign: 'center', margin: '-0.5rem 0' }}>
              <span style={{ fontSize: '1.5rem', color: '#64748b' }}>↓</span>
            </div>
            
            <div className="timeline-item alert" style={{ 
              background: '#fef3c7', 
              padding: '1.25rem', 
              borderRadius: '0.5rem', 
              border: '2px solid #f59e0b' 
            }}>
              <strong style={{ fontSize: '1rem', color: '#92400e' }}>Hari 1–30</strong>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                <strong>Rekonsiliasi manual</strong> — validasi data PAD secara manual
              </p>
            </div>
            
            <div style={{ textAlign: 'center', margin: '-0.5rem 0' }}>
              <span style={{ fontSize: '1.5rem', color: '#64748b' }}>↓</span>
            </div>
            
            <div className="timeline-item failed" style={{ 
              background: '#fee2e2', 
              padding: '1.25rem', 
              borderRadius: '0.5rem', 
              border: '3px solid #dc2626' 
            }}>
              <strong style={{ fontSize: '1rem', color: '#991b1b' }}>Hari 30+</strong>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                <strong style={{ color: '#dc2626', fontSize: '1rem' }}>Anomali terdeteksi</strong><br/>
                ...tapi anggaran sudah terkunci, terlambat untuk koreksi
              </p>
            </div>
          </div>
        </div>
        
        <div className="evidence-callout" style={{ 
          marginTop: '2.5rem', 
          fontSize: '0.75rem',
          color: '#64748b',
          textAlign: 'center',
          paddingBottom: '1rem'
        }}>
          Sumber: BPK RI IHPS I/2023 | UU No.1/2022 (HKPD)
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
