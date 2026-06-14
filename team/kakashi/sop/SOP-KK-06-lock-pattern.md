# SOP-KK-06 — Lock Pattern / Standardisasi

| | |
|---|---|
| **Kode** | SOP-KK-06 |
| **Pemilik** | Kakashi (Lead Developer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Rule of 3, [tools/tech-radar.md](../tools/tech-radar.md), [tools/adr-template.md](../tools/adr-template.md) |
| **COBIT** | APO01 (I&T Management Framework), EDM01 (Governance Framework) |

## 1. Tujuan
Mengubah pola yang sudah berulang menjadi standar resmi tim, supaya tiap orang gak re-inventasi & konsistensi codebase terjaga.

## 2. Ruang Lingkup
- **Berlaku:** pola desain/kode/konvensi yang dipakai > 3 area (Rule of 3).
- **Tidak berlaku:** pola dipakai 1–2 area (biarkan inline — lock terlalu dini = premature standardization).

## 3. Definisi & Istilah
- **Rule of 3** — abstraksi/standardisasi dilakukan setelah pemakaian ke-3.
- **Style guide** — dokumen pola resmi tim.
- **Enforce** — penegakan otomatis via lint/CI (bukan cuma imbauan).

## 4. Referensi
Rule of 3 (refactoring), Tata mandate Reuse>Rebuild & no tambal-sulam.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Identifikasi & lock pola | Kakashi | Kakashi | dev terkait | tim |
| Enforce via lint/CI | @levi | Kakashi | — | tim |

## 6. Prosedur

### 6.1 Identifikasi
- 6.1.1 Konfirmasi pola dipakai **> 3 area** (dari temuan code review SOP-KK-01 §6.2.3).
- 6.1.2 **Exit kalau ≤ 3 area** → tahan, belum waktunya lock.

### 6.2 Standardisasi
- 6.2.1 Tulis **ADR** (kenapa pola ini jadi standar) + entri **style guide**.
- 6.2.2 **Decision point:** dipakai **> 5 area**? → **enforce via lint/CI** (koord @levi). 3–5 area → cukup style guide.
- 6.2.3 Update **tech radar** (pola/teknologi → ring Adopt).

### 6.3 Komunikasi
- 6.3.1 Broadcast ke tim: pola X sekarang standar, lokasi style guide, cara pakai.
- 6.3.2 Mulai review berikutnya pakai standar ini sebagai acuan (SOP-KK-01).

## 7. Pengecualian
- **Pola usang:** kalau standar lama gak relevan → ADR baru (status Superseded), update radar ke Hold.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| ADR standardisasi | `adr/NNN-*.md` | Permanen |
| Entri style guide / lint rule | repo | Living |
| Tech radar | `tools/tech-radar.md` | Living |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Inkonsistensi pola | # temuan "pola sama beda implementasi" di review | ↓ |
| Coverage enforce | # pola >5-area yang ber-lint ÷ total | ↑ |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
