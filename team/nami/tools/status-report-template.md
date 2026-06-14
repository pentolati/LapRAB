# Tool: Status Report

**Apa:** laporan status delivery — apa shipped, in-progress, blocked, risk, dan apa yang Tata perlu putuskan.
**Kapan dipake:** SOP-NM-02, sprint end / Tata minta / cadence rutin.
**Aturan keras Nami:** **status color jujur** (gak hijau kalau realita kuning) · **evidence-backed** (link bukti) · **ask explicit** · **anti-bloat** (max 1 halaman weekly). Report jalan enak = scannable.
**Output:** `nami/status/YYYY-WW.md` atau `nami/log.md`. Buat exec → `lucius.document(format='pdf')`.

---

## Report readability rules (Tata mandate "jalan enak")
- **TL;DR 3 bullet** di top — bold key point.
- **Tabel > paragraph** untuk status/comparison.
- **Color emoji** (🟢🟡🔴) — instant scan.
- **Bold key number** — angka penting jangan plain.
- **Action item**: owner + due + status (triple wajib).
- **Max 1 halaman** weekly; detail di link.
- **Scrollable mobile** — Tata kadang baca di HP.
- **Anti-bloat:** skip filler, basa-basi, recap data, jargon.

---

## TEMPLATE (copy mulai sini)

```markdown
# Status Report — Week of YYYY-MM-DD

**Owner:** Nami · **Audience:** @tata + stakeholder
**Status overall:** 🟢 / 🟡 / 🔴

## TL;DR
- **<key shipped>**
- **<key in-progress / risk>**
- **<ask>**

## Shipped this week
- ✅ <feature> — by @persona — [link/evidence]

## In progress
| Item | Owner | Status | Due |
|---|---|---|---|
| <item> | @persona | 🟡 60% | YYYY-MM-DD |

## Blockers
| # | Blocker | Severity | Owner | Mitigation |
|---|---|---|---|---|

## Risks
- ⚠️ <risk>

## Decisions needed (from @tata)
- [ ] <decision 1>

## Metric snapshot (kalau ada)
- <metric>: X (vs target Y)

## Next focus
- <item>
```

---

## CONTOH TERISI (dari proyek contoh — kickoff landing v4, briefing snapshot)

```markdown
# Status Report — Proyek-Contoh, Week of 2026-05-27

**Owner:** Nami · **Audience:** @tata
**Status overall:** 🟡 (v3 shipped, v4 revision in-progress)

## TL;DR
- **Landing v3 LIVE** di :5252, Kakashi-gated PASS, Tata approve gold accent.
- **v4 revision jalan** — Lelouch+Senku analysis parallel → 7 action item P1/P2/P3.
- **Ask:** approve scope severity v4 (refinement, bukan rework) + go-live sign-off setelah gate.

## Shipped this week
- ✅ Landing v3 — by @killua (live :5252) — gate PASS @kakashi
- ✅ Gap analysis v3 — by @lelouch (mini-Tata filter)
- ✅ Competitor research — by @senku (10+ source)

## In progress
| Item | Owner | Status | Due |
|---|---|---|---|
| Replace fake Stats → verifiable | @bulma→@killua | 🟡 P1 | 2026-05-27 |
| WhatsApp prominence + framer-motion fade-up | @killua | 🟡 P1 | 2026-05-27 |
| FAQ refine + CTA anchor | @killua | 🟡 P2 | 2026-05-27 |

## Risks
- ⚠️ **Over-iteration** (v3 udah pass, v4 bisa iterasi infinite) — mitigasi: **timeline cap 4 jam total**, gate strict.
- ⚠️ **Scope creep** ke after-login — mitigasi: scope statement lock landing-only.

## Decisions needed (from @tata)
- [ ] Approve v4 scope severity (MEDIUM — 3 quick wins P1)
- [ ] Go-live sign-off setelah Kakashi gate

## Next focus
- Killua impl A1-A7 → Kakashi Pre-Tata Gate → forward Tata
```

> **Kenapa 🟡 bukan 🟢?** v4 masih in-progress + ada risk over-iteration. Declare jujur 🟡 — **bukan inflate jadi hijau** cuma karena v3 udah pass. Itu kontrol N2 (status jujur). Tata anti-hide.
