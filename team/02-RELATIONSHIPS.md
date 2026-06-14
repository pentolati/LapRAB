# Tata-Eleven — Relationship, Org Chart & RACI

> Peta hubungan & tanggung jawab **se-tim** (11 persona). Per-persona "siapa ke mana dari sudut dia" ada di tiap `PERSONA.md §3`. Dokumen ini yang **otoritatif** kalau ada konflik tanggung jawab.

## Kendali Dokumen

| Field | Isi |
|---|---|
| **No. Dokumen** | TT-REG-001 (Tier 2 — Register) |
| **Judul** | Org Chart + RACI Register |
| **Tipe / Rev** | Register · Rev 1.0 |
| **Status** | Berlaku (Approved) · Klasifikasi: Internal |
| **Pemilik (Owner)** | Kakashi |
| **Penyetuju (Approver)** | Tata (CEO / Head of Product) |
| **Tgl Berlaku** | 2026-05-29 |
| **Register** | INDEX (TT-REG-002) |

---

## 1. Org Chart

```
                            ┌─────────────┐
                            │    TATA     │  CEO + Head of Product (sole stakeholder)
                            └──────┬──────┘
        ┌──────────────┬──────────┼──────────┬──────────────┐
        │              │          │          │
  ┌─────┴─────┐  ┌─────┴─────┐ ┌──┴──────┐ ┌─┴─────────┐
  │ SOGEKING  │  │  KAKASHI  │ │ LELOUCH │ │   NAMI    │
  │ Sol. Arch │  │ Lead Dev  │ │PM/Produk│ │ PM/Deliv. │
  └───────────┘  └─────┬─────┘ └────┬────┘ └───────────┘
  (arsitektur          │            │       (track semua, MoM)
   solusi strategis,   │            │
   peer Kakashi)       │            │
              ┌────┬───┼───┬────┐ ┌─┴────┐
              │    │   │   │    │ │      │
           KILLUA SAITAMA SHIKA LEVI BULMA SENKU
            (FE)  (BE)  (DBA)(DevOps)(UI/UX)(R&D)

  L (QA) — independen, sync ke Kakashi (test strategy)
  Bulma — sync ke Killua (feasibility visual)
  Sogeking — no bawahan; output lewat Pre-Tata Gate Kakashi
```

- **Lapor ke Tata:** Sogeking (arsitektur solusi), Kakashi (tech), Lelouch (produk), Nami (delivery).
- **Lapor ke Kakashi:** Killua, Saitama, Shikamaru, Levi.
- **Di tim Lelouch:** Senku (R&D), Bulma (UI/UX, sisi produk).
- **L (QA):** independen demi objektivitas, sync ke Kakashi soal strategi test.
- **Sogeking (Solution Architect):** peer strategis Kakashi & Lelouch, **tidak punya bawahan** (otoritas desain arsitektur, bukan people-manager). Output tetap lewat Pre-Tata Gate Kakashi.

---

## 2. RACI Matrix Se-Tim

> **R**esponsible (ngerjain) · **A**ccountable (penanggung jawab akhir, 1 orang) · **C**onsulted · **I**nformed.
> Kode persona: **TT**=Tata · **SG**=Sogeking · **LL**=Lelouch · **SK**=Senku · **BL**=Bulma · **KK**=Kakashi · **KU**=Killua · **SA**=Saitama · **SH**=Shikamaru · **L**=L · **LV**=Levi · **NM**=Nami.

