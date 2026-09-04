# REVDADAS — FINAL PITCH DECK CONTENT
## Siap Masuk Canva | Format 16:9 | Bernomor
### Hackathon PIDI BI DIGDAYA 2026

---

> **PANDUAN DESAIN CANVA:**
> - Format: 16:9 (1920×1080px atau Canva Presentation standard)
> - Font: Inter atau Plus Jakarta Sans (tersedia di Canva)
> - Setiap slide HARUS ada nomor slide di pojok kanan bawah
> - Satu slide = satu pesan utama yang bisa dipahami dalam 3 detik

---

## 🔷 COVER SLIDE (Slide 0)


**Headline:** `RevDadas`
**Subheadline:** `AI-Powered Revenue Analytics & Anomaly Detection untuk Optimalisasi Fiskal Pemerintah Daerah`
**Tagline kecil:** `revdadas.vercel.app`
**Badge:** `Hackathon PIDI BI DIGDAYA 2026 | S0175`
**Tim:** `Kwik Andreas Jonathan  · Clay Micholaz Fu · Gwyneth Eunice Widjaja· Moses Chisthoper Adisam`

---

## 🔴 SECTION 1: PROBLEM & VALIDATION

---

### SLIDE 1 — "7.006 Kelemahan. Satu Penyebab."

**Nomor:** `01`
**Pesan utama (headline besar):** `Anomali fiskal Bapenda tidak terdeteksi — sampai terlambat.`

**Visual layout:** Split layout
- Kiri: Angka besar **"7.006"** dalam font jumbo merah/amber + label kecil "Kelemahan SPI — BPK RI IHPS I/2023"
- Kanan: Timeline visual horizontal:
  - `Bulan 1` → Data self-assessment masuk
  - `Hari 1–30` → Rekonsiliasi manual (warna merah)
  - `Hari 30+` → Anomali terdeteksi... tapi anggaran sudah terkunci ❌

**Body (poin kecil di bawah):**
- 705 entitas pemerintah teraudit
- Rekonsiliasi manual: **20–30 hari/siklus**
- Ketika anomali ditemukan, siklus anggaran sudah terkunci
- Problem Statement: **Elektronifikasi Keuangan Daerah**

**Evidence callout (kotak kecil):**
> 🔴 Sumber: BPK RI IHPS I/2023 | UU No.1/2022 (HKPD)

---

### SLIDE 2 — "Data Ada. Insight Tidak."

**Nomor:** `02`
**Pesan utama:** `Bapenda terjebak analysis paralysis — data berlimpah, tanpa instrumen validasi.`

**Visual layout:** 3-kolom vertikal (Who | Root Cause | Consequence)

**Kolom 1 — WHO:**
> 👤 **Kepala Bidang Pengawasan Bapenda Provinsi**
> Menerima ribuan baris data setoran self-assessment setiap bulan

**Kolom 2 — ROOT CAUSE:**
> ⚠️ **Self-assessment tax = Asimetri informasi**
> Bapenda tidak punya instrumen validasi otomatis untuk cocokkan nilai setoran vs transaksi riil

**Kolom 3 — CONSEQUENCE:**
> 📉 **Analysis Paralysis**
> Target APBD ditetapkan berbasis asumsi statis → defisit pembiayaan infrastruktur, kesehatan, pendidikan

**Bottom strip (2 signal):**
| Signal | Data |
|---|---|
| 🏛️ Kesiapan institusional | 73,6% pemda sudah Digital (ETPD Sem.I/2023) |
| 📜 Regulatory push | UU HKPD 2022 amanatkan optimasi PAD |

**Design note:** Background gelap, tiga kolom dengan border/card sederhana

---

## 🟢 SECTION 2: SOLUTION & DIFFERENTIATION

---

### SLIDE 3 — "RevDadas: Anomaly Detection untuk Bapenda"

**Nomor:** `03`
**Pesan utama:** `RevDadas mengubah 20–30 hari rekonsiliasi menjadi deteksi anomali instan.`

**Visual layout:** Hero slide — logo besar + value prop statement

**Content:**
- **Logo RevDadas** (besar, center-left)
- **Value Proposition** (besar, bold):
  > *"RevDadas membantu Bapenda provinsi mendeteksi anomali pencatatan PAD secara otomatis dan instan — langsung di browser, tanpa instalasi."*

