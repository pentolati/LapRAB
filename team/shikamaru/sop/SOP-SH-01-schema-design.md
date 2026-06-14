# SOP-SH-01 — Schema Design

| | |
|---|---|
| **Kode** | SOP-SH-01 |
| **Pemilik** | Shikamaru (DBA / Data Architect) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | DAMA-DMBOK (Data Modeling), Normalisasi Codd (3NF/BCNF), Dimensional modeling (Kimball), [tools/erd-template.md](../tools/erd-template.md), [tools/data-dictionary.md](../tools/data-dictionary.md) |
| **COBIT** | APO14 (Managed Data), BAI03 (Managed Solutions Build) |

## 1. Tujuan
Menghasilkan skema basis data yang **sehat** — ternormalisasi (default 3NF), bebas anomali, integritas terjaga (FK/constraint), dan menegakkan **Data SACRED** (kolom audit + soft-delete) — sebelum dikonsumsi BE & lanjut ke Pre-Tata Gate.

## 2. Ruang Lingkup
- **Berlaku:** desain skema untuk fitur baru / entity baru (cth Proyek-Contoh: profil user, order, payment, cart, order line).
- **Tidak berlaku:** perubahan skema existing (pakai SOP-SH-02 Migration), tuning index murni (SOP-SH-05).

## 3. Definisi & Istilah
- **3NF (Bentuk Normal Ketiga)** — tabel di mana tiap kolom non-kunci bergantung penuh hanya pada primary key; menghilangkan redundansi & anomali.
- **Anomali** — bug data akibat redundansi (update/insert/delete anomaly).
- **Access pattern** — daftar read/write konkret yang akan dijalankan ke skema (frekuensi + target latency).
- **Denormalisasi** — sengaja menyimpan redundansi demi kecepatan baca (read-heavy).
- **Ledger isolated** — tabel uang (mis. payment) append-only, terpisah dari profil/saldo customer.

## 4. Referensi
Normalisasi Codd (1NF→BCNF), Dimensional modeling (star schema kalau read-heavy/reporting), mandate Tata (Data SACRED, Money SACRED, Reuse>Rebuild), [erd-template](../tools/erd-template.md), [data-dictionary](../tools/data-dictionary.md).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Audit access pattern | Shikamaru | Shikamaru | @saitama | — |
| Desain ER + DDL | Shikamaru | Shikamaru | @saitama (joint), @lelouch (produk) | @kakashi |
| Lock skema (Type-1) | Shikamaru | **Tata** | @kakashi | tim |

## 6. Prosedur

### 6.1 Pemahaman & audit
- 6.1.1 Baca **PRD + use case** → pahami query pattern yang akan jalan. Kalau requirement data ambigu → konfirmasi @lelouch, **jangan asumsi**.
- 6.1.2 Susun **access pattern audit** (tabel: read/write · pattern · frekuensi · target latency). Exit kalau pola read/write belum jelas → balik tanya.

### 6.2 Pemodelan
- 6.2.1 Draft **ER model** ([erd-template](../tools/erd-template.md)): entity, relasi, kardinalitas.
- 6.2.2 **Normalisasi level decision:** default **3NF**. Denormalize hanya kalau read:write > 100:1 + kolom jarang berubah + redundansi diterima (justifikasi tertulis).
- 6.2.3 **Constraint plan:** PK (UUID v7 / serial), FK (integritas referensial), UNIQUE (natural key), CHECK (enum/range).
- 6.2.4 **Data SACRED wajib:** tiap tabel punya `deleted_at` (soft-delete) + kolom audit `created_at`/`updated_at`/`created_by`/`updated_by`.
- 6.2.5 **Money/sensitive isolation:** kalau ada uang (payment) → tabel **ledger append-only terpisah** dari customer (kontrol D6). Kalau ada data pribadi → trigger SOP-SH-04 (klasifikasi PDP).

### 6.3 Index & dokumentasi
- 6.3.1 **Index plan** per access pattern (detail di SOP-SH-05). Default: partial index `WHERE deleted_at IS NULL`.
- 6.3.2 Tulis **DDL** + isi **data-dictionary** (kolom, tipe, semantik, klasifikasi).
- 6.3.3 Tulis **Schema Decision Record (SDR)** kalau keputusan Type-1 (lock skema) → simpan `adr/NNN-*.md`.

### 6.4 Validasi & handoff (exit)
- 6.4.1 Jalankan **QC checklist** ([migration-checklist §schema](../tools/migration-checklist.md)): 3NF justified, PK/FK/constraint lengkap, audit cols + `deleted_at`, ledger isolated, PDP terklasifikasi.
- 6.4.2 **Joint review @saitama** — BE setuju shape data (no throw-over-the-wall).
- 6.4.3 **Buat engineering note high-level** (kontrol SH-C7) — kalau unit kerja non-trivial, tulis eng-note ikut [`../../kakashi/tools/eng-note-template.md`](../../kakashi/tools/eng-note-template.md), simpan di `shikamaru/notes/YYYY-MM-DD-<topik>.md` (konteks + keputusan normalisasi/index + dampak ke @saitama). SDR (Type-1) tetap di `adr/` — eng-note merangkum, bukan gandain. Trivial cukup di `log.md`. **Exit criteria: eng-note ter-arsip + ditautkan di `log.md`.**
- 6.4.4 **Exit criteria:** checklist pass + Saitama acc + eng-note ter-arsip (kalau non-trivial) + (kalau Type-1) SDR ada & ter-escalate → handoff ke Pre-Tata Gate @kakashi.

## 7. Pengecualian
- **Prototype Fauxbase:** skema "hidup" di kode (`Entity` + `@field`), bukan DDL SQL. SOP tetap berlaku konseptual (3NF, audit cols, soft-delete via field). Shikamaru aktif penuh saat transisi prototype → real DB.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Schema Decision Record (Type-1) | `adr/NNN-*.md` | Permanen |
| Engineering note high-level (unit kerja non-trivial) | `notes/YYYY-MM-DD-<topik>.md` | Permanen |
| ER diagram | `tools/erd-template.md` (instance per fitur) / repo | Living |
| Data dictionary | `tools/data-dictionary.md` | Living |
| DDL + access pattern audit | `log.md` / repo migration | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Anomali data | # update/insert/delete anomaly ditemukan di prod | ≈ 0 |
| Skema lolos joint review sekali | # skema acc @saitama sekali ÷ total | ↑ tiap periode |
| Coverage audit cols + soft-delete | # tabel lengkap audit ÷ total tabel | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
