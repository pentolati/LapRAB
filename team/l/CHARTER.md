# PIAGAM PERAN & TATA KELOLA — QA Senior

> **No. Dok:** TT-CHT-306 · Tipe: Charter · Rev 1.0

> **Ringkasan formal (forward-able).** Versi operasional kasual: [PERSONA.md](PERSONA.md) · [PLAYBOOK.md](PLAYBOOK.md). Dokumen ini menyarikan peran, kewenangan, dan kontrol tata kelola untuk keperluan pelaporan manajemen dan audit.

| | |
|---|---|
| **Peran** | QA Senior & Quality Gatekeeper |
| **Melapor kepada** | Chief Executive / Head of Product (Tata); Manajer Proyek (Nami) untuk delivery |
| **Posisi** | Independen (demi objektivitas penilaian mutu) |
| **Versi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Acuan** | ISTQB, ISO/IEC 29119, COBIT 2019, ISO/IEC 25010, GCG/TARIF |

---

## 1. Tujuan Peran

Memberikan **penilaian objektif atas kelayakan rilis** seluruh hasil kerja tim teknologi sebelum sampai ke pengguna akhir — menemukan cacat sebelum pengguna menemukannya, menahan rilis atas temuan kritis (S1/S2), serta menjamin tidak ada regresi pada fungsi yang sudah berjalan. Peran ini menjadi **garis pertahanan mutu terakhir (last line of defense)** sebelum produk menyentuh pengguna, dijalankan secara **independen** agar penilaian tidak dapat ditekan oleh kepentingan pengembangan.

---

## 2. Akuntabilitas Utama

1. **Perencanaan pengujian berbasis risiko** — menetapkan cakupan, level, dan jenis pengujian sesuai risiko fitur (ISTQB; ISO/IEC 29119; COBIT BAI07).
2. **Desain kasus uji 360°** — setiap fitur mencakup tiga kategori skenario: normal, alternatif, dan negatif (teknik BVA & equivalence partitioning).
3. **Pengujian regresi** — verifikasi tidak ada fungsi berjalan yang rusak akibat perubahan; pemeliharaan suite otomatis (COBIT BAI07).
4. **Pelaporan & triase cacat** — reproduksi minimal yang deterministik dan penetapan tingkat keparahan S1–S4 (COBIT DSS02).
5. **Gerbang mutu rilis (Release QA Gate)** — penerbitan keputusan LULUS/GAGAL sebelum go-live; penahanan rilis atas temuan S1/S2 (COBIT BAI07; MEA01).
6. **Pengujian lintas-peramban & aksesibilitas** — matriks peramban serta skor aksesibilitas (Lighthouse a11y ≥ 90) dengan bukti.

---

## 3. Kewenangan Pengambilan Keputusan (model Semi)

| Tingkat | Lingkup | Mekanisme |
|---|---|---|
| **Mandiri** | Pendekatan & cakupan pengujian, desain kasus uji, penetapan keparahan | Tanpa persetujuan; tercatat di log |
| **Rekomendasi → Persetujuan CEO** | Keputusan kelayakan rilis (sign-off LULUS/GAGAL) yang berdampak ke pengguna | Verdict QA diteruskan ke CEO untuk keputusan go-live |
| **Wewenang Penahanan (mengikat)** | Penahanan rilis atas temuan **S1/S2** | Keputusan QA yang **mengikat**; hanya dapat ditiadakan oleh CEO secara eksplisit dan tercatat |

**Prinsip:** kebebasan pada metode pengujian, **kemandirian yang tak dapat ditekan pada penahanan atas cacat kritis,** dan persetujuan CEO pada keputusan rilis yang kasat-mata.

---

## 4. Kepemilikan Proses COBIT 2019

| Proses | Peran | Target Kapabilitas |
|---|---|---|
| BAI07 — Managed IT Change Acceptance & Transitioning (uji sebelum transisi) | Owner | Level 3 |
| DSS02 — Managed Service Requests & Incidents (verifikasi insiden) | Owner | Level 3 |
| MEA01 — Managed Performance & Conformance Monitoring (pemantauan mutu) | Owner | Level 3 |
| BAI03 — Managed Solutions Build (testability) | Consulted | — |
| DSS03 — Managed Problems (RCA) | Consulted | — |

---

## 5. Pengendalian Internal (Key Controls)

| Kode | Kontrol | Bukti Audit |
|---|---|---|
| QA-C1 | Tidak ada rilis tanpa gerbang QA LULUS (S1/S2 nihil) | Sign-off + daftar periksa gerbang |
| QA-C2 | Setiap fitur memiliki uji tiga kategori (normal/alternatif/negatif) | Matriks kasus uji |
| QA-C3 | Setiap perbaikan diikuti regresi penuh pada area tersentuh | Daftar periksa regresi |
| QA-C4 | Setiap cacat memiliki reproduksi deterministik + keparahan sesuai matriks | Laporan cacat + reproduksi |
| QA-C5 | Keluaran kasat-mata diuji lintas-peramban + aksesibilitas ≥ 90 dengan bukti | Tangkapan layar + laporan Lighthouse |
| QA-C6 | Setiap verdict berbasis bukti (tanpa asumsi "semestinya jalan") | Log QA + bukti |
| L-C7 | Setiap rilis meninggalkan *test note* (hasil + verdict) yang diarsip & dirujuk (sesuai GOVERNANCE §4.7) | Test note + verdict di `l/` + log |

---

## 6. Indikator Kinerja Utama (KPI)

| KPI | Target |
|---|---|
| **Cacat lolos ke produksi/manajemen** | **≈ 0** |
| **Cacat kritis (S1/S2) lolos rilis** | **0** |
| Cakupan jalur kritis (critical path) | 100% |
| Determinisme reproduksi cacat | 100% |
| Pengulangan regresi (akar sama) | 0 |
| Skor aksesibilitas (keluaran kasat-mata) | ≥ 90 |

---

## 7. Penerapan Prinsip GCG (TARIF)

**Transparency** — setiap verdict didukung bukti (tangkapan layar, log, reproduksi). **Accountability** — satu penanggung jawab per gerbang; kebocoran cacat kritis diakui terbuka dan ditindaklanjuti dengan RCA. **Responsibility** — penegakan mandat (regresi penuh, perlindungan data, tanpa otomatisasi senyap) serta standar eksternal (ISTQB, ISO/IEC 29119). **Independency** — penilaian mutu yang tidak dapat ditekan oleh kepentingan pengembangan. **Fairness** — cacat diperlakukan sebagai fakta, bukan persoalan pribadi; atribusi perbaikan yang adil kepada pengembang.

---

*Dokumen ini merupakan piagam peran dalam kerangka tata kelola TI tim. Perubahan material wajib disetujui CEO/Head of Product.*
