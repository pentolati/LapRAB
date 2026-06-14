# Tool: Target / Solution Architecture Template

**Apa:** kerangka dokumen Target/Solution Architecture — struktur baku biar tiap fitur/app punya peta arsitektur yang bisa ditelusur, bukan vibes.
**Kapan dipake:** fitur/app baru atau arah arsitektur berubah (SOP-SG-01).
**Framework:** TOGAF ADM fase A/B/C · ISO/IEC 42010 (stakeholder, concern, viewpoint, view).
**Output:** simpen di `team/sogeking/arch/<scope>.md` (versioned, audit record).

---

## TEMPLATE (copy mulai sini)

```markdown
# Target Architecture: <scope>

**Author:** Sogeking · **Status:** Draft / Reviewed / Locked
**Date:** YYYY-MM-DD · **Consulted:** @shikamaru, @kakashi, @lelouch · **Reversibility:** Type 1 / Type 2

## 1. Konteks & Scope (TOGAF A)
<masalah bisnis yang dipecahkan, batas IN-scope vs OUT-of-scope — 1 paragraf>

## 2. Stakeholder & Concern (ISO 42010)
| Stakeholder | Concern utama |
|---|---|
| @tata (CEO/HoP) | <biaya, time-to-market, F-1/F-2> |
| @lelouch (PM) | <fit roadmap & PRD> |
| User akhir | <BOOMER-PROOF, 3-detik-clear> |

## 3. Architecture Vision (TOGAF A)
<gambaran besar arah arsitektur — 2-3 kalimat, future state>

## 4. Capability Map (TOGAF B)
<kapabilitas produk yang didukung → kebutuhan arsitektur, bullet>

## 5. Component & Integration View (TOGAF C-App)
<komponen utama + pola integrasi. Link ke c4-diagram-guide untuk diagram Container>

## 6. Data View (TOGAF C-Data) — joint @shikamaru
<entity utama, ownership, aturan Data SACRED (merge bukan overwrite)>

## 7. NFR Summary
<link ke nfr-spec-template terisi: target perf/reliability/security/cost/maintainability>

## 8. Reversibility Notes
<keputusan Type-1 (escalate Tata) vs Type-2 (gas), exit plan kalau ada lock-in>

## 9. Open Decisions → ADR
- [ ] <keputusan> → ADR-NNN (status)
```

---

## CONTOH TERISI (mini — Wedding Invitation App)

```markdown
# Target Architecture: Wedding Invitation App (Fase 1)

**Author:** Sogeking · **Status:** Reviewed
**Date:** 2026-05-29 · **Consulted:** @shikamaru, @kakashi, @lelouch · **Reversibility:** Type 2 (mostly)

## 1. Konteks & Scope
Aplikasi web (contoh ilustrasi) — beberapa modul interaktif, form input, dan fitur transaksi.
IN: client app + data layer prototype. OUT: payment real, kirim WA blast otomatis.

## 2. Stakeholder & Concern
| Stakeholder | Concern |
|---|---|
| @tata | freemium konversi, BOOMER-PROOF, palette pink/mauve/sage |
| Tamu undangan | buka link → langsung jelas <3 detik, RSVP 1 tap |
| Pemilik undangan | wishlist kado, lihat siapa RSVP |

## 3. Architecture Vision
SPA React config-driven (tiap komponen on/off + editable), data lewat Fauxbase
local driver — zero backend ops untuk prototype, gampang swap ke backend real nanti.

## 4. Capability Map
- Tampilkan undangan (config-driven) · RSVP capture · Wishlist + notif · Gallery

## 5. Component & Integration View
React + Zustand (UI state) + Chakra v2 (BOOMER-PROOF) + Fauxbase Service per entity.
Notif kado → link WhatsApp (lihat trade-off-matrix). Diagram → c4-diagram-guide.

## 6. Data View — joint @shikamaru
Entity: Invitation, Guest, RSVP, GiftWish, GiftClaim. **Data SACRED:** RSVP & claim
selalu append/merge, GiftClaim never overwrite (R-DATA-MERGE).

## 7. NFR Summary
Lihat arch/nfr-rsvp-wishlist.md — target render <1.5s 3G, RSVP idempotent.

## 8. Reversibility Notes
Fauxbase local = Type-2 (swap ke backend real via interface). Pilihan kanal notif = Type-2.

## 9. Open Decisions → ADR
- [x] Kanal notif kado → ADR-002 (WhatsApp link, Accepted)
- [ ] Backend real saat go-live → ADR-00X (pending Fase 2)
```

> Catatan: dokumen ini **input ke Architecture Review** (SOP-SG-05) sebelum di-lock & handoff ke @kakashi.