**Dua capability pill/badge:**
| 🎯 CORE — Anomaly Detection | 📈 PENDUKUNG — Revenue Forecasting |
|---|---|
| Isolation Forest | Ensemble Prophet + Naive-Seasonal |
| Identifikasi anomali PAD otomatis | Proyeksi revenue 6–24 bulan |

**Target market:**
> **38 Bapenda Provinsi** → ekspansi **514 Kab/Kota**

**Design note:** Emphasis visual yang besar pada "Anomaly Detection" — ini yang perlu diingat juri

---

### SLIDE 4 — "Dari Data ke Keputusan Audit: <5 Menit"

**Nomor:** `04`
**Pesan utama:** `Satu workflow — dari data ke instruksi audit terfokus — dalam kurang dari 5 menit.`

**Visual layout:** Horizontal flow diagram (6 langkah)

```
[Buka Browser] → [Pilih Provinsi] → [Lihat Anomali] → [Identifikasi Wilayah Risiko] → [Export PDF] → [Instruksi Audit]
    1 detik         2 detik           Instan             Instan                         1 klik          Segera
```

**Before vs After strip di bawah:**
| | Sebelum (Manual) | Setelah (RevDadas) |
|---|---|---|
| ⏱ Waktu deteksi | 20–30 hari | Instan (<100ms) |
| 🎯 Jenis audit | Acak, merata | Targeted, berbasis risiko |
| 📄 Dokumentasi | Manual spreadsheet | PDF otomatis |
| 🔍 Cakupan | Terbatas, sampling | 14 komponen APBD |

**Design note:** Flow diagram sebaiknya menggunakan panah berwarna, langkah nomor bold

---

### SLIDE 5 — "Kenapa Bukan yang Lain?"

**Nomor:** `05`
**Pesan utama:** `Alternatif yang ada tidak dibangun untuk anomaly detection fiskal daerah Indonesia.`

**Visual layout:** Comparison table (3 kolom)

| Dimensi | Spreadsheet Manual | Dashboard BI Umum | **RevDadas** |
|---|---|---|---|
| Anomaly Detection Otomatis | ❌ | ❌ | ✅ |
| Data Fiskal Daerah (DJPK) | Parsial | ❌ | ✅ |
| Bahasa Indonesia + Konteks Pemda | ❌ | ❌ | ✅ |
| Loading Instan (<100ms) | ❌ | ❌ | ✅ |
| Open Source (dapat diaudit) | ❌ | ❌ | ✅ |
| Biaya server backend | — | Mahal | **Nol** |

**Competitive moat callout (3 poin):**
1. 🏗️ **Precomputed Architecture** — kompetitor on-demand butuh backend mahal
2. 📊 **Data DJPK Resmi** — bukan sintetis, institutional trust tinggi
3. 🔓 **Open Source MIT** — pemerintah bisa audit kode, tidak ada black box

---

## 🔵 SECTION 3: PROTOTYPE & TECHNOLOGY

---

### SLIDE 6 — "Bukan Mockup. Ini Live."

**Nomor:** `06`
**Pesan utama:** `RevDadas sudah live — 9 komponen fungsional, data real, dapat diakses sekarang.`

**Visual layout:** Screenshot dashboard actual (crop fokus ke KPI Cards + Anomaly Table) — 70% layar

**Badges di atas screenshot:**
- 🟢 `LIVE` | `revdadas.vercel.app` | `Next.js 16 + React 19`

**9 komponen list (di samping screenshot, font kecil, checklist):**
```
✅ KPI Cards (Revenue, Anomali, Revenue Loss, Kemandirian Fiskal)
✅ Heatmap Geospasial Indonesia (Leaflet)
✅ Anomaly Detection Table (Isolation Forest + AI Reason)
✅ Impact Calculator
✅ Revenue Historical vs Forecast Chart
✅ Proportion Chart (14 Komponen APBD)
✅ AI Policy Recommendations
✅ Interactive Sidebar
✅ Export PDF Eksekutif
```

