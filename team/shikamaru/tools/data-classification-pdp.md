# Tool: Data Classification & Retention (UU PDP)

**Apa:** tabel klasifikasi tiap kolom data — kategori (biasa / pribadi / pribadi-spesifik / uang) + aturan retensi + dasar hukum.
**Kapan dipake:** tiap ada data pribadi baru, atau audit kepatuhan (SOP-SH-04). Living doc.
**Kenapa:** UU No. 27/2022 (PDP) wajib: data pribadi terklasifikasi, ada consent, ada retensi, ada jalur hapus (right-to-erasure). ISO 27001 buat keamanannya. Audit kontrol D4.
**Framework:** UU PDP Indonesia, ISO/IEC 27001 (Annex A), DAMA-DMBOK (Data Governance).

---

## KATEGORI (UU PDP)

| Kategori | Definisi | Perlakuan |
|---|---|---|
| **Biasa** | Bukan data pribadi (config, agregat anonim, ID internal) | Normal; Data SACRED tetap (soft-delete) |
| **Pribadi** | Identifikasi orang: nama, no HP, email, alamat | Consent + retensi + jalur erasure |
| **Pribadi spesifik** | Sensitif: kesehatan, keuangan pribadi, biometrik, anak | Di atas + **enkripsi at-rest** + akses least-privilege |
| **Uang (ledger)** | Transaksi keuangan (payment) | Append-only, isolated, retensi ikut kewajiban accounting |

---

## TEMPLATE (copy mulai sini)

```markdown
## Klasifikasi: <project / domain>

| Tabel.Kolom | Kategori | Dasar simpan (consent/hukum) | Retensi | Jalur hapus |
|---|---|---|---|---|
| ... | pribadi | consent saat order | sejak transaksi + N bulan | soft-delete; erasure on request (Type-1) |
| ... | uang | kewajiban accounting | min. sesuai regulasi | TIDAK dihapus (append-only) |
```

---

## CONTOH TERISI (proyek contoh)

```markdown
## Klasifikasi: Proyek-Contoh — Aplikasi Web Umum

| Tabel.Kolom | Kategori | Dasar simpan | Retensi | Jalur hapus |
|---|---|---|---|---|
| orders.nama_pembeli | **pribadi** | consent saat isi order | sejak order + 3 bln, lalu arsip | soft-delete; erasure on request |
| orders.hp | **pribadi** | consent (buat reminder) | sejak order + 3 bln | soft-delete; erasure on request |
| payments_ledger.pengirim | **pribadi** | melekat transaksi | ikut retensi accounting | TIDAK dihapus (ledger append-only) |
| payments_ledger.amount | **uang** | kewajiban pencatatan | sesuai regulasi keuangan | TIDAK dihapus |
| order_line.peserta | **pribadi** | consent saat order | sejak order + 1 bln | soft-delete; erasure on request |
| cart_item.item | biasa | — | selama akun aktif | soft-delete |
| users.slug | biasa | — | selama akun aktif | soft-delete |

### Aturan kunci
- **Default soft-delete** (Data SACRED) untuk semua kategori operasional.
- **Right-to-erasure (UU PDP):** user boleh minta data pribadinya (nama/hp) dihapus permanen.
  → hard delete = **Type-1 🔴 escalate Tata** via @kakashi, dengan jejak audit (siapa minta, kapan eksekusi).
- **Konflik retensi vs erasure:** `payments_ledger.pengirim` nempel transaksi uang (kewajiban accounting).
  Kalau ada permintaan erasure → **anonimkan** pengirim (ganti jadi "ANONIM"), TAPI baris ledger + amount TETAP
  (integritas uang & audit accounting tidak boleh bolong). Itu cara komply DUA mandate sekaligus.
- **Keamanan (ISO 27001):** hp/nama tidak boleh muncul di application log; akses query ke kolom pribadi least-privilege.
```

> Catatan: ini contoh kasus tabrakan dua aturan — **UU PDP (hak hapus)** vs **accounting/Money SACRED (ledger tak boleh diubah)**. Solusinya bukan pilih salah satu: **anonimkan identitas, pertahankan transaksi.** Data pribadi hilang, integritas uang utuh. Tiap eksekusi erasure di-log (Accountability/TARIF).
