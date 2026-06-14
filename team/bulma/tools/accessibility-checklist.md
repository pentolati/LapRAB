# Tool: Accessibility Checklist (WCAG 2.x AA)

**Apa:** daftar periksa aksesibilitas vs **WCAG 2.x level AA**, disusun per prinsip **POUR**.
**Kapan dipake:** tiap desain sebelum handoff (SOP-BL-03 §6.2).
**Framework:** WCAG 2.x (W3C) — Perceivable, Operable, Understandable, Robust.
**Aturan:** kontras fail / no focus state = **a11y Blocker**, gak boleh handoff. Trade-off AA vs estetika → escalate Tata 🔴 (kontrol BC3).

---

## P — Perceivable
- [ ] **Kontras teks AA** — body ≥ **4.5:1**, large (≥18pt / 14pt bold) & UI ≥ **3:1**. Catat rasio tiap pasangan.
- [ ] **Gak ngandelin warna doang** — info juga lewat ikon/teks/pola (buta warna safe)
- [ ] **Alt text** — tiap gambar bermakna ada alt; dekoratif → alt kosong
- [ ] **Teks bisa di-zoom** 200% gak rusak layout

## O — Operable
- [ ] **Focus state kelihatan** — keyboard nav ada outline jelas (bukan dihapus)
- [ ] **Target tap ≥ 44×44px** (mobile)
- [ ] **Keyboard accessible** — semua aksi bisa tanpa mouse
- [ ] **Motion-safe** — hormati `prefers-reduced-motion`; no flash >3×/detik

## U — Understandable
- [ ] **Copy boomer-proof** (F-2) — bahasa warung, no jargon
- [ ] **Label form jelas** + error message actionable (bukan "invalid input")
- [ ] **Konsisten** — pola navigasi & label sama di seluruh app

## R — Robust
- [ ] **Semantik benar** — heading order (h1→h2→h3, gak loncat), landmark
- [ ] **Form label terhubung** ke input (`htmlFor`/aria)
- [ ] **ARIA** dipakai cuma kalau perlu, gak misuse

---

## CONTOH TERISI (Proyek-Contoh — Hero + Stats landing v3)

```
PERCEIVABLE
✅ Kontras: mauve.800/cream ~9:1 (heading) · slate.800/cream ~12:1 (body) · gold.700/cream ~5:1 (stats) — semua ≥AA
✅ Stats pakai angka + label teks, gak warna doang
✅ Hero photo alt="Pasangan pengantin berjalan di taman mawar, kebaya putih"
OPERABLE
✅ CTA "Mulai Cerita Kalian" focus ring mauve kelihatan
✅ Button tap target 48px (≥44 ✅)
✅ framer-motion fade-up dibungkus prefers-reduced-motion guard
UNDERSTANDABLE
✅ Copy "wishlist kado" bukan "registry integration" (boomer-proof)
ROBUST
✅ Heading order h1 hero → h2 section, gak loncat

A11y Blocker: 0 → LOLOS WCAG AA. Lanjut handoff (SOP-BL-04).
```

Tercatat di log + bukti audit kontrol BC3 (kontras AA compliance).
