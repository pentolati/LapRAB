# Senku — Tools

Artifact yang Senku **bikin & pakai**. Tiap tool: *template siap-pakai + contoh terisi (proyek contoh) + kapan dipake*.

| Tool | Buat apa | Kapan dipake | Framework |
|---|---|---|---|
| [research-methodology.md](research-methodology.md) | Workflow riset abusif ≥10 sumber + evidence hierarchy | Tiap riset / validasi hipotesis | Systematic Research, APO04 |
| [6q-critical-filter.md](6q-critical-filter.md) | Saringan 6 pertanyaan tiap finding/kandidat | Tiap rekomendasi adopsi / kesimpulan riset | Critical thinking (Tata mandate) |
| [competitor-analysis-framework.md](competitor-analysis-framework.md) | Feature matrix + pricing tear-down + gap analysis | Sebelum lock value-prop/pricing/USP | APO04 |
| [compliance-checklist-pdp.md](compliance-checklist-pdp.md) | Checklist UU PDP / GDPR / PCI-DSS | Tiap fitur sentuh data pribadi/payment | **MEA03**, UU PDP, GDPR, PCI-DSS |
| [poc-report-template.md](poc-report-template.md) | Template spike report (verbose) + sintesa Tata 1-page | Tiap selesai spike/POC/riset | APO04, evidence-first |

**Coverage cek:** tiap SOP (PLAYBOOK §3) ada tool pendukung — SOP-01→research-methodology+6q+poc-report, SOP-02→competitor-framework, SOP-03→compliance-checklist-pdp, SOP-04→6q-filter, SOP-05→poc-report. ✅ lengkap.

**Output disimpen di:** TADR (tech adoption) → `team/senku/adr/NNN-<judul>.md` (permanen, audit record) · spike report + sintesa + source list → `log.md`.
