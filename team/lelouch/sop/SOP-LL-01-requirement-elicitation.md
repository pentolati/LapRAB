# SOP-LL-01 — Requirement Elicitation

| | |
|---|---|
| **Kode** | SOP-LL-01 |
| **Pemilik** | Lelouch (PM & IT Business Analyst) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | BABOK KA1 (Planning & Monitoring), KA2 (Elicitation & Collaboration), mandate Tata (probe-before-strategic) |
| **COBIT** | BAI02 (Managed Requirements Definition) |

## 1. Tujuan
Menggali kebutuhan yang **benar** dari stakeholder **sebelum** deliverable strategic dibuat, supaya gak ada doc yang nyasar arah & harus diulang dari 0. **Probe Tata via AskUserQuestion WAJIB** — meski Tata bilang "langsung kerjain".

## 2. Ruang Lingkup
- **Berlaku:** semua deliverable strategic — PRD, proposal, requirement gathering fitur, functional spec besar.
- **Tidak berlaku:** klarifikasi sepele yang reversible & gak define scope (cukup tanya 1 baris, gak perlu probe terstruktur).

## 3. Definisi & Istilah
- **Elicitation** — proses "menggali" requirement dari stakeholder (probe, interview, workshop).
- **Strategic deliverable** — output yang define *apa yang dibangun* atau arah produk (🟡/🔴).
- **AskUserQuestion probe** — kasih Tata 3-4 keputusan paling impactful (audience, goal, scope, success metric) lewat opsi visual/table — bukan tanya teknis ribet.
- **Stakeholder map** — pemetaan power/interest pihak terkait.

## 4. Referensi
BABOK KA1/KA2 (plan elicitation + collaborate), JTBD framing, mandate Tata: "Probe via AskUserQuestion sebelum deliverable strategic — meskipun dia bilang langsung kerjain."

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Rencana elicit + stakeholder map | Lelouch | Lelouch | — | tim |
| Probe Tata (AskUserQuestion) | Lelouch | Lelouch | — | Tata (decision-maker) |
| Interview user / workshop | Lelouch | Lelouch | @senku (research), @bulma (UX) | tim |
| Lock requirement | Lelouch | **Tata** (sign-off scope) | @kakashi (feasibility) | tim |

## 6. Prosedur

### 6.1 Plan (BABOK KA1)
- 6.1.1 Identifikasi **stakeholder** + power/interest (minimal: Tata, target user, business owner).
- 6.1.2 Pilih **metode elicit** per stakeholder (probe AskUserQuestion buat Tata; interview/research buat user).
- 6.1.3 **Decision point:** ini deliverable strategic? Kalau **ya → probe WAJIB** (lanjut 6.2). Kalau sepele/reversible → exit, cukup tanya langsung.

### 6.2 Probe Tata (BABOK KA2) — WAJIB
- 6.2.1 Susun **3-4 pertanyaan paling impactful** (audience, goal, scope boundary, success metric) — format opsi visual/table, **bukan teknis ribet**.
- 6.2.2 Ajukan via **AskUserQuestion**. Tunggu jawaban — **gak boleh asumsi**.
- 6.2.3 Catat jawaban + rationale ke `log.md` (bukti kontrol LL-C1).

### 6.3 Gali detail & validasi
- 6.3.1 Untuk fitur kompleks: gali **satu-satu per komponen** (field konten, layout, behavior, edge case). *Contoh: Interactive Invitation — 8 clickable component diprobe berurutan foundation→engagement→USP.*
- 6.3.2 Jalankan **mini-Tata filter** sambil gali (F-2 BOOMER-PROOF, Universal reuse, evidence-first).
- 6.3.3 **Present back** ke stakeholder, konfirmasi, **lock**.
- 6.3.4 **Exit criteria:** semua keputusan impactful ke-probe + ke-lock; ada catatan rationale; flag auto-behavior/POC/pricing di-surface ke owner terkait.

## 7. Pengecualian
- **Tata eksplisit jawab "skip probe, gw udah yakin X":** boleh skip, **tapi catat di log** bahwa Tata waive probe (tetap auditable). Default tanpa pernyataan ini = **probe**.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Probe + jawaban + rationale | `log.md` | Permanen |
| Requirement lock (per komponen) | MoM / `prd/` | Permanen |
| Flag (auto-behavior/POC/pricing) | `log.md` + mention owner | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Probe-coverage strategic | # deliverable strategic di-probe ÷ total | 100% |
| Requirement rework | # requirement diulang krn salah arah ÷ total | ↓ tiap periode |
| Lock-tanpa-ulang | # requirement lock yang gak balik dibongkar | ↑ |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: Interactive Invitation Fase 1 (8 component LOCKED 2026-05-28) |
