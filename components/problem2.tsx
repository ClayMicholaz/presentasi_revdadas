export default function Problem2() {
  return (
    <section className="section section-problem">
      <div className="section-meta" aria-hidden="true">
        <span>3</span>
        <span>Root Cause Analysis</span>
      </div>
      
      <div className="slide-content">
        <h1>Data Ada, Tapi Tidak Bisa Dipakai untuk Keputusan</h1>
        <h2 style={{ textAlign: 'center' }}>Bapenda punya banyak data, tapi tidak punya cara otomatis untuk validasi — akhirnya stuck, tidak bisa ambil keputusan.</h2>
        
        <div className="three-column">
          <div className="column">
            <h3>SIAPA</h3>
            <p><strong>Kepala Bidang Pengawasan Bapenda Provinsi</strong></p>
            <p>Menerima ribuan baris data setoran pajak setiap bulan</p>
          </div>
          
          <div className="column">
            <h3>AKAR MASALAH</h3>
            <p><strong>Sistem pajak self-report = Tidak ada cross-check otomatis</strong></p>
            <p>Bapenda tidak punya tools untuk cocokkan: "Apakah nilai yang dilaporkan wajib pajak sesuai dengan transaksi real?"</p>
          </div>
          
          <div className="column">
            <h3>DAMPAK</h3>
            <p><strong>Target APBD Pakai Asumsi Lama</strong></p>
            <p>Karena tidak yakin data akurat, target APBD ditetapkan pakai asumsi konservatif → uang untuk infrastruktur, kesehatan, pendidikan jadi kurang</p>
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
