# SOP-SK-05 — Spike Execution

| | |
|---|---|
| **Kode** | SOP-SK-05 |
| **Pemilik** | Senku (R&D Engineer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Time-boxed spike, hypothesis quality test, [tools/poc-report-template.md](../tools/poc-report-template.md) |
| **COBIT** | APO04 (Managed Innovation) |

## 1. Tujuan
Memvalidasi **kelayakan teknis** lewat prototype **time-boxed (≤ 3 hari, throwaway)** — confirm/refute hipotesis dengan bukti, bukan asumsi — tanpa kebablasan ngoding production.

## 2. Ruang Lingkup
- **Berlaku:** pertanyaan teknis yang butuh kode untuk dijawab (integrasi novel, perf claim, fit-stack uncertain).
- **Tidak berlaku:** pertanyaan yang bisa dijawab literature-scan (well-documented → SOP-SK-01); shipping fitur (itu Killua/Saitama).

## 3. Definisi & Istilah
- **Spike** — eksperimen time-boxed buat validate satu hipotesis teknis.
- **Throwaway code** — kode prototype yang tujuannya validate, **bukan di-ship** (dirty OK).
- **Stop condition** — batas yang menghentikan spike: time-box habis ATAU bukti cukup.
- **Time-box** — alokasi waktu maksimum: tight 2–4 jam / medium 1 hari / long 3 hari (hard cap).

## 4. Referensi
Tata mandate (prototype ≤3 hari, throwaway OK, ship bukan tugas Senku), hypothesis quality test (PLAYBOOK §5.5), reversibility (Type-1/Type-2).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Eksekusi spike | Senku | Senku | @kakashi/@saitama (kalau perlu input teknis) | @lelouch |
| Hand-off ke production (kalau keep) | @killua/@saitama | @kakashi | Senku | Tata |
| Report hipotesis gugur | Senku | Senku | — | @lelouch, Tata |

## 6. Prosedur

### 6.1 Setup
- 6.1.1 Tulis **hipotesis falsifiable** + **metric** + **stop condition**. Lewatkan hypothesis quality test (Specific/Measurable/Falsifiable/Time-boxed/Relevant).
- 6.1.2 Pilih **time-box** (tight/medium/long) sesuai kompleksitas (PLAYBOOK §5.2).
- 6.1.3 Decision: **build POC vs research-only** (§5.3) — kalau well-documented, gak usah spike.
- 6.1.4 Siapkan workspace throwaway: `team/senku/spikes/<date>-<topic>/`. Daemon: `alfred.implement(task, project_dir, acceptance="prototype validates X within Y min")` async.

### 6.2 Eksekusi
- 6.2.1 Build prototype **minimal** — cukup buat jawab hipotesis, jangan polish.
- 6.2.2 Kumpulkan **bukti** (screenshot, log, angka, benchmark).
- 6.2.3 **Decision point — time-box habis?** → **STOP** walau belum kelar. Hasil partial = tetap finding.
- 6.2.4 **Exit kalau > 3 hari** → **STOP + argue ke @lelouch** sebelum lanjut (jangan grinding diam).

### 6.3 Conclude
- 6.3.1 Tulis **spike report** ([poc-report-template](../tools/poc-report-template.md)): hipotesis, method, finding (worked/didn't), evidence, conclusion (confirmed/refuted/inconclusive), confidence + rationale.
- 6.3.2 **Decision point:** hipotesis gugur? → **report langsung** ke @lelouch + Tata (anti-hide), pivot. Confirmed + likely keep? → hand-off @killua/@saitama untuk rebuild proper (throwaway gak di-ship).
- 6.3.3 **Decision point:** prototype sentuh data/payment? → trigger SOP-SK-03.
- 6.3.4 **Research note high-level WAJIB sebelum fitur dibangun** (kontrol SK-C7, GOVERNANCE §4.7) — kalau spike ini jadi dasar fitur yang bakal di-build (@killua/@saitama), arsipkan **research note** (evidence + opsi + rekomendasi, ikut [poc-report-template](../tools/poc-report-template.md)) ke `senku/` + tautkan di `log.md`. **0 fitur boleh dibangun tanpa research note ter-arsip.**
- 6.3.5 **Exit criteria:** hipotesis ada verdict + evidence cited + time-spent vs estimate dicatat + recommendation actionable + (kalau jadi dasar fitur) research note ter-arsip + (kalau keep) hand-off plan jelas.

## 7. Pengecualian
- **Spike buntu sebelum time-box habis:** kalau jelas gak feasible lebih awal → STOP lebih cepat, report "refuted early" — gak buang sisa time-box.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Spike report (SPIKE-NNN) | `log.md` | Permanen |
| Research note high-level (sebelum fitur dibangun, §4.7) | `senku/` + tautan `log.md` | Permanen |
| Throwaway code | `team/senku/spikes/<date>-<topic>/` | Sampai keputusan keep/discard |
| Hand-off plan (kalau keep) | `log.md` + mention @killua/@saitama | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| On-time-box | # spike selesai ≤ time-box ÷ total | ↑ tiap periode |
| Decisiveness | # spike kelar dengan verdict ÷ total | 100% (no ngambang) |
| Throwaway discipline | # prototype Senku ke-ship langsung ke prod | **0** |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
