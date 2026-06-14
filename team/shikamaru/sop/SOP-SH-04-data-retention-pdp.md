# SOP-SH-04 — Data Retention & UU-PDP Compliance

| | |
|---|---|
| **Kode** | SOP-SH-04 |
| **Pemilik** | Shikamaru (DBA / Data Architect) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | UU No. 27/2022 (Perlindungan Data Pribadi), ISO/IEC 27001 (Annex A), DAMA-DMBOK (Data Security & Governance), [tools/data-classification-pdp.md](../tools/data-classification-pdp.md) |
| **COBIT** | APO14 (Managed Data), MEA02 (Internal Control) |

## 1. Tujuan
Menjamin **setiap data pribadi terklasifikasi, disimpan sesuai aturan retensi, dan punya jalur penghapusan legal** (right-to-erasure) — comply UU PDP & ISO 27001, sekaligus tetap menghormati Data SACRED (default soft-delete, hard delete hanya jalur legal yang terkontrol).

## 2. Ruang Lingkup
- **Berlaku:** semua kolom/tabel yang menyimpan **data pribadi** (cth Proyek-Contoh: nama pembeli, no HP, email di order; nama pengirim payment; identitas user).
- **Tidak berlaku:** data non-pribadi (config template, statistik agregat anonim).

## 3. Definisi & Istilah
- **Data pribadi** — data yang mengidentifikasi orang: nama, no HP, email, alamat, NIK (subjek UU PDP).
- **Data pribadi spesifik** — kategori sensitif UU PDP: data kesehatan, keuangan pribadi, biometrik (proteksi lebih ketat).
- **Consent** — persetujuan subjek data atas pemrosesan datanya.
- **Retensi** — berapa lama data disimpan sebelum dihapus/diarsip.
- **Right-to-erasure** — hak subjek meminta data pribadinya dihapus.
- **Soft delete** — tandai `deleted_at` (Data SACRED default); **hard delete** — hapus permanen (hanya jalur legal).

## 4. Referensi
UU No. 27/2022 (klasifikasi, consent, retensi, hak subjek), ISO/IEC 27001 Annex A (klasifikasi & akses), mandate Data SACRED (default soft-delete), [data-classification-pdp](../tools/data-classification-pdp.md).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Klasifikasi data pribadi | Shikamaru | Shikamaru | @lelouch (kebutuhan produk) | @kakashi |
| Tetapkan aturan retensi | Shikamaru | @kakashi → Tata | @lelouch (legal/produk) | tim |
| Jalankan hard delete legal | Shikamaru | **Tata** | @kakashi | @levi |

## 6. Prosedur

### 6.1 Klasifikasi
- 6.1.1 Inventaris kolom → tandai mana **data pribadi** / **data pribadi spesifik** / **non-pribadi** di [data-classification-pdp](../tools/data-classification-pdp.md).
- 6.1.2 Exit kalau ada kolom pribadi tak-terklasifikasi → wajib diklasifikasi dulu (kontrol D4).

### 6.2 Aturan retensi & keamanan
- 6.2.1 Tetapkan **retensi** per kategori (cth: data personal user (email, no HP, alamat) disimpan selama akun aktif + N bulan, lalu diarsip/dihapus). Retensi yang ubah perilaku/komitmen produk → **🟡 sign-off** (@lelouch + Tata).
- 6.2.2 **Keamanan (ISO 27001):** data pribadi spesifik → enkripsi at-rest; akses dibatasi (least-privilege); no data pribadi di log.
- 6.2.3 **Default tetap soft-delete** (`deleted_at`) untuk operasi normal — Data SACRED.

### 6.3 Jalur hapus legal (exit)
- 6.3.1 **Right-to-erasure:** sediakan prosedur hard delete **terkontrol** — hanya atas permintaan legal subjek / kewajiban hukum, **dengan jejak audit** siapa minta & kapan dieksekusi.
- 6.3.2 **Decision point:** hard delete = Type-1 🔴 → **escalate Tata** via @kakashi sebelum eksekusi. Pertahankan referensi anonim kalau perlu integritas (mis. agregat payment tetap, identitas dihapus).
- 6.3.3 **Exit criteria:** semua data pribadi terklasifikasi + aturan retensi tertulis + jalur erasure ada & terkontrol → audit pass.

## 7. Pengecualian
- **Kewajiban hukum simpan (mis. data transaksi/accounting):** retensi mengikuti regulasi terkait, bisa lebih lama dari permintaan hapus — dokumentasikan dasar hukumnya.
- **Prototype Fauxbase:** data dummy non-real; SOP wajib penuh saat ada data pribadi nyata.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Tabel klasifikasi data | `tools/data-classification-pdp.md` | Living |
| Aturan retensi (sign-off) | `adr/NNN-*.md` / `log.md` | Permanen |
| Log eksekusi erasure | `log.md` (jejak audit) | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Data pribadi terklasifikasi | # kolom pribadi terklasifikasi ÷ total kolom pribadi | 100% |
| Coverage aturan retensi | # kategori pribadi punya aturan retensi ÷ total | 100% |
| Erasure ber-audit | # eksekusi erasure dengan jejak audit ÷ total | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
