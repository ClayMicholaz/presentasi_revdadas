export default function Value() {
  return (
    <section className="section section-value">
      <div className="section-meta" aria-hidden="true">
        <span>08-11</span>
        <span>Technology &amp; Impact</span>
      </div>
      
      <div className="slide-content">
        <div className="slide-8">
          <h1>Pipeline AI: Dari CSV ke Insight</h1>
          <h2>Dua masalah data kritis diselesaikan sebelum model AI dijalankan.</h2>
          
          <div className="pipeline-diagram">
            <div className="pipeline-step">📁 CSV Mentah DJPK (1.2MB, 542 daerah)</div>
            <div className="arrow">↓</div>
            <div className="pipeline-step">🔧 DataLoader</div>
            <div className="arrow">↓</div>
            <div className="pipeline-step alert">🚫 De-duplikasi — &gt;1.000 baris ganda dihapus</div>
            <div className="arrow">↓</div>
            <div className="pipeline-step alert">📉 Decumulation Engine — kumulatif YTD → bulanan diskret<br/><small>[Mengeliminasi lonjakan semu hingga 2.146%]</small></div>
            <div className="arrow">↓</div>
            <div className="pipeline-step">⚙️ Feature Engineering — 4 fitur per seri</div>
            <div className="arrow">↓</div>
            <div className="pipeline-step dual">
              <strong>DUA MODEL PARALEL</strong>
              <div className="model-box">
                <div>🔴 Isolation Forest<br/><small>(Anomaly Detection)</small></div>
                <div>📈 Ensemble Prophet<br/><small>(Forecasting)</small></div>
              </div>
            </div>
            <div className="arrow">↓</div>
            <div className="pipeline-step">📦 Precompute → 110 Skenario → 7 JSON Statis</div>
            <div className="arrow">↓</div>
            <div className="pipeline-step">🌐 Next.js Dashboard (&lt;100ms)</div>
            <div className="arrow">↓</div>
            <div className="pipeline-step">📄 Export PDF Eksekutif</div>
          </div>
          
          <div className="isolation-forest-highlight">
            <h3>Isolation Forest:</h3>
            <p><strong>Input:</strong> Revenue_Norm, MoM_Change, Ratio_to_MA, Seasonality_Deviation</p>
            <p><strong>Output:</strong> Flag anomali + Severity (Tinggi/Sedang/Rendah) + Alasan Bahasa Indonesia</p>
          </div>
          
          <div className="key-callout">
            <p>⚡ Seluruh komputasi AI berjalan saat <em>precompute</em> — bukan saat user request.</p>
          </div>
        </div>
        
        <div className="slide-9">
          <h1>Arsitektur Serverless: Zero Backend</h1>
          <h2>Tidak ada server backend yang harus jalan 24/7 — loading instan, biaya nol.</h2>
          
          <div className="architecture-diagram">
            <div className="layer">
              <h3>Layer 1 — PRECOMPUTE (Python, Lokal)</h3>
              <ul>
                <li>├── data_loader.py (Dedup + Decumulate)</li>
                <li>├── forecasting.py (Ensemble Prophet)</li>
                <li>├── anomaly_detection.py (Isolation Forest)</li>
                <li>├── business.py (Sektor Scoring)</li>
                <li>└── policy.py (Rule-based Recommendations)</li>
              </ul>
              <p className="output">↓ generate<br/>7 JSON Static Files (110 skenario)</p>
            </div>
            
            <div className="layer">
              <h3>Layer 2 — CDN (Vercel)</h3>
              <p>└── Static hosting — global edge network</p>
              <p className="output">↓ serve</p>
            </div>
            
            <div className="layer">
              <h3>Layer 3 — CLIENT (Browser)</h3>
              <p>└── Next.js 16 + React 19 — 9 komponen interaktif</p>
            </div>
          </div>
          
          <div className="tech-stack">
            <span className="tech-pill">Python</span>
            <span className="tech-pill">scikit-learn</span>
            <span className="tech-pill">Prophet</span>
            <span className="tech-pill">pandas</span>
            <span className="tech-pill">Next.js 16</span>
            <span className="tech-pill">React 19</span>
            <span className="tech-pill">TypeScript</span>
            <span className="tech-pill">Leaflet</span>
            <span className="tech-pill">Vercel</span>
          </div>
          
          <div className="key-metric">
            <p>⚡ Loading: <strong>&lt;100ms</strong> | Sebelumnya (Streamlit): <strong>15–30 detik</strong></p>
          </div>
          
          <div className="security-note">
            <p>🔒 Arsitektur client-side: data tidak transit ke server eksternal — krusial untuk konteks pemerintah</p>
          </div>
        </div>
        
        <div className="slide-10">
          <h1>Yang Sudah Diuji, Bukan yang Diklaim</h1>
          <h2>110 skenario tervalidasi. Backtest holdout 6 bulan. &gt;1.000 duplikat dihapus.</h2>
          
          <div className="metrics-table">
            <table>
              <thead>
                <tr>
                  <th>Komponen</th>
                  <th>Metrik</th>
                  <th>Hasil</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Anomaly Detection</strong></td>
                  <td>Total anomali terdeteksi (8 provinsi)</td>
                  <td><strong>[X] records</strong></td>
                </tr>
                <tr>
                  <td>Isolation Forest</td>
                  <td>Severity Tinggi / Sedang / Rendah</td>
                  <td><strong>[X%] / [X%] / [X%]</strong></td>
                </tr>
                <tr>
                  <td><strong>Forecasting</strong></td>
                  <td>WAPE rata-rata (holdout 6 bulan)</td>
                  <td><strong>[XX]%</strong></td>
                </tr>
                <tr>
                  <td>Ensemble Prophet</td>
                  <td>sMAPE rata-rata</td>
                  <td><strong>[XX]%</strong></td>
                </tr>
                <tr>
                  <td><strong>Decumulation Engine</strong></td>
                  <td>False spike dieliminasi</td>
                  <td><strong>hingga 2.146%</strong></td>
                </tr>
                <tr>
                  <td><strong>Data Pipeline</strong></td>
                  <td>Duplikat dihapus</td>
                  <td><strong>&gt;1.000 baris</strong></td>
                </tr>
                <tr>
                  <td><strong>Dashboard</strong></td>
                  <td>Loading time</td>
                  <td><strong>&lt;100ms</strong></td>
                </tr>
                <tr>
                  <td><strong>Quality Gate</strong></td>
                  <td>Skenario lolos validasi</td>
                  <td><strong>110 dari [total]</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="callouts">
            <div className="callout amber">
              <p>⚠️ <strong>Transparansi:</strong> Beberapa seri forecast masih volatile pada data lumpy. Forecasting diposisikan sebagai fitur pendukung, bukan core value.</p>
            </div>
            <div className="callout blue">
              <p>✅ <strong>Anomaly detection:</strong> anomali yang terdeteksi adalah penyimpangan statistik signifikan — perlu investigasi audit, bukan klaim fraud otomatis.</p>
            </div>
          </div>
        </div>
        
        <div className="slide-11">
          <h1>Impact yang Bisa Dijelaskan</h1>
          <h2>Dua jenis impact — yang sudah terukur, dan yang masih estimasi dengan asumsi transparan.</h2>
          
          <div className="impact-zones">
            <div className="zone measured">
              <h3>MEASURED</h3>
              <table>
                <thead>
                  <tr>
                    <th>KPI</th>
                    <th>Baseline</th>
                    <th>Dengan RevDadas</th>
                    <th>Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Waktu identifikasi anomali</td>
                    <td>20–30 hari</td>
                    <td>Instan (&lt;100ms)</td>
                    <td>Dashboard live</td>
                  </tr>
                  <tr>
                    <td>Cakupan data teranalisis</td>
                    <td>Sampling manual</td>
                    <td>14 komponen × 8 provinsi</td>
                    <td>110 skenario</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="zone estimated">
              <h3>ESTIMATED</h3>
              <table>
                <thead>
                  <tr>
                    <th>KPI</th>
                    <th>Basis</th>
                    <th>Estimasi</th>
                    <th>Asumsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Potensi Recovery PAD</td>
                    <td>PAD DJPK 2024 Rp 176,7 T (4 provinsi)</td>
                    <td>Rp 8,8–17,7 T/tahun</td>
                    <td>Recovery rate 5–10% konservatif</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="disclaimer">
            <p><em>Estimasi recovery rate 5–10% adalah simulasi konservatif berbasis data PAD DJPK 2024 terverifikasi (DKI Rp 50,74T + Jabar Rp 55,26T + Jatim Rp 49,63T + Banten Rp 21,05T = Rp 176,68T). Recovery aktual bergantung kualitas investigasi audit. Pilot Bapenda adalah langkah validasi berikutnya.</em></p>
          </div>
        </div>
      </div>
      
      <span className="section-mark" aria-hidden="true" />
    </section>
  );
}
