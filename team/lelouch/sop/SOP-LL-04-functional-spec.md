# SOP-LL-04 — Functional Spec (Gherkin)

| | |
|---|---|
| **Kode** | SOP-LL-04 |
| **Pemilik** | Lelouch (PM & IT Business Analyst) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Gherkin (Given-When-Then), Agile/User Story (INVEST), [tools/gherkin-spec-template.md](../tools/gherkin-spec-template.md), [tools/user-story-template.md](../tools/user-story-template.md), BABOK KA5 |
| **COBIT** | BAI02 (Managed Requirements Definition) |

## 1. Tujuan
Mengubah PRD yang udah lock jadi **spesifikasi fungsional buildable**: user story + acceptance criteria **Gherkin (Given-When-Then)** yang testable, atomic, dan langsung bisa dikonsumsi @killua/@saitama (build) & @l (test) **tanpa balik nanya**.

## 2. Ruang Lingkup
- **Berlaku:** fitur yang PRD-nya udah lock & butuh detail behavior + acceptance criteria.
- **Tidak berlaku:** story trivial yang AC-nya obvious (cukup di backlog SOP-LL-06).

## 3. Definisi & Istilah
- **User story** — "As a [role], I want [goal], so that [benefit]".
- **INVEST** — Independent · Negotiable · Valuable · Estimable · Small · Testable.
- **Gherkin / Given-When-Then** — Given (kondisi awal) → When (aksi) → Then (hasil yang diharapkan).
- **Acceptance Criteria (AC)** — syarat story dianggap selesai & benar; basis test L.
- **Atomic** — 1 AC = 1 perilaku (gak nampung banyak "dan").

## 4. Referensi
Gherkin/Cucumber, INVEST, mandate Tata (auto-everything EXPLICIT, Data SACRED di data requirement, F-1/F-2).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Tulis story + AC Gherkin | Lelouch | Lelouch | @kakashi (feasibility), @l (testability) | tim |
| Data requirement | Lelouch | Lelouch | @saitama, @shikamaru | tim |
| Validasi testable | @l | Lelouch | — | tim |

## 6. Prosedur

### 6.1 Story (BABOK KA5)
- 6.1.1 Tulis **user story** per kapabilitas: "As a [role], I want [goal], so that [benefit]".
- 6.1.2 Cek **INVEST** tiap story. Gak lolos (mis. story kebesaran) → **split** sampai Small + Testable.

### 6.2 Acceptance criteria (Gherkin)
- 6.2.1 Tulis **AC Given-When-Then** per story — **atomic** (1 perilaku/AC). (kontrol LL-C5)
- 6.2.2 Cover **main scenario + alternate flow + exception flow** (link use case / BPMN SOP-LL-05).
- 6.2.3 **Auto-behavior?** → mandate Tata: WAJIB AC eksplisit yang nyebut **notif + audit log**, NO silent. *Contoh Proyek-Contoh: auto-RSVP "hadir" & auto-release reserve 1 jam → AC harus eksplisit ada notif + log.*

### 6.3 Data & non-functional
- 6.3.1 **Data requirement** — entity + field + type + constraint. Cek **F-1**: soft delete, audit col, no overwrite (Data SACRED).
- 6.3.2 **NFR** — performance, security (link assessment @senku kalau relevan), a11y.
- 6.3.3 **Mini-Tata filter** terisi di spec (kontrol LL-C4).

### 6.4 Validasi & handoff
- 6.4.1 **Self-QC**: tiap AC testable? atomic? edge & error path ada?
- 6.4.2 Handoff: @l (AC → test scenario), @saitama/@shikamaru (data req → schema), @bulma (flow → UX).
- 6.4.3 **Exit criteria:** semua story INVEST-pass; AC Gherkin atomic & testable; main+alt+exception covered; auto-behavior eksplisit; data req ber-F-1 check.

## 7. Pengecualian
- **Spike / unknown behavior:** kalau behavior belum jelas (butuh research), buka POC @senku dulu — jangan paksa AC karangan. AC nyusul setelah POC.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Functional spec (story + AC) | `prd/<feature>-spec.md` | Permanen |
| Data requirement | spec §data | Permanen |
| Handoff ke L/BE/DBA | `log.md` + mention | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| AC testable & atomic | # AC lolos cek L ÷ total AC | ↑ (target ~100%) |
| Spec balik-nanya | # spec yang di-konsumsi tanpa re-clarify ÷ total | ↑ |
| Auto-behavior eksplisit | # auto-behavior ber-AC notif+log ÷ total auto | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: Functional Spec template + auto-behavior Proyek-Contoh (auto-RSVP, auto-release) |
