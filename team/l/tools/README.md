# L — Tools

Artifact yang L **bikin & pakai**. Tiap tool: *template siap-pakai + contoh terisi + kapan dipake*.

| Tool | Buat apa | Kapan dipake | Framework |
|---|---|---|---|
| [test-plan-template.md](test-plan-template.md) | Rencana test berbasis risiko | Tiap fitur masuk test scope | ISTQB, ISO/IEC 29119, Risk-Based |
| [test-case-matrix.md](test-case-matrix.md) | Matriks Excel-style test case 3-kategori | Tiap desain test case / cross-browser | ISTQB (BVA, EP) |
| [bug-report-template.md](bug-report-template.md) | Laporan bug + repro minimal + dual-layer | Tiap bug ditemukan | ISTQB defect mgmt, COBIT DSS02 |
| [severity-matrix.md](severity-matrix.md) | Klasifikasi keparahan S1–S4 + block-release | Tiap assign severity / triage | ISTQB severity |
| [regression-checklist.md](regression-checklist.md) | Daftar periksa pre-release gate | Tiap regresi / QA gate rilis | COBIT BAI07/MEA01, WCAG AA |

**Coverage cek:** tiap SOP L (PLAYBOOK §3) ada tool pendukungnya — SOP-01→test-plan, SOP-02→test-case-matrix, SOP-03→regression-checklist, SOP-04→bug-report+severity-matrix, SOP-05→regression-checklist+severity-matrix, SOP-06→test-case-matrix. ✅ lengkap.

**Output disimpen di:** test plan → `team/l/test-plan/<feature>.md` · bug → `team/l/bugs/<id>.md` · evidence (screenshot per browser, Lighthouse) → evidence folder. Permanen (audit record).