**Data coverage strip:**
> 📁 8 Provinsi Tervalidasi · 14 Komponen APBD · Data DJPK 2023–2025 · 110 Skenario Validated

**QR Code:** pojok kanan bawah slide → `revdadas.vercel.app`

---

### SLIDE 7 — [DEMO SLIDE]

**Nomor:** `07`
**Pesan utama:** `[Slot untuk Live Demo / Recorded Demo]`

**Visual layout:** Layar penuh — ini adalah slide yang dipakai saat demo berlangsung

**Teks minimal di atas:**
> `▶ DEMO: Core Use Case — Deteksi Anomali DKI Jakarta`

**Sub-teks (kecil, di bawah):**
> Menunjukkan: Pilih Provinsi → KPI Cards → Anomali Severity Tinggi → Heatmap → Export PDF

**Design note:**
- Slide ini berfungsi sebagai "label" saat Clay share screen dashboard
- Tidak perlu konten padat — perhatian juri sedang di dashboard
- Kalau pakai recorded demo, embed video langsung di slide ini

**Backup text (tampilkan jika ada kendala teknis):**
> "Recorded demo tersedia. Silakan lanjut ke slide berikutnya untuk penjelasan teknis."

---

### SLIDE 8 — "Pipeline AI: Dari CSV ke Insight"

**Nomor:** `08`
**Pesan utama:** `Dua masalah data kritis diselesaikan sebelum model AI dijalankan.`

**Visual layout:** Diagram pipeline vertikal/horizontal dengan highlight

```
📁 CSV Mentah DJPK (1.2MB, 542 daerah)
        ↓
🔧 DataLoader
        ↓
🚫 De-duplikasi — >1.000 baris ganda dihapus
        ↓
📉 Decumulation Engine — kumulatif YTD → bulanan diskret
   [Mengeliminasi lonjakan semu hingga 2.146%]
        ↓
⚙️ Feature Engineering — 4 fitur per seri
        ↓
    ┌──────────────────────────────────┐
    │         DUA MODEL PARALEL        │
    │  🔴 Isolation Forest   📈 Ensemble Prophet  │
    │  (Anomaly Detection)   (Forecasting)        │
    └──────────────────────────────────┘
        ↓
📦 Precompute → 110 Skenario → 7 JSON Statis
        ↓
🌐 Next.js Dashboard (<100ms)
        ↓
📄 Export PDF Eksekutif
```

**Highlight Isolation Forest (kotak di samping):**
> **Input:** Revenue_Norm, MoM_Change, Ratio_to_MA, Seasonality_Deviation
> **Output:** Flag anomali + Severity (Tinggi/Sedang/Rendah) + Alasan Bahasa Indonesia

**Key callout:**
> ⚡ Seluruh komputasi AI berjalan saat *precompute* — bukan saat user request.

---

### SLIDE 9 — "Arsitektur Serverless: Zero Backend"

**Nomor:** `09`
**Pesan utama:** `Tidak ada server backend yang harus jalan 24/7 — loading instan, biaya nol.`

**Visual layout:** Diagram arsitektur 3 layer sederhana

```
Layer 1 — PRECOMPUTE (Python, Lokal)
  ├── data_loader.py (Dedup + Decumulate)
  ├── forecasting.py (Ensemble Prophet)
  ├── anomaly_detection.py (Isolation Forest)
  ├── business.py (Sektor Scoring)
  └── policy.py (Rule-based Recommendations)
              ↓ generate
         7 JSON Static Files (110 skenario)
              ↓ deploy
Layer 2 — CDN (Vercel)
  └── Static hosting — global edge network
              ↓ serve
Layer 3 — CLIENT (Browser)
  └── Next.js 16 + React 19 — 9 komponen interaktif
```

**Tech stack pills:**
`Python` `scikit-learn` `Prophet` `pandas` `Next.js 16` `React 19` `TypeScript` `Leaflet` `Vercel`

**Key metric:**
> ⚡ Loading: **<100ms** | Sebelumnya (Streamlit): **15–30 detik**

**Security note (kecil):**
> 🔒 Arsitektur client-side: data tidak transit ke server eksternal — krusial untuk konteks pemerintah

---

## 🟡 SECTION 4: TESTING & IMPACT

---

