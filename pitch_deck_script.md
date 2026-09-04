# REVDADAS — FINAL PRESENTATION ONLINE
## SCRIPT LENGKAP PER PRESENTER
### Hackathon PIDI BI DIGDAYA 2026

---

> **PANDUAN BACA SCRIPT INI:**
> - Teks dalam `"kutipan"` = yang diucapkan saat presentasi
> - Teks dalam `[kurung kotak]` = instruksi aksi / cue teknis
> - *Teks miring* = catatan delivery / intonasi
> - **Pembagian presenter yang disarankan:**
>   - **Andreas** → Lead Presenter: Opening, Solution, Closing, Architecture
>   - **Gwyneth** → Data & Model: Technology pipeline, Testing & Impact
>   - **Clay** → Demo Operator + AI explanation
>   - **Moses** → Market & Adoption, Team

---

## ⏱ TIMING OVERVIEW

| Bagian | Durasi | Presenter |
|---|---|---|
| Slide 1–2: Problem | ~60 detik | Andreas |
| Slide 3–5: Solution | ~90 detik | Andreas |
| Slide 6: Prototype Status | ~30 detik | Andreas |
| Slide 7: DEMO | ~90 detik | Clay (operator) + Andreas (narasi) |
| Slide 8–9: Technology | ~60 detik | Gwyneth |
| Slide 10–11: Testing & Impact | ~90 detik | Gwyneth |
| Slide 12–13: Market & Adoption | ~90 detik | Moses |
| Slide 14–16: Team, Roadmap, Closing | ~60 detik | Andreas |
| **TOTAL** | **±10 menit** | |

---

---

## 📌 SLIDE 1 — Opening Hook: "The Invisible Leak"

**PRESENTER: Andreas**
**TARGET: 30 detik**

---

*[Andreas bicara langsung ke kamera, tone serius tapi controlled]*

> "Setiap bulan, ratusan ribu data setoran pajak masuk ke sistem Bapenda provinsi di seluruh Indonesia."

*[jeda 1 detik]*

> "Tidak ada yang tahu dengan pasti — mana yang akurat, mana yang mencurigakan."

> "Rekonsiliasi manual membutuhkan 20 hingga 30 hari per siklus. Dan ketika anomali akhirnya ditemukan... anggaran sudah terkunci. Moment sudah terlewat."

> "BPK RI pada IHPS 2023 menemukan **7.006 kelemahan Sistem Pengendalian Intern** dari 705 entitas pemerintah. Ini bukan masalah kecil. Ini sistemik."

*[transisi ke slide 2 tanpa jeda]*

---

## 📌 SLIDE 2 — Root Cause + Target User

**PRESENTER: Andreas**
**TARGET: 30 detik**

---

> "Siapa yang paling merasakan masalah ini?"

> "**Kepala Bidang Pengawasan Bapenda provinsi.** Setiap awal bulan, tim mereka menerima data realisasi pendapatan — ribuan baris dari laporan self-assessment pajak hotel, restoran, PBB, retribusi."

> "Masalahnya bukan kekurangan data. Masalahnya adalah **asimetri informasi.** Bapenda tidak punya instrumen untuk memvalidasi apakah angka setoran itu benar atau tidak."

> "Hasilnya? *Analysis paralysis.* Data berlimpah — insight nol."

> "UU HKPD 2022 sudah mengamanatkan optimasi PAD melalui penguatan tata kelola. Dan 73,6% pemerintah daerah sudah kategori Digital. **Infrastruktur siap. Solusinya yang belum ada.**"

*[transisi ke slide 3]*

---

## 📌 SLIDE 3 — Solution at a Glance

**PRESENTER: Andreas**
**TARGET: 25 detik**

---

*[tone shift — dari problem ke solusi, lebih energik tapi tetap controlled]*

> "Kami membangun **RevDadas** — AI-Powered Revenue Analytics & Anomaly Detection untuk Bapenda."

> "Satu kalimat value proposition: **RevDadas mengubah 20–30 hari rekonsiliasi manual menjadi deteksi anomali instan, berbasis data APBD resmi, langsung di browser.**"

> "Dua kapabilitas inti: satu, **deteksi anomali otomatis** menggunakan Isolation Forest — ini core value kami. Dua, **forecasting revenue** sebagai panduan perencanaan anggaran."

> "Target pasar: **38 Bapenda provinsi.** Ekspansi berikutnya: 514 kabupaten/kota."

---

## 📌 SLIDE 4 — Core Use Case Flow

