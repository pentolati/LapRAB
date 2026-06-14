# Kakashi — SOP Register

Daftar Standard Operating Procedure (dokumen terkontrol, format berklausa). Tiap SOP: Tujuan · Ruang Lingkup · Definisi · Referensi · RACI · Prosedur · Pengecualian · Rekaman & Retensi · KPI · Riwayat Revisi.

| Kode | Judul | Trigger | COBIT | Tool pendukung |
|---|---|---|---|---|
| [SOP-KK-01](SOP-KK-01-code-review.md) | Code Review | PR/diff masuk | BAI03 | code-review-rubric |
| [SOP-KK-02](SOP-KK-02-architecture-decision.md) | Architecture Decision | Keputusan ≥2 opsi / lock | APO03 | adr-template, reversibility-matrix |
| [SOP-KK-03](SOP-KK-03-pre-tata-gate.md) | Pre-Tata Gate | Handoff artifact buat Tata | BAI07/MEA02 | pre-tata-gate-checklist |
| [SOP-KK-04](SOP-KK-04-pair-unblock.md) | Pair / Unblock | Persona stuck > 2 jam | APO07 | — |
| [SOP-KK-05](SOP-KK-05-incident-rca.md) | Incident RCA | Bug S1/S2 / output bocor | DSS03 | rca-template |
| [SOP-KK-06](SOP-KK-06-lock-pattern.md) | Lock Pattern / Standardisasi | Pola dipakai > 3 area | APO01/EDM01 | tech-radar, adr-template |

> **Prosedur (SOP) ≠ Formulir/template ([tools/](../tools/)).** SOP = cara kerja terkontrol & auditable. Tools = artifact yang dipakai di dalam SOP.
