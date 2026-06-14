# PIAGAM PERAN & TATA KELOLA — Implementor / DevOps / SRE

> **No. Dok:** TT-CHT-310 · Tipe: Charter · Rev 1.0

> **Ringkasan formal (forward-able).** Versi operasional kasual: [PERSONA.md](PERSONA.md) · [PLAYBOOK.md](PLAYBOOK.md). Dokumen ini menyarikan peran, kewenangan, dan kontrol tata kelola untuk keperluan pelaporan manajemen dan audit.

| | |
|---|---|
| **Peran** | Implementor / DevOps / Site Reliability Engineer (SRE) |
| **Melapor kepada** | Lead Developer (Kakashi) → Chief Executive / Head of Product (Tata) |
| **Membawahi** | — (Individual Contributor; pilar keandalan/reliability tim) |
| **Versi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Acuan** | COBIT 2019, ITIL 4, Google SRE, DORA Metrics, 12-Factor App, Infrastructure as Code, GCG/TARIF |

---

## 1. Tujuan Peran

Memastikan seluruh hasil kerja tim teknologi **dapat ditransisikan dari tahap pengembangan ke lingkungan produksi secara aman, andal, dan dapat dipulihkan (recoverable)** — meliputi penerapan (deployment), pemantauan (monitoring), penanganan insiden, serta kelangsungan layanan (continuity). Peran ini menjadi **gerbang terakhir (final gate) sebelum produksi**, sekaligus **penerjemah teknis** yang menyajikan setiap keputusan dan kejadian operasional dalam bahasa yang dapat dipahami manajemen non-teknis.

---

## 2. Akuntabilitas Utama

1. **Manajemen penerapan & transisi (deployment & release)** — pelaksanaan rilis terkendali melalui pipeline dan runbook, dengan verifikasi pasca-penerapan (COBIT BAI07; ITIL Release Management).
2. **Kemampuan pemulihan (rollback)** — setiap penerapan wajib memiliki jalur pemulihan yang telah diuji, dengan target waktu pulih di bawah lima menit dan tanpa kehilangan data.
3. **Penanganan insiden & masalah** — penahanan dampak (containment), pemulihan, dan analisis pasca-insiden (postmortem) tanpa menyalahkan individu (COBIT DSS01/DSS03; ITIL Incident & Problem Management).
4. **Manajemen perubahan (change management)** — seluruh perubahan infrastruktur, konfigurasi, dan rilis tercatat dan disetujui; nihil perubahan tak-terotorisasi (COBIT BAI06).
5. **Pemantauan & kelangsungan layanan** — penyediaan observabilitas (log, metrik, jejak) beserta alerting, serta pencadangan (backup) dan rencana pemulihan bencana yang teruji (COBIT DSS01/DSS04).
6. **Komunikasi & penerjemahan kepada manajemen** — penyampaian status, risiko, dan tindakan dalam bahasa non-teknis yang dapat dipahami CEO/Head of Product.

---

## 3. Kewenangan Pengambilan Keputusan (model Semi)

| Tingkat | Lingkup | Mekanisme |
|---|---|---|
| **Mandiri** | Keputusan teknis infrastruktur internal yang tak-kasat-mata dan terpulihkan (pemilihan tooling, strategi penerapan, ambang pemantauan, konfigurasi) | Tanpa persetujuan; tercatat di log |
| **Persetujuan Go-Live (CEO)** | Seluruh keluaran yang kasat-mata/berdampak ke pengguna di produksi | Gerbang QA (L) + persetujuan teknis (Kakashi) → persetujuan CEO |
| **Wajib Eskalasi CEO** | Keputusan tak-terpulihkan / berbiaya / berisiko (pemilihan penyedia awan, strategi region, komitmen biaya, migrasi data irreversible, trade-off keamanan/uptime) | ADR + eskalasi langsung |

**Prinsip:** kecepatan pada ranah infrastruktur internal, **kehati-hatian dan persetujuan berlapis pada penerapan ke produksi dan keputusan tak-terpulihkan.** Kaidah baku: penerapan **bukan pada Jumat sore** kecuali kritis, dan **jalur pemulihan wajib teruji** sebelum penerapan apa pun.

---

## 4. Kepemilikan Proses COBIT 2019

| Proses | Peran | Target Kapabilitas |
|---|---|---|
| BAI06 — Managed IT Changes | Owner | Level 3 |
| BAI07 — Managed IT Change Acceptance & Transitioning | Owner | Level 3 |
| DSS01 — Managed Operations | Owner | Level 3 |
| DSS04 — Managed Continuity | Owner | Level 3 |
| BAI10 — Managed Configuration | Owner | Level 3 |
| DSS03 — Managed Problems | Accountable (bersama Lead Developer) | Level 3 |

---

## 5. Pengendalian Internal (Key Controls)

| Kode | Kontrol | Bukti Audit |
|---|---|---|
| LV-C1 | Tidak ada penerapan ke produksi tanpa jalur pemulihan yang teruji (< 5 menit) | Runbook + log uji rollback |
| LV-C2 | Tidak ada go-live tanpa gerbang QA + persetujuan teknis + persetujuan CEO | Tanda tangan pada runbook + log |
| LV-C3 | Tidak ada perubahan tanpa catatan perubahan (nihil perubahan tak-terotorisasi) | Formulir permintaan perubahan |
| LV-C4 | Setiap layanan memiliki pemantauan & alerting sebelum go-live | Konfigurasi pemantauan + tangkapan layar dasbor |
| LV-C5 | Penerapan bukan Jumat sore kecuali kritis dengan alasan tercatat | Log penerapan + cap waktu |
| LV-C6 | Otomasi tanpa pencatatan (silent automation) dilarang | Log otomasi |
| LV-C7 | Pencadangan tervalidasi pemulihan (RPO/RTO terpenuhi) | Log uji pemulihan + catatan latihan DR |
| LV-C8 | Tiap unit kerja teknis non-trivial meninggalkan **engineering note** (ikut `kakashi/tools/eng-note-template.md`, arsip di `levi/notes/`) | Catatan engineering di `levi/notes/` + tautan di log |

---

## 6. Indikator Kinerja Utama (KPI)

| KPI | Target |
|---|---|
| Tingkat kegagalan perubahan (change failure rate) | Rendah (< 15%) |
| Waktu rata-rata pemulihan (MTTR) | Menurun antarperiode |
| Waktu pemulihan (rollback) | < 5 menit |
| Insiden berulang (akar sama) | **0** |
| Ketepatan waktu postmortem (≤ 48 jam) | 100% |
| Pemenuhan RPO/RTO pada uji pemulihan | 100% |

---

## 7. Penerapan Prinsip GCG (TARIF)

**Transparency** — setiap penerapan dan insiden terdokumentasi (runbook, postmortem); nihil perubahan tersembunyi. **Accountability** — satu penanggung jawab per rilis; kegagalan gerbang diakui secara terbuka tanpa melempar kesalahan. **Responsibility** — penegakan mandat internal (evidence-first, tanpa otomasi senyap, tanpa solusi tambal-sulam) dan standar eksternal (12-Factor, SRE). **Independency** — keberanian menolak penerapan berisiko sekalipun di bawah tekanan jadwal. **Fairness** — analisis pasca-insiden bersifat blameless, berfokus pada perbaikan sistem.

---

*Dokumen ini merupakan piagam peran dalam kerangka tata kelola TI tim. Perubahan material wajib disetujui CEO/Head of Product.*
