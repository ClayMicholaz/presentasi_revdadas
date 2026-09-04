# RevDadas — Susunan Materi Final Presentation (Online)
**PIDI BI Digdaya x Hackathon 2026 · Team BITGrow**
Format: Online, ±30 menit total (presentasi + Q&A), share screen, juri tidak akses repo/produk langsung.

---

## 0. Cara Baca Dokumen Ini

Dokumen ini punya 3 lapis:
1. **Checklist perbaikan produk** — hal yang HARUS dibenerin sebelum hari-H, karena kalau tidak, akan kelihatan di demo dan langsung jadi amunisi juri.
2. **Filosofi narasi** — kenapa deck disusun begini, biar Andreas/Clay/Moses juga paham logikanya kalau harus bawain sendiri.
3. **Susunan 14 slide** — konten per slide + talking points + catatan siapa yang paling pas bawain bagian itu.

Prinsip pegangan dari semua masukan (dosen, mentor, webinar): **evidence > confidence, before/intervention/after, jangan menjanjikan lebih dari yang bisa dibuktikan.**

---

## 1. Checklist Perbaikan Produk (Kerjakan SEBELUM demo, bukan pas demo)

Ini murni bug/kualitas produk, bukan konten pitch — tapi kalau tidak dibenerin, akan bikin story runtuh di depan juri walau slide-nya bagus.

| # | Temuan | Sumber | Prioritas | Fix |
|---|--------|--------|-----------|-----|
| 1 | Peta muncul "API Key Required" | Dosen A | 🔴 Wajib | Cek env var Maps API key di deployment Vercel, pastikan domain di-whitelist |
| 2 | What-If bug: pilih "Semua Provinsi" → ganti 1 provinsi → simulasi tidak jalan (kasus: 2025, "lain-lain PAD yang sah") | Dosen A | 🔴 Wajib | Reset state simulasi saat provinsi/parameter berubah; test ulang kasus persis ini sebelum demo |
| 3 | Inkonsistensi unit: KPI Rp330,1 T vs grafik historis 15.000–45.000 M (indikasi selisih ~1000x) | Dosen B | 🔴 Wajib | Audit semua titik format angka (Miliar vs Triliun) sebelum precompute ulang. Ini yang paling berbahaya kalau kelihatan pas demo. |
| 4 | "Forecast 9 bulan Rp242,3 T" ambigu — total kumulatif atau tambahan? | Dosen B | 🟡 Penting | Label eksplisit: "Total proyeksi 9 bulan ke depan" atau "Tambahan dari baseline" — pilih satu, konsisten di semua tempat |
| 5 | "Akurasi Model 76%" tanpa metrik/periode | Dosen B | 🔴 Wajib | Ganti jadi format: "WAPE 24% (backtest holdout 6 bulan, data 2023-2025)" — angka mentahnya boleh disesuaikan hasil real, yang penting metrik+periode disebut |
| 6 | Risk audit 0%, 0 record, Rp0 — perlu dipastikan ini hasil model bukan default kosong | Dosen B | 🔴 Wajib | Tampilkan "X transaksi dianalisis, model terakhir dijalankan [timestamp]" di UI, supaya 0% terlihat sebagai hasil, bukan sistem belum jalan |
| 7 | Istilah "fraud detection" | Dosen B, Mentor | 🔴 Wajib | Ganti total ke **"anomaly detection"** di UI, deck, script — termasuk di judul solusi. Fraud = klaim hukum, anomaly = klaim statistik. Ini juga proteksi legal buat tim. |
| 8 | "Efektivitas Audit 5%" | Dosen B | 🟡 Penting | Rename ke "Asumsi Recovery Rate 5%" + tambahkan disclaimer "belum tervalidasi lapangan" |
| 9 | Kolom output audit terlalu banyak, auditor kesulitan | Mentor | 🟡 Penting | Prioritaskan 4-5 kolom paling actionable (Wilayah, Pos Pendapatan, Severity, Alasan, Rekomendasi Aksi). Kolom teknis lain bisa collapse/expand. |
| 10 | Forecast Prophet kadang jomplang (terlalu ekstrem) di beberapa seri | Mentor | 🟡 Penting untuk positioning | Kalau belum sempat fix modelnya, **jangan disembunyikan** — reposisikan forecasting sebagai fitur pendukung (bukan headline), dan sebutkan di Q&A kalau ditanya: "sedang dievaluasi, fallback musiman untuk seri pendek/lumpy" |
| 11 | EDA (Exploratory Data Analysis) belum cukup dalam | Mentor | 🟢 Nice-to-have kalau sempat | 1-2 chart tambahan (distribusi, outlier awal) — bisa jadi bagian dari "Readiness & Validation" slide kalau sempat dibuat |

