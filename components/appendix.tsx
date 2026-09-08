export default function Appendix() {
  return (
    <>
      <section className="section section-value">
        <div className="section-meta" aria-hidden="true">
          <span>A1</span>
          <span>Appendix</span>
        </div>
        
        <div className="slide-content">
          <h1>Appendix A1: Coverage Data</h1>
          <h2>Rincian provinsi, komponen APBD, dan skenario validasi</h2>
          
          <div className="two-column" style={{ marginTop: '2rem', gap: '2rem' }}>
            <div>
              <h3>8 Provinsi Tervalidasi</h3>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li>DKI Jakarta</li>
                <li>Jawa Barat</li>
                <li>Jawa Timur</li>
                <li>Banten</li>
                <li>Jawa Tengah</li>
                <li>Sumatera Utara</li>
                <li>Sulawesi Selatan</li>
                <li>Kalimantan Timur</li>
              </ul>
              <p style={{ fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>
                <strong>Target ekspansi:</strong> 38 Bapenda Provinsi, kemudian 514 Kab/Kota
              </p>
            </div>
            
            <div>
              <h3>14 Komponen APBD</h3>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', columns: '2', columnGap: '1rem' }}>
                <li>Pajak Kendaraan Bermotor</li>
                <li>Bea Balik Nama Kendaraan</li>
                <li>Pajak Bahan Bakar</li>
                <li>Pajak Air Permukaan</li>
                <li>Pajak Rokok</li>
                <li>Pajak Hotel</li>
                <li>Pajak Restoran</li>
                <li>Pajak Hiburan</li>
                <li>Pajak Reklame</li>
                <li>Pajak Penerangan Jalan</li>
                <li>Pajak Parkir</li>
                <li>Pajak Air Tanah</li>
                <li>PBB Perdesaan/Perkotaan</li>
                <li>BPHTB</li>
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem', background: '#eff6ff', padding: '1.5rem', borderRadius: '0.75rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>110 Skenario Validasi</h4>
            <p style={{ fontSize: '0.9rem' }}>
              <strong>Kombinasi:</strong> 8 provinsi × 14 komponen × berbagai kondisi data (normal, anomali, missing values, lonjakan semu)
            </p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.75rem' }}>
              <strong>Quality gate:</strong> Setiap skenario melalui validasi manual untuk memastikan anomali terdeteksi dengan benar
            </p>
          </div>
        </div>
        
        <span className="section-mark" aria-hidden="true" />
      </section>

      <section className="section section-problem">
        <div className="section-meta" aria-hidden="true">
          <span>A2</span>
          <span>Appendix</span>
        </div>
        
        <div className="slide-content">
          <h1>Appendix A2: Financial Model</h1>
          <h2>Basis perhitungan estimasi recovery PAD</h2>
          
          <div style={{ marginTop: '2rem' }}>
            <h3>Sumber Data PAD (DJPK 2024)</h3>
            <table style={{ width: '100%', marginTop: '1rem' }}>
              <thead>
                <tr>
                  <th>Provinsi</th>
                  <th>PAD 2024 (Triliun)</th>
                  <th>Kontribusi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DKI Jakarta</td>
                  <td>Rp 71,2 T</td>
                  <td>40,3%</td>
                </tr>
                <tr>
                  <td>Jawa Barat</td>
                  <td>Rp 52,1 T</td>
                  <td>29,5%</td>
                </tr>
                <tr>
                  <td>Jawa Timur</td>
                  <td>Rp 32,4 T</td>
                  <td>18,3%</td>
                </tr>
                <tr>
                  <td>Banten</td>
                  <td>Rp 20,98 T</td>
                  <td>11,9%</td>
                </tr>
                <tr>
                  <td><strong>Total 4 Provinsi</strong></td>
                  <td><strong>Rp 176,68 T</strong></td>
                  <td><strong>100%</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ marginTop: '2rem', background: '#fef3c7', padding: '1.5rem', borderRadius: '0.75rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Estimasi Recovery PAD</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              <strong>Asumsi Konservatif:</strong> Recovery rate 5-10% dari PAD yang berpotensi bocor
            </p>
            <p style={{ fontSize: '0.95rem', marginTop: '0.75rem' }}>
              <strong>Basis:</strong> Estimasi kebocoran KPK 2013 (15-20% dari PAD tidak tercatat sempurna)
            </p>
            <p style={{ fontSize: '0.95rem', marginTop: '0.75rem' }}>
              <strong>Kalkulasi:</strong>
            </p>
            <ul style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              <li>Konservatif (5%): Rp 176,68T × 5% = <strong>Rp 8,8 T/tahun</strong></li>
              <li>Moderat (10%): Rp 176,68T × 10% = <strong>Rp 17,7 T/tahun</strong></li>
            </ul>
            <p style={{ fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic', color: '#78350f' }}>
              <strong>Disclaimer:</strong> Recovery aktual bergantung investigasi audit. Pilot Bapenda adalah langkah validasi berikutnya.
            </p>
          </div>
        </div>
        
        <span className="section-mark" aria-hidden="true" />
      </section>

      <section className="section section-how">
        <div className="section-meta" aria-hidden="true">
          <span>A3</span>
          <span>Appendix</span>
        </div>
        
        <div className="slide-content">
          <h1>Appendix A3: Roadmap Detail</h1>
          <h2>Timeline implementasi dengan milestone terukur</h2>
          
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Fase 1: Pilot & Validasi (0-6 bulan)</h3>
            <div className="two-column" style={{ gap: '1.5rem' }}>
              <div style={{ background: 'white', padding: '1.25rem', borderRadius: '0.5rem' }}>
                <h4>Bulan 1-3: Pilot Pertama</h4>
                <ul style={{ fontSize: '0.9rem' }}>
                  <li>MoU Bapenda DKI/Jabar (non-komersial)</li>
                  <li>Workshop onboarding tim audit</li>
                  <li>Pengumpulan feedback user real</li>
                  <li><strong>KPI:</strong> 10+ feedback actionable</li>
                </ul>
              </div>
              <div style={{ background: 'white', padding: '1.25rem', borderRadius: '0.5rem' }}>
                <h4>Bulan 3-6: Integrasi & Scale</h4>
                <ul style={{ fontSize: '0.9rem' }}>
                  <li>Integrasi API e-Pendapatan pilot</li>
                  <li>Implementasi multi-tenancy</li>
                  <li>Dokumentasi SOP operasional</li>
                  <li><strong>KPI:</strong> 2 Bapenda aktif menggunakan</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Fase 2: Komersialisasi (6-18 bulan)</h3>
            <div className="two-column" style={{ gap: '1.5rem' }}>
              <div style={{ background: 'white', padding: '1.25rem', borderRadius: '0.5rem' }}>
                <h4>Bulan 6-12: SaaS B2G Launch</h4>
                <ul style={{ fontSize: '0.9rem' }}>
                  <li>Pricing model: Rp 15-25 jt/bulan</li>
                  <li>e-Katalog LKPP submission</li>
                  <li>3-5 Bapenda paying customer</li>
                  <li><strong>KPI:</strong> Rp 200-400 jt ARR</li>
                </ul>
              </div>
              <div style={{ background: 'white', padding: '1.25rem', borderRadius: '0.5rem' }}>
                <h4>Bulan 12-18: Ekspansi</h4>
                <ul style={{ fontSize: '0.9rem' }}>
                  <li>Ekspansi ke 10+ provinsi</li>
                  <li>Partnership SI pemerintah</li>
                  <li>Pilot Kab/Kota (tier 2)</li>
                  <li><strong>KPI:</strong> 15+ customer aktif</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <span className="section-mark" aria-hidden="true" />
      </section>
    </>
  );
}
