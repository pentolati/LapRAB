# Tool: C4 Diagram Guide (ASCII / Markdown)

**Apa:** panduan gambar arsitektur pakai model C4 dalam ASCII/markdown — no tool eksternal, langsung commit ke repo.
**Kapan dipake:** seksi "Component & Integration View" di target-arch-template (SOP-SG-01).
**Framework:** C4 model (Simon Brown) · ISO/IEC 42010 (view sebagai realisasi viewpoint).

---

## 4 level C4 — pakai yang seperlunya

| Level | Jawab pertanyaan | Kapan gambar |
|---|---|---|
| **1. Context** | Sistem ini di mana, siapa pakainya, ngobrol sama apa? | Selalu (1 diagram per app) |
| **2. Container** | App dipecah jadi unit deploy/runtime apa (SPA, data layer, service)? | Selalu — **paling berguna** |
| **3. Component** | Di dalam 1 container, modul/komponen apa? | Kalau container kompleks |
| **4. Code** | Class/struktur kode | **Hampir gak pernah** — kode = sumber kebenaran |

**Aturan:** mulai dari Context, turun seperlunya. **YAGNI** — jangan gambar level 4 buat prototype.

---

## Konvensi ASCII

- Kotak `[ ]` = container/komponen · `( )` = orang/aktor · `<DB>` = data store
- Panah `--->` = arah dependency/data flow, kasih label kata kerja
- Label teknologi di kurung: `[Nama : React]`

---

## CONTOH — Container Diagram (Wedding App, Fauxbase React)

```
            ( Tamu Undangan )            ( Pemilik Undangan )
                   |                            |
                   | buka link, RSVP            | edit config, lihat RSVP
                   v                            v
   +----------------------------------------------------------+
   |  Wedding SPA  [ React + Zustand + Chakra v2 ]            |
   |                                                          |
   |   [ InvitationView ] [ RSVPForm ] [ WishlistPanel ]      |
   |          \              |              /                 |
   |           \             |             /                  |
   |            v            v            v                   |
   |        [ Fauxbase Services : Service class per entity ]  |
   +----------------------------|-----------------------------+
                                | read / merge (never overwrite)
                                v
              <Fauxbase local driver : persist=memory>
              entity: Invitation · Guest · RSVP · GiftWish · GiftClaim
                                |
                                | notif kado (Type-2, swappable)
                                v
                       [ WhatsApp deep-link ]
```

**Baca diagram ini:** 2 aktor → 1 SPA container (3 komponen UI) → Fauxbase Service layer →
local driver store. Notif keluar via WhatsApp link. Driver local = boundary swap ke backend
real nanti (Type-2 reversible).

---

## Checklist sebelum commit diagram
- [ ] Ada **legend** (kotak/panah/store artinya apa)
- [ ] Tiap panah punya **label kata kerja** (bukan garis telanjang)
- [ ] Teknologi tiap container ke-tulis (stack lock: React/Zustand/Chakra v2/Fauxbase)
- [ ] **Trust boundary** / titik integrasi eksternal ditandai (buat security review @l)
- [ ] Konsisten sama component view di target-arch-template