### SLIDE 10 — "Yang Sudah Diuji, Bukan yang Diklaim"

**Nomor:** `10`
**Pesan utama:** `110 skenario tervalidasi. Backtest holdout 6 bulan. >1.000 duplikat dihapus.`

**Visual layout:** Tabel metrik utama + 2 highlight callout

**Tabel metrik:**
| Komponen | Metrik | Hasil |
|---|---|---|
| **Anomaly Detection** | Total anomali terdeteksi (8 provinsi) | **[X] records** |
| Isolation Forest | Severity Tinggi / Sedang / Rendah | **[X%] / [X%] / [X%]** |
| **Forecasting** | WAPE rata-rata (holdout 6 bulan) | **[XX]%** |
| Ensemble Prophet | sMAPE rata-rata | **[XX]%** |
| **Decumulation Engine** | False spike dieliminasi | **hingga 2.146%** |
| **Data Pipeline** | Duplikat dihapus | **>1.000 baris** |
| **Dashboard** | Loading time | **<100ms** |
| **Quality Gate** | Skenario lolos validasi | **110 dari [total]** |

**Callout 1 (amber):**
> ⚠️ **Transparansi:** Beberapa seri forecast masih volatile pada data lumpy. Forecasting diposisikan sebagai fitur pendukung, bukan core value.

**Callout 2 (blue):**
> ✅ **Anomaly detection:** anomali yang terdeteksi adalah penyimpangan statistik signifikan — perlu investigasi audit, bukan klaim fraud otomatis.

**Design note:** Isi angka [X] dengan nilai aktual dari tim sebelum slide final

---

### SLIDE 11 — "Impact yang Bisa Dijelaskan"

**Nomor:** `11`
**Pesan utama:** `Dua jenis impact — yang sudah terukur, dan yang masih estimasi dengan asumsi transparan.`

**Visual layout:** Dua zona dengan border berbeda

**ZONA 1 — MEASURED (border hijau):**
| KPI | Baseline | Dengan RevDadas | Evidence |
|---|---|---|---|
| Waktu identifikasi anomali | 20–30 hari | Instan (<100ms) | Dashboard live |
| Cakupan data teranalisis | Sampling manual | 14 komponen × 8 provinsi | 110 skenario |

**ZONA 2 — ESTIMATED (border amber, dengan disclaimer):**
| KPI | Basis | Estimasi | Asumsi |
|---|---|---|---|
| Potensi Recovery PAD | PAD DJPK 2024 Rp 176,7 T (4 provinsi) | Rp 8,8–17,7 T/tahun | Recovery rate 5–10% konservatif |

**Disclaimer box (kecil, italic):**
> *Estimasi recovery rate 5–10% adalah simulasi konservatif berbasis data PAD DJPK 2024 terverifikasi (DKI Rp 50,74T + Jabar Rp 55,26T + Jatim Rp 49,63T + Banten Rp 21,05T = Rp 176,68T). Recovery aktual bergantung kualitas investigasi audit. Pilot Bapenda adalah langkah validasi berikutnya.*

**Design note:** Border warna berbeda sangat penting untuk differentiate "measured" vs "estimated"

---

## 🔵 SECTION 5: MARKET & ADOPTION

---

### SLIDE 12 — "Market Ada. Signal Ada. Validasi Berikutnya Siap."

**Nomor:** `12`
**Pesan utama:** `38 Bapenda, 73,6% sudah digital, regulasi mendukung — demand ada, adopter ada.`

**Visual layout:** 3-panel + validation status bar

**Panel 1 — Market Size:**
> 🎯 **Primary:** 38 Bapenda Provinsi
> 📍 **Expansion:** 514 Bapenda Kab/Kota

**Panel 2 — Demand Signals:**
> 📊 73,6% pemda sudah Digital (ETPD Sem.I/2023)
> 📜 UU HKPD 2022: amanat optimasi PAD
> 🔍 7.006 SPI weaknesses BPK: demand untuk solusi audit

**Panel 3 — Validation Received:**
> ✅ Feedback Mentor PIDI
> ✅ Review 2 Dosen Pembimbing
> ✅ Evaluasi Hackathon (3 tahap submission)
> ⏳ LOI/MoU Bapenda → **next validation step**

