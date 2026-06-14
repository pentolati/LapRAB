# Tool: Error Code Table

**Apa:** tabel kode error **stabil** per service — jadi kontrak debugging antara FE & BE. Kode gak berubah walau message berubah.
**Kapan dipake:** sekali per service (baseline), di-extend tiap ada error baru (SOP-SA-01 desain kontrak, SOP-SA-05 error handling).
**Kenapa:** FE bisa handle error by-code (bukan parse message string yang rapuh). Konsisten = kontrol SA-C2. Error message ke client gak leak internal (OWASP).
**Output:** simpen di `tools/` / doc project (living).

---

## Aturan
- **Kode = SCREAMING_SNAKE, stabil selamanya.** Message boleh berubah, kode jangan.
- Tiap kode dipetakan ke **1 HTTP status**.
- `400` = syntactic (bentuk salah) · `422` = semantic (bentuk bener, makna salah).
- `401` = belum login · `403` = login tapi gak boleh.
- Error message ke client **gak leak** stack/secret/internal.

---

## TEMPLATE (baseline — copy & extend per service)

| Status | Code | Kapan | Contoh message (client) |
|---|---|---|---|
| 400 | `VALIDATION_ERROR` | Input gak sesuai schema (tipe/required/format) | "Input gak valid: cek `amount`" |
| 401 | `UNAUTHENTICATED` | Token absen / expired / invalid | "Login dulu ya" |
| 403 | `FORBIDDEN` | Authenticated tapi role/owner gak boleh | "Kamu gak punya akses ke ini" |
| 404 | `NOT_FOUND` | Resource gak ada / soft-deleted | "Data gak ditemukan" |
| 409 | `CONFLICT` | Duplikat / idempotency key sama / version bentrok | "Permintaan ini sudah diproses" |
| 422 | `SEMANTIC_ERROR` | Valid syntactic, salah aturan bisnis | "Aturan tidak terpenuhi" |
| 429 | `RATE_LIMITED` | Lewat batas request | "Terlalu sering, coba lagi sebentar" |
| 500 | `INTERNAL_ERROR` | Error tak-terduga (di-log, gak leak detail) | "Ada kesalahan, lagi kami cek" |
| 503 | `SERVICE_DEGRADED` | Dependency down / maintenance | "Layanan lagi gangguan sebentar" |

---

## CONTOH TERISI (dari proyek contoh — extend baseline untuk domain checkout/payment/order)

| Status | Code | Kapan | Contoh message (client) |
|---|---|---|---|
| 422 | `CHECKOUT_CLOSED` | User checkout setelah window order ditutup | "Checkout sudah ditutup" |
| 409 | `ORDER_DUPLICATE` | User sama submit order 2× untuk cart yang sama | "Kamu sudah membuat order ini sebelumnya" |
| 422 | `PAYMENT_LIMIT_EXCEEDED` | Nominal pembayaran > batas (10jt) | "Nominal melebihi batas" |
| 409 | `PAYMENT_ALREADY_PROCESSED` | Idempotency-Key sama → return yang lama | "Pembayaran ini sudah tercatat" |
| 422 | `ITEM_OUT_OF_STOCK` | User checkout item yang udah habis diambil user lain | "Item ini sudah habis dipilih user lain" |
| 403 | `NOT_ORDER_OWNER` | User akses detail order orang lain | "Ini bukan order kamu" |

> Catatan: `PAYMENT_*` error rapat ke Data SACRED — status uang gak pernah di-overwrite, jadi `ALREADY_PROCESSED` mengembalikan record lama (append-only event log), bukan bikin transaksi baru. FE (Killua) handle by-code: `PAYMENT_ALREADY_PROCESSED` → tampil "sukses" pakai record lama, gak munculin error merah ke user. Itu kenapa kode harus stabil — kontrak FE-BE.
