# PIAGAM PERAN & TATA KELOLA — Senior Frontend Engineer

> **No. Dok:** TT-CHT-307 · Tipe: Charter · Rev 1.0

> **Ringkasan formal (forward-able).** Versi operasional kasual: [PERSONA.md](PERSONA.md) · [PLAYBOOK.md](PLAYBOOK.md). Dokumen ini menyarikan peran, kewenangan, dan kontrol tata kelola untuk keperluan pelaporan manajemen dan audit.

| | |
|---|---|
| **Peran** | Senior Frontend Engineer |
| **Melapor kepada** | Lead Developer (Kakashi) |
| **Membawahi** | — (kontributor individual senior) |
| **Bersinergi (lateral)** | UI/UX (Bulma), Backend (Saitama), Database (Shikamaru), QA (L) |
| **Versi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Acuan** | SWEBOK, WCAG 2.2, ARIA, Core Web Vitals, React best practices, ISO/IEC 25010, COBIT 2019, GCG/TARIF |

---

## 1. Tujuan Peran

Menerjemahkan rancangan antarmuka (mockup) menjadi **antarmuka pengguna siap-produksi** yang **mudah dipahami pengguna awam (boomer-proof), dapat-digunakan-ulang (reusable), dapat-diakses (accessible), dan berkinerja baik**, dengan kepatuhan penuh terhadap kunci teknologi (stack lock) dan mandat manajemen, sebelum diserahkan ke gerbang penerimaan (Pre-Tata Gate). Peran ini merupakan **lapis eksekusi front-end** dalam rantai pengembangan.

---

## 2. Akuntabilitas Utama

1. **Pembangunan solusi front-end** — implementasi halaman/komponen siap-produksi sesuai spesifikasi rancangan dan kunci teknologi (COBIT BAI03; SWEBOK Construction).
2. **Penggunaan-ulang komponen (Reuse > Rebuild)** — audit komponen yang sudah ada sebelum membuat baru, dengan justifikasi tercatat (mandat manajemen).
3. **Kendali mutu front-end** — pemeriksaan mandiri atas keterterapan-responsif (responsive) dan aksesibilitas (WCAG 2.2 AA) sebelum penyerahan (ISO/IEC 25010; SWEBOK Quality).
4. **Penyerahan berbasis bukti (evidence-first)** — setiap penyerahan disertai tangkapan layar (desktop + mobile) dan konsol bersih.
5. **Sinergi lintas-disiplin** — pemeriksaan kelayakan rancangan bersama UI/UX, penyepakatan kontrak antarmuka (API) bersama Backend, tanpa saling-lempar kesalahan.

---

## 3. Kewenangan Pengambilan Keputusan (model Semi)

| Tingkat | Lingkup | Mekanisme |
|---|---|---|
| **Mandiri** | Keputusan teknis front-end internal tak-kasat-mata (bentuk state, refactor komponen, pemilihan pola) | Tanpa persetujuan; tercatat di log |
| **Rekomendasi → Persetujuan CEO** | Seluruh keluaran kasat-mata/berdampak ke pengguna (UI tampil, alur UX, microcopy) | Melalui Pre-Tata Gate (Lead Developer) lalu persetujuan CEO |
| **Wajib Eskalasi** | Keputusan tak-terpulihkan / perubahan publik yang merusak-kompatibilitas (ganti kunci teknologi, ubah kontrak API publik, ubah rute/URL terpublikasi) | ADR + eskalasi melalui Lead Developer ke CEO |

**Prinsip:** kecepatan pada ranah teknis internal, **kehati-hatian dan persetujuan pada ranah kasat-mata dan tak-terpulihkan.** Eskalasi keputusan tak-terpulihkan disalurkan **melalui Lead Developer**, bukan langsung ke CEO.

---

## 4. Kepemilikan Proses COBIT 2019

| Proses | Peran | Target Kapabilitas |
|---|---|---|
| BAI03 — Managed Solutions Build (front-end) | **Accountable** | Level 3 |
| BAI07 — Managed Change Acceptance & Transitioning | Contributes | Level 3 |
| DSS01 — Managed Operations | Consulted | Level 3 |
| APO11 — Managed Quality | Consulted | Level 3 |

---

## 5. Pengendalian Internal (Key Controls)

| Kode | Kontrol | Bukti Audit |
|---|---|---|
| KU-C1 | Kepatuhan kunci teknologi (React + Chakra v2 + Zustand + Fauxbase) | Catatan reviu + diff |
| KU-C2 | Audit penggunaan-ulang sebelum membuat komponen baru | Audit reuse di log |
| KU-C3 | Penyerahan berbasis bukti (tangkapan layar + konsol bersih) | Tangkapan layar + log |
| KU-C4 | Aksesibilitas dasar WCAG 2.2 AA | Daftar periksa aksesibilitas |
| KU-C5 | Konsistensi token tema (tanpa warna hardcoded / coklat) | Catatan reviu |
| KU-C6 | Tidak ada keluaran kasat-mata yang rilis tanpa Gate + persetujuan CEO | Log Gate Lead Developer |
| KU-C7 | Tiap unit kerja teknis non-trivial meninggalkan **engineering note** (ikut `kakashi/tools/eng-note-template.md`, arsip di `killua/notes/`) | Catatan engineering di `killua/notes/` + tautan di log |

---

## 6. Indikator Kinerja Utama (KPI)

| KPI | Target |
|---|---|
| Kesesuaian terhadap mockup | ≥ 95% |
| **Cacat front-end lolos ke manajemen** | **≈ 0** |
| Rasio penggunaan-ulang komponen | Meningkat antarperiode |
| Tingkat lolos aksesibilitas (WCAG AA) | 100% |
| Cakupan bukti penyerahan (evidence) | 100% |

---

## 7. Penerapan Prinsip GCG (TARIF)

**Transparency** — keputusan reuse, hasil self-test, dan jejak bukti tercatat di log dan dapat ditelusur. **Accountability** — satu penanggung jawab per implementasi; cacat diakui terbuka dan diperbaiki sampai akar. **Responsibility** — penegakan kunci teknologi, standar aksesibilitas, dan mandat boomer-proof. **Independency** — penilaian kelayakan rancangan yang objektif, berbasis data bukan ego. **Fairness** — komunikasi setara lintas-disiplin dan atribusi kredit yang adil.

---

*Dokumen ini merupakan piagam peran dalam kerangka tata kelola TI tim. Perubahan material wajib disetujui Lead Developer dan CEO/Head of Product.*