**Transparency strip:**
> 🔔 Kami belum memiliki konfirmasi LOI dari Bapenda. Target: MoU pilot pasca-hackathon dengan Bapenda DKI Jakarta atau Jawa Barat.

---

### SLIDE 13 — "3 Fase Menuju Adopsi"

**Nomor:** `13`
**Pesan utama:** `Zero-risk pilot → SaaS B2G → e-Katalog LKPP — hambatan masuk ditekan habis.`

**Visual layout:** Timeline 3 fase horizontal + competitive moat di bawah

**Timeline:**
```
FASE 1 (0–6 bln)              FASE 2 (6–18 bln)         FASE 3 (18–36 bln)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎁 Pilot Gratis MoU           💰 SaaS B2G                🏢 Ekspansi Multi-Instansi
• 1–2 Bapenda pilot           • Rp 15–25 jt/bln/instansi • e-Katalog LKPP
• DKI / Jabar target          • e-Katalog LKPP jalur     • 514 Kab/Kota
• User feedback real          • SLA performance          • SLA enterprise
• Zero cost for pemda         • Payback 6–8 bulan        • BSSN certified
```

**Competitive Moat pills (4 poin):**
| 🏗️ Precomputed Architecture | 📊 Data DJPK Resmi | 🔓 Open Source | 🌐 Network Effect |
|---|---|---|---|
| Loading instan, nol biaya server | Trust institusional | Audit keamanan terbuka | Makin banyak provinsi, benchmark makin kaya |

**Channel strip:**
> 🎓 UBM Academic Partner · 🏛️ APKASI (400+ bupati) · 🏢 Govtech Inkubator PIDI · 🔗 DJPK Kemenkeu

---

## 🟣 SECTION 6: TEAM & CLOSING

---

### SLIDE 14 — "Team: Ownership, Bukan Jabatan"

**Nomor:** `14`
**Pesan utama:** `Setiap fitur ada penanggungjawabnya — bukan sekadar gelar.`

**Visual layout:** 4 kartu tim (2×2 grid)

**Kartu 1 — Andreas:**
> 🧑‍💻 **Kwik Andreas Jonathan**
> Team Lead / Architect
> ↳ Migrasi Streamlit → Next.js 16
> ↳ Sistem precomputed serverless
> ↳ Koordinasi lintas modul

**Kartu 2 — Gwyneth:**
> 👩‍🔬 **Gwyneth Eunice Widjaja**
> Product & Data Lead
> ↳ 10 iterasi UX dari feedback reviewer
> ↳ Pipeline data DJPK (parsing, cleaning, audit)
> ↳ Ensemble Prophet + pipeline WAPE/sMAPE

**Kartu 3 — Clay:**
> 👨‍💻 **Clay Micholaz Fu**
> AI & Tech Lead
> ↳ Isolation Forest + feature engineering
> ↳ Ditemukan & dibersihkan >1.000 duplikat
> ↳ Validasi konsistensi dataset

**Kartu 4 — Moses:**
> 👨‍🏫 **Moses Chisthoper Adisam**
> Business & Domain Lead
> ↳ Data sourcing DJPK Kemenkeu
> ↳ Analisis kebutuhan Bapenda
> ↳ Alignment domain pemerintahan

**Gap acknowledgment (bottom strip, kecil):**
> Gap: legal/compliance pengadaan pemerintah → mitigasi: mentor PIDI + konsultasi govtech inkubator

---

### SLIDE 15 — "Roadmap: Konkret, Bukan Wishlist"

**Nomor:** `15`
**Pesan utama:** `Milestone jelas, PIC jelas, dependency jelas — bukan timeline aktivitas kosong.`

**Visual layout:** 4-baris roadmap dengan milestone + PIC + outcome

| Periode | Milestone | PIC | Target Outcome |
|---|---|---|---|
| Bln 1–3 | Pilot Bapenda pertama — MoU non-komersial | Andreas + Moses | Feedback user real, validasi use case lapangan |
| Bln 3–6 | API SIPD integration + Multi-tenancy | Andreas + Clay | Data live, akses per instansi terpisah |
| Bln 4–6 | Ekspansi data kab/kota | Moses + Gwyneth | Cakupan nasional bertahap |
| Bln 6–12 | SaaS komersial + e-Katalog LKPP + BSSN prep | Tim | Revenue pertama, sertifikasi keamanan |

