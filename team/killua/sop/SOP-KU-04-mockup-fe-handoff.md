# SOP-KU-04 — Mockup→FE Handoff

| | |
|---|---|
| **Kode** | SOP-KU-04 |
| **Pemilik** | Killua (Senior Frontend Engineer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Mandate Tata (kolaborasi, no throw-over-the-wall), [tools/mockup-handoff-template.md](../tools/mockup-handoff-template.md), [`02-RELATIONSHIPS.md`](../../02-RELATIONSHIPS.md) §4 |
| **COBIT** | BAI03 (Managed Solutions Build) |

## 1. Tujuan
Memastikan mockup dari Bulma **di-cek feasibility** sebelum di-impl — biar gak ada element infeasible yang bikin Bulma re-do mockup belakangan, dan impl-cost mahal di-surface pakai data (bukan ego) sebelum approve. Comply pasangan kolaborasi wajib **@killua ↔ @bulma**.

## 2. Ruang Lingkup
- **Berlaku:** tiap kali Bulma serahin mockup/spec visual buat di-impl.
- **Tidak berlaku:** revisi visual minor pas impl udah jalan (Bulma final say, Killua eksekusi); tweak yang gak ubah feasibility.

## 3. Definisi & Istilah
- **Feasibility** — apakah element mockup bisa di-impl dengan cost (waktu/bundle/perf) yang wajar di stack tim.
- **Impl-cost** — biaya implementasi: waktu, ukuran bundle, dampak perf (mis. LCP).
- **Push back (data-driven)** — tolak/ragu pakai angka konkret + tawarin alternatif, bukan "males/susah".
- **Final say** — Bulma pemegang keputusan visual akhir; Killua surface, Bulma putus.

## 4. Referensi
02-RELATIONSHIPS.md §4 (no throw-over-the-wall), mandate Tata anti-saingan + bahasa counterpart (design-speak), F-2 boomer-proof.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Feasibility audit mockup | Killua | @bulma | Killua | @kakashi |
| Keputusan visual final | — | @bulma | Killua | @lelouch |
| Impl setelah approve | Killua | Killua | @bulma | @kakashi |

## 6. Prosedur

### 6.1 Penerimaan mockup
- 6.1.1 Terima mockup + spec lengkap dari @bulma: section, component, responsive, microcopy, palette, asset.
- 6.1.2 **Cek kelengkapan:** ada referensi visual, palette token (mauve/sage/cream/gold — **0 coklat**), state (empty/error/loading), responsive ≥2 breakpoint? Kalau kurang → minta lengkapi (jangan asumsi).

### 6.2 Feasibility audit
- 6.2.1 Per element, nilai impl-cost: ada yang nambah bundle/perf signifikan (animation kompleks, font berat, image gede)?
- 6.2.2 **Decision point:** ada element impl-cost mahal tanpa value sepadan?
  - **Ya** → **push back ke @bulma pakai data** (cth: *"framer-motion ini bikin LCP +400ms, mau pertimbangin CSS animation aja?"*). Pakai design-speak, bukan jargon. Bulma putus.
  - **Tidak / udah disepakati** → lanjut.
- 6.2.3 Cek butuh **data**? → kontrak API ke @saitama harus disepakati dulu (jangan hardcode mock).

### 6.3 Approve & handoff (exit)
- 6.3.1 Catat hasil feasibility di [mockup-handoff-template](../tools/mockup-handoff-template.md): element → feasible? → catatan/alternatif.
- 6.3.2 **Exit criteria:** semua element feasible (atau alternatif disepakati Bulma) + asset siap. Baru mulai impl (SOP-KU-01).
- 6.3.3 Kalau pas impl ketemu kendala baru → **surface balik ke @bulma**, JANGAN diam-diam ganti spec (anti-pattern).

## 7. Pengecualian
- **Tata minta langsung (skip Bulma):** kalau Tata kasih arahan visual langsung, tetap log + sync Bulma biar mockup master gak drift.
- **Element eksperimental:** boleh impl di branch spike buat buktiin feasibility sebelum commit ke mockup.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Hasil feasibility audit | `log.md` (`**→ @bulma:**` mention) | Permanen |
| Push back + alternatif + keputusan Bulma | `log.md` + log Bulma (reply) | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Mockup di-redo krn infeasible | # mockup direvisi gara-gara baru ketahuan gak feasible pas impl | 0 |
| Silent spec change | # impl beda dari mockup tanpa notif Bulma | 0 |
| Feasibility check coverage | # mockup ber-feasibility-audit ÷ total mockup | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: feasibility framer-motion vs CSS Proyek-Contoh (ADR-001 Kakashi) |
