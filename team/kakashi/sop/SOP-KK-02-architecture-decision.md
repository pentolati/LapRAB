# SOP-KK-02 — Architecture Decision

| | |
|---|---|
| **Kode** | SOP-KK-02 |
| **Pemilik** | Kakashi (Lead Developer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | TOGAF ADM, [tools/adr-template.md](../tools/adr-template.md), [tools/reversibility-matrix.md](../tools/reversibility-matrix.md) |
| **COBIT** | APO03 (Managed Enterprise Architecture) |

## 1. Tujuan
Memastikan setiap keputusan arsitektur/teknis penting diambil berbasis trade-off ≥2 opsi, terdokumentasi (ADR), dan ter-eskalasi dengan benar bila tak-terpulihkan (Type-1).

## 2. Ruang Lingkup
- **Berlaku:** keputusan dengan ≥2 opsi nyata, pemilihan/penggantian teknologi, penetapan pola lintas-codebase, keputusan Type-1.
- **Tidak berlaku:** pilihan implementasi sepele yang reversible & lokal (cukup di code review).

## 3. Definisi & Istilah
- **ADR** — Architecture Decision Record: catatan keputusan (konteks, pilihan, alternatif, konsekuensi).
- **Type-1 / Type-2** — keputusan irreversible (pintu satu-arah) vs reversible.
- **Tech radar** — status teknologi: Adopt / Trial / Assess / Hold.

## 4. Referensi
TOGAF ADM (metode), Bezos one-way/two-way door (reversibility), Tata `bruce` rule (gak boleh keputusan 1-opsi).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Analisis trade-off & pilih | Kakashi | Kakashi | area owner (@killua/@saitama/@shikamaru) | tim |
| Tulis ADR | Kakashi | Kakashi | — | tim |
| Keputusan Type-1 | — | **Tata** | Kakashi | tim |

## 6. Prosedur

### 6.1 Framing
- 6.1.1 Definisikan **problem** dengan jelas (apa yang mau dicapai, constraint).
- 6.1.2 Tentukan **reversibility** via [reversibility-matrix](../tools/reversibility-matrix.md): Type-1 atau Type-2? Kalau ragu → Type-1.

### 6.2 Eksplorasi
- 6.2.1 Generate **≥2 hipotesis/opsi** (gak boleh 1-opsi). Exit kalau cuma ketemu 1 → cari minimal 1 alternatif (termasuk "do nothing").
- 6.2.2 Susun **trade-off matrix**: cost · complexity · time · reversibility per opsi.
- 6.2.3 **Consult** area owner terdampak (feasibility).

### 6.3 Keputusan & dokumentasi
- 6.3.1 Pilih opsi + rationale.
- 6.3.2 Tulis **ADR** (status Proposed→Accepted) di `adr/NNN-*.md`.
- 6.3.3 Update **tech radar** kalau ring teknologi berubah.
- 6.3.4 **Decision point:** Type-1? → invoke `bruce`+archrival + **escalate Tata 🔴**, tunggu sign-off sebelum eksekusi. Type-2 → lanjut.
- 6.3.5 Broadcast keputusan + alasan ke tim.

## 7. Pengecualian
- **Darurat arsitektur saat incident:** boleh keputusan cepat untuk contain, ADR dibuat **retroaktif < 48 jam**, tetap escalate kalau Type-1.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| ADR | `adr/NNN-*.md` | Permanen |
| Tech radar | `tools/tech-radar.md` | Living doc |
| Sign-off Type-1 | ADR (field Escalation) | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| ADR coverage Type-1 | # Type-1 ber-ADR ÷ total Type-1 | 100% |
| Keputusan 1-opsi | # keputusan tanpa alternatif | 0 |
| Rework arsitektur | # ADR di-superseded < 1 bulan | minimal |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
