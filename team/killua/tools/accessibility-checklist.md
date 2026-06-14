# Tool: Accessibility Checklist (WCAG 2.2 AA)

**Apa:** daftar periksa aksesibilitas berbasis WCAG 2.2 level AA — keyboard, screen reader, kontras, semantic. Lapis kontrol KU-C4.
**Kapan dipake:** tiap handoff UI visible (SOP-KU-03 §6.2).
**Framework:** WCAG 2.2 (prinsip POUR), WAI-ARIA Authoring Practices.
**Aturan:** baseline = **AA**. ARIA pakai cuma kalau native HTML gak cukup. Component Chakra v2 (Modal/Accordion/Menu) udah a11y built-in — manfaatin.

---

## Checklist (per prinsip POUR)

### Perceivable (bisa dipersepsi)
- [ ] **Kontras teks** ≥ 4.5:1 (normal) / 3:1 (besar ≥18pt atau bold ≥14pt)
- [ ] **Alt text** di image bermakna; `alt=""` di image dekoratif
- [ ] **Info gak cuma lewat warna** (mis. error: warna + ikon + teks)

### Operable (bisa dioperasikan)
- [ ] **Keyboard nav** — semua interaktif kejangkau Tab, urutan logis
- [ ] **No focus trap** — bisa Tab keluar; Esc nutup modal/drawer/popover
- [ ] **Focus visible** — focus ring keliatan (jangan `outline:none` polos)
- [ ] **Tap target** ≥ 44×44px di mobile
- [ ] **No content cuma muncul di hover** (mobile gak punya hover)

### Understandable (bisa dipahami)
- [ ] **Label-input pair** — tiap input ada `<label>`/`aria-label`
- [ ] **Icon-button** punya `aria-label` (mis. tombol close, hamburger)
- [ ] **Bahasa boomer-proof** — copy warung, no jargon (F-2)
- [ ] **Error message** jelas + actionable

### Robust (kuat lintas teknologi)
- [ ] **Semantic HTML** — `header/nav/main/section/footer`, `button` vs `link`
- [ ] **Heading hierarchy** — 1× h1 per page, h2→h3 berurutan (no skip)
- [ ] **ARIA judicious** — pakai cuma kalau native gak cukup; no ARIA redundant
- [ ] **Valid markup** — no nested interactive, no duplicate id

---

## CONTOH TERISI

> a11y QC: FAQSection Proyek-Contoh v2 (Chakra Accordion)

```
Perceivable:
[x] Kontras teks slate.700 di cream.50 bg = ~9:1 (lewat AA)
[x] No info cuma lewat warna

Operable:
[x] Accordion item kejangkau Tab
[x] Enter/Space toggle expand/collapse (Chakra built-in)
[x] Focus ring visible
[x] Tap target judul accordion full-width (>44px)

Understandable:
[x] Pertanyaan FAQ bahasa warung ("data lu aman, gak dijual" — bukan "encrypt + PDP")
[x] No jargon

Robust:
[x] Semantic section, h2 "Tanya Jawab" → h3 N/A (accordion judul = button)
[x] Chakra Accordion: aria-expanded + aria-controls auto (built-in, gak manual ARIA)
[x] No nested interactive
→ PASS WCAG AA. Pakai Chakra Accordion = a11y gratis, gak reinvent.
```

Hasil: lolos AA tanpa ARIA manual — manfaatin Chakra v2 built-in a11y. Bukti kontrol KU-C4.
