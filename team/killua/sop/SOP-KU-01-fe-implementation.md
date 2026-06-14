# SOP-KU-01 — FE Implementation

| | |
|---|---|
| **Kode** | SOP-KU-01 |
| **Pemilik** | Killua (Senior Frontend Engineer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | SWEBOK (Construction), React best practices, ISO/IEC 25010, [tools/fe-impl-checklist.md](../tools/fe-impl-checklist.md) |
| **COBIT** | BAI03 (Managed Solutions Build — Accountable FE) |

## 1. Tujuan
Menerjemahkan spec/mockup yang sudah approved jadi UI **production-ready** yang match-mockup, boomer-proof, stack-compliant, dan ber-evidence — sebelum masuk code review (SOP-KK-01) & Pre-Tata Gate (SOP-KK-03).

## 2. Ruang Lingkup
- **Berlaku:** semua implementasi halaman/section/component FE di project tim (mis. Proyek-Contoh wedding-app).
- **Tidak berlaku:** mockup belum approved (jalan SOP-KU-04 dulu); perubahan dokumentasi murni; spike eksperimen yang gak di-merge.

## 3. Definisi & Istilah
- **Production-ready** — render bersih (no console error/warning), interaktif, ber-state lengkap (empty/loading/error), responsive, a11y baseline.
- **Stack-lock** — React + Chakra UI **v2** + Zustand + Fauxbase. Chakra v3 / mock manual / Express = haram.
- **Evidence** — screenshot desktop (1280px) + mobile (375/390px) + bukti console clean. Tata mandate "evidence first".
- **Theme token** — nama warna/spacing semantik (`mauve.500`), bukan hex literal.

## 4. Referensi
SWEBOK Software Construction, React official best practices (hooks rules, render purity), ISO/IEC 25010 (dimensi mutu), mandate Tata (F-2 boomer-proof, stack-lock, Reuse>Rebuild, no tambal-sulam, evidence-first, anti-coklat).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Implementasi FE | Killua | Killua | @bulma (visual), @saitama (API) | @kakashi |
| Self-QC sebelum handoff | Killua | Killua | — | — |
| Code review | author (Killua) | @kakashi | — | — |
| Sign-off output visible | — | **Tata** | @kakashi | tim |

## 6. Prosedur

### 6.1 Persiapan
- 6.1.1 Baca **spec/mockup lengkap** — section, component, responsive breakpoint, microcopy. Kalau ambigu → klarifikasi ke @bulma/@lelouch dulu.
- 6.1.2 **Cek prasyarat:** mockup approved (SOP-KU-04 lolos)? Kalau perlu data → kontrak API udah disepakati sama @saitama? Kalau belum → **stop**, jalan SOP-KU-04 / sync Saitama.
- 6.1.3 **Reuse audit** (SOP-KU-02) — wajib sebelum nulis component baru. **Exit kalau audit belum jalan.**

### 6.2 Konstruksi
- 6.2.1 **Plan component tree** — sketch hierarki: page → section → composed → atom. Tentukan reuse vs modify vs new.
- 6.2.2 **State decision** (SOP-KU-05) — local / Zustand / server (Fauxbase) / URL.
- 6.2.3 **Stub dulu** — bikin shell tanpa style, validasi hierarki jalan.
- 6.2.4 **Style per spec** — pakai **theme token**, JANGAN hardcode hex. Anti-coklat (kontrol KU-C5).
- 6.2.5 **Stack-lock check** — React + Chakra **v2** + Zustand + Fauxbase. No mock manual / Express (kontrol KU-C1). Data via Fauxbase entity+service.
- 6.2.6 **TS ketat** — no `any` tanpa argumen; no `console.log` leftover.
- 6.2.7 **Responsive + a11y pass** (SOP-KU-03) — minimal 2 breakpoint, semantic HTML, keyboard nav, focus visible, kontras WCAG AA.

### 6.3 Verifikasi & handoff (exit)
- 6.3.1 Jalankan **self-QC** lengkap ([fe-impl-checklist](../tools/fe-impl-checklist.md)) — semua item tick.
- 6.3.2 **Capture evidence** — screenshot desktop + mobile (top + scroll), bukti console clean. Save path di `log.md` (kontrol KU-C3).
- 6.3.3 **Buat engineering note high-level** (kontrol KU-C7) — kalau unit kerja non-trivial, tulis eng-note ikut [`../../kakashi/tools/eng-note-template.md`](../../kakashi/tools/eng-note-template.md), simpan di `killua/notes/YYYY-MM-DD-<topik>.md`. Trivial (typo/one-liner) cukup di `log.md`. **Exit criteria: eng-note ter-arsip + ditautkan di `log.md`.**
- 6.3.4 **Decision point:** semua self-QC lolos + evidence ada + eng-note ter-arsip (kalau non-trivial)?
  - **Ya** → handoff ke **@kakashi** (code review + Pre-Tata Gate). Kalau visible → flag butuh sign-off Tata 🟡.
  - **Tidak** → balik ke 6.2, fix dulu. Jangan handoff setengah jadi.
- 6.3.5 Update `log.md` + `timesheet.md` + 1-liner `ACTIVITY.md`.

## 7. Pengecualian
- **Hotfix UI urgent (visible broken di prod):** boleh fix cepat untuk contain, tapi **tetap** self-QC minimal + evidence + lewat Gate post-fix < 24 jam. Gak boleh skip evidence.
- **Spec belum final tapi Tata minta prototype cepat:** boleh, tapi **surface limitation jujur** di log (cth: persist localStorage, konten placeholder) — anti-hide.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Reuse audit + self-test + screenshot path | `log.md` | Permanen |
| Engineering note high-level (unit kerja non-trivial) | `notes/YYYY-MM-DD-<topik>.md` | Permanen |
| Timesheet | `timesheet.md` | Permanen |
| ADR (kalau Type-1, mis. ganti lib) | `adr/NNN-*.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Match-mockup rate | # section sesuai mockup ÷ total section | ≥ 95% |
| Escaped FE defect | # bug FE lolos ke Tata/prod ÷ total PR | ≈ 0 |
| Evidence coverage | # handoff ber-screenshot+console ÷ total | 100% |
| Cycle time impl | rata-rata jam spec approved → handoff | < 4 jam (atau signal awal) |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: landing Proyek-Contoh v2/v3/v4 |
