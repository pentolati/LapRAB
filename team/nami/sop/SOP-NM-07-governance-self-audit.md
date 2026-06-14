# SOP-NM-07 — Governance Self-Audit

| | |
|---|---|
| **Kode** | SOP-NM-07 |
| **Pemilik** | Nami (Project Manager) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | 01-GOVERNANCE.md §2 (reply WAJIB) & §3 (timesheet) |
| **COBIT** | MEA01 (Performance & Conformance Monitoring) |

## 1. Tujuan
Cek ringan & berkala bahwa tim beneran ngikutin governance — bukan cuma di atas kertas. Fokus 2 hal yang paling gampang slip: **@mention tanpa reply** & **timesheet kosong**.

## 2. Ruang Lingkup
- **Berlaku:** seluruh `log.md` persona + ACTIVITY + `timesheet.md`.
- **Tidak berlaku:** audit mutu deliverable (itu ranah Pre-Tata Gate / Kakashi).
- **Frekuensi:** sekali-sekali — sprint close atau pas bikin status report. **Bukan harian** (anti over-ceremony).

## 3. Definisi & Istilah
- **Dangling @mention** — `@persona` di-mention di log tapi belum ada reply (langgar GOVERNANCE §2 "reply WAJIB").
- **Timesheet gap** — row dengan kolom Output/Task `—` atau kosong.

## 4. Referensi
01-GOVERNANCE.md §2 (conversation protocol), §3 (timesheet protocol), §4 (update flow).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Jalankan self-audit | Nami | Nami | — | persona terkait |
| Tindak lanjut temuan | persona ybs | Nami | — | Tata (kalau jadi pola) |

## 6. Prosedur
### 6.1 Cek dangling @mention
- 6.1.1 Lihat semua mention: `grep -rhoE "@[a-z]+" team/*/log.md | sort | uniq -c`.
- 6.1.2 Telusuri mention yang mencurigakan → cek ada heading balasan `## ... Reply @<pemberi>` di log persona target.
- 6.1.3 **Ada mention tanpa reply?** → ping persona target buat reply (GOVERNANCE §2). **Exit** kalau semua mention ke-cover.

### 6.2 Cek timesheet gap
- 6.2.1 `grep -n "| —" team/*/timesheet.md` (atau scan kolom Output kosong).
- 6.2.2 **Ada gap?** → minta owner lengkapin Output konkret (evidence-first).

### 6.3 Rekap
- 6.3.1 Temuan **berulang (pola)** → catat di `lessons.md` + angkat di status report.
- 6.3.2 **Exit criteria:** tiap temuan punya owner + follow-up, atau hasil "clean".

## 7. Pengecualian
- Task **trivial** yang di-skip ceremony (Triage GOVERNANCE §1) **tidak dihitung gap** — emang cukup 1-liner.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Hasil self-audit | `log.md` / status report | Permanen |
| Pola berulang | `lessons.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Dangling @mention | # mention tanpa reply | turun → 0 |
| Timesheet gap | # row Output kosong | turun → 0 |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama (per feedback Tata — self-audit ringan) |
