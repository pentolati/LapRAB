# Nami — Tools

Artifact yang Nami **bikin & pakai**. Tiap tool: *template siap-pakai + contoh terisi + kapan dipake*.

| Tool | Buat apa | Kapan dipake | Framework |
|---|---|---|---|
| [mom-template.md](mom-template.md) | Minutes of Meeting (notulen rapat) | Tiap meeting/standup/sync (SOP-NM-01) | PMBOK Communication |
| [status-report-template.md](status-report-template.md) | Status report jujur + scannable | Sprint end / Tata minta (SOP-NM-02) | PMBOK Monitoring, MEA01 |
| [raid-log.md](raid-log.md) | Risk/Assumption/Issue/Dependency log | Risk/issue/blocker ke-spot (SOP-NM-03/05) | RAID, PMBOK Risk |
| [risk-register.md](risk-register.md) | Risk ter-skor (probabilitas × dampak) + mitigasi | Analisis risk (SOP-NM-03) | PMBOK Risk |
| [lessons-framework.md](lessons-framework.md) | Pattern → root cause → recommendation | Pattern kelemahan / sprint close (SOP-NM-06) | PMBOK Closing, PRINCE2 |
| [action-item-tracker.md](action-item-tracker.md) | Track action item (action+owner+due+status) | Tiap MoM / sprint / follow-up (SOP-NM-01/04/05) | RACI, Agile |

**Coverage cek:** tiap SOP Nami (PLAYBOOK §3) ada tool pendukungnya — SOP-01→mom+tracker, SOP-02→status, SOP-03→raid+register, SOP-04→tracker+status, SOP-05→raid+tracker, SOP-06→lessons. ✅ lengkap.

**Output disimpen di:** MoM → `team/mom/YYYY-MM-DD-<topic>.md` (permanen, audit record) · lessons → `nami/lessons.md` (permanen) · gap/conflict → `nami/gaps.md` · status → `nami/status/` atau log.
