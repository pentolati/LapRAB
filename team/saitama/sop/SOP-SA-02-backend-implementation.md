# SOP-SA-02 — Backend Implementation

| | |
|---|---|
| **Kode** | SOP-SA-02 |
| **Pemilik** | Saitama (Senior Backend Engineer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | SWEBOK (Construction), 12-Factor App, ISO/IEC 25010, [tools/be-impl-checklist.md](../tools/be-impl-checklist.md) |
| **COBIT** | BAI03 (Managed Solutions Build) |

## 1. Tujuan
Mengubah kontrak yang sudah di-lock (SOP-SA-01) jadi implementasi backend yang **lestari (sustainable)** — clean separation, test cukup, evidence-first — bukan first-aid coding "yang penting jalan".

## 2. Ruang Lingkup
- **Berlaku:** implementasi endpoint, business logic, integrasi, refactor BE.
- **Tidak berlaku:** desain kontrak (SOP-SA-01), desain skema (SOP-SA-04 + @shikamaru), prototype Fauxbase-only di FE.

## 3. Definisi & Istilah
- **Service layer** — lapisan business logic, dipisah dari handler (HTTP) & repository (DB).
- **Transaction boundary** — batas operasi DB yang harus all-or-nothing.
- **Sustain vs first-aid** — refactor proper vs tambal band-aid (Tata mandate).

## 4. Referensi
SWEBOK Software Construction, 12-Factor (config di env, log as stream, stateless), Tata mandate (sustain, no tambal-sulam, evidence-first, stack-lock Fauxbase).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Implementasi | Saitama | Saitama | @shikamaru (query), @kakashi (pattern) | @killua |
| Code review | @kakashi | @kakashi | — | Saitama |
| Integration test | @l | @l | Saitama | @kakashi |

## 6. Prosedur

### 6.1 Pra-impl (gate masuk)
- 6.1.1 Konfirmasi **kontrak udah lock** (SOP-SA-01) + sign-off Killua. Kalau belum → **stop, balik ke SOP-SA-01.**
- 6.1.2 Konfirmasi **skema fit** (joint @shikamaru). Kalau butuh skema baru → SOP-SA-04 dulu.

### 6.2 Implementasi
- 6.2.1 **Clean separation:** handler (parse/validasi HTTP) → service (business logic) → repository (DB). Gak campur business logic di handler.
- 6.2.2 **Input validation di boundary** — schema-based (Zod/joi/ajv). Reject di pintu masuk, jangan biarin masuk dalam.
- 6.2.3 **Query parameterized** — never string-concat SQL (anti-injection, kontrol SA-C2).
- 6.2.4 **Transaction boundary** — operasi multi-statement dibungkus transaksi (no partial commit).
- 6.2.5 **Data SACRED** — mutation lewat SOP-SA-04 (soft delete, audit trail). **Decision point:** ada DELETE/overwrite? → wajib SOP-SA-04.
- 6.2.6 **Auth enforcement** — endpoint sensitif lewat SOP-SA-03.
- 6.2.7 **Logging + error handling** — lewat SOP-SA-05 (structured log req-id+user-id, error code table).
- 6.2.8 **Stack-lock:** prototype → Fauxbase, **bukan Express manual / mock manual** (kontrol KK-C4 Kakashi).

### 6.3 Test & self-QC
- 6.3.1 **Unit test** service logic + **integration test** endpoint (happy + edge + error path).
- 6.3.2 Jalankan [be-impl-checklist](../tools/be-impl-checklist.md) — **exit criteria:** semua item ✅.
- 6.3.3 **Evidence** — curl/Postman output + test pass (Tata mandate evidence-first).

### 6.4 Handoff
- 6.4.1 **Buat engineering note high-level** (kontrol SA-C7) — kalau unit kerja non-trivial, tulis eng-note ikut [`../../kakashi/tools/eng-note-template.md`](../../kakashi/tools/eng-note-template.md), simpan di `saitama/notes/YYYY-MM-DD-<topik>.md` (konteks + keputusan teknis + dampak ke @killua/@shikamaru). Trivial (one-liner) cukup di `log.md`. **Exit criteria: eng-note ter-arsip + ditautkan di `log.md`.**
- 6.4.2 Handoff @l (integration test) + kabarin @killua (consume).
- 6.4.3 **Decision point:** lolos self-QC + ada evidence + eng-note ter-arsip (kalau non-trivial)? → handoff ke review @kakashi (SOP-KK-01) → Pre-Tata Gate. Belum → fix dulu, **jangan lapor "beres" tanpa bukti.**

## 7. Pengecualian
- **Hotfix S1 (prod down):** boleh impl cepat untuk contain, test + checklist nyusul < 24 jam (post-fix), wajib dicatat + RCA (SOP-KK-05).

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Narasi impl + evidence (curl/test) | `log.md` | Permanen |
| Engineering note high-level (unit kerja non-trivial) | `notes/YYYY-MM-DD-<topik>.md` | Permanen |
| Timesheet | `timesheet.md` | Permanen |
| Verdict review | PR / `log.md` (Kakashi) | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Escaped defect BE | # bug lolos ke Tata/prod ÷ total endpoint | ≈ 0 |
| Test coverage path | # endpoint ber-test happy+edge+error ÷ total | ↑ → 100% |
| First-pass review rate | # PR approve sekali ÷ total PR BE | ↑ tiap periode |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
