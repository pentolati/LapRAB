# Levi — Tools

Artifact yang Levi **bikin & pakai**. Tiap tool: *template siap-pakai + contoh terisi (Proyek-Contoh) + kapan dipake*.

| Tool | Buat apa | Kapan dipake | Framework |
|---|---|---|---|
| [deploy-runbook.md](deploy-runbook.md) | Skenario deploy step-by-step + sign-off | Tiap go-live / release | ITIL Release, COBIT BAI07 |
| [rollback-procedure.md](rollback-procedure.md) | Langkah balik ke versi stabil (tested) | Disiapin pra-deploy, dipake saat gagal | Google SRE, COBIT BAI07 |
| [incident-response-playbook.md](incident-response-playbook.md) | Severity matrix + alur contain + postmortem blameless | Incident SEV1/SEV2 | ITIL Incident, Google SRE |
| [change-request-form.md](change-request-form.md) | Catatan + approval perubahan production | Tiap perubahan infra/config/release | ITIL Change, COBIT BAI06 |
| [preflight-checklist.md](preflight-checklist.md) | QC wajib sebelum deploy | Tiap deploy, sebelum eksekusi | 12-Factor, DORA |
| [monitoring-config.md](monitoring-config.md) | SLI/SLO + alert + dashboard config | Setup observability service | Google SRE, COBIT DSS01 |

**Coverage cek:** tiap SOP Levi (PLAYBOOK §3) ada tool pendukungnya — SOP-01→runbook+preflight, SOP-02→rollback-procedure, SOP-03→incident-playbook, SOP-04→change-request-form, SOP-05→monitoring-config, SOP-06→pakai runbook/log. ✅ lengkap.

**Output disimpen di:** deploy runbook + postmortem + change record → `team/levi/log.md` (permanen, audit record); ADR infra Type-1 → `team/levi/adr/NNN-<judul>.md`.

> **Catatan Proyek-Contoh:** prototype masih Fauxbase (driver local memory) — Levi belum aktif penuh. Yang udah nyata: **dev server Vite port 5252 (strictPort)**, landing page live. Contoh di tiap tool pakai konteks Proyek-Contoh yang plausible pas go-live ke real hosting.
