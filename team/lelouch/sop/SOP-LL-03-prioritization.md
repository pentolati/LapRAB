# SOP-LL-03 — Prioritization (MoSCoW / RICE)

| | |
|---|---|
| **Kode** | SOP-LL-03 |
| **Pemilik** | Lelouch (PM & IT Business Analyst) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | RICE, MoSCoW, [tools/moscow-prioritization.md](../tools/moscow-prioritization.md), BABOK KA3 (Requirements Life Cycle Mgmt) |
| **COBIT** | APO02 (Managed Strategy) |

## 1. Tujuan
Menetapkan **urutan pengerjaan** berbasis skor terukur (bukan feeling / HiPPO), dengan tradeoff yang terdokumentasi — supaya tim jelas mana duluan & kenapa.

## 2. Ruang Lingkup
- **Berlaku:** backlog >1 kandidat, scope MVP yang harus di-cut, beberapa fitur rebut resource.
- **Tidak berlaku:** cuma 1 kandidat tanpa alternatif (gak ada yang di-prioritas).

## 3. Definisi & Istilah
- **MoSCoW** — Must / Should / Could / Won't-have-now.
- **RICE** — (Reach × Impact × Confidence) ÷ Effort.
- **HiPPO** — "Highest Paid Person's Opinion" — anti-pattern: prioritas by jabatan, bukan data.
- **Opportunity cost** — yang dikorbanin pas pilih A daripada B.

## 4. Referensi
RICE (Intercom), MoSCoW (DSDM), mandate Tata (prioritas Tata final, Lelouch propose).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Inventory + skor | Lelouch | Lelouch | @kakashi (effort estimate), @senku (reach data) | tim |
| Rekomendasi urutan | Lelouch | Lelouch (propose) | — | tim |
| **Lock urutan / kill** | — | **Tata** | Lelouch | tim |

## 6. Prosedur

### 6.1 Inventory
- 6.1.1 List **semua kandidat** (fitur/scope item) eksplisit.
- 6.1.2 **Decision point:** pilih framework — **MoSCoW** kalau scope MVP (in/out), **RICE** kalau ranking banyak fitur kuantitatif.

### 6.2 Scoring
- 6.2.1 **RICE:** isi Reach (user/quarter) · Impact (0.25–3) · Confidence (50/80/100%) · Effort (person-month, **consult @kakashi**). Hitung skor. (kontrol LL-C3)
- 6.2.2 **MoSCoW:** klasifikasi tiap item — Must (tanpa ini gak launch) / Should / Could / Won't. Hindari "semua Must" (anti-pattern).
- 6.2.3 **Sanity check** — ada bias? sponsor-heavy (HiPPO)? recency bias?

### 6.3 Rekomendasi & komunikasi
- 6.3.1 **Articulate tradeoff** — "pilih A, gak pick B karena [opportunity cost]".
- 6.3.2 Dokumentasi **skor + rationale** di `log.md` (bukti LL-C3).
- 6.3.3 **Decision point:** lock urutan / kill kandidat? → **escalate Tata** (🟡 lock, 🔴 kill).
- 6.3.4 **Communicate** ke tim: yang dipilih, yang di-park, yang di-kill — **kasih reason** (anti "kill diam-diam").
- 6.3.5 **Exit criteria:** tiap kandidat ada skor; tradeoff terdokumentasi; urutan di-lock Tata; tim dikabarin + reason.

## 7. Pengecualian
- **Hotfix / blocker produksi:** auto-prioritas tinggi tanpa skor (tapi tetap dicatat).
- **Komitmen strategis Tata:** kalau Tata override skor demi alasan strategis → catat sebagai keputusan Tata + rationale-nya (bukan skor Lelouch).

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Skor sheet (RICE/MoSCoW) | `log.md` | Permanen |
| Rationale + tradeoff | `log.md` | Permanen |
| Keputusan kill + reason | `log.md` + ACTIVITY | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Prioritas by skor | # keputusan prioritas ber-skor ÷ total | 100% (0 by feeling) |
| Tradeoff terdokumentasi | # keputusan ada opportunity-cost note ÷ total | 100% |
| Re-prioritas mendadak | # urutan dibongkar tanpa data baru | minimal |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: urutan probe 8 component Interactive Invitation (foundation-first by complexity) |
