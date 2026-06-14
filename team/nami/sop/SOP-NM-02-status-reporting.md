# SOP-NM-02 — Status Reporting

| | |
|---|---|
| **Kode** | SOP-NM-02 |
| **Pemilik** | Nami (Project Manager) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | PMBOK (Monitoring & Controlling), [tools/status-report-template.md](../tools/status-report-template.md) |
| **COBIT** | MEA01 (Managed Performance & Conformance Monitoring) |

## 1. Tujuan
Memberi Tata gambaran **jujur, scannable, evidence-backed** soal status delivery — apa shipped, apa in-progress, apa blocked, risk apa, dan **apa yang Tata perlu putuskan**. Status hijau hanya kalau **bener-bener hijau**.

## 2. Ruang Lingkup
- **Berlaku:** status report sprint-end, status saat Tata minta ("update gimana?"), atau cadence rutin.
- **Tidak berlaku:** klarifikasi 1-liner cepat (cukup briefing 30-detik lisan, gak perlu report formal).

## 3. Definisi & Istilah
- **Status color** — 🟢 on-track / 🟡 at-risk-recoverable / 🔴 off-track.
- **Hijau-palsu** — declare hijau padahal realita kuning/merah. **Haram** (Tata anti-hide).
- **Evidence-backed** — tiap klaim "done/shipped" ada link artifact/screenshot/log.
- **Ask** — keputusan eksplisit yang Nami minta Tata putuskan.

## 4. Referensi
PMBOK Monitoring & Controlling, mandate Tata (status jujur, evidence-first, bold key point, report jalan enak / anti-bloat).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Susun status report | Nami | Nami | area owner (verifikasi) | — |
| Declare status color | Nami | Nami | — | Tata |
| Putus atas "ask" | — | **Tata** | Nami | tim |

## 6. Prosedur

### 6.1 Pengumpulan
- 6.1.1 **Baca semua log + timesheet persona aktif** (`Read` tool langsung) — apa shipped, in-progress, blocked.
- 6.1.2 Cross-check klaim vs **evidence** (link/screenshot). Klaim tanpa bukti → balik ke owner, jangan masukin report.

### 6.2 Sintesa
- 6.2.1 Susun pakai [status-report-template](../tools/status-report-template.md): TL;DR 3 bullet · shipped · in-progress (tabel) · blockers · risks · decisions-needed.
- 6.2.2 **Declare status color jujur** — cocokkan vs blocker/slip nyata. Ada blocker recoverable → 🟡. Off-track → 🔴. **JANGAN inflate jadi hijau.** (kontrol N2)

### 6.3 Distribusi (exit)
- 6.3.1 **Jalankan QC checklist**: status jujur · evidence linked · risk surfaced · ask explicit · bold key point · time-frame clear · anti-bloat (max 1 halaman).
- 6.3.2 **Decision point:** report ke Tata? → handoff **Pre-Tata Gate Kakashi** (SOP-KK-03) dulu.
- 6.3.3 **Exit criteria:** report scannable, status jujur, ask eksplisit, (kalau ke Tata) gate pass.

## 7. Pengecualian
- **Briefing 30-detik on-demand:** Tata tanya mendadak → kasih briefing dari mental snapshot (SOP-NM-04 §6.2), gak perlu report formal — tapi tetap **jujur status color**.
- **Status 🔴 (off-track):** gak nunggu cadence — **escalate same-day**.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Status report | `nami/status/YYYY-WW.md` atau `nami/log.md` | Permanen |
| Briefing on-demand | `nami/log.md` (catatan) | Permanen |
| PDF exec (kalau ada) | `lucius.document` output | Sesuai kebutuhan |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| **Status hijau-palsu** | # hijau yang ternyata slip/blocked | **0** |
| Report tanpa evidence | # klaim done tanpa link bukti | 0 |
| Briefing readiness | bisa briefing 30-detik tanpa scramble? | selalu ya |
| Report bloated | # report >1 halaman buat weekly | minimal |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: briefing snapshot 9 persona pas kickoff landing v4 |