**Prioritas kalau waktu mepet:** #1, #2, #3, #5, #6, #7 dulu — ini yang paling gampang "ketahuan" pas live demo dan langsung menurunkan trust juri di 5 menit pertama.

---

## 2. Filosofi Narasi Deck

Gabungan semua masukan webinar jadi satu logika:

- **Struktur besar (Rio/NirikSagara):** Promise → Problem → Consequence → Insight → Solution → How it works → Readiness & Validation → Impact → Ask/Next step
- **Story of value (Mentor):** setiap section problem/solution dibingkai **Before → Intervention → After** — jangan cuma jelasin fitur, jelasin *perubahan yang terjadi*.
- **Trust building (Rio):** Make me care (problem spesifik) → Make me understand (insight, bukan fitur) → Make me believe (evidence, bukan klaim).
- **Angka (Rio):** pola *Number → Context → Consequence*. Contoh: "20-30 hari" (number) → "per siklus rekonsiliasi bulanan, dikerjakan manual oleh tim terbatas" (context) → "anomali baru ketahuan setelah anggaran terkunci, recovery jadi mustahil" (consequence).
- **Core value framing (Dosen B + Mentor):** **Anomaly detection = headline. Forecasting = pendukung** yang masih dalam evaluasi. Jangan overclaim forecasting yang justru rawan dibantah juri kalau ditanya detail (karena Prophet-nya sendiri masih ada catatan "jomplang").
- **Evidence > confidence (Rio):** setiap klaim kualitatif ("akurat", "signifikan") harus diikuti angka + sumber. Kalau belum ada data lapangan, bilang jujur "estimasi konservatif, belum tervalidasi" — juri lebih percaya tim yang transparan soal batasan daripada tim yang over-promise.
- **TRL positioning:** RevDadas ada di **TRL 4-6** (prototype tervalidasi lewat backtest, MVP live, data real DJPK) — bukan TRL 7-9 (belum real deployment/pilot). Jangan pura-pura sudah di tahap itu; posisikan roadmap pilot sebagai jembatan ke TRL 7-9.

---

## 3. Timing Budget (30 menit online)

| Segmen | Durasi | Isi |
|---|---|---|
| Opening + Slide 1-2 | 2 menit | Hook, promise |
| Problem-Consequence-Insight (Slide 3-5) | 4 menit | Bangun "make me care" |
| Solution + How it Works (Slide 6-7) | 4 menit | Bangun "make me understand" |
| Live Demo (transisi dari Slide 8) | 5-6 menit | Core use case saja — jangan buka semua fitur |
| Readiness, Impact, Business Model (Slide 9-11) | 5 menit | "Make me believe" + angka |
| Team + Ask (Slide 12-13) | 2 menit | Ownership + next step |
| Closing (Slide 14) | 1 menit | CTA + QR |
| **Buffer presentasi** | **~23-24 menit** | |
| **Q&A** | **6-7 menit** | Sisa waktu — siapkan jawaban untuk pertanyaan di bagian 5 |

Kalau lewat waktu, yang boleh dipotong duluan: detail "Processing Pipeline" teknis di Slide 7 (cukup high-level), bukan bagian Problem/Evidence.

---

## 4. Susunan 14 Slide

### Slide 1 — Cover
- **Judul:** RevDadas
- **Tagline (baru, bukan "AI-Powered Revenue Analytics & Fraud Detection"):** *"Deteksi kebocoran Pendapatan Asli Daerah, sebelum anggaran terkunci."*
- Sub-tagline kecil: Anomaly Detection & Fiscal Intelligence untuk Bapenda
- Logo tim BITGrow, badge "PIDI Digdaya x Hackathon 2026"
- QR code kecil di pojok → link ke revdadas.vercel.app (dipakai terus sepanjang presentasi, bukan cuma di closing)
- **Talking point:** "RevDadas membantu Bapenda menemukan kebocoran pendapatan daerah dalam hitungan detik, bukan 20-30 hari."
- Pembawa: Andreas (opening sebagai Ketua Tim)

