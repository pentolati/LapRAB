# Tool: Competitor Analysis Framework

**Apa:** kerangka bedah kompetitor — feature matrix + pricing tear-down + positioning + gap analysis. **Deep tear-down, bukan glance.**
**Kapan dipake:** sebelum lock value-prop / pricing / fitur USP, atau Lelouch/Tata minta positioning (SOP-SK-02).
**Framework:** COBIT APO04, evidence hierarchy (competitor = tingkat 5, cross-check).

---

## Struktur (4 bagian)

### 1. Inventory
5–10 kompetitor langsung + 3 adjacent. Campur lokal + global.

### 2. Feature Matrix
Kompetitor × fitur, tandai **presence + quality** (bukan cuma ✓/✗).

### 3. Pricing Tear-down
Tier · gating · free-trial hook · conversion mechanic.

### 4. Gap Analysis
Pola berhasil + yang belum ada → kandidat diferensiasi → lewat **6Q filter**.

---

## TEMPLATE (copy mulai sini)

```markdown
## Competitor Analysis — [space / topik]

### 1. Inventory
Langsung: [c1, c2, c3, c4, c5] · Adjacent: [a1, a2, a3]

### 2. Feature Matrix
| Fitur | C1 | C2 | C3 | C4 | C5 | Kita |
|---|---|---|---|---|---|---|
| [fitur A] | ✅ kuat | ⚠️ ada-tapi-lemah | ❌ | ✅ | ❌ | ? |

### 3. Pricing Tear-down
| Kompetitor | Free tier | Paid tier | Gating | Conversion hook |
|---|---|---|---|---|
| C1 | ... | ... | ... | ... |

### 4. Trust signal audit (verifiable vs fluff)
| Kompetitor | Klaim | Verifiable? |
|---|---|---|
| C1 | "X reviews" | ✅ Trustpilot link |

### 5. Gap Analysis
| Gap | Peluang kita | 6Q verdict |
|---|---|---|
| ... | ... | adopt / defer |

### 6. References (saved untuk @bulma / @lelouch)
| URL | Why relevant |
|---|---|
```

---

## CONTOH TERISI (proyek contoh — wedding invitation landscape)

```markdown
### 1. Inventory
Langsung Indo: Invitato, Wedew, Bridestory, Sebarundangan
Global: Joy (withjoy), Zola, Greenvelope, Paperless Post, Minted, theKnot

### 2. Feature Matrix (excerpt)
| Fitur | Invitato | Greenvelope | Joy | Proyek-Contoh |
|---|---|---|---|---|
| Web invitation | ✅ kuat | ✅ | ✅ | ✅ |
| WhatsApp share | ⚠️ generic | ✅ native | ❌ | ⚠️ FAQ-only (perbaiki) |
| Wishlist marketplace | ❌ | ❌ | ⚠️ registry US | ✅ USP |
| Subtle motion | ⚠️ | ✅ envelope anim | ✅ | ❌ static (perbaiki) |

### 4. Trust signal audit
| Kompetitor | Klaim | Verifiable? |
|---|---|---|
| Greenvelope | "4.9/5 from 10,000+ reviews" | ✅ Trustpilot |
| theKnot | "30 years of I do" | ✅ history |
| **Proyek-Contoh v3** | "500+ pasangan terbantu" | ❌ FAKE — evidence violation, Tata akan catch |

### 5. Gap Analysis
| Gap | Peluang | 6Q verdict |
|---|---|---|
| Wishlist marketplace + notif | USP first-mover Indo | ✅ adopt (sudah core) |
| Genuine trust signal | Replace fake stat → founded 2026, made in Bandung, first-mover | ✅ MANDATORY |
| AI vendor matching | theKnot punya | ❌ defer post-PMF (premature, T1) |
```

**Hasil:** 10 kompetitor → ketemu **fake-stats Proyek-Contoh v3** (kontrol SK-C5 anti-fake-stat) + gap WhatsApp & motion. Trust audit nangkep evidence violation **sebelum** Tata catch. Itu nilai tear-down deep vs glance.
