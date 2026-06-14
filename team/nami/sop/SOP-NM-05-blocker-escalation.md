# SOP-NM-05 — Blocker Escalation

| | |
|---|---|
| **Kode** | SOP-NM-05 |
| **Pemilik** | Nami (Project Manager) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | PMBOK (Risk/Comm Mgmt), [tools/raid-log.md](../tools/raid-log.md), [tools/action-item-tracker.md](../tools/action-item-tracker.md), RELATIONSHIPS §3 (jalur eskalasi) |
| **COBIT** | BAI11 (Managed Projects), MEA01 (Performance Monitoring) |

## 1. Tujuan
Detect blocker **awal**, fasilitasi penyelesaian secepat mungkin, dan **escalate ke pihak yang tepat** kalau gak resolved dalam 24 jam — supaya blocker gak ke-bury diam-diam jadi krisis.

## 2. Ruang Lingkup
- **Berlaku:** apapun yang menghentikan progress persona (teknis, scope, dependency, resource).
- **Tidak berlaku:** "stuck" teknis < 2 jam (itu Pair/Unblock Kakashi SOP-KK-04 dulu) — Nami masuk kalau eskalasi delivery diperlukan.

## 3. Definisi & Istilah
- **Blocker** — hal yang menghentikan progress total (urgensi tinggi).
- **Direct-connect** — fasilitasi sync langsung antara yang ke-block dan yang bisa unblock.
- **Escalation ladder** — urutan eskalasi: diagnose → direct-connect → pihak berwenang.

## 4. Referensi
PMBOK Risk & Communication Mgmt, [RELATIONSHIPS §3](../../02-RELATIONSHIPS.md) jalur eskalasi, mandate Tata (surface awal, anti-hide).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Detect & diagnose blocker | Nami | Nami | persona ke-block | — |
| Fasilitasi unblock | Nami | owner blocker | unblocker | — |
| Escalate (>24 jam) | Nami | owner area | @kakashi (teknis)/@lelouch (produk) | Tata |

## 6. Prosedur

### 6.1 Deteksi (awal)
- 6.1.1 **Trigger:** log persona nyebut "stuck/blocked/nungguin X", ATAU STATUS flag, ATAU silent > 2 hari padahal in_progress, ATAU dependency clash di RAID.
- 6.1.2 Catat ke [raid-log](../tools/raid-log.md) (Issue/Dependency) + [action-item-tracker](../tools/action-item-tracker.md).

### 6.2 Diagnosis
- 6.2.1 **Apa yang ngeblok?** (teknis / scope / dependency / resource).
- 6.2.2 **Siapa yang bisa unblock?** — petakan owner solusi.

### 6.3 Resolusi & eskalasi
- 6.3.1 **Direct-connect** — fasilitasi sync antara ke-block & unblocker (mention `@` di log keduanya).
- 6.3.2 **Decision point — domain:**
  - Teknis → @kakashi (lead dev / SOP-KK-04).
  - Scope/prioritas → @lelouch → Tata.
  - Slip jadwal/resource → rekomendasi re-plan 🟡 → Tata.
- 6.3.3 **Decision point — waktu:** gak resolved dalam **24 jam** → **escalate** ke pihak berwenang (jangan biarin grinding diam). (kontrol N4)
- 6.3.4 Document tiap step di log + MoM kalau ada.
- 6.3.5 **Exit criteria:** blocker resolved ATAU ter-escalate dengan owner+due jelas; ke-record di RAID + tracker.

## 7. Pengecualian
- **Blocker S1 (project-halting / Tata-visible impact):** escalate **same-day**, gak nunggu 24 jam.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Blocker entry | [tools/raid-log.md](../tools/raid-log.md) + tracker | Living |
| Catatan escalation | `nami/log.md` + MoM | Permanen |
| Blocker yang jadi lesson | `nami/lessons.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Mean-time-to-escalate | rata-rata jam detect → escalate | < 24 jam |
| Blocker ke-bury (gak pernah ke-surface) | # blocker yang baru ketauan pas krisis | **0** |
| Blocker closure | # blocker resolved ÷ total | ↑ |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
