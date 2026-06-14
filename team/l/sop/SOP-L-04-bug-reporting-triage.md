# SOP-L-04 — Bug Reporting & Severity Triage

| | |
|---|---|
| **Kode** | SOP-L-04 |
| **Pemilik** | L (QA Senior) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ISTQB defect management, [tools/bug-report-template.md](../tools/bug-report-template.md), [tools/severity-matrix.md](../tools/severity-matrix.md) |
| **COBIT** | DSS02 (Managed Service Requests & Incidents) |

## 1. Tujuan
Mengubah temuan cacat jadi **bug report yang actionable** — repro minimal & deterministik + severity akurat (S1–S4) — biar dev bisa langsung fix tanpa nebak.

## 2. Ruang Lingkup
- **Berlaku:** tiap test fail / bug ditemukan (manual, otomatis, atau laporan user).
- **Tidak berlaku:** request fitur baru (itu @lelouch, bukan bug).

## 3. Definisi & Istilah
- **Repro minimal** — langkah paling sedikit yang masih munculin bug.
- **Deterministik** — hasil sama tiap dijalanin (3× konsisten).
- **Severity S1–S4** — S1 blocker/down/data-loss/security · S2 major no-workaround · S3 minor ada-workaround · S4 cosmetic.
- **Severity vs Priority** — severity = parah-nya dampak; priority = cepat-nya harus difix (bisa beda).

## 4. Referensi
ISTQB defect lifecycle, severity matrix (tools), mandate Tata: **F-2 boomer-proof** (UI bug nyusahin user warung = critical), **dual-layer doc** (awam + engineer), no blame ping-pong.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Repro & dokumentasi bug | L | L | dev owner | @nami (kalau block release) |
| Assign severity | L | L | dev owner (kalau debat) | — |
| Eskalasi bug block-release | L | L | @nami | Tata |

## 6. Prosedur

### 6.1 Reproduksi
- 6.1.1 Catat **environment** reporter: browser, device, user role, app version/commit.
- 6.1.2 **Repro di dev** — exact same steps.
- 6.1.3 **Isolate** — hapus step satu-satu sampai tinggal yang minimal masih munculin bug.
- 6.1.4 **Determinism check** — jalanin 3× → hasil sama? Kalau enggak → flag intermittent + cari pemicu.

### 6.2 Assign severity
- 6.2.1 Tentuin **severity per matrix** ([severity-matrix](../tools/severity-matrix.md)): dampak ke user + ada workaround?
- 6.2.2 **F-2 check:** bug UI yang bikin user awam nyangkut = naikkan severity (boomer-proof = first-class).
- 6.2.3 **Data SACRED check:** bug yang berpotensi data loss/overwrite = otomatis **S1**.
- 6.2.4 **Decision point:** S1/S2? → flag **release-blocker**, ping dev owner + @nami langsung.

### 6.3 Dokumentasi & handoff (exit)
- 6.3.1 Tulis bug via [bug-report-template](../tools/bug-report-template.md): severity, environment, repro minimal, expected vs actual, evidence (screenshot/video/log/network), impact, suggested fix area.
- 6.3.2 **Dual-layer:** ringkasan awam (Tata-friendly, bahasa warung) + detail engineer.
- 6.3.3 Handoff ke dev owner (@killua/@saitama/@shikamaru), **fakta + impact, no ego.**
- 6.3.4 **Exit criteria:** repro deterministik (3×) + severity per matrix + evidence lengkap + owner ter-assign.

## 7. Pengecualian
- **Bug intermittent gak bisa repro deterministik:** tetap report dengan flag "intermittent" + frekuensi + kondisi suspect; jangan diem-in.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Bug report (BUG-NNNN) | `bugs/<id>.md` + `log.md` | Permanen |
| Evidence (screenshot/video/log) | evidence folder | Permanen |
| Severity decision | bug report | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Repro determinism | # bug repro konsisten 3× ÷ total | 100% |
| Severity akurasi | # severity di-revise dev ÷ total bug | minimal |
| Bug actionable | # bug yang dev fix tanpa nanya balik ÷ total | ↑ |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: BUG-0042 empty-email validation |
