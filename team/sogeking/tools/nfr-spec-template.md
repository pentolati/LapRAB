# Tool: NFR Spec Template

**Apa:** spesifikasi NFR ber-target ukur — "seberapa bagus" sistem, bukan "apa fiturnya". Tiap karakteristik mutu dapat angka, bukan kata sifat.
**Kapan dipake:** **sebelum** build fitur high-stakes (SOP-SG-02, kontrol SG-C2 — NFR define-before-build).
**Framework:** ISO/IEC 25010 (8 karakteristik) × AWS/Azure Well-Architected (5 pilar) · OWASP Top 10 · UU PDP.
**Output:** `team/sogeking/arch/nfr-<feature>.md`.

---

## TEMPLATE — tabel ISO 25010 × Well-Architected

| ISO 25010 char | Well-Architected pillar | Target UKUR (angka/kriteria) | Cara verifikasi | Owner cek |
|---|---|---|---|---|
| Performance efficiency | Performance efficiency | latency p95 < __ ms, bundle < __ KB | Lighthouse / profiler | @killua |
| Reliability | Reliability | uptime __% · RTO __ · RPO __ | failure test | @levi |
| Security | Security | OWASP Top 10 clear · UU PDP: consent + no overwrite | pentest ringan + review | @l |
| Maintainability | Operational excellence | coupling rendah · change-cost 1 file/fitur | code review | @kakashi |
| Compatibility | — | jalan di __ browser/device target | manual matrix | @l |
| Portability | Cost optimization | swappable backend (Type-2) · cost envelope < $__/bln | review arsitektur | Sogeking |
| Usability (joint @bulma) | Operational excellence | 3-detik-clear (F-2) · task RSVP <= __ tap | usability test | @bulma |
| Functional suitability (joint @lelouch) | — | acceptance criteria PRD 100% | QA | @l |

> Pilar Well-Architected yang **belum relevan untuk prototype** (cth cost cloud) tetap dicatat
> target arah-nya, ditandai "later" — lihat well-architected-checklist.

---

## CONTOH TERISI — Fitur RSVP + Gift Wishlist + Notif (high-stakes)

| ISO 25010 char | Pillar | Target UKUR | Verifikasi | Owner |
|---|---|---|---|---|
| Performance | Performance | render undangan **p95 < 1.5s di 3G** · bundle < 250KB | Lighthouse mobile | @killua |
| Reliability | Reliability | RSVP submit **idempotent** (double-tap = 1 record) · RPO 0 (no data loss) · klaim kado atomic | test double-submit + concurrent claim | @levi |
| Security | Security | input RSVP **validated** (no XSS) · **UU PDP**: nama+kontak tamu = data pribadi → consent + akses owner-only + **never overwrite (Data SACRED)** · no secret di client | OWASP checklist + review @l | @l |
| Maintainability | Operational excellence | kanal notif di balik **interface NotifProvider** (swap WA↔email 1 file) | code review | @kakashi |
| Usability | Operational excellence | RSVP **1 tap** (Hadir/Tidak) · wishlist klaim 2 tap · bahasa warung (F-2) | usability test 3 boomer | @bulma |
| Portability | Cost optimization | data layer Fauxbase **swappable** ke backend real (Type-2) · cost prototype $0 (local driver), envelope go-live < $20/bln | review arsitektur | Sogeking |
| Functional | — | acceptance PRD Fase 1 (8 komponen) 100% | QA | @l |

**Gate:** semua target ber-angka **sebelum** @killua/@saitama mulai dev. Kalau ada target masih
"kira-kira", NFR belum selesai → balik ke draft. Ini bukti kontrol SG-C2.
