# SOP-KK-05 — Incident Root-Cause Analysis

| | |
|---|---|
| **Kode** | SOP-KK-05 |
| **Pemilik** | Kakashi (Lead Developer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ITIL Problem Management, [tools/rca-template.md](../tools/rca-template.md) |
| **COBIT** | DSS03 (Managed Problems) |

## 1. Tujuan
Mengubah satu insiden menjadi satu perbaikan permanen — temukan akar (bukan gejala), perbaiki sistemik, cegah berulang.

## 2. Ruang Lingkup
- **Berlaku:** bug severity S1/S2 (produksi/critical), atau output jelek bocor sampai ke Tata.
- **Tidak berlaku:** bug minor S3/S4 (cukup ticket biasa, tanpa RCA formal).

## 3. Definisi & Istilah
- **S1/S2** — severity tertinggi: down / data-risk / blocker mayor.
- **Containment** — tindakan darurat menahan dampak (rollback/hotfix) sebelum cari akar.
- **5 Whys** — tanya "kenapa" berulang (≈5×) sampai ketemu akar sistemik.

## 4. Referensi
ITIL Problem Management, Toyota 5 Whys, mandate anti-defensif (akui) + fix root (bukan band-aid) + no blame ping-pong.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Containment | area owner | Kakashi | @levi | Tata (kalau visible) |
| RCA & corrective action | Kakashi | Kakashi | @l, @levi, owner | Tata |

## 6. Prosedur

### 6.1 Respon
- 6.1.1 **Containment dulu** — rollback / hotfix untuk hentikan dampak (koord @levi). Stabilkan sebelum analisis.
- 6.1.2 Kalau **bocor ke Tata** → **akui langsung** ("gate gw bolong di X"), gak throw tim.

### 6.2 Analisis
- 6.2.1 Kumpulkan **fakta + bukti** (log, screenshot, kronologi).
- 6.2.2 Jalankan **5 Whys** via [rca-template](../tools/rca-template.md) sampai ketemu **akar sistemik** (bukan "si A salah").

### 6.3 Perbaikan
- 6.3.1 Tetapkan **corrective action** (fix root, bukan band-aid) + owner + due.
- 6.3.2 **Systemic fix** — update checklist/SOP/tool biar pola yang sama gak lolos lagi.
- 6.3.3 Save learning (ke `nami/lessons.md`).
- 6.3.4 **Exit criteria:** akar teridentifikasi + corrective action ada owner+due + checklist/SOP ter-update.

## 7. Pengecualian
- **Insiden lintas-disiplin:** RCA dipimpin bersama owner area; Kakashi tetap Accountable untuk closure.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| RCA report (RCA-NNN) | `log.md` | Permanen |
| Update checklist/SOP | dokumen terkait | Permanen |
| Learning | `nami/lessons.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Recurrence rate | # insiden berulang dengan akar sama | **0** |
| Time-to-containment | jam dari insiden → dampak berhenti | minimal |
| Corrective action closure | # action selesai tepat due ÷ total | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: RCA fake-stats v3 |