### Slide 2 — Promise
- Satu kalimat besar, font besar: **"Setiap bulan, ribuan laporan setoran pajak daerah diperiksa manual — dan kebocorannya baru ketahuan setelah anggaran terkunci."**
- Framing "What becomes possible": *"Bayangkan kalau tim Bapenda tahu wilayah dan pos pendapatan paling berisiko di hari pertama siklus rekonsiliasi, bukan di hari ke-25."*
- **Talking point (Before → Intervention → After) singkat sebagai teaser**, detailnya di slide 3-5.

### Slide 3 — Problem (Before)
- Angka pembuka pakai pola Number → Context → Consequence:
  - **20-30 hari** → per siklus rekonsiliasi manual, dikerjakan auditor terbatas mencocokkan ribuan laporan self-assessment (PBB, hotel, restoran) → anomali baru ketahuan setelah anggaran terkunci
  - **7.006 temuan kelemahan SPI** dari 705 entitas pemerintah (BPK RI, IHPS I/2023) → bukti sistemik lemahnya pengawasan keuangan daerah
- Visual: alur "Setor pajak self-assessment → rekonsiliasi manual 20-30 hari → anomali terlambat terdeteksi"
- Pembawa: Moses (Domain Lead — dia yang paling paham konteks Bapenda)

### Slide 4 — Consequence
- Kalau tidak diselesaikan:
  - Target APBD ditetapkan berdasarkan asumsi statis, bukan data real
  - Defisit pembiayaan infrastruktur, kesehatan, pendidikan
  - Asimetri informasi antara Bapenda dan wajib pajak makin lebar
- **Jangan pakai angka KPK 30-40% nasional sebagai klaim langsung ke PAD** — kalau dipakai, harus eksplisit disclaimer "estimasi APBN+APBD nasional, bukan spesifik PAD daerah" (sesuai audit internal proposal kalian sendiri). Lebih aman pakai ini sebagai *konteks urgensi*, bukan angka utama.

### Slide 5 — Insight
- **"Kenapa masalah ini belum terselesaikan?"**
  - Sistem self-assessment → Bapenda tidak punya instrumen otomatis mencocokkan nilai setoran dengan volume transaksi riil
  - Bukan karena tidak ada data — 73,6% pemda sudah kategori Digital (Indeks ETPD Semester I/2023) — tapi karena data ada, insight-nya tidak ada (analysis paralysis)
- Ini insight kunci yang membedakan RevDadas dari "sekadar dashboard": **masalahnya bukan data, tapi ekstraksi insight dari data yang sudah ada.**

### Slide 6 — Solution (Intervention)
- **Reposisi headline:** RevDadas = platform **Anomaly Detection & Fiscal Intelligence** untuk Bapenda (bukan lagi "Fraud Detection")
- 3 pilar solusi (urutan prioritas sesuai arahan mentor):
  1. **Anomaly Detection** (Isolation Forest) — core value, paling matang
  2. **Fiscal Intelligence** — heatmap risiko, rekomendasi kebijakan rule-based
  3. **Forecasting** (Ensemble Prophet + Naive-Seasonal) — pendukung, masih dalam evaluasi lanjutan untuk seri lumpy
- **Talking point jujur:** "Forecasting kami sedang kami perkuat kualitas datanya — untuk Final Presentation ini kami fokus menunjukkan anomaly detection sebagai kapabilitas paling matang dan actionable."

### Slide 7 — How It Works
- Alur simpel (jangan detail teknis penuh dari proposal, cukup 5 langkah):
  1. Data APBD DJPK (real, publik) → dibersihkan (dedup >1.000 baris, decumulation YTD→bulanan)
  2. Isolation Forest mendeteksi pola menyimpang dengan alasan bahasa Indonesia
  3. Heatmap risiko per wilayah
  4. Rekomendasi kebijakan otomatis (rule-based, bukan LLM — supaya tidak halusinasi)
  5. Output audit **disederhanakan**: Wilayah, Pos Pendapatan, Severity, Alasan, Rekomendasi Aksi
