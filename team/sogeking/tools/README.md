# Sogeking — Tools (Template & Alat)

Artifact yang Sogeking **bikin & pakai** DI DALAM SOP. Tiap tool: *template siap-pakai + contoh terisi + kapan dipake*. Bukan teori — artifact yang langsung diisi.

| Tool | Buat apa | SOP pendukung | Framework |
|---|---|---|---|
| [target-arch-template.md](target-arch-template.md) | Dokumen Target/Solution Architecture (konteks, stakeholder, view, NFR) | SOP-SG-01 | TOGAF A/B/C, ISO 42010 |
| [c4-diagram-guide.md](c4-diagram-guide.md) | Gambar arsitektur C4 dalam ASCII/markdown (no tool eksternal) | SOP-SG-01 | C4 model, ISO 42010 |
| [nfr-spec-template.md](nfr-spec-template.md) | Spec NFR ber-target ukur (ISO 25010 × Well-Architected) | SOP-SG-02 | ISO 25010, Well-Architected, OWASP, UU PDP |
| [well-architected-checklist.md](well-architected-checklist.md) | Checklist 5 pilar (NOW vs LATER untuk prototype) | SOP-SG-02, SOP-SG-05 | AWS/Azure Well-Architected |
| [trade-off-matrix.md](trade-off-matrix.md) | Skoring banding opsi tech/integrasi (anti vendor-hype) | SOP-SG-03 | Well-Architected, reversibility |
| [build-buy-partner.md](build-buy-partner.md) | Decision aid Build/Buy/Partner + decision tree | SOP-SG-03 | Bezos door, Well-Architected |
| [adr-template.md](adr-template.md) | Architecture Decision Record (co-own @kakashi) | SOP-SG-04 | COBIT APO03, TOGAF G/H |
| [reversibility-matrix.md](reversibility-matrix.md) | Klasifikasi Type-1/2 + threshold escalate/abstract | SOP-SG-04 | Bezos door, COBIT APO12 |
| [arch-review-checklist.md](arch-review-checklist.md) | Gate review arsitektur hulu sebelum lock | SOP-SG-05 | COBIT APO03, Well-Architected |
| [reference-arch.md](reference-arch.md) | Pola arsitektur teruji + guardrail buat tim reuse | SOP-SG-05 | TOGAF, reference architecture |
| [risk-register.md](risk-register.md) | Daftar risiko arsitektur + mitigasi sebelum handoff | SOP-SG-06 | COBIT APO12 |
| [dependency-map.md](dependency-map.md) | Peta dependency & single-point-of-failure | SOP-SG-06 | TOGAF F |

**Coverage cek:** tiap SOP Sogeking (PLAYBOOK §3) ada tool pendukungnya — SOP-SG-01→target-arch+c4, SOP-SG-02→nfr-spec+well-architected, SOP-SG-03→trade-off+build-buy, SOP-SG-04→adr+reversibility, SOP-SG-05→arch-review+reference-arch, SOP-SG-06→risk-register+dependency-map. ✅ lengkap.

**Output disimpen di:** target arch + diagram → `team/sogeking/arch/<scope>.md` (versioned) · NFR → `arch/nfr-<feature>.md` · ADR → `team/sogeking/adr/NNN-*.md` (co-arsip @kakashi, permanen) · trade-off/risk → log / `arch/` · review verdict → `log.md`.

> Tools = **artifact yang dipakai DI DALAM [sop/](../sop/)** — SOP kasih prosedur berklausa, tool kasih bentuk konkret yang diisi. Bukan dokumen terpisah; dua-duanya satu alur.
