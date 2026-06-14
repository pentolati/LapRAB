# SOP-SG-01 — Target / Solution Architecture

| | |
|---|---|
| **Kode** | SOP-SG-01 |
| **Pemilik** | Sogeking (Solution Architect) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | TOGAF ADM (fase A/B/C), ISO/IEC 42010, [tools/target-arch-template.md](../tools/target-arch-template.md), [tools/c4-diagram-guide.md](../tools/c4-diagram-guide.md) |
| **COBIT** | APO03 (Managed Enterprise Architecture) |

## 1. Tujuan
Memastikan setiap fitur/app baru atau perubahan arah arsitektur punya **target architecture (future state)** yang selaras roadmap, terdokumentasi dengan diagram C4 + viewpoint ISO 42010, sudah **reality-check** ke eksekusi, dan lolos **Pre-Tata Gate** sebelum jadi acuan tim.

## 2. Ruang Lingkup
- **Berlaku:** app baru, fitur lintas-komponen, perubahan arah arsitektur level-solusi (lintas-fitur/app), integrasi sistem baru.
- **Tidak berlaku:** perubahan implementasi lokal & reversible dalam satu komponen (cukup di code review @kakashi), styling/UX murni (jalur @bulma).

## 3. Definisi & Istilah
- **Target architecture** — gambaran arsitektur "tujuan" (future state) yang mau dicapai, bukan kondisi sekarang.
- **C4** — model diagram 4-level: Context → Container → Component → Code.
- **Viewpoint (ISO 42010)** — sudut pandang per *concern* stakeholder (mis. data, security, deployment).
- **Kapabilitas** — kemampuan bisnis/produk yang harus didukung arsitektur (TOGAF fase B).

## 4. Referensi
TOGAF ADM fase **A** (Architecture Vision), **B** (Business Architecture), **C** (Information Systems — Data + App). ISO/IEC 42010 (deskripsi arsitektur). Mandate Tata: **F-1 Backend ALMIGHTY**, **F-2 Frontend BOOMER-PROOF**, **Data SACRED** (never overwrite, always merge). Kontrol terkait: PLAYBOOK §4.4 (tanpa-kode), reversibility (SOP-SG-04).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Align roadmap & kapabilitas | Sogeking | Sogeking | @lelouch | tim |
| Susun target architecture + C4 | Sogeking | Sogeking | @kakashi | tim |
| Joint data architecture | Sogeking | Sogeking | @shikamaru | tim |
| Reality-check feasibility | @kakashi | Sogeking | @kakashi | tim |
| Lock arsitektur visible/biaya/skala | — | **@tata** | Sogeking, @kakashi | tim |

## 6. Prosedur

### 6.1 Align arah (TOGAF A/B)
- 6.1.1 **Align roadmap** ke @lelouch — arsitektur ngikut arah produk, bukan sebaliknya. Exit kalau scope produk belum jelas → balik ke @lelouch (jangan desain di atas asumsi).
- 6.1.2 **Map kapabilitas** produk → kebutuhan arsitektur (fase B). Catat kapabilitas yang *belum* didukung sebagai driver.

### 6.2 Susun target architecture (TOGAF C)
- 6.2.1 Pakai [target-arch-template](../tools/target-arch-template.md): tulis future state, komponen, batas sistem, pola integrasi.
- 6.2.2 Gambar **C4** per [c4-diagram-guide](../tools/c4-diagram-guide.md) — minimal Context + Container. Contoh: *wedding invitation app* → Container = React+Zustand+Chakra v2 (FE), Fauxbase (data layer), modul notif wishlist kado.
- 6.2.3 **Joint data architecture** dengan @shikamaru — struktur & alur data wajib comply **Data SACRED** (merge, no overwrite, no hard delete).
- 6.2.4 Susun **viewpoint ISO 42010** per concern: data, security, deployment, UX (joint @bulma). **Decision point:** ada concern stakeholder yang belum punya view? → lengkapi sebelum lanjut.

### 6.3 Reality-check & handoff
- 6.3.1 **Reality-check ke @kakashi** (anti ivory-tower) — feasibility eksekusi, pola code-level. Exit kalau infeasible → revisi desain, jangan lock.
- 6.3.2 Pastikan mandate **F-1/F-2** terwujud di arsitektur (BE lengkap & audit-trail; FE boomer-proof 3-detik-clear).
- 6.3.3 **Decision point:** lock ngaruh biaya/skala/UX (🟡) atau Type-1 (🔴)? → escalate @tata via Pre-Tata Gate @kakashi, tunggu sign-off. Reversible internal (🟢) → lanjut.
- 6.3.4 Arsipkan target architecture + diagram ke `arch/<scope>.md` (versioned), broadcast ke tim.

## 7. Pengecualian
- **Spike / POC eksploratif:** boleh desain ringan tanpa C4 penuh, **tapi** sebelum di-promote jadi acuan produksi wajib lewat SOP ini lengkap. Tandai status `Draft`.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Target architecture + diagram | `arch/<scope>.md` | Versioned, permanen |
| C4 source | `arch/` | Living doc |
| Sign-off lock (🟡/🔴) | ADR / `log.md` | Permanen |
| Verdict reality-check @kakashi | `log.md` | Per proyek |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Coverage target architecture | # app/fitur lintas-komponen ber-target arch ÷ total | 100% |
| Rework arsitektur | # target arch diulang krn salah arah ÷ total | ↓ tiap periode |
| Reality-check sebelum lock | # desain di-lock setelah reality-check @kakashi ÷ total | 100% |
| Surprise scaling/cost di prod | # gap arsitektur muncul di prod | 0 |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
