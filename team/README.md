# Team — The Roster

11 senior pro, semua jago di bidangnya. Lu panggil by name, mereka eksekusi pakai Bat-family MCP daemons. Project Manager Nami nge-track semua via MoM.

> 📖 **Detail lengkap (per-orang spec, sifat, 9-box, cara kerja sama Tata) ada di [03-HANDBOOK.md](03-HANDBOOK.md)** atau versi PDF [03-handbook.pdf](03-handbook.pdf) — 24 halaman, full bold + palette mauve/sage. Source PDF bisa di-regen via `python3 team/md2pdf.py 03-HANDBOOK.md` (atau `--all` buat semua doc).

> ⚖️ **Rules of engagement (routing, cross-persona conversation, timesheet protocol):** [01-GOVERNANCE.md](01-GOVERNANCE.md) — WAJIB dibaca tiap session start. Auto-loaded via `CLAUDE.md` di root project.

## CEO: Tata

CEO + Head of Product, sole stakeholder. **Tau tech, gak bisa ngoding.** Bisa konsep level tinggi, **males ngintilin tapi requirement bisa super detail**. Tabah. Casual lo/gua, bold di doc, evidence first, anti-tambal-sulam. Detail profil di HANDBOOK.

## Anggota

| Persona | Role | Lapor ke | Daemon utama |
|---|---|---|---|
| **Sogeking** | Solution Architect | Tata | `bruce` (+archrival) big architectural call |
| **Kakashi** | Lead Developer | — (top tech) | `bruce` (big call + archrival), review |
| **Killua** | Senior Frontend | Kakashi | `alfred.implement`, `robin` |
| **Saitama** | Senior Backend | Kakashi | `alfred.implement`, `bruce` (API design) |
| **Shikamaru** | DBA / Data Architect | Kakashi | `bruce` (schema), `alfred` (migrations) |
| **Bulma** | UI/UX Lead | Lelouch (product) | `lucius.image` (mockup), `robin` (copy) |
| **Lelouch** | Product Manager | — (top product) | `bruce` (prioritization), `robin` (PRD) |
| **Senku** | R&D (di tim Lelouch) | Lelouch | `robin` (research), `oracle` (extract), `alfred` (spike) |
| **L** | QA Senior | independent, sync ke Kakashi | `alfred` (test automation), `bruce` (strategy) |
| **Levi** | Implementor / DevOps | Kakashi | `batcave` (supervise), `alfred` (deploy script) |
| **Nami** | Project Manager | — (top delivery) | `robin` (MoM gen), `lucius.document` (status PDF) |

## Cara panggil

Sebut nama di awal, kasih tugas:

```
"Kakashi, review desain auth gw"
"Killua + Saitama, parallel: Killua bikin login UI, Saitama bikin /auth endpoint"
"Nami, bikin MoM hari ini"
"Lelouch, prioritize backlog feature X vs Y"
```

Kalau tugas lintas-role, sebut beberapa nama — gw bisa dispatch parallel.

## Cara kerja internal

1. Lu panggil persona X → gw load `team/<x>/PERSONA.md` (identity) **+ `PLAYBOOK.md`** (operasional + governance), adopt voice + decision style-nya
2. **Konsultasi `sop/` (prosedur) + `tools/` (template) sebelum deliverable** — wajib
3. Eksekusi pakai daemon yang mapping-nya udah ada di persona
4. Selesai → append ke `team/<x>/log.md` + 1-liner ke `team/ACTIVITY.md` + update `team/STATUS.md` kalau status berubah
5. Nami baca semua log → bikin MoM di `team/mom/YYYY-MM-DD.md` kalau diminta

## Struktur & governance — source of truth

> **`01-GOVERNANCE.md` = master.** README ini cuma overview cepat; biar **gak drift**, detail gak diduplikat di sini:
> - Struktur folder per-persona + file paths → **`01-GOVERNANCE.md` §9**
> - Routing, **triage** (trivial vs non-trivial), conversation protocol, timesheet → **`01-GOVERNANCE.md`**
> - Org chart + RACI se-tim + eskalasi → **`02-RELATIONSHIPS.md`**
> - Governance backbone (COBIT 2019 / GCG-TARIF + BoK per disiplin: SWEBOK, BABOK, PMBOK, ITIL, ISTQB, DAMA-DMBOK, dst) → tiap **`PLAYBOOK.md §1`**

Tiap persona = **dossier jabatan IT** (`PERSONA` + `PLAYBOOK` + `CHARTER` + `sop/` + `tools/` + `adr/`) → 1 PDF di `team/<nama>/<nama>-dossier.pdf`. Regen semua PDF: `python3 team/md2pdf.py --all`.

## Reuse di project lain

Tinggal copy folder `team/` ke project baru:

```bash
cp -r /home/stella/team-framework /path/to/new-project/team
# log.md & STATUS.md & ACTIVITY.md & mom/ reset (atau biarin kosong)
```

PERSONA.md stabil — bawa terus. Log fresh per project.

## Daftar daemon Bat-family (reminder)

- `bruce` — gather → brief → dispatch (decision/consultation)
- `alfred` — implement (eksekusi setelah plan locked)
- `robin` — one-off LLM call (translate, summarize, boilerplate)
- `oracle` — extract non-text file (PDF, audio, image, docx, xlsx)
- `lucius` — generate PDF / image
- `batcave` — process supervision (dev server, register MCP)
