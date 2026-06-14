# SOP-SG-05 — Architecture Review (gate hulu)

| | |
|---|---|
| **Kode** | SOP-SG-05 |
| **Pemilik** | Sogeking (Solution Architect) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | TOGAF ADM (G), ISO/IEC 25010, AWS/Azure Well-Architected, [tools/arch-review-checklist.md](../tools/arch-review-checklist.md), [tools/reference-arch.md](../tools/reference-arch.md) |
| **COBIT** | APO03 (Managed Enterprise Architecture) |

## 1. Tujuan
Menjamin **desain arsitektur high-stakes lolos review hulu sebelum di-lock** — cek 5 pilar Well-Architected, 8 karakteristik ISO 25010, reversibility, dan mandate Tata (F-1/F-2). Ini **gate hulu** Sogeking, **distinct** dari Pre-Tata Gate @kakashi yang berada di hilir.

## 2. Ruang Lingkup
- **Berlaku:** desain arsitektur **high-stakes** (lintas-fitur/app, ngaruh biaya/skala/UX, atau menyentuh keputusan Type-1) **sebelum di-lock** & diserahkan ke eksekusi.
- **Tidak berlaku:** keputusan **Type-2 reversible-lokal** → cukup **guardrail self-serve** (tim jalan sendiri, gak perlu lewat review ini).

## 3. Definisi & Istilah
- **Gate hulu** — review arsitektur sebelum desain di-lock (Sogeking); **berbeda** dari **Pre-Tata Gate hilir** (@kakashi, SOP-KK-03) yang ngecek artifact sebelum ke Tata.
- **High-stakes** — desain yang ngaruh biaya/skala/UX, lintas sistem, atau Type-1.
- **Guardrail** — batas arsitektur yang bikin tim jalan aman tanpa nunggu approval (untuk Type-2).
- **5 pilar Well-Architected** — reliability, security, cost, performance, operational excellence.
- **8 karakteristik ISO 25010** — functional suitability, performance efficiency, compatibility, usability, reliability, security, maintainability, portability.

## 4. Referensi
TOGAF ADM fase **G** (Architecture Governance), ISO/IEC 25010 (model mutu), AWS/Azure Well-Architected (5 pilar), OWASP + UU PDP (security/privacy), mandate Tata F-1/F-2. **Guardrail-vs-gate:** Type-2 = guardrail self-serve, Type-1 = wajib review ini.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Jalankan Architecture Review hulu | Sogeking | Sogeking | @kakashi, @l | tim |
| Verdict PASS/REVISI | Sogeking | Sogeking | — | owner desain |
| Perbaikan kalau REVISI | owner desain | Sogeking | Sogeking | — |
| Pre-Tata Gate (hilir) | I | **@kakashi** | — | Sogeking |

## 6. Prosedur

### 6.1 Penerimaan
- 6.1.1 Terima **desain high-stakes** + konteks (problem, NFR target, scope). **Exit:** kalau desain ternyata **Type-2 reversible-lokal** → arahkan ke **guardrail self-serve**, tutup review.

### 6.2 Pemeriksaan (checklist)
- 6.2.1 Jalankan [arch-review-checklist](../tools/arch-review-checklist.md):
  - **5 pilar Well-Architected** — reliability, security, cost, performance, operational excellence.
  - **8 karakteristik ISO 25010** — NFR ke-cover lengkap, ada target ukur.
  - **Reversibility** — Type-1/Type-2 ter-klasifikasi eksplisit (link SOP-SG-04).
  - **Mandate Tata** — **F-1 Backend ALMIGHTY** (audit-trail, accounting comply, data lengkap), **F-2 Frontend BOOMER-PROOF** (bahasa warung, no jargon), **Data SACRED** (merge, no overwrite, no silent auto).
  - **Risk map completeness** — risk & dependency ter-petakan (link SOP-SG-06).
- 6.2.2 Cek anti-pattern: ivory-tower, over-engineering (YAGNI), premature scaling, single-point dependency, diagram-tanpa-ADR. Reality-check feasibility ke @kakashi, NFR pain ke @l.

### 6.3 Verdict (exit)
- 6.3.1 **Decision point:** semua item lolos?
  - **PASS** → desain boleh **di-lock** & diserahkan ke jalur eksekusi. **Catatan:** output **tetap lewat Pre-Tata Gate @kakashi (SOP-KK-03)** sebelum sampai ke Tata — gate hulu **tidak** menggantikan gate hilir. Type-1 → escalate Tata via SOP-SG-04.
  - **REVISI** → balikin ke owner desain dengan **feedback konkret** (item mana, kenapa) → loop sampai PASS (kontrol **SG-C4**).

## 7. Pengecualian
- **Type-2 reversible** tidak wajib lewat review ini — cukup guardrail self-serve (anti-bottleneck). Bila ragu Type-1/Type-2 → treat sebagai **wajib review**.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Verdict review + checklist evidence | `log.md` + ACTIVITY | Permanen |
| Feedback REVISI ke owner | `log.md` | Permanen |
| Reference architecture / guardrail | `tools/reference-arch.md` | Living doc |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Desain high-stakes lock tanpa review | # lock tanpa verdict hulu | 0 |
| First-pass review rate | # PASS sekali ÷ total review | ↑ tiap periode |
| Surprise NFR gap di prod | # gap skala/security/cost muncul di prod | 0 |
| Review cycle time | rata-rata jam handoff → verdict | < 1 hari kerja |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
