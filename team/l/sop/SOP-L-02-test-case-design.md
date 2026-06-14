# SOP-L-02 — Test Case Design (3-kategori)

| | |
|---|---|
| **Kode** | SOP-L-02 |
| **Pemilik** | L (QA Senior) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ISTQB test techniques, BVA, Equivalence Partitioning, [tools/test-case-matrix.md](../tools/test-case-matrix.md) |
| **COBIT** | BAI07 (Change Acceptance & Transitioning) |

## 1. Tujuan
Mendesain kasus uji **360°** — tiap fitur dicover dari tiga sisi: **normal (happy), alternatif, negatif** — pakai teknik BVA & equivalence partitioning, biar bug edge gak bocor.

## 2. Ruang Lingkup
- **Berlaku:** tiap fitur yang udah punya test plan (SOP-L-01).
- **Tidak berlaku:** perubahan kosmetik murni tanpa logika baru (cukup smoke + visual).

## 3. Definisi & Istilah
- **3-kategori:** **Normal** (happy path expected) · **Alternatif** (path valid tapi beda dari mainstream) · **Negatif** (invalid/error/abuse).
- **BVA** (Boundary Value Analysis) — test di batas: min, max, min-1, max+1.
- **Equivalence Partitioning (EP)** — bagi input jadi kelas setara, test 1 wakil per kelas.
- **ID convention:** `<MODULE>-N-NNN` (normal), `-A-NNN` (alternatif), `-G-NNN` (negatif/"gagal").

## 4. Referensi
ISTQB test design techniques, mandate Tata (test scenario master: normal/alternatif/negatif, Excel-style matrix advance, emotionless data).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Desain test case 3-kategori | L | L | dev owner (domain) | tim |
| Validasi acceptance ter-cover | L | L | @lelouch | — |

## 6. Prosedur

### 6.1 Identifikasi input & kelas
- 6.1.1 List semua **input + state** fitur.
- 6.1.2 Bagi tiap input jadi **kelas equivalence** (valid vs invalid) + tandai **boundary** (BVA).

### 6.2 Desain per kategori (wajib tiga-tiganya)
- 6.2.1 **Normal (~30%)** — happy path expected, best-case input, success outcome.
- 6.2.2 **Alternatif (~30%)** — path valid tapi beda: optional field, entry point lain, max valid input, unicode name, multiple login method.
- 6.2.3 **Negatif (~40%)** — empty, max-overflow (BVA), SQL injection, XSS, auth bypass, race condition, network failure, server error, locked/expired state.
- 6.2.4 **Exit kalau salah satu kategori kosong** → fitur belum siap test, lengkapi dulu (no happy-path-only).

### 6.3 Dokumentasi (exit)
- 6.3.1 Isi tiap case ke [test-case-matrix](../tools/test-case-matrix.md): ID · kategori · module · pre-condition · steps · test data · expected · actual · status · severity · browser · tester · date · bug ID.
- 6.3.2 **Exit criteria:** tiga kategori terisi + ratio masuk akal (~30/30/40) + tiap acceptance criteria punya minimal 1 case + boundary ter-cover.

## 7. Pengecualian
- **Fitur tanpa input user** (mis. static display): negatif fokus ke state (empty/error/loading), bukan injection.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Test case matrix | tools/ output / `test-plan/<feature>.md` | Permanen |
| Coverage breakdown | matrix Sheet 3 | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| 3-kategori coverage | # fitur dengan N+A+G ÷ total fitur | 100% |
| Acceptance coverage | # acceptance ber-case ÷ total acceptance | 100% |
| Negatif ratio | # case negatif ÷ total case | ≈ 40% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
