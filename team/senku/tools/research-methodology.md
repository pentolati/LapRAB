# Tool: Research Methodology (Abusively Riset ≥10 Sumber)

**Apa:** workflow riset terstruktur — kumpulin ≥10 sumber multi-angle, bobot pakai **evidence hierarchy**, sintesa jadi finding yang lewat 6Q filter.
**Kapan dipake:** tiap riset / validasi hipotesis (SOP-SK-01). **Tata mandate: abusively riset, gak tanggung.**
**Framework:** Systematic Research Methodology, COBIT APO04, evidence-first.

---

## 1. Evidence hierarchy (bobot sumber — gak setara)

| Tingkat | Jenis sumber | Bobot | Contoh |
|---|---|---|---|
| 1 | Primary data | Tertinggi | Interview user/expert, eksperimen sendiri, telemetry |
| 2 | Peer-reviewed paper | Tinggi | ACM, IEEE, arXiv (reviewed) |
| 3 | Whitepaper + eng-blog top company | Sedang-tinggi | Gartner, Stripe/Netflix engineering blog |
| 4 | Regulatory text | Tinggi (legal) | UU PDP, GDPR resmi |
| 5 | Competitor product (tear-down) | Sedang | Bedah langsung, bukan glance |
| 6 | Blog/opini/marketing | Rendah | Cross-check wajib |

**Aturan:** high-confidence conclusion butuh sumber tingkat 1–4. Cuma tingkat 6 → label **inconclusive**.

## 2. Workflow (10 langkah)
1. **Define question** — kalau dijawab, decision apa berubah?
2. **Hipotesis falsifiable** — "kalau X, maka Y, karena Z" + stop condition
3. **Source collection ≥10** — lintas tingkat: paper, whitepaper, eng-blog, GitHub (cek community health), regulatory, competitor, primary interview
4. **Catat tiap sumber** — tingkat bukti + 1-line why (audit trail SK-C2)
5. **Method choice** — literature-scan (30–60 mnt) / prototype spike / interview / data analysis
6. **6Q critical filter** — tiap finding lewat saringan
7. **Compliance assessment** — kalau sentuh data/payment (SOP-SK-03)
8. **Business-flow check** — link finding ke business value / ROI
9. **Synthesize** — verbose internal + sintesa 1-page Tata
10. **Handoff @lelouch** — 2 brief: verbose (engineer/PM) + sintesa (Tata)

## 3. Daemon defaults
| Need | Daemon |
|---|---|
| Summarize sumber | `robin.call(prompt, model=...)` |
| Extract PDF/audio/scan | `oracle.extract(file_path)` async |
| Build prototype | `alfred.implement(...)` async |

---

## TEMPLATE — Source Log (copy mulai sini)

```markdown
### Sources scanned (target ≥10, multi-angle)
| # | URL | Region | Tingkat bukti | Key insight |
|---|---|---|---|---|
| 1 | ... | ... | 3 (eng-blog) | ... |
| 2 | ... | ... | 5 (competitor) | ... |
...
| 10 | ... | ... | 1 (interview) | ... |

**Confidence note:** finding utama disokong sumber tingkat [1–4]? [ya/tidak]
```

---

## CONTOH TERISI (proyek contoh — riset landing v4)

```markdown
### Sources scanned (10 — primary + secondary)
| # | URL | Region | Tingkat | Key insight |
|---|---|---|---|---|
| 1 | invitato.net | Indo | 5 competitor | "First Web Invitation & QRCode in Town" — positioning hook works Indo |
| 2 | withjoy.com | US | 5 competitor | Animated feature showcase (motion = engaging) |
| 3 | zola.com | US | 5 competitor | 6-feature grid + post-wedding 20% discount |
| 4 | paperlesspost.com | US | 5 competitor | Brand partnership (Oscar de la Renta) = premium flex |
| 5 | theknot.com | US | 5 competitor | "30 years" trust track + AI vendor matching (2026 trend) |
| 6 | greenvelope.com | US | 5 competitor | "4.9/5 from 10,000+ reviews" (verifiable Trustpilot), multi-channel WhatsApp |
| 7 | minted.com | US | 5 competitor | Artist competition model, premium tier |
| 8 | bridestory.com | Indo | 5 competitor | Vendor count = trust, Indo-language |
| 9 | sebarundangan.com | Indo | 3 knowledge | WhatsApp-first sharing |
| 10 | Brides.com magazine | US | 6 editorial | Pull-quote testimonial style (cross-check) |

**Confidence note:** mayoritas tingkat 5 (competitor tear-down). Trust-signal finding disokong verifiable Trustpilot (kuat). Motion-trend = tingkat 6, label "emerging, low-confidence".
```

**Hasil:** 10 sumber → 7 pattern → critical filter → 4 adopt + 1 defer (AI post-PMF). Itu cara kerjanya: **quantity untuk angle luas, hierarchy untuk bobot kesimpulan.**