- Highlight arsitektur: **precomputed JSON, load <100ms, tanpa backend server** — ini competitive moat teknis yang beda dari kompetitor
- Pembawa: Clay (Tech/AI Lead) + Andreas (arsitektur)

### Slide 8 — Demo (Transisi ke Live Demo)
- Slide ini singkat: **"Sekarang, mari kita lihat langsung."**
- Isi slide cuma judul use case yang akan didemokan: *"Kepala Bidang Pengawasan memilih provinsi & periode, sistem langsung menunjukkan wilayah paling berisiko."*
- **Aturan demo (dari webinar infra):**
  - Urutan fallback: **Live Demo → Recorded Demo (60-90 detik) → Screenshot**
  - Localhost/share screen boleh, juri tidak mencoba langsung
  - **Fokus HANYA pada core use case** (heatmap risiko → detail anomali → rekomendasi), jangan buka semua 9 komponen — waktu terbatas dan mengaburkan pesan utama
  - Siapkan video cadangan 60-90 detik kalau koneksi/server bermasalah saat live
- Pembawa: siapa yang paling hafal alur & paling tenang di depan kamera (biasanya Andreas/Gwyn)

### Slide 9 — Readiness & Validation (Evidence)
- **TRL positioning eksplisit:** "RevDadas ada di TRL 4-6 — prototype tervalidasi"
- Bukti konkret (bukan klaim kosong):
  - MVP live publik di revdadas.vercel.app
  - Backtest: **WAPE/sMAPE [isi angka real] pada holdout 6 bulan**, bukan "akurasi 76%" generik
  - 110 skenario tervalidasi, 8 provinsi, 14 komponen APBD, data DJPK 2023-2025
  - 10 iterasi UX berdasarkan feedback reviewer, 10/10 review issues resolved
  - Source code open source (MIT) untuk audit independen
