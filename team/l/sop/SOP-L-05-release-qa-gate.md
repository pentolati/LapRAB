# SOP-L-05 — Release QA Gate

| | |
|---|---|
| **Kode** | SOP-L-05 |
| **Pemilik** | L (QA Senior) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ISO/IEC 29119 (exit criteria), [tools/regression-checklist.md](../tools/regression-checklist.md), [tools/severity-matrix.md](../tools/severity-matrix.md) |
| **COBIT** | BAI07 (Change Acceptance), MEA01 (Performance & Conformance Monitoring) |

## 1. Tujuan
Menjamin **gak ada rilis yang punya cacat kritis (S1/S2) sampai ke user.** Gate ini kontrol internal QA-C1 — verdict PASS/FAIL gw yang nentuin output lanjut ke go-live.

## 2. Ruang Lingkup
- **Berlaku:** tiap rilis / go-live (fitur baru, fix, deploy ke produksi).
- **Tidak berlaku:** perubahan internal non-rilis (spike, branch eksperimen).

## 3. Definisi & Istilah
- **QA gate** — checkpoint mutu sebelum rilis; verdict **PASS** (lanjut) / **FAIL** (tahan).
- **Exit criteria** — syarat wajib terpenuhi biar PASS.
- **Co-gate** — gate QA (L) + release readiness (Levi) dua-duanya wajib PASS.
- **Visible (🟡)** — output yang user lihat → butuh go-live sign-off Tata.

## 4. Referensi
ISO/IEC 29119 (exit criteria), mandate Tata (Data SACRED, F-2, evidence-first, anti-hide). Verdict QA feed go-live Tata; **blocking S1/S2 = otoritas L mutlak.**

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Jalankan QA gate | L | L | @levi (readiness) | tim |
| Block release karena S1/S2 | L | **L** (mengikat) | — | @nami, Tata |
| Perbaikan kalau FAIL | dev owner | L | L | — |
| Go-live (output visible) | R: @levi | **Tata** | L, @kakashi | tim |

## 6. Prosedur

### 6.1 Pra-gate
- 6.1.1 Konfirmasi **test plan + test case 3-kategori** udah dieksekusi (SOP-L-01/02).
- 6.1.2 Konfirmasi **regression** area tersentuh udah jalan (SOP-L-03).

### 6.2 Pemeriksaan gate (checklist)
- 6.2.1 Jalankan [regression-checklist](../tools/regression-checklist.md): functional · cross-browser · a11y ≥90 · perf baseline · data integrity · regression · evidence.
- 6.2.2 Cek **status bug**: semua **S1/S2 closed**? (filter severity per [matrix](../tools/severity-matrix.md)).
- 6.2.3 **Universal check:** evidence per item (screenshot/log/test result), no "should work", dual-layer doc siap.
- 6.2.4 Cek **co-gate Levi** (release readiness) — dua-duanya PASS?

### 6.3 Verdict (exit)
- 6.3.1 **Decision point:**
  - **PASS** → semua S1/S2 closed + checklist hijau + bukti lengkap → forward ke Pre-Tata Gate (@kakashi) → **flag visible 🟡 butuh go-live sign-off Tata.**
  - **FAIL** → ada **S1/S2 open** → **tahan rilis** + feedback konkret ke dev owner → loop sampai closed. **Ini keputusan gw, bukan rekomendasi.**
- 6.3.2 Tulis sign-off dual-layer (ringkasan awam + detail) di `log.md` + ACTIVITY.
- 6.3.3 **Test note (hasil + verdict) WAJIB diarsip ke `l/` + dirujuk** (sesuai GOVERNANCE §4.7) — tiap rilis ninggalin test note + verdict PASS/FAIL terarsip sebagai artefak audit (kontrol L-C7).

## 7. Pengecualian
- **Override gate** hanya oleh **Tata, eksplisit, tercatat** (rilis dengan known S1/S2 = keputusan bisnis Tata, bukan QA). Gw catat sebagai risiko + dampak.
- **Hotfix S1 produksi down:** gate dipersempit ke smoke + area fix; full gate menyusul < 24 jam.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Sign-off gate + checklist | `log.md` + ACTIVITY | Permanen |
| Daftar S1/S2 + status closed | `log.md` | Permanen |
| Override Tata (kalau ada) | `log.md` (risiko + dampak) | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| **Bug S1/S2 lolos rilis** | # S1/S2 yang lolos gate | **0** |
| Escaped defect ke prod | # bug lolos produksi ÷ total rilis | ≈ 0 |
| Gate evidence completeness | # item gate ber-bukti ÷ total item | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
