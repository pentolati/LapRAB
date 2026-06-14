# Tool: Monitoring Config (SLI/SLO + Alert)

**Apa:** definisi observability satu service — SLI (apa yang diukur), SLO (target), alert (kapan alarm nyala), dashboard. "CCTV + alarm" yang konkret.
**Kapan dipake:** SOP-LV-05, setup service baru / sebelum go-live (kontrol LV-C4).
**Framework:** Google SRE (4 golden signals + SLO), COBIT DSS01.
**Prinsip Tata:** alert yang matter (anti noise), no silent auto (alert eksplisit), translate target ke bahasa manusia.

---

## TEMPLATE (copy mulai sini)

```markdown
# Monitoring Config: [Service]

## SLI (yang diukur — 4 golden signals)
| Signal | SLI konkret | Cara ukur |
|---|---|---|
| Latency | [mis. p99 < Xms] | [tool] |
| Traffic | [req/detik] | [tool] |
| Errors | [error rate %] | [tool] |
| Saturation | [CPU/mem/queue] | [tool] |

## SLO (target) + error budget
- SLO: [mis. 99.5% request sukses /30 hari]
- Error budget: [sisa jatah error] → abis = freeze deploy
- **Bahasa Tata:** "[analogi — mis. user gak nunggu > 3 detik, max 1 dari 200 gagal]"

## Alert (actionable — tiap alert ada runbook)
| Alert | Threshold | Aksi kalau nyala | Routing |
|---|---|---|---|
| [nama] | [ambang] | [runbook ref] | channel + oncall |

## Dashboard
- [link/lokasi] · panel: [error rate, latency, saturation, traffic]

## Health check
- Endpoint: /health → state komponen
```

---

## CONTOH TERISI (Proyek-Contoh — landing + nanti RSVP service)

```markdown
# Monitoring Config: Proyek-Contoh Landing (Vercel + Sentry)

## SLI
| Signal | SLI konkret | Cara ukur |
|---|---|---|
| Latency | LCP p75 < 2.5s (Core Web Vitals) | Vercel Analytics |
| Traffic | pageview/jam | Vercel Analytics |
| Errors | JS error rate < 1% | Sentry |
| Saturation | N/A (serverless/CDN, auto-scale) | — |

## SLO + error budget
- SLO: 99% pageview LCP < 2.5s /30 hari
- Error budget: 1% slow-load → kalau kepakai banyak, audit asset/bundle
- **Bahasa Tata:** "Target: 99 dari 100 orang yang buka undangan, halaman
  kebuka cepet (< 2.5 detik). Kalau lebih lambat dari itu, alarm gw nyala."

## Alert (actionable)
| Alert | Threshold | Aksi kalau nyala | Routing |
|---|---|---|---|
| LCP lambat | p75 > 4s 5 menit | cek asset size, rollback kalau pasca-deploy | #channel + Levi |
| JS error | error rate > 1% | cek Sentry stacktrace, repro | #channel + Levi |
| Down | /health != 200 | escalate SEV, contain | #channel + Levi |

## Dashboard
- Vercel Analytics + Sentry · panel: LCP, error rate, pageview, top errors

## Health check
- / (landing statis) return 200 = hidup
```

> Kenapa Proyek-Contoh landing gak butuh SLO ribet kayak microservice? Karena **statis + CDN** (Vercel auto-scale) — saturation N/A. Yang matter cuma: kebuka cepet (LCP) + gak error (Sentry). Begitu nanti ada **RSVP/wishlist backend**, tambah SLI: API success rate, latency p99, DB connection saturation — koord @saitama buat hook log + @shikamaru buat DB metric. **Monitoring tumbuh seiring kompleksitas, bukan over-provision dari awal** (anti K8s-cosplay, PLAYBOOK §5.2).
