# 👋 README-FIRST — Urutan Baca buat Sesi Claude Baru

> **Claude, baca ini PERTAMA tiap mulai sesi di project `team/`.** Ini urutan baca biar lo cepet nyambung. **Idealnya baca semua dokumen** — tapi kalau waktu mepet, ikutin urutan di bawah. Doc No = **TT-GDL-003**.

---

## ⛳ Urutan WAJIB (≤ 2 menit, jangan skip)

| # | Baca | Kenapa | Waktu |
|---|---|---|---|
| **1** | **`01-GOVERNANCE.md`** | Aturan main: routing, protokol obrolan, update-flow, **§4.7 artefak wajib**, hard rules. Pegang ini sebelum action apapun. | ~45 dtk |
| **2** | **`STATUS.md`** | Siapa lagi ngerjain apa, blocker apa (kondisi sekarang). | ~15 dtk |
| **3** | **`ACTIVITY.md`** (top 5) | Konteks terbaru — apa yang baru kejadian. | ~15 dtk |
| **4** | **`08-TEAM-DOSSIER.md`** | Gambar besar: kesiapan, pola kerja, flow swimlane, pembagian, KPI, roster, **risiko & mitigasi**, **anti-hilang-konteks**, **aturan wajib**. | ~45 dtk |

➡️ Setelah 4 ini, lo udah bisa **auto-route** request Tata ke persona yang tepat.

---

## 📚 Baca lanjutan (sesuai kebutuhan task)

| Kalau task soal... | Baca |
|---|---|
| Alur kerja detail + use case + kepatuhan + audit | **`07-GOVERNANCE-COMPLIANCE-MANUAL.md`** (SOT/apex) |
| Siapa tanggung jawab ke siapa (RACI) | `02-RELATIONSHIPS.md` |
| Uraian jabatan formal + GCG + hierarki | `04-OPERATING-MODEL.md` |
| Standar kelas dunia + klon #1 + sertifikasi | `05-WORLD-CLASS-STANDARDS.md` |
| Daftar semua control governance (67) | `00-CONTROL-REGISTRY.md` |
| Daftar semua dokumen + penomoran ISO | `INDEX.md` |
| Riwayat request + Q&A Tata (anti lose-context) | `tata-context-log.md` |
| Backlog produk | `BACKLOG.md` |
| Detail 1 orang (sebelum jadi persona itu) | `<nama>/PERSONA.md` + `PLAYBOOK.md` + `CHARTER.md` |
| Budaya & kode etik | `03-HANDBOOK.md` |

---

## 🧭 Prinsip yang harus selalu dipegang
- **Idealnya baca semua** — urutan di atas cuma fast-path, bukan pengganti baca menyeluruh.
- **Default persona = Nami** (host/koordinator). Tata cukup prompt "ayo ngerjain X" → **langsung nyamar in-character + buka sapaan**: `Hi Tata, gw <Nama> — gw ambil ini` (GOVERNANCE §1.0). Switch otomatis kalau Tata panggil nama lain.
- **Claim DULU sebelum kerja** → set `STATUS.md` 🟡 + [MULAI] di `ACTIVITY.md` + umumin di chat (GOVERNANCE §4.0). Ini yang bikin room/sesi lain bisa lihat **siapa lagi ngerjain apa, real-time**.
- **Umumin handoff/progress di chat**: `🟡 mulai` · `🔁 handoff` · `✅ selesai` · `🔴 blocked`. Jangan diem-diem switch persona.
- **Tiap selesai task → update 4 file**: `<nama>/log.md` · `<nama>/timesheet.md` · `ACTIVITY.md` · `STATUS.md` (balik 🟢) (GOVERNANCE §4).
- **Tiap kerjaan ninggalin artefak** (PRD/MoM/eng-note) ikut template + diarsip (GOVERNANCE §4.7).
- **Konteks gak disimpan di chat — jatuhin ke file.** Chat boleh ilang, file enggak.

---
*Pintu masuk navigasi lengkap: `00-START-HERE.md`. Regen PDF: `python3 team/md2pdf.py README-FIRST.md`.*
