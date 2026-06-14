# SOP-BL-01 — Mockup & Design

| | |
|---|---|
| **Kode** | SOP-BL-01 |
| **Pemilik** | Bulma (UI/UX Lead) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Nielsen 10 Heuristics, Gestalt, Atomic Design, [tools/mockup-spec-template.md](../tools/mockup-spec-template.md), [tools/palette-tokens.md](../tools/palette-tokens.md) |
| **COBIT** | BAI03 (Managed Solutions Build — design input ke build) |

## 1. Tujuan
Menghasilkan mockup/spec desain yang **berbasis data (bukan asumsi)**, intuitif (F-2 boomer-proof), cantik-tapi-fungsional, dan accessible — sebelum lanjut ke heuristic eval (SOP-BL-03) & handoff (SOP-BL-04).

## 2. Ruang Lingkup
- **Berlaku:** semua request desain page/feature/flow baru atau redesign.
- **Tidak berlaku:** koreksi sepele 1-token reversible yang udah ada precedent (cukup di design-system SOP-BL-02), atau tweak yang gak user-facing.

## 3. Definisi & Istilah
- **Reference scan** — riset min 5 page sejajar; simpan URL + 1-liner *why*.
- **Anti-pattern audit** — cek desain vs daftar anti-pattern (PLAYBOOK §6) sebelum lanjut.
- **Wireframe** — sketsa low-fi (boxes & lines), validasi flow/hierarki **sebelum** mikir warna/font.
- **Moodboard** — kumpulan visual cue buat lock arah aesthetic.

## 4. Referensi
Nielsen 10 (usability), Gestalt (hierarki/layout), Atomic Design (reuse>rebuild), mandate Tata (F-2 boomer-proof, palette LOCK 0-coklat, hero bukan stock, no lorem, state wajib).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Reference scan + audit | Bulma | Bulma | — | — |
| Pilih aesthetic angle | Bulma | Bulma | @lelouch | Tata |
| Mockup spec | Bulma | Bulma | @killua (feasibility) | — |
| Approve output visible | — | **Tata** | @kakashi (Gate) | tim |

## 6. Prosedur

### 6.1 Audit konteks (gate masuk)
- 6.1.1 Tentukan **siapa user, mood apa, device apa, sebelum/sesudah action**. Kalau gak tau target user → **stop**, gandeng @lelouch/@senku dulu.
- 6.1.2 Cek ada **requirement/PRD** dari Lelouch sebagai input. Kalau scope ambigu → konsultasi, jangan asumsi.

### 6.2 Riset & arah
- 6.2.1 **Reference scan — min 5** page dari brand sejajar (+ kompetitor langsung kalau landing). **Simpan URL + 1-liner why di log.** Exit kalau <5 → balik scan.
- 6.2.2 **Anti-pattern audit** versi sebelumnya (kalau redesign): petakan tiap pelanggaran → fix (PLAYBOOK §6).
- 6.2.3 **Moodboard** 6-8 visual cue. Untuk brand baru: ajukan **2-3 aesthetic angle + reference**, lock sama Tata/Lelouch (anti stubborn lock-in early).

### 6.3 Desain
- 6.3.1 **Wireframe low-fi** (ASCII OK) — validasi flow + hierarki + urutan konten. **Belum warna/font.**
- 6.3.2 **Mockup spec** pakai [mockup-spec-template](../tools/mockup-spec-template.md): token (palette/type/spacing/radius), section breakdown, microcopy, component (new/reuse), responsive ≥2 breakpoint.
- 6.3.3 **State wajib:** design empty / error / loading (bukan cuma happy path) — H1 Nielsen.
- 6.3.4 **Reuse audit:** komponen existing dulu sebelum bikin baru (Atomic Design, Reuse>Rebuild).

### 6.4 Verdict (exit)
- 6.4.1 **Decision point:** semua exit criteria lolos — ≥5 reference logged · palette 0-coklat · kontras AA · state lengkap · no lorem · hero bukan stock · wireframe sebelum mockup?
  - **Lolos** → lanjut heuristic eval (SOP-BL-03) lalu handoff (SOP-BL-04).
  - **Gak lolos** → balik ke langkah yang bolong.

## 7. Pengecualian
- **Hotfix visual urgent (produksi keliatan rusak):** boleh mockup cepat untuk contain, reference scan + audit lengkap menyusul **< 24 jam**, dicatat.
- **Eksplorasi internal (belum show):** 6.2.1 boleh ringan, tapi **tetap wajib** sebelum apapun di-show ke Tata.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Reference URL + why | `log.md` | Permanen |
| Mockup spec | handoff doc / `tools/` | Per project |
| Anti-pattern audit | `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Reference coverage | # mockup dengan ≥5 reference ÷ total | 100% |
| First-pass approval | # mockup approve sekali ÷ total | ↑ tiap periode |
| State coverage | # flow dengan empty/error/loading ÷ total | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
