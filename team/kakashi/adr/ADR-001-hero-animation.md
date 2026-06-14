# ADR-001: Hero animation pakai CSS, bukan framer-motion

**Author:** Kakashi · **Status:** Accepted (di-revisit di v4 — lihat Catatan) · **Date:** 2026-05-26
**Consulted:** @bulma, @killua · **Reversibility:** Type 2

## Context
Bulma minta hero landing ada fade-in. Killua nanya: framer-motion atau CSS aja? framer-motion nambah ~30KB ke bundle buat 1 efek fade — padahal lagi optimasi hero (1.6MB → 210KB).

## Decision
Pakai **CSS transition/keyframe** buat fade-in hero. framer-motion ditahan (tech radar: **Trial**) sampai ada kebutuhan animation kompleks (orchestration / gesture / layout animation).

## Alternatives considered
| Option | Pro | Con | Verdict |
|---|---|---|---|
| framer-motion | API enak, orchestration kuat | +30KB buat 1 fade | ditolak: overkill |
| CSS only (chosen) | 0 byte tambahan, cukup buat fade | manual kalau nanti kompleks | ✅ dipilih |

## Consequences
- **Positif:** bundle tetap ramping, sejalan optimasi hero.
- **Trade-off:** kalau butuh animation kompleks, re-introduce framer-motion (Type 2, gampang).

## Reversibility & rollback
Type 2 — tinggal `npm i framer-motion` kalau kebutuhan naik.

## Escalation
N/A (Type 2, gak perlu sign-off Tata).

## Catatan (lifecycle)
Di sprint **v4** framer-motion akhirnya dipake buat fade-up section (kebutuhan naik — persis skenario "re-introduce" yang diprediksi). Tech radar framer-motion → **Trial (boleh, jangan over-use)**. Histori keputusan ini sengaja disimpan (Data SACRED) sebagai bukti ADR lifecycle bekerja; keputusan v4 layak diformalkan jadi ADR-002 kalau di-lock.