**PRESENTER: Andreas**
**TARGET: 30 detik**

---

> "Ini alurnya — sederhana dan langsung."

*[tunjuk diagram flow di slide]*

> "Kepala Bidang buka browser — **tidak perlu install apapun.** Pilih provinsi. Dashboard langsung tampil dalam hitungan milidetik."

> "Sistem menampilkan anomali mana yang severity tinggi, wilayah mana yang berwarna merah di heatmap, dan rekomendasi kebijakan otomatis."

> "Langkah terakhir: **export PDF** — dokumen siap pakai sebagai dasar instruksi audit terfokus."

> "Dari data ke keputusan audit — **dalam kurang dari 5 menit.** Sebelumnya: 20–30 hari."

---

## 📌 SLIDE 5 — Differentiation

**PRESENTER: Andreas**
**TARGET: 35 detik**

---

> "Mengapa tidak pakai spreadsheet? Tidak pakai dashboard BI umum?"

*[tunjuk tabel perbandingan di slide]*

> "Spreadsheet: tidak punya anomaly detection otomatis, tidak ada AI, tidak ada heatmap risiko."

> "Dashboard BI umum seperti Tableau atau Power BI: tidak dibangun untuk konteks fiskal daerah Indonesia, tidak pakai data DJPK, tidak open source — dan juri pemerintah tidak percaya black box."

> "RevDadas punya tiga competitive moat yang sulit ditiru: satu, **arsitektur precomputed** — loading instan tanpa server backend, kompetitor yang pakai model on-demand butuh infrastruktur mahal. Dua, **data DJPK resmi** — dilatih dengan data pemerintah real, bukan sintetis. Tiga, **open source MIT License** — transparansi penuh, membangun kepercayaan institusi."

---

## 📌 SLIDE 6 — Prototype Status

**PRESENTER: Andreas**
**TARGET: 20 detik**

---

> "Sebelum demo — status prototype saat ini:"

> "RevDadas **sudah live** di revdadas.vercel.app. Bukan mockup. Bukan wireframe."

> "9 komponen modular sudah berjalan: KPI Cards, Heatmap Geospasial, Anomaly Detection Table dengan AI Reason, Impact Calculator, Revenue Chart, Proportion Chart, Policy Recommendations, Sidebar, dan Export PDF."

> "Data yang digunakan: realisasi APBD DJPK 2023–2025, **8 provinsi tervalidasi, 14 komponen APBD.**"

*[segue ke demo]*

> "Mari kami tunjukkan langsung."

---

## 📌 SLIDE 7 — DEMO LIVE / RECORDED

**PRESENTER: Clay (operator) + Andreas (narasi)**
**TARGET: 90 detik**

---

> [Andreas]: "Saya serahkan ke Clay untuk menjalankan demo."

*[Clay share screen ke dashboard RevDadas yang sudah terbuka]*

**DEMO SCRIPT — Clay sebagai operator, Andreas sebagai narrator:**

---

**Step 1 — Pilih Provinsi (0–10 detik)**

*[Clay klik sidebar, pilih "DKI Jakarta", pilih periode 12 bulan]*

> [Andreas narasi]: "Kami pilih DKI Jakarta — provinsi dengan PAD terbesar, Rp 50,7 triliun di 2024."

---

**Step 2 — KPI Cards (10–25 detik)**

*[Dashboard langsung render, Clay scroll perlahan ke KPI Cards]*

> [Andreas]: "Dalam hitungan milidetik — total revenue, jumlah anomali terdeteksi, dan potensi revenue loss langsung terlihat. Tidak ada loading spinner. Tidak ada server request."

---

**Step 3 — Anomaly Table (25–55 detik)**

*[Clay scroll ke bagian Anomaly Detection table, zoom ke beberapa baris severity "Tinggi"]*

> [Andreas]: "Ini inti dari RevDadas. Setiap anomali punya: severity level, komponen APBD yang bersangkutan, dan — ini yang paling penting — **AI Reason dalam Bahasa Indonesia.** Bukan angka abstrak. Auditor bisa langsung baca: 'Penurunan drastis MoM di luar pola musiman historis' — dan tahu harus investigasi ke mana."

*[Clay hover/klik salah satu anomali severity Tinggi untuk tampilkan detail]*

---

**Step 4 — Heatmap (55–75 detik)**

*[Clay scroll ke Heatmap Indonesia]*

