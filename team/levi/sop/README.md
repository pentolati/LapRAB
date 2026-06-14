# Levi — SOP Register

Daftar Standard Operating Procedure (dokumen terkontrol, format berklausa). Tiap SOP: Tujuan · Ruang Lingkup · Definisi · Referensi · RACI · Prosedur · Pengecualian · Rekaman & Retensi · KPI · Riwayat Revisi.

| Kode | Judul | Trigger | COBIT | Tool pendukung |
|---|---|---|---|---|
| [SOP-LV-01](SOP-LV-01-deployment-release.md) | Deployment / Release | Release siap go-live | BAI07 | deploy-runbook, preflight-checklist |
| [SOP-LV-02](SOP-LV-02-rollback.md) | Rollback | Deploy bermasalah / verifikasi gagal | BAI07/DSS01 | rollback-procedure |
| [SOP-LV-03](SOP-LV-03-incident-response.md) | Incident Response | SEV1/SEV2 di production | DSS01 (+ITIL Incident) | incident-response-playbook |
| [SOP-LV-04](SOP-LV-04-change-management.md) | Change Management | Perubahan infra/config/release | BAI06 | change-request-form |
| [SOP-LV-05](SOP-LV-05-monitoring-alerting.md) | Monitoring & Alerting Setup | Service baru / sebelum go-live | DSS01 | monitoring-config |
| [SOP-LV-06](SOP-LV-06-backup-dr.md) | Backup & Disaster Recovery (BCP/DRP) | Setup data store / drill berkala | DSS04 | — |

> **Prosedur (SOP) ≠ Formulir/template ([tools/](../tools/)).** SOP = cara kerja terkontrol & auditable. Tools = artifact yang dipakai di dalam SOP.
