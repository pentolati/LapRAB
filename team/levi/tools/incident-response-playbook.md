# Tool: Incident Response Playbook

**Apa:** panduan pas production bermasalah — severity matrix, alur **contain dulu** baru analisis, plus template **postmortem blameless**.
**Kapan dipake:** SOP-LV-03, incident SEV1/SEV2. Postmortem wajib ≤ 48 jam, di-arsip permanen.
**Framework:** ITIL Incident Management, Google SRE (containment-first, blameless).
**Prinsip Tata:** anti-hide (postmortem terbuka), anti-defensif (akui "gate gw bolong"), no blame ping-pong, lapor Tata bahasa manusia.

---

## Severity matrix (PLAYBOOK §5.3)

| Severity | Definisi | Respon | Postmortem |
|---|---|---|---|
| **SEV1** | Total outage / data loss | Segera, all-hands | Wajib ≤ 48 jam |
| **SEV2** | Degradasi besar, no workaround | ≤ 15 menit | Wajib ≤ 1 minggu |
| **SEV3** | Degradasi sebagian, ada workaround | ≤ 2 jam | Opsional |
| **SEV4** | Minor / kosmetik | Backlog | Tidak |

## Alur (urut)
1. **Acknowledge** — catat channel + waktu mulai
2. **Triage** — severity
3. **Contain** — STOP THE BLEEDING (rollback / flag-off / scale / maintenance page)
4. **Communicate** — internal channel + lapor Tata (kalau visible, bahasa manusia)
5. **Root cause** — log + metric + trace + repro (5 Whys)
6. **Fix** — proper, bukan band-aid
7. **Verify** — smoke test, error normal
8. **Postmortem** — blameless, ≤ 48 jam

---

## TEMPLATE POSTMORTEM (copy mulai sini)

```markdown
# Postmortem PM-NNN: [judul incident]

**Tanggal incident:** YYYY-MM-DD · **Severity:** SEV1/SEV2 · **Author:** Levi
**Durasi:** [mulai → pulih] · **Status:** Draft / Reviewed

## Ringkasan
[2-3 kalimat: apa yang kejadian]

## Dampak
- User terdampak: [estimasi] · Service: [list] · SLA/revenue: [kalau ada]

## Timeline
| Waktu | Kejadian |
|---|---|
| HH:MM | [trigger] |
| HH:MM | Alert nyala |
| HH:MM | Containment (rollback/flag) |
| HH:MM | Pulih |

## Root cause (blameless — sistem, bukan orang)
[1-2 paragraf teknis]

## Yang berjalan baik / yang nggak
- ✅ ...
- ❌ ...

## Action items (owner + due)
- [ ] @persona: [action] — due [tanggal] — tipe: fix/preventive

## Akuntabilitas
[kalau bocor ke Tata/user: "gate gw bolong di X" — akui, gak throw tim]
```

---

## CONTOH TERISI (Proyek-Contoh — skenario plausible pasca go-live)

```markdown
# Postmortem PM-001: Landing Proyek-Contoh lambat (LCP > 8 detik) di mobile

**Tanggal incident:** 2026-06-03 · **Severity:** SEV2 · **Author:** Levi
**Durasi:** 14:32 → 14:50 (18 menit) · **Status:** Reviewed

## Ringkasan
Pasca deploy v4, sebagian user mobile ngeluh landing lama kebuka.
Alert "LCP > 4s" nyala. Kontaminasi: hero image versi high-res ke-deploy
tanpa lewat optimizer.

## Dampak
- User mobile: ~estimasi tinggi · Service: landing (konversi) · revenue: bounce naik

## Timeline
| Waktu | Kejadian |
|---|---|
| 14:30 | Deploy v4 selesai |
| 14:32 | Alert LCP p75 > 4s nyala (alert duluan, bukan komplain user ✅) |
| 14:35 | Levi ack, triage SEV2 |
| 14:40 | Contain: promote previous deploy (v3) — rollback < 1 menit |
| 14:50 | v3 stabil, LCP normal < 2.5s |

## Root cause (blameless)
Pipeline build gak punya step "cek bundle/asset size budget" — hero high-res
2.1MB lolos. Bukan salah Killua/Bulma; sistem yang ngebolehin asset gede lolos
tanpa gate.

## Yang berjalan baik / nggak
- ✅ Alert nyala duluan (MTTD bagus), rollback < 1 menit (Vercel atomic)
- ❌ Pre-flight checklist gak ada item "asset/bundle size budget" yang enforce

## Action items
- [ ] @levi: tambah step "bundle+asset size budget" di CI + pre-flight — due 2026-06-04 — preventive
- [ ] @killua: re-deploy v4 dengan hero teroptim (210KB) — due 2026-06-04 — fix

## Akuntabilitas
Gate gw bolong — pre-flight gw belum punya cek asset size. Itu gw yang
harusnya enforce di pipeline. Bukan tim FE. Gw fix di CI biar gak terulang.
```

> Pola sama persis kayak RCA fake-stats Kakashi (RCA-001): 1 incident → 1 perbaikan permanen di checklist/pipeline. Itu gunanya postmortem — bukan nyari kambing hitam, tapi **nutup lubang sistem**.
