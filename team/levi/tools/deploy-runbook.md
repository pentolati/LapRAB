# Tool: Deploy Runbook

**Apa:** skenario deploy step-by-step buat satu release — dari pre-flight, eksekusi, verifikasi, sampai rollback path & sign-off. Biar deploy **gak pernah improvisasi**, semua ketrace.
**Kapan dipake:** SOP-LV-01, tiap go-live / release ke production. Satu runbook per release, di-arsip permanen (audit record kontrol LV-C2).
**Framework:** ITIL Release Management, COBIT BAI07.
**Prinsip Tata:** evidence-first (verifikasi sebelum claim aman), rollback-ready, no Jumat sore kecuali critical, laporan ke Tata bahasa manusia.

---

## TEMPLATE (copy mulai sini)

```markdown
# Deploy Runbook: [Release X.Y]

**Release Manager:** Levi · **Tanggal:** YYYY-MM-DD HH:MM
**Window:** [Senin–Rabu, jam kerja] · **Strategy:** [canary/blue-green/rolling/flag]
**Commit SHA:** [...]

## 1. Pre-flight checklist
[paste preflight-checklist.md terisi — semua tick wajib]

## 2. Deploy steps
1. Build artifact (SHA: ...)
2. Deploy ke staging → smoke test pass
3. Promote ke production — [canary 10% → 50% → 100%]
4. Monitor: error rate · latency p99 · [metric spesifik]

## 3. Verifikasi (post-deploy)
- [ ] /health return 200
- [ ] [jalur user kritis] jalan
- [ ] 0 error spike di dashboard (window awal)

## 4. Rollback path (WAJIB tested pra-deploy)
1. [trigger rollback — revert/switch/flag-off]
2. Verifikasi rollback selesai (< 5 menit)
3. Smoke test pass
4. Announce ke channel
> Detail: rollback-procedure.md · waktu test: [X menit]

## 5. Comms
- Pre-deploy: @nami broadcast stakeholder
- Post-success: brief #channel
- Post-issue: live update + escalate

## 6. Sign-off (kontrol LV-C2)
- [ ] @l (QA gate): ...
- [ ] @kakashi (tech approve): ...
- [ ] @tata (go-live, kalau visible): ...

## 7. Laporan ke Tata (bahasa manusia)
[paste dari template Tata-translation]
```

---

## CONTOH TERISI (Proyek-Contoh — go-live landing ke hosting publik)

```markdown
# Deploy Runbook: Proyek-Contoh Landing v4 → production (Vercel)

**Release Manager:** Levi · **Tanggal:** 2026-06-02 10:30 (Selasa, bukan Jumat ✅)
**Window:** jam kerja · **Strategy:** atomic deploy + instant rollback (Vercel)
**Commit SHA:** a1b2c3d (landing v4, fake-stats udah di-fix)

## 1. Pre-flight checklist
[terisi — lihat preflight-checklist.md contoh Proyek-Contoh, semua ✅]

## 2. Deploy steps
1. Build Vite production (`npm run build`) — bundle 210KB (hero udah dioptim dari 1.6MB)
2. Deploy ke Vercel preview → smoke test pass
3. Promote ke production domain (atomic switch)
4. Monitor: error rate (Sentry) · LCP/load time · 404 rate

## 3. Verifikasi
- [x] / return 200, hero render < 2.5s (LCP)
- [x] CTA WhatsApp jalan (jalur kritis konversi)
- [x] FAQ accordion + fade-up motion OK
- [x] 0 error di Sentry 10 menit pertama

## 4. Rollback path (tested ✅)
1. Vercel: "Promote previous deployment" (1 klik) → v3 stable balik
2. Atomic, propagasi < 60 detik
3. Smoke test landing v3 pass
> Waktu test rollback di preview: ~40 detik (< 5 menit ✅)

## 5. Comms
- Pre: @nami kabarin "landing live jam 10:30"
- Post-success: #channel "Proyek-Contoh landing live ✅"

## 6. Sign-off
- [x] @l: smoke + cross-browser + a11y ≥90 pass
- [x] @kakashi: Pre-Tata Gate PASS (v4, verifiable stats)
- [x] @tata: go-live approved (visible)

## 7. Laporan ke Tata
**Tat, landing Proyek-Contoh udah live** di [domain] jam 10:30. Aman — gw test
10 menit, 0 error, kebuka cepet (< 3 detik). Kalau ada apa-apa gw bisa
balikin ke versi kemarin dalam < 1 menit (1 klik). Lu gak perlu mantau,
gw kabarin kalau ada apa-apa. — Levi
```

> Catatan: Vercel kasih atomic deploy + instant rollback bawaan — itu kenapa Proyek-Contoh prototype default ke PaaS (PLAYBOOK §5.2): tim kecil, perf cukup, rollback < 1 menit gratis. Anti K8s-cosplay.
