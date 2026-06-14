# Tool: 6Q Critical Filter

**Apa:** saringan **6 pertanyaan** yang tiap finding riset / kandidat adopsi tech **WAJIB** lewatin sebelum di-recommend. Ini inti kerjaan Senku — **anti adopt hype.**
**Kapan dipake:** tiap kesimpulan riset (SOP-SK-01), tiap kandidat tech (SOP-SK-04), tiap gap competitor (SOP-SK-02).
**Framework:** Critical thinking continuous (Tata mandate), reversibility (Kakashi Type-1/Type-2).

---

## 6 Pertanyaan

| # | Filter | Yang dicek | Output |
|---|---|---|---|
| 1 | **Solve real problem?** | Trace ke user pain konkret — bukan "cool tech looking for problem". **Q1 = ❌ → langsung refute, stop.** | ✅/⚠️/❌ |
| 2 | **Sustainable?** | Maintenance cost, vendor lock-in, community health (commit cadence, contributor, release), longevity (10-thn horizon) | ✅/⚠️/❌ |
| 3 | **Fit stack?** | Compat React 18, Chakra v2, Fauxbase, JS ecosystem; migration cost kalau replace | ✅/⚠️/❌ |
| 4 | **Compliant?** | UU PDP (PII), GDPR (user EU), PCI-DSS (payment), ISO 27001 (enterprise). Kena → trigger SOP-SK-03 | ✅/⚠️/❌ |
| 5 | **Business-fit?** | ROI clear, unit economics positif, customer impact konkret. "Valuable" bukan cuma "interesting" | ✅/⚠️/❌ |
| 6 | **Reversible?** | Type 1 (irreversible: lock vendor/pattern/data-shape → escalate + bruce/archrival) vs Type 2 (cepat) | T1/T2 |

**Verdict akhir:** `adopt` / `adopt with constraint` / `refuted` / `defer`.

> **Aturan baca:** ⚠️ di Q4 (compliant) atau T1 di Q6 → **gak boleh diputus sendiri**, escalate. ❌ di Q1 → buang, jangan buang waktu lanjut.

---

## TEMPLATE (copy mulai sini)

```markdown
### 6Q Critical Filter — [kandidat / finding]
| # | Filter | Verdict | Note |
|---|---|---|---|
| 1 | Solve real problem? | ✅/⚠️/❌ | ... |
| 2 | Sustainable? | ✅/⚠️/❌ | ... |
| 3 | Fit stack? | ✅/⚠️/❌ | ... |
| 4 | Compliant? | ✅/⚠️/❌ | ... |
| 5 | Business-fit? | ✅/⚠️/❌ | ... |
| 6 | Reversible? | T1/T2 | ... |

**VERDICT:** adopt / adopt with constraint / refuted / defer
**Constraint (kalau ada):** ...
```

---

## CONTOH TERISI (proyek contoh — landing v4, per rekomendasi)

```markdown
| Rekomendasi | Q1 real? | Q2 sustain? | Q3 fit? | Q4 comply? | Q5 biz? | Q6 rev? | VERDICT |
|---|---|---|---|---|---|---|---|
| Replace fake Stats → trust verifiable | ✅ (Lelouch high-sev) | ✅ | ✅ N/A | ✅ N/A | ✅ credibility | T2 | ✅ MANDATORY |
| WhatsApp sharing prominence | ✅ Indo critical | ✅ | ✅ N/A | ✅ N/A | ✅ local market | T2 | ✅ ADOPT |
| Framer-motion subtle animation | ⚠️ delight not pain | ✅ stable | ✅ in deps | ✅ N/A | ✅ differentiate | T2 | ✅ ADOPT w/ constraint (light) |
| AI features | ⚠️ premature | ⚠️ API cost | ⚠️ new dep | ⚠️ UU PDP AI-training | ⚠️ premature | T1 (positioning) | ❌ DEFER post-PMF |
```

**Insight:** AI feature kena ⚠️ di Q1 (premature) + ⚠️ Q4 (UU PDP soal data training) + **T1 di Q6** (irreversible positioning) → **defer post-PMF**. Tanpa filter ini, gampang ke-trap "2026 trend, harus ada AI" — hype. **Filter = guard rail dari excited-buta.**
