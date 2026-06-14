# SOP-SG-04 — ADR Strategis (co-own @kakashi)

| | |
|---|---|
| **Kode** | SOP-SG-04 |
| **Pemilik** | Sogeking (Solution Architect) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | TOGAF ADM (G/H), [tools/adr-template.md](../tools/adr-template.md), [tools/reversibility-matrix.md](../tools/reversibility-matrix.md) |
| **COBIT** | APO03 (Managed Enterprise Architecture) |

## 1. Tujuan
Memastikan setiap **keputusan arsitektur strategis Type-1** (irreversible, lintas-fitur/lintas-app) diambil berbasis trade-off ≥2 opsi, terdokumentasi sebagai **ADR**, dan ter-eskalasi ke Tata sebelum dieksekusi. SOP ini memegang **arah/direction** arsitektur; **pola implementasi code-level** dipegang @kakashi via SOP-KK-02.

## 2. Ruang Lingkup
- **Berlaku:** keputusan arsitektur **arah-strategis** — target architecture lintas-fitur/app, pemilihan/penggantian stack besar, vendor lock-in, data residency, pola integrasi lintas sistem; semua keputusan **Type-1**.
- **Tidak berlaku:** pola implementasi code-level & pemilihan struktur dalam satu codebase (itu **SOP-KK-02 @kakashi**); pilihan reversible-lokal sepele (cukup di code review).

## 3. Definisi & Istilah
- **ADR strategis** — Architecture Decision Record level-arah: konteks, opsi, trade-off, konsekuensi, escalation.
- **Type-1 / Type-2** — keputusan **irreversible** (pintu satu-arah, mahal di-undo) vs **reversible**.
- **Co-own** — kepemilikan bersama Sogeking (arah) + @kakashi (pola code-level), arsip ADR dibagi.
- **Reversibility matrix** — alat klasifikasi Type-1 vs Type-2 → tentuin kecepatan & kehati-hatian.

## 4. Referensi
TOGAF ADM fase **G/H** (Governance & Change Mgmt), Bezos one-way/two-way door (reversibility), mandate Tata (Type-1 escalate, no auto-everything-silent), **boundary split vs SOP-KK-02**: Sogeking = arah solusi lintas-fitur, @kakashi = pola implementasi dalam-codebase.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Frame problem + klasifikasi reversibility | Sogeking | Sogeking (arah) | @kakashi | tim |
| Analisis trade-off & pilih arah | Sogeking | Sogeking (arah) | @lelouch, @shikamaru, @senku | tim |
| Tulis ADR strategis (arah) | Sogeking | Sogeking | **co-A: @kakashi** (pola) | tim |
| Keputusan Type-1 | — | **Tata** | Sogeking, @kakashi | tim |

## 6. Prosedur

### 6.1 Framing
- 6.1.1 Definisikan **problem** dengan jelas: apa yang mau dicapai, constraint, scope lintas-fitur/app. Align arah ke @lelouch (roadmap) bila relevan.
- 6.1.2 Klasifikasi **reversibility** via [reversibility-matrix](../tools/reversibility-matrix.md): **Type-1** atau **Type-2**? Kalau ragu → treat **Type-1**. *(Contoh: pilih Fauxbase driver `local persist:memory` untuk prototype interactive-invitation = Type-2 🟢; commit vendor payment gateway untuk wishlist kado = Type-1 🔴.)*

### 6.2 Eksplorasi
- 6.2.1 Generate **≥2 opsi nyata** (gak boleh 1-opsi, termasuk "do nothing"). **Exit:** kalau cuma 1 opsi → cari minimal 1 alternatif.
- 6.2.2 Susun **trade-off matrix**: cost · skala · security · maintainability · reversibility per opsi.
- 6.2.3 **Consult** pihak terdampak: @kakashi (feasibility eksekusi), @shikamaru (data), @senku (filter tech baru wajib).

### 6.3 Keputusan & dokumentasi
- 6.3.1 Pilih **arah** + rationale eksplisit (anti-vibes).
- 6.3.2 Tulis **ADR strategis** ([adr-template](../tools/adr-template.md), status Proposed→Accepted) di `adr/NNN-*.md` — **co-arsip dengan @kakashi**; field arah diisi Sogeking, field pola implementasi diisi @kakashi.
- 6.3.3 **Decision point — reversibility:**
  - **Type-2 🟢** → lanjut, broadcast keputusan + alasan ke tim.
  - **Type-1 🔴** → invoke `bruce`+archrival bila big call, **escalate Tata** untuk sign-off, **tunggu sign-off sebelum eksekusi** (kontrol **SG-C1/SG-C6**).
- 6.3.4 Setelah arah di-lock & Type-1 di-sign-off, **handoff pola code-level ke @kakashi** (SOP-KK-02) untuk eksekusi.

## 7. Pengecualian
- **Darurat arsitektur saat incident:** boleh keputusan cepat untuk contain; ADR dibuat **retroaktif < 48 jam**, tetap escalate Tata kalau Type-1.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| ADR strategis (co-arsip @kakashi) | `adr/NNN-*.md` | Permanen |
| Trade-off matrix | `log.md` / `arch/` | Permanen |
| Reversibility classification | `log.md` | Permanen |
| Sign-off Type-1 Tata | ADR (field Escalation) | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| ADR coverage Type-1 arsitektur | # Type-1 ber-ADR ÷ total Type-1 | 100% |
| Keputusan 1-opsi | # keputusan tanpa alternatif | 0 |
| Type-1 eksekusi tanpa sign-off Tata | # Type-1 dieksekusi pra-sign-off | 0 |
| Rework arsitektur | # ADR di-superseded < 1 bulan | minimal |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
