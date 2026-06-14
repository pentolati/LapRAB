# Tool: Component Reuse Audit Checklist

**Apa:** tabel + checklist buat audit component existing sebelum bikin baru. Output-nya ditaruh di `log.md` sebagai audit record (kontrol KU-C2).
**Kapan dipake:** sebelum nulis component/section/util baru (SOP-KU-02).
**Framework:** mandate Tata **Reuse > Rebuild**, Rule of 3.
**Aturan:** kategori **New** wajib ada justifikasi 1 baris. Cek Chakra v2 built-in dulu sebelum bikin manual.

---

## Langkah audit
1. List kebutuhan component dari spec.
2. Scan `components/`, `theme.js`, util existing.
3. Cek **Chakra v2 built-in** — Modal / Drawer / Menu / Accordion / Skeleton / Toast / Tabs / Popover?
4. Klasifikasi tiap kebutuhan: **Reuse 100% / Modify minor / Extend / New (justified)**.
5. Cek Rule of 3 — pola ≥3 tempat → extract shared.
6. Hitung **reuse ratio** = reused ÷ total.

## Template tabel (paste ke log.md)

```markdown
### Reuse audit — <fitur>
| Component | Status | Note / Justifikasi (kalau New) |
|---|---|---|
| <nama> | Reuse 100% / Modify minor / Extend / New | ... |

Reuse ratio: X/Y reused 100%. Mandate Reuse > Rebuild: respected.
```

---

## CONTOH TERISI

> Reuse audit — Landing Proyek-Contoh v2 (2026-05-26)

```markdown
### Reuse audit — Landing v2
| Component | Status | Note |
|---|---|---|
| theme.js | Reuse 100% | Palette + typography locked Bulma, gak ubah |
| constants.js | Reuse 100% | BRAND = "Proyek-Contoh" |
| Navbar.jsx | Modify minor | Update navLinks; logo image kept |
| Hero.jsx | Rewrite | Pre-headline pill, USP front, phone mockup + floating cards |
| HowItWorks.jsx | Reuse 100% | OK as-is |
| FeaturesSection.jsx | Modify minor | Remove Wishlist card → section sendiri, 5→4 cards |
| PricingSection.jsx | Reuse 100% | OK |
| TestimonialsSection.jsx | Reuse 100% | OK |
| CTASection.jsx | Reuse 100% | OK |
| Footer.jsx | Reuse 100% | OK |
| WishlistMarketplaceSection.jsx | New | USP dedicated — gak ada existing yang dekat (justified) |
| ShowcaseSection.jsx | New | 6 template thumbnail — kebutuhan baru (justified) |
| FAQSection.jsx | New | Pakai Chakra Accordion built-in (bukan manual) |

Reuse ratio: ~7/13 reused 100%. Mandate Reuse > Rebuild: respected.
```

Hasil: 3 component baru semua ada justifikasi; FAQSection pakai Chakra Accordion (a11y built-in, bukan reinvent). Audit jadi bukti kontrol KU-C2.
