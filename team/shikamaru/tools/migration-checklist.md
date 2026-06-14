# Tool: Migration & Schema QC Checklist

**Apa:** daftar periksa pre-handoff — gabungan QC schema design (SOP-SH-01) + migration safety (SOP-SH-02). Hard gate sebelum skema/migration lanjut ke Pre-Tata Gate.
**Kapan dipake:** tiap mau handoff skema baru atau migration.
**Kenapa:** **DOWN yang gak teruji = belum lolos.** Data SACRED enforce di sini (kontrol D1–D6).
**Framework:** COBIT APO14/BAI03, mandate Data SACRED.

---

## CHECKLIST (semua wajib ✅ sebelum handoff)

### Schema (SOP-SH-01)
- [ ] **3NF default**, denormalisasi (kalau ada) ada justifikasi tertulis
- [ ] **PK defined** (UUID v7 / serial)
- [ ] **FK constraints** — integritas referensial, no orphan
- [ ] **NOT NULL** untuk field wajib; NULL hanya buat "unknown"
- [ ] **UNIQUE** untuk natural key
- [ ] **CHECK** untuk enum/range (status pakai CHECK, bukan free-text)
- [ ] **`deleted_at`** ada (soft-delete) — Data SACRED (kontrol D1)
- [ ] **Audit cols** lengkap: `created_at`/`updated_at`/`created_by`/`updated_by` (kontrol D2)
- [ ] **Ledger uang isolated** kalau ada uang — append-only, terpisah customer (kontrol D6)

### Indexes (SOP-SH-05)
- [ ] **Index per query pattern** — dibuktikan EXPLAIN (kontrol D5)
- [ ] **No redundant index** — `(a,b)` udah cover `(a)`
- [ ] **Partial index** buat filter soft-delete (`WHERE deleted_at IS NULL`)

### Migration (SOP-SH-02)
- [ ] **UP script** ada
- [ ] **DOWN script** ada **DAN teruji** di staging (benar-benar balik ke kondisi awal) — kontrol D3
- [ ] **Reversibility diklasifikasi** — destruktif = Type-1 🔴 escalate Tata
- [ ] **Lock duration assessed** — tabel besar pakai online DDL (pg_repack/pt-osc), index `CONCURRENTLY`
- [ ] **Backfill chunked + idempotent** kalau tabel besar
- [ ] **Tested di staging** dengan data volume realistic
- [ ] **No hard delete / overwrite** tanpa izin Tata (Data SACRED)

### Multi-tenant (kalau applicable)
- [ ] **Tenant isolation** — row-level security atau app-level filter (`tenant_id`)

### Performance (SOP-SH-03)
- [ ] **EXPLAIN ANALYZE done** untuk query kritikal
- [ ] **No seq scan** di tabel besar pada jalur panas

### PDP / Keamanan (SOP-SH-04)
- [ ] **Data pribadi terklasifikasi** + aturan retensi (kontrol D4)
- [ ] **Data pribadi spesifik** dienkripsi at-rest (ISO 27001)

### Handoff
- [ ] **Joint review @saitama** — BE setuju shape data
- [ ] (Type-1) **Schema Decision Record** ada + ter-escalate

---

## CONTOH TERISI (Proyek-Contoh — migration: tambah kolom `hp` ke `rsvp`)

```
Konteks: produk minta no HP tamu buat reminder. Tabel rsvp existing ~5rb row.

[x] Reversibility: ADD COLUMN nullable = Type-2 (reversible) → 🟢 no escalate
[x] UP:   ALTER TABLE rsvp ADD COLUMN hp TEXT;   (nullable, no backfill, no lock lama)
[x] DOWN: ALTER TABLE rsvp DROP COLUMN hp;       (teruji di staging: kolom balik hilang, data lain utuh)
[x] Lock duration: ADD nullable column = metadata-only di PG11+, instant, no rewrite ✅
[x] No hard delete / overwrite ✅
[x] PDP: hp = data pribadi → ditambah ke data-classification-pdp + aturan retensi ✅
[x] Joint review @saitama: BE setuju, hp masuk DTO RSVP ✅

Verdict: LOLOS. Type-2, aman, reversible, DOWN teruji. Deploy via @levi (no window khusus).
```

> Catatan: kalau requirement-nya `hp NOT NULL`, JANGAN langsung — itu lock full-table rewrite + gagal di baris lama yang null. Caranya: add nullable → backfill chunked → baru set NOT NULL. Beda 3 langkah, beda nasib produksi.
