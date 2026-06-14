# 📇 Daftar Induk Dokumen Terkendali (Document Master List) — Tata-Eleven

> **Register resmi** semua dokumen terkendali. Penomoran **sesuai standar ISO 9001 Document Control** (piramida dokumen + kode tipe). Tiap nambah/rename/pensiun dokumen → update di sini (anti-drift). Doc No = **TT-REG-002**.

---

## 1. Standar Penomoran (ISO 9001 Document Control)

**Format:** `TT-<TIPE>-<NNN>` + **Rev `<n>`**
- `TT` = organisasi (Tata-Eleven)
- `<TIPE>` = kode tipe dokumen (3 huruf, lihat tabel)
- `<NNN>` = nomor urut **per tipe** (001, 002, ...)
- `Rev <n>` = revisi (audit trail di tiap dokumen)

**Tipe dokumen — Piramida Dokumen ISO 9001 (4 tier):**

| Tier | Tipe | Kode | Contoh |
|---|---|---|---|
| **1 — Apex** | Manual | **MAN** | Governance & Compliance Manual |
| **1** | Policy | **POL** | Aturan tata kelola |
| **2** | Standard | **STD** | Standar kompetensi kelas dunia |
| **2** | Procedure (SOP) | **SOP** | Prosedur operasi baku |
| **2** | Register | **REG** | Daftar induk, RACI register |
| **2** | Guideline | **GDL** | Panduan onboarding |
| **3** | Work Instruction | **WI** | Checklist / tools |
| **4** | Form | **FRM** | Formulir |
| **4** | Template | **TMP** | Template MoM |
| **4** | Record | **REC** | MoM, log, timesheet, status |
| — | Charter | **CHT** | Piagam peran (akuntabilitas formal) |
| — | Job Description | **JD** | Uraian jabatan (PERSONA) |
| — | Playbook | **PBK** | Metodologi operasional peran |
| — | Handbook | **HBK** | Employee handbook |
| — | Diagram | **DGM** | Flowchart, use case |

**Elemen identifikasi wajib (ISO 9001):** tiap dokumen punya — Nomor Dokumen · Judul · Tipe · Rev · Tanggal Berlaku · Pemilik (Owner) · Penyetuju · Status · Retensi.
**Status:** Berlaku (Approved) · Aktif (live record) · Arsip (Archived/superseded).
**Catatan:** Nomor Dokumen = metadata kendali, **terpisah dari nama file** (praktik ISO). File tata kelola pakai prefix angka `0x-` buat urutan fisik; file hidup pakai nama asli (dirujuk literal) — keduanya tetap punya Nomor Dokumen di sini.

---

## 2. Register — Tier 1 (Manual & Policy)

| Doc No | Dokumen | Tipe | Rev | Tgl Berlaku | Pemilik | Status |
|---|---|---|---|---|---|---|
| **TT-MAN-001** | `07-GOVERNANCE-COMPLIANCE-MANUAL.md` — **SOT/Apex** (alur, use case, kepatuhan, audit) | Manual | 1.0 | 2026-06-03 | Nami/Kakashi | Berlaku |
| **TT-MAN-002** | `04-OPERATING-MODEL.md` — Operating Model (uraian jabatan, GCG, hierarki) | Manual | 1.1 | 2026-06-03 | Kakashi/Nami | Berlaku |
| **TT-MAN-003** | `08-TEAM-DOSSIER.md` — **Baca-Ini-Aja** (kesiapan, pola kerja, I/O, flow, pembagian, KPI, roster) | Manual (exec brief) | 1.0 | 2026-06-03 | Nami/Kakashi | Berlaku |
| **TT-POL-001** | `01-GOVERNANCE.md` — Aturan operasional (routing, protokol, update-flow, hard rules) | Policy | 1.1 | 2026-06-03 | Kakashi/Nami | Berlaku |
| **TT-HBK-001** | `03-HANDBOOK.md` / `.pdf` — Employee Handbook (budaya, kode etik) | Handbook | 1.0 | 2026-05-26 | Nami | Berlaku |

## 3. Register — Tier 2 (Standard, Register, Guideline)

| Doc No | Dokumen | Tipe | Rev | Pemilik | Status |
|---|---|---|---|---|---|
| **TT-STD-001** | `05-WORLD-CLASS-STANDARDS.md` / `.pdf` — Standar kelas dunia + role-clarity + klon + sertifikasi | Standard | 1.1 | Kakashi/Nami | Berlaku |
| **TT-REG-001** | `02-RELATIONSHIPS.md` — Org chart + RACI register | Register | 1.0 | Kakashi | Berlaku |
| **TT-REG-002** | `INDEX.md` (ini) — Document Master List | Register | 2.2 | Nami | Berlaku |
| **TT-REG-003** | `00-CONTROL-REGISTRY.md` — Daftar 67 control governance (turunan; SOT = CHARTER §5) | Register | 1.0 | Nami | Berlaku |
| **TT-GDL-001** | `00-START-HERE.md` — Panduan navigasi / onboarding | Guideline | 2.0 | Semua | Berlaku |
| **TT-GDL-002** | `README.md` — Roster (overview cepat) | Guideline | 1.0 | Semua | Berlaku |
| **TT-GDL-003** | `README-FIRST.md` — Urutan baca sesi Claude baru | Guideline | 1.0 | Semua | Berlaku |

## 4. Register — Tier 2 (Prosedur / SOP)

