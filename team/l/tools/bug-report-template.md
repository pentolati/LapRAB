# Tool: Bug Report Template (dual-layer)

**Apa:** laporan bug actionable — repro minimal & deterministik + severity + evidence + dual-layer (awam + engineer).
**Kapan dipake:** tiap bug ditemukan (SOP-L-04).
**Framework:** ISTQB defect management, COBIT DSS02.
**Output:** simpen di `team/l/bugs/<id>.md`.
**Prinsip:** fakta + impact, **no ego, no blame**. Dual-layer biar Tata (awam) & dev (engineer) dua-duanya ngerti.

---

## TEMPLATE (copy mulai sini)

```markdown
# BUG-NNNN: <judul singkat>

**Severity:** S1 / S2 / S3 / S4 (lihat severity-matrix)
**Reporter:** L · **Owner:** @killua / @saitama / @shikamaru
**Status:** Open / In progress / Fixed / Verified · **Date:** YYYY-MM-DD

## Ringkasan untuk Tata (layer 1 — awam, bahasa warung)
<apa yang rusak dari sudut user, no jargon. Impact ke user + rekomendasi.>

## Environment
- Browser / Device / User role / App version (commit)

## Repro steps (minimal, deterministik)
1. ...
2. ...
3. ... → bug muncul (konsisten 3×)

## Expected vs Actual
- **Expected:** ...
- **Actual:** ...

## Evidence
- Screenshot / Video / Console log / Network

## Impact
- Affected users: <estimasi> · Workaround: <ada/tidak>

## Suggested fix area (layer 2 — engineer, opsional)
<kalau gw spot root cause>
```

---

## CONTOH TERISI (proyek contoh — BUG-0042)

```markdown
# BUG-0042: Email kosong lolos validasi, masuk ke server

**Severity:** S2 · **Reporter:** L · **Owner:** @killua (FE) + @saitama (BE)
**Status:** Open · **Date:** 2026-05-29

## Ringkasan untuk Tata (layer 1)
Kalau user **lupa isi email** terus klik Login, formnya **gak nolak** — malah dikirim ke
server dan baru error. User awam bingung kenapa gagal tanpa pesan jelas. Rekomendasi:
**tahan rilis sampai diperbaiki** (form harus langsung kasih "Email wajib diisi").

## Environment
- Browser: Chrome 130 · Device: Desktop · Role: guest · Commit: a3f9c1

## Repro steps (minimal, deterministik — 3×)
1. Buka /login
2. Biarin email kosong, isi password apa aja
3. Klik "Login" → request 400 ke server (harusnya di-block di client)

## Expected vs Actual
- **Expected:** inline error "Email wajib diisi", tombol/ request blocked di client
- **Actual:** form submit ke API, balik 400, no inline error

## Evidence
- Screenshot: evidence/bug-0042-no-error.png
- Network: POST /auth/login → 400 (payload email="")

## Impact
- Affected users: semua yang lupa isi email · Workaround: tidak ada (UX buruk)

## Suggested fix area (layer 2)
- FE: tambah required + inline validation sebelum submit (@killua)
- BE: tetap validasi server-side (defense in depth) + error code konsisten (@saitama)
```

> Dual-layer: Tata baca layer 1 (paham impact tanpa jargon), dev baca layer 2 (langsung fix). Severity S2 (core flow login, no workaround) → release-blocker, ping @nami.
