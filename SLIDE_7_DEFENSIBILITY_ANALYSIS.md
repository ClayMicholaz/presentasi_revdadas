# Slide 7 Comparison Table — Defensibility Analysis

## Pertanyaan: Apakah klaim di tabel perbandingan ini bisa dipertanggungjawabkan?

| Dimensi | Spreadsheet Manual | Dashboard BI Umum | RevDadas |
|---------|-------------------|------------------|----------|
| Deteksi Anomali Otomatis | ✕ | ✕ | ✓ |
| Pakai Data Resmi Kemenkeu (DJPK) | Parsial | ✕ | ✓ |
| Bahasa Indonesia + Konteks Pemda | ✕ | ✕ | ✓ |
| Dashboard Muncul Langsung | ✕ | ✕ | ✓ |
| Open Source (dapat diaudit) | ✕ | ✕ | ✓ |
| Biaya server backend | — | Mahal | Nol |

---

## Analisis Per Baris

### 1. ✓ **Deteksi Anomali Otomatis**
**DEFENSIBLE** dengan catatan:
- RevDadas: ✓ (Isolation Forest otomatis terhadap data APBD)
- Spreadsheet manual: ✕ (manual visual scanning)
- Dashboard BI umum: ✕ (umumnya hanya visualisasi, tidak ada anomaly detection engine)

**Risiko potensial:** Jika juri bertanya "Dashboard BI seperti Tableau/Power BI kan bisa integrasi ML/anomaly detection?", jawab: "Bisa, tapi **tidak out-of-the-box**. Butuh data scientist custom build model terpisah. RevDadas sudah built-in dengan Isolation Forest yang dilatih pada data fiskal daerah."

**Rekomendasi:** KEEP AS IS — ini defendable.

---

### 2. ✓ **Pakai Data Resmi Kemenkeu (DJPK)**
**DEFENSIBLE**:
- RevDadas: ✓ (sumber data primer: DJPK APBD 2023-2025)
- Spreadsheet manual: "Parsial" (tergantung auditor ambil dari mana — bisa DJPK tapi tidak lengkap/konsisten)
- Dashboard BI umum: ✕ (umumnya generic, tidak terpre-connect ke DJPK)

**Rekomendasi:** KEEP AS IS — ini competitive moat data.

---

### 3. ⚠️ **Bahasa Indonesia + Konteks Pemda**
**PERLU KLARIFIKASI**:
- RevDadas: ✓ (UI bahasa Indonesia, penjelasan anomali disesuaikan konteks UU HKPD/APBD)
- Spreadsheet manual: ✕ (tidak ada "konteks" otomatis — hanya angka)
- Dashboard BI umum: ✕ **← INI BISA DIPERTANYAKAN**

**Risiko potensial:** Dashboard BI seperti Tableau/Power BI bisa dibuat bahasa Indonesia, dan kalau dibuatkan custom untuk pemda, bisa juga punya "konteks pemda".

**REVISI YANG LEBIH DEFENSIBLE:**
- Ganti judul kolom jadi: **"Penjelasan Anomali Otomatis dalam Bahasa Indonesia"**
- Maksudnya: RevDadas tidak hanya UI bahasa Indonesia, tapi **memberikan reasoning anomaly dalam kalimat Bahasa Indonesia** (contoh: "Pajak hotel Kabupaten X turun drastis padahal tidak ada wabah/lockdown"), bukan sekadar dashboard dengan label Bahasa Indonesia.

**Rekomendasi:** REVISI SEDIKIT — ubah jadi lebih spesifik ke fitur penjelasan otomatis, bukan hanya UI bahasa.

---

### 4. ⚠️ **Dashboard Muncul Langsung**
**AMBIGU & BERISIKO**:

**Apa maksud "Dashboard Muncul Langsung"?**
- Kalau maksudnya "tidak perlu install/setup server" → RevDadas ✓, Spreadsheet ✕ (tapi bisa dibuka langsung juga kalau file lokal), Dashboard BI ✕ (butuh setup koneksi data source)
- Kalau maksudnya "loading cepat" → ini overlap dengan "Biaya server backend = Nol"

**Risiko potensial:** Juri bisa bingung apa maksudnya. Dashboard Tableau yang sudah di-setup juga bisa "muncul langsung" kalau data sudah tersambung.

**REVISI YANG LEBIH DEFENSIBLE:**
- Ganti jadi: **"Tidak Perlu Server/Infrastruktur"** (ini yang membedakan precomputed JSON RevDadas dengan arsitektur client-server biasa)
- ATAU hapus baris ini karena sudah tercakup di baris terakhir "Biaya server backend = Nol"

**Rekomendasi:** REVISI atau HAPUS — ini yang paling lemah defensibilitasnya.

---

### 5. ✓ **Open Source (dapat diaudit)**
**DEFENSIBLE**:
- RevDadas: ✓ (MIT license, kode publik di GitHub)
- Spreadsheet manual: ✕ (formula bisa diproteksi, tidak ada versioning formal)
- Dashboard BI umum: ✕ (software proprietary, data transformasi tidak transparan)

**Rekomendasi:** KEEP AS IS — ini moat penting untuk trust pemerintah.

---

