# SOP-LL-06 — Backlog Grooming

| | |
|---|---|
| **Kode** | SOP-LL-06 |
| **Pemilik** | Lelouch (PM & IT Business Analyst) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Agile backlog refinement, INVEST, [tools/user-story-template.md](../tools/user-story-template.md), BABOK KA3 (Requirements Life Cycle Mgmt) |
| **COBIT** | BAI02 (Managed Requirements Definition) |

## 1. Tujuan
Menjaga backlog **rapi, ter-prioritas, dan ready-for-dev**: tiap story INVEST, ber-AC, traceable (RTM) — supaya saat sprint mulai, tim langsung bisa ngerjain tanpa re-clarify.

## 2. Ruang Lingkup
- **Berlaku:** backlog produk — sebelum sprint planning, atau saat backlog mulai berantakan (story stale/duplicate/orphan).
- **Tidak berlaku:** backlog teknis murni (tech-debt internal → Kakashi/owner area).

## 3. Definisi & Istilah
- **Grooming / refinement** — rapiin backlog: clarify, split, estimate, prioritas, buang stale.
- **Ready-for-dev** — story INVEST + AC jelas + dependency clear + estimate ada.
- **RTM** — Requirement Traceability Matrix: link requirement → sumber → spec → test.
- **Orphan requirement** — requirement tanpa sumber/parent (kandidat buang).
- **Stale** — story lama yang udah gak relevan.

## 4. Referensi
Scrum backlog refinement, INVEST, BABOK KA3 (maintain & trace requirement), mandate Tata (no scope creep, evidence-first).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Grooming backlog | Lelouch | Lelouch | @kakashi (estimate), @nami (kapasitas) | tim |
| Prioritas urutan | Lelouch (propose) | **Tata** (lock) | — | tim |
| Trace (RTM) | Lelouch | Lelouch | — | tim |

## 6. Prosedur

### 6.1 Review backlog
- 6.1.1 Scan semua story. Tandai **stale** (gak relevan), **duplicate**, **orphan** (tanpa parent requirement).
- 6.1.2 **Buang/arsip** stale + orphan (catat alasan — anti silent delete). Merge duplicate.

### 6.2 Refine story
- 6.2.1 Tiap story: cek **INVEST**. Kebesaran → **split** jadi Small. Gak Testable → tambah/perbaiki AC (link SOP-LL-04).
- 6.2.2 Pastikan **dependency clear** (story ini butuh apa duluan?).
- 6.2.3 **Estimate** (consult @kakashi kalau effort gak jelas).

### 6.3 Prioritas & trace
- 6.3.1 Re-prioritas pakai SOP-LL-03 (RICE/MoSCoW) kalau urutan berubah.
- 6.3.2 Update **RTM** — tiap story trace ke requirement/PRD-nya (kontrol LL-C6, anti drift/orphan).
- 6.3.3 Tandai **ready-for-dev** story yang lolos semua.
- 6.3.4 **Exit criteria:** backlog bersih (no stale/orphan/dup); top story INVEST + AC + estimate + ready; RTM ter-update; urutan ter-prioritas.

## 7. Pengecualian
- **Scope creep terdeteksi pas grooming:** kalau ada story baru yang nge-expand scope MVP tanpa lewat prioritas → **flag + balik ke SOP-LL-03**, jangan diem-diem masukin backlog aktif.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Backlog ter-groom | backlog / `prd/` | Living |
| RTM | `prd/` / log | Living |
| Story di-buang + alasan | `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Story ready saat sprint start | # story INVEST-pass ÷ total story top | ↑ |
| Re-clarify saat sprint | # story di-tanya ulang dev ÷ total | ↓ |
| Orphan/stale di backlog aktif | # requirement tanpa parent / stale | ≈ 0 |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
