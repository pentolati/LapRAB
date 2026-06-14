# Tool: MoSCoW + RICE Prioritization

**Apa:** dua alat prioritas — **MoSCoW** (in/out scope MVP) & **RICE** (ranking kuantitatif banyak fitur).
**Kapan dipake:** backlog >1 kandidat, cut scope MVP, fitur rebut resource (SOP-LL-03).
**Framework:** MoSCoW (DSDM), RICE (Intercom).
**Kenapa:** prioritas **by skor, bukan feeling/HiPPO**. Tradeoff terdokumentasi (kontrol LL-C3).

---

## 1. MoSCoW — buat scope MVP (in/out)

| Kelas | Arti | Aturan |
|---|---|---|
| **Must** | Tanpa ini, gak bisa launch | Kalau "semua Must" → lu belum prioritas. Batasi! |
| **Should** | Penting, tapi bisa nyusul rilis berikutnya | |
| **Could** | Nice-to-have kalau ada waktu | |
| **Won't (now)** | Eksplisit gak sekarang (bukan "lupa", tapi sengaja) | cegah scope creep |

## 2. RICE — buat ranking kuantitatif

```
RICE = (Reach × Impact × Confidence) ÷ Effort

Reach      : estimasi user kena per kuartal
Impact     : 0.25 minimal · 0.5 low · 1 medium · 2 high · 3 massive
Confidence : 50% low · 80% med · 100% high
Effort     : person-month (CONSULT @kakashi)
```

| Fitur | Reach | Impact | Conf | Effort | **RICE** | Rank |
|---|---|---|---|---|---|---|
| A | ... | ... | ... | ... | (R×I×C)/E | |

> Skor tinggi = prioritas. Tapi **sanity check**: ada bias? sponsor-heavy (HiPPO)? recency?

---

## CONTOH TERISI (Proyek-Contoh — urutan probe 8 modul, Web App E-Commerce)

**Konteks:** harus nentuin urutan gali requirement 8 modul. Pakai logika MoSCoW (mana foundation = Must duluan) + complexity sebagai proxy effort.

| # | Modul | Kelas | Rationale urutan |
|---|---|---|---|
| C1 | User Account | **Must** | Foundation — siapa yang transaksi, gak ada ini app gak berarti |
| C2 | Product Catalog | **Must** | Foundation — apa yang dijual (info inti app) |
| C3 | Cart | **Must** | Core engagement — user butuh nampung pilihan sebelum bayar |
| C4 | Wishlist | **Should** | Enhance, gak blocking |
| C5 | Product Gallery | **Should** | Enhance pengalaman, free/premium gate |
| C6 | Review | **Should** | Engagement, ada auto-behavior (perlu hati-hati) |
| C7 | Order History | **Could** | Value-add, no payment gateway (ringan) |
| C8 | Checkout + Payment ⭐ | **Could** (probe **LAST**) | USP tapi **paling kompleks** (reserve→bayar→konfirmasi + auto-release + payment-webhook POC) — butuh konteks 7 modul lain dulu |

**Tradeoff articulate:** probe foundation (siapa+apa+keranjang) duluan karena tanpa itu engagement & USP gak ada konteks. USP checkout+payment di-**last** bukan karena gak penting — justru paling kompleks, jadi butuh semua konteks lain ke-lock dulu biar edge case-nya ketebak (auto-release, payment-webhook reliability).

> Hasil: 8/8 modul LOCKED satu-satu (4 pertanyaan detail/modul via AskUserQuestion). Urutan by rationale eksplisit, bukan random. Itu prioritas Lelouch — **selalu ada reason**.
