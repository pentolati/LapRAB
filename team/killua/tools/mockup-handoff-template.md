# Tool: Mockup→FE Handoff (Feasibility Audit)

**Apa:** formulir feasibility audit + handoff yang Killua isi pas terima mockup dari Bulma — cek tiap element doable, surface impl-cost mahal pakai data sebelum approve.
**Kapan dipake:** tiap terima mockup/spec dari @bulma (SOP-KU-04).
**Framework:** COBIT BAI03, kolaborasi 02-RELATIONSHIPS.md §4 (no throw-over-the-wall).
**Aturan:** element impl-cost mahal → push back ke Bulma pakai **angka** + alternatif (design-speak, no jargon). Bulma final say visual.

---

## Template (paste ke log.md, mention @bulma)

```markdown
### Feasibility audit — <mockup/fitur>
Kelengkapan spec: [referensi visual ✅/❌] [palette token 0-coklat ✅/❌] [state empty/error/loading ✅/❌] [responsive ≥2 bp ✅/❌]

| Element | Feasible? | Impl-cost / catatan | Alternatif (kalau mahal) |
|---|---|---|---|
| <element> | ✅/⚠️/❌ | ... | ... |

Butuh data? → kontrak API ke @saitama: [ya/tidak, status]
**→ @bulma:** [push back + alternatif, atau "semua feasible, mulai impl"]
```

---

## CONTOH TERISI

> Feasibility audit — Hero animation Proyek-Contoh (fade-in)

```markdown
### Feasibility audit — Hero v3/v4 animation
Kelengkapan spec: referensi ✅ · palette token (mauve/sage/cream/gold, 0 coklat) ✅ · state N/A (landing static) · responsive 2bp ✅

| Element | Feasible? | Impl-cost / catatan | Alternatif |
|---|---|---|---|
| Fade-in hero | ⚠️ | framer-motion +~30KB bundle buat 1 efek fade | CSS transition/keyframe (0 byte) |
| Editorial layout + gold frame | ✅ | Chakra Box + offset positioning | — |
| Hero photo besar | ⚠️ | PNG 1.6MB → LCP berat | compress JPEG q88 → 210KB |
| Scroll fade-up section (v4) | ✅ | framer-motion justified (multiple section, reusable MotionSection) | — |

Butuh data? → tidak (landing marketing, no fetch)
**→ @bulma:** fade-in hero: pakai framer-motion overkill buat 1 fade (+30KB). Usul CSS aja
dulu. Hero photo gw compress 1.6MB→210KB (LCP). Scroll fade-up v4 baru worth framer-motion
(reusable MotionSection). Cek setuju?
```

Hasil: jadi ADR-001 Kakashi (CSS dulu, framer-motion ditahan). Di v4 framer-motion akhirnya kepake buat fade-up multi-section — persis skenario "re-introduce kalau kebutuhan naik". Feasibility audit nyegah +30KB sia-sia di v3, dan bukti push back pakai data (bukan ego).