### 6. ✓ **Biaya server backend**
**DEFENSIBLE**:
- RevDadas: "Nol" (precomputed JSON, static hosting gratis di Vercel)
- Spreadsheet manual: "—" (tidak ada server)
- Dashboard BI umum: "Mahal" (butuh database server + BI server + data pipeline)

**Risiko potensial:** Juri bisa tanya "Kalau user-nya naik sampai 500 pemda, tetap gratis?" Jawab: "Hosting static bisa pakai CDN (S3 + CloudFront), biaya <$50/bulan untuk traffic besar. Dibanding server BI yang ratusan juta/tahun, ini 99%+ lebih murah."

**Rekomendasi:** KEEP AS IS — ini moat teknis paling kuat.

---

## Kesimpulan & Rekomendasi Perbaikan

### BARIS YANG AMAN (KEEP):
1. ✓ Deteksi Anomali Otomatis
2. ✓ Pakai Data Resmi Kemenkeu (DJPK)
5. ✓ Open Source (dapat diaudit)
6. ✓ Biaya server backend

### BARIS YANG PERLU REVISI:
3. ⚠️ **"Bahasa Indonesia + Konteks Pemda"** → ganti jadi **"Penjelasan Anomali Otomatis dalam Bahasa Indonesia"** (lebih spesifik ke reasoning, bukan hanya UI)

4. ⚠️ **"Dashboard Muncul Langsung"** → **HAPUS** atau ganti jadi **"Tidak Perlu Setup Infrastruktur"** (karena overlap dengan baris 6)

---

## Tabel Revisi yang Lebih Defensible

| Dimensi | Spreadsheet Manual | Dashboard BI Umum | RevDadas |
|---------|-------------------|------------------|----------|
| Deteksi Anomali Otomatis | ✕ | ✕ | ✓ |
| Pakai Data Resmi Kemenkeu (DJPK) | Parsial | ✕ | ✓ |
| **Penjelasan Anomali Otomatis (Bahasa Indonesia)** | ✕ | ✕ | ✓ |
| Open Source (dapat diaudit) | ✕ | ✕ | ✓ |
| Biaya server backend | — | Mahal | **Nol** |

**ATAU** (versi 6 baris jika ingin tetap ada baris infrastruktur):

| Dimensi | Spreadsheet Manual | Dashboard BI Umum | RevDadas |
|---------|-------------------|------------------|----------|
| Deteksi Anomali Otomatis | ✕ | ✕ | ✓ |
| Pakai Data Resmi Kemenkeu (DJPK) | Parsial | ✕ | ✓ |
| **Penjelasan Anomali Otomatis (Bahasa Indonesia)** | ✕ | ✕ | ✓ |
| **Tidak Perlu Setup Infrastruktur Server** | ✓ (file lokal) | ✕ | ✓ |
| Open Source (dapat diaudit) | ✕ | ✕ | ✓ |
| Biaya operasional berkelanjutan | Rendah | Mahal | **Nol** |

---

## Strategi Menjawab Jika Ditanya

**Q: "Dashboard BI seperti Power BI juga bisa bahasa Indonesia, kok ini diklaim beda?"**
**A:** "Betul UI-nya bisa bahasa Indonesia, tapi **Power BI tidak otomatis menjelaskan MENGAPA suatu angka anomali** dalam kalimat Bahasa Indonesia yang relevan konteks fiskal daerah. RevDadas memberikan reasoning seperti: 'Pajak hotel turun 40% padahal tidak ada lockdown/bencana' — ini yang membedakan dashboard visual dengan decision support system."

**Q: "Kenapa dashboard BI 'mahal'? Tableau Cloud mulai $15/user/bulan."**
**A:** "Itu harga software-nya saja. Untuk kasus pemda, butuh: (1) database server untuk menyimpan data APBD real-time, (2) data pipeline ETL, (3) lisensi per-user untuk 50-100 auditor. Total bisa ratusan juta/tahun. RevDadas pakai arsitektur precomputed JSON — hosting-nya gratis atau <$50/bulan untuk CDN traffic tinggi."

**Q: "Spreadsheet Excel juga bisa punya formula anomaly detection sederhana."**
**A:** "Bisa, tapi: (1) tidak scalable untuk dataset 100+ kabupaten × 14 komponen × 36 bulan, (2) formula tidak transparan/explainable ke auditor non-teknis, (3) tidak ada versi control formal seperti Git. RevDadas built-in Isolation Forest + penjelasan bahasa Indonesia + kode audit-ready."

---

## Keputusan Akhir

**Apakah tabel perlu diubah sekarang atau cukup siapkan jawaban saja?**

**Pilihan A (KONSERVATIF):** Revisi tabel sekarang → hapus/ubah baris yang ambigu → lebih aman saat presentasi.

**Pilihan B (RISK-TAKING):** Keep tabel as is → siapkan jawaban verbal yang kuat saat Q&A.

**Rekomendasi saya:** **Pilihan A** — karena slide presentasi adalah first impression, lebih baik tidak ada "celah" yang bikin juri curiga sejak awal. Kalau ada pertanyaan kritis di Q&A, jauh lebih mudah defend klaim yang spesifik daripada klaim yang generik/ambigu.
