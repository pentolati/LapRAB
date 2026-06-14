# Killua — Tools

Artifact yang Killua **bikin & pakai**. Tiap tool: *template siap-pakai + contoh terisi (proyek contoh) + kapan dipake*.

| Tool | Buat apa | Kapan dipake | Framework |
|---|---|---|---|
| [fe-impl-checklist.md](fe-impl-checklist.md) | Self-QC FE lengkap sebelum handoff | Tiap selesai impl, sebelum ke Kakashi | SWEBOK, ISO 25010 |
| [component-audit-checklist.md](component-audit-checklist.md) | Audit reuse component sebelum bikin baru | Sebelum nulis component baru | Reuse>Rebuild, Rule of 3 |
| [accessibility-checklist.md](accessibility-checklist.md) | Cek WCAG 2.2 AA (keyboard/kontras/semantic) | Tiap handoff UI visible | WCAG 2.2, ARIA |
| [responsive-matrix.md](responsive-matrix.md) | Matriks tes per breakpoint × kondisi | QC responsive sebelum handoff | Core Web Vitals (CLS) |
| [mockup-handoff-template.md](mockup-handoff-template.md) | Feasibility audit + handoff dari Bulma | Tiap terima mockup dari Bulma | BAI03, kolaborasi |

**Coverage cek:** tiap SOP Killua (PLAYBOOK §3) ada tool pendukungnya — SOP-01→fe-impl-checklist, SOP-02→component-audit, SOP-03→accessibility+responsive, SOP-04→mockup-handoff, SOP-05→decision-tree inline di SOP. ✅ lengkap.

**Output disimpen di:** self-test + reuse audit + screenshot path → `team/killua/log.md` (audit record, permanen). ADR FE (kalau Type-1, mis. ganti lib) → `team/killua/adr/NNN-<judul>.md`.
