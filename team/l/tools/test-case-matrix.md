# Tool: Test Case Matrix (Excel-style, 3-kategori)

**Apa:** matriks test case super detail — kolom lengkap, emotionless data, 3-kategori (normal/alternatif/negatif). Bisa di-export ke Excel/Sheets atau render markdown.
**Kapan dipake:** tiap desain test case (SOP-L-02) + cross-browser (SOP-L-06).
**Framework:** ISTQB test techniques (BVA, equivalence partitioning, decision table).

---

## Format kolom

| ID | Kategori | Module | Scenario Name | Pre-condition | Steps | Test Data | Expected | Actual | Status | Severity | Browser/Device | Tester | Date | Bug ID | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

**ID convention:** `<MODULE>-N-NNN` (normal) · `-A-NNN` (alternatif) · `-G-NNN` (negatif/gagal).
**Status:** ✅ Pass · 🔴 Fail · ⏳ Pending · ⚠️ Warning.

### Excel-friendly sheet layout
- **Sheet 1** — Test scenarios (di atas)
- **Sheet 2** — Bug log (linked Bug ID)
- **Sheet 3** — Coverage matrix (module × scenario count, cek ratio ~30/30/40)
- **Sheet 4** — Test data sets (reusable fixtures)
- **Sheet 5** — Browser/device matrix (env)

### Filter convention
- Severity = S1/S2 → release-blocker
- Status = Fail → dev hand-off
- Kategori = Negatif → security/edge audit

---

## CONTOH TERISI (proyek contoh — fitur Payment digital)

| ID | Kategori | Module | Scenario Name | Pre-condition | Steps | Test Data | Expected | Actual | Status | Severity | Browser/Device | Tester | Date | Bug ID | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| PAYMENT-N-001 | Normal | Payment | Buat payment nominal valid | User di halaman checkout | 1. Klik "Bayar"<br>2. Pilih nominal 50000<br>3. Konfirmasi | 50000 | Tercatat, status pending, konfirmasi tampil | OK | ✅ Pass | — | Chrome 130 / Desktop | L | 2026-05-29 | — | — |
| PAYMENT-A-001 | Alternatif | Payment | Nominal max boundary (BVA) | User di halaman | 1. Input nominal 99999999 | 99999999 | Diterima, format rupiah benar | OK | ✅ Pass | — | Chrome 130 / Desktop | L | 2026-05-29 | — | Boundary atas OK |
| PAYMENT-A-002 | Alternatif | Payment | Input dengan separator ribuan | User di halaman | 1. Input "50.000" | "50.000" | Di-parse jadi 50000 | OK | ✅ Pass | — | Safari iOS | L | 2026-05-29 | — | — |
| PAYMENT-G-001 | Negatif | Payment | Nominal 0 ditolak (BVA) | User di halaman | 1. Input 0<br>2. Konfirmasi | 0 | Inline error "minimal Rp10.000", blocked | Submit ke API, kebuat record 0 | 🔴 Fail | S2 | Chrome 130 / Desktop | L | 2026-05-29 | BUG-0061 | Validasi min hilang |
| PAYMENT-G-002 | Negatif | Payment | Nominal negatif ditolak | User di halaman | 1. Input -50000 | -50000 | Ditolak generic, no negatif tersimpan | Diterima jadi -50000 | 🔴 Fail | S1 | Chrome 130 / Desktop | L | 2026-05-29 | BUG-0062 | Data integrity — accounting rusak (F-1) |
| PAYMENT-G-003 | Negatif | Payment | Double-submit race | User di halaman | 1. Klik konfirmasi 2× cepat | 50000 | 1 record | 2 record | 🔴 Fail | S1 | Chrome 130 / Desktop | L | 2026-05-29 | BUG-0063 | Data SACRED — dobel transaksi |

**Coverage (Sheet 3):** Normal 1 · Alternatif 2 · Negatif 3 → negatif 50% (sesuai mandate, negatif weight besar buat fitur finansial).

> Verdict slice ini: **FAIL.** 2× S1 (negatif tersimpan + dobel record) = data/accounting rusak (F-1 backend almighty + Data SACRED). Block rilis. Handoff @saitama (validasi server-side + idempotent) + @shikamaru (constraint CHECK nominal > 0).
