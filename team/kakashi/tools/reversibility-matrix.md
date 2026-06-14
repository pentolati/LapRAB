# Tool: Reversibility Matrix & Decision Thresholds

**Apa:** alat klasifikasi keputusan teknis + threshold kapan abstract / lock / build-vs-buy.
**Kapan dipake:** sebelum ambil keputusan teknis non-trivial — nentuin perlu ADR + escalate Tata atau enggak.
**Framework:** Bezos one-way/two-way door, COBIT APO12 (Risk).

---

## 1. Reversibility (Bezos door)

| | Type 1 — IRREVERSIBLE (one-way) | Type 2 — REVERSIBLE (two-way) |
|---|---|---|
| **Contoh** | Schema/data model, public API contract, security tradeoff, vendor lock, ganti stack | Internal refactor, UI tweak, feature flag, naming |
| **Proses** | `bruce` + archrival, lengthy review, **ADR wajib** | Fast decision, no archrival |
| **Wewenang** | 🔴 **Escalate Tata** | 🟢 Bebas (Kakashi) |

**Default kalau ragu:** treat as Type 1 (lebih aman).

## 2. Abstraction timing — Rule of 3
| Usage | Action |
|---|---|
| 1 | Inline (jangan abstract — premature) |
| 2 | Duplicate OK |
| **3** | **Abstract sekarang** |
| 5+ | Udah telat, refactor utang |

## 3. Lock pattern threshold
> 3 area → lock di style guide. > 5 area → enforce lint/CI. 1-2 area → inline.

## 4. Build vs Buy
| Verdict | Syarat |
|---|---|
| **Build** | Core competency + no good vendor + < 1 dev-month |
| **Buy** | Commodity + vendor mature + > 3 dev-month |
| **Wait** | Kebutuhan unclear / hype-driven |

## 5. Refactor scope
< 50 lines → inline (this PR) · > 50 → follow-up PR · > 200 / cross-team → tech debt log.

---

## CONTOH TERISI

> Keputusan: "Aplikasi web — payment digital, integrasi payment gateway sekarang atau nanti?"

```
Reversibility: Type 1 (vendor lock + security + data finansial) → 🔴 ESCALATE TATA
Build vs Buy: BUY (payment = commodity, vendor mature, building PCI-compliant > 3 dev-month)
Action: bikin ADR, escalate ke Tata buat pilih provider + timing.
        Sementara: abstract di balik interface PaymentProvider (Rule of 3 belum kena,
        tapi Type-1 → desain boundary dulu biar swap provider gampang).
```

Hasil: keputusan gak diambil diam-diam — naik ke Tata dengan tradeoff jelas. Itu Accountability (TARIF).
