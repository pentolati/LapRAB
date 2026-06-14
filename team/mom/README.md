# Minutes of Meeting

Dibuat oleh **Nami** (Project Manager).

## ⚠️ WAJIB: MoM selalu FILE BARU, jangan nimpa (mandat Tata)

Tiap sesi/meeting = **bikin file MoM BARU**, JANGAN edit/timpa MoM lama. Biar **jejak historis jalan** (bisa lacak balik tiap rapat). Kalau 1 hari ada >1 sesi, kasih suffix: `YYYY-MM-DD-2-<topik>.md`, `YYYY-MM-DD-3-<topik>.md`, dst. MoM lama = arsip, read-only.

## ⚠️ WAJIB: PDF selain MD (mandat Tata)

Tiap MoM **HARUS punya versi PDF** selain `.md` — Tata selalu minta (scanner + forward ke C-level non-IT). Generate otomatis tiap selesai bikin/update MoM:

```bash
python3 team/md2pdf.py mom/<file>.md     # → mom/<file>.pdf (palette Tata)
python3 team/md2pdf.py --all-mom         # convert semua sekaligus
```

JANGAN nunggu diminta — PDF = bagian dari "MoM selesai".

## Format file

`YYYY-MM-DD.md` (+ `.pdf`) — satu file per meeting/standup/sync.

## Template

```markdown
# MoM — YYYY-MM-DD

**Attendees:** <list>
**Facilitator:** Nami
**Duration:** <mins>

## Agenda
1. ...

## Notes
- ...

## Decisions
- ✅ ...

## Action items
- [ ] @<persona> — <task> — due <date>

## Blockers
- 🔴 ...

## Next sync
<date/time>
```
