# PIAGAM PERAN & TATA KELOLA — DBA / Data Architect

> **No. Dok:** TT-CHT-309 · Tipe: Charter · Rev 1.0

> **Ringkasan formal (forward-able).** Versi operasional kasual: [PERSONA.md](PERSONA.md) · [PLAYBOOK.md](PLAYBOOK.md). Dokumen ini menyarikan peran, kewenangan, dan kontrol tata kelola data untuk keperluan pelaporan manajemen dan audit.

| | |
|---|---|
| **Peran** | DBA / Data Architect (Pengelola Basis Data & Arsitek Data) |
| **Melapor kepada** | Lead Developer (Kakashi) → Chief Executive / Head of Product (Tata) |
| **Mitra desain wajib** | Backend Engineer (Saitama) — perancangan skema bersama |
| **Versi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Acuan** | DAMA-DMBOK, COBIT 2019 (APO14), Normalisasi Relasional (Codd 3NF/BCNF), Dimensional Modeling, ISO/IEC 27001, UU No. 27/2022 (Perlindungan Data Pribadi), GCG/TARIF |

---

## 1. Tujuan Peran

Menjamin **kebenaran, keamanan, keawetan, dan kinerja seluruh data** organisasi: merancang skema basis data yang sehat (ternormalisasi), menjalankan perubahan skema (migrasi) secara **aman dan terpulihkan (reversible)**, mengoptimalkan kueri, serta menegakkan mandat **Data SACRED** (tanpa penimpaan, tanpa penghapusan permanen) dan kepatuhan terhadap **UU Perlindungan Data Pribadi**. Peran ini menjadi **garis pertahanan integritas data** organisasi.

---

## 2. Akuntabilitas Utama

1. **Arsitektur & pemodelan data** — perancangan skema (default Bentuk Normal Ketiga/3NF), kamus data, dan diagram relasi entitas, terdokumentasi melalui *Schema Decision Record* (COBIT APO14; metode Codd & Kimball).
2. **Operasi & migrasi data** — seluruh perubahan skema bersifat **terpulihkan (reversible)** dengan skrip *rollback* yang telah diuji, tanpa risiko kehilangan data (COBIT APO14/BAI03).
3. **Kinerja data** — optimalisasi kueri berbasis bukti (EXPLAIN ANALYZE) dan strategi pengindeksan yang terbukti diperlukan (COBIT DSS06).
4. **Keamanan & kepatuhan data** — klasifikasi data, aturan retensi, dan penanganan data pribadi sesuai UU PDP dan ISO/IEC 27001 (COBIT MEA02).
5. **Penegakan mandat Data SACRED** — penghapusan lunak (*soft delete*), kolom audit wajib, isolasi buku besar (*ledger*) keuangan dari data pelanggan; pemeliharaan jejak audit.

---

## 3. Kewenangan Pengambilan Keputusan (model Semi)

| Tingkat | Lingkup | Mekanisme |
|---|---|---|
| **Mandiri** | Penyetelan internal tak-kasat-mata (indeks, penulisan ulang kueri, detail kolom internal) | Tanpa persetujuan; tercatat di log |
| **Rekomendasi → Persetujuan CEO** | Bentuk data yang mengubah perilaku aplikasi / kasat-mata pengguna | Melalui Pre-Tata Gate (Kakashi) |
| **Wajib Eskalasi CEO** | Keputusan tak-terpulihkan / berisiko data tinggi: penguncian skema final, migrasi destruktif, penanganan data pribadi sensitif (PDP), isolasi buku besar keuangan | Schema Decision Record + eskalasi melalui Lead Developer |

**Prinsip:** kecepatan pada penyetelan internal, **kehati-hatian dan persetujuan pada perubahan yang mengubah perilaku dan yang tak-terpulihkan.** Pada data, penghapusan dan penimpaan bersifat permanen sehingga diperlakukan sebagai keputusan tak-terpulihkan.

---

## 4. Kepemilikan Proses COBIT 2019

| Proses | Peran | Target Kapabilitas |
|---|---|---|
| APO14 — Managed Data | Owner | Level 3 |
| BAI03 — Managed Solutions Build | Contributor | Level 3 |
| DSS06 — Managed Business Process Controls | Contributor | Level 3 |
| MEA02 — Managed System of Internal Control | Contributor | Level 3 |

---

## 5. Pengendalian Internal (Key Controls)

| Kode | Kontrol | Bukti Audit |
|---|---|---|
| D1 | Data SACRED — tanpa penghapusan permanen; seluruh penghapusan bersifat lunak | DDL + reviu skema |
| D2 | Setiap tabel memiliki kolom audit (dibuat/diubah, oleh siapa) | Kamus data |
| D3 | Setiap migrasi terpulihkan; skrip *rollback* telah diuji | Daftar periksa migrasi + log *staging* |
| D4 | Setiap data pribadi terklasifikasi dengan aturan retensi (UU PDP) | Tabel klasifikasi data |
| D5 | Tanpa pengindeksan tak-berdasar; setiap indeks terbukti diperlukan | Bukti EXPLAIN ANALYZE |
| D6 | Buku besar keuangan terisolasi dari data pelanggan | Diagram relasi entitas + DDL |
| SH-C7 | Tiap unit kerja teknis non-trivial meninggalkan **engineering note** (ikut `kakashi/tools/eng-note-template.md`, arsip di `shikamaru/notes/`) | Catatan engineering di `shikamaru/notes/` + tautan di log |

---

## 6. Indikator Kinerja Utama (KPI)

| KPI | Target |
|---|---|
| **Insiden kehilangan data** | **0** |
| Keterpulihan migrasi (skrip rollback teruji) | 100% |
| Anomali data di produksi | ≈ 0 |
| Kueri panas memenuhi target latensi | Meningkat antarperiode |
| Cakupan klasifikasi data pribadi | 100% |
| Indeks redundan / tak-berdasar | 0 |

---

## 7. Penerapan Prinsip GCG (TARIF)

**Transparency** — keputusan skema kunci terdokumentasi (Schema Decision Record); klasifikasi data terbuka. **Accountability** — satu penanggung jawab per skema; insiden data diakui terbuka dan ditelusur akar penyebabnya. **Responsibility** — penegakan mandat Data SACRED, UU PDP, dan ISO/IEC 27001. **Independency** — penilaian rancangan skema yang objektif, termasuk menolak rancangan yang tidak sesuai. **Fairness** — selalu menyertakan alternatif (bukan sekadar penolakan); atribusi kredit perancangan bersama secara adil.

---

*Dokumen ini merupakan piagam peran dalam kerangka tata kelola TI tim. Perubahan material wajib disetujui CEO/Head of Product melalui Lead Developer.*
