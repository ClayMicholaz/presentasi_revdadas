export default function Differentiator() {
  return (
    <section className="section section-future">
      <div className="section-meta" aria-hidden="true">
        <span>7</span>
        <span>Competitive Advantage</span>
      </div>

      <div className="slide-content" style={{ maxWidth: "1100px" }}>
        <h1 style={{ marginBottom: "0.75rem" }}>Kenapa Tidak Pakai Cara Lain?</h1>
        <h2 style={{ marginBottom: "1.25rem" }}>
          Cara lain (spreadsheet manual atau dashboard BI umum) tidak dibangun khusus untuk deteksi anomali fiskal daerah Indonesia.
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
                <td>Deteksi Anomali Otomatis</td>
                <td>Tidak</td>
                <td>Tidak</td>
                <td className="highlight">Ya</td>
              </tr>
              <tr>
                <td>Pakai Data Resmi Kemenkeu (DJPK)</td>
                <td>Parsial</td>
                <td>Tidak</td>
                <td className="highlight">Ya</td>
              </tr>
              <tr>
                <td>Bahasa Indonesia + Konteks Pemerintah Daerah</td>
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
            Keunggulan yang Sulit Ditiru
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
                Dashboard Muncul Langsung
              </strong>
              <p style={{ fontSize: "0.8125rem", margin: 0 }}>
                Kompetitor lain butuh server mahal dan loading lama
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
                Data Resmi Kemenkeu
              </strong>
              <p style={{ fontSize: "0.8125rem", margin: 0 }}>
                Pakai data asli dari DJPK, bukan data tiruan
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
                Kode Bisa Diperiksa
              </strong>
              <p style={{ fontSize: "0.8125rem", margin: 0 }}>
                Pemerintah bisa audit kode program, tidak ada yang disembunyikan
              </p>
            </div>
          </div>
        </div>
      </div>

      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