> [Andreas]: "Heatmap ini menunjukkan distribusi risiko per wilayah. Merah: kritis. Kuning: moderat. Hijau: optimal. Kepala Bidang bisa langsung prioritaskan satgas audit ke provinsi merah — tanpa harus baca ratusan baris data."

---

**Step 5 — Export PDF (75–90 detik)**

*[Clay klik tombol Export PDF, tunggu generate, scroll cepat ke halaman Top 5 Anomali]*

> [Andreas]: "Satu klik — laporan PDF eksekutif langsung siap. Berisi Top 5 Anomali, justifikasi algoritma, dan pemetaan sektor ekonomi. Dokumen ini bisa langsung dijadikan dasar instruksi audit formal."

---

*[Clay stop share screen, kembali ke slide deck]*

---

## 📌 SLIDE 8 — How the Technology Works (AI Pipeline)

**PRESENTER: Gwyneth**
**TARGET: 40 detik**

---

*[tone teknikal tapi accessible, jangan jargon-heavy]*

> "Di balik tampilan yang sederhana itu, ada pipeline yang cukup dalam."

*[tunjuk diagram pipeline di slide]*

> "Mulai dari data mentah DJPK — ada masalah kritis yang harus diselesaikan dulu: **data APBD tersimpan dalam format kumulatif YTD.** Tanpa konversi, prediksi terdistorsi oleh lonjakan palsu hingga **2.146% di akhir tahun fiskal.** Kami membangun Decumulation Engine yang mengkonversi ini ke data bulanan diskret menggunakan differencing."

> "Selanjutnya, pipeline de-duplikasi membuang lebih dari **1.000 baris data ganda** dari sumber mentah."

> "Setelah data bersih, dua model berjalan paralel: **Isolation Forest** untuk deteksi anomali, dan **Ensemble Prophet + Naive-Seasonal** untuk forecasting. Hasilnya di-precompute menjadi 7 file JSON statis."

> "Next.js di frontend hanya perlu *membaca* JSON — tidak ada kalkulasi saat user request. Itulah mengapa loading-nya di bawah 100 milidetik."

---

## 📌 SLIDE 9 — Technical Architecture

**PRESENTER: Gwyneth**
**TARGET: 20 detik**

---

> "Arsitekturnya sengaja dibuat serverless. Python precompute di lokal — hasilnya di-deploy sebagai static files ke Vercel CDN. **Tidak ada backend server yang harus jalan 24/7.** Tidak ada biaya infra yang membengkak."

> "Data sepenuhnya client-side — tidak ada transmisi data pengguna ke server eksternal. Untuk konteks pemerintah yang sensitif soal data, ini krusial."

*[tunjuk diagram tiga layer: Precompute → CDN → Browser]*

> "Untuk scaling ke ratusan kabupaten/kota: pipeline sudah dioptimasi — train once, slice for all periods."

---

## 📌 SLIDE 10 — Technical Testing & Model Performance

**PRESENTER: Gwyneth**
**TARGET: 45 detik**

---

> "Soal bukti — ini yang sudah kami uji."

*[tunjuk tabel metrik di slide]*

> "Isolation Forest dijalankan pada data 8 provinsi, 14 komponen APBD. Hasilnya: **[X] anomali terdeteksi**, dengan distribusi severity Tinggi [X]%, Sedang [X]%, Rendah [X]%."

> "Untuk forecasting: **validasi backtest holdout 6 bulan** dengan metrik WAPE dan sMAPE per seri. Kenapa tidak satu angka akurasi tunggal? Karena setiap provinsi punya karakteristik data berbeda — kami pilih bobot ensemble yang optimal per seri melalui grid search."

> "Catatan penting yang kami sampaikan secara transparan: beberapa seri data menunjukkan forecast yang cukup jauh dari aktual — ini terjadi pada seri dengan data sangat lumpy atau sedikit titik data. Inilah mengapa kami mempertahankan hanya **110 skenario dari quality gate ketat**, bukan seluruh kombinasi parameter."

> "Loading dashboard: kurang dari 100 milidetik — terukur, bukan klaim."

---

## 📌 SLIDE 11 — Impact & Evidence of Effectiveness

**PRESENTER: Gwyneth**
**TARGET: 45 detik**

---

> "Impact yang bisa kami tunjukkan dibagi dua: yang sudah terukur, dan yang masih estimasi."

*[tunjuk tabel impact di slide]*

> "**Sudah terukur:** Waktu identifikasi anomali — dari 20–30 hari menjadi instan. Ini bukan klaim, ini hasil dari arsitektur precomputed yang bisa diverifikasi di dashboard live."

