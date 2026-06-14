# SOP-KU-03 — Responsive & a11y QC

| | |
|---|---|
| **Kode** | SOP-KU-03 |
| **Pemilik** | Killua (Senior Frontend Engineer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | WCAG 2.2 AA, ARIA, Core Web Vitals, [tools/accessibility-checklist.md](../tools/accessibility-checklist.md), [tools/responsive-matrix.md](../tools/responsive-matrix.md) |
| **COBIT** | BAI03 (Build), BAI07 (Change Acceptance) |

## 1. Tujuan
Menjamin tiap UI yang di-handoff **jalan di semua breakpoint** (mobile→desktop) dan **bisa diakses semua user** (WCAG 2.2 AA: keyboard, screen reader, kontras) — sebelum lolos ke Kakashi Gate. Ini lapis kontrol KU-C4.

## 2. Ruang Lingkup
- **Berlaku:** semua UI visible (halaman, section, component interaktif) sebelum handoff.
- **Tidak berlaku:** util/hook non-visual; kode internal yang gak dirender.

## 3. Definisi & Istilah
- **WCAG 2.2 AA** — standar aksesibilitas web (W3C), level AA = baseline wajib. Prinsip **POUR** (Perceivable/Operable/Understandable/Robust).
- **a11y** — accessibility (a + 11 huruf + y).
- **ARIA** — atribut buat kasih tau screen reader peran/state elemen (mis. `aria-expanded`); pakai **cuma kalau** native HTML gak cukup.
- **Breakpoint** — titik lebar layar tempat layout berubah (mis. base/sm/md/lg).
- **Kontras** — rasio terang teks vs background; AA min **4.5:1** (teks normal), **3:1** (teks besar).
- **CLS** — Cumulative Layout Shift; layout gak boleh "loncat" pas load.

## 4. Referensi
WCAG 2.2 (POUR, success criteria AA), WAI-ARIA Authoring Practices, Core Web Vitals (CLS untuk no layout shift), mandate Tata F-2 boomer-proof (kelar di mobile karena banyak user mobile).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| QC responsive + a11y | Killua | Killua | @bulma (kalau visual perlu adjust) | @kakashi |
| Smoke test cross-browser | @l | @l | Killua | @kakashi |

## 6. Prosedur

### 6.1 Responsive
- 6.1.1 Tes minimal **2 breakpoint**: mobile (375/390px) + desktop (1280/1400px). Pakai [responsive-matrix](../tools/responsive-matrix.md).
- 6.1.2 Cek per breakpoint: **no overflow** (teks/pill gak kepotong), **no awkward wrap** (headline), **tap target ≥44px** di mobile, **no horizontal scroll**.
- 6.1.3 **No layout shift (CLS)** — image ber-dimensi, font preload, skeleton buat async.
- 6.1.4 **Decision point:** ada overflow/wrap jelek? → fix (responsive prop `{ base, sm, md, lg }`), re-screenshot. Loop sampai bersih.

### 6.2 Accessibility (WCAG 2.2 AA)
- 6.2.1 **Semantic HTML** — `header/nav/main/section/footer`, hierarki heading h1→h6 bener, `button` vs `link` sesuai fungsi.
- 6.2.2 **Keyboard nav** — Tab lewatin semua interaktif, urutan logis, **no focus trap**, Esc nutup modal/drawer.
- 6.2.3 **Focus visible** — focus ring keliatan (jangan `outline:none` tanpa ganti).
- 6.2.4 **Label association** — input punya `<label>`/`aria-label`; icon-button punya `aria-label`.
- 6.2.5 **Kontras** — teks vs bg ≥ 4.5:1 (normal) / 3:1 (besar). Cek warna token Tata.
- 6.2.6 **ARIA judicious** — pakai cuma kalau native gak cukup; jangan over-ARIA. (Component Chakra v2 — Modal/Accordion/Menu — udah a11y built-in, manfaatin.)
- 6.2.7 Jalankan [accessibility-checklist](../tools/accessibility-checklist.md) — semua item tick.

### 6.3 Exit
- 6.3.1 **Exit criteria:** responsive bersih di ≥2 breakpoint + accessibility-checklist full tick + screenshot per breakpoint.
- 6.3.2 Handoff ke **@l** buat smoke test cross-browser (Chrome + Safari + mobile). Catat di `log.md`.

## 7. Pengecualian
- **AAA hanya kalau diminta:** baseline = AA. AAA (kontras 7:1, dll) cuma kalau Tata/Bulma minta eksplisit.
- **Browser legacy (IE):** out of scope — target evergreen browser (Chrome/Safari/Firefox/Edge modern).

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Screenshot per breakpoint | `log.md` (path) + `/tmp/<project>-shots/` | Per rilis |
| accessibility-checklist terisi | `log.md` | Permanen |
| Hasil smoke test @l | log L | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| a11y pass rate | # handoff lolos WCAG AA ÷ total handoff visible | 100% |
| Bug responsive lolos | # bug layout/overflow lolos ke Tata | 0 |
| Breakpoint coverage | # handoff tes ≥2 breakpoint ÷ total | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: fix pill overflow mobile 390px Proyek-Contoh v2 |
