# SOP-LL-05 — BPMN Process Modeling

| | |
|---|---|
| **Kode** | SOP-LL-05 |
| **Pemilik** | Lelouch (PM & IT Business Analyst) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | BPMN 2.0, [tools/bpmn-guide.md](../tools/bpmn-guide.md), [tools/gap-analysis-template.md](../tools/gap-analysis-template.md), BABOK KA4/KA5 |
| **COBIT** | BAI02 (Managed Requirements Definition) |

## 1. Tujuan
Memetakan **alur proses** sebuah fitur — **as-is** (saat ini) → **to-be** (yang diinginkan) — pakai notasi **BPMN 2.0**, supaya gap teridentifikasi, edge case ketauan, dan flow di-validate stakeholder sebelum di-spec.

## 2. Ruang Lingkup
- **Berlaku:** fitur yang **ngubah alur proses** (multi-step, ada decision/branch, lintas actor) — mis. RSVP, reserve→beli→konfirmasi kado, checkout.
- **Tidak berlaku:** fitur statis 1-langkah tanpa branching (cukup user story).

## 3. Definisi & Istilah
- **BPMN 2.0** — Business Process Model and Notation: notasi standar (event ○, task ▭, gateway ◇, flow →).
- **As-is / To-be** — proses saat ini vs proses yang diinginkan.
- **Gateway** — titik percabangan keputusan (exclusive XOR / parallel AND).
- **Pool / Lane** — pengelompokan aktivitas per actor/sistem.
- **Gap** — delta antara as-is & to-be (yang harus dibangun).

## 4. Referensi
BPMN 2.0 spec (OMG), BABOK KA4 (current/future state) + KA5 (modeling), mandate Tata (auto-behavior explicit di flow).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Modeling as-is/to-be | Lelouch | Lelouch | @senku (existing system), @bulma (UX flow) | tim |
| Gap analysis | Lelouch | Lelouch | @kakashi (feasibility gap) | tim |
| Validasi flow | Lelouch | **Tata** (kalau scope) | stakeholder | tim |

## 6. Prosedur

### 6.1 As-is (BABOK KA4)
- 6.1.1 Petakan **alur saat ini** (kalau ada existing system / workaround manual user). Pakai BPMN: actor (lane), task, gateway, event.
- 6.1.2 Kalau greenfield (belum ada proses) → skip as-is, langsung to-be.

### 6.2 To-be (BABOK KA5)
- 6.2.1 Petakan **alur yang diinginkan** — lengkap dengan **gateway** (branch decision), **exception path** (error/timeout), **actor lane**.
- 6.2.2 **Auto-behavior?** → gambar eksplisit sebagai task ber-notif + log (mandate Tata, no silent). *Contoh Proyek-Contoh: auto-release reservasi kado setelah 1 jam = task otomatis dengan event notif ke guest.*

### 6.3 Gap analysis
- 6.3.1 Bandingin as-is vs to-be → list **gap** + severity + effort (pakai [gap-analysis-template](../tools/gap-analysis-template.md)).
- 6.3.2 **Actor coverage check** — primary / secondary / tertiary actor ke-cover semua? *Contoh: gap analysis v3 nangkep parents-of-couple & wedding planner under-served.*
- 6.3.3 Consult **@kakashi** untuk feasibility gap besar.

### 6.4 Validasi & handoff
- 6.4.1 **Present back** flow ke stakeholder, konfirmasi.
- 6.4.2 Handoff → SOP-LL-04 (flow jadi basis use case + AC) + @bulma (UX flow).
- 6.4.3 **Exit criteria:** as-is (kalau ada) + to-be tergambar; gateway & exception lengkap; auto-behavior eksplisit; gap ter-list + severity; flow di-validate.

## 7. Pengecualian
- **Proses regulated (accounting/payment):** wajib flag **F-1 compliance** + escalate ke Tata kalau nyentuh uang/saldo (no payment gateway = constraint Proyek-Contoh).

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| BPMN diagram (ASCII/link) | `prd/<feature>-bpmn.md` atau spec §7 | Permanen |
| Gap analysis | `log.md` / gap doc | Permanen |
| Validasi stakeholder | `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Exception coverage | # flow punya exception path ÷ total flow | ↑ (target ~100%) |
| Actor coverage | # actor ter-cover ÷ total actor relevan | 100% |
| Gap ke-identify pre-build | # gap ketemu sebelum build ÷ total gap (incl. post) | ↑ |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: Gap Analysis v3 (actor coverage primary/secondary/tertiary, 2026-05-27) |
