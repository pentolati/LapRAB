# Tool: Responsive Test Matrix

**Apa:** matriks tes layout per **breakpoint × kondisi** — biar gak ada overflow/wrap jelek/layout shift yang lolos.
**Kapan dipake:** QC responsive sebelum handoff (SOP-KU-03 §6.1).
**Framework:** Core Web Vitals (CLS untuk no layout shift), mobile-first.
**Aturan:** minimal 2 breakpoint (mobile + desktop). Screenshot per breakpoint, path di log.

---

## Breakpoint default (Chakra v2)

| Token | Lebar | Device |
|---|---|---|
| `base` | < 480px | mobile kecil (375/390) |
| `sm` | ≥ 480px | mobile besar |
| `md` | ≥ 768px | tablet |
| `lg` | ≥ 992px | desktop (1280/1400) |
| `xl` | ≥ 1280px | desktop besar |

## Template matriks (paste ke log.md)

```markdown
### Responsive matrix — <halaman>
| Cek | base (390) | md (768) | lg (1280) |
|---|---|---|---|
| No overflow teks/pill | ✅/❌ | | |
| No awkward wrap headline | | | |
| No horizontal scroll | | | |
| Tap target ≥44px | | | |
| No layout shift (CLS) | | | |
| Image responsive | | | |
Screenshot: base=<path> · lg=<path>
```

---

## CONTOH TERISI

> Responsive matrix — Hero Proyek-Contoh v2 (fix pill overflow)

```markdown
### Responsive matrix — Hero v2
| Cek | base (390) | lg (1400) |
|---|---|---|
| No overflow pill | ❌→✅ | ✅ |
| No awkward wrap headline | ❌→✅ | ✅ |
| No horizontal scroll | ✅ | ✅ |
| Tap target CTA ≥44px | ✅ | ✅ |
| No layout shift | ✅ | ✅ |
| Hero image responsive | ✅ | ✅ |

FIX yang dilakukan (mobile 390 first-pass gagal):
- Pill text responsive: long desktop, short mobile ("Pertama dengan wishlist marketplace")
- Pill fontSize { base: 'xs', md: 'sm' }
- Headline fontSize tambah sm breakpoint { base:'3xl', sm:'4xl', md:'5xl', lg:'6xl' }
- Headline 3 line break eksplisit
Re-screenshot mobile → pass.
Screenshot: base=/tmp/wedding-shots/v2-mobile-fix.png · lg=/tmp/wedding-shots/v2-desktop-final.png
```

Hasil: first-pass mobile gagal (pill overflow + wrap awkward) → fix responsive prop → pass. Ini kenapa matriks wajib: nangkep sebelum bocor ke Tata.
