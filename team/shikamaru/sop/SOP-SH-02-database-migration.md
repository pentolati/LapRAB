# SOP-SH-02 — Database Migration

| | |
|---|---|
| **Kode** | SOP-SH-02 |
| **Pemilik** | Shikamaru (DBA / Data Architect) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | DAMA-DMBOK (Data Storage & Operations), online DDL (pg_repack/pt-osc), [tools/migration-checklist.md](../tools/migration-checklist.md) |
| **COBIT** | APO14 (Managed Data), BAI03 (Managed Solutions Build) |

## 1. Tujuan
Menjamin **setiap perubahan skema existing aman, terpulihkan (reversible dengan DOWN teruji), dan tanpa kehilangan data** — tidak mengunci produksi, dan menegakkan Data SACRED.

## 2. Ruang Lingkup
- **Berlaku:** semua perubahan skema tabel existing — tambah/ubah kolom, tambah index produksi, ubah constraint, backfill data.
- **Tidak berlaku:** desain skema fitur baru (SOP-SH-01), optimasi query tanpa ubah skema (SOP-SH-03).

## 3. Definisi & Istilah
- **UP / DOWN** — skrip migrasi maju (UP) dan skrip rollback (DOWN) yang membalikkan UP.
- **Backfill** — mengisi data kolom baru ke baris lama, **chunked** (bertahap) + **idempotent** (aman diulang).
- **Online DDL** — ubah skema tanpa lock lama (pg_repack, pt-online-schema-change, rename-swap).
- **Lock duration** — durasi tabel terkunci selama DDL; pada tabel besar bisa bikin produksi nge-freeze.
- **Type-1 (data)** — perubahan destruktif (drop/ubah-tipe/overwrite) yang **irreversible** → escalate.

## 4. Referensi
Online DDL tools, mandate Data SACRED (no destructive tanpa izin), anti-pattern "migration tanpa rollback" & "DDL tabel besar tanpa online tool" ([PLAYBOOK §6](../PLAYBOOK.md)).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Tulis UP + DOWN + backfill | Shikamaru | Shikamaru | @saitama | @kakashi |
| Test di staging | Shikamaru | Shikamaru | @l | — |
| Eksekusi di produksi | @levi | Shikamaru | @levi | @nami, Tata (kalau visible) |
| Migration destruktif (Type-1) | Shikamaru | **Tata** | @kakashi | tim |

## 6. Prosedur

### 6.1 Audit dampak
- 6.1.1 Ukur **tabel size** (jumlah row), **lock duration estimate**, dan **downstream consumer** (siapa baca/tulis tabel ini).
- 6.1.2 **Klasifikasi reversibility:** destruktif (drop kolom/ubah tipe/overwrite/hard delete)? → **Type-1 🔴 escalate** via @kakashi + SDR. Aditif (tambah kolom nullable/index)? → Type-2 lanjut.

### 6.2 Desain migrasi
- 6.2.1 Tulis **UP script**.
- 6.2.2 Tulis **DOWN script** — **wajib**; harus benar-benar membalikkan UP (bukan sekadar placeholder).
- 6.2.3 **Pilih strategi by size:** tabel < 100rb row → direct DDL OK; tabel besar → **online DDL** (pg_repack/pt-osc/rename-swap), **bukan** ALTER langsung yang lock.
- 6.2.4 **Backfill plan** (kalau perlu): chunked + idempotent; kolom baru NOT NULL → tambah nullable dulu → backfill → set NOT NULL (hindari lock full-table).
- 6.2.5 **Data SACRED guard:** no `DROP`/overwrite tanpa izin Tata; delete → soft (`deleted_at`).

### 6.3 Uji & eksekusi (exit)
- 6.3.1 **Test di staging** dengan **data volume realistic** — jalankan UP, verifikasi data utuh, lalu jalankan **DOWN** dan verifikasi balik ke kondisi awal. **DOWN yang gak teruji = belum lolos.**
- 6.3.2 Tentukan **deploy window** + koordinasi @levi (eksekusi) & @nami (jadwal).
- 6.3.3 **Exit criteria:** UP+DOWN teruji di staging (kontrol D3) + lock duration acceptable + downstream consumer dikabarin + (Type-1) sign-off Tata ada → ready deploy.

## 7. Pengecualian
- **Hotfix data S1 (prod korup):** boleh contain dulu (mis. lock write), tapi tetap **wajib DOWN/recovery path** + RCA setelahnya (koord @kakashi SOP-KK-05). **Tetap no hard delete.**
- **Prototype Fauxbase:** persist memory; "migration" = ubah `@field`. SOP berlaku konseptual saat transisi ke real DB.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Migration UP + DOWN | repo migration folder | Permanen |
| Bukti test staging (UP→DOWN) | `log.md` | Permanen |
| SDR (kalau Type-1) | `adr/NNN-*.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Data-loss incident | # insiden data hilang akibat migration ÷ total | **0** |
| Reversibility | # migration dengan DOWN teruji ÷ total | 100% |
| Prod lock breach | # migration yang lock prod di luar window | 0 |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
