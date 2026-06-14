# SOP-SK-04 — Technology Scouting

| | |
|---|---|
| **Kode** | SOP-SK-04 |
| **Pemilik** | Senku (R&D Engineer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Tech radar (Adopt/Trial/Assess/Hold), [tools/6q-critical-filter.md](../tools/6q-critical-filter.md) |
| **COBIT** | APO04 (Managed Innovation) |

## 1. Tujuan
Mengevaluasi kandidat teknologi baru (library, vendor, pattern, integrasi) secara objektif lewat **6Q critical filter**, supaya adopsi berbasis substansi & evidence — **bukan hype**. Hasilnya: **TADR** (Tech Adoption Decision Record).

## 2. Ruang Lingkup
- **Berlaku:** tiap kandidat tech yang dipertimbangkan masuk stack/produk (dependency baru, vendor, pattern arsitektur, integrasi pihak ketiga).
- **Tidak berlaku:** utility kecil yang reversible & lokal tanpa lock-in (cukup judgement dev di code review).

## 3. Definisi & Istilah
- **Tech radar** — status teknologi: **Adopt** (pakai), **Trial** (coba terbatas), **Assess** (riset dulu), **Hold** (jangan/usang).
- **Community health** — sinyal sustainability: stars, last commit cadence, jumlah contributor, release rhythm.
- **Vendor lock-in** — ketergantungan yang mahal/sulit di-undo.
- **TADR** — catatan keputusan adopsi/refute, format mirip ADR + governance section.

## 4. Referensi
Tata mandate (critical thinking continuous, anti adopt hype), Kakashi reversibility framework (Type-1/Type-2), evidence hierarchy.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Evaluasi & TADR | Senku | Senku | @kakashi (feasibility/reversibility), @saitama (BE fit) | tim |
| Keputusan adopsi (produk) | Senku (recommend) | **Tata** | @kakashi, @lelouch | tim |
| Type-1 lock | — | **Tata** | @kakashi (bruce+archrival) | tim |

## 6. Prosedur

### 6.1 Intake
- 6.1.1 Catat kandidat: nama, versi, **license** (MIT/Apache/GPL/Commercial), link.
- 6.1.2 Audit **community health** — stars, last commit, contributor count, release cadence. Repo mati = sinyal merah.
- 6.1.3 Set status awal tech radar: **Assess**.

### 6.2 6Q critical filter
- 6.2.1 Lewatkan kandidat via **6 pertanyaan** ([6q-critical-filter](../tools/6q-critical-filter.md)):
  1. Solve real problem? (trace ke user pain — bukan "cool tech")
  2. Sustainable? (maintenance, lock-in, community, longevity)
  3. Fit stack? (React 18, Chakra v2, Fauxbase, migration cost)
  4. **Compliant?** (UU PDP/GDPR/PCI/ISO — kalau sentuh data/payment → trigger SOP-SK-03)
  5. Business-fit? (ROI, unit economics, customer impact)
  6. **Reversible?** (Type-1 → escalate + bruce/archrival; Type-2 → cepat)
- 6.2.2 **Exit kalau Q1 = ❌** (solution-looking-for-problem) → **refute**, stop. Gak usah lanjut filter.

### 6.3 Keputusan & TADR
- 6.3.1 **Build vs Buy vs Wait:** build kalau core + no vendor mature + < 1 dev-month; buy kalau commodity + vendor mature + > 3 dev-month; else wait.
- 6.3.2 Tulis **TADR** (Tech Adoption Decision Record) di `adr/NNN-*.md` — context, candidate, 6Q filter table, governance/compliance assessment, alternatives, recommendation, constraint.
- 6.3.3 Update **tech radar** ring (Adopt/Trial/Assess/Hold).
- 6.3.4 **Decision point:** Type-1 (lock vendor/pattern/data-shape)? → **escalate 🔴 ke Tata** via @kakashi (bruce + archrival), tunggu sign-off. Type-2 → rekomendasi 🟡.
- 6.3.5 **Exit criteria:** 6Q filter lengkap + governance/compliance assessed + verdict (adopt/constraint/refute/defer) + TADR tersimpan + radar ter-update.

## 7. Pengecualian
- **Tech udah dipakai di project lain (proven internal):** boleh fast-track, **tapi tetap cek compliance** kalau context data beda.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| TADR | `adr/NNN-*.md` | Permanen |
| Tech radar | `log.md` / living doc | Living |
| 6Q filter verdict | TADR | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Hype-adopt rate | # tech diadopsi tanpa 6Q filter | **0** |
| TADR coverage | # adopsi ber-TADR ÷ total adopsi | 100% |
| Adopsi yang di-revert < 3 bulan | # tech ditarik balik cepat | minimal |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: AI feature → defer post-PMF (premature, Type-1 positioning) |
