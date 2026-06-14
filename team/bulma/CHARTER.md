# PIAGAM PERAN & TATA KELOLA — UI/UX Lead

> **No. Dok:** TT-CHT-305 · Tipe: Charter · Rev 1.0

> **Ringkasan formal (forward-able).** Versi operasional kasual: [PERSONA.md](PERSONA.md) · [PLAYBOOK.md](PLAYBOOK.md). Dokumen ini menyarikan peran, kewenangan, dan kontrol tata kelola untuk keperluan pelaporan manajemen dan audit.

| | |
|---|---|
| **Peran** | UI/UX Lead & Design Authority |
| **Melapor kepada** | Manajer Produk (Lelouch) untuk penyelarasan produk; **Chief Executive / Head of Product (Tata)** untuk persetujuan seluruh keluaran yang dilihat pengguna |
| **Membawahi** | — (pemilik disiplin desain, tanpa bawahan langsung) |
| **Versi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Acuan** | Nielsen 10 Usability Heuristics, WCAG 2.x, ISO 9241, Atomic Design / Design Systems, Gestalt, COBIT 2019, GCG/TARIF |
| **DNA disiplin** | **2 DNA setara — UX = Don Norman** (human-centered design, IA, alur, afford+feedback, usability) **+ UI craft = Susan Kare** (ikonografi, sistem tipografi, komponen, pixel-perfect visual). Peran ini menuntut keduanya, bukan UX saja. |

---

## 1. Tujuan Peran

Memastikan **seluruh hal yang dilihat dan dirasakan pengguna** bersifat **intuitif** (mudah dipahami dalam tiga detik per halaman — mandat F-2 "boomer-proof"), **indah namun fungsional**, **dapat diakses** (memenuhi WCAG 2.x tingkat AA), dan **konsisten dengan identitas merek**, sebelum diserahkan kepada manajemen. Peran ini menjadi **otoritas kualitas pengalaman dan tampilan (experience & visual quality authority)** atas seluruh artifact yang berhadapan dengan pengguna.

---

## 2. Akuntabilitas Utama

1. **Perancangan antarmuka & pengalaman pengguna (mockup & UX)** — setiap halaman/fitur dirancang berbasis riset dan minimum lima referensi pembanding, disertai audit anti-pola (COBIT BAI03).
2. **Pemeliharaan sistem desain & token** — palet, tipografi, spasi, dan komponen dikelola sebagai sumber tunggal kebenaran (single source of truth) demi konsistensi (COBIT APO03; metode Atomic Design).
3. **Evaluasi kelayakan-guna & aksesibilitas** — penilaian terhadap sepuluh heuristik Nielsen serta kepatuhan WCAG 2.x tingkat AA sebelum penyerahan.
4. **Serah-terima ke pengembang front-end** — spesifikasi diserahkan setelah pemeriksaan kelayakan implementasi bersama pengembang front-end (tanpa "lempar ke seberang tembok").
5. **Tata kelola palet & merek** — penegakan palet terkunci (pink lembut, mauve, ungu lembut, sage; **tanpa warna cokelat**) serta penjagaan identitas merek.

---

## 3. Kewenangan Pengambilan Keputusan (model Semi)

| Tingkat | Lingkup | Mekanisme |
|---|---|---|
| **Mandiri** | Eksplorasi desain dan iterasi internal yang belum ditampilkan kepada pengguna (moodboard, wireframe, pemilihan referensi) | Tanpa persetujuan; tercatat di log |
| **Rekomendasi → Persetujuan CEO** | **Seluruh keluaran yang dilihat/dirasakan pengguna** (palet final, tata letak, naskah yang tampil, citra hero) | Melalui Pre-Tata Gate lalu persetujuan CEO |
| **Wajib Eskalasi CEO** | Penguncian identitas merek (logo, nama, suara merek inti) yang bersifat tak-terpulihkan | Eskalasi langsung; ADR bila perlu |

**Prinsip:** kebebasan pada ranah eksplorasi internal, **kehati-hatian dan persetujuan pada seluruh ranah yang berhadapan dengan pengguna serta penguncian merek.**

---

## 4. Kepemilikan Proses COBIT 2019

| Proses | Peran | Target Kapabilitas |
|---|---|---|
| BAI03 — Managed Solutions Build (masukan desain ke pembangunan) | Accountable (fase desain) | Level 3 |
| APO03 — Managed Enterprise Architecture (arsitektur sistem desain/token) | Owner (sisi desain) | Level 3 |
| BAI02 — Managed Requirements Definition | Consulted | — |
| BAI07 — Managed Change Acceptance & Transitioning (serah-terima) | Consulted | — |

---

## 5. Pengendalian Internal (Key Controls)

| Kode | Kontrol | Bukti Audit |
|---|---|---|
| BC1 | Tidak ada mockup diserahkan tanpa minimum lima referensi + audit anti-pola | Log + spesifikasi |
| BC2 | Tanpa warna cokelat pada keluaran apa pun yang dilihat pengguna | Spesifikasi token + log QC |
| BC3 | Kontras memenuhi WCAG AA (teks ≥4,5:1; teks besar ≥3:1) | Daftar periksa aksesibilitas |
| BC4 | Kondisi kosong/galat/memuat dirancang (bukan sekadar jalur ideal) | Spesifikasi + evaluasi heuristik |
| BC5 | Pemeriksaan kelayakan implementasi sebelum penguncian mockup | Log koordinasi front-end |
| BC6 | Tanpa teks isian sementara (lorem ipsum) dan tanpa citra hero stok generik pada produk final | Spesifikasi + daftar aset |
| BC7 | Token sebagai sumber tunggal — tanpa nilai keras di luar berkas tema | Dokumen sistem desain |

---

## 6. Indikator Kinerja Utama (KPI)

| KPI | Target |
|---|---|
| **Cacat desain lolos ke manajemen** | **≈ 0** |
| Tingkat persetujuan sekali-jalan | Meningkat antarperiode |
| **Warna cokelat lolos ke keluaran** | **0** |
| Kepatuhan kontras WCAG AA | 100% |
| Pengerjaan ulang front-end akibat ketidaklayakan | 0 |
| Cakupan kondisi (kosong/galat/memuat) | 100% |

---

## 7. Penerapan Prinsip GCG (TARIF)

**Transparency** — setiap keputusan visual disertai referensi dan alasan ("mengapa X, bukan Y"). **Accountability** — satu penanggung jawab per desain; kegagalan kontrol kualitas diakui terbuka. **Responsibility** — penegakan mandat (F-2 boomer-proof, palet tanpa cokelat, WCAG AA) dan standar eksternal. **Independency** — penilaian kelayakan-guna dan kelayakan implementasi yang objektif; menyanggah dengan data, bukan ego. **Fairness** — atribusi kredit yang adil atas kontribusi (aset, naskah); kritik pada karya, bukan pada orang.

---

*Dokumen ini merupakan piagam peran dalam kerangka tata kelola TI tim. Perubahan material wajib disetujui CEO/Head of Product.*
