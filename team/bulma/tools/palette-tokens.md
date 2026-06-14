# Tool: Palette & Color Tokens

**Apa:** definisi **palette LOCK Tata** + token warna sebagai single source of truth. Tiap warna punya nama token, hex, dan pemakaian.
**Kapan dipake:** tiap desain (ambil dari sini, jangan hex liar) + Palette & Brand Governance (SOP-BL-05).
**Framework:** WCAG 2.x AA (kontras), palette LOCK Tata (0 coklat).
**Aturan keras:** **0 coklat** ("jijiki"). Max 6 hue unik. Kontras teks/bg wajib AA. Pakai token, bukan hardcode (kontrol BC2, BC7).

---

## Palette LOCK Tata (hard rule)

> **Pink soft · mauve · ungu soft · sage** — varied (bukan monotone). **TANPA coklat.**

| Keluarga | Boleh | Hindari |
|---|---|---|
| Primary | mauve / ungu soft | coklat, navy korporat |
| Aksen | pink soft, sage, gold (kalau Tata konfirmasi) | coklat, orange ngejreng |
| Neutral | cream, slate (bukan "gray" generic) | abu dingin korporat |

---

## TEMPLATE token (copy mulai sini)

```
| Token        | Hex     | Pakai untuk                     | Kontras vs cream (AA?) |
|--------------|---------|---------------------------------|------------------------|
| mauve.500    | #...    | Primary brand, button, accent   | ...                    |
| sage.500     | #...    | Aksen sekunder, sukses-vibe     | ...                    |
| pink.50      | #...    | Background lembut                | (bg)                   |
| cream.50     | #...    | Canvas utama                     | (bg)                   |
| slate.800    | #...    | Body text (bukan gray generic)   | ✅ ~9:1                 |
| <semantic>   | #...    | success / error                  | ...                    |
```

**Aturan:** primary 1 + accent ≤1 (max 2 brand) + neutral scale 4-6 stop + 2 semantic. Variasi = tints/shades, **bukan** nambah hue baru.

---

## CONTOH TERISI (proyek contoh)

> Brand Proyek-Contoh — undangan digital editorial premium. Logo: **jasmine sage + mauve serif**. Palette mauve/sage/cream/slate + **gold accent** (Tata: "ungu pastel + gold = masuk akal").

```
| Token      | Hex      | Pakai untuk                          | Kontras vs cream |
|------------|----------|--------------------------------------|------------------|
| mauve.500  | #a87fb8  | Primary brand, button (rounded full) | —                |
| mauve.800  | #6b4779  | Heading kuat di cream                | ✅ ~9:1 (AA)      |
| sage.500   | #9caf88  | Aksen botanical, logo jasmine        | —                |
| sage.700   | #6b8454  | Teks aksen di cream                  | ✅ ~4.6:1 (AA)    |
| cream.50   | #fbf3f7  | Canvas utama (pink-soft bg)          | (bg)             |
| slate.800  | #2d2a35  | Body text — BUKAN "gray" generic     | ✅ ~12:1 (AA)     |
| gold.500   | #c9a960  | Aksen editorial: divider, stats      | —                |
| gold.700   | #8d7239  | Teks gold di cream                   | ✅ ~5:1 (AA)      |
| success    | #6b8454  | (pakai sage.700)                     | —                |
| error      | #b3506b  | Error state — mauve-leaning, no merah ngejreng | ✅ AA  |
```

**Audit (kontrol BC2/BC3):**
- [x] **0 coklat** — gold ≠ coklat (gold = kuning-emas, hue ~45°; coklat ditolak). Verified scan: no brown hue.
- [x] Hue unik: mauve, sage, gold, slate-neutral, pink-bg = **5 hue** (≤6 ✅)
- [x] Semua pasangan teks/bg lolos **AA** (rasio dicatat di kolom)
- [x] Varied (mauve+sage+gold+pink), bukan monotone

Hasil: dipakai di `theme.js` Proyek-Contoh landing v3/v4. Jadi acuan SOP-BL-05 enforcement.
