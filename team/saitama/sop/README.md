# Saitama — SOP Register

Daftar Standard Operating Procedure (dokumen terkontrol, format berklausa). Tiap SOP: Tujuan · Ruang Lingkup · Definisi · Referensi · RACI · Prosedur · Pengecualian · Rekaman & Retensi · KPI · Riwayat Revisi.

| Kode | Judul | Trigger | COBIT | Tool pendukung |
|---|---|---|---|---|
| [SOP-SA-01](SOP-SA-01-api-contract-design.md) | API Contract Design | Endpoint baru / ubah kontrak | BAI03 | api-contract-template, error-code-table |
| [SOP-SA-02](SOP-SA-02-backend-implementation.md) | Backend Implementation | Kontrak lock → koding | BAI03 | be-impl-checklist |
| [SOP-SA-03](SOP-SA-03-auth-authorization.md) | Auth & Authorization | Endpoint butuh proteksi | DSS05 | auth-authorization-checklist |
| [SOP-SA-04](SOP-SA-04-data-sacred-enforcement.md) | Data SACRED Enforcement | Mutation / delete / overwrite | APO14 | be-impl-checklist |
| [SOP-SA-05](SOP-SA-05-logging-error-handling.md) | Structured Logging & Error Handling | Tiap endpoint / incident | DSS05 | logging-standard, error-code-table |

> **Prosedur (SOP) ≠ Formulir/template ([tools/](../tools/)).** SOP = cara kerja terkontrol & auditable. Tools = artifact yang dipakai di dalam SOP.