> "**Estimasi konservatif — dengan asumsi eksplisit:** Potensi recovery PAD di 4 provinsi pilot kami estimasikan Rp 8,8 hingga 17,7 triliun per tahun. Basis hitungan: data PAD DJPK 2024 yang terverifikasi — DKI Jakarta Rp 50,7 T, Jawa Barat Rp 55,3 T, Jawa Timur Rp 49,6 T, Banten Rp 21,1 T — total Rp 176,7 T. Asumsi recovery rate 5–10%."

> "**Kami tegaskan:** Angka ini adalah estimasi simulasi, belum tervalidasi lapangan. Recovery rate aktual bergantung pada kualitas investigasi audit, bukan hanya deteksi. Pilot Bapenda adalah langkah validasi berikutnya."

---

## 📌 SLIDE 12 — Market & User Validation

**PRESENTER: Moses**
**TARGET: 45 detik**

---

> "Sekarang, siapa yang membutuhkan ini?"

> "Target langsung kami: **38 Bapenda provinsi** di seluruh Indonesia. Ekspansi berikutnya: 514 Bapenda kabupaten/kota."

> "Sinyal kebutuhan pasar sudah ada: **73,6% pemerintah daerah sudah kategori Digital** menurut Indeks ETPD Semester I 2023 — kesiapan institusional untuk adopsi solusi digital ada. **UU HKPD 2022** mengamanatkan optimasi PAD — ini regulatory push yang jelas. Dan temuan BPK soal 7.006 kelemahan SPI adalah demand signal yang paling kuat."

> "Validasi yang sudah kami terima: feedback dari **dua dosen pembimbing**, **mentor PIDI**, dan review dari evaluasi hackathon tahap 1, 2, dan 3."

> "Apa yang belum kami miliki, dan kami sampaikan secara transparan: **LOI atau MoU formal dari Bapenda** — ini adalah target validasi berikutnya, bukan klaim saat ini."

---

## 📌 SLIDE 13 — Adoption Strategy & Sustainability

**PRESENTER: Moses**
**TARGET: 45 detik**

---

> "Bagaimana kami masuk ke pasar pemerintah yang terkenal sulit?"

> "**Tiga fase.** Fase satu, nol hingga enam bulan: pilot gratis berbasis MoU non-komersial dengan satu atau dua Bapenda. Target: DKI Jakarta atau Jawa Barat — dua provinsi dengan data terlengkap dan PAD terbesar. Tidak ada investasi dari pemerintah daerah di fase ini — mengurangi hambatan adopsi secara drastis."

> "Fase dua, enam hingga delapan belas bulan: konversi ke SaaS B2G. Langganan sekitar Rp 15–25 juta per bulan per instansi, melalui jalur e-Katalog LKPP."

> "Fase tiga, tahun kedua: ekspansi multi-instansi dengan SLA performance, ekspansi ke kabupaten/kota."

> "Channel utama: jaringan UBM sebagai academic partner, komunitas govtech PIDI, dan — ketika sudah ke kabupaten/kota — APKASI sebagai kanal ke 400+ bupati."

---

## 📌 SLIDE 14 — Team & Execution Ownership

**PRESENTER: Andreas**
**TARGET: 25 detik**

---

> "Tim kami: empat orang, satu tujuan."

*[tunjuk slide dengan 4 kartu tim]*

> "**Saya, Andreas** — memimpin migrasi arsitektur Streamlit ke Next.js, merancang sistem precomputed serverless, dan mengkoordinasikan seluruh pengembangan."

> "**Gwyneth** — memimpin 10 iterasi UX berdasarkan feedback reviewer, membangun pipeline data DJPK dari awal, dan mengembangkan model Ensemble Prophet."

> "**Clay** — mengimplementasikan Isolation Forest beserta feature engineering, dan menemukan serta membersihkan lebih dari 1.000 baris duplikat dari data mentah."

> "**Moses** — mengidentifikasi dan memvalidasi sumber data DJPK, menganalisis kebutuhan domain Bapenda, dan memastikan solusi relevan dengan konteks pemerintahan."

> "Gap yang kami akui: kami belum punya keahlian legal/compliance pengadaan pemerintah. Mitigasi: konsultasi dengan mentor PIDI dan kolaborasi inkubator govtech."

---

## 📌 SLIDE 15 — Roadmap & Next Milestone

**PRESENTER: Andreas**
**TARGET: 20 detik**

