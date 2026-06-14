# SOP-BL-03 — Usability Heuristic Evaluation

| | |
|---|---|
| **Kode** | SOP-BL-03 |
| **Pemilik** | Bulma (UI/UX Lead) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Nielsen 10 Usability Heuristics, WCAG 2.x AA, ISO 9241, [tools/heuristic-eval-checklist.md](../tools/heuristic-eval-checklist.md), [tools/accessibility-checklist.md](../tools/accessibility-checklist.md) |
| **COBIT** | BAI03 (Managed Solutions Build) |

## 1. Tujuan
Memastikan desain **usable & accessible** (bukan cuma cantik) — surface friction & pelanggaran heuristik/WCAG **sebelum** handoff, biar gak bocor ke user (anti "aesthetic > function").

## 2. Ruang Lingkup
- **Berlaku:** tiap flow/page baru atau yang diubah, sebelum handoff ke Killua (SOP-BL-04).
- **Tidak berlaku:** eksplorasi internal yang belum jadi flow utuh.

## 3. Definisi & Istilah
- **Heuristic evaluation** — audit cepat desain vs 10 aturan Nielsen.
- **WCAG AA** — kontras body ≥4.5:1, large ≥3:1; focus state; motion-safe.
- **POUR** — prinsip WCAG: Perceivable, Operable, Understandable, Robust.
- **Severity** — bobot temuan: Blocker (a11y fail / flow rusak) / Major / Minor.

## 4. Referensi
Nielsen 10 (rule-of-thumb usability), WCAG 2.x (POUR), ISO 9241 part 11 (usability = effectiveness+efficiency+satisfaction), mandate F-2 boomer-proof.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Heuristic eval | Bulma | Bulma | — | — |
| A11y check (WCAG AA) | Bulma | Bulma | @l (QA) | — |
| Fix temuan Blocker | Bulma | Bulma | — | — |

## 6. Prosedur

### 6.1 Heuristic pass (Nielsen 10)
- 6.1.1 Telusuri flow lewat [heuristic-eval-checklist](../tools/heuristic-eval-checklist.md), cek tiap heuristik:
  - a. **H1 Status** — empty/loading/error state ada? user tau sistem lagi apa?
  - b. **H2 Match real world** — copy bahasa warung (F-2), ikon familiar, no jargon?
  - c. **H4 Consistency** — pakai token design-system, button identik lintas page?
  - d. **H5 Error prevention** — validasi visual, confirm destructive action?
  - e. **H6 Recognition>recall** — label jelas, gak ngandelin hafalan?
  - f. **H8 Minimalist** — 1 section 1 fokus, no noise?
  - g. **H9 Error recovery** — error state kasih tau cara benerin, bukan cuma merah?
- 6.1.2 Catat tiap pelanggaran + **severity**.

### 6.2 Accessibility pass (WCAG AA)
- 6.2.1 Jalankan [accessibility-checklist](../tools/accessibility-checklist.md): **kontras AA** (catat rasio), focus state kelihatan, target tap ≥44px, motion-safe (`prefers-reduced-motion`), gak ngandelin warna doang, heading order benar.
- 6.2.2 **Decision point:** ada **a11y Blocker** (kontras fail / no focus)? → **wajib fix**, gak boleh handoff.

### 6.3 Verdict (exit)
- 6.3.1 **Lethal check:** 3-detik mobile message sampai? ibu-warung ngerti CTA? keep-3-element test?
- 6.3.2 Semua Blocker fixed + Major ditangani → **lolos eval**, lanjut handoff (SOP-BL-04). Ada Blocker → loop fix.

## 7. Pengecualian
- **Trade-off a11y vs estetika:** kalau ngorbanin AA demi estetika → **escalate Tata 🔴** (gak boleh diputus sendiri); default tetap AA.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Heuristic eval + severity | `log.md` + checklist terisi | Permanen |
| A11y check (rasio kontras) | accessibility-checklist terisi + `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Heuristic violation lolos | # violation ketemu user/QA setelah handoff | ≈ 0 |
| Kontras AA compliance | # pasangan teks lolos AA ÷ total | 100% |
| State coverage | # flow dengan empty/error/loading ÷ total | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
