# SOP-NM-04 — Sprint / Iteration Tracking

| | |
|---|---|
| **Kode** | SOP-NM-04 |
| **Pemilik** | Nami (Project Manager) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Agile/Scrum, PMBOK (Schedule Mgmt), [tools/action-item-tracker.md](../tools/action-item-tracker.md), [tools/status-report-template.md](../tools/status-report-template.md) |
| **COBIT** | BAI11 (Managed Projects) |

## 1. Tujuan
Menjaga **gambaran kemajuan terkini (live snapshot)** seluruh persona — siapa ngerjain apa, %, due, blocker — supaya **briefing 30-detik selalu ready** dan slip ke-detect awal.

## 2. Ruang Lingkup
- **Berlaku:** sprint/iterasi aktif, tracking harian, sprint planning, retro.
- **Tidak berlaku:** periode idle total (no active task) — cukup STATUS.md "idle".

## 3. Definisi & Istilah
- **Sprint** — iterasi kerja pendek dengan scope yang di-commit di awal.
- **Snapshot** — potret state proyek: lagi jalan / stuck / delivered / risk.
- **Capacity** — seberapa banyak kerja yang bisa di-handle tim periode itu.
- **Always-on briefing** — mandate Tata: siap kasih update 30-detik tanpa scramble.

## 4. Referensi
Agile/Scrum (sprint, stand-up, retro), PMBOK Schedule Management, mandate Tata (always-on briefing, status jujur), GOVERNANCE §4 (update flow).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Maintain snapshot + STATUS.md | Nami | Nami | semua persona | Tata |
| Sprint planning | Nami | Nami | @lelouch (prioritas), tim (estimasi) | Tata |
| Re-plan timeline/resource | Nami (rekomendasi) | **Tata** | tim | — |

## 6. Prosedur

### 6.1 Daily discipline (harian / saat ada activity)
- 6.1.1 **Skim ACTIVITY feed** last 10 entry → identify pattern.
- 6.1.2 **Skim log persona aktif** → apa lagi/baru selesai.
- 6.1.3 Update **STATUS.md** tiap persona (status + lagi ngerjain apa + waktu).
- 6.1.4 **Update mental snapshot**: lagi-jalan (siapa/%/due) · stuck (siapa/why/unblocker) · delivered (sejak last) · gap/conflict · risk growing.
- 6.1.5 **Update log + timesheet Nami sendiri** (lead by example — kontrol N5).

### 6.2 Briefing prep (always-on)
- 6.2.1 Format 30-detik siap kapanpun: `[project] · [🟢🟡🔴] · lagi-jalan · last-shipped · stuck · next · risk`.
- 6.2.2 Kalau Tata drill-down → jawab dari mental snapshot, **jangan scramble**.

### 6.3 Sprint planning
- 6.3.1 Backlog groom bareng @lelouch — prioritas confirmed.
- 6.3.2 **Capacity check** — siapa available kapan.
- 6.3.3 Estimation kolaboratif dengan tim.
- 6.3.4 **Commit sprint scope eksplisit** + risk/dependency mapping.
- 6.3.5 **Decision point:** scope > capacity? → **rekomendasi re-plan 🟡 ke Tata** (jangan over-commit sendiri).

### 6.4 Tracking & retro (exit)
- 6.4.1 Tracking via [action-item-tracker](../tools/action-item-tracker.md) — open/in-progress/done + due.
- 6.4.2 Sprint close → retro (keep/change/start) → feed ke SOP-NM-06 (lessons).
- 6.4.3 **Exit criteria:** snapshot akurat (status = realita), briefing ready, action item ter-track.

## 7. Pengecualian
- **Scope creep mid-sprint dari Tata:** surface trade-off ("swap Y atau extend?") — Tata putus (§ Decision Framework PLAYBOOK §5.2).
- **Persona silent > 2 hari padahal in_progress:** trigger blocker check (SOP-NM-05) — bisa stuck/burnout.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Snapshot board | `team/STATUS.md` + `team/ACTIVITY.md` | Living |
| Action item tracker | [tools/action-item-tracker.md](../tools/action-item-tracker.md) | Rolling |
| Catatan sprint/retro | `nami/log.md` + MoM | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Akurasi snapshot | # status keliru vs realita ÷ total | minimal |
| Briefing readiness | siap 30-detik tanpa scramble? | selalu ya |
| Over-commit sprint | # sprint scope > capacity tanpa re-plan flag | 0 |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: pecah interactive-invitation jadi Fase 1/Fase 2 |
