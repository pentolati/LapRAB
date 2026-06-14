# Tool: RAID Log

**Apa:** catatan hidup 4-kategori — **R**isk · **A**ssumption · **I**ssue · **D**ependency. Satu tempat buat semua "yang perlu diwaspadai" di project.
**Kapan dipake:** SOP-NM-03 (risk/issue mgmt) & SOP-NM-05 (blocker). Update tiap ada sinyal dari ACTIVITY/log.
**Beda 4 kategori (PENTING):**
- **Risk** = ketidakpastian **belum** terjadi (potensial). Punya probabilitas.
- **Issue** = masalah **sudah** terjadi (aktual). Bedanya dari risk: udah kejadian.
- **Assumption** = dianggap benar tanpa dibuktikan; kalau salah → jadi risk.
- **Dependency** = A nungguin B selesai dulu.
**Output:** rolling file (living), risk yang ke-skor → [risk-register](risk-register.md), blocker → [action-item-tracker](action-item-tracker.md).

---

## TEMPLATE (copy mulai sini)

```markdown
# RAID Log — <project>

## Risks (belum terjadi)
| ID | Date | Risk | Prob | Dampak | Mitigasi | Owner | Status |
|---|---|---|---|---|---|---|---|
| R1 | YYYY-MM-DD | <risk> | L/M/H | L/M/H | <mitigasi> | @persona | Open/Closed |

## Assumptions (dianggap benar)
| ID | Date | Assumption | Kalau salah → | Validasi | Status |
|---|---|---|---|---|---|
| A1 | YYYY-MM-DD | <asumsi> | <jadi risk apa> | <cara cek> | Open/Validated |

## Issues (sudah terjadi)
| ID | Date | Issue | Severity | Owner | Resolusi | Status |
|---|---|---|---|---|---|---|
| I1 | YYYY-MM-DD | <issue> | S1-S4 | @persona | <fix> | Open/Resolved |

## Dependencies (A nungguin B)
| ID | Date | Yang nunggu | Nungguin | Critical path? | Status |
|---|---|---|---|---|---|
| D1 | YYYY-MM-DD | @persona/task | @persona/task | Ya/Tidak | Open/Cleared |
```

---

## CONTOH TERISI (project contoh)

```markdown
# RAID Log — Project (contoh)

## Risks (belum terjadi)
| ID | Date | Risk | Prob | Dampak | Mitigasi | Owner | Status |
|---|---|---|---|---|---|---|---|
| R1 | YYYY-MM-DD | Scope creep — fitur RAKSASA → boil-the-ocean | H | H | Cap per-fase, probing satu-satu | @nami | Open (mitigated) |
| R2 | YYYY-MM-DD | Tim hardcode field padahal Tata mau on/off+editable → rework besar | M | H | Arsitektur config-driven dari awal | @kakashi/@saitama | Open (watch build) |
| R3 | YYYY-MM-DD | Over-iteration revisi UI (Tata bilang "kurang" terus) | M | M | Timeline cap 4 jam, gate strict | @nami | Closed (shipped) |

## Assumptions (dianggap benar)
| ID | Date | Assumption | Kalau salah → | Validasi | Status |
|---|---|---|---|---|---|
| A1 | YYYY-MM-DD | Angka di copy = standard pattern, gpp dipakai | Klaim numerik tanpa data → violate evidence-first | Cek verifiable-nya | ❌ Salah → jadi I1 |

## Issues (sudah terjadi)
| ID | Date | Issue | Severity | Owner | Resolusi | Status |
|---|---|---|---|---|---|---|
| I1 | YYYY-MM-DD | Klaim numerik tanpa data backing lolos ke Tata (evidence-first violation) | S2 | @killua | Replace verifiable claim + update Gate checklist | Resolved |

## Dependencies (A nungguin B)
| ID | Date | Yang nunggu | Nungguin | Critical path? | Status |
|---|---|---|---|---|---|
| D1 | YYYY-MM-DD | @bulma+@killua (impl) | @nami sintesa Lelouch+Senku | Ya | Cleared |
| D2 | YYYY-MM-DD | @kakashi gate | @killua impl selesai | Ya | Cleared |
```

> **Cara baca:** A1 (assumption "angka = standard pattern") ternyata **salah** → jadi I1 (issue klaim numerik tanpa data) → resolved + jadi lesson. Itu siklus RAID kerja: asumsi gak valid menetas jadi issue, issue di-fix + di-capture. **R1 di-mitigasi sebelum jadi krisis** (kontrol N3) — itu inti kerjaan Nami.
