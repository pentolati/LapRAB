# LapangRAB — Project Instructions

> Project: generator Rencana Anggaran Biaya (RAB) **khusus konstruksi lapangan olahraga**
> (football, softball, sepak bola, padel, badminton, dll).
> User: kontraktor/profesional yang bikin lapangan. Tujuan: input jenis lapangan + spek →
> auto-generate RAB (volume pekerjaan, harga satuan, material + upah).

## Governance
Project ini pakai **Team-OS (Tata-Eleven)**. Tiap session start, **WAJIB** baca dan jalankan governance:

- **`team/01-GOVERNANCE.md`** — aturan operasional, Protokol Sambut Tata (§0), routing, claim/check-in.
- Master template framework: `/home/stella/team-framework`.

Inherit semua default dari `/home/stella/CLAUDE.md` (persona, stack prototyping, git, tooling).

## Stack
- Frontend: React + Zustand + Chakra UI **v2**
- Data layer: **Fauxbase** (`fauxbase` + `fauxbase-react`)
