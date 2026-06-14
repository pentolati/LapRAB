# SOP-LV-03 — Incident Response

| | |
|---|---|
| **Kode** | SOP-LV-03 |
| **Pemilik** | Levi (Implementor / DevOps / SRE) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ITIL 4 Incident Management, Google SRE, [tools/incident-response-playbook.md](../tools/incident-response-playbook.md) |
| **COBIT** | DSS01 (Operations); RCA closure koord DSS03 dengan Kakashi (SOP-KK-05) |

## 1. Tujuan
**Hentikan dampak ke user secepat mungkin (contain), pulihkan, lalu ubah satu incident jadi satu perbaikan permanen** lewat postmortem blameless. Bukan nyari siapa-salah — cari kenapa sistem ngebolehin ini.

## 2. Ruang Lingkup
- **Berlaku:** incident production severity **SEV1/SEV2** (outage, degradasi besar, data-risk).
- **Tidak berlaku:** SEV3/SEV4 minor (cukup ticket, postmortem opsional). RCA mendalam lintas-disiplin = SOP-KK-05 (Kakashi accountable closure).

## 3. Definisi & Istilah
- **SEV1/SEV2** — severity tertinggi: total outage/data-loss (SEV1), degradasi besar no-workaround (SEV2). Matriks di PLAYBOOK §5.3.
- **Containment** — tindakan darurat hentikan dampak (rollback / feature-flag off / scale / maintenance page) **sebelum** cari akar.
- **MTTR / MTTD** — mean-time-to-recover / -to-detect.
- **Blameless postmortem** — laporan pasca-incident fokus sistem, bukan nyalahin orang.

## 4. Referensi
ITIL Incident Management, Google SRE (containment-first, blameless culture), mandate anti-hide (postmortem terbuka) + anti-defensif (akui), kontrol LV-C6/LV-C7.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Detect & acknowledge | Levi | Levi | — | Kakashi |
| Containment | Levi | Levi | Kakashi, area owner | Tata (kalau visible) |
| RCA & corrective action | area owner / Levi | **Kakashi** (closure) | @l, Levi | Tata |
| Postmortem (blameless) | Levi | Levi | tim terdampak | Tata, @nami |

## 6. Prosedur

### 6.1 Respon (stop the bleeding)
- 6.1.1 **Acknowledge** — catat di channel + waktu mulai. Jangan diem.
- 6.1.2 **Triage severity** (PLAYBOOK §5.3) — SEV1 segera all-hands; SEV2 ≤ 15 menit.
- 6.1.3 **Containment dulu** — rollback ([SOP-LV-02](SOP-LV-02-rollback.md)) / feature-flag off / scale / maintenance page. **Stabilkan sebelum analisis.**
- 6.1.4 **Lapor Tata** (kalau visible) pakai **template incident Tata-translation**: bahasa manusia, status 🟢/🟡/🔴, apa yang udah dilakuin, apa yang Tata perlu lakuin (biasanya "gak ada, gw handle").

### 6.2 Analisis (setelah stabil)
- 6.2.1 Kumpulkan **fakta + bukti**: log, metric, trace, kronologi (timestamp).
- 6.2.2 Cari **akar sistemik** (5 Whys), bukan "si A salah". Koord @kakashi (RCA accountable).

### 6.3 Perbaikan & postmortem
- 6.3.1 **Fix proper** (root, bukan band-aid) + owner + due.
- 6.3.2 **Verify** — smoke test, error rate normal.
- 6.3.3 Tulis **postmortem blameless** ([incident-response-playbook](../tools/incident-response-playbook.md)) **≤ 48 jam** — summary, impact, timeline, root cause, what-went-well/didn't, action items.
- 6.3.4 **Systemic fix** — update runbook/checklist/alert biar pola sama gak lolos lagi.
- 6.3.5 Save learning ke `nami/lessons.md`.
- 6.3.6 **Exit criteria:** dampak berhenti + akar teridentifikasi + corrective action ada owner+due + postmortem terbit ≤ 48 jam + checklist/alert ter-update.

## 7. Pengecualian
- **Incident lintas-disiplin:** containment dipimpin Levi; RCA closure tetap @kakashi (SOP-KK-05). Levi Accountable untuk postmortem-nya sendiri.
- **Bocor jelek ke Tata/production:** Levi **akui duluan** ("gate gw bolong di X"), gak throw tim.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Postmortem (PM-NNN) | `log.md` | Permanen |
| Timeline + bukti incident | `log.md` | Permanen |
| Update runbook/alert | dokumen terkait | Permanen |
| Learning | `nami/lessons.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| MTTR | rata-rata jam incident mulai → pulih | ↓ tiap periode |
| MTTD | menit incident mulai → alert nyala | minimal (alert duluan dari komplain) |
| Recurrence rate | # incident berulang akar sama | **0** |
| Postmortem timeliness | # postmortem ≤ 48 jam ÷ total SEV1/SEV2 | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
