export default function Problem2() {
  return (
    <section className="section section-problem">
      <div className="section-meta" aria-hidden="true">
        <span>3</span>
        <span>Root Cause Analysis</span>
      </div>
      
      <div className="slide-content" style={{ paddingTop: '2.5rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Data Ada, Tapi Tidak Bisa Dipakai untuk Keputusan</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Bapenda punya banyak data, tapi tidak punya cara otomatis untuk validasi — akhirnya stuck, tidak bisa ambil keputusan.</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', position: 'relative', marginBottom: '1.75rem' }}>
          {/* Card 1: SIAPA */}
          <div style={{ 
            background: 'white', 
            padding: '1.75rem 1.5rem', 
            borderRadius: '0.5rem', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              right: '1rem', 
              fontSize: '0.75rem', 
              fontWeight: '700', 
              color: '#94a3b8',
              background: '#f1f5f9',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem'
            }}>01</div>
            <div style={{ marginBottom: '0.75rem' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3 style={{ color: '#1e40af', marginBottom: '1rem', fontSize: '0.95rem', fontWeight: '700' }}>SIAPA</h3>
            <p style={{ fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Kepala Bidang Pengawasan Bapenda Provinsi</p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#475569' }}>Menerima ribuan baris data setoran pajak setiap bulan</p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', color: '#64748b', fontStyle: 'italic' }}>
              Menangani ribuan transaksi WP/bulan tanpa sistem audit otomatis
            </p>
          </div>

          {/* Arrow 1 */}
          <div style={{ 
            position: 'absolute', 
            left: 'calc(33.33% - 0.75rem)', 
            top: '50%', 
            transform: 'translateY(-50%)',
            fontSize: '1.5rem',
            color: '#94a3b8',
            zIndex: 1
          }}>→</div>

          {/* Card 2: AKAR MASALAH (Highlighted) */}
          <div style={{ 
            background: 'white', 
            padding: '1.75rem 1.5rem', 
            borderRadius: '0.5rem', 
            boxShadow: '0 4px 8px rgba(239, 68, 68, 0.15)',
            border: '2px solid #fca5a5',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              right: '1rem', 
              fontSize: '0.75rem', 
              fontWeight: '700', 
              color: '#dc2626',
              background: '#fee2e2',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem'
            }}>02</div>
            <div style={{ marginBottom: '0.75rem' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '0.95rem', fontWeight: '700' }}>AKAR MASALAH</h3>
            <p style={{ fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.95rem', color: '#991b1b' }}>
              Sistem Self-Assessment Tanpa Validasi Real-time
            </p>
            <ul style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#475569', paddingLeft: '1.25rem', margin: 0 }}>
              <li>Tidak ada pencocokan otomatis antara laporan WP vs data transaksi riil</li>
              <li>Audit manual 20-30 hari/siklus</li>
            </ul>
          </div>

          {/* Arrow 2 */}
          <div style={{ 
            position: 'absolute', 
            left: 'calc(66.66% - 0.75rem)', 
            top: '50%', 
            transform: 'translateY(-50%)',
            fontSize: '1.5rem',
            color: '#94a3b8',
            zIndex: 1
          }}>→</div>

          {/* Card 3: DAMPAK (Risk accent) */}
          <div style={{ 
            background: 'white', 
            padding: '1.75rem 1.5rem', 
            borderRadius: '0.5rem', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '2px solid #fed7aa',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              right: '1rem', 
              fontSize: '0.75rem', 
              fontWeight: '700', 
              color: '#c2410c',
              background: '#ffedd5',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem'
            }}>03</div>
            <div style={{ marginBottom: '0.75rem' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <h3 style={{ color: '#c2410c', marginBottom: '1rem', fontSize: '0.95rem', fontWeight: '700' }}>DAMPAK</h3>
            <p style={{ fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.95rem', color: '#9a3412' }}>
              Under-target APBD & Kebocoran PAD
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#475569' }}>
              Penetapan target terpaksa terlalu konservatif, memangkas ruang alokasi belanja publik produktif (infrastruktur & layanan dasar)
            </p>
          </div>
        </div>
        
        <div className="bottom-strip">
          <div className="signal-item">
            <strong>Kesiapan institusi:</strong> 73,6% pemerintah daerah sudah pakai sistem digital (ETPD Sem.I/2023)
          </div>
          <div className="signal-item">
            <strong>Dorongan regulasi:</strong> UU HKPD 2022 mewajibkan optimasi PAD
          </div>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
