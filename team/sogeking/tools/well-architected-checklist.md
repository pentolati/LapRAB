# Tool: Well-Architected Checklist (5 Pilar)

**Apa:** checklist review arsitektur per 5 pilar Well-Architected, disetel untuk konteks **prototype Fauxbase local driver** — jelas mana yang relevan SEKARANG vs NANTI (go-live).
**Kapan dipake:** Architecture Review sebelum lock (SOP-SG-05) + sanity-check NFR (SOP-SG-02).
**Framework:** AWS/Azure Well-Architected (reliability, security, cost optimization, performance efficiency, operational excellence) · silang ISO 25010 · OWASP · UU PDP.

> Legend: **[NOW]** wajib di prototype · **[LATER]** baru relevan saat backend real / go-live (catat arah, jangan build sekarang — YAGNI).

---

## 1. Reliability
- [ ] **[NOW]** Mutation idempotent (RSVP/klaim double-tap = 1 record)
- [ ] **[NOW]** **Data SACRED** — append/merge, **never overwrite**, no hard delete
- [ ] **[NOW]** Error path UI jelas (gagal load → pesan bahasa warung, bukan stack trace)
- [ ] **[LATER]** RTO/RPO ditetapkan + backup strategy (saat backend real)
- [ ] **[LATER]** Retry/circuit-breaker ke service eksternal

## 2. Security
- [ ] **[NOW]** Input validated (no XSS di field RSVP/nama tamu)
- [ ] **[NOW]** No secret/API key di client bundle
- [ ] **[NOW]** **UU PDP** — data pribadi tamu (nama/kontak) consent + akses owner-only
- [ ] **[NOW]** OWASP Top 10 di-scan untuk surface yang ada (injection, broken access)
- [ ] **[LATER]** Auth real (`fb.auth`) + authz per-role saat multi-user
- [ ] **[LATER]** Data residency / enkripsi at-rest

## 3. Cost Optimization
- [ ] **[NOW]** Prototype = $0 (Fauxbase local driver, persist memory) — gak ada cloud bill
- [ ] **[NOW]** Bundle ramping (no library 30KB buat 1 efek — lihat tech-radar/ADR)
- [ ] **[LATER]** Cost envelope go-live ditetapkan (< $X/bln) sebelum pilih backend/hosting
- [ ] **[LATER]** Trade-off matrix biaya per opsi vendor (build-buy-partner)

## 4. Performance Efficiency
- [ ] **[NOW]** Render undangan p95 < 1.5s di 3G (target NFR)
- [ ] **[NOW]** No N+1 di Fauxbase query, no re-render gak perlu (Zustand selector)
- [ ] **[NOW]** Asset (foto gallery) di-optimize / lazy-load
- [ ] **[LATER]** CDN + caching strategy saat traffic naik

## 5. Operational Excellence
- [ ] **[NOW]** **Auto-everything silent = haram** — tiap auto-action (settle/merge) ada logging eksplisit
- [ ] **[NOW]** Config-driven (komponen on/off + editable) terdokumentasi
- [ ] **[NOW]** Arsitektur ke-capture di target-arch-template + C4 diagram (audit record)
- [ ] **[LATER]** Observability/monitoring + alerting saat ada server
- [ ] **[LATER]** Runbook deploy/rollback (handoff @levi)

---

## Verdict
**Pass** kalau semua **[NOW]** ✅ + tiap **[LATER]** punya arah tercatat (bukan kosong).
Verdict + checklist disimpan di `log.md` — bukti kontrol **SG-C4** (review hulu sebelum lock).