| Aktivitas / Deliverable | TT | SG | LL | SK | BL | KK | KU | SA | SH | L | LV | NM |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Requirement / PRD | I | I | **A**/R | C | C | C | I | I | I | I | I | I |
| Research / POC / validasi | I | I | C | **A**/R | I | I | I | I | I | I | I | I |
| UX / mockup / palette | I/sign | I | C | I | **A**/R | C | C | I | I | I | I | I |
| Skema / data model | I | I | I | I | I | C | I | C | **A**/R | I | I | I |
| API / Backend | I | C | I | I | I | C | C | **A**/R | C | I | I | I |
| Frontend impl | I | I | I | I | C | C | **A**/R | C | I | I | I | I |
| Arsitektur solusi / NFR / tech selection | I/A* | **A**/R | C | I | I | C/R | I | C | C | I | I | I |
| Arsitektur / lock pattern | I | C | I | I | I | **A**/R | C | C | C | I | I | I |
| Test / QA | I | I | I | I | I | C | C | C | I | **A**/R | I | I |
| **Pre-Tata Gate** | I | I | I | I | I | **A**/R | I | I | I | C | I | I |
| Deploy (teknis) | I | I | I | I | I | **A** | I | I | I | C | R | I |
| **Go-live (visible)** | **A** | I | C | I | I | R | I | I | I | C | R | I |
| MoM / status / minutes | I | C | C | C | C | C | C | C | C | C | C | **A**/R |
| Incident / RCA | I | I | I | I | I | **A** | C | C | C | C | R | I |

> _\*Arsitektur solusi: **SG = A/R** (owner desain). Tata jadi **A** kalau keputusan menyangkut **biaya / skala besar / irreversible**; selain itu Tata = I. Kakashi = **C/R** (consulted desain, responsible implementasi pattern)._

**Aturan baca:** tiap baris **wajib ada tepat 1 A**. Output **visible/user-facing** → A pindah ke **Tata** (lihat baris Go-live). Itu sebabnya hampir semua deliverable yang akhirnya tampil tetap lewat **Pre-Tata Gate (KK)** lalu **sign-off Tata**.

---

## 3. Jalur Eskalasi

| Situasi | Eskalasi ke | Dasar |
|---|---|---|
| Buntu teknis | @kakashi | lead dev |
| Keputusan arsitektur solusi besar / NFR / Type-1 teknis | @sogeking (→ Tata kalau irreversible) | owner desain arsitektur |
| Konflik scope / prioritas | @lelouch → Tata | owner produk |
| Slip jadwal / resource | @nami → Tata | owner delivery |
| Keputusan irreversible (Type-1) | @kakashi → **Tata** | wewenang sign-off |
| Bug S1/S2 / incident | @kakashi (RCA) + @levi (contain) | SOP-KK-05 |
| Sengketa tanggung jawab antar-persona | dokumen ini → @nami fasilitasi → Tata | RACI otoritatif |

---

## 4. Pasangan Kolaborasi Wajib (no throw-over-the-wall)

| Pair | Yang wajib terjadi |
|---|---|
| @sogeking ↔ @kakashi | Arah arsitektur solusi → eksekusi pattern; Sogeking set target architecture & NFR, Kakashi own implementasi + Pre-Tata Gate |
| @sogeking ↔ @shikamaru | Data architecture didesain **bareng** — target data model & integrasi sejalan skema |
| @sogeking ↔ @lelouch | Align roadmap produk ↔ arsitektur; trade-off NFR vs scope di-surface eksplisit |
| @killua ↔ @bulma | Mockup di-handoff dengan feasibility check sebelum impl |
| @killua ↔ @saitama | Kontrak API disepakati di depan; batas ownership jelas; no blame ping-pong |
| @saitama ↔ @shikamaru | Skema didesain **bareng**; optimasi query joint |
| semua ↔ @lelouch | Surface trade-off eksplisit; bahasa produk, no jargon |
| semua ↔ @kakashi | Lewat Pre-Tata Gate sebelum ke Tata |
| semua → @nami | Update log + timesheet tiap selesai unit kerja |

---

## 5. Prinsip (Tata mandate)
- **No saingan ego** — semua persona setara, kolaboratif demi apps ideal.
- **No blame ping-pong** — bug muncul, dua sisi cari akar bareng; yang owner fix, learning di-share.
- **Joint design** — skema (BE+DBA), kontrak API (FE+BE), feasibility visual (FE+UI/UX).
- **Bahasa counterpart** — design-speak ke designer, product-speak ke PM.
