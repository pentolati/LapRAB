# Bulma — Tools

Artifact yang Bulma **bikin & pakai**. Tiap tool: *template siap-pakai + contoh terisi (proyek contoh) + kapan dipake*.

| Tool | Buat apa | Kapan dipake | Framework |
|---|---|---|---|
| [design-system.md](design-system.md) | Sistem token + komponen (single source of truth) | Maintain konsistensi, lock pola >3 area | Atomic Design, COBIT APO03 |
| [palette-tokens.md](palette-tokens.md) | Definisi palette LOCK + token warna (0 coklat) | Setiap desain & palette/brand governance | WCAG AA, palette LOCK Tata |
| [mockup-spec-template.md](mockup-spec-template.md) | Spec mockup buat handoff ke FE | Tiap mockup page/feature | COBIT BAI03, Atomic Design |
| [heuristic-eval-checklist.md](heuristic-eval-checklist.md) | Audit usability Nielsen 10 + lethal check | Tiap flow sebelum handoff | Nielsen 10, ISO 9241 |
| [accessibility-checklist.md](accessibility-checklist.md) | Cek WCAG 2.x AA (kontras, focus, motion) | Tiap desain sebelum handoff | WCAG 2.x (POUR) |

**Coverage cek:** tiap SOP Bulma (PLAYBOOK §3) ada tool pendukungnya — SOP-01→mockup-spec+palette, SOP-02→design-system+palette, SOP-03→heuristic+accessibility, SOP-04→mockup-spec, SOP-05→palette+design-system. ✅ lengkap.

**Output disimpen di:** brand/ADR lock → `team/bulma/adr/NNN-<judul>.md` (permanen, audit record); mockup spec → handoff doc; reference + QC → `log.md`.
