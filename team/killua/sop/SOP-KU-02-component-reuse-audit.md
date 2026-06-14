# SOP-KU-02 — Component Reuse Audit

| | |
|---|---|
| **Kode** | SOP-KU-02 |
| **Pemilik** | Killua (Senior Frontend Engineer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Mandate Tata "Reuse > Rebuild", Rule of 3, [tools/component-audit-checklist.md](../tools/component-audit-checklist.md) |
| **COBIT** | BAI03 (Managed Solutions Build) |

## 1. Tujuan
Mencegah duplikasi component & reinvent-the-wheel. Tiap component baru wajib lewat audit dulu — reuse kalau ada yang cocok, extend kalau dekat, bikin baru **cuma kalau** gak ada yang dekat (dengan justifikasi tercatat). Comply mandate **Reuse > Rebuild**.

## 2. Ruang Lingkup
- **Berlaku:** setiap kali mau bikin component/section/util baru.
- **Tidak berlaku:** edit component existing (bukan bikin baru); fix bug dalam component yang udah ada.

## 3. Definisi & Istilah
- **Reuse 100%** — pakai component existing apa adanya, gak ubah.
- **Modify minor** — pakai existing tapi tweak kecil (prop, copy, layout 1-2 hal).
- **Extend** — tambah kapabilitas component existing (prop baru, variant) tanpa break pemakaian lama.
- **New (justified)** — bikin baru karena gak ada yang dekat; wajib catat alasan.
- **Rule of 3** — pola yang muncul ke-3 kali → extract jadi shared component.

## 4. Referensi
Mandate Tata Reuse>Rebuild & no tambal-sulam, Rule of 3 (refactoring). Cek juga **Chakra v2 built-in** (Modal/Drawer/Menu/Accordion/Skeleton/Toast) sebelum bikin manual.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Jalankan audit + catat | Killua | Killua | — | @kakashi (verifikasi di review) |
| Verifikasi audit dilakukan | — | @kakashi | — | — |

## 6. Prosedur

### 6.1 Inventarisasi
- 6.1.1 List kebutuhan component dari spec (apa yang dirender, perilaku apa).
- 6.1.2 **Scan codebase** existing — `components/`, theme, util. Cocokin per kebutuhan.
- 6.1.3 **Cek Chakra v2 built-in** — ada component bawaan (Modal/Drawer/Menu/Accordion/Skeleton/Toast/Tabs)? Pakai itu, jangan bikin manual.

### 6.2 Klasifikasi
- 6.2.1 Tiap kebutuhan → klasifikasi: **Reuse 100% / Modify minor / Extend / New**.
- 6.2.2 **Decision point — sebelum kategori "New":** beneran gak ada existing yang bisa di-extend? Kalau ragu → **Extend menang** (Reuse>Rebuild). Hanya New kalau gak ada yang dekat.
- 6.2.3 Cek **Rule of 3** — pola/component bakal dipakai ≥3 tempat? → bikin shared (extract), bukan inline copy.

### 6.3 Dokumentasi (exit)
- 6.3.1 Tulis **tabel reuse audit** di `log.md` ([component-audit-checklist](../tools/component-audit-checklist.md)): per component → status + note. Untuk "New" → **justifikasi 1 baris** (kontrol KU-C2).
- 6.3.2 **Exit criteria:** tiap component punya status + reuse ratio tercatat. Baru boleh lanjut konstruksi (SOP-KU-01 §6.2).

## 7. Pengecualian
- **Prototype throwaway eksplisit:** kalau Tata minta cepat-cepat buang, audit boleh ringkas — tapi tetap catat di log apa yang di-reuse.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Tabel reuse audit + reuse ratio | `log.md` | Permanen |
| Justifikasi component "New" | `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Reuse ratio | # component reused ÷ total component dipakai | ↑ tiap periode |
| Komponen duplikat | # component baru yang ternyata sudah ada | 0 |
| Audit coverage | # component baru ber-audit ÷ total component baru | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: reuse audit landing v2 (~7/13 reused) |
