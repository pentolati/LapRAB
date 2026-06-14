# Tool: MoM (Minutes of Meeting)

**Apa:** notulen rapat terstruktur — keputusan + rasional + rencana tindak (action item) + blocker + risk.
**Kapan dipake:** SOP-NM-01, tiap meeting/standup/sync/decision-meeting/retro.
**Aturan keras Nami:** tiap action item WAJIB **action-triple** (action + owner + due date). Keputusan WAJIB + **rationale**. **Bold** key decision + action item (Tata scanner).
**Output:** simpen di `team/mom/YYYY-MM-DD-<topic>.md`. Permanen, audit record (kontrol N1).

---

## QC sebelum distribute (jalanin semua)
- [ ] **Attendees listed**
- [ ] **Agenda items addressed**
- [ ] **Decisions explicit + rationale** (bold)
- [ ] **Action items**: action + owner + due (action-triple wajib)
- [ ] **Blockers documented** + severity
- [ ] **Next sync set** (kalau ada)
- [ ] **Distribution list** — tagged stakeholders relevan
- [ ] (Kalau ke Tata) **Pre-Tata Gate Kakashi pass**

---

## TEMPLATE (copy mulai sini)

```markdown
# MoM — <judul> · YYYY-MM-DD

**Date:** YYYY-MM-DD HH:MM
**Facilitator:** Nami (Project Manager)
**Type:** Stand-up / Sync / Decision meeting / Retro
**Status:** ACTIVE / LOCKED / CLOSED
**Attendees:** @tata, @lelouch, @bulma, @killua, ...
**Stakeholder:** @tata (CEO)

## TL;DR
- **<key point 1>**
- **<key point 2>**
- **<key point 3>**

## Agenda
1. ...
2. ...

## Discussion notes
### <Agenda item 1>
- ...

## Decisions
- ✅ **<Decision 1>** — rationale: ...
- ✅ **<Decision 2>** — rationale: ...

## Action items
| # | Action | Owner | Due | Status |
|---|---|---|---|---|
| 1 | **<action>** | @persona | YYYY-MM-DD | Open |

## Blockers
| # | Blocker | Severity | Owner | Mitigation |
|---|---|---|---|---|
| 1 | 🔴 <blocker> | High | @persona | ... |

## Risks
- ⚠️ <risk> — mitigasi: ...

## Next sync
<date / async>
```

---

## CONTOH TERISI (dari proyek contoh — interactive-invitation req workshop)

```markdown
# MoM — Interactive Invitation: Requirement Gathering · 2026-05-28

**Date:** 2026-05-28
**Facilitator:** Nami (Project Manager)
**Lead:** Lelouch (PM / IT Business Analyst)
**Type:** Requirement gathering workshop (stakeholder = Tata)
**Status:** Fase 1 LOCKED (8/8 component) — Fase 2 queued
**Attendees:** @nami (MoM), @lelouch (lead), @bulma, @saitama, @shikamaru, @senku, @killua (nyimak), @kakashi (gate standby)
**Stakeholder:** @tata (CEO)

## TL;DR
- Tata mau **2 tipe undangan digital** (interaktif + slide). **Interaktif duluan**, target gaptek-proof (F-2).
- Requirement digali **per area, satu-satu** — konten 8 clickable component DULU, dashboard Fase 2.
- **Fase 1 LOCKED 8/8** + 7 cross-cutting decision tercatat.

## Decisions
- ✅ **Probing dipecah per-fase** — rationale: scope RAKSASA, mandate Tata "satu-satu", hindari boil-the-ocean.
- ✅ **Tiap clickable component bisa on/off + editable user** — rationale: Tata konsisten minta config-driven; hindari hardcode → rework.
- ✅ **Gift registry buka tab baru** — rationale: alur balik ke undangan tetap mulus (UX Bulma).

## Action items
| # | Action | Owner | Due | Status |
|---|---|---|---|---|
| 1 | **Lead probing per-component (C1 dst)** | @lelouch | 2026-05-28 | ✅ Done (8/8) |
| 2 | **Catat decision tiap jawaban Tata ke MoM** | @nami | 2026-05-28 | ✅ Done |
| 3 | **Jadwalin probing Fase 2 (dashboard)** | @nami | Nunggu aba-aba Tata | Open |

## Risks
- ⚠️ **Scope RAKSASA** (8 component + dashboard + auth + 2 tipe) — mitigasi: cap per-fase, probing satu-satu.
- ⚠️ **Risk hardcode field** — mitigasi: arsitektur config-driven dari awal (lesson kandidat, watch di build).

## Next sync
Fase 2 (dashboard/settings) — async, nunggu aba-aba Tata.
```

> MoM ini beneran kejadian (lihat `nami/log.md` 2026-05-28). Tiap keputusan ada rationale, tiap action ada owner + due. Itu cara kerjanya — **MoM = memori keputusan, bukan transkrip ngalor-ngidul.**
