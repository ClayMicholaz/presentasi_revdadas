export default function Closing() {
  return (
    <section className="section section-closing">
      <div className="section-meta" aria-hidden="true">
        <span>12-16</span>
        <span>Market, Team & Closing</span>
      </div>
      
      <div className="slide-content">
        <h1 style={{ color: 'white', marginBottom: '2rem' }}>Layak Dipercaya. Layak Dilanjutkan.</h1>
        <h2 style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '3rem' }}>Problem nyata + prototype fungsional + AI tervalidasi + team yang bisa eksekusi.</h2>
        
        <div className="evidence-pills">
          <div className="evidence-pill">
            <h3 style={{ color: 'white' }}>Problem Tervalidasi</h3>
            <p style={{ fontSize: '0.875rem' }}>BPK: 7.006 SPI weaknesses · UU HKPD 2022 · 20–30 hari audit manual</p>
          </div>
          <div className="evidence-pill">
            <h3 style={{ color: 'white' }}>Prototype Live</h3>
            <p style={{ fontSize: '0.875rem' }}>
              <a href="https://revdadas.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>
                revdadas.vercel.app
              </a> · &lt;100ms · 9 komponen fungsional
            </p>
          </div>
          <div className="evidence-pill">
            <h3 style={{ color: 'white' }}>AI Tervalidasi</h3>
            <p style={{ fontSize: '0.875rem' }}>Isolation Forest + Backtest WAPE/sMAPE · 110 skenario</p>
          </div>
          <div className="evidence-pill">
            <h3 style={{ color: 'white' }}>Team Siap</h3>
            <p style={{ fontSize: '0.875rem' }}>4 orang · ownership jelas · 10 iterasi improvement</p>
          </div>
        </div>
        
        <div className="tagline-large" style={{ color: 'white' }}>
          <p><em>&quot;Dari data APBD ke keputusan audit — dalam hitungan detik.&quot;</em></p>
        </div>
        
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Market & Roadmap</h3>
          <div className="three-panel" style={{ marginBottom: '2rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '0.75rem' }}>
              <h4 style={{ color: 'white', marginBottom: '0.75rem' }}>Market Size</h4>
              <p style={{ fontSize: '0.875rem' }}><strong>Primary:</strong> 38 Bapenda Provinsi</p>
              <p style={{ fontSize: '0.875rem' }}><strong>Expansion:</strong> 514 Kab/Kota</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '0.75rem' }}>
              <h4 style={{ color: 'white', marginBottom: '0.75rem' }}>Fase 1 (0-6 bln)</h4>
              <p style={{ fontSize: '0.875rem' }}>Pilot Gratis MoU</p>
              <p style={{ fontSize: '0.875rem' }}>DKI / Jabar target</p>
              <p style={{ fontSize: '0.875rem' }}>Zero cost for pemda</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '0.75rem' }}>
              <h4 style={{ color: 'white', marginBottom: '0.75rem' }}>Fase 2 (6-18 bln)</h4>
              <p style={{ fontSize: '0.875rem' }}>SaaS B2G: Rp 15-25 jt/bln</p>
              <p style={{ fontSize: '0.875rem' }}>e-Katalog LKPP</p>
              <p style={{ fontSize: '0.875rem' }}>Payback 6-8 bulan</p>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Team: Ownership, Bukan Jabatan</h3>
          <div className="team-grid">
            <div className="team-card">
              <h3 style={{ color: 'white' }}>Kwik Andreas Jonathan</h3>
              <p className="role">Team Lead / Architect</p>
              <ul style={{ fontSize: '0.875rem', paddingLeft: '1.25rem' }}>
                <li>Migrasi Streamlit → Next.js 16</li>
                <li>Sistem precomputed serverless</li>
                <li>Koordinasi lintas modul</li>
              </ul>
            </div>
            
            <div className="team-card">
              <h3 style={{ color: 'white' }}>Gwyneth Eunice Widjaja</h3>
              <p className="role">Product & Data Lead</p>
              <ul style={{ fontSize: '0.875rem', paddingLeft: '1.25rem' }}>
                <li>10 iterasi UX dari feedback reviewer</li>
                <li>Pipeline data DJPK</li>
                <li>Ensemble Prophet + WAPE/sMAPE</li>
              </ul>
            </div>
            
            <div className="team-card">
              <h3 style={{ color: 'white' }}>Clay Micholaz Fu</h3>
              <p className="role">AI & Tech Lead</p>
              <ul style={{ fontSize: '0.875rem', paddingLeft: '1.25rem' }}>
                <li>Isolation Forest + feature engineering</li>
                <li>Ditemukan & dibersihkan &gt;1.000 duplikat</li>
                <li>Validasi konsistensi dataset</li>
              </ul>
            </div>
            
            <div className="team-card">
              <h3 style={{ color: 'white' }}>Moses Chisthoper Adisam</h3>
              <p className="role">Business & Domain Lead</p>
              <ul style={{ fontSize: '0.875rem', paddingLeft: '1.25rem' }}>
                <li>Data sourcing DJPK Kemenkeu</li>
                <li>Analisis kebutuhan Bapenda</li>
                <li>Alignment domain pemerintahan</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="cta-section" style={{ marginTop: '3rem' }}>
          <p className="website">
            <a href="https://revdadas.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>
              revdadas.vercel.app
            </a>
          </p>
          <p className="github">
            <a href="https://github.com/KwikAndreas/revdadas" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.9)' }}>
              github.com/KwikAndreas/revdadas
            </a>
          </p>
        </div>
        
        <div className="team-footer">
          <p>Kwik Andreas Jonathan · Gwyneth Eunice Widjaja · Clay Micholaz Fu · Moses Chisthoper Adisam</p>
          <p>Universitas Bunda Mulia | S0175</p>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
