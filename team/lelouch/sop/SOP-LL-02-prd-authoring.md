# SOP-LL-02 — PRD Authoring

| | |
|---|---|
| **Kode** | SOP-LL-02 |
| **Pemilik** | Lelouch (PM & IT Business Analyst) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | BABOK KA4 (Strategy Analysis), KA5 (Requirements Analysis & Design Definition), KA6 (Solution Evaluation), [tools/prd-template.md](../tools/prd-template.md) |
| **COBIT** | BAI02 (Managed Requirements Definition), APO02 (Managed Strategy) |

## 1. Tujuan
Menghasilkan **PRD-lite** yang problem-first, scannable, ber-success-metric, dan TRUE MVP — supaya tim tau **apa yang dibangun & kenapa** tanpa scope creep dan tanpa bloat.

## 2. Ruang Lingkup
- **Berlaku:** fitur/produk baru yang udah lewat elicitation (SOP-LL-01) dan di-greenlight buat dieksplor.
- **Tidak berlaku:** bug fix / tweak kecil (cukup story di backlog, SOP-LL-06).

## 3. Definisi & Istilah
- **PRD** — Product Requirements Document: "apa yang dibangun & kenapa".
- **JTBD** — Jobs-To-Be-Done: "When [situation], user wants to [motivation], so they can [outcome]".
- **MVP** — Minimum Viable Product: versi terkecil yang validate hipotesis.
- **Success metric** — Leading (signal awal) + Lagging (outcome) + Counter (penjaga jangan-rusak).
- **Non-goal** — yang **eksplisit** di luar scope (mencegah creep).

## 4. Referensi
BABOK KA4/KA5/KA6, Lean MVP, mandate Tata (F-1/F-2, evidence-first, bold key point, anti-bloat).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Draft PRD | Lelouch | Lelouch | @senku, @bulma, @kakashi | tim |
| Tech feasibility | @kakashi | @kakashi | Lelouch | tim |
| Sign-off scope (🟡) | — | **Tata** | Lelouch | tim |

## 6. Prosedur

### 6.1 Pra-syarat
- 6.1.1 Konfirmasi **probe SOP-LL-01 udah done** (kalau belum → balik ke elicitation). Bukti: log probe.

### 6.2 Analisis (BABOK KA4)
- 6.2.1 Tulis **problem statement** — masalah, **BUKAN solusi**. Sertakan bukti (data/research/pain quote).
- 6.2.2 **JTBD framing** + define **user & context** (who, when, current pain).
- 6.2.3 **Competitive scan** (min 3 kompetitor) — positioning + missing piece. Cari **lateral angle** (anti copy-paste). *Contoh: wishlist marketplace dari Shopee → ke wedding invitation = USP Proyek-Contoh.*

### 6.3 Design definition (BABOK KA5/KA6)
- 6.3.1 Definisikan **success metric**: leading + lagging + counter (kontrol LL-C2).
- 6.3.2 **Scope decision** — cut sampai TRUE MVP via MoSCoW (SOP-LL-03). Test: "kalau cuma boleh ship 1 thing, apa?". List **non-goal eksplisit**.
- 6.3.3 **Mini-Tata filter** — jalankan F-1 (kalau ada BE scope) / F-2 (kalau ada FE scope) / Universal (kontrol LL-C4).
- 6.3.4 **Draft PRD** pakai [prd-template](../tools/prd-template.md) — **bold key point**, max 1-2 halaman.

### 6.4 Validasi & handoff
- 6.4.1 **Pre-handoff QC** — checklist PRD (problem-first? metric lengkap? MVP? non-goal? filter? open question surfaced?).
- 6.4.2 Konsultasi **@kakashi feasibility** + **@nami timeline** sebelum lock (gak janji timeline sendiri).
- 6.4.3 **Decision point:** scope ini visible/define-what's-built? → **🟡 escalate sign-off Tata**. Setelah sign-off → handoff @bulma (design) + @kakashi (build) + @nami (delivery).
- 6.4.4 **Exit criteria:** PRD ber-metric, scope = TRUE MVP, filter pass, feasibility + timeline confirmed, Tata sign-off.

## 7. Pengecualian
- **PRD-lite buat marketing/landing only:** scope-fit rule — JANGAN spec fitur in-app dalem. *Contoh: PRD-lite landing Proyek-Contoh = marketing only, after-login features di-spec terpisah.*

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| PRD final | `prd/<feature>.md` (versioned) | Permanen |
| Feasibility + timeline confirm | `log.md` + mention | Permanen |
| Sign-off Tata | `log.md` / PRD status | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| PRD ber-metric lengkap | # PRD punya leading+lagging+counter ÷ total | 100% |
| Scope creep | # fitur nambah scope tanpa re-prioritas | ≈ 0 |
| PRD bloat | # PRD > 10 halaman | 0 |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: PRD-lite Landing Proyek-Contoh (2026-05-26) |
