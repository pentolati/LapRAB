# SOP-LV-01 — Deployment / Release

| | |
|---|---|
| **Kode** | SOP-LV-01 |
| **Pemilik** | Levi (Implementor / DevOps / SRE) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ITIL 4 Release Management, 12-Factor App, DORA, [tools/deploy-runbook.md](../tools/deploy-runbook.md), [tools/preflight-checklist.md](../tools/preflight-checklist.md) |
| **COBIT** | BAI07 (Managed Change Acceptance & Transitioning) |

## 1. Tujuan
Membawa release dari dev/staging ke production **secara aman, terverifikasi, dan reversible** — tanpa downtime tak-terencana, tanpa output cacat bocor ke user.

## 2. Ruang Lingkup
- **Berlaku:** semua deploy ke production (kode FE/BE, config, feature flag yang user lihat) setelah lolos QA.
- **Tidak berlaku:** deploy ke staging/preview internal (boleh lebih longgar), eksperimen di branch yang gak di-promote. **Proyek-Contoh prototype Fauxbase:** Levi belum aktif — masuk pas project siap go-live ke real backend/cloud.

## 3. Definisi & Istilah
- **Pre-flight** — checklist wajib sebelum deploy (kode, test gate, config, observability, rollback, comms).
- **Deploy strategy** — cara lepas versi baru: blue-green / canary / rolling / feature flag / big bang (pilih per risk, lihat PLAYBOOK §5.1).
- **Post-deploy verification** — bukti aman pasca-deploy: health check 200, smoke test jalur kritis, dashboard tanpa spike error.
- **Go-live (🟡)** — release yang user akhir lihat → wajib sign-off Tata.

## 4. Referensi
ITIL Release Management, 12-Factor App (config di env, stateless, log as stream), mandate Tata (evidence-first, no silent auto, no tambal-sulam), kontrol LV-C1/LV-C2/LV-C4/LV-C5.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Jalankan pre-flight & deploy | Levi | Kakashi (teknis) | @l, @shikamaru (kalau ada migration) | @nami |
| Gate QA sebelum deploy | @l | @l | Levi | Kakashi |
| Post-deploy verification | Levi | Levi | — | Kakashi |
| **Sign-off go-live (visible)** | Levi | **Tata** | Kakashi, @l | tim |

## 6. Prosedur

### 6.1 Pra-deploy (gate masuk)
- 6.1.1 Isi **pre-flight checklist** ([preflight-checklist](../tools/preflight-checklist.md)) — semua tick wajib. Ada yang kosong → **stop**, balikin ke owner.
- 6.1.2 Konfirmasi **gate QA**: @l udah sign-off (test pass, S1/S2 clear).
- 6.1.3 Konfirmasi **tech approve**: @kakashi approve deploy (teknis).
- 6.1.4 Kalau ada **migration DB** → koordinasi @shikamaru: migration udah ditest di staging + rollback DDL siap.

### 6.2 Persiapan
- 6.2.1 Tentukan **deploy strategy** sesuai risk (PLAYBOOK §5.1) — default rolling/canary; perubahan besar → blue-green.
- 6.2.2 Pastikan **rollback path udah ditest < 5 menit** (kontrol LV-C1) — referensi [SOP-LV-02](SOP-LV-02-rollback.md). Belum ditest → **gak deploy**.
- 6.2.3 Cek **deploy window**: **bukan Jumat sore** kecuali critical-with-reason (kontrol LV-C5). @nami broadcast stakeholder.
- 6.2.4 Pastikan **monitoring + alert aktif** (kontrol LV-C4, [SOP-LV-05](SOP-LV-05-monitoring-alerting.md)).

### 6.3 Eksekusi
- 6.3.1 Deploy lewat **pipeline** (CI/CD), **bukan manual ssh-and-pray**.
- 6.3.2 Deploy ke **staging dulu** → smoke test pass → baru promote ke production (staging-first always).
- 6.3.3 Kalau canary: lepas ke 10% → pantau → 50% → 100%, abort kalau error spike.

### 6.4 Verifikasi & exit
- 6.4.1 **Post-deploy verification:** `/health` return 200, smoke test jalur kritis, dashboard 0 error spike (window awal).
- 6.4.2 **Decision point:** verifikasi pass?
  - **PASS** → monitor X jam (per risk), tulis runbook + tag release, lapor Tata pakai **template Tata-translation** (bahasa manusia + analogi).
  - **FAIL** → **rollback** ([SOP-LV-02](SOP-LV-02-rollback.md)), jangan biarin user kena.
- 6.4.3 **Buat engineering note high-level** (kontrol LV-C8) — kalau unit kerja non-trivial (mis. setup pipeline baru, ganti strategy deploy, infra change), tulis eng-note ikut [`../../kakashi/tools/eng-note-template.md`](../../kakashi/tools/eng-note-template.md), simpan di `levi/notes/YYYY-MM-DD-<topik>.md` (konteks + keputusan + risk). Deploy rutin yang sepele cukup runbook + `log.md`. **Exit criteria: eng-note ter-arsip + ditautkan di `log.md`.**
- 6.4.4 **Exit criteria:** verifikasi pass + sign-off go-live Tata tercatat + runbook ter-arsip + eng-note ter-arsip (kalau non-trivial) + Tata dikabarin (bahasa manusia).

## 7. Pengecualian
- **Hotfix critical (production down):** boleh skip window Jumat-sore, **tetap wajib rollback tested + post-deploy verification + change record retroaktif < 24 jam**.
- **Deploy internal/staging:** gak butuh sign-off Tata (bukan visible).

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Deploy runbook + sign-off | `log.md` | Permanen |
| Engineering note high-level (unit kerja non-trivial) | `notes/YYYY-MM-DD-<topik>.md` | Permanen |
| Pre-flight checklist terisi | `log.md` / runbook | Permanen |
| Laporan ke Tata (bahasa manusia) | `log.md` + ACTIVITY | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Change failure rate | # deploy bikin incident ÷ total deploy | < 15% |
| Deploy lead time | rata-rata jam merge → live | ↓ tiap periode |
| Escaped defect ke production | # output cacat lolos ke user ÷ total deploy | ≈ 0 |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
