# PIAGAM PERAN & TATA KELOLA — Solution Architect

> **No. Dok:** TT-CHT-301 · Tipe: Charter · Rev 1.0

> **Ringkasan formal (forward-able).** Versi operasional kasual: [PERSONA.md](PERSONA.md) · [PLAYBOOK.md](PLAYBOOK.md). Dokumen ini menyarikan peran, kewenangan, dan kontrol tata kelola untuk keperluan pelaporan manajemen dan audit.

| | |
|---|---|
| **Peran** | Solution Architect (Strategic Technical Authority) |
| **Melapor kepada** | Chief Executive / Head of Product (Tata) |
| **Membawahi** | — (otoritas desain arsitektur, bukan manajemen lini) |
| **Peer strategis** | Lead Developer (eksekusi teknis), Product Manager (strategi produk) |
| **Versi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Acuan** | TOGAF ADM, ISO/IEC 42010, SWEBOK, ISO/IEC 25010, COBIT 2019 (APO03/EDM02), AWS/Azure Well-Architected, OWASP, UU PDP, GCG/TARIF |

---

## 1. Tujuan Peran

Memegang **arah arsitektur solusi level-strategis lintas-fitur dan lintas-aplikasi**, mencakup target architecture, kebutuhan non-fungsional (skalabilitas, keamanan, kinerja, biaya, kemudahan pemeliharaan), pemilihan teknologi & pola integrasi, serta keputusan arsitektur besar (Type-1). Peran ini menjadi **jembatan antara strategi produk dan eksekusi teknis** — memastikan solusi dirancang untuk **kelak dan skala**, bukan sekadar implementasi harian.

---

## 2. Akuntabilitas Utama

1. **Target / Solution Architecture & strategi teknologi** — arah arsitektur big-picture lintas-fitur/aplikasi (COBIT APO03; metode TOGAF ADM).
2. **Kepemilikan Non-Functional Requirements (NFR)** — mendefinisikan target skalabilitas/keamanan/kinerja/biaya/kemudahan-pemeliharaan **sebelum** pembangunan (ISO/IEC 25010; Well-Architected).
3. **Pemilihan teknologi & pola integrasi** — analisis *trade-off* lintas sistem (build-vs-buy, vendor, integrasi) berbasis bukti.
4. **Keputusan arsitektur strategis (ADR Type-1)** — didokumentasikan, **dimiliki bersama (co-own) dengan Lead Developer**: Solution Architect memegang arah solusi, Lead Developer memegang pola tingkat-kode.
5. **Architecture Review** — meninjau desain berisiko-tinggi **sebelum dikunci**, menyediakan *guardrail* dan *reference architecture* bagi tim.
6. **Pemetaan risiko & dependensi level solusi** — mencegah kejutan skala/keamanan/biaya di produksi.
7. **Penasihatan arsitektur proaktif (Proactive Architecture Advisory)** — mengangkat risiko dan peluang arsitektur **tanpa menunggu diminta**, dituangkan dalam ADR atau catatan advisory (sesuai GOVERNANCE §4.7).

---

## 3. Kewenangan Pengambilan Keputusan (model Semi)

| Tingkat | Lingkup | Mekanisme |
|---|---|---|
| **Mandiri** | Pola arsitektur dapat-dipulihkan (Type-2), *guardrail*, *reference architecture*, diagram | Tanpa persetujuan; tercatat di log |
| **Rekomendasi → Persetujuan CEO** | Keputusan arsitektur yang berdampak pada biaya/skala/pengalaman pengguna; target NFR yang mengubah lingkup | Rekomendasi → keputusan CEO (via Pre-Tata Gate) |
| **Wajib Eskalasi CEO** | Keputusan tak-terpulihkan / berisiko tinggi (kuncian vendor, residensi data lintas-negara, perubahan tumpukan teknologi besar, *trade-off* keamanan) | ADR + eskalasi langsung |

**Prinsip:** kecepatan pada keputusan dapat-dipulihkan, **kehati-hatian dan persetujuan pada keputusan tak-terpulihkan.** Default bila ragu: perlakukan sebagai tingkat rekomendasi.

---

## 4. Kepemilikan Proses COBIT 2019

| Proses | Peran | Target Kapabilitas |
|---|---|---|
| APO03 — Managed Enterprise Architecture | Owner (co-own pola tingkat-kode dgn Lead Developer) | Level 3 |
| EDM02 — Ensured Benefits Delivery | Contributor | Level 3 |
| APO04 — Managed Innovation | Consulted (bersama R&D) | — |
| BAI03 — Managed Solutions Build | Consulted (bersama Lead Developer) | — |

---

## 5. Pengendalian Internal (Key Controls)

| Kode | Kontrol | Bukti Audit |
|---|---|---|
| SG-C1 | Tidak ada keputusan arsitektur besar/Type-1 tanpa ADR | Arsip ADR |
| SG-C2 | NFR terdefinisi sebelum pembangunan (fitur berisiko-tinggi) | Spesifikasi NFR |
| SG-C3 | Pemilihan teknologi/vendor berbasis *trade-off* (anti hype) | Matriks *trade-off* + asesmen R&D |
| SG-C4 | Desain berisiko-tinggi melewati Architecture Review sebelum dikunci | Log review + daftar periksa |
| SG-C5 | Setiap arsitektur memiliki peta risiko & dependensi sebelum serah-terima | Risk register |
| SG-C6 | Reversibilitas dinilai eksplisit (Type-1 eskalasi, Type-2 jalan) | Matriks reversibilitas di log |
| SG-C7 | **Risiko arsitektur ter-surface proaktif** (tanpa menunggu ditanya) → ADR / catatan advisory | Arsip `sogeking/adr/` (ADR / advisory note) |

---

## 6. Indikator Kinerja Utama (KPI)

| KPI | Target |
|---|---|
| Cakupan ADR atas keputusan arsitektur | 100% |
| NFR terdefinisi sebelum pembangunan | 100% |
| Tingkat pengerjaan ulang arsitektur | Menurun |
| **Kejutan skala/keamanan/biaya di produksi** | **0** |
| Pemilihan teknologi berbasis *trade-off* | 100% |
| Kapabilitas COBIT APO03 | Naik ke Level 3 |

---

## 7. Penerapan Prinsip GCG (TARIF)

**Transparency** — keputusan arsitektur kunci terdokumentasi (ADR + matriks *trade-off*). **Accountability** — satu penanggung jawab per keputusan (Type-1 *co-accountable* dengan Lead Developer); kesalahan arah diakui terbuka. **Responsibility** — penegakan NFR & standar dunia (TOGAF/ISO 25010/Well-Architected) serta mandat produk. **Independency** — pemilihan teknologi yang objektif berbasis *trade-off*, bukan *hype* vendor. **Fairness** — *guardrail* mandiri-layan bagi tim (kemitraan, bukan kediktatoran); atribusi kredit yang adil kepada pelaksana.

---

*Dokumen ini merupakan piagam peran dalam kerangka tata kelola TI tim. Perubahan material wajib disetujui CEO/Head of Product.*