**Komitmen strip:**
> ⏰ **15 jam/minggu/anggota** | 🎓 Dukungan akademik UBM | 🔓 Source code: github.com/KwikAndreas/revdadas

**Dependency yang diakui (transparan):**
> ⚠️ MoU Bapenda (fase 1) | API SIPD memerlukan koordinasi teknis (fase 2)

---

### SLIDE 16 — Closing: "Layak Dipercaya. Layak Dilanjutkan."

**Nomor:** `16`
**Pesan utama:** `Problem nyata + prototype fungsional + AI tervalidasi + team yang bisa eksekusi.`

**Visual layout:** Hero closing slide — gelap, bold, clean

**4 evidence pill (horizontal):**
| ✅ Problem Tervalidasi | ✅ Prototype Live | ✅ AI Tervalidasi | ✅ Team Siap |
|---|---|---|---|
| BPK: 7.006 SPI weaknesses · UU HKPD 2022 · 20–30 hari audit manual | revdadas.vercel.app · <100ms · 9 komponen fungsional | Isolation Forest + Backtest WAPE/sMAPE · 110 skenario | 4 orang · ownership jelas · 10 iterasi improvement |

**Tagline besar di tengah:**
> *"Dari data APBD ke keputusan audit — dalam hitungan detik."*

**CTA + QR:**
> 🌐 `revdadas.vercel.app`
> [QR Code — ukuran besar, pojok kanan]
> 📁 `github.com/KwikAndreas/revdadas`

**Tim kecil di bawah:**
> Kwik Andreas Jonathan · Gwyneth Eunice Widjaja · Clay Micholaz Fu · Moses Chisthoper Adisam
> Universitas Bunda Mulia | S0175

---

---

## 📎 APPENDIX SLIDES (Untuk Q&A)

---

### APPENDIX A1 — Detail Architecture Diagram

**Label:** `A1 — Full Technical Architecture`
**Content:** Diagram arsitektur lengkap 3 layer dengan semua file, endpoint, dan dependency
- Layer 1: src/ directory breakdown (data_loader.py, forecasting.py, anomaly_detection.py, business.py, policy.py, precompute.py)
- Layer 2: 7 JSON files yang dihasilkan + ukuran file
- Layer 3: Next.js 9 komponen + routing

---

### APPENDIX A2 — Isolation Forest: Input/Process/Output

**Label:** `A2 — Isolation Forest Algorithm`
**Content:**
- **Input:** 4 fitur engineering per seri: Revenue_Norm, MoM_Change, Ratio_to_MA, Seasonality_Deviation
- **Process:** Random trees → path length → anomaly score → kontaminasi dinamis
- **Output:** is_anomaly flag, severity (kuantil Tinggi/Sedang/Rendah), reason text Bahasa Indonesia
- **Kenapa Isolation Forest:** Tidak butuh labeled fraud data, robust untuk data fiskal; supervised learning tidak feasible di sektor pemerintah karena tidak ada ground truth label
- **Keterbatasan:** Anomali statistik ≠ fraud terkonfirmasi; perlu investigasi audit manual untuk konfirmasi

---

### APPENDIX A3 — Backtest Result Detail

**Label:** `A3 — Forecasting Backtest: WAPE & sMAPE per Provinsi`
**Content:**
- Tabel: Provinsi × Jenis Pendapatan → WAPE → sMAPE → Bobot Ensemble Terpilih
- Catatan: seri dengan data lumpy / <12 titik → fallback ke rata-rata musiman
- Distribution of results: [histogram atau bar chart WAPE per seri]
- Skenario yang tidak lolos quality gate dan alasannya

---

### APPENDIX A4 — Ensemble Prophet: Grid Search & Hyperparameters

**Label:** `A4 — Ensemble Prophet + Naive-Seasonal`
**Content:**
- Formula: `Prediksi = w × Prophet + (1-w) × Naive-Seasonal`
- Grid search weights: w = {0.0, 0.3, 0.5, 0.6, 0.8, 1.0}
- Selection criterion: WAPE minimum per seri pada holdout 6 bulan
- Hyperparameters: changepoint_prior_scale=0.05
- Fallback: seri <12 titik → rata-rata musiman
- Decumulation: mengapa kumulatif YTD dikonversi dulu sebelum training

