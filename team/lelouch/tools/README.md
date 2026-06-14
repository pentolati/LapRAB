# Lelouch — Tools

Artifact yang Lelouch **bikin & pakai**. Tiap tool: *template siap-pakai + contoh terisi (proyek contoh) + kapan dipake*.

| Tool | Buat apa | Kapan dipake | Framework |
|---|---|---|---|
| [prd-template.md](prd-template.md) | PRD-lite (problem-first + metric) | Tiap fitur baru di-eksplor | BABOK KA4/KA5/KA6, Lean |
| [user-story-template.md](user-story-template.md) | User story + INVEST check | Tiap backlog item / spec | Agile, INVEST |
| [gherkin-spec-template.md](gherkin-spec-template.md) | Functional spec + AC Gherkin | Tiap PRD lock → butuh spec buildable | Gherkin, BABOK KA5 |
| [moscow-prioritization.md](moscow-prioritization.md) | Prioritas MoSCoW + RICE sheet | Backlog >1 kandidat / cut MVP | MoSCoW, RICE, APO02 |
| [bpmn-guide.md](bpmn-guide.md) | Notasi BPMN + as-is/to-be flow | Fitur ngubah alur proses | BPMN 2.0, BABOK KA4/KA5 |
| [gap-analysis-template.md](gap-analysis-template.md) | As-is vs to-be + delta + mini-Tata filter | Review existing / gap fitur | BABOK KA4, gap analysis |

**Coverage cek:** tiap SOP Lelouch (PLAYBOOK §3) ada tool pendukungnya — SOP-01→probe (AskUserQuestion, native), SOP-02→prd-template, SOP-03→moscow-prioritization, SOP-04→gherkin-spec+user-story, SOP-05→bpmn-guide+gap-analysis, SOP-06→user-story. ✅ lengkap.

**Output disimpen di:** PRD/spec → `team/lelouch/prd/<feature>.md` (versioned, audit record). BPMN/gap → link dari `log.md`.
