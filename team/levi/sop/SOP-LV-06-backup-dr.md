# SOP-LV-06 — Backup & Disaster Recovery (BCP/DRP)

| | |
|---|---|
| **Kode** | SOP-LV-06 |
| **Pemilik** | Levi (Implementor / DevOps / SRE) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ITIL 4 Service Continuity, ISO 22301 (BCM), Google SRE |
| **COBIT** | DSS04 (Managed Continuity) |

## 1. Tujuan
Memastikan kalau terjadi bencana (server mati, data korup, region down), layanan & **data bisa dipulihkan dalam batas waktu (RTO) dengan kehilangan data minimal (RPO)** — dan **backup-nya beneran bisa di-restore**, bukan cuma "ada file" (kontrol LV-C7).

## 2. Ruang Lingkup
- **Berlaku:** semua data store production (database, file/object storage, secret store) + konfigurasi infra (IaC).
- **Tidak berlaku:** data lokal/staging non-production, data turunan yang bisa di-regenerate. **Proyek-Contoh prototype Fauxbase (memory):** belum ada backup (ephemeral); SOP aktif pasca go-live ke real backend.

## 3. Definisi & Istilah
- **RPO** (Recovery Point Objective) — max data yang boleh hilang (mis. RPO 1 jam = backup tiap ≤ 1 jam).
- **RTO** (Recovery Time Objective) — max waktu boleh down sebelum pulih.
- **BCP/DRP** — Business Continuity Plan / Disaster Recovery Plan.
- **DR drill** — latihan pemulihan terjadwal (simulasi bencana) buat ngecek plan beneran jalan.
- **Restore test** — uji benerin: restore backup ke staging, cek data utuh + ukur waktu.

## 4. Referensi
ITIL Service Continuity, ISO 22301 (BCM), mandate **Data SACRED** (data jangan hilang/overwrite), Google SRE (test your backups).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Tentukan RPO/RTO | Levi | Levi | @lelouch (toleransi bisnis), @shikamaru | Tata |
| Setup backup otomatis | Levi | Levi | @shikamaru (DB) | — |
| Restore test / DR drill | Levi | Levi | @shikamaru | Tata, @nami |
| Update DRP | Levi | Levi | Kakashi | tim |

## 6. Prosedur

### 6.1 Definisi target
- 6.1.1 Tetapkan **RPO & RTO** per data store — konsultasi @lelouch (berapa toleransi bisnis kalau data/down) + @shikamaru.
- 6.1.2 Terjemahkan ke Tata pakai **bahasa manusia**: "kalau server kebakar, paling banyak data X jam terakhir bisa hilang, dan layanan balik dalam Y jam".

### 6.2 Setup backup
- 6.2.1 Konfigurasi **backup otomatis** sesuai RPO (frekuensi, retensi, lokasi terpisah/off-site).
- 6.2.2 **Logging eksplisit** tiap backup (kontrol LV-C6: no silent auto) — sukses/gagal ke channel.
- 6.2.3 Backup config/infra juga (IaC di version control) + secret store.

### 6.3 Validasi (kritis — kontrol LV-C7)
- 6.3.1 **Restore test** berkala — restore backup ke staging, **cek data utuh** + ukur waktu vs RTO. Backup yang gak pernah di-restore = backup yang gak ada.
- 6.3.2 **DR drill** terjadwal — simulasi bencana (failover/restore penuh), catat gap.
- 6.3.3 **Decision point:** RPO/RTO ke-meet? Gagal → fix plan + ulang drill.
- 6.3.4 Update **DRP** (langkah pulih konkret) tiap ada perubahan arsitektur.
- 6.3.5 **Exit criteria:** backup otomatis jalan + restore test pass (data utuh, waktu ≤ RTO) + DRP ter-update + drill tercatat + Tata dikabarin (bahasa manusia).

## 7. Pengecualian
- **Forward-only / data ephemeral:** kalau data emang gak perlu di-backup (cache, derived), dokumentasikan keputusannya — jangan diam-diam skip.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| RPO/RTO definition + DRP | `log.md` / repo | Living |
| Restore test result | `log.md` | Permanen |
| DR drill record | `log.md` | Permanen |
| Backup log (sukses/gagal) | platform / channel | Per retensi |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Restore test pass | # restore test sukses (data utuh, ≤ RTO) ÷ total | 100% |
| RPO/RTO compliance | # drill yang penuhi RPO/RTO ÷ total drill | 100% |
| Backup success rate | # backup sukses ÷ total jadwal backup | ≈ 100% |
| DR drill frequency | # drill per periode | ≥ target (mis. per kuartal) |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
