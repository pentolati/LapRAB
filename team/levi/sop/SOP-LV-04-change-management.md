# SOP-LV-04 — Change Management

| | |
|---|---|
| **Kode** | SOP-LV-04 |
| **Pemilik** | Levi (Implementor / DevOps / SRE) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ITIL 4 Change Enablement, [tools/change-request-form.md](../tools/change-request-form.md) |
| **COBIT** | BAI06 (Managed IT Changes) |

## 1. Tujuan
Memastikan **tiap perubahan ke production (infra, config, release) tercatat, ter-assess risiko, dan ter-approve** sebelum eksekusi — **nihil unauthorized change** (kontrol LV-C3). Anti config drift, anti "manual ssh diam-diam".

## 2. Ruang Lingkup
- **Berlaku:** semua perubahan production: deploy release, ubah config/env, ubah infra (IaC), rotate secret, scale, ubah alert.
- **Tidak berlaku:** kerja di lokal/staging, eksperimen branch. **Standard change** (rutin, low-risk, sudah pre-approved seperti deploy release biasa lewat SOP-LV-01) cukup change record ringan, gak butuh approval terpisah.

## 3. Definisi & Istilah
- **Change record** — catatan perubahan: apa, kenapa, risk, rollback, window, approver.
- **Change type:** **Standard** (rutin/pre-approved) · **Normal** (perlu assess+approve) · **Emergency** (darurat, approve retroaktif).
- **CAB (Change Advisory Board)** — gerbang approval; di tim ini = @kakashi (teknis) + @l (QA gate) + Tata (go-live visible).
- **Config drift** — server menyimpang dari baseline akibat perubahan tak-tercatat.

## 4. Referensi
ITIL Change Enablement (Standard/Normal/Emergency), mandate Tata (no silent auto, evidence-first), kontrol LV-C3/LV-C5/LV-C6.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Bikin change record | Levi | Levi | — | @nami |
| Risk assessment | Levi | Levi | Kakashi | — |
| Approve Normal change | — | **Kakashi** | @l | Tata |
| Approve go-live (visible) | Levi | **Tata** | Kakashi, @l | tim |
| Eksekusi change | Levi | Levi | area owner | @nami |

## 6. Prosedur

### 6.1 Pengajuan
- 6.1.1 Klasifikasi **change type**: Standard / Normal / Emergency.
- 6.1.2 Isi **change request form** ([change-request-form](../tools/change-request-form.md)): deskripsi, alasan, **risk level**, **rollback plan**, window, dampak user.
- 6.1.3 **Exit kalau Standard & low-risk** → catat ringan, lanjut via SOP-LV-01 (gak butuh approval terpisah).

### 6.2 Assessment & approval
- 6.2.1 **Risk assessment**: dampak kalau gagal? reversible? user kena? data kena (Data SACRED)?
- 6.2.2 **Decision point:** Normal change → **approve @kakashi** (teknis) + **@l** (kalau nyentuh fungsi). Visible/user-facing → **escalate sign-off Tata 🟡** (bahasa manusia). Irreversible/berbiaya → **🔴 ADR + escalate Tata**.
- 6.2.3 Cek **window** (kontrol LV-C5): bukan Jumat sore kecuali critical.

### 6.3 Eksekusi & closure
- 6.3.1 Jalankan via pipeline/IaC (kontrol LV-C6: kalau ada automation, **logging eksplisit** — no silent).
- 6.3.2 Verifikasi (health check, smoke test). Gagal → rollback ([SOP-LV-02](SOP-LV-02-rollback.md)).
- 6.3.3 **Close change record**: hasil, waktu, evidence.
- 6.3.4 **Exit criteria:** change ter-record + ter-approve sesuai type + ter-eksekusi + ter-verify + ter-close.

## 7. Pengecualian
- **Emergency change** (production down): boleh eksekusi dulu untuk contain, **change record + approval retroaktif < 24 jam** wajib. Masuk postmortem kalau SEV1/SEV2.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Change request form | arsip / `log.md` | Permanen |
| Approval (siapa, kapan) | change record | Permanen |
| Hasil eksekusi + evidence | `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Unauthorized change | # perubahan prod tanpa record ÷ total | **0** |
| Change failure rate | # change bikin incident ÷ total change | < 15% |
| Emergency change ratio | # emergency ÷ total change | minimal (tinggi = planning lemah) |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
