# Kakashi — Tools

Artifact yang Kakashi **bikin & pakai**. Tiap tool: *template siap-pakai + contoh terisi + kapan dipake*.

| Tool | Buat apa | Kapan dipake | Framework |
|---|---|---|---|
| [adr-template.md](adr-template.md) | Architecture Decision Record | Tiap keputusan Type-1 (irreversible) atau pola yang di-lock | COBIT APO03, TOGAF |
| [code-review-rubric.md](code-review-rubric.md) | Rubrik + label reviu kode | Tiap code review / PR | IEEE 1028, ISO 25010 |
| [pre-tata-gate-checklist.md](pre-tata-gate-checklist.md) | QC lintas-disiplin sebelum ke Tata | Tiap artifact mau handoff ke Tata | COBIT BAI07/MEA02, ITIL |
| [reversibility-matrix.md](reversibility-matrix.md) | Klasifikasi keputusan + threshold lock/abstract/build-buy | Sebelum ambil keputusan teknis | COBIT APO12 |
| [tech-radar.md](tech-radar.md) | Status stack: adopt/trial/assess/hold | Reviu kuartalan / ada usulan tech baru | COBIT APO03/APO04 |
| [rca-template.md](rca-template.md) | Root-cause analysis (5 Whys) | Incident: bug critical / output bocor | ITIL Problem, COBIT DSS03 |

**Coverage cek:** tiap SOP Kakashi (PLAYBOOK §2) ada tool pendukungnya — SOP-01→rubric, SOP-02→adr+reversibility+radar, SOP-03→gate-checklist, SOP-05→rca. ✅ lengkap.

**Output disimpen di:** ADR → `team/kakashi/adr/NNN-<judul>.md` (permanen, audit record).
