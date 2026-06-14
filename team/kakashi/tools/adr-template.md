# Tool: Architecture Decision Record (ADR)

**Apa:** catatan 1-halaman tiap keputusan arsitektur/teknis penting — apa yang dipilih, kenapa, alternatif apa yang dibuang.
**Kapan dipake:** keputusan **Type-1 (irreversible)** — schema, public API, security, vendor lock, ganti stack — ATAU pola yang mau di-lock lintas codebase. Type-2 (reversible) gak wajib ADR.
**Kenapa:** Transparency (GCG) + audit trail (COBIT APO03/MEA02). Keputusan gak boleh "gelap" — harus bisa ditelusur.
**Output:** simpen di `team/kakashi/adr/NNN-<judul>.md` (NNN = nomor urut). Permanen.

---

## TEMPLATE (copy mulai sini)

```markdown
# ADR-NNN: <judul keputusan>

**Author:** Kakashi · **Status:** Proposed / Accepted / Deprecated / Superseded
**Date:** YYYY-MM-DD · **Consulted:** @persona1, @persona2 · **Reversibility:** Type 1 / Type 2

## Context
<situasi yang trigger keputusan — 1 paragraf>

## Decision
<apa yang dipilih — 1 paragraf>

## Alternatives considered
| Option | Pro | Con | Verdict |
|---|---|---|---|
| A | ... | ... | ditolak: ... |
| B (chosen) | ... | ... | ✅ dipilih |
| C | ... | ... | ditolak: ... |

## Consequences
- Positif: ...
- Trade-off/negatif: ...

## Reversibility & rollback
- Type 1/2 · Rollback plan: ...

## Escalation
- [ ] Type-1 → sudah di-escalate & di-sign-off Tata (tanggal: ...)

## Open questions / follow-up
- ...
```

---

## CONTOH TERISI (dari proyek contoh)

```markdown
# ADR-001: Hero animation pakai CSS, bukan framer-motion

**Author:** Kakashi · **Status:** Accepted
**Date:** 2026-05-26 · **Consulted:** @bulma, @killua · **Reversibility:** Type 2

## Context
Bulma minta hero landing ada fade-in animation. Killua nanya: pakai framer-motion
atau CSS? framer-motion nambah ~30KB ke bundle buat 1 efek fade.

## Decision
Pakai CSS transition/keyframe aja untuk fade-in hero. framer-motion ditahan dulu
sampai ada kebutuhan animation kompleks (orchestration, gesture, layout animation).

## Alternatives considered
| Option | Pro | Con | Verdict |
|---|---|---|---|
| framer-motion | API enak, orchestration powerful | +30KB bundle buat 1 fade | ditolak: overkill |
| CSS only (chosen) | 0 byte tambahan, cukup buat fade | manual kalau nanti kompleks | ✅ dipilih |

## Consequences
- Positif: bundle tetep ramping (sejalan optim hero 1.6MB→210KB)
- Trade-off: kalau nanti butuh animation kompleks, re-introduce framer-motion (Type 2, gampang)

## Reversibility & rollback
- Type 2 · tinggal install framer-motion kalau kebutuhan naik

## Escalation
- [ ] N/A (Type 2, gak perlu sign-off Tata)

## Open questions / follow-up
- Re-evaluate kalau v4 butuh scroll-driven animation
```

> Catatan: di sprint v4, framer-motion akhirnya dipake buat fade-up (kebutuhan naik) — persis skenario "re-introduce" yang diprediksi. ADR di-superseded sama ADR baru. Itu cara kerjanya.