---

### APPENDIX A5 — Data Source & Coverage

**Label:** `A5 — Data: DJPK Kemenkeu RI`
**Content:**
- Sumber: Data realisasi APBD DJPK Kemenkeu RI (publik)
- Raw: 1.2MB, 542 entitas (provinsi + kab/kota)
- Processed: 8 provinsi tervalidasi, 14 komponen APBD granular, 2023–2025 (36 bulan)
- 14 komponen: Pajak Daerah, Retribusi, TKDD, Hasil Kekayaan Daerah, Dana Hibah, Transfer Antar Daerah, dll.
- Quality gate: hanya skenario dengan horizon 36 bulan lengkap dan konsistensi data yang lolos
- Mengapa 8 provinsi: quality gate ketat → 110 skenario tervalidasi dari [total] kombinasi

---

### APPENDIX A6 — KPI Calculation Methodology

**Label:** `A6 — KPI Calculation Integrity (v2.0)`
**Content:**
Menjawab concern Dosen B soal unit consistency:
- **Total Revenue KPI:** Dihitung eksklusif tahun berjalan (bukan akumulasi multi-tahun)
- **Forecast KPI:** Proyeksi tambahan revenue ke depan — bukan total akumulasi
- **Akurasi Model:** Metrik WAPE/sMAPE per seri pada holdout 6 bulan backtest — bukan satu angka tunggal
- **Risk Audit / Anomali:** Jumlah records yang teridentifikasi Isolation Forest sebagai anomali statistik — bukan klaim fraud
- **Efektivitas Audit / Recovery Rate:** Asumsi simulasi 5–10% — bukan recovery aktual yang terverifikasi

---

### APPENDIX A7 — Business Model & Unit Economics

**Label:** `A7 — Business Model`
**Content:**
- Fase 1: Zero-cost MoU pilot (0–6 bulan)
- Fase 2: SaaS B2G Rp 15–25 juta/bulan/instansi, jalur e-Katalog LKPP
- Unit economics: 4 instansi × Rp 15–25 jt/bln = Rp 60–100 jt/bln = Rp 720 jt–1,2 M/tahun
- Biaya operasional: ~Rp 360 juta/tahun (cloud + tim teknis)
- ROI Company: ~2–3×, payback 6–8 bulan (Fase 2)
- Fiscal/Public ROI: Estimasi potensi recovery Rp 8,8–17,7 T/tahun (asumsi 5–10%)

---

### APPENDIX A8 — Risk Matrix

**Label:** `A8 — Critical Risks & Mitigation`
**Content:**

| Risiko | Level | Mitigasi |
|---|---|---|
| Forecast volatile pada seri lumpy | Teknis | Quality gate 110 skenario; forecasting diposisikan sebagai pendukung |
| Recovery rate belum tervalidasi lapangan | Data | Disclaimer eksplisit; pilot Bapenda untuk validasi |
| Procurement pemerintah lambat | Adopsi | Pilot gratis tanpa Capex; MoU non-komersial |
| Resistensi birokrasi terhadap AI | Adopsi | UI intuitif (heatmap merah/hijau); near-zero learning curve |
| Akses data Bapenda memerlukan MoU | Regulasi | Dimulai dengan data publik DJPK sebagai proof-of-value |
| Skalabilitas ke kab/kota (ratusan) | Teknis | Pipeline "train once, slice all"; precompute sudah dioptimasi |

---

### APPENDIX A9 — Before vs After: Decumulation Engine

**Label:** `A9 — Decumulation Engine Impact`
**Content:**
- Visualisasi: grafik satu seri data sebelum vs sesudah decumulation
- Sebelum: lonjakan semu di akhir tahun fiskal (hingga +2.146%)
- Sesudah: pola bulanan diskret yang bersih, siap untuk training
- Teknis: `.diff()` per grup provinsi × akun × tahun
- Dampak: tanpa decumulation, seluruh forecast terdistorsi dan anomali detection tidak reliable
