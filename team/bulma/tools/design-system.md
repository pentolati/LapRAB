# Tool: Design System

**Apa:** sistem token + komponen sebagai **single source of truth** visual — supaya konsistensi terjaga & gak ada re-inventasi (button beda-beda = bug menurut Tata).
**Kapan dipake:** maintain konsistensi, lock pola dipakai >3 area (SOP-BL-02).
**Framework:** Atomic Design (token→atom→molecule→organism→template→page), COBIT APO03.
**Kenapa:** Reuse>Rebuild + mandate konsistensi Tata. Token single-source (kontrol BC7).

---

## Layer Atomic Design (cara baca)
- **Token** → nilai terkecil (warna, spacing, font, radius) di `theme.js`.
- **Atom** → komponen terkecil (Button, Input, Badge, Icon).
- **Molecule** → gabungan atom (FormField = Label+Input+Error).
- **Organism** → blok fungsional (Hero, Navbar, PricingCard).
- **Template/Page** → susunan organism jadi halaman.

---

## TEMPLATE design system (copy mulai sini)

```
## Tokens
- Palette  → lihat palette-tokens.md (single source)
- Type     → Display: <font>/<weight>/<scale> · Body: <font>/<weight> · Accent: <font>
- Spacing  → base <8px>; scale: 4 8 12 16 24 32 48 64 96
- Radius   → sm: <8px> (input/badge) · lg: <24px> (card) · full (button)  [LOCK 2 value]
- Shadow   → soft, low-alpha (rgba 5-15%), warm-tint, spread>blur
- Icon     → <set>, stroke LOCK <1.5/2px>, ukuran LOCK 16/24

## Komponen (atom/molecule/organism)
| Komponen | Layer | Props | States | Reuse/New |
|----------|-------|-------|--------|-----------|
| Button   | atom  | variant, size | default/hover/active/disabled | reuse |
| ...      |       |       |        |           |
```

---

## CONTOH TERISI (proyek contoh — React + Chakra v2)

```
## Tokens (theme.js)
- Palette  → mauve / sage / cream / slate + gold accent (palette-tokens.md). HINDARI "gray" generic.
- Type     → Display: Playfair Display / 500 / 4xl-6xl · Body: Inter / 400-500 · Accent: Caveat (quote/signature)
- Spacing  → base 8px; scale 4 8 12 16 24 32 48 64 96 128; section py 20-32 (editorial breathing room)
- Radius   → md 4-8px (editorial sharpness) · 2xl 24px (card) · full (button)  [LOCK]
- Shadow   → soft warm-tint low-alpha (didefinisikan di theme)
- Icon     → react-icons Feather (Fi*), stroke 2px, 24px default

## Komponen
| Komponen          | Layer    | Props                    | States                       | Reuse/New |
|-------------------|----------|--------------------------|------------------------------|-----------|
| Button            | atom     | colorScheme=brand, rounded=full | default/hover/active/disabled | reuse  |
| SectionDivider    | atom     | gold thin line + caption | —                            | reuse     |
| TemplateCard      | molecule | img, title, hover-frame  | default/hover (gold.400)     | reuse     |
| Hero              | organism | photo, headline, CTA     | + loading (blur-up)          | reuse     |
| StatsSection      | organism | stats[], gold dividers   | —                            | new (v3)  |
```

**Konsistensi check (SOP-BL-02):**
- [x] Button **identik** di semua page (colorScheme=brand, rounded=full) — gak ada varian liar
- [x] Radius LOCK 3 value (md/2xl/full), gak campur
- [x] Semua warna refer token theme.js, **0 hex liar** (BC7)
- [x] Reuse audit: 4 komponen reuse + 1 new (StatsSection) justified

Hasil: landing v3 konsisten lintas section; Killua impl tanpa re-invent. Acuan SOP-BL-02.
