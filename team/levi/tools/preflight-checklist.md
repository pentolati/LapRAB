# Tool: Pre-flight Checklist (Go-live)

**Apa:** daftar periksa wajib **sebelum** deploy ke production — kode, test gate, schema, config/secret, observability, comms, rollback, post-deploy. Semua tick wajib; ada yang kosong = **gak deploy**.
**Kapan dipake:** SOP-LV-01, tiap deploy sebelum eksekusi. Di-paste ke deploy-runbook.
**Framework:** 12-Factor App, DORA, COBIT BAI07.
**Prinsip Tata:** evidence-first (bukti sebelum claim aman), rollback-ready, no silent auto.

---

## CHECKLIST (copy mulai sini)

```markdown
### Code & build
- [ ] Semua PR ter-merge ke main/release branch
- [ ] CI hijau — semua stage pass
- [ ] Security scan — no high/critical vuln
- [ ] Bundle/asset size budget — dalam limit (FE)

### Test gate
- [ ] Unit + integration test pass
- [ ] E2E jalur kritis pass
- [ ] @l sign-off diterima

### Schema / DB (kalau ada migration)
- [ ] Migration ditest di staging dengan data realistis
- [ ] Rollback DDL disiapkan & ditest (koord @shikamaru)
- [ ] Backfill plan kalau table besar · Data SACRED check

### Config & secret (12-Factor)
- [ ] Env var production set benar
- [ ] Secret di secret manager (no secret committed)
- [ ] Secret di-rotate kalau perlu

### Observability (SOP-LV-05, kontrol LV-C4)
- [ ] Log aggregation jalan (JSON + request id)
- [ ] Metric dashboard ready
- [ ] Alert kritis aktif (error rate, latency p99, saturation)
- [ ] /health return 200

### Communication
- [ ] @nami broadcast stakeholder (window)
- [ ] User dikabarin kalau ada downtime
- [ ] Channel siap buat live update

### Rollback (kontrol LV-C1)
- [ ] Rollback steps terdokumentasi (rollback-procedure.md)
- [ ] Rollback DITEST di staging
- [ ] Estimasi waktu rollback diketahui (< 5 menit ideal)

### Window (kontrol LV-C5)
- [ ] Bukan Jumat sore (kecuali critical-with-reason)

### Post-deploy
- [ ] Smoke test plan ready
- [ ] Monitor window ditentukan (X jam)
- [ ] Postmortem template siap kalau incident
```

---

## CONTOH TERISI (Proyek-Contoh — landing v4 go-live)

```markdown
### Code & build
- [x] PR landing v4 merged · [x] CI hijau · [x] no vuln
- [x] Bundle 210KB (hero dioptim dari 1.6MB) — within budget

### Test gate
- [x] Smoke + functional pass · [x] E2E CTA WhatsApp pass · [x] @l sign-off

### Schema / DB
- [N/A] Fauxbase memory, landing statis — no migration

### Config & secret
- [x] VITE_WA_NUMBER set (lihat CR-001) · [x] no secret di repo

### Observability
- [x] Sentry error tracking aktif · [x] LCP/load dashboard
- [x] Alert "LCP p75 > 4s" + "error rate > 1%" aktif · [x] / return 200

### Communication
- [x] @nami broadcast "live jam 10:30" · [N/A] no downtime (atomic) · [x] #channel siap

### Rollback
- [x] rollback-procedure.md siap · [x] tested di preview (~40 detik) · [x] < 5 menit ✅

### Window
- [x] Selasa 10:30 — bukan Jumat sore ✅

### Post-deploy
- [x] Smoke plan ready · [x] Monitor 2 jam · [x] Postmortem template siap

→ SEMUA TICK. Deploy GO. (Gate: @l ✅ + @kakashi ✅ + @tata sign-off ✅)
```

> Aturan keras Levi: **satu kotak kosong = deploy ditahan.** "Checklist no.X belum di-tick. Tunggu." Bukan birokrasi — ini yang bikin change failure rate rendah. Item "asset size budget" ditambah pasca PM-001 (lihat incident-response-playbook) — itu cara checklist tumbuh: tiap incident nutup 1 lubang.
