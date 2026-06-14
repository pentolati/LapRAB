# Tool: Data Dictionary

**Apa:** kamus data — daftar tiap kolom: nama, tipe, semantik (artinya apa), constraint, dan klasifikasi (pribadi/uang/biasa).
**Kapan dipake:** tiap tabel baru / saat audit data. Living doc — di-update tiap skema berubah.
**Kenapa:** biar BE (@saitama) & tim bisa self-serve baca skema tanpa nanya terus (kurangi bottleneck Shikamaru). Dasar audit kontrol D2 (audit cols) & D4 (klasifikasi PDP).
**Framework:** DAMA-DMBOK (metadata), UU PDP (klasifikasi).

---

## TEMPLATE (copy mulai sini)

```markdown
## Tabel: <nama_tabel>
**Deskripsi:** <untuk apa tabel ini>
**Owner:** Shikamaru · **PK:** <kolom> · **Soft-delete:** ya/tidak (alasan)

| Kolom | Tipe | NULL? | Default | Constraint | Semantik | Klasifikasi |
|---|---|---|---|---|---|---|
| id | UUID | no | gen_random_uuid() | PK | identitas baris | biasa |
| ... | ... | ... | ... | ... | ... | biasa / pribadi / pribadi-spesifik / uang |
| created_at | TIMESTAMPTZ | no | NOW() | — | kapan dibuat | biasa |
| updated_at | TIMESTAMPTZ | no | NOW() | — | kapan diubah | biasa |
| created_by | UUID | yes | — | FK user | siapa buat | biasa |
| updated_by | UUID | yes | — | FK user | siapa ubah | biasa |
| deleted_at | TIMESTAMPTZ | yes | NULL | — | soft-delete (Data SACRED) | biasa |

**Index:** <daftar + alasan>
**Catatan:** <retensi PDP / append-only / dll>
```

---

## CONTOH TERISI (dari proyek contoh — tabel `orders`)

```markdown
## Tabel: orders
**Deskripsi:** pesanan per user (konfirmasi beli/tidak + jumlah item).
**Owner:** Shikamaru · **PK:** id · **Soft-delete:** ya (user bisa batalin, history disimpan)

| Kolom | Tipe | NULL? | Default | Constraint | Semantik | Klasifikasi |
|---|---|---|---|---|---|---|
| id | UUID | no | gen_random_uuid() | PK | identitas order | biasa |
| user_id | UUID | no | — | FK users | order ini punya user mana | biasa |
| nama_pembeli | TEXT | no | — | — | nama pembeli | **pribadi** |
| hp | TEXT | yes | — | — | no HP pembeli (buat reminder) | **pribadi** |
| status | TEXT | no | 'pending' | CHECK in (selesai,batal,pending) | status pesanan | biasa |
| jumlah_item | INT | no | 1 | CHECK > 0 | beli berapa item | biasa |
| created_at | TIMESTAMPTZ | no | NOW() | — | kapan order | biasa |
| updated_at | TIMESTAMPTZ | no | NOW() | — | kapan diubah | biasa |
| created_by | UUID | yes | — | — | siapa input (kalau via admin) | biasa |
| updated_by | UUID | yes | — | — | siapa ubah | biasa |
| deleted_at | TIMESTAMPTZ | yes | NULL | — | soft-delete (Data SACRED) | biasa |

**Index:**
- `orders(user_id) WHERE deleted_at IS NULL` — partial, hot path "list order per user"
- `orders(user_id, status) WHERE deleted_at IS NULL` — composite, filter selesai/batal

**Catatan:**
- `nama_pembeli` + `hp` = data pribadi → retensi & klasifikasi di data-classification-pdp.
- TIDAK ada kolom uang di sini — payment terpisah di `payments_ledger` (Money SACRED, kontrol D6).
```

> Catatan: `status` pakai CHECK constraint enum, **bukan** free-text — biar FE/BE gak drift. `hp` nullable (pembeli boleh gak isi), tapi `nama_pembeli` NOT NULL (wajib). NULL hanya buat "unknown", bukan "kosong".
