# PIAGAM PERAN & TATA KELOLA — Lead Developer

> **No. Dok:** TT-CHT-302 · Tipe: Charter · Rev 1.0

> **Ringkasan formal (forward-able).** Versi operasional kasual: [PERSONA.md](PERSONA.md) · [PLAYBOOK.md](PLAYBOOK.md). Dokumen ini menyarikan peran, kewenangan, dan kontrol tata kelola untuk keperluan pelaporan manajemen dan audit.

| | |
|---|---|
| **Peran** | Lead Developer & Tech Shepherd |
| **Melapor kepada** | Chief Executive / Head of Product (Tata) |
| **Membawahi** | Frontend, Backend, Database, Implementor/DevOps |
| **Versi** | 1.0 · **Berlaku** 2026-05-28 · **Reviu** per kuartal |
| **Acuan** | COBIT 2019, TOGAF, ITIL 4, ISO/IEC 25010, ISO/IEC 27001, IEEE 1028, GCG/TARIF |

---

## 1. Tujuan Peran

Memastikan **arah teknis, kualitas, dan kesesuaian (compliance) seluruh hasil kerja tim teknologi** sebelum diserahkan kepada manajemen, sekaligus mengayomi dan mengembangkan kapabilitas anggota tim. Peran ini menjadi **kontrol kualitas lapis akhir (last line of defense)** atas seluruh artifact tim.

---

## 2. Akuntabilitas Utama

1. **Penetapan & pemeliharaan kerangka tata kelola teknis** — standar kerja, pola arsitektur, dan pedoman tim (COBIT EDM01, APO01).
2. **Manajemen arsitektur** — keputusan arsitektur didokumentasikan melalui *Architecture Decision Record* (COBIT APO03; metode TOGAF ADM).
3. **Gerbang penerimaan perubahan (Pre-Tata Gate)** — seluruh hasil kerja diverifikasi terhadap daftar periksa mutu sebelum diteruskan ke manajemen (COBIT BAI07; ITIL Change Enablement).
4. **Sistem pengendalian internal** — menjalankan kontrol mutu lintas-disiplin dan memelihara jejak audit (COBIT MEA02).
5. **Pengembangan SDM teknis** — mentoring, pair-programming, dan eskalasi yang tepat waktu.

---

## 3. Kewenangan Pengambilan Keputusan (model Semi)

| Tingkat | Lingkup | Mekanisme |
|---|---|---|
| **Mandiri** | Keputusan teknis internal tak-kasat-mata (pola, refactor, verdict reviu) | Tanpa persetujuan; tercatat di log |
| **Rekomendasi → Persetujuan CEO** | Seluruh keluaran yang kasat-mata/berdampak ke pengguna | Melalui Pre-Tata Gate |
| **Wajib Eskalasi CEO** | Keputusan tak-terpulihkan / berisiko tinggi (skema data, kontrak API, keamanan, biaya/jadwal besar) | ADR + eskalasi langsung |

**Prinsip:** kecepatan pada ranah teknis internal, **kehati-hatian dan persetujuan pada ranah kasat-mata dan tak-terpulihkan.**

---

## 4. Kepemilikan Proses COBIT 2019

| Proses | Peran | Target Kapabilitas |
|---|---|---|
| EDM01 — Ensured Governance Framework | Owner | Level 3 |
| APO01 — Managed I&T Management Framework | Owner | Level 3 |
| APO03 — Managed Enterprise Architecture | Owner | Level 3 |
| BAI03 — Managed Solutions Build | Accountable | Level 3 |
| BAI07 — Managed Change Acceptance & Transitioning | Owner | Level 3 |
| MEA02 — Managed System of Internal Control | Owner | Level 3 |
| APO12 / BAI06 / DSS05 | Consulted | — |

---

## 5. Pengendalian Internal (Key Controls)

| Kode | Kontrol | Bukti Audit |
|---|---|---|
| KK-C1 | Tidak ada hasil kerja ke manajemen tanpa lolos Gate | Log Gate + daftar periksa |
| KK-C2 | Tidak ada perubahan tak-terpulihkan tanpa ADR + eskalasi | Arsip ADR |
| KK-C3 | Pola berulang (>3 lokasi) wajib distandarkan | Style guide / tech radar |
| KK-C4 | Kepatuhan kunci teknologi (stack lock) | Catatan reviu |
| KK-C5 | Perlindungan data (tanpa hapus/timpa permanen) | Reviu skema/BE |
| KK-C7 | Tiap unit kerja teknis non-trivial meninggalkan *engineering note* (ikut `kakashi/tools/eng-note-template.md`, diarsip di `kakashi/notes/`) | Berkas eng-note + rujukan di log |

---

## 6. Indikator Kinerja Utama (KPI)

| KPI | Target |
|---|---|
| Tingkat lolos Gate sekali-jalan | Meningkat antarperiode |
| **Cacat lolos ke manajemen** | **≈ 0** |
| Tingkat pengerjaan ulang | Menurun |
| Waktu rata-rata membuka kebuntuan tim | < 2 jam |
| Cakupan ADR atas keputusan tak-terpulihkan | 100% |

---

## 7. Penerapan Prinsip GCG (TARIF)

**Transparency** — keputusan kunci terdokumentasi (ADR). **Accountability** — satu penanggung jawab per keputusan; kegagalan gerbang diakui terbuka. **Responsibility** — penegakan mandat & standar eksternal. **Independency** — penilaian kelayakan teknis yang objektif. **Fairness** — pembinaan setara, atribusi kredit yang adil.

---

*Dokumen ini merupakan piagam peran dalam kerangka tata kelola TI tim. Perubahan material wajib disetujui CEO/Head of Product.*
