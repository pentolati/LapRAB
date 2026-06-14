# SOP-L-06 — Cross-browser & Accessibility (a11y) Testing

| | |
|---|---|
| **Kode** | SOP-L-06 |
| **Pemilik** | L (QA Senior) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | WCAG 2.1 AA, Lighthouse/axe-core, [tools/test-case-matrix.md](../tools/test-case-matrix.md) |
| **COBIT** | BAI07 (Change Acceptance & Transitioning) |

## 1. Tujuan
Membuktikan output **visible/user-facing jalan konsisten lintas-browser & device**, dan **bisa dipake user dengan keterbatasan** (keyboard, screen reader, kontras) — target Lighthouse a11y ≥90, dengan bukti screenshot per browser.

## 2. Ruang Lingkup
- **Berlaku:** tiap output visible (landing, form, page, component yang user lihat).
- **Tidak berlaku:** kode internal non-UI (API, job, migration).

## 3. Definisi & Istilah
- **a11y** — accessibility: produk bisa dipake user dengan keterbatasan.
- **WCAG AA** — Web Content Accessibility Guidelines level AA (standar a11y).
- **Lighthouse / axe** — tool audit otomatis (perf/a11y/SEO).
- **Cross-browser matrix** — kombinasi browser × device yang wajib di-test.

## 4. Referensi
WCAG 2.1 AA, mandate Tata **F-2 boomer-proof** (UI harus jelas buat user awam), evidence-first (screenshot per browser).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Cross-browser test | L | L | @killua (FE fix) | — |
| a11y audit | L | L | @killua, @bulma (kontras/desain) | — |
| Fix temuan | @killua | L | @bulma | — |

## 6. Prosedur

### 6.1 Cross-browser
- 6.1.1 Jalankan smoke + critical path di **matrix**: Chrome desktop, Safari desktop, Chrome mobile, Safari iOS (Firefox selektif).
- 6.1.2 Cek **responsive breakpoint** 375 / 768 / 1280.
- 6.1.3 **Screenshot per browser** (bukti wajib — evidence-first).

### 6.2 a11y audit
- 6.2.1 **Otomatis:** jalanin Lighthouse/axe → skor a11y. **Target ≥90.**
- 6.2.2 **Manual a11y:**
  - a. **Keyboard nav** — Tab tembus semua interactive, Enter aktivasi.
  - b. **Focus visible** — focus ring di tiap interactive.
  - c. **Color contrast** — pass WCAG AA (cek otomatis).
  - d. **Form label** — `htmlFor` + `id` ter-asosiasi.
  - e. **Heading hierarchy** — h1 sekali, sequential.
- 6.2.3 **F-2 check:** copy boomer-proof, no jargon, 3-detik-clear per page.

### 6.3 Verdict (exit)
- 6.3.1 Temuan → bug report (SOP-L-04) dengan severity per matrix (a11y blocker buat user keyboard-only = naikkan severity).
- 6.3.2 **Exit criteria:** semua browser di matrix pass (screenshot tersimpan) + Lighthouse a11y ≥90 + manual a11y check clear + copy boomer-proof.

## 7. Pengecualian
- **Browser legacy (IE11 dst):** out of scope kecuali Tata minta eksplisit.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Screenshot per browser | evidence folder | Permanen |
| Lighthouse a11y report | evidence folder + `log.md` | Permanen |
| Cross-browser matrix hasil | test-case-matrix | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| a11y score (visible) | skor Lighthouse a11y | ≥ 90 |
| Cross-browser coverage | # browser matrix ter-test ÷ total | 100% |
| a11y bug escaped | # bug a11y ditemukan user ÷ total | ≈ 0 |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: cross-browser landing Proyek-Contoh + a11y ≥90 |
