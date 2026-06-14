# SOP-SK-02 — Competitor Analysis

| | |
|---|---|
| **Kode** | SOP-SK-02 |
| **Pemilik** | Senku (R&D Engineer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | [tools/competitor-analysis-framework.md](../tools/competitor-analysis-framework.md), evidence hierarchy |
| **COBIT** | APO04 (Managed Innovation) |

## 1. Tujuan
Memetakan lanskap kompetitor secara terstruktur (feature matrix + pricing tear-down + positioning) untuk menemukan **gap actionable** yang bisa jadi diferensiasi produk — bukan glance permukaan.

## 2. Ruang Lingkup
- **Berlaku:** sebelum lock value-prop / pricing / fitur USP, atau saat Lelouch/Tata minta positioning.
- **Tidak berlaku:** competitor-name-dropping kasual tanpa keputusan tergantung.

## 3. Definisi & Istilah
- **Feature matrix** — tabel kompetitor × fitur, ditandai presence + quality.
- **Pricing tear-down** — bedah tier, gating, conversion hook tiap kompetitor.
- **Gap analysis** — apa yang kita bisa lakukan berbeda / lebih baik.
- **Adjacent competitor** — pemain di space sebelah yang bisa expand ke kita.

## 4. Referensi
Tata mandate (abusively riset, deep tear-down bukan glance), evidence hierarchy (competitor = sumber tingkat 5, cross-check), pattern library Proyek-Contoh (Wedew, Invitato, dll).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Inventory & tear-down | Senku | Senku | — | tim |
| Gap analysis & rekomendasi | Senku | Senku | @lelouch, @bulma | Tata |
| Keputusan pakai gap (produk) | Senku (recommend) | **Tata** | @lelouch | tim |

## 6. Prosedur

### 6.1 Inventory
- 6.1.1 List **5–10 kompetitor langsung + 3 adjacent**, campuran lokal + global (untuk Proyek-Contoh: Invitato, Wedew, Bridestory lokal + Joy, Zola, Greenvelope global).
- 6.1.2 **Exit kalau < 5 langsung** → perluas pencarian (riset belum cukup).

### 6.2 Tear-down (deep, bukan glance)
- 6.2.1 Susun **feature matrix** — kompetitor × fitur, tandai presence + quality (bukan cuma ✓/✗).
- 6.2.2 **Pricing tear-down** — tier, gating, free-trial hook, conversion mechanic.
- 6.2.3 **Positioning** — angle/tagline tiap kompetitor (premium? marketplace? AI?).
- 6.2.4 **Trust signal audit** — stat/klaim yang dipakai. Tandai mana **verifiable** vs marketing fluff (kontrol SK-C5).
- 6.2.5 Simpan **reference URL + screenshot** per kompetitor (reuse @bulma/@lelouch).

### 6.3 Sintesa
- 6.3.1 **Gap analysis** — pola yang berhasil + yang belum ada → kandidat diferensiasi.
- 6.3.2 Lewatkan tiap kandidat via **6Q critical filter** (real problem? fit stack? compliant? business-fit? reversible?).
- 6.3.3 **Decision point:** kandidat sentuh data/payment → trigger SOP-SK-03.
- 6.3.4 **Exit criteria:** feature matrix + pricing tear-down + gap actionable + reference saved + verdict per kandidat (adopt/defer).

## 7. Pengecualian
- **Kompetitor gated (butuh akun bayar):** tear-down dari sumber sekunder (review, demo video, blog) + disclaim "secondhand". Gak boleh ngaku tear-down langsung kalau enggak.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Feature matrix + pricing tear-down | `log.md` | Permanen |
| Reference URL + screenshot | `log.md` | Living (reuse) |
| Gap analysis + verdict | `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Coverage kompetitor | # kompetitor di-tear-down | ≥ 8 (5 langsung + 3 adjacent) |
| Gap actionable | # gap yang jadi keputusan produk ÷ total gap | ↑ |
| Reference reuse | # URL/screenshot dipakai ulang @bulma/@lelouch | ↑ |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: 10-competitor scan landing v4 (fake-stats finding) |
