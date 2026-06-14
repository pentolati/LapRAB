# Shikamaru — Tools

Artifact yang Shikamaru **bikin & pakai**. Tiap tool: *template siap-pakai + contoh terisi + kapan dipake*.

| Tool | Buat apa | Kapan dipake | Framework |
|---|---|---|---|
| [erd-template.md](erd-template.md) | Entity-Relationship Diagram + access pattern | Tiap desain skema fitur baru | DAMA-DMBOK, Codd 3NF |
| [data-dictionary.md](data-dictionary.md) | Kamus data: kolom, tipe, semantik, klasifikasi | Tiap tabel baru / audit data | DAMA-DMBOK, UU PDP |
| [migration-checklist.md](migration-checklist.md) | QC pre-handoff schema + migration (reversible, DOWN teruji) | Tiap schema design / migration | COBIT APO14, BAI03 |
| [query-optimization-framework.md](query-optimization-framework.md) | Alur diagnosa query lambat (EXPLAIN → cost driver → fix) | Tiap query lambat / usul index | COBIT DSS06 |
| [data-classification-pdp.md](data-classification-pdp.md) | Klasifikasi data pribadi + aturan retensi | Tiap data pribadi baru / audit kepatuhan | UU PDP, ISO/IEC 27001 |

**Coverage cek:** tiap SOP Shikamaru (PLAYBOOK §3) ada tool pendukungnya — SOP-01→erd+data-dictionary, SOP-02→migration-checklist, SOP-03→query-optimization-framework, SOP-04→data-classification-pdp, SOP-05→query-optimization-framework. ✅ lengkap.

**Output disimpen di:** Schema Decision Record (Type-1) → `team/shikamaru/adr/NNN-<judul>.md` (permanen, audit record). Data dictionary & klasifikasi PDP = living doc.
