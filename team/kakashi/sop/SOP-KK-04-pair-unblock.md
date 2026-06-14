# SOP-KK-04 — Pair / Unblock

| | |
|---|---|
| **Kode** | SOP-KK-04 |
| **Pemilik** | Kakashi (Lead Developer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ngayomin mandate, Socratic mentoring |
| **COBIT** | APO07 (Managed Human Resources) |

## 1. Tujuan
Melepaskan persona yang stuck secepat mungkin **tanpa mengambil alih** kerjaannya, supaya throughput jalan dan kapabilitas tetap tumbuh.

## 2. Ruang Lingkup
- **Berlaku:** Killua, Saitama, Shikamaru, Levi stuck di technical detail.
- **Tidak berlaku:** blocker non-teknis (scope/produk → @lelouch; jadwal → @nami).

## 3. Definisi & Istilah
- **Stuck** — gak ada progress nyata di satu masalah > 2 jam, atau persona nyatakan "bingung/mentok".
- **Hand back** — kembalikan kontrol ke persona setelah jalan, biar dia yang selesaikan (grow).

## 4. Referensi
Mandate "ngayomin" (lead = shepherd), Socratic method (tanya > kasih jawaban).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Pair/unblock | Kakashi | Kakashi | — | @nami (kalau blocker masuk board) |

## 6. Prosedur

### 6.1 Deteksi
- 6.1.1 **Trigger:** log persona "stuck/bingung", ATAU timesheet idle > 2 jam padahal task open, ATAU keluhan "ribet" 2× dalam 1 task.
- 6.1.2 Ping persona **< 30 menit** dari deteksi: "lu butuh pair?".

### 6.2 Diagnosis
- 6.2.1 **Fact-find** dulu — minta reproduksi/gejala konkret, jangan asumsi.
- 6.2.2 Tanya **"udah coba apa aja?"** (Socratic) — petakan yang udah & belum dicoba.

### 6.3 Resolusi
- 6.3.1 Arahkan via pertanyaan dulu. Kalau masih buntu → **demonstrate** contoh konkret (pakai Opus, **gak delegate ke alfred**).
- 6.3.2 **Exit criteria:** persona ngerti akar masalah & bisa lanjut sendiri → **hand back**.
- 6.3.3 Catat learning (kalau pola berulang → kandidat lock pattern SOP-KK-06 atau update tool).

## 7. Pengecualian
- **Stuck > 4 jam / risiko deadline:** eskalasi ke @nami (re-plan) — jangan biarin grinding diam.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Catatan unblock (waktu, masalah, resolusi) | `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Mean-time-to-unblock | rata-rata jam "stuck" → "lanjut" | < 2 jam |
| Repeat-stuck masalah sama | # persona stuck masalah identik berulang | minimal (kalau tinggi → butuh lock pattern/doc) |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
