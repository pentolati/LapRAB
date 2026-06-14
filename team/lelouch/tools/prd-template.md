# Tool: PRD-lite Template

**Apa:** dokumen "apa yang dibangun & kenapa" — problem-first, scannable, ber-success-metric, max 1-2 halaman.
**Kapan dipake:** tiap fitur baru yang udah lewat elicitation (SOP-LL-01) & di-greenlight buat dieksplor (SOP-LL-02).
**Kenapa:** Transparency (rationale eksplisit) + scope discipline (anti creep & anti-bloat). Tata scanner → **bold key point**.
**Output:** simpen di `team/lelouch/prd/<feature>.md`. Versioned.

---

## TEMPLATE (copy mulai sini)

```markdown
# PRD-lite: [Feature Name]

**Owner:** Lelouch (PM) · **Status:** Draft / In Review / Approved / In Build / Shipped
**Date:** YYYY-MM-DD · **Stakeholders:** @tata, @bulma, @kakashi, @nami

## 1. Problem
[Masalah yang di-solve. BUKAN solusi. Bukti: data / research / pain quote.]

## 2. User & Context (JTBD)
> When **[situation]**, user wants to **[motivation]**, so they can **[outcome]**.
- **Who:** [segment] · **When:** [trigger] · **Current pain:** [how they suffer today]

## 3. Hypothesis
> Kalau kita **[do X]**, maka **[Y terjadi]** karena **[mechanism]**.

## 4. Goal & Success Metrics
| Type | Metric | Target |
|---|---|---|
| Leading | [signal awal] | ≥ X |
| Lagging | [outcome] | ≥ X |
| Counter | [gak break] | < threshold |

## 5. Scope (TRUE MVP)
**IN:** [bullet] · **OUT (non-goal eksplisit):** [bullet]

## 6. Competitive scan
| Competitor | What they do | Gap kita expose (lateral angle) |
|---|---|---|

## 7. Mini-Tata filter
- F-1 (kalau BE): Data SACRED? audit? accounting comply? auto explicit?
- F-2 (kalau FE): bahasa warung? 3-detik-clear? boomer-proof? palette safe (no coklat)?
- Universal: reuse>rebuild? evidence-first? anti-tambal-sulam? probe done?

## 8. Open questions
- [ ] @tata: ... · [ ] @kakashi: ... · [ ] @bulma: ...

## 9. Timeline (rough, confirm @nami) & Risk
[mockup / impl / QA / launch] · Risk + mitigation
```

---

## CONTOH TERISI (dari proyek contoh — Landing Page)

```markdown
# PRD-lite: Landing Page Proyek-Contoh (wedding invitation — domain ilustrasi)

**Owner:** Lelouch (PM) · **Status:** Approved
**Date:** 2026-05-26 · **Stakeholders:** @tata, @bulma, @kakashi, @nami

## 1. Problem
Pasangan calon nikah butuh undangan digital, tapi yang ada di pasar generik &
gak ada "after-party value". Mereka gak ketemu produk yang sekalian bantu urusan
kado tanpa ribet. (Bukti: scan kompetitor + pain "bingung kasih kado apa".)

## 2. User & Context (JTBD)
> When pasangan lagi siapin nikah, mereka want undangan digital yang gampang dishare,
> so they can ngundang + ngatur RSVP + kasih arahan kado tanpa ribet.
- **Who:** couple (decision maker) · **When:** fase persiapan nikah · **Current pain:** undangan generik, kado random/dobel

## 3. Hypothesis
> Kalau kita kasih **wishlist kado marketplace dengan notif**, maka **conversion daftar naik**
> karena **itu USP yang gak dipunya kompetitor** (solve "bingung kado" buat 2 sisi).

## 4. Goal & Success Metrics
| Type | Metric | Target |
|---|---|---|
| Leading | Visit → signup conversion | ≥ 5% |
| Lagging | Time on page | ≥ 1 menit |
| Counter | Bounce rate | < 60% |

## 5. Scope (TRUE MVP)
**IN:** nav, hero, cara-kerja 3-step, 5 fitur card (USP wishlist ⭐), pricing 2-tier, testimoni placeholder, CTA footer.
**OUT (non-goal):** login/signup actual flow, dashboard, template editor, backend real, payment integration.

## 6. Competitive scan
| Competitor | What they do | Gap kita expose |
|---|---|---|
| Undangan digital generik | template + RSVP | gak ada solusi kado |
| Marketplace kado | wishlist | gak terintegrasi undangan |
| → **lateral angle:** wishlist marketplace ala Shopee, dibawa ke konteks undangan = USP |

## 7. Mini-Tata filter
- F-1: N/A (landing marketing, no BE — Fauxbase scaffold aja)
- F-2: ✅ bahasa warung ("undangan digital", "wishlist kado"), 3-detik-clear per section, palette mauve/sage/cream/gold (no coklat)
- Universal: ✅ reuse>rebuild, ⚠️ evidence-first (stats placeholder = HARUS verifiable, jangan fake), anti-tambal-sulam, probe done

## 8. Open questions
- [x] @tata: brand name? → "Proyek-Contoh" (tentative working name)
- [ ] @bulma: hero visual — foto wedding pro atau generate?

## 9. Timeline & Risk
Mockup 30 menit → handoff Killua. **Risk:** stats placeholder kalau fake = langgar evidence-first (lihat RCA fake-stats v3). Mitigasi: pakai claim verifiable.
```

> Catatan: scope-fit rule kepake di sini — **landing = marketing only**, after-login features di-spec terpisah. Itu yang nahan PRD dari bloat jadi V5.
