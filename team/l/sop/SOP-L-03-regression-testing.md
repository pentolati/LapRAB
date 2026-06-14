# SOP-L-03 — Regression Testing

| | |
|---|---|
| **Kode** | SOP-L-03 |
| **Pemilik** | L (QA Senior) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Test Pyramid, ISO/IEC 29119, [tools/regression-checklist.md](../tools/regression-checklist.md) |
| **COBIT** | BAI07 (Change Acceptance & Transitioning) |

## 1. Tujuan
Membuktikan **gak ada fungsi existing yang rusak** akibat perubahan baru — full retest area tersentuh (mandate Tata: no partial), plus suite otomatis yang gak flaky.

## 2. Ruang Lingkup
- **Berlaku:** tiap fix, fitur baru, atau perubahan yang menyentuh kode/area existing.
- **Tidak berlaku:** dokumentasi murni, perubahan yang fully isolated tanpa dependency.

## 3. Definisi & Istilah
- **Regression** — bug lama muncul lagi / fitur jalan jadi rusak gara-gara perubahan baru.
- **Smoke vs Full:** smoke = happy path critical (~5 menit, tiap PR); full = seluruh suite (nightly/pre-rilis).
- **Flaky test** — kadang pass kadang fail tanpa perubahan; sinyal gak bisa dipercaya.
- **Test pyramid** — unit 70% / integration 20% / E2E 10%.

## 4. Referensi
Mandate Tata: **full retest setelah fix, no partial** + Data SACRED (regresi data = prioritas). Test pyramid (ISTQB).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Tentukan scope regresi | L | L | dev owner (impact) | — |
| Eksekusi regresi | L | L | — | dev owner |
| Maintain suite otomatis | L | L | @kakashi (strategy) | @levi (CI) |

## 6. Prosedur

### 6.1 Tentukan scope
- 6.1.1 Petakan **modul yang disentuh** fix/perubahan (dari diff/PR + tanya dev owner).
- 6.1.2 Tambah **modul dependent** (yang manggil/dipanggil modul tersentuh) — regresi sering nyebar.
- 6.1.3 **Mandate Tata:** area tersentuh = **retest lengkap, bukan cuma case yang berubah**.

### 6.2 Eksekusi
- 6.2.1 Jalankan **smoke** dulu (happy path critical) — kalau merah, stop & report.
- 6.2.2 Jalankan **full regression** area tersentuh + dependent (manual + suite otomatis).
- 6.2.3 Cek **regresi data** (Data SACRED): no data loss, soft-delete masih jalan, concurrent edit aman.

### 6.3 Suite maintenance & exit
- 6.3.1 **Flaky detection:** test yang kadang fail → **quarantine** + fix root < 1 minggu.
- 6.3.2 Critical path yang sering di-retest manual → **automate** (Playwright).
- 6.3.3 **Exit criteria:** smoke hijau + full regression area tersentuh hijau + regresi data clear + bukti tersimpan. Ada regresi → bug report (SOP-L-04) + balik ke dev.

## 7. Pengecualian
- **Perubahan fully isolated** (modul baru, no dependency): cukup test modul itu + smoke critical path, gak perlu full suite.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Regression checklist + hasil | `log.md` + checklist | Permanen |
| Daftar test quarantine | suite repo | Living |
| CI run result | CI / `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Recurrence regresi | # regresi berulang akar sama | **0** |
| Retest completeness | # modul tersentuh ter-retest ÷ total tersentuh | 100% |
| Flaky rate | # test flaky ÷ total otomatis | minimal (fix < 1 minggu) |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
