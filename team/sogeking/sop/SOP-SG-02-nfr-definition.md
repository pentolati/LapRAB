# SOP-SG-02 — NFR Definition

| | |
|---|---|
| **Kode** | SOP-SG-02 |
| **Pemilik** | Sogeking (Solution Architect) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ISO/IEC 25010, AWS/Azure Well-Architected (5 pilar), OWASP Top 10, UU PDP, [tools/nfr-spec-template.md](../tools/nfr-spec-template.md), [tools/well-architected-checklist.md](../tools/well-architected-checklist.md) |
| **COBIT** | APO03 (Managed Enterprise Architecture), EDM02 (Ensured Benefits Delivery) |

## 1. Tujuan
Memastikan tiap fitur high-stakes punya **NFR (Non-Functional Requirement) yang terukur** — di-define **SEBELUM** build (kontrol **SG-C2**) — silang antara 8 karakteristik **ISO 25010** dan 5 pilar **Well-Architected**, biar gak ada surprise scaling/security/cost di produksi.

## 2. Ruang Lingkup
- **Berlaku:** fitur high-stakes (sentuh data sensitif, biaya skala, perf user-facing kritikal, atau Type-1), app baru.
- **Tidak berlaku:** fitur low-stakes reversible & internal (NFR cukup pakai default guardrail tim).

## 3. Definisi & Istilah
- **NFR** — "seberapa bagus" sistem (cepat/aman/skalabel/tahan), bukan "apa fiturnya".
- **High-stakes** — fitur dgn dampak biaya/skala/security/UX besar atau irreversible.
- **RTO / RPO** — Recovery Time Objective (berapa lama boleh down) / Recovery Point Objective (berapa banyak data boleh hilang).
- **Cost envelope** — batas biaya yang disepakati buat fitur pada skala target.

## 4. Referensi
ISO/IEC 25010 (8 karakteristik mutu). Well-Architected (reliability, security, cost, performance, operational excellence). OWASP Top 10 + UU PDP (security & privacy-by-design). EDM02 (value vs cost). Mandate Tata: **F-1 Backend ALMIGHTY**, **F-2 Frontend BOOMER-PROOF**, **no auto-everything-silent** (semua eksplisit + logged).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Identifikasi fitur high-stakes | Sogeking | Sogeking | @lelouch | tim |
| Set target NFR ukur (ISO 25010 × Well-Architected) | Sogeking | Sogeking | @kakashi | tim |
| Feasibility test/ops NFR | @l, @levi | Sogeking | @l, @levi, @kakashi | tim |
| NFR yang ngubah scope/biaya | — | **@tata** | Sogeking | tim |

## 6. Prosedur

### 6.1 Identifikasi
- 6.1.1 Tentukan apakah fitur **high-stakes** (cek: data sensitif? biaya skala? perf kritikal? Type-1?). **Decision point:** low-stakes → pakai guardrail default, keluar SOP. High-stakes → lanjut.

### 6.2 Set target terukur (ISO 25010 × Well-Architected)
- 6.2.1 Pakai [nfr-spec-template](../tools/nfr-spec-template.md) + [well-architected-checklist](../tools/well-architected-checklist.md). Set **angka**, bukan kata sifat:
  - **Performance efficiency** — latency (mis. p95 < 300ms), throughput.
  - **Reliability** — uptime (mis. 99.5%), RTO/RPO.
  - **Security** — comply OWASP Top 10 + UU PDP (consent, data residency, privacy-by-design).
  - **Cost** — cost envelope per skala target.
  - **Maintainability** — coupling / change cost rendah.
- 6.2.2 Contoh *wedding app — wishlist kado + notif*: p95 notif < 2 dtk, RPO = 0 buat data hadiah (**Data SACRED**, never overwrite), consent UU PDP buat data tamu, cost envelope di tier free.
- 6.2.3 **Decision point:** ada karakteristik ISO 25010 tanpa target ukur? → lengkapi atau tandai *out-of-scope* dgn alasan. Gak boleh ngambang.

### 6.3 Define-before-build & handoff
- 6.3.1 **Kontrol SG-C2:** NFR spec wajib selesai **sebelum** dev mulai. Exit kalau build sudah jalan tanpa NFR → stop, define dulu (retroaktif = pelanggaran kontrol).
- 6.3.2 **Handoff feasibility** ke @l (target bisa di-test?) & @levi (realistis vs kapasitas ops/infra?). Revisi target kalau infeasible.
- 6.3.3 **Decision point:** NFR ngubah scope/biaya (🟡)? → rekomendasi ke @tata via Pre-Tata Gate. Kalau gak → arsipkan & broadcast.

## 7. Pengecualian
- **Incident-driven NFR:** kalau gap NFR ketahuan dari incident (input @l/@levi), boleh set target cepat untuk contain, NFR spec formal dilengkapi **< 48 jam**.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| NFR spec | `arch/nfr-<feature>.md` | Permanen |
| Well-Architected checklist | `arch/` / `log.md` | Per fitur |
| Feasibility verdict @l/@levi | `log.md` | Per fitur |
| Sign-off NFR yg ubah scope | ADR / `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| NFR define-before-build | # fitur high-stakes ada NFR sebelum build ÷ total | 100% |
| NFR terukur | # NFR pakai target angka ÷ total NFR | 100% |
| Surprise scaling/security/cost gap di prod | # gap NFR muncul di prod | 0 |
| Coverage security (OWASP+UU PDP) | # fitur high-stakes ada review security ÷ total | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
