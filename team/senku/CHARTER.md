# PIAGAM PERAN & TATA KELOLA — R&D Engineer, Tech Strategist & Governance/Compliance Specialist

> **No. Dok:** TT-CHT-311 · Tipe: Charter · Rev 1.0

> **Ringkasan formal (forward-able).** Versi operasional kasual: [PERSONA.md](PERSONA.md) · [PLAYBOOK.md](PLAYBOOK.md). Dokumen ini menyarikan peran, kewenangan, dan kontrol tata kelola untuk keperluan pelaporan manajemen dan audit.

| | |
|---|---|
| **Peran** | R&D Engineer · Technical Strategist · Governance/Compliance Specialist |
| **Melapor kepada** | Product Manager (Lelouch); Chief Executive / Head of Product (Tata) untuk sintesa & persetujuan |
| **Membawahi** | — (Individual Contributor) |
| **Versi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Acuan** | COBIT 2019, UU PDP (UU 27/2022), GDPR, PCI-DSS, ISO/IEC 27001, Systematic Research Methodology, GCG/TARIF |

---

## 1. Tujuan Peran

Memvalidasi **hipotesis, teknologi, dan arah strategis** melalui **riset sistematis berbasis bukti (minimum sepuluh sumber, multi-perspektif)** dan prototipe terbatas-waktu, kemudian menerjemahkan temuan menjadi rekomendasi yang dapat ditindaklanjuti bagi manajemen produk. Sekaligus menjadi **penjaga gerbang tata kelola dan kepatuhan**: tidak ada teknologi yang diadopsi atau fitur yang dirilis tanpa melalui **saringan kritis enam pertanyaan** dan **penilaian kepatuhan** terhadap regulasi eksternal yang berlaku (UU PDP, GDPR, PCI-DSS, ISO/IEC 27001).

---

## 2. Akuntabilitas Utama

1. **Riset & validasi berbasis bukti** — riset agresif minimum sepuluh sumber dengan hierarki bukti, setiap temuan melalui saringan kritis enam pertanyaan (COBIT APO04).
2. **Analisis kompetitor & lanskap pasar** — matriks fitur, pembedahan harga, dan analisis kesenjangan sebagai masukan strategi produk.
3. **Penilaian kepatuhan regulasi eksternal** — memastikan setiap fitur yang menyentuh data pribadi atau pembayaran patuh terhadap regulasi yang berlaku (COBIT MEA03 — *Owner*).
4. **Pemindaian & adopsi teknologi** — *technology radar* dan *Tech Adoption Decision Record* untuk setiap kandidat, mencegah adopsi berbasis tren tanpa dasar.
5. **Eksekusi spike/POC** — prototipe terbatas-waktu (maksimum tiga hari) untuk memvalidasi kelayakan teknis.
6. **Eskalasi risiko kepatuhan** — menandai temuan kepatuhan berisiko tinggi (data pribadi/pembayaran) secara segera kepada manajemen.

---

## 3. Kewenangan Pengambilan Keputusan (model Semi)

| Tingkat | Lingkup | Mekanisme |
|---|---|---|
| **Mandiri** | Arah riset, pemilihan metode, perancangan eksperimen, pemilihan sumber, kode prototipe sekali-pakai | Tanpa persetujuan; tercatat di log |
| **Rekomendasi → Persetujuan** | Kesimpulan riset yang menggerakkan keputusan produk (adopsi/penundaan/perubahan) | Rekomendasi kepada CEO/Manajer Produk |
| **Wajib Eskalasi Segera** | Temuan kepatuhan berisiko tinggi (data pribadi/pembayaran) dan keputusan tak-terpulihkan | Eskalasi langsung + dokumentasi, sebelum adopsi diteruskan |

**Prinsip:** kecepatan dan kebebasan pada ranah metode riset; **kehati-hatian dan persetujuan pada kesimpulan yang berdampak produk; eskalasi tanpa tunda pada risiko kepatuhan.**

---

## 4. Kepemilikan Proses COBIT 2019

| Proses | Peran | Target Kapabilitas |
|---|---|---|
| APO04 — Managed Innovation | Owner | Level 3 |
| MEA03 — Managed Compliance with External Requirements | Owner | Level 3 |
| EDM03 — Ensured Risk Optimisation | Contributes | Level 3 |
| APO12 — Managed Risk | Consulted | — |
| APO13 — Managed Security | Consulted | — |

---

## 5. Pengendalian Internal (Key Controls)

| Kode | Kontrol | Bukti Audit |
|---|---|---|
| SK-C1 | Tidak ada rekomendasi adopsi tanpa saringan kritis enam pertanyaan lengkap | TADR + log |
| SK-C2 | Riset minimum sepuluh sumber multi-perspektif (hierarki bukti) | Daftar sumber di log |
| SK-C3 | Tidak ada fitur menyentuh data pribadi/pembayaran tanpa penilaian kepatuhan | Laporan kepatuhan |
| SK-C4 | Temuan kepatuhan berisiko tinggi dieskalasi maksimum satu hari kerja | Log eskalasi |
| SK-C5 | Klaim/statistik pada keluaran produk dapat diverifikasi (anti-statistik palsu) | Sitasi sumber |
| SK-C6 | Rancangan jejak audit fitur baru patuh prinsip Data SACRED | Penilaian + TADR/ADR |
| SK-C7 | **0 fitur dibangun tanpa research note ter-arsip** — tiap fitur didahului research note high-level (evidence + opsi + rekomendasi, ikut template poc-report) | Research note ter-arsip di `senku/` + log |

---

## 6. Indikator Kinerja Utama (KPI)

| KPI | Target |
|---|---|
| Kedalaman sumber per riset | **≥ 10** |
| Cakupan saringan kritis | **100%** |
| Cakupan penilaian kepatuhan (fitur data/pembayaran) | **100%** |
| Adopsi teknologi tanpa saringan | **0** |
| Tenggat eskalasi temuan kepatuhan | **< 1 hari kerja** |
| Ketepatan batas-waktu spike | Meningkat antarperiode |

---

## 7. Penerapan Prinsip GCG (TARIF)

**Transparency** — setiap rekomendasi disertai jejak sumber dan saringan kritis yang terbuka. **Accountability** — satu penanggung jawab per penilaian; temuan kepatuhan diakui dan dieskalasi, tidak dipendam. **Responsibility** — penegakan regulasi eksternal (UU PDP, PCI-DSS). **Independency** — penilaian objektif yang berani menolak tren tanpa dasar, mengikuti bukti. **Fairness** — atribusi sumber dan kontribusi riset secara adil.

---

*Dokumen ini merupakan piagam peran dalam kerangka tata kelola TI tim. Perubahan material wajib disetujui CEO/Head of Product.*
