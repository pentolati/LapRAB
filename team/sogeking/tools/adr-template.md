# Tool: ADR Strategis (Architecture Decision Record)

**Apa:** catatan 1-halaman keputusan arsitektur **level-strategis** (lintas-fitur/app) — apa yang dipilih, kenapa, alternatif apa yang dibuang.
**Kapan dipakai:** SOP-SG-04. Keputusan arsitektur **Type-1 (irreversible)** — vendor/stack lock, data residency, security tradeoff, pola integrasi yang ngiket lintas app. Type-2 reversible gak wajib ADR.
**Framework:** TOGAF ADM fase G/H (Governance), COBIT APO03, GCG/TARIF (transparency + audit trail).
**Beda dari ADR @kakashi:** Sogeking = **arah solusi strategis**, @kakashi = **pola code-level**. ADR Type-1 **co-owned** — **co-arsip di `team/kakashi/adr/NNN-*.md`** biar satu sumber kebenaran. Sogeking pegang arah, @kakashi pegang feasibility eksekusi.

---

## TEMPLATE (copy mulai sini)

```markdown
# ADR-NNN: <judul keputusan>

**Pengambil keputusan:** Sogeking (arah) · **co-own:** @kakashi (feasibility/code-level)
**Status:** Proposed → Accepted / Superseded / Deprecated
**Tanggal:** YYYY-MM-DD · **Consulted:** @persona1, @persona2 · **Reversibility:** Type-1 / Type-2

## Konteks
<situasi yang trigger keputusan — driver bisnis/teknis, constraint, 1 paragraf>

## Reversibility
- Type-1 (one-way 🔴) / Type-2 (two-way 🟢) · alasan klasifikasi: ...

## Opsi dipertimbangkan (≥2)
| Opsi | Pro | Con / trade-off | Verdict |
|---|---|---|---|
| A | ... | ... | ditolak: ... |
| B (dipilih) | ... | ... | ✅ dipilih |
| C | ... | ... | ditolak: ... |

## Keputusan + rationale
<apa yang dipilih + kenapa menang vs alternatif — 1 paragraf, eksplisit trade-off>

## Konsekuensi
- Positif: ...
- Trade-off/negatif: ...
- Guardrail yang lahir: ...

## Escalation / sign-off Tata (wajib jika Type-1)
- [ ] Type-1 → di-escalate & di-sign-off Tata (tanggal: ..., konteks: visible/biaya/lock)
- [ ] Reality-checked feasibility ke @kakashi

## Follow-up
- ...
```

---

## CONTOH TERISI

```markdown
# ADR-001: Pola notifikasi gift wishlist — polling client-side, bukan push service eksternal

**Pengambil keputusan:** Sogeking (arah) · **co-own:** @kakashi (feasibility/code-level)
**Status:** Accepted
**Tanggal:** 2026-05-29 · **Consulted:** @shikamaru, @senku, @kakashi · **Reversibility:** Type-1

## Konteks
Fitur USP wedding app: tamu klaim kado di wishlist → tuan rumah dapet notif. Muncul pilihan:
pakai push service eksternal (vendor realtime) atau polling sederhana di client. Prototype
jalan di Fauxbase driver local (memory), belum ada backend persistent. Vendor realtime = **lock-in + data tamu nyebrang ke pihak ketiga (UU PDP)**.

## Reversibility
- Type-1 (one-way 🔴) — masuk vendor realtime = lock-in kontrak + data pribadi tamu keluar (UU PDP). Susah ditarik balik setelah user terdaftar.

## Opsi dipertimbangkan
| Opsi | Pro | Con / trade-off | Verdict |
|---|---|---|---|
| Push service eksternal | realtime instan, scalable | vendor lock-in, data tamu nyebrang (UU PDP), overkill buat skala undangan | ditolak: Type-1 risk, premature scaling |
| Polling client-side via Service method (dipilih) | 0 vendor, data tetap di Fauxbase, cukup buat skala undangan | latency notif beberapa detik (acceptable) | ✅ dipilih |
| WebSocket self-host | realtime, no vendor | infra berat, YAGNI buat prototype | ditolak: over-engineering |

## Keputusan + rationale
Pakai **polling client-side** lewat method `GiftService.pollClaims()` (interval wajar). Notif delay beberapa detik **acceptable** buat use-case undangan (bukan trading). Hindari vendor lock-in + jaga data tamu **tetap di Fauxbase** (Data SACRED + UU PDP). Abstract di balik interface `NotifChannel` biar kalau skala naik, swap ke push gampang (build-for-change).

## Konsekuensi
- Positif: 0 biaya vendor, data privacy aman, prototype jalan tanpa backend.
- Trade-off: notif gak instan; kalau user ribuan, polling boros — re-evaluate via ADR baru.
- Guardrail: semua notif lewat `NotifChannel` interface; jangan panggil vendor langsung dari komponen.

## Escalation / sign-off Tata
- [x] Type-1 → di-sign-off Tata 2026-05-29 (konteks: privacy data tamu + no vendor lock)
- [x] Reality-checked feasibility ke @kakashi (Service method polling = feasible di Fauxbase)

## Follow-up
- Re-evaluate kalau skala > ratusan concurrent → ADR baru bisa supersede ini.
```

> ADR ini naikin keputusan ke Tata dengan trade-off jelas (privacy vs realtime) — bukan diam-diam masuk vendor. Itu Accountability (TARIF) + kontrol SG-C1/SG-C6.
