export default function Closing() {
  return (
    <section className="section section-closing">
      <div className="section-meta" aria-hidden="true">
        <span>9</span>
        <span>Team & Closing</span>
      </div>

      <div className="slide-content" style={{ paddingTop: "2.5rem" }}>
        <h1 style={{ color: "white", marginBottom: "1.5rem" }}>
          Layak Dipercaya. Layak Dilanjutkan.
        </h1>
        <h2 style={{ color: "rgba(255,255,255,0.9)", marginBottom: "2.5rem" }}>
          Problem nyata + prototype fungsional + teknologi teruji + team yang bisa eksekusi.
        </h2>

        <div className="evidence-pills" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "2.5rem" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "1.5rem 1.25rem",
              borderRadius: "0.5rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 style={{ color: "white", marginBottom: "0.75rem", fontSize: "1rem" }}>Problem Tervalidasi</h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.95)" }}>
              <strong style={{ fontSize: "1.25rem", color: "#fbbf24" }}>7.006</strong> kelemahan SPI (BPK)
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.85)", marginTop: "0.5rem" }}>
              UU HKPD 2022 · 20–30 hari audit manual
            </p>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "1.5rem 1.25rem",
              borderRadius: "0.5rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 style={{ color: "white", marginBottom: "0.75rem", fontSize: "1rem" }}>Prototype Live</h3>
            <p style={{ fontSize: "0.9rem" }}>
              <a
                href="https://revdadas.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fbbf24", textDecoration: "underline" }}
              >
                revdadas.vercel.app
              </a>
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.85)", marginTop: "0.5rem" }}>
              <strong>&lt;2 detik</strong> · 9 komponen fungsional
            </p>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "1.5rem 1.25rem",
              borderRadius: "0.5rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 style={{ color: "white", marginBottom: "0.75rem", fontSize: "1rem" }}>Teknologi Teruji</h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.95)" }}>
              <strong style={{ fontSize: "1.25rem", color: "#fbbf24" }}>110</strong> skenario
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.85)", marginTop: "0.5rem" }}>
              AI tervalidasi data nyata
            </p>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "1.5rem 1.25rem",
              borderRadius: "0.5rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 style={{ color: "white", marginBottom: "0.75rem", fontSize: "1rem" }}>Team Siap</h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.95)" }}>
              <strong>4</strong> orang · ownership jelas
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.85)", marginTop: "0.5rem" }}>
              10 iterasi improvement
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", margin: "2rem 0", padding: "1.5rem 0" }}>
          <p style={{ fontSize: "1.35rem", color: "#fbbf24", fontStyle: "italic", fontWeight: "500" }}>
            &quot;Dari data APBD ke keputusan audit — dalam hitungan detik.&quot;
          </p>
        </div>

        <div style={{ marginTop: "2.5rem" }}>
          <h3
            style={{
              marginBottom: "1.25rem",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(245, 240, 223, 0.7)",
              textAlign: "center",
            }}
          >
            The Team
          </h3>

          <div
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(4, 1fr)", 
              gap: "1.25rem", 
              marginBottom: "1.5rem",
              maxWidth: "1000px",
              margin: "0 auto 1.5rem"
            }}
          >
            <div
              style={{
                background: "white",
                padding: "1.5rem 1rem",
                borderRadius: "0.5rem",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  color: "#1e293b",
                  marginBottom: "0.5rem",
                }}
              >
                Kwik Andreas Jonathan
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "#64748b",
                }}
              >
                Team Lead
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "1.5rem 1rem",
                borderRadius: "0.5rem",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  color: "#1e293b",
                  marginBottom: "0.5rem",
                }}
              >
                Gwyneth Eunice Widjaja
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "#64748b",
                }}
              >
                Product/UX Lead
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "1.5rem 1rem",
                borderRadius: "0.5rem",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  color: "#1e293b",
                  marginBottom: "0.5rem",
                }}
              >
                Clay Micholaz Fu
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "#64748b",
                }}
              >
                Tech/AI Lead
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "1.5rem 1rem",
                borderRadius: "0.5rem",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  color: "#1e293b",
                  marginBottom: "0.5rem",
                }}
              >
                Moses Chisthoper Adisam
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "#64748b",
                }}
              >
                Business/Domain Lead
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <p style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>
              <a
                href="https://revdadas.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fbbf24", fontWeight: "600" }}
              >
                revdadas.vercel.app
              </a>
            </p>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>
              <a
                href="https://github.com/KwikAndreas/revdadas"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                github.com/KwikAndreas/revdadas
              </a>
            </p>
          </div>

          <div
            style={{
              background: "rgba(254, 243, 199, 0.15)",
              border: "1px solid rgba(254, 243, 199, 0.25)",
              borderRadius: "0.5rem",
              padding: "1rem 1.25rem",
              marginTop: "1.5rem",
              maxWidth: "1000px",
              margin: "1.5rem auto 0",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "#fef3c7",
                fontStyle: "italic",
                margin: 0,
                textAlign: "center",
              }}
            >
              <strong>Gap & Mitigasi:</strong> Pengalaman procurement & BD → didampingi mentor PIDI · Detail roadmap di Appendix A2 & A3
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>
              Kwik Andreas Jonathan · Gwyneth Eunice Widjaja · Clay Micholaz Fu · Moses Chisthoper Adisam
            </p>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", marginTop: "0.35rem" }}>
              <strong>S0175</strong>
            </p>
          </div>
        </div>
      </div>

      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
