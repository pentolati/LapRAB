# Tool: Build vs Buy vs Partner — Decision Aid

**Apa:** alat bantu keputusan bikin-sendiri / beli-vendor / kerja-sama, plus decision tree.
**Kapan dipake:** ada kebutuhan kapabilitas yang bisa dibeli/diintegrasi (SOP-SG-03, TOGAF ADM fase E — Opportunities & Solutions).
**Framework:** reversibility matrix (lock-in vendor = otomatis **Type-1**) · Well-Architected (cost/ops) · filter @senku · escalate @tata kalau Type-1.

---

## Kriteria penentu

| Pertanyaan | Condong ke |
|---|---|
| **Ini core differentiator** kita (alasan user pilih app kita)? | Ya → **Build** |
| **Vendor mature & terpercaya** ada? | Ya → Buy/Partner |
| **ROI**: building > 3 dev-month tapi commodity? | Ya → **Buy** |
| **Reversible**? Bisa keluar tanpa rombak? | Type-2 → aman beli · Type-1 → escalate Tata |
| **Lock-in tinggi** (data/format/API terkunci vendor)? | **Type-1** → wajib exit plan + ADR |
| Kebutuhan **masih unclear / hype-driven**? | → **Wait** (YAGNI) |

---

## Decision tree

```
Apakah ini CORE DIFFERENTIATOR?
├─ YA  → kebutuhan jelas?
│        ├─ YA → BUILD (di balik interface, build-for-change)
│        └─ TIDAK → WAIT (YAGNI, jangan bangun yang belum perlu)
└─ TIDAK (commodity) → vendor mature ada?
         ├─ YA → lock-in / data sensitif?
         │       ├─ tinggi → Type-1: BUY/PARTNER + exit plan + ADR + escalate @tata
         │       └─ rendah → Type-2: BUY (gas, abstract di balik interface)
         └─ TIDAK → komplementer & dua-duanya untung? 
                    ├─ YA → PARTNER
                    └─ TIDAK → BUILD minimal / WAIT
```

---

## CONTOH TERISI

### Kasus 1 — Payment gateway (Wedding App go-live)
- Core differentiator? **Tidak** (commodity). Vendor mature? **Ya** (Midtrans/Xendit).
- Building PCI-compliant > 3 dev-month + data finansial sensitif + lock-in API.
- **Verdict: BUY**, tapi **Type-1** (vendor lock + security + data finansial) → **ADR + escalate @tata**
  pilih provider & timing. Abstract di balik interface `PaymentProvider` biar swap mungkin (build-for-change).
- Filter @senku untuk shortlist provider. **Bukan diambil diam-diam** (Accountability).

### Kasus 2 — Image hosting (foto gallery undangan)
- Core differentiator? **Tidak**. Vendor mature? **Ya** (Cloudinary/S3). Lock-in? **Rendah** (file = standar).
- **Verdict: BUY** (Type-2) → gak perlu escalate, abstract di balik `ImageStore`. Prototype:
  pakai Fauxbase/asset lokal dulu (cost $0), swap ke hosting saat go-live. **WAIT** untuk infra real
  sampai ada user nyata (YAGNI).

> Keputusan + verdict diarsip di log; kasus Type-1 nyambung ke adr-template + reversibility-matrix.
