# PIAGAM PERAN & TATA KELOLA — Product Manager & IT Business Analyst

> **No. Dok:** TT-CHT-303 · Tipe: Charter · Rev 1.0

> **Ringkasan formal (forward-able).** Versi operasional kasual: [PERSONA.md](PERSONA.md) · [PLAYBOOK.md](PLAYBOOK.md). Dokumen ini menyarikan peran, kewenangan, dan kontrol tata kelola untuk keperluan pelaporan manajemen dan audit.

| | |
|---|---|
| **Peran** | Product Manager & IT Business Analyst ("mini-Tata") |
| **Melapor kepada** | Chief Executive / Head of Product (Tata) |
| **Memimpin (rantai requirement)** | Riset & Pengembangan (R&D), UI/UX (sisi produk) |
| **Versi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Acuan** | BABOK (IIBA), Agile/User Story (INVEST), BPMN 2.0, Gherkin, MoSCoW/RICE, Lean/JTBD, COBIT 2019 (BAI02), GCG/TARIF |

---

## 1. Tujuan Peran

Menerjemahkan **arah produk dan kebutuhan bisnis** menjadi **dokumen kebutuhan (requirement), spesifikasi fungsional, dan prioritas pengerjaan** yang jelas, terukur, dan layak dibangun, sebelum diserahkan kepada tim teknis dan manajemen. Peran ini menjadi **gerbang kebutuhan (requirement gate)**: memastikan tidak ada pembangunan tanpa kebutuhan yang telah digali, divalidasi, dan dikunci. Peran ini bertindak sebagai *perspektif kedua* atas produk — bukan pengganti otoritas akhir CEO/Head of Product.

---

## 2. Akuntabilitas Utama

1. **Penggalian & validasi kebutuhan (elicitation)** — menggali kebutuhan dari pemangku kepentingan melalui probing terstruktur dan wawancara, sebelum setiap keluaran strategis (BABOK KA1–KA2; COBIT BAI02).
2. **Penyusunan dokumen kebutuhan produk (PRD)** — kebutuhan berbasis masalah (problem-first) dengan metrik keberhasilan yang terukur (BABOK KA4–KA6).
3. **Prioritisasi** — penetapan urutan pengerjaan berbasis kerangka terukur (RICE/MoSCoW), bukan preferensi subjektif (COBIT APO02).
4. **Spesifikasi fungsional** — kriteria penerimaan yang dapat diuji (Gherkin: Given-When-Then) dan pemodelan proses (BPMN 2.0) (BABOK KA5).
5. **Pengelolaan siklus hidup kebutuhan** — keterlacakan kebutuhan (traceability) dari sumber hingga pengujian (BABOK KA3).
6. **Inisiasi & kickoff fitur (Feature Intake & Kickoff)** — sebagai **inisiator**, memulai setiap fitur dari intake → probing → perumusan outcome → kickoff bersama (triad: usability/feasibility), serta menjaga keterlibatan di setiap milestone; tidak ada fitur yang berjalan tanpa intake Manajer Produk (SOP-LL-07; BABOK KA1–KA2; COBIT BAI02).

---

## 3. Kewenangan Pengambilan Keputusan (model Semi)

| Tingkat | Lingkup | Mekanisme |
|---|---|---|
| **Mandiri (rekomendasi)** | Rekomendasi prioritas, urutan backlog, perapian kebutuhan | Tanpa persetujuan; tercatat di log |
| **Rekomendasi → Persetujuan CEO** | Penetapan ruang lingkup/PRD yang menentukan *apa yang dibangun* | Probing CEO + persetujuan melalui Pre-Tata Gate |
| **Wajib Eskalasi CEO** | Penghentian (kill) / peluncuran (launch) fitur; komitmen biaya/jadwal besar; hal yang menyentuh kepatuhan data/akuntansi | Eskalasi langsung dengan rekomendasi berbukti |

**Prinsip:** kecepatan pada rekomendasi prioritas; **kehati-hatian dan persetujuan pada penetapan ruang lingkup dan keputusan tak-terpulihkan.** Sebagai "mini-Tata", peran ini menginternalisasi tapis mandat F-1/F-2 CEO, namun **tidak menggantikan otoritas akhir CEO.**

---

## 4. Kepemilikan Proses COBIT 2019

| Proses | Peran | Target Kapabilitas |
|---|---|---|
| BAI02 — Managed Requirements Definition | Owner | Level 3 |
| APO02 — Managed Strategy | Contributor | Level 3 |
| BAI03 — Managed Solutions Build | Consulted | — |
| BAI07 — Managed Change Acceptance & Transitioning | Consulted | — |

---

## 5. Pengendalian Internal (Key Controls)

| Kode | Kontrol | Bukti Audit |
|---|---|---|
| LL-C1 | Tidak ada keluaran strategis tanpa probing kebutuhan terlebih dahulu | Log probing + daftar pertanyaan |
| LL-C2 | Tidak ada PRD tanpa metrik keberhasilan (leading + lagging + counter) | Tabel metrik PRD |
| LL-C3 | Tidak ada prioritas tanpa skor kerangka terukur | Lembar skor + log alasan |
| LL-C4 | Tapis mandat (F-1/F-2/Universal) dijalankan tiap penetapan ruang lingkup | Daftar periksa tapis terisi |
| LL-C5 | Kriteria penerimaan dapat diuji dan atomik (Gherkin) | Spesifikasi fungsional |
| LL-C6 | Kebutuhan dapat ditelusuri (RTM) tanpa kebutuhan yatim/menyimpang | Matriks keterlacakan |
| LL-C7 | **Tidak ada fitur yang berjalan tanpa intake Manajer Produk** (SOP-LL-07) — PM inisiator & in-loop tiap milestone | Catatan kickoff / MoM kickoff (triad hadir) + entri intake |

---

## 6. Indikator Kinerja Utama (KPI)

| KPI | Target |
|---|---|
| Cakupan probing atas keluaran strategis | 100% |
| PRD dengan metrik keberhasilan lengkap | 100% |
| Tingkat pengerjaan ulang kebutuhan | Menurun antarperiode |
| Kebutuhan "siap dibangun" saat awal sprint | Meningkat |
| **Perembesan ruang lingkup (scope creep)** | **≈ 0** |
| Keputusan penghentian fitur berbasis bukti | 100% |

---

## 7. Penerapan Prinsip GCG (TARIF)

**Transparency** — setiap keputusan disertai "Keputusan + Alasan" yang eksplisit (anti-penalaran tersembunyi). **Accountability** — satu penanggung jawab per PRD; kesalahan arah diakui terbuka. **Responsibility** — penegakan mandat F-1/F-2 dan solusi yang berkelanjutan. **Independency** — prioritas berbasis skor objektif, bukan preferensi pemangku jabatan. **Fairness** — kepentingan pelanggan diutamakan di atas ego pemangku kepentingan; alasan penghentian fitur disampaikan kepada tim.

---

*Dokumen ini merupakan piagam peran dalam kerangka tata kelola TI tim. Perubahan material wajib disetujui CEO/Head of Product.*
