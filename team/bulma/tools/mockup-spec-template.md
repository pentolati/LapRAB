# Tool: Mockup Spec Template

**Apa:** spec lengkap buat handoff mockup ke FE — token, section, microcopy, component, responsive, QC.
**Kapan dipake:** tiap mockup page/feature (SOP-BL-01) sebelum handoff (SOP-BL-04).
**Framework:** COBIT BAI03 (design input ke build), Atomic Design.
**Aturan:** ≥5 reference · real microcopy (no lorem) · empty/error/loading state · feasibility check @killua sebelum lock.

---

## TEMPLATE (copy mulai sini)

```markdown
# Mockup Spec — [Feature/Page]

**Owner:** Bulma · **For:** @killua · **Status:** Draft / Ready for handoff / Approved · **Date:** YYYY-MM-DD

## 1. Goal & user context
[Siapa user, dalam state apa, mau ngapain — 1-2 kalimat]

## 2. References (min 5, wajib)
| # | URL | Why relevant |
|---|---|---|
| 1 | https://... | ... |

## 3. Design tokens
- Palette: (dari palette-tokens.md) mauve/sage/cream/slate + accent
- Type: Display <font>/<scale> · Body <font> · Accent <font>
- Spacing: base 8px · Radius: sm/lg/full (lock)

## 4. Section breakdown (+ STATE wajib)
### Section: [Name]
**Purpose:** [1 line] · **Layout:** [grid]
**Wireframe (ASCII):**
```
[box diagram]
```
**Microcopy:** headline / sub / CTA (real, no lorem)
**States:** happy · empty · loading · error  ← WAJIB

## 5. Components list
| Component | New/Reuse | Props | States |

## 6. Responsive
| Breakpoint | Behavior |
| <768px | stack ... |
| ≥768px | 2-col ... |

## 7. Pre-handoff QC (heuristic + a11y pass) — checklist terisi
## 8. Feasibility check @killua — [konfirmasi + tanggal]
## 9. Open questions — @lelouch / @tata
```

---

## CONTOH TERISI (Proyek-Contoh — Hero landing v3)

```markdown
# Mockup Spec — Hero Landing v3 (Editorial Premium)

**Owner:** Bulma · **For:** @killua · **Status:** Ready for handoff · **Date:** 2026-05-26

## 1. Goal & user context
Calon pengantin buka landing di HP, mau bukti ini undangan "berjiwa" (bukan template SaaS) dalam <3 detik.

## 2. References (min 5)
| # | URL | Why |
| 1 | invitato.net | Hook "first in town" — positioning |
| 2 | withjoy.com | Show product, bukan foto generic |
| 3 | zola.com | Headline verb-led pendek |
| 4 | Vogue Weddings | Editorial photo + serif heavy |
| 5 | Brides.com | Hero photo + serif pull-quote |

## 3. Tokens
Palette: mauve/sage/cream/slate + gold accent · Display Playfair 500 · Body Inter · Accent Caveat · radius md/2xl/full

## 4. Section: Hero
**Purpose:** stop-scroll emosional. **Layout:** full-bleed photo + gold frame offset.
Wireframe:
[ gold divider · "PERTAMA DI INDONESIA" ]
[ H1: "Undangan digital, *dengan jiwa.*" ]
[ sub 18-20px ] [ CTA "Mulai Cerita Kalian" ][ link "Pelajari wishlist →" ]
[ editorial couple photo (Gemini-gen, rose garden) ]
**Microcopy:** real (no lorem). CTA boomer-proof.
**States:** happy · loading (blur-up hero) · error (fallback gradient brand) — designed.

## 8. Feasibility check @killua
@killua konfirm 2026-05-26: feasible (Chakra v2 + framer-motion fade-up), hero optim 1.6MB→210KB. ✅
```

**QC pass (kontrol BC1-BC6):** ≥5 reference ✅ · 0 coklat ✅ · kontras AA ✅ · state lengkap ✅ · no lorem ✅ · hero Gemini-gen (bukan stock) ✅ · feasibility @killua ✅. Handoff → Killua impl → Gate Kakashi → sign-off Tata 🟡.
