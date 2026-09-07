export default function Differentiator() {
  return (
    <section className="section section-future">
      <div className="section-meta" aria-hidden="true">
        <span>7</span>
        <span>Competitive Advantage</span>
      </div>

      <div className="slide-content" style={{ maxWidth: "1100px" }}>
        <h1 style={{ marginBottom: "0.75rem" }}>Kenapa Bukan yang Lain?</h1>
        <h2 style={{ marginBottom: "1.25rem" }}>
          Alternatif yang ada tidak dibangun untuk anomaly detection fiskal
          daerah Indonesia.
        </h2>

        <div className="comparison-table" style={{ marginBottom: "1.5rem" }}>
          <table style={{ fontSize: "0.875rem" }}>
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
                <td>Dashboard Muncul Langsung</td>
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
                <td className="highlight">
                  <strong>Nol</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <h3
            style={{
              fontSize: "1.125rem",
              marginBottom: "0.875rem",
              textAlign: "center",
            }}
          >
            Competitive Moat
          </h3>
          <div className="moat-grid" style={{ display: "grid", gap: "1rem" }}>
            <div
              style={{
                background: "white",
                padding: "1rem",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <strong
                style={{
                  fontSize: "0.9rem",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                Precomputed Architecture
              </strong>
              <p style={{ fontSize: "0.8125rem", margin: 0 }}>
                Kompetitor on-demand butuh backend mahal
              </p>
            </div>
            <div
              style={{
                background: "white",
                padding: "1rem",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <strong
                style={{
                  fontSize: "0.9rem",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                Data DJPK Resmi
              </strong>
              <p style={{ fontSize: "0.8125rem", margin: 0 }}>
                Bukan sintetis, institutional trust tinggi
              </p>
            </div>
            <div
              style={{
                background: "white",
                padding: "1rem",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <strong
                style={{
                  fontSize: "0.9rem",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                Open Source MIT
              </strong>
              <p style={{ fontSize: "0.8125rem", margin: 0 }}>
                Pemerintah bisa audit kode, tidak ada black box
              </p>
            </div>
          </div>
        </div>
      </div>

      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
