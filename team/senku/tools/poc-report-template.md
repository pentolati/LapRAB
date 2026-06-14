# Tool: POC / Spike Report Template

**Apa:** template laporan spike/POC — **verbose internal** (engineer/PM) + **sintesa 1-page Tata-friendly**. Output riset & spike Senku.
**Kapan dipake:** tiap selesai spike (SOP-SK-05), riset (SOP-SK-01). **Evidence-first: hipotesis → method → data → conclusion.**
**Framework:** COBIT APO04, hypothesis-driven, Tata mandate (verbose internal / sintesa external).

---

## TEMPLATE A — Verbose Report (engineer/PM, copy mulai sini)

```markdown
# Spike Report: [Topic]
**Owner:** Senku · **Status:** Done / In Progress / Refuted
**Date:** YYYY-MM-DD · **Time spent:** X jam (estimate: Y)

## 1. Question
[Apa yang mau divalidate — kalau dijawab, decision apa berubah?]

## 2. Hypothesis
> Kalau **[X]**, maka **[Y]**, karena **[Z]**.
**Stop condition:** [time-box / evidence threshold]

## 3. Method
- Literature scan / Prototype spike / Interview / Data analysis
- Sumber: [≥10, dengan tingkat evidence hierarchy]

## 4. Findings
### What worked / What didn't
### Data / Evidence
- [URL / screenshot / log / angka]

## 5. Conclusion
- **Hypothesis:** confirmed / refuted / inconclusive
- **Confidence:** high / med / low — [rationale, sumber tingkat berapa]

## 6. 6Q Critical Filter
[tabel 6q — lihat tools/6q-critical-filter.md]

## 7. Compliance flag (kalau applicable)
- UU PDP / GDPR / PCI: [aman / butuh X / non-compliant]

## 8. Recommendation
- [Actionable] · @lelouch: ... · @killua/@saitama: ...

## 9. References (saved untuk reuse)
| URL | Tingkat | Why relevant |
|---|---|---|
```

---

## TEMPLATE B — Sintesa Tata-friendly (1-page, copy mulai sini)

```markdown
# Sintesa: [Topic]
**Untuk:** @tata · **Dari:** Senku · **Date:** YYYY-MM-DD

## TL;DR (bold)
- **Recommendation:** adopt / adopt with constraint / refuted / defer
- **ROI horizon:** [3 bulan / 6 bulan / 1 tahun]
- **Top risk:** [paling penting + action mitigasi]

## Why (1 paragraf, bahasa awam)
## Pilihan (kalau > 1 opsi) — tabel Pro/Con/Verdict
## Action plan — owner + due
## Compliance flag — UU PDP / PCI [aman / butuh X]
## Detail → link verbose report
```

> **Ke Tata: skip "10 billion percent", skip jargon ilmiah. Bullet, bold key number, actionable.**

---

## CONTOH TERISI (proyek contoh — sintesa riset landing v4)

```markdown
# Sintesa Riset Landing v4
**Untuk:** @tata via @nami · **Dari:** Senku · **Date:** 2026-05-27

## TL;DR
- **Replace fake Stats** → trust signal verifiable (founded 2026, made in Bandung, first-mover wishlist) — **MANDATORY** (Lelouch flag risk)
- **WhatsApp sharing** prominent — Indo couple share invi **90%+ via WA**
- **Subtle motion** (fade-up scroll, light envelope animation) — differentiator vs static

## Why
Competitor scan 10 sumber (Joy, Zola, Paperless Post, Greenvelope, theKnot, Minted, Invitato, Bridestory, dll). Pattern berhasil 2026: **genuine trust + multi-channel native + subtle delight**. Proyek-Contoh v3 kuat tapi miss 3 ini.

## Compliance flag
- UU PDP: **aman** untuk landing (gak collect data). Triggered nanti pas signup /daftar.
- Sustainability: pakai **light claim** aja, gak quantify angka tanpa data.

## Action plan
1. **Bulma** — replace Stats → trust verifiable + WhatsApp icon prominence
2. **Killua** — framer-motion fade-up scroll (light) + envelope animation hero
3. **Lelouch** — copy refine sustainability light claim

## Detail → verbose log Senku
```

**Hasil:** 1-page ini yang nyampe Tata (via Nami). Verbose 7-pattern + 6Q filter table tetap di log untuk engineer/PM. **2 brief, 1 riset — verbose internal, sintesa external.**
