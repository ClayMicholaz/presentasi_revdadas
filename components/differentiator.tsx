export default function Differentiator() {
  return (
    <section className="section section-future">
      <div className="section-meta" aria-hidden="true">
        <span>7</span>
        <span>Competitive Advantage</span>
      </div>

      <div className="slide-content" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "0.75rem" }}>Kenapa Tidak Pakai Cara Lain?</h1>
        <h2 style={{ marginBottom: "1.5rem" }}>
          Cara lain (spreadsheet manual atau dashboard BI umum) tidak dibangun khusus untuk deteksi anomali fiskal daerah Indonesia.
        </h2>

        <div className="comparison-table" style={{ marginBottom: "2rem" }}>
          <table style={{ fontSize: "0.9rem", width: "100%" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Dimensi</th>
                <th style={{ textAlign: "center" }}>Spreadsheet Manual</th>
                <th style={{ textAlign: "center" }}>Dashboard BI Umum</th>
                <th className="highlight" style={{ textAlign: "center" }}>RevDadas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Deteksi Anomali Otomatis</td>
                <td style={{ textAlign: "center", color: "#94a3b8" }}>✕</td>
                <td style={{ textAlign: "center", color: "#94a3b8" }}>✕</td>
                <td className="highlight" style={{ textAlign: "center", color: "#16a34a", fontSize: "1.25rem" }}>✓</td>
              </tr>
              <tr>
                <td>Pakai Data Resmi Kemenkeu (DJPK)</td>
                <td style={{ textAlign: "center", color: "#64748b", fontSize: "0.85rem" }}>Parsial</td>
                <td style={{ textAlign: "center", color: "#94a3b8" }}>✕</td>
                <td className="highlight" style={{ textAlign: "center", color: "#16a34a", fontSize: "1.25rem" }}>✓</td>
              </tr>
              <tr>
                <td>Penjelasan Anomali Otomatis (Bahasa Indonesia)</td>
                <td style={{ textAlign: "center", color: "#94a3b8" }}>✕</td>
                <td style={{ textAlign: "center", color: "#94a3b8" }}>✕</td>
                <td className="highlight" style={{ textAlign: "center", color: "#16a34a", fontSize: "1.25rem" }}>✓</td>
              </tr>
              <tr>
                <td>Open Source (dapat diaudit)</td>
                <td style={{ textAlign: "center", color: "#94a3b8" }}>✕</td>
                <td style={{ textAlign: "center", color: "#94a3b8" }}>✕</td>
                <td className="highlight" style={{ textAlign: "center", color: "#16a34a", fontSize: "1.25rem" }}>✓</td>
              </tr>
              <tr>
                <td>Biaya server backend</td>
                <td style={{ textAlign: "center", color: "#64748b" }}>—</td>
                <td style={{ textAlign: "center", color: "#dc2626" }}>Mahal</td>
                <td className="highlight" style={{ textAlign: "center" }}>
                  <strong style={{ color: "#16a34a" }}>Nol</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h3
            style={{
              fontSize: "1.125rem",
              marginBottom: "1.25rem",
              textAlign: "center",
            }}
          >
            Keunggulan yang Sulit Ditiru
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            <div
              style={{
                background: "white",
                padding: "1.25rem",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <strong
                style={{
                  fontSize: "0.95rem",
                  display: "block",
                  marginBottom: "0.75rem",
                  color: "#1e40af",
                }}
              >
                Dibangun Khusus untuk Fiskal Daerah
              </strong>
              <p style={{ fontSize: "0.85rem", margin: 0, lineHeight: "1.6" }}>
                Disesuaikan langsung dengan aturan UU HKPD dan format data DJPK, bukan dashboard umum
              </p>
            </div>
            <div
              style={{
                background: "white",
                padding: "1.25rem",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <strong
                style={{
                  fontSize: "0.95rem",
                  display: "block",
                  marginBottom: "0.75rem",
                  color: "#1e40af",
                }}
              >
                Tidak Perlu Server Mahal
              </strong>
              <p style={{ fontSize: "0.85rem", margin: 0, lineHeight: "1.6" }}>
                Berjalan langsung di browser tanpa biaya server untuk pemda
              </p>
            </div>
            <div
              style={{
                background: "white",
                padding: "1.25rem",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <strong
                style={{
                  fontSize: "0.95rem",
                  display: "block",
                  marginBottom: "0.75rem",
                  color: "#1e40af",
                }}
              >
                Kode Bisa Diperiksa Pemerintah
              </strong>
              <p style={{ fontSize: "0.85rem", margin: 0, lineHeight: "1.6" }}>
                Program dan cara kerja AI bisa diaudit, syarat wajib untuk sistem audit pemerintah
              </p>
            </div>
          </div>
        </div>
      </div>

      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
