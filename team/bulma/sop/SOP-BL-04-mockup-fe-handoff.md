# SOP-BL-04 — Mockup → FE Handoff

| | |
|---|---|
| **Kode** | SOP-BL-04 |
| **Pemilik** | Bulma (UI/UX Lead) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | [tools/mockup-spec-template.md](../tools/mockup-spec-template.md), [`02-RELATIONSHIPS.md`](../../02-RELATIONSHIPS.md) §4 (pair @killua↔@bulma) |
| **COBIT** | BAI03 (build), BAI07 (change acceptance / transitioning) |

## 1. Tujuan
Menyerahkan mockup ke Killua **dengan feasibility check di depan** — supaya gak ada mockup impossible/mahal yang bikin FE re-do (no throw-over-the-wall). Killua **gak boleh** dipaksa re-design saat impl.

## 2. Ruang Lingkup
- **Berlaku:** tiap mockup/spec yang siap diimplementasi FE.
- **Tidak berlaku:** eksplorasi internal yang belum final.

## 3. Definisi & Istilah
- **Feasibility check** — Killua nilai implementability + cost sebelum mockup di-lock.
- **Throw-over-the-wall** — anti-pattern: lempar spec tanpa cek feasibility (dilarang, RELATIONSHIPS §4).
- **Handoff doc** — spec lengkap + reference + QC pass + asset.

## 4. Referensi
RELATIONSHIPS §4 (pair wajib @killua↔@bulma), stack lock (React + Chakra **v2** + Zustand + Fauxbase), Reuse>Rebuild.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Susun handoff doc | Bulma | Bulma | — | — |
| Feasibility check | @killua | Bulma | — | — |
| Impl mockup | @killua | @killua | Bulma | — |
| Gate sebelum Tata | @kakashi | @kakashi | Bulma | Tata |

## 6. Prosedur

### 6.1 Pra-handoff (gate masuk)
- 6.1.1 Konfirmasi **SOP-BL-01 lolos** (≥5 reference, audit, wireframe) + **SOP-BL-03 lolos** (heuristic + a11y AA).
- 6.1.2 Pastikan handoff doc lengkap: token, section breakdown, microcopy real (no lorem), component (new/reuse), responsive ≥2 breakpoint, asset (hero/template — bukan stock).

### 6.2 Feasibility check (wajib, sebelum lock)
- 6.2.1 **Ping @killua** dengan spec → minta nilai: implementable dengan stack (Chakra v2 + Fauxbase)? cost wajar? ada komponen reuse?
- 6.2.2 **Decision point:** Killua bilang **impossible / mahal**? → **revisi mockup bareng** sampai feasible. **Jangan lock** mockup yang Killua harus re-do (kontrol BC5).
- 6.2.3 Catat konfirmasi feasibility @killua di log (bukti BC5).

### 6.3 Handoff & eskalasi visible
- 6.3.1 Lock mockup, serahkan handoff doc ke @killua untuk impl.
- 6.3.2 **Decision point:** output ini **user lihat (🟡)**? → setelah impl, lewat **Pre-Tata Gate (@kakashi)** lalu **sign-off Tata** sebelum go-live. Bulma standby jelasin intent visual di Gate.

## 7. Pengecualian
- **Spike eksperimen FE:** Killua boleh coba impl draft sebelum lock final, tapi feasibility tetap dikonfirmasi sebelum mockup dianggap "approved for build".

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Handoff doc + spec | handoff / `tools/` | Per project |
| Konfirmasi feasibility @killua | `log.md` (mention) | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Re-do FE krn infeasible | # mockup di-re-do Killua krn impossible | 0 |
| Feasibility-check coverage | # handoff dengan check @killua ÷ total | 100% |
| Handoff completeness | # handoff lengkap (token+asset+state) ÷ total | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
