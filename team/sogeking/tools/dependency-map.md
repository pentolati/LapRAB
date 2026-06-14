# Tool: Dependency Map

**Apa:** peta visual komponen sistem + dependency eksternal — nandain **single-point-of-failure (SPOF)**, kekritisan, dan fallback tiap dependency.
**Kapan dipakai:** SOP-SG-06, sebelum handoff eksekusi ke @kakashi. Kontrol **SG-C5**. Pasangan dari risk-register — risk register = "apa bahayanya", dependency map = "di mana titik rapuhnya".
**Framework:** TOGAF ADM F (Migration Planning), AWS Well-Architected (Reliability), COBIT APO12.

**Notasi:** `[Komponen]` internal · `<<Eksternal>>` dependency luar · `⚠️ SPOF` single-point-of-failure · `Kritikalitas: H/M/L` · `Fallback: ...`

---

## TEMPLATE (copy mulai sini)

```
[App]
 ├─ [Komponen A] ──depends──> <<Dependency X>>   Kritikalitas: H · ⚠️ SPOF? · Fallback: ...
 ├─ [Komponen B] ──depends──> [Komponen C]        Kritikalitas: M · Fallback: ...
 └─ ...

SPOF list:
- <<X>> — kalau mati: <dampak> · fallback: <ada/belum> · mitigasi: <link risk AR#>
```

---

## CONTOH TERISI — Wedding Invitation App

```
[Wedding App  (React + Zustand + Chakra v2)]
 │
 ├─ [Data Layer: Entity+Service+hooks]
 │     └──depends──> <<Fauxbase (driver local: memory)>>
 │            Kritikalitas: H · ⚠️ SPOF (semua data lewat sini)
 │            Fallback: persist memory → prototype OK; produksi butuh driver persistent (Type-1, ADR dulu)
 │
 ├─ [Gift Wishlist + Notif]
 │     ├──depends──> [GiftService.pollClaims()]  Kritikalitas: H · Fallback: manual refresh
 │     └──(ditolak)──> <<Push vendor eksternal>>  ❌ dihindari (UU PDP, ADR-001) · pakai polling
 │
 ├─ [Foto / Galeri Undangan]
 │     └──depends──> <<Image host (CDN gratis)>>
 │            Kritikalitas: M · ⚠️ SPOF (foto hilang kalau CDN mati)
 │            Fallback: default simpan base64/blob di Fauxbase via ImageStore interface (AR2)
 │
 └─ [Share Undangan]
       └──depends──> <<WA share link (wa.me)>>
              Kritikalitas: L · Fallback: copy-link manual (degradasi mulus, bukan SPOF kritis)

SPOF list:
- <<Fauxbase>> — kalau mati: app mati total. Prototype acceptable (memory). Produksi: butuh persist
  driver → keputusan Type-1, escalate Tata + ADR sebelum migrasi (Data SACRED).
- <<Image host>> — kalau mati: foto hilang. Fallback: simpan di Fauxbase via ImageStore (AR2, Tinggi).
- <<WA link>> — bukan SPOF kritis, fallback copy-link mulus.
```

> Dependency map ini nunjukin **Fauxbase = SPOF terbesar** (acceptable buat prototype, Type-1 buat produksi) dan **image host = risiko nyata** (ada fallback). Dilampirkan bareng risk-register ke Architecture Review (SG-C5) — **no single-point dependency tak-terpetakan** sebelum handoff @kakashi.
