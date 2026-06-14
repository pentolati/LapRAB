# SOP-L-01 — Test Planning

| | |
|---|---|
| **Kode** | SOP-L-01 |
| **Pemilik** | L (QA Senior) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ISTQB (test levels/types), ISO/IEC 29119, Risk-Based Testing, [tools/test-plan-template.md](../tools/test-plan-template.md) |
| **COBIT** | BAI07 (Change Acceptance & Transitioning) |

## 1. Tujuan
Menetapkan **cakupan, level, jenis, dan prioritas** pengujian sebuah fitur **berbasis risiko** sebelum eksekusi, supaya effort fokus ke yang paling bisa rusak — bukan test buta semua.

## 2. Ruang Lingkup
- **Berlaku:** tiap fitur/perubahan yang masuk test scope sebelum rilis.
- **Tidak berlaku:** perubahan dokumentasi murni (no code), spike eksperimen yang gak di-merge.

## 3. Definisi & Istilah
- **Risk-based testing** — prioritas test = probabilitas rusak × dampak ke user.
- **Critical path** — alur user paling penting (auth, payment, create-data, RSVP).
- **Test level** — unit / integration / system / acceptance.
- **Test type** — functional / non-functional (perf, a11y, security) / regression.

## 4. Referensi
ISTQB (test levels/types/techniques), ISO/IEC 29119 (test process), mandate Tata (Data SACRED, F-2 boomer-proof, evidence-first).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Susun test plan | L | L | @lelouch (acceptance), @kakashi (strategy) | tim |
| Review acceptance criteria | L | L | @lelouch | — |
| Konfirmasi strategi (E2E vs integration) | L | L | @kakashi | — |

## 6. Prosedur

### 6.1 Input & framing
- 6.1.1 Baca **PRD + mockup + impl** — pahami expected behavior & domain edge case.
- 6.1.2 Identifikasi **acceptance criteria** dari PRD (kalau gak ada → balikin ke @lelouch).
- 6.1.3 Petakan **critical path** (alur yang kalau rusak = fatal).

### 6.2 Risk-based scoping
- 6.2.1 Skor tiap area: **probabilitas rusak × dampak** (High/Med/Low).
- 6.2.2 Tentuin **test level** (perlu E2E? cukup integration?) — sync @kakashi kalau fitur besar/multi-integrasi.
- 6.2.3 Tentuin **test type**: functional wajib; non-functional (a11y/perf) kalau visible; security kalau ada input/auth.
- 6.2.4 Tetapkan **prioritas** kalau time-constrained: critical path → auth/payment/data → cross-browser top 2 → responsive → sisa edge+a11y.

### 6.3 Output (exit)
- 6.3.1 Tulis test plan via [test-plan-template](../tools/test-plan-template.md): scope, kategori test, browser matrix, a11y check, acceptance link.
- 6.3.2 **Exit criteria:** test plan ada scope + 3-kategori slot + critical path 100% tercakup + acceptance ter-link → lanjut SOP-L-02 (desain test case).
- 6.3.3 **Test note (hasil + verdict) WAJIB diarsip ke `l/` + dirujuk** (sesuai GOVERNANCE §4.7) — test plan & hasil eksekusi jadi artefak permanen, bukan cuma di kepala (kontrol L-C7).

## 7. Pengecualian
- **Hotfix S1 (produksi down):** test plan boleh ringkas (smoke + area fix), full plan menyusul < 24 jam, tetap dicatat.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Test plan | `test-plan/<feature>.md` | Permanen |
| Risk scoring | test plan + `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Coverage critical path | # critical journey ter-plan ÷ total | 100% |
| Plan-before-execute | # fitur ber-test-plan ÷ total fitur | 100% |
| Risk hit rate | # bug ketemu di area High-risk ÷ total bug | ↑ (validasi scoring) |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
