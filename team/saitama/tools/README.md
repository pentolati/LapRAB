# Saitama — Tools

Artifact yang Saitama **bikin & pakai**. Tiap tool: *template siap-pakai + contoh terisi (proyek contoh) + kapan dipake*.

| Tool | Buat apa | Kapan dipake | Framework |
|---|---|---|---|
| [api-contract-template.md](api-contract-template.md) | Kontrak API OpenAPI-style (request/response/error/auth/idempotency) | Tiap endpoint baru / ubah kontrak (SOP-SA-01) | REST, OpenAPI, BAI03 |
| [error-code-table.md](error-code-table.md) | Tabel kode error stabil = kontrak debugging FE/BE | Sekali per service, di-extend tiap error baru (SOP-SA-01/05) | REST, OWASP |
| [be-impl-checklist.md](be-impl-checklist.md) | Self-QC sebelum handoff BE | Tiap selesai impl, sebelum review Kakashi (SOP-SA-02/04) | ISO 25010, Tata mandate |
| [auth-authorization-checklist.md](auth-authorization-checklist.md) | Cek authn + authz endpoint sensitif | Tiap endpoint butuh proteksi (SOP-SA-03) | OWASP ASVS/Top 10, ISO 27001 |
| [logging-standard.md](logging-standard.md) | Standar structured log + format field | Setup service + tiap endpoint (SOP-SA-05) | 12-Factor, ISO 27001 |

**Coverage cek:** tiap SOP Saitama (PLAYBOOK §3) ada tool pendukungnya — SOP-01→api-contract+error-code, SOP-02→be-impl-checklist, SOP-03→auth-checklist, SOP-04→be-impl-checklist (Data SACRED items), SOP-05→logging-standard+error-code. ✅ lengkap.

**Output disimpen di:** kontrak API → `tools/` / doc project (living, versi di-track) · ADR Type-1 (kontrak/skema/security lock) → `team/saitama/adr/NNN-<judul>.md` (permanen, audit record).
