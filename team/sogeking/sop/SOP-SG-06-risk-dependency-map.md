# SOP-SG-06 — Architecture Risk & Dependency Map

| | |
|---|---|
| **Kode** | SOP-SG-06 |
| **Pemilik** | Sogeking (Solution Architect) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | TOGAF ADM (F — Migration Planning), ISO/IEC 25010, [tools/risk-register.md](../tools/risk-register.md), [tools/dependency-map.md](../tools/dependency-map.md) |
| **COBIT** | APO03 (Managed Enterprise Architecture) |

## 1. Tujuan
Memastikan **setiap arsitektur punya risk register + dependency map sebelum handoff eksekusi ke @kakashi**, sehingga **0 surprise scaling/security/cost gap di prod**. Risiko & ketergantungan (termasuk single-point) ter-petakan eksplisit dengan owner mitigasi, bukan ditemukan saat incident.

## 2. Ruang Lingkup
- **Berlaku:** semua arsitektur solusi yang akan **di-handoff ke eksekusi** — fitur high-stakes, perubahan lintas sistem, migrasi/transisi arsitektur.
- **Tidak berlaku:** pola reversible-lokal sepele tanpa dependency lintas sistem & tanpa implikasi skala/security/cost.

## 3. Definisi & Istilah
- **Risk register** — daftar risiko arsitektur: deskripsi, likelihood, impact, rating, owner mitigasi.
- **Dependency map** — peta ketergantungan antar komponen/sistem/vendor, termasuk **single-point dependency**.
- **Single-point dependency** — titik tunggal yang kalau gagal → seluruh sistem terdampak (no failover).
- **Likelihood × Impact** — rating risiko = kemungkinan terjadi × dampak bila terjadi.

## 4. Referensi
TOGAF ADM fase **F** (Migration Planning — urutan transisi ke target), ISO/IEC 25010 (reliability/security/performance), OWASP + UU PDP (security/privacy/data residency), mandate Tata (Data SACRED, no surprise). Kontrol internal **SG-C5** (risk register wajib di handoff).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Enumerate risiko arsitektur | Sogeking | Sogeking | @levi, @shikamaru | tim |
| Rating likelihood × impact + owner mitigasi | Sogeking | Sogeking | @levi (ops), @shikamaru (data) | tim |
| Map dependency (incl single-point) | Sogeking | Sogeking | @kakashi, @levi | tim |
| Handoff eksekusi + risk register | Sogeking | Sogeking | — | **@kakashi** |

## 6. Prosedur

### 6.1 Enumerasi risiko
- 6.1.1 Daftar risiko arsitektur per kategori ([risk-register](../tools/risk-register.md)): **scaling** (premature/under-provision), **security** (OWASP + UU PDP / data residency), **cost** (budget envelope, vendor commitment), **single-point dependency**.
- 6.1.2 Tarik bukti gap dari sumber: @l (test/perf pain), @levi (incident/ops reality), @shikamaru (data).

### 6.2 Rating & mitigasi
- 6.2.1 Rating tiap risiko: **likelihood × impact** → prioritas.
- 6.2.2 Tetapkan **owner mitigasi** + aksi mitigasi per risiko. **Exit:** tiap risiko rating tinggi **wajib** punya owner + mitigasi — kalau belum, belum boleh handoff.

### 6.3 Dependency mapping
- 6.3.1 Petakan dependency antar komponen/sistem/vendor ([dependency-map](../tools/dependency-map.md)).
- 6.3.2 **Decision point:** ada **single-point dependency**? → tandai eksplisit + mitigasi (failover / exit plan). Vendor lock-in → klasifikasi **Type-1**, escalate via SOP-SG-04.

### 6.4 Handoff
- 6.4.1 **Lampirkan risk register + dependency map ke handoff** (kontrol **SG-C5**).
- 6.4.2 Handoff ke **@kakashi** dengan **risiko eksplisit** disebutkan — no throw-over-the-wall, bahasa counterpart. Konfirmasi @kakashi terima & paham risiko sebelum eksekusi mulai.

## 7. Pengecualian
- **Darurat saat incident:** mitigasi cepat boleh duluan; risk register di-update **retroaktif < 48 jam**, single-point/vendor lock-in tetap escalate kalau Type-1.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Risk register | `arch/` + `log.md` | Permanen |
| Dependency map (incl single-point) | `arch/` + `log.md` | Permanen |
| Konfirmasi handoff @kakashi | `log.md` (mention @kakashi) | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| **Surprise scaling/security/cost gap di prod** | # gap tak-terpetakan muncul di prod | **0** |
| Handoff tanpa risk register | # handoff eksekusi tanpa risk register terlampir | 0 |
| Single-point dependency tak-terpetakan | # single-point ditemukan saat incident | 0 |
| Risiko tinggi tanpa owner mitigasi | # risiko high tanpa owner | 0 |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
