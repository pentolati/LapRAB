# SOP-NM-06 — Lessons-Learned Capture

| | |
|---|---|
| **Kode** | SOP-NM-06 |
| **Pemilik** | Nami (Project Manager) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | PMBOK (Closing — lessons), PRINCE2 (lessons log), [tools/lessons-framework.md](../tools/lessons-framework.md) |
| **COBIT** | MEA01 (Performance & Conformance Monitoring) |

## 1. Tujuan
Mengubah **pola kelemahan tim** jadi **memori institusional** — pattern observed → root cause → recommendation → owner follow-up — supaya tim gak ngulang kesalahan yang sama. (Mandate Tata: spot kelemahan tim, turn into lesson learned.)

## 2. Ruang Lingkup
- **Berlaku:** pattern berulang (slip / quality / komunikasi / burnout / conflict), insiden, sprint close/retro.
- **Tidak berlaku:** kejadian one-off tanpa pola (catat di log aja, belum jadi lesson).

## 3. Definisi & Istilah
- **Pattern** — perilaku/kejadian yang **berulang** (bukan sekali). Nami observe 5 tipe (§6.1).
- **Root cause** — akar sistemik kenapa pattern muncul (bukan "si A salah").
- **Lesson learned** — kombinasi pattern + root cause + recommendation + owner, disimpan permanen.

## 4. Referensi
PMBOK Closing (lessons learned register), PRINCE2 lessons log, mandate Tata (anti-defensif fix root, institutional memory), SOP-KK-05 §6.3.3 (RCA juga save ke `nami/lessons.md`).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Observe pattern | Nami | Nami | — | — |
| Tulis lesson | Nami | Nami | persona terkait | tim |
| Eksekusi recommendation | owner follow-up | Nami (track) | @kakashi (kalau update SOP/checklist) | tim |

## 6. Prosedur

### 6.1 Observasi (5 pattern type)
- 6.1.1 Scan log + ACTIVITY + timesheet untuk **5 tipe pattern**:
  - **a. Slip pattern** — persona X estimate optimistik > 30% → biasa overcommit.
  - **b. Quality pattern** — feature dari X sering bocor jelek ke Tata → gate miss?
  - **c. Komunikasi pattern** — handoff X→Y selalu butuh re-clarify → spec kurang clear?
  - **d. Burnout pattern** — X silent > 2 hari padahal in_progress → stuck/tired?
  - **e. Conflict pattern** — X↔Y blame ping-pong di log → saingan ego?
- 6.1.2 **Decision point:** ini **pattern (berulang)** atau **one-off**? One-off → log aja, exit. Pattern → lanjut.

### 6.2 Analisis & tulis
- 6.2.1 Rumuskan **root cause hypothesis** (akar sistemik, bukan nyalahin orang).
- 6.2.2 Susun **recommendation** actionable + **owner follow-up**.
- 6.2.3 Tulis ke `nami/lessons.md` pakai [lessons-framework](../tools/lessons-framework.md): `## YYYY-MM-DD — [Title]` + Pattern observed / Root cause / Recommendation / Owner.

### 6.3 Tindak lanjut (exit)
- 6.3.1 Kalau recommendation = update SOP/checklist → koord @kakashi (cth: tambah item Pre-Tata Gate).
- 6.3.2 Track owner follow-up via [action-item-tracker](../tools/action-item-tracker.md).
- 6.3.3 **Exit criteria:** lesson tertulis lengkap (4 field) + owner follow-up ada + (kalau perlu) SOP/checklist ter-update.

## 7. Pengecualian
- **Lesson sensitif (kinerja individu):** framing pada **sistem/proses**, bukan nge-blame orang (TARIF Fairness). Kalau menyangkut individu spesifik → diskusi dengan owner-nya dulu, jangan publish blaming.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Lesson learned | `nami/lessons.md` | **Permanen** (institutional memory) |
| Follow-up action | [tools/action-item-tracker.md](../tools/action-item-tracker.md) | Rolling |
| Update SOP/checklist | dokumen terkait (cth kakashi/tools) | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Pattern ke-tangkap | # pattern jadi lesson ÷ pattern ter-observe | ↑ |
| Recurrence pattern lama | # pattern lama berulang setelah ada lesson | ↓ |
| Recommendation closure | # recommendation dieksekusi ÷ total | ↑ |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: lesson fake-stats 2026-05-27 (evidence-first violation → update Pre-Tata Gate) |
