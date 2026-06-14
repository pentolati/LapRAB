# SOP-BL-02 — Design System & Token Maintenance

| | |
|---|---|
| **Kode** | SOP-BL-02 |
| **Pemilik** | Bulma (UI/UX Lead) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Atomic Design (Brad Frost), [tools/design-system.md](../tools/design-system.md), [tools/palette-tokens.md](../tools/palette-tokens.md) |
| **COBIT** | APO03 (arsitektur sistem desain), BAI03 (design input) |

## 1. Tujuan
Menjaga **konsistensi visual lintas page** lewat token & komponen sebagai **single source of truth** — supaya gak ada re-inventasi (button beda-beda di tiap page = bug menurut Tata).

## 2. Ruang Lingkup
- **Berlaku:** penambahan/ubah token (palette, type, spacing, radius), komponen yang dipakai >3 area, update `theme.js`.
- **Tidak berlaku:** one-off styling lokal yang gak akan dipakai ulang (biarkan inline sampai kepake >3 area — premature lock = over-engineering).

## 3. Definisi & Istilah
- **Token** — nilai desain terkecil sebagai variabel single-source (mis. `mauve.500`).
- **Atomic Design** — token→atom→molecule→organism→template→page.
- **Single source of truth** — 1 tempat definisi (theme.js), gak ada hex/nilai liar di komponen.
- **Rule of 3** — pola dipakai 3× → angkat ke design system.

## 4. Referensi
Atomic Design (komposisi komponen), Reuse>Rebuild + mandate konsistensi Tata, palette LOCK (0 coklat).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Definisi/ubah token | Bulma | Bulma | @killua (impl) | tim |
| Lock komponen ke system | Bulma | Bulma | @killua, @kakashi | tim |
| Token brand-facing baru tampil | — | **Tata** | Bulma | tim |

## 6. Prosedur

### 6.1 Identifikasi
- 6.1.1 Konfirmasi pola/token dipakai **>3 area** (Rule of 3) atau ada theme update yang sah.
- 6.1.2 **Exit kalau ≤3 area** → tahan, biarkan inline (belum waktunya lock).

### 6.2 Definisi token
- 6.2.1 Tetapkan token di [design-system](../tools/design-system.md): palette (≤6 hue, **0 coklat**), type (≤2 family), spacing (8px base), radius (lock 2 value), shadow, icon (stroke lock).
- 6.2.2 **Validasi:** tiap warna teks/bg pasangan lolos **kontras AA**? Token semantik (success/error) ada?
- 6.2.3 **Single-source check:** gak ada hex/nilai liar di luar `theme.js` (kontrol BC7).

### 6.3 Lock & broadcast
- 6.3.1 Update `theme.js` + dokumen [design-system](../tools/design-system.md) (token + cara pakai + contoh).
- 6.3.2 **Decision point:** token ini **brand-facing & user lihat** (mis. brand color baru)? → **sign-off Tata 🟡**. Internal/derivasi → lanjut.
- 6.3.3 Broadcast ke @killua: token X sekarang standar, refer dari theme, jangan hardcode.

## 7. Pengecualian
- **Token usang:** kalau token gak relevan → deprecate, ganti referensi di komponen, catat di design-system (jangan biarkan dead token bikin bingung).

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Definisi token | `tools/design-system.md` + `theme.js` | Living |
| Keputusan token brand-facing | `log.md` (+ ADR kalau brand lock) | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Inkonsistensi visual | # temuan "elemen sama beda styling" lintas page | ↓ |
| Token compliance | # nilai dari token ÷ total nilai styling | ↑ (target ~100%) |
| Coklat di token | # token coklat | **0** |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