**Pola Nomor:** `TT-SOP-<DEPT>-<NN>` (DEPT = inisial peran). **Total 64 SOP.** Daftar lengkap + owner per SOP ada di **TT-MAN-001 §6** (anti-redundan, gak digandakan di sini).

| Dept | Range SOP | Jumlah | Owner |
|---|---|---|---|
| LL (Lelouch) | SOP-LL-01..07 | 7 | Lelouch |
| NM (Nami) | SOP-NM-01..07 | 7 | Nami |
| SG (Sogeking) | SOP-SG-01..06 | 6 | Sogeking |
| KK (Kakashi) | SOP-KK-01..06 | 6 | Kakashi |
| BL (Bulma) | SOP-BL-01..06 | 6 | Bulma |
| SK (Senku) | SOP-SK-01..05 | 5 | Senku |
| SA (Saitama) | SOP-SA-01..05 | 5 | Saitama |
| SH (Shikamaru) | SOP-SH-01..05 | 5 | Shikamaru |
| KU (Killua) | SOP-KU-01..05 | 5 | Killua |
| L (L) | SOP-L-01..06 | 6 | L |
| LV (Levi) | SOP-LV-01..06 | 6 | Levi |

## 5. Register — Dokumen Per-Peran (governance per persona)

> Tiap persona (folder `<nama>/`) punya 3 dokumen kendali + record. Pola nomor per tipe:

| Tipe | Pola Nomor | File | Isi |
|---|---|---|---|
| Job Description | **TT-JD-3xx** | `<nama>/PERSONA.md` | Identitas + wewenang + klon #1 dunia + sertifikasi |
| Playbook | **TT-PBK-3xx** | `<nama>/PLAYBOOK.md` | Metodologi operasional + framework |
| Charter | **TT-CHT-3xx** | `<nama>/CHARTER.md` | Akuntabilitas formal (COBIT/control/KPI/GCG) |
| Work Instruction | **TT-WI-3xx-nn** | `<nama>/tools/*.md` | Checklist & alat |

| 3xx | Persona | Jabatan | Lapisan |
|---|---|---|---|
| 301 | sogeking | Solution Architect | Pimpinan |
| 302 | kakashi | Lead Developer | Pimpinan |
| 303 | lelouch | Product Manager | Pimpinan |
| 304 | nami | Project Manager | Pimpinan |
| 305 | bulma | UI/UX Lead | Lead-of-domain |
| 306 | l | QA Senior | Lead-of-domain (independen) |
| 307 | killua | Senior Frontend | Pelaksana |
| 308 | saitama | Senior Backend | Pelaksana |
| 309 | shikamaru | DBA / Data Architect | Pelaksana |
| 310 | levi | DevOps | Pelaksana |
| 311 | senku | R&D Engineer | Pelaksana |

(cth: PERSONA Lelouch = TT-JD-303 · Charter Bulma = TT-CHT-305)

## 6. Register — Tier 4 (Template, Record, Diagram)

| Doc No | Dokumen | Tipe | Status |
|---|---|---|---|
| **TT-TMP-001** | `mom/TEMPLATE.md` — Template MoM standar | Template | Berlaku |
| **TT-REC-001** | `STATUS.md` — Papan status live | Record | Aktif |
| **TT-REC-002** | `ACTIVITY.md` — Feed aktivitas | Record | Aktif |
| **TT-REC-003** | `tata-context-log.md` — Riwayat request + Q&A principal | Record | Per-project (dibuat saat aktif) |
| **TT-REC-004** | `BACKLOG.md` — Tracker backlog produk (living) | Record | Per-project (dibuat saat aktif) |
| **TT-REC-MOM-*** | `mom/YYYY-MM-DD-*.md` (+PDF) — Risalah rapat | Record | Otoritatif |
| **TT-REC-LOG-3xx** | `<nama>/log.md` — Catatan kerja per persona | Record | Aktif |
| **TT-REC-TS-3xx** | `<nama>/timesheet.md` — Timesheet | Record | Aktif |
| **TT-DGM-001..013** | `_diagrams/*.png` — Flowchart (2) + use case (11) | Diagram | Berlaku |
| **TT-DGM-014** | `_diagrams/swimlane-project.png` + **`SWIMLANE-PROSES.pdf`** (landscape, baca-cepat) — Peta proses lintas-fungsi (fase×lane, PIC/IO/mitigasi) | Diagram | Berlaku |

## 7. Dokumen Pensiun (Archived)

| Doc No (lama) | Dokumen | Digantikan |
|---|---|---|
| ~~(tanpa kode — pensiun)~~ | `06-REQUEST-FLOW.md` | **TT-MAN-001 §4–5** (diagram grafis) |

> *Catatan: kode lama `TT-RF-060` dihapus — `RF` bukan tipe valid di skema ISO (§1). File pensiun gak dapet nomor tipe baru.*

## 8. Aturan Pemeliharaan Register (Document Control)
1. **Dokumen baru** → tetapkan Tipe (tabel §1) → Nomor `TT-<TIPE>-<NNN berikut>` → masukin register + isi elemen identifikasi.
2. **Revisi** → naikin `Rev`, catat di Riwayat Revisi dokumen + update tanggal di sini.
3. **Pensiun** → status `Arsip`, pindah ke §7, tulis penggantinya.
4. **Tiap perubahan register** → naikin Rev INDEX (TT-REG-002).
5. **SOT acuan:** aturan → TT-POL-001 · alur/kepatuhan/audit → TT-MAN-001 · RACI → TT-REG-001 · standar/role → TT-STD-001.

---
*Regen PDF: `python3 team/md2pdf.py team/INDEX.md`.*
