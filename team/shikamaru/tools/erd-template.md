# Tool: Entity-Relationship Diagram (ERD) + Access Pattern

**Apa:** blueprint data fitur — entity, relasi, kardinalitas, plus daftar pola akses (read/write) yang akan jalan ke skema.
**Kapan dipake:** **sebelum** tulis DDL, tiap desain skema fitur baru (SOP-SH-01). ER dulu, baru tabel.
**Kenapa:** desain dari access pattern (bukan tebak) = skema yang gak masalah 6 bulan lagi. Transparency (GCG) + dasar review joint dengan @saitama.
**Output:** instance per fitur disimpan di `log.md` / repo; keputusan Type-1 → Schema Decision Record di `adr/`.

---

## TEMPLATE (copy mulai sini)

```markdown
# ERD: <Nama Fitur>

**Owner:** Shikamaru · **Joint:** @saitama · **Status:** Draft / Approved / Locked
**Date:** YYYY-MM-DD · **Reversibility:** Type 1 / Type 2

## 1. Access patterns (audit DULU sebelum desain)
| Read/Write | Pattern | Frekuensi | Target latency |
|---|---|---|---|
| Read | ... | .../sec | < ...ms |
| Write | ... | .../sec | < ...ms |

## 2. Entity & relasi (kardinalitas)
- <Entity A> 1 ── N <Entity B>   (A punya banyak B)
- <Entity B> N ── 1 <Entity C>

## 3. Tabel (ringkas, DDL penuh di data-dictionary)
| Tabel | PK | Kolom kunci | FK | Audit cols? | deleted_at? |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ✅ | ✅ |

## 4. Normalisasi & justifikasi
- Level: 3NF / denormalized (alasan: ...)

## 5. Catatan SACRED / PDP / Money
- Soft-delete: ...
- Data pribadi (PDP): ... → lihat data-classification-pdp
- Ledger uang isolated: ...
```

---

## CONTOH TERISI (dari proyek contoh — fitur Payment + Order)

```markdown
# ERD: Proyek-Contoh — User, Order & Payment

**Owner:** Shikamaru · **Joint:** @saitama · **Status:** Locked
**Date:** 2026-05-29 · **Reversibility:** Type 1 (ada uang → escalate)

## 1. Access patterns
| Read/Write | Pattern | Frekuensi | Target latency |
|---|---|---|---|
| Read | list order per user (paginated) | 50/sec saat peak | < 30ms |
| Read | agregat total payment masuk per user | 10/sec | < 50ms |
| Write | user submit order | 20/sec spike | < 50ms |
| Write | catat payment masuk (uang) | 5/sec | < 80ms |

## 2. Entity & relasi
- users 1 ── N orders        (1 user banyak order)
- users 1 ── N payments_ledger  (1 user banyak transaksi payment)
- users 1 ── N cart_item     (item di keranjang)
- users 1 ── N order_line

## 3. Tabel
| Tabel | PK | Kolom kunci | FK | Audit cols? | deleted_at? |
|---|---|---|---|---|---|
| users | uuid | slug UNIQUE, owner_id | — | ✅ | ✅ |
| orders | uuid | user_id, nama_pembeli, hp, status(CHECK) | users | ✅ | ✅ |
| payments_ledger | uuid | user_id, amount, pengirim, masuk_at | users | ✅ (created only) | ❌ append-only |
| cart_item | uuid | user_id, item, harga, claimed_by | users | ✅ | ✅ |
| order_line | uuid | user_id, produk, is_active | users | ✅ | ✅ |

## 4. Normalisasi & justifikasi
- 3NF semua. Tidak denormalize: total payment dihitung via agregat (atau materialized view kalau hot), BUKAN kolom redundan di users — hindari update anomaly pada uang.

## 5. Catatan SACRED / PDP / Money
- Soft-delete: orders/cart/order_line pakai deleted_at. Payments_ledger TIDAK pernah dihapus/diubah (append-only ledger).
- Data pribadi (PDP): nama_pembeli, hp (orders); pengirim (payment) → diklasifikasi, lihat data-classification-pdp.
- Ledger uang isolated: payments_ledger tabel sendiri, append-only, TIDAK campur profil owner/customer (kontrol D6, Money SACRED).
```

> Catatan: total payment **tidak** disimpan sebagai kolom redundan di `users` — itu update anomaly nunggu kejadian (uang ganda/hilang). Dihitung dari ledger. Kalau read jadi hot → materialized view, refresh on event. Itu cara aman buat data uang.
