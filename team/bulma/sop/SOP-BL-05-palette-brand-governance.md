# SOP-BL-05 — Palette & Brand Governance

| | |
|---|---|
| **Kode** | SOP-BL-05 |
| **Pemilik** | Bulma (UI/UX Lead) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | [tools/palette-tokens.md](../tools/palette-tokens.md), [tools/design-system.md](../tools/design-system.md), WCAG 2.x AA |
| **COBIT** | APO03 (arsitektur — identitas visual sebagai aset) |

## 1. Tujuan
Menegakkan **palette LOCK Tata** (pink soft · mauve · ungu soft · sage, **0 coklat**) dan menjaga **identitas brand** (logo, nama, voice) supaya konsisten & gak drift — brand = aset, sekali dikenang publik mahal di-undo.

## 2. Ruang Lingkup
- **Berlaku:** semua palette/warna yang user lihat, dan elemen brand (logo, nama "Proyek-Contoh", brand voice, tipografi brand).
- **Tidak berlaku:** warna internal tooling/wireframe yang gak tampil ke user.

## 3. Definisi & Istilah
- **Palette LOCK** — mandate Tata: pink soft, mauve, ungu soft, sage; varied (bukan monotone); **0 coklat** ("jijiki").
- **Brand identity** — logo, nama, voice, tipografi brand — keputusan 🔴 (escalate Tata).
- **Brand drift** — penyimpangan tak-sengaja dari brand yang udah dilock.
- **Coklat** — hue cokelat (mis. ~20-40° hue, brown/tan) — **dilarang**.

## 4. Referensi
Palette LOCK Tata, WCAG AA (kontras), GCG Transparency (keputusan brand auditable). Proyek-Contoh: logo **jasmine sage + mauve serif**, palette mauve/sage/cream/slate + gold accent.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Enforce palette LOCK / 0-coklat | Bulma | Bulma | — | tim |
| Palette change yang tampil | Bulma | **Tata** (🟡) | @killua | tim |
| Brand identity lock (logo/nama/voice) | Bulma (rekomendasi) | **Tata** (🔴) | @lelouch | tim |

## 6. Prosedur

### 6.1 Audit palette
- 6.1.1 Scan semua hex/token yang user lihat: ada **coklat**? Kalau ada → **re-color tanpa kompromi**, stop sampai 0 coklat (kontrol BC2).
- 6.1.2 Cek palette dalam batas: ≤6 hue, derivasi tints/shades; varied (bukan monotone); pakai token (bukan hex liar).
- 6.1.3 **Kontras AA** tiap pasangan teks/bg (mis. gold.700 di cream ~5:1, mauve.800 di cream ~9:1).

### 6.2 Perubahan palette
- 6.2.1 Setiap palette change yang **user lihat** → siapkan before/after + rationale.
- 6.2.2 **Decision point:** ini **brand-facing**? → **sign-off Tata 🟡** sebelum tampil.

### 6.3 Brand identity
- 6.3.1 Perubahan **logo / nama / brand voice inti / tipografi brand** = **Type-1 (irreversible)**.
- 6.3.2 **Decision point:** → tulis **ADR** (`adr/NNN-*.md`) + **escalate Tata 🔴**, tunggu sign-off sebelum eksekusi. Jangan lock brand diam-diam.
- 6.3.3 Setelah lock, dokumen di [palette-tokens](../tools/palette-tokens.md) + design-system; broadcast ke tim.

## 7. Pengecualian
- **Aksen baru (mis. gold scale Proyek-Contoh):** boleh ditambah sebagai accent kalau Tata konfirmasi ("ungu pastel + gold = masuk akal") — tetap 🟡 sign-off, tetap 0 coklat, tetap kontras AA.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Definisi palette/token brand | `tools/palette-tokens.md` | Living |
| Keputusan brand lock | `adr/NNN-*.md` | Permanen |
| Audit 0-coklat + kontras | `log.md` QC | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Coklat bocor | # coklat lolos ke desain visible | **0** |
| Brand drift | # elemen brand nyimpang dari lock | 0 |
| Kontras AA | # pasangan teks lolos AA ÷ total | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
