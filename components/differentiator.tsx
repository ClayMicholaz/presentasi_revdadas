export default function Differentiator() {
  return (
    <section className="section section-future">
      <div className="section-meta" aria-hidden="true">
        <span>7</span>
        <span>Competitive Advantage</span>
      </div>
      
      <div className="slide-content">
        <h1>Kenapa Bukan yang Lain?</h1>
        <h2>Alternatif yang ada tidak dibangun untuk anomaly detection fiskal daerah Indonesia.</h2>
        
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Dimensi</th>
                <th>Spreadsheet Manual</th>
                <th>Dashboard BI Umum</th>
                <th className="highlight">RevDadas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anomaly Detection Otomatis</td>
                <td>Tidak</td>
                <td>Tidak</td>
                <td className="highlight">Ya</td>
              </tr>
              <tr>
                <td>Data Fiskal Daerah (DJPK)</td>
                <td>Parsial</td>
                <td>Tidak</td>
                <td className="highlight">Ya</td>
              </tr>
              <tr>
                <td>Bahasa Indonesia + Konteks Pemda</td>
                <td>Tidak</td>
                <td>Tidak</td>
                <td className="highlight">Ya</td>
              </tr>
              <tr>
                <td>Loading Instan (&lt;100ms)</td>
                <td>Tidak</td>
                <td>Tidak</td>
                <td className="highlight">Ya</td>
              </tr>
              <tr>
                <td>Open Source (dapat diaudit)</td>
                <td>Tidak</td>
                <td>Tidak</td>
                <td className="highlight">Ya</td>
              </tr>
              <tr>
                <td>Biaya server backend</td>
                <td>—</td>
                <td>Mahal</td>
                <td className="highlight"><strong>Nol</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="competitive-moat">
          <h3>Competitive Moat</h3>
          <div className="moat-points">
            <div className="moat-item">
              <strong>Precomputed Architecture</strong>
              <p>Kompetitor on-demand butuh backend mahal</p>
            </div>
            <div className="moat-item">
              <strong>Data DJPK Resmi</strong>
              <p>Bukan sintetis, institutional trust tinggi</p>
            </div>
            <div className="moat-item">
              <strong>Open Source MIT</strong>
              <p>Pemerintah bisa audit kode, tidak ada black box</p>
            </div>
          </div>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
