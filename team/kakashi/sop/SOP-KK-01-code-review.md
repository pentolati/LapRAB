# SOP-KK-01 — Code Review

| | |
|---|---|
| **Kode** | SOP-KK-01 |
| **Pemilik** | Kakashi (Lead Developer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | IEEE 1028, ISO/IEC 25010, [tools/code-review-rubric.md](../tools/code-review-rubric.md) |
| **COBIT** | BAI03 (Managed Solutions Build) |

## 1. Tujuan
Mencegah cacat (defect), kerentanan keamanan, dan inkonsistensi pola masuk ke branch utama, sebelum kode lanjut ke Pre-Tata Gate.

## 2. Ruang Lingkup
- **Berlaku:** semua PR/diff dari Killua, Saitama, Shikamaru, Levi sebelum merge ke main.
- **Tidak berlaku:** perubahan dokumentasi murni (no code), eksperimen di branch spike yang gak di-merge.

## 3. Definisi & Istilah
- **Hotspot** — bagian kode berisiko tinggi (security, integritas data, performa).
- **Smell** — tanda kode bermasalah walau "jalan" (pola berulang, abstraksi prematur, naming buruk).
- **Label feedback** — NIT (minor) / IDEA (alternatif) / REQUEST (saran kuat) / BLOCKER (wajib fix).

## 4. Referensi
IEEE 1028 (Software Reviews — tipe *inspection*), ISO/IEC 25010 (dimensi mutu), Tata mandate (F-1/F-2, Data SACRED, Reuse>Rebuild, stack-lock).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Pelaksanaan review | Kakashi | Kakashi | — | author |
| Perbaikan temuan | author | Kakashi | Kakashi | — |
| Eskalasi temuan security | Kakashi | Kakashi | @saitama | Tata (kalau Type-1) |

## 6. Prosedur

### 6.1 Pra-review (gate masuk)
- 6.1.1 Cek PR punya **deskripsi "why"**. Kalau kosong → **balikin ke author**, stop.
- 6.1.2 Cek **scope = 1 concern** (gak nyampur fitur + refactor besar). Kalau campur → minta split.
- 6.1.3 Cek **CI hijau & test ada**. Kalau merah/no test → balikin.

### 6.2 Review inti
- 6.2.1 Skim diff → **klasifikasi risiko** tiap file: High / Med / Low.
- 6.2.2 **Hotspot review** (file High dulu), cek berurutan:
  - a. Input validated di boundary?
  - b. Ada vektor injection (SQL/XSS/command)?
  - c. Auth & role check ada di tempat yang perlu?
  - d. **Data SACRED** — no hard delete, no overwrite tanpa audit?
  - e. Performa — N+1? O(n²) untuk n besar? re-render gak perlu (FE)?
- 6.2.3 **Smell test** — pola berulang (≥3 → flag lock pattern SOP-KK-06)? abstraksi prematur? naming membingungkan? dead code?
- 6.2.4 **Test coverage** — happy + edge + error path ada? nama test deskriptif?
- 6.2.5 **Stack-lock** — React + Chakra **v2** + Zustand + Fauxbase? no mock manual / Express? (kontrol KK-C4)
- 6.2.6 **Cross-cutting** — ada modul lain yang ke-break?

### 6.3 Verdict (exit)
- 6.3.1 Tulis **top-3 temuan** berlabel (root-cause framing) pakai rubrik.
- 6.3.2 **Decision point:** ada **BLOCKER**? → **Request changes** (loop ke author). Gak ada blocker → **Approve**.

## 7. Pengecualian
- **Hotfix S1 (produksi down):** boleh merge dulu, review **maksimal < 24 jam** setelahnya (post-merge review), wajib dicatat.
- **Perubahan oleh Kakashi sendiri:** minta second reviewer (@saitama/@killua) — gak self-approve.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Komentar + verdict | PR / `log.md` | Permanen |
| Temuan security (kalau ada) | `log.md` + ADR | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Escaped defect | # bug lolos ke Tata/prod ÷ total PR | ≈ 0 |
| First-pass rate | # PR approve sekali ÷ total PR | ↑ tiap periode |
| Cycle time review | rata-rata jam dari PR open → verdict | < 1 hari kerja |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
