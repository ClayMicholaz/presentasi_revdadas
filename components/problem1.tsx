export default function Problem1() {
  return (
    <section className="section section-problem">
      <div className="section-meta" aria-hidden="true">
        <span>2</span>
        <span>Problem Statement</span>
      </div>
      
      <div className="slide-content" style={{ paddingTop: '2.5rem' }}>
        <h1 style={{ marginBottom: '0.85rem' }}>Anomali fiskal Bapenda tidak terdeteksi — sampai terlambat.</h1>
        <h2 style={{ marginBottom: '2rem' }}>7.006 Kelemahan. Satu Penyebab: Rekonsiliasi Manual yang Memakan Waktu 30 Hari.</h2>
        
        <div className="split-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2.5rem', marginTop: '0', alignItems: 'center' }}>
          <div className="left" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100%' }}>
            <div style={{ 
              background: '#fee2e2', 
              padding: '2rem 2.5rem', 
              borderRadius: '0.75rem',
              border: '3px solid #dc2626',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(220, 38, 38, 0.15)'
            }}>
              <div style={{ 
                color: '#dc2626', 
                fontSize: '5rem',
                fontWeight: '800',
                lineHeight: '1',
                marginBottom: '1rem'
              }}>
                7.006
              </div>
              <p style={{ 
                fontSize: '1rem', 
                color: '#1e293b', 
                fontWeight: '600',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Kelemahan Sistem<br/>Pengendalian Intern (SPI)
              </p>
              <div style={{
                background: '#991b1b',
                color: 'white',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.35rem',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                705 Entitas Terdampak
              </div>
              <p style={{ 
                fontSize: '0.75rem', 
                color: '#64748b',
                marginTop: '0.75rem',
                fontStyle: 'italic'
              }}>
                BPK RI IHPS I/2023
              </p>
            </div>
          </div>
          
          <div className="right timeline" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="timeline-item" style={{ 
              background: '#eff6ff', 
              padding: '1.35rem 1.5rem', 
              borderRadius: '0.5rem',
              border: '2px solid #3b82f6'
            }}>
              <strong style={{ fontSize: '1.05rem', color: '#1e40af' }}>Awal Periode</strong>
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#475569' }}>Data self-assessment masuk</p>
            </div>
            
            <div style={{ textAlign: 'center', margin: '-0.5rem 0' }}>
              <span style={{ fontSize: '1.75rem', color: '#64748b', fontWeight: 'bold' }}>↓</span>
            </div>
            
            <div className="timeline-item alert" style={{ 
              background: '#fef3c7', 
              padding: '1.35rem 1.5rem', 
              borderRadius: '0.5rem', 
              border: '2px solid #f59e0b' 
            }}>
              <strong style={{ fontSize: '1.05rem', color: '#92400e' }}>Hari 1–30</strong>
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#475569' }}>
                <strong>Rekonsiliasi manual</strong> — validasi data PAD secara manual
              </p>
            </div>
            
            <div style={{ textAlign: 'center', margin: '-0.5rem 0' }}>
              <span style={{ fontSize: '1.75rem', color: '#64748b', fontWeight: 'bold' }}>↓</span>
            </div>
            
            <div className="timeline-item failed" style={{ 
              background: '#fee2e2', 
              padding: '1.35rem 1.5rem', 
              borderRadius: '0.5rem', 
              border: '3px solid #dc2626' 
            }}>
              <strong style={{ fontSize: '1.05rem', color: '#991b1b' }}>Hari 30+</strong>
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#1e293b' }}>
                <strong style={{ color: '#dc2626', fontSize: '1.05rem' }}>Anomali terdeteksi</strong><br/>
                <span style={{ color: '#991b1b' }}>...tapi anggaran sudah terkunci, terlambat untuk koreksi</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="evidence-callout" style={{ 
          marginTop: '2rem', 
          fontSize: '0.75rem',
          color: '#64748b',
          textAlign: 'left',
          paddingLeft: '0.5rem'
        }}>
          Sumber: BPK RI IHPS I/2023 | UU No.1/2022 (HKPD)
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