- **Kalau EDA tambahan sempat dibuat** (checklist #11), taruh 1 chart kecil di sini sebagai bukti tambahan pemahaman data
- Pembawa: Gwyn (paling relevan — data engineering + UX)

### Slide 10 — Impact (Number → Context → Consequence)
- Pisahkan jelas 2 level ROI (sesuai audit internal kalian sendiri — ini bagus, pertahankan):
  - **Efisiensi proses:** 20-30 hari → identifikasi instan (~99,9% percepatan)
  - **Fiscal/Public ROI:** estimasi potensi recovery PAD di 4 provinsi pilot — **beri label jelas "simulasi, asumsi recovery rate 5-10%, belum tervalidasi lapangan"** (bukan "efektivitas audit 5%")
  - **Company ROI:** model SaaS B2G, proyeksi payback 6-8 bulan fase 2
- Selalu sandingkan angka besar dengan disclaimer asumsi di sebelahnya (kecil tapi terlihat) — ini yang bikin juri percaya, bukan curiga

### Slide 11 — Business Model & Roadmap
- 3 fase: Zero-Risk Pilot (0-6 bln) → SaaS B2G e-Katalog LKPP (6-18 bln) → Ekspansi multi-instansi (Tahun 2+)
- Moat: arsitektur precomputed (biaya server rendah), data DJPK real, open source (trust), potensi network effect antar provinsi
- Channel: akademik UBM, APKASI, DJPK, komunitas govtech PIDI

### Slide 12 — Team & Ownership
- 4 anggota + role singkat (dari proposal, dipersingkat jadi 1 baris per orang):
  - Andreas — Team Lead, arsitektur & deployment
  - Gwyn — Product/UX Lead, data engineering
  - Clay — Tech/AI Lead, model & validasi data
  - Moses — Business/Domain Lead, sourcing data & keselarasan Bapenda
- Gap & mitigasi (jujur, ini nilai plus di mata juri — self-aware bukan lemah): legal/compliance procurement & business development → pendampingan mentor PIDI, inkubator govtech

### Slide 13 — Ask / Next Step
- Bukan "terima kasih" kosong — ini **call to action konkret**:
  - MoU non-komersial dengan 1-2 Bapenda provinsi (target DKI Jakarta/Jawa Barat) dalam 3 bulan ke depan
  - Dukungan mentor untuk aspek legal/compliance BSSN & e-Katalog LKPP
  - Akses jaringan offtaker/Bapenda lewat program PIDI
- Ini jawab pertanyaan "what happens next" dari framework 7 pertanyaan inovasi

### Slide 14 — Closing
- Terima kasih + kontak tim
- QR code besar → live demo (revdadas.vercel.app) dan GitHub
- Ulangi tagline: *"Deteksi kebocoran PAD, sebelum anggaran terkunci."*

---

## 5. Antisipasi Q&A

Berdasarkan pola pertanyaan dosen + prinsip "acknowledge → jawab yang dikuasai → 'perlu validasi lanjut' kalau di luar keahlian":

| Kemungkinan Pertanyaan Juri | Arah Jawaban |
|---|---|
| "Bedanya anomaly detection kalian dengan sistem audit BPK/Itjen yang sudah ada?" | Bukan pengganti auditor — RevDadas mempersempit ruang pencarian dari "semua transaksi" jadi "wilayah & pos berisiko tinggi", auditor tetap yang memutuskan. Ini yang bikin adopsi lebih realistis (bukan black-box yang menuduh). |
| "Kenapa forecasting-nya kadang ekstrem/jomplang?" | Jujur: Prophet kurang stabil di beberapa seri data lumpy dengan periode pendek (~36 titik). Sedang dievaluasi — untuk itu forecasting kami posisikan sebagai fitur pendukung, bukan core value saat ini. Fallback musiman sudah ada untuk seri pendek. |
| "Bagaimana memastikan anomali = fraud, bukan false positive?" | Kami sengaja TIDAK klaim itu fraud — istilah "anomaly" dipilih justru karena butuh verifikasi manusia. Severity + alasan bahasa Indonesia membantu auditor memprioritaskan, keputusan akhir tetap di tangan auditor. |
| "Recovery rate 5-10% itu dari mana?" | Asumsi konservatif berbasis referensi literatur pengawasan keuangan publik, BELUM tervalidasi lapangan — makanya fase pilot MoU jadi prioritas #1 roadmap kami, supaya angka ini bisa digantikan data real. |
| "Kenapa baru 8 provinsi, kenapa tidak semua?" | Keputusan sadar (bukan keterbatasan tak terduga) — kami prioritaskan kualitas data (quality gate ketat) di provinsi besar dulu daripada cakupan luas tapi data lemah. Roadmap ekspansi sudah ada di fase 2. |
| "Bagaimana model bisnisnya realistis untuk pemda yang procurement-nya lambat?" | Fase 1 sengaja zero-risk (pilot gratis via MoU non-komersial) supaya tidak kena hambatan procurement Capex di awal — jalur komersial baru masuk di fase 2 lewat e-Katalog LKPP. |
| Pertanyaan di luar keahlian (legal/BSSN detail, dsb) | Akui terus terang: "Ini di luar keahlian teknis kami saat ini, kami rencanakan konsultasi dengan mentor/pakar govtech PIDI untuk validasi lanjut." Jangan sok tahu. |

**Aturan umum saat Q&A:** kalau ada pertanyaan ke audiens/juri yang tidak terjawab di sesi, jangan digantung — jawab sendiri sebelum pindah topik.

---

## 6. Catatan "Update Since Final Presentation"

Karena beberapa perubahan dari 3rd submission bersifat pengurangan/reposisi (bukan penambahan fitur), tandai eksplisit di slide 6 atau 9 kecil: *"Update since Final Presentation: fraud detection → anomaly detection; forecasting direposisikan sebagai fitur pendukung."* Ini sejalan dengan aturan lomba — boleh mengurangi asal tidak mengubah fundamental problem/solution.

---

## 7. Media Pendukung

- **Web live demo**: revdadas.vercel.app (pastikan checklist Bagian 1 selesai sebelum hari-H)
- **Slide deck**: file `RevDadas_Final_Pitch_Deck.pptx` (siap diimpor ke Canva kalau mau polish visual lebih lanjut) — sudah ikut struktur 14 slide di atas
- **QR code**: taruh di Slide 1 (kecil) dan Slide 14 (besar), arahkan ke web demo
- **Video cadangan**: rekam ulang 60-90 detik alur demo core use case (bukan reuse video promosi lama yang formatnya beda)
