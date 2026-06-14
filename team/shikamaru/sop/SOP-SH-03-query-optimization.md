# SOP-SH-03 — Query Optimization

| | |
|---|---|
| **Kode** | SOP-SH-03 |
| **Pemilik** | Shikamaru (DBA / Data Architect) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | DAMA-DMBOK (Data Operations), Postgres query planner, [tools/query-optimization-framework.md](../tools/query-optimization-framework.md) |
| **COBIT** | APO14 (Managed Data), DSS06 (Business Process Controls) |

## 1. Tujuan
Mengubah query lambat jadi cepat **berbasis bukti** (EXPLAIN ANALYZE), bukan tebak-tebakan — dengan perbaikan terukur (before/after) dan tanpa menambah index sembarangan.

## 2. Ruang Lingkup
- **Berlaku:** query yang lambat > target latency atau sering dipanggil (hot path) — cth Proyek-Contoh: list pesanan user, agregat payment masuk, feed cart.
- **Tidak berlaku:** desain skema baru (SOP-SH-01); penambahan index murni tanpa query lambat (SOP-SH-05).

## 3. Definisi & Istilah
- **EXPLAIN ANALYZE** — perintah Postgres yang **menjalankan** query + menampilkan rencana eksekusi nyata + waktu per node.
- **Seq scan** — baca seluruh tabel (lambat untuk tabel besar); **index scan** — lewat index (cepat).
- **Cost driver** — penyebab utama lambat: seq scan, sort spill ke disk, join order buruk, N+1.
- **Hot query** — query di jalur panas (sering / latency-sensitive).

## 4. Referensi
`EXPLAIN (ANALYZE, BUFFERS)`, statistik planner (`pg_stat_statements`), anti-pattern N+1 / `SELECT *` ([PLAYBOOK §6](../PLAYBOOK.md)), [query-optimization-framework](../tools/query-optimization-framework.md).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Diagnosa & fix query | Shikamaru | Shikamaru | @saitama (kalau query dari BE) | @kakashi |
| Index baru (kalau jadi fix) | Shikamaru | Shikamaru | — | @levi (deploy) |

## 6. Prosedur

### 6.1 Ukur (baseline)
- 6.1.1 Jalankan **`EXPLAIN (ANALYZE, BUFFERS)`** — bukan EXPLAIN polos. Catat **baseline latency** (before).
- 6.1.2 Exit kalau query belum reproducible / data volume gak realistic → setup dulu (tebak di data kecil = invalid).

### 6.2 Diagnosa
- 6.2.1 **Identify cost driver** dari plan: seq scan di tabel besar? sort spill (`external merge Disk`)? join order salah? N+1 dari ORM?
- 6.2.2 Tentukan **hipotesis fix** (≥1, prefer paling murah dulu): tambah/ubah index? rewrite query (hindari `SELECT *`, fungsi di WHERE)? denormalisasi (mahal, terakhir)?

### 6.3 Fix & buktikan (exit)
- 6.3.1 Terapkan fix. **Index baru?** → patuh SOP-SH-05 (proven pattern, no redundant) + kontrol D5.
- 6.3.2 Jalankan **EXPLAIN ANALYZE lagi** → catat **after latency**. Bandingkan before/after (bukti wajib).
- 6.3.3 **Decision point:** improvement signifikan + no regresi tabel lain? → terapkan. Kalau fix = index/skema produksi → lewat SOP-SH-02 (migration).
- 6.3.4 **Exit criteria:** before/after terdokumentasi + hot query ≤ target latency + no seq-scan di tabel besar jalur panas → log + kabari @saitama (kalau query BE).

## 7. Pengecualian
- **Query analitik/reporting jarang:** boleh seq scan kalau tabel kecil / sekali sehari — jangan over-index (write penalty > benefit).
- **Prototype Fauxbase:** query in-memory, optimasi tidak relevan; aktif saat real DB.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| EXPLAIN ANALYZE before/after | `log.md` | Permanen |
| Index baru (kalau ada) | repo migration | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Hot query memenuhi target latency | # hot query ≤ target ÷ total | ↑ tiap periode |
| Seq scan di jalur panas | # hot query masih seq-scan tabel besar | 0 |
| Fix berbasis bukti | # fix dengan before/after EXPLAIN ÷ total fix | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
