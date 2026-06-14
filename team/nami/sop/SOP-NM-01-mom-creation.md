# SOP-NM-01 — MoM (Minutes of Meeting) Creation

| | |
|---|---|
| **Kode** | SOP-NM-01 |
| **Pemilik** | Nami (Project Manager) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | PMBOK (Communication Mgmt), [tools/mom-template.md](../tools/mom-template.md), [tools/action-item-tracker.md](../tools/action-item-tracker.md) |
| **COBIT** | BAI11 (Managed Projects) |

## 1. Tujuan
Memastikan setiap rapat menghasilkan **catatan terstruktur** — keputusan + rasional + rencana tindak — yang **scannable**, auditable, dan **gak ada action item tanpa owner/due**. MoM = memori keputusan tim.

## 2. Ruang Lingkup
- **Berlaku:** semua meeting/standup/sync/decision-meeting/retro yang Nami fasilitasi atau hadiri.
- **Tidak berlaku:** obrolan ad-hoc 1-on-1 tanpa keputusan (cukup catat di log kalau ada action).

## 3. Definisi & Istilah
- **MoM** — *Minutes of Meeting*, notulen rapat.
- **Action-triple** — aturan wajib: tiap action item = **action + owner + due date**. Tanpa salah satu = bukan action item.
- **Decision + rationale** — keputusan dicatat eksplisit + alasannya, biar bisa ditelusur.
- **MoM = berkas baru per rapat** — tiap MoM **WAJIB** file baru `team/mom/YYYY-MM-DD-<topik>.md`. **JANGAN PERNAH overwrite/timpa MoM lama** (jejak historis = memori keputusan tim, mandat **Data SACRED**). Kalau ada koreksi, tambah catatan addendum/revisi di file yang sama atau file baru — bukan hapus/replace isi lama.

## 4. Referensi
PMBOK Communication Management, mandate Tata (action-triple, bold key point, status jujur), GOVERNANCE §6 (Nami bikin MoM saat sprint end).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Tulis MoM | Nami | Nami | attendees | Tata |
| Konfirmasi decision + rationale | Nami | Nami | pengambil keputusan | tim |
| Eksekusi action item | owner action | Nami (track) | — | Tata |

## 6. Prosedur

### 6.1 Pra-meeting
- 6.1.1 Siapkan **agenda** + konfirmasi attendees + scope statement (in/out).
- 6.1.2 Buka berkas MoM **BARU** dari [mom-template](../tools/mom-template.md) di `team/mom/YYYY-MM-DD-<topic>.md`. **Tiap rapat = 1 file baru** — **jangan timpa MoM lama** (jejak historis, Data SACRED). Cek dulu nama file belum ada; kalau bentrok (rapat sama di hari sama), tambah suffix `-2`, jangan overwrite.

### 6.2 Selama meeting
- 6.2.1 Catat **live**: poin diskusi, keputusan, action item, blocker, risk.
- 6.2.2 Tiap keputusan → catat **+ rationale** (kenapa diputus gitu).
- 6.2.3 Tiap action → tangkap **action + owner + due** (action-triple). Kalau due belum jelas → tanya di tempat, jangan biarin "TBD" gantung.

### 6.3 Post-meeting (within 24 jam)
- 6.3.1 Finalisasi MoM: **bold** key decision + action item (Tata scanner).
- 6.3.2 **Jalankan QC checklist** ([mom-template](../tools/mom-template.md)): attendees · agenda addressed · decision+rationale · action-triple · blocker+severity · next-sync · distribution.
- 6.3.3 Flag action item ke log persona owner via mention `(@nami: action item dari MoM YYYY-MM-DD)`.
- 6.3.4 **Decision point:** MoM mau di-consume Tata? → handoff **Pre-Tata Gate Kakashi** (SOP-KK-03) dulu, baru forward.
- 6.3.5 **Exit criteria:** MoM lengkap (semua section), action-triple komplit, distribution tagged, (kalau ke Tata) gate pass.

### 6.4 Follow-up
- 6.4.1 H+3 ping action item yang masih open ([action-item-tracker](../tools/action-item-tracker.md)).

## 7. Pengecualian
- **Stand-up harian:** boleh MoM ringkas (cukup blocker + today's focus), gak perlu full template.
- **Meeting tanpa keputusan/action:** cukup 1-liner di log, gak perlu MoM formal.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| MoM | `team/mom/YYYY-MM-DD-<topic>.md` | Permanen |
| Action item flag | log persona owner | Permanen |
| Catatan bikin MoM | `nami/log.md` + timesheet | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Action item tanpa owner/due | # action incomplete ÷ total action | **0** |
| MoM telat (>24 jam) | # MoM terbit >24 jam ÷ total | minimal |
| Decision tanpa rationale | # keputusan tanpa alasan tercatat | 0 |
| **MoM ter-overwrite** | # MoM lama yang ditimpa (bukan file baru) | **0** |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: MoM interactive-invitation (8 component, 7 cross-cutting decision) |
