export default function Appendix() {
  return (
    <>
      <section className="section section-value">
        <div className="section-meta" aria-hidden="true">
          <span>A1</span>
          <span>Appendix</span>
        </div>
        
        <div className="slide-content" style={{ paddingTop: '3rem' }}>
          <h1>Appendix A1: Coverage Data</h1>
          <h2>Rincian provinsi, komponen APBD, dan skenario validasi</h2>
          
          <div className="two-column" style={{ marginTop: '2.5rem', gap: '2.5rem' }}>
            <div>
              <h3 style={{ marginBottom: '1.25rem' }}>8 Provinsi Tervalidasi</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['DKI Jakarta', 'Jawa Barat', 'Jawa Timur', 'Banten', 'Jawa Tengah', 'Sumatera Utara', 'Sulawesi Selatan', 'Kalimantan Timur'].map((prov) => (
                  <span key={prov} style={{
                    background: '#3b82f6',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '1.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    {prov}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '0.875rem', marginTop: '1.5rem', fontStyle: 'italic', color: '#64748b' }}>
                <strong>Target ekspansi:</strong> 38 Bapenda Provinsi → 514 Kab/Kota
              </p>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '1.25rem' }}>14 Komponen APBD</h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#1e40af', marginBottom: '0.5rem' }}>Pajak Kendaraan</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['PKB', 'BBNKB', 'Pajak Bahan Bakar'].map((item) => (
                      <span key={item} style={{ fontSize: '0.8rem', background: '#eff6ff', padding: '0.35rem 0.75rem', borderRadius: '0.35rem', border: '1px solid #bfdbfe' }}>{item}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#1e40af', marginBottom: '0.5rem' }}>Pajak Konsumsi & Jasa</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Hotel', 'Restoran', 'Hiburan', 'Reklame', 'Parkir'].map((item) => (
                      <span key={item} style={{ fontSize: '0.8rem', background: '#eff6ff', padding: '0.35rem 0.75rem', borderRadius: '0.35rem', border: '1px solid #bfdbfe' }}>{item}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#1e40af', marginBottom: '0.5rem' }}>Pajak Lingkungan & Properti</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Air Permukaan', 'Air Tanah', 'Penerangan Jalan', 'PBB', 'BPHTB', 'Rokok'].map((item) => (
                      <span key={item} style={{ fontSize: '0.8rem', background: '#eff6ff', padding: '0.35rem 0.75rem', borderRadius: '0.35rem', border: '1px solid #bfdbfe' }}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '2.5rem', background: '#eff6ff', padding: '2rem', borderRadius: '0.75rem', border: '2px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ textAlign: 'center', minWidth: '120px' }}>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#1e40af', lineHeight: '1' }}>110</div>
                <div style={{ fontSize: '0.875rem', color: '#1e40af', marginTop: '0.5rem', fontWeight: '600' }}>Skenario Pengujian</div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
                  <strong>Kombinasi:</strong> 8 provinsi × 14 komponen × berbagai kondisi data
                </p>
                <p style={{ fontSize: '0.9rem', color: '#475569' }}>
                  (normal, tidak normal, data hilang, lonjakan palsu)
                </p>
                <p style={{ fontSize: '0.95rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #bfdbfe' }}>
                  <strong>Kontrol kualitas:</strong> Setiap skenario diperiksa manual untuk memastikan anomali terdeteksi dengan benar
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <span className="section-mark" aria-hidden="true" />
      </section>

      <section className="section section-problem">
        <div className="section-meta" aria-hidden="true">
          <span>A2</span>
          <span>Appendix</span>
        </div>
        
        <div className="slide-content" style={{ paddingTop: '3rem' }}>
          <h1>Appendix A2: Financial Model</h1>
          <h2>Basis perhitungan estimasi recovery PAD</h2>
          
          <div style={{ marginTop: '2.5rem', maxWidth: '850px', margin: '2.5rem auto 0' }}>
            <h3 style={{ marginBottom: '1.25rem', textAlign: 'center' }}>Sumber Data PAD (DJPK 2024)</h3>
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
                <tr style={{ background: '#fef3c7' }}>
                  <td><strong>Total 4 Provinsi</strong></td>
                  <td><strong>Rp 176,68 T</strong></td>
                  <td><strong>100%</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ marginTop: '2.5rem' }}>
            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Estimasi Recovery PAD</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ background: '#dcfce7', padding: '2rem', borderRadius: '0.75rem', border: '2px solid #16a34a', textAlign: 'center' }}>
                <div style={{ fontSize: '0.875rem', color: '#166534', fontWeight: '600', marginBottom: '0.5rem' }}>SKENARIO KONSERVATIF (5%)</div>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#15803d', lineHeight: '1.1' }}>Rp 8,8 T</div>
                <div style={{ fontSize: '0.875rem', color: '#166534', marginTop: '0.5rem' }}>per tahun</div>
                <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: '#166534' }}>
                  Rp 176,68T × 5% recovery rate
                </p>
              </div>
              
              <div style={{ background: '#fef3c7', padding: '2rem', borderRadius: '0.75rem', border: '2px solid #f59e0b', textAlign: 'center' }}>
                <div style={{ fontSize: '0.875rem', color: '#92400e', fontWeight: '600', marginBottom: '0.5rem' }}>SKENARIO MODERAT (10%)</div>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#b45309', lineHeight: '1.1' }}>Rp 17,7 T</div>
                <div style={{ fontSize: '0.875rem', color: '#92400e', marginTop: '0.5rem' }}>per tahun</div>
                <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: '#92400e' }}>
                  Rp 176,68T × 10% recovery rate
                </p>
              </div>
            </div>
            
            <div style={{ marginTop: '1.5rem', maxWidth: '900px', margin: '1.5rem auto 0', background: '#f8fafc', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}>
              <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#334155' }}>
                <strong>Basis Estimasi:</strong> Kebocoran PAD 15-20% menurut KPK 2013. Recovery rate 5-10% adalah asumsi konservatif.
              </p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.75rem', fontWeight: '600', color: '#0f172a' }}>
                Catatan: Angka aktual bergantung hasil audit lapangan. Pilot dengan Bapenda adalah langkah validasi berikutnya.
              </p>
            </div>
          </div>
        </div>
        
        <span className="section-mark" aria-hidden="true" />
      </section>

      <section className="section section-how">
        <div className="section-meta" aria-hidden="true">
          <span>A3</span>
          <span>Appendix</span>
        </div>
        
        <div className="slide-content" style={{ paddingTop: '3rem' }}>
          <h1>Appendix A3: Roadmap Detail</h1>
          <h2>Timeline implementasi dengan milestone terukur</h2>
          
          {/* Timeline Bar */}
          <div style={{ margin: '2.5rem auto', maxWidth: '1000px', position: 'relative' }}>
            <div style={{ height: '4px', background: '#cbd5e1', borderRadius: '2px', position: 'relative' }}>
              <div style={{ position: 'absolute', height: '100%', width: '25%', background: '#3b82f6', borderRadius: '2px 0 0 2px' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem' }}>
              {['0-3 bln', '3-6 bln', '6-12 bln', '12-18 bln'].map((label, i) => (
                <div key={i} style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', color: i === 0 ? '#1e40af' : '#64748b' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: '#1e40af' }}>Fase 1: Pilot & Validasi (0-6 bulan)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h4 style={{ color: '#1e40af', marginBottom: '1rem' }}>Bulan 0-3: Pilot Pertama</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
                  <li>MoU Bapenda DKI/Jabar</li>
                  <li>Pelatihan tim audit</li>
                  <li>Kumpulkan feedback pengguna</li>
                </ul>
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#dcfce7', borderRadius: '0.35rem', borderLeft: '3px solid #16a34a' }}>
                  <strong style={{ color: '#166534', fontSize: '0.875rem' }}>Target: </strong>
                  <span style={{ color: '#166534', fontSize: '0.875rem' }}>10+ feedback actionable</span>
                </div>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h4 style={{ color: '#1e40af', marginBottom: '1rem' }}>Bulan 3-6: Integrasi</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
                  <li>Integrasi API e-Pendapatan</li>
                  <li>Multi-tenant support</li>
                  <li>SOP dokumentasi</li>
                </ul>
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#dcfce7', borderRadius: '0.35rem', borderLeft: '3px solid #16a34a' }}>
                  <strong style={{ color: '#166534', fontSize: '0.875rem' }}>Target: </strong>
                  <span style={{ color: '#166534', fontSize: '0.875rem' }}>2 Bapenda aktif</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '1rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: '#b45309' }}>Fase 2: Komersial (6-18 bulan)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h4 style={{ color: '#b45309', marginBottom: '1rem' }}>Bulan 6-12: SaaS Launch</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
                  <li>Pricing: Rp 15-25 jt/bln</li>
                  <li>Daftar e-Katalog LKPP</li>
                  <li>Onboard 3-5 paying customer</li>
                </ul>
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#fef3c7', borderRadius: '0.35rem', borderLeft: '3px solid #f59e0b' }}>
                  <strong style={{ color: '#92400e', fontSize: '0.875rem' }}>Target: </strong>
                  <span style={{ color: '#92400e', fontSize: '0.875rem' }}>Rp 200-400 jt ARR</span>
                </div>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h4 style={{ color: '#b45309', marginBottom: '1rem' }}>Bulan 12-18: Scale</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
                  <li>Ekspansi 10+ provinsi</li>
                  <li>Partnership integrator</li>
                  <li>Pilot tier 2 (Kab/Kota)</li>
                </ul>
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#fef3c7', borderRadius: '0.35rem', borderLeft: '3px solid #f59e0b' }}>
                  <strong style={{ color: '#92400e', fontSize: '0.875rem' }}>Target: </strong>
                  <span style={{ color: '#92400e', fontSize: '0.875rem' }}>15+ customer aktif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <span className="section-mark" aria-hidden="true" />
      </section>
    </>
  );
}
