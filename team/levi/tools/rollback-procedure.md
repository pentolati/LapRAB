# Tool: Rollback Procedure

**Apa:** langkah konkret balik ke versi stabil terakhir kalau deploy bermasalah — **disiapin & ditest SEBELUM deploy**, bukan diimprovisasi pas panik.
**Kapan dipake:** SOP-LV-02. Disiapin pra-deploy (kontrol LV-C1: gak ditest = gak deploy), dieksekusi saat verifikasi gagal / incident.
**Framework:** Google SRE (rollback as default reflex), COBIT BAI07.
**Prinsip Tata:** rollback-ready, **Data SACRED** (rollback gak boleh ngorbanin data), evidence (waktu rollback diukur).

---

## TEMPLATE (copy mulai sini)

```markdown
# Rollback Procedure: [Release X.Y]

**Disiapin:** YYYY-MM-DD (pra-deploy) · **Versi target balik:** [X.(Y-1)]
**Tested di staging:** [ ] ya — waktu: [X menit] (target < 5 menit)

## Trigger (kapan rollback) — lihat SOP-LV-02 §6.2
- [ ] Fungsi kritis rusak
- [ ] Risiko integritas data
- [ ] Error rate spike > 5%
> Kalau cuma kosmetik/isolated & fix-forward < 30 menit → JANGAN rollback, patch maju.

## Langkah rollback
1. [trigger: revert deploy / switch blue-green / disable flag / restore]
2. [verifikasi versi lama aktif]
3. Smoke test jalur kritis
4. Cek integritas data (koord @shikamaru kalau ada migration)

## Data consideration (Data SACRED)
- Migration reversible? [ya/tidak] · Rollback DDL: [...]
- Kalau forward-only → backup pra-deploy: [lokasi] · plan: [...]

## Pasca-rollback
- [ ] Production stabil di versi lama
- [ ] Announce ke channel + lapor Tata (bahasa manusia)
- [ ] Trigger postmortem (SOP-LV-03)
```

---

## CONTOH TERISI (Proyek-Contoh — landing v4 misal bermasalah)

```markdown
# Rollback Procedure: Proyek-Contoh Landing v4

**Disiapin:** 2026-06-02 (pra-deploy) · **Versi target balik:** v3 (stable)
**Tested di preview:** [x] ya — waktu: ~40 detik (< 5 menit ✅)

## Trigger
- [ ] Fungsi kritis rusak (CTA WhatsApp gak jalan?)
- [ ] Error rate spike > 5% di Sentry
> Landing statis: gak ada data user yang ditulis → fix-forward jarang dibutuhin,
> rollback aman & instan. Kalau cuma typo copy → patch maju, gak usah rollback.

## Langkah rollback
1. Vercel dashboard → deployment v3 → "Promote to Production" (1 klik)
2. Tunggu propagasi (< 60 detik) → cek domain serve v3
3. Smoke test: hero render, CTA WhatsApp klik, FAQ buka
4. Data: N/A (landing statis, gak nulis data) → no Data SACRED risk

## Data consideration
- Migration: N/A (Fauxbase memory, gak ada schema migration di landing)
- Forward-only: N/A

## Pasca-rollback
- [x] v3 live & stabil
- [x] #channel: "rollback v4→v3, alasan: [X]"
- [x] Lapor Tata: "Tat, gw balikin landing ke versi kemarin karena [X].
      User gak kehilangan apa-apa, semua normal lagi. Gw cari akarnya, kabarin."
- [x] Postmortem PM-NNN (< 48 jam)
```

> Insight: kenapa landing rollback gampang? Karena **stateless** (12-Factor) — gak nyimpen data di server. Begitu nanti Proyek-Contoh punya backend (RSVP, wishlist), rollback harus mikirin migration + data, jauh lebih hati-hati (koord @shikamaru). Itu sebabnya rollback DDL wajib ditest pra-deploy.
