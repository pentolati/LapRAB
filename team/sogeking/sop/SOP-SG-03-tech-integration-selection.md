# SOP-SG-03 — Tech & Integration Selection

| | |
|---|---|
| **Kode** | SOP-SG-03 |
| **Pemilik** | Sogeking (Solution Architect) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | TOGAF ADM (fase D/E), [tools/trade-off-matrix.md](../tools/trade-off-matrix.md), [tools/build-buy-partner.md](../tools/build-buy-partner.md) |
| **COBIT** | APO03 (Managed Enterprise Architecture) |

## 1. Tujuan
Memastikan setiap pemilihan stack/vendor/pola integrasi diambil dari **≥2 opsi nyata** (anti vendor-hype, anti 1-opsi), lewat **filter assessment @senku** yang wajib, ber-trade-off matrix, dengan keputusan **build/buy/partner** eksplisit dan **vendor lock-in di-treat otomatis Type-1**.

## 2. Ruang Lingkup
- **Berlaku:** pilih/ganti stack, vendor/SaaS, pola integrasi lintas sistem, build-vs-buy-vs-partner.
- **Tidak berlaku:** pilihan library lokal reversible dalam stack default tim (cukup di code review @kakashi).

## 3. Definisi & Istilah
- **Trade-off matrix** — tabel banding opsi per kriteria (cost/scale/security/maintainability/lock-in).
- **Build / Buy / Partner** — bikin sendiri / beli vendor / kerja sama, basis trade-off.
- **Vendor lock-in** — ketergantungan yang mahal/mustahil di-undo → **otomatis Type-1**.
- **Type-1 / Type-2** — irreversible (pintu 1-arah) vs reversible.

## 4. Referensi
TOGAF ADM fase **D** (Technology Architecture), **E** (Opportunities & Solutions — build-vs-buy). Reversibility (Bezos one-way/two-way door). Tata rule: **gak boleh keputusan 1-opsi**. Filter wajib @senku (assessment tech baru). Stack default tim: React + Zustand + Chakra v2 + Fauxbase.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Define problem + constraint | Sogeking | Sogeking | @lelouch | tim |
| Generate ≥2 opsi + trade-off matrix | Sogeking | Sogeking | @kakashi | tim |
| Filter assessment tech | @senku | Sogeking | @senku | tim |
| Propose keputusan | Sogeking | Sogeking | @kakashi, @senku | tim |
| Keputusan Type-1 (lock-in dll) | — | **@tata** | Sogeking, @senku | tim |

## 6. Prosedur

### 6.1 Framing (TOGAF D)
- 6.1.1 Definisikan **problem + constraint** (apa yang dicapai, batas biaya/skala/UX, mandate F-1/F-2).
- 6.1.2 Cek **reuse dulu** — apakah stack default (Fauxbase dkk) sudah cukup? Anti rebuild.

### 6.2 Eksplorasi opsi
- 6.2.1 Generate **≥2 opsi nyata** (gak boleh 1-opsi, anti vendor-hype). Exit kalau cuma ketemu 1 → cari minimal 1 alternatif (termasuk "do nothing" / build sendiri).
- 6.2.2 **MANDATORY filter @senku** — tiap opsi tech baru wajib lewat assessment Senku (maturity, security, fit). Exit kalau belum di-assess → stop, kirim ke @senku dulu (kontrol **SG-C3**).

### 6.3 Trade-off & keputusan (TOGAF E)
- 6.3.1 Tentukan jalur **build / buy / partner** per [build-buy-partner](../tools/build-buy-partner.md): Build = core differentiator + reversible; Buy = commodity + vendor mature + ROI>build; Partner = complementary + both gain.
- 6.3.2 Susun **trade-off matrix** ([trade-off-matrix](../tools/trade-off-matrix.md)) per kriteria: **cost · scale · security · maintainability · lock-in**. Contoh *wedding app*: payment gateway → buy (commodity) vs build (over-engineering, langgar YAGNI).
- 6.3.3 **Decision point — reversibility:** ada **vendor lock-in / data residency / ganti stack besar**? → **otomatis Type-1 🔴**. Wajib ADR + **escalate @tata** (via Pre-Tata Gate @kakashi) + exit strategy, tunggu sign-off. Reversible (Type-2 🟢) → propose & lanjut.
- 6.3.4 Tulis rationale + arsipkan trade-off matrix; broadcast keputusan + alasan ke tim.

## 7. Pengecualian
- **Trial / Assess (tech radar):** boleh coba tech di lingkungan terbatas tanpa keputusan final, **asal** belum di-lock ke produksi & sudah lewat filter @senku. Promote ke "Adopt" wajib lewat SOP ini lengkap.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Trade-off matrix | `arch/` / `log.md` | Per seleksi |
| Assessment @senku | `log.md` | Per seleksi |
| ADR (Type-1 / lock-in) | `adr/NNN-*.md` | Permanen |
| Sign-off Type-1 @tata | ADR (field Escalation) | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Keputusan 1-opsi | # seleksi tanpa alternatif | 0 |
| Trade-off-backed selection | # seleksi ber-trade-off matrix ÷ total | 100% |
| Filter @senku coverage | # opsi tech baru lewat assessment ÷ total | 100% |
| Vendor lock-in ber-ADR + exit plan | # lock-in ber-ADR ÷ total lock-in | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
