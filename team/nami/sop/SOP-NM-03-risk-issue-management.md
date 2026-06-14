# SOP-NM-03 — Risk & Issue Management (RAID Log)

| | |
|---|---|
| **Kode** | SOP-NM-03 |
| **Pemilik** | Nami (Project Manager) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | PMBOK (Risk Mgmt), RAID log, [tools/raid-log.md](../tools/raid-log.md), [tools/risk-register.md](../tools/risk-register.md) |
| **COBIT** | BAI11 (Managed Projects), MEA01 (Performance Monitoring) |

## 1. Tujuan
Menangkap **risk, assumption, issue, dependency** secara terstruktur, dan **mitigasi risk sebelum jadi krisis**. Gak ada krisis yang pecah tanpa pernah ke-flag duluan.

## 2. Ruang Lingkup
- **Berlaku:** semua risk/issue/assumption/dependency di project aktif.
- **Tidak berlaku:** masalah trivial yang langsung beres < 1 jam tanpa dampak lintas-task.

## 3. Definisi & Istilah
- **Risk** — ketidakpastian yang **belum** terjadi (potensial). Punya **probabilitas** × **dampak**.
- **Issue** — masalah yang **sudah** terjadi (aktual). Bedanya dari risk: udah kejadian.
- **Assumption** — hal yang dianggap benar tanpa dibuktikan; kalau salah → jadi risk.
- **Dependency** — A gak bisa jalan sampai B selesai.
- **RAID log** — tabel 4-kolom (Risk/Assumption/Issue/Dependency) yang hidup.
- **Mitigasi** — tindakan ngurangin probabilitas atau dampak risk.

## 4. Referensi
PMBOK Risk Management (identify → analyze → respond → monitor), mandate Tata (surface blocker awal, anti-hide).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Maintain RAID log | Nami | Nami | area owner | Tata |
| Tetapkan mitigasi | Nami | owner risk | @kakashi/@lelouch (kalau relevan) | Tata |
| Eksekusi mitigasi | owner | Nami (track) | — | Tata |

## 6. Prosedur

### 6.1 Identifikasi
- 6.1.1 **Scan sinyal** dari ACTIVITY feed + log persona: slip pattern, scope balloon, dependency clash, silent persona.
- 6.1.2 Klasifikasi: ini **Risk / Assumption / Issue / Dependency**? (Risk = belum kejadian, Issue = udah).
- 6.1.3 Catat ke [raid-log](../tools/raid-log.md).

### 6.2 Analisis
- 6.2.1 Untuk **Risk**: skor **probabilitas (L/M/H)** × **dampak (L/M/H)** → prioritas ([risk-register](../tools/risk-register.md)).
- 6.2.2 Untuk **Issue**: severity + owner + butuh escalate gak?
- 6.2.3 Untuk **Dependency**: petakan critical path — siapa nungguin siapa.

### 6.3 Respon & monitor
- 6.3.1 Tetapkan **mitigasi** + owner + due (mitigasi = action-triple juga).
- 6.3.2 **Risk H×H** → surface ke Tata/Lelouch/Kakashi sesuai domain.
- 6.3.3 **Issue jadi blocker** → trigger SOP-NM-05 (escalation).
- 6.3.4 Monitor tiap update; tutup entry kalau resolved (mark Resolved + resolution).
- 6.3.5 **Exit criteria:** tiap risk H punya mitigasi+owner+due; issue punya owner; dependency ke-map; gak ada krisis yang gak pernah ke-flag (kontrol N3).

## 7. Pengecualian
- **Risk strategic / irreversible:** Nami gak putus sendiri — surface ke Tata (escalate 🔴), Nami cuma flag + rekomendasi.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| RAID log | [tools/raid-log.md](../tools/raid-log.md) (rolling) | Living |
| Risk register (scored) | [tools/risk-register.md](../tools/risk-register.md) | Living |
| Gap/conflict | `nami/gaps.md` | Rolling |
| Risk yang jadi lesson | `nami/lessons.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| **Risk-to-crisis tanpa flag** | # krisis yang gak pernah ke-flag duluan | **0** |
| Risk H tanpa mitigasi | # risk High tanpa mitigasi+owner | 0 |
| Mitigasi closure | # mitigasi selesai tepat due ÷ total | ↑ |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: risk "scope interactive-invitation RAKSASA → cap per-fase" |
