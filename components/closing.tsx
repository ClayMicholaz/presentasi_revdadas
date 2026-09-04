export default function Closing() {
  return (
    <section className="section section-closing scrollable">
      <div className="section-meta" aria-hidden="true">
        <span>9</span>
        <span>Team & Closing</span>
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
          <h3 style={{ marginBottom: '1.5rem', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245, 240, 223, 0.7)' }}>Team & Ownership</h3>
          <h2 style={{ color: '#f5f0df', marginBottom: '2rem', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>Tim RevDadas</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ background: 'white', padding: '1.75rem 1.25rem', borderRadius: '0.5rem', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>Kwik Andreas Jonathan</h3>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.75rem' }}>Team Lead</p>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: '1.5' }}>Arsitektur sistem & deployment</p>
            </div>
            
            <div style={{ background: 'white', padding: '1.75rem 1.25rem', borderRadius: '0.5rem', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>Gwyneth Eunice Widjaja</h3>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.75rem' }}>Product/UX Lead</p>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: '1.5' }}>Data engineering & UX</p>
            </div>
            
            <div style={{ background: 'white', padding: '1.75rem 1.25rem', borderRadius: '0.5rem', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>Clay Micholaz Fu</h3>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.75rem' }}>Tech/AI Lead</p>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: '1.5' }}>Model & validasi kualitas data</p>
            </div>
            
            <div style={{ background: 'white', padding: '1.75rem 1.25rem', borderRadius: '0.5rem', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>Moses Chisthoper Adisam</h3>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.75rem' }}>Business/Domain Lead</p>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: '1.5' }}>Data sourcing & kebutuhan Bapenda</p>
            </div>
          </div>
          
          <div style={{ background: 'rgba(254, 243, 199, 0.2)', border: '1px solid rgba(254, 243, 199, 0.3)', borderRadius: '0.5rem', padding: '1rem', marginTop: '2rem' }}>
            <p style={{ fontSize: '0.8125rem', color: '#fef3c7', fontStyle: 'italic', margin: 0 }}>
              Gap & Mitigasi: legal/compliance procurement pemerintah & business development → pendampingan mentor PIDI, kolaborasi inkubator govtech
            </p>
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