---

> "Setelah hackathon, milestone berikutnya konkret:"

*[tunjuk timeline di slide]*

> "Bulan satu hingga tiga: pilot Bapenda pertama — MoU non-komersial, kumpulkan feedback pengguna real."

> "Bulan tiga hingga enam: integrasi API ke modul e-Pendapatan Bapenda pilot, dan implementasi multi-tenancy untuk pemisahan akses antar-instansi."

> "Bulan enam hingga dua belas: SaaS komersial, e-Katalog LKPP, dan persiapan sertifikasi BSSN."

> "Komitmen: **minimum 15 jam per minggu per anggota**, dengan dukungan akademik dari Universitas Bunda Mulia."

---

## 📌 SLIDE 16 — Closing

**PRESENTER: Andreas**
**TARGET: 20 detik**

---

*[tone percaya diri, bicara langsung ke kamera/audiens]*

> "RevDadas hari ini: **problem tervalidasi** oleh data BPK, UU HKPD, dan kebutuhan fiskal nyata. **Prototype live** di revdadas.vercel.app — bukan mockup, bukan rencana. **AI tervalidasi** dengan backtest WAPE dan sMAPE. **Team dengan ownership jelas** — setiap fitur ada penanggungjawabnya."

*[jeda setengah detik]*

> "Yang belum kami miliki: pilot lapangan dengan Bapenda sungguhan. Itulah yang kami targetkan segera setelah hackathon."

*[delivery terakhir — tegas, bukan baca script]*

> "**Dari data APBD ke keputusan audit — dalam hitungan detik.** Terima kasih."

*[tunjuk QR code di slide]*

> "Live demo bisa diakses sekarang di revdadas.vercel.app."

---

---

## 🎤 TIPS DELIVERY UMUM

### Untuk Semua Presenter
- **Jangan baca slide.** Slide adalah visual pendukung, bukan teks yang dibacakan ulang.
- **Bicara ke kamera, bukan ke layar.** Di presentasi online, eye contact ke kamera = eye contact ke juri.
- **Tempo: medium-lambat.** Juri butuh waktu memproses informasi — jangan terburu-buru.
- **Angka: pakai pola Number → Context → Consequence.** Bukan "7.006" tapi "7.006 kelemahan SPI — itu artinya rata-rata 10 kelemahan per entitas pemerintah yang diaudit."
- **Transisi antar presenter:** Sebut nama satu sama lain — "Saya serahkan ke Gwyneth untuk menjelaskan teknologinya."

### Untuk Demo Operator (Clay)
- **Buka dashboard sebelum sesi.** Jangan buka saat waktu presentasi sudah jalan.
- **Persiapkan: provinsi DKI Jakarta sudah dipilih, tab anomali sudah terbuka.**
- **Scroll lambat** — juri perlu waktu baca teks di dashboard.
- **Jika ada lag atau error:** Clay bilang "Koneksi sedang loading" sambil Andreas lanjut narasi — jangan diam.
- **Backup:** Recorded demo sudah dipersiapkan, langsung play jika ada kendala teknis.

### Untuk Q&A
- Dengarkan sampai pertanyaan selesai, jangan potong.
- Jawab inti pertanyaan dulu — baru elaborasi.
- Kalau ada ketidakpastian: "Yang sudah kami validasi adalah X. Untuk Y, kami rencanakan validasi di fase pilot — ini bukan hal yang kami bisa klaim sudah terjawab saat ini."
- **Ownership Q&A:** Teknis → Clay/Gwyneth. Bisnis/Market → Moses. Arsitektur/Product → Andreas.

---

## 🆘 SKENARIO DARURAT

| Situasi | Respon |
|---|---|
| Live demo lag/crash | Clay: "Kami siapkan recorded demo sebagai backup." — langsung play video 60–90 detik |
| Koneksi internet putus | Presenter lain lanjutkan dari slide yang terakhir, Clay reconnect |
| Pertanyaan di luar pengetahuan | "Ini area yang perlu kami validasi lebih lanjut. Yang bisa kami konfirmasi adalah [hal yang dikuasai]." |
| Waktu hampir habis | Langsung loncat ke slide 16 Closing — jangan terpotong di tengah |
| Pertanyaan soal forecast "jomplang" | "Kami aware dan sudah membatasi skenario forecasting ke 110 yang lolos quality gate. Forecasting kami posisikan sebagai fitur pendukung, bukan core value — core value kami adalah anomaly detection yang sudah tervalidasi." |
