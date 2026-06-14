# SOP-LV-05 — Monitoring & Alerting Setup

| | |
|---|---|
| **Kode** | SOP-LV-05 |
| **Pemilik** | Levi (Implementor / DevOps / SRE) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Google SRE (SLO/SLI), ITIL 4 Monitoring & Event Mgmt, [tools/monitoring-config.md](../tools/monitoring-config.md) |
| **COBIT** | DSS01 (Managed Operations) |

## 1. Tujuan
Pasang **"CCTV + alarm"** buat tiap service — observability (log/metric/trace) + alert yang **matter** — supaya incident **kedeteksi sebelum user komplain**, bukan sesudah. Alert yang noise = sama buruknya dengan gak ada alert.

## 2. Ruang Lingkup
- **Berlaku:** tiap service baru sebelum go-live, dan tiap service production existing (kontrol LV-C4: gak ada go-live tanpa monitoring+alert).
- **Tidak berlaku:** prototype lokal/staging non-production.

## 3. Definisi & Istilah
- **SLI** — Service Level Indicator: angka ukur kesehatan (% request sukses, latency p99, error rate).
- **SLO** — Service Level Objective: target SLI (mis. "99.5% request sukses").
- **Error budget** — sisa jatah error sebelum nabrak SLO; abis → freeze deploy.
- **Alert threshold** — ambang yang kalau dilewatin → alarm nyala.
- **Alert fatigue** — kebanyakan alarm palsu → orang ngabaikan alarm beneran.

## 4. Referensi
Google SRE (4 golden signals: latency, traffic, errors, saturation), 12-Factor (log as event stream), mandate no silent auto (alert eksplisit), kontrol LV-C4.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Tentukan SLI/SLO | Levi | Levi | Kakashi, @lelouch (target bisnis) | Tata |
| Pasang log/metric/trace | Levi | Levi | @saitama (hook di kode) | — |
| Set alert threshold | Levi | Levi | — | tim |
| Review alert noise | Levi | Levi | — | @nami |

## 6. Prosedur

### 6.1 Definisi sinyal
- 6.1.1 Tentukan **SLI** per service (4 golden signals: latency, traffic, errors, saturation).
- 6.1.2 Tetapkan **SLO** (target) — konsultasi @kakashi + @lelouch (angka bisnis, mis. "user gak nunggu > 3 detik").
- 6.1.3 Tentukan **error budget** dari SLO.

### 6.2 Instrumentasi
- 6.2.1 Pasang **structured log** (JSON + request id + user id) — koord @saitama (hook di BE).
- 6.2.2 Pasang **metric collection** (mis. Prometheus) + **dashboard** (mis. Grafana).
- 6.2.3 Pasang **health check** endpoint (`/health` return state komponen).
- 6.2.4 (Kalau perlu) **tracing** (OpenTelemetry) buat request lintas-servis.

### 6.3 Alerting
- 6.3.1 Set **alert threshold** untuk metric kritis (error rate, latency p99, saturation) berdasar SLO.
- 6.3.2 Alert **actionable** — tiap alert ada runbook "kalau nyala, lakuin apa". Alert tanpa aksi = noise → hapus.
- 6.3.3 Routing: alert → channel + oncall. Failure = noisy, success = silent (no spam).
- 6.3.4 **Decision point:** alert noise ratio tinggi? → tune threshold / hapus alert non-actionable (anti alert-fatigue).
- 6.3.5 **Exit criteria:** SLI/SLO tertulis + dashboard live + alert kritis aktif & actionable + health check return 200 + (kalau go-live) tercentang di pre-flight kontrol LV-C4.

## 7. Pengecualian
- **Service sementara / spike experiment:** monitoring minimal (health + error rate) cukup, gak perlu full SLO — tapi tetap ada alert dasar.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| SLI/SLO definition | [monitoring-config](../tools/monitoring-config.md) / `log.md` | Living |
| Dashboard + alert config | repo / platform monitoring | Living |
| Bukti aktif sebelum go-live | pre-flight checklist | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| MTTD | menit incident mulai → alert nyala | minimal (alert duluan dari komplain) |
| Alert noise ratio | # alert false/non-actionable ÷ total alert | rendah |
| Monitoring coverage | # service go-live dengan monitoring+alert ÷ total | 100% (kontrol LV-C4) |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
