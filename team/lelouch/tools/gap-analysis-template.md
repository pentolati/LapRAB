# Tool: Gap Analysis Template (As-is vs To-be + Mini-Tata Filter)

**Apa:** alat bandingin **as-is** (yang ada sekarang) vs **to-be** (yang diinginkan) → list gap + severity + action, plus jalankan **mini-Tata filter** (F-1/F-2/Universal).
**Kapan dipake:** review existing deliverable (mis. landing live), atau identify delta fitur sebelum build (SOP-LL-05).
**Framework:** BABOK KA4 (Strategy Analysis), gap analysis.
**Kenapa:** gap eksplisit + severity = tim fokus fix yang HIGH dulu, bukan rework asal. Mini-Tata filter = evidence-first & boomer-proof ke-cek.

---

## TEMPLATE (copy mulai sini)

```markdown
# Gap Analysis: [Object] (versi/tanggal)

## Mini-Tata filter check
**F-1 Backend ALMIGHTY** (kalau ada BE): Data SACRED · audit · accounting · auto explicit
**F-2 Frontend BOOMER-PROOF** (kalau ada FE): bahasa warung · 3-detik-clear · ibu-warung-test · palette (no coklat)
**Universal:** reuse>rebuild · evidence-first · anti-tambal-sulam · bold key point

## Actor coverage (BA lens)
- Primary actor: [ter-cover? ]
- Secondary actor: [ter-cover? ]
- Tertiary actor: [ter-cover? ]

## Gap konkret
| # | Gap | Severity | Action |
|---|---|---|---|
| 1 | ... | HIGH/MED/LOW | ... |

## Recommendation
[Targeted fix HIGH-severity dulu, bukan full rework — kecuali emang perlu]
```

---

## CONTOH TERISI (Proyek-Contoh — Gap Analysis Landing v3, 2026-05-27)

```markdown
# Gap Analysis: Landing v3 (live :5252)

## Mini-Tata filter check
**F-1:** N/A (landing pure marketing, no BE)
**F-2 BOOMER-PROOF:**
- ✅ bahasa warung ("undangan digital", "wishlist kado")
- ✅ 3-detik-clear per section
- ⚠️ ibu-warung-test PARTIAL FAIL: FAQ ada "data di-encrypt", "patuh standar PDP" — masih teknis
- ✅ palette mauve/sage/cream/gold, no coklat
**Universal:**
- ✅ reuse>rebuild (7/13 component reused)
- ⚠️ evidence-first WEAK: Stats "500+ Pasangan", "98% RSVP" = fake/placeholder, gak ada bukti
- ✅ anti-tambal-sulam (v3 full restructure)

## Actor coverage (BA lens)
- ✅ Primary (couple, decision maker) — well-catered (hero, USP wishlist, CTA)
- ❌ Secondary (parents-of-couple) — UNDER-SERVED (Indo wedding: ortu ikut influence)
- ❌ Tertiary (wedding planner) — UNDER-SERVED (bisa rekomendasi, tapi no CTA)

## Gap konkret
| # | Gap | Severity | Action |
|---|---|---|---|
| 1 | **Stats fake** — langgar evidence-first (mandate Tata) | **HIGH** | Replace claim verifiable ("Diluncurkan 2026", trust badge) atau remove sampai data real |
| 2 | Parents-of-couple under-served | MEDIUM | Tagline reassurance "elegan untuk semua tamu, senior sekalipun" |
| 3 | FAQ jargon-ish (encrypt, PDP) | LOW-MED | Rewrite bahasa warung penuh ("data lu aman, gak dijual") |
| 4 | No verifiable trust signal | MEDIUM | "Made in Bandung", year founded, partnership placeholder |
| 5 | Wedding planner CTA missing | LOW | Micro-section footer "Lu wedding planner? partnership" |

## Recommendation
v4 fokus FIX HIGH-severity (Stats fake → verifiable trust), bukan full rework.
Scope MEDIUM. ETA Bulma+Killua 1-2 jam.
```

> **Outcome nyata:** gap #1 (fake stats) jadi insiden RCA-001 Kakashi — di-fix di v4 + ditambah item "evidence-first / no fake data" di Pre-Tata Gate checklist. Ini contoh **evidence-first mandate** yang Lelouch tangkep duluan via gap analysis, sebelum bocor lebih jauh ke Tata.
