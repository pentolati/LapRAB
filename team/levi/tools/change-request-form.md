# Tool: Change Request Form

**Apa:** formulir catatan + approval tiap perubahan production (deploy, config, infra, secret). Biar **nihil unauthorized change** (kontrol LV-C3) & anti config drift.
**Kapan dipake:** SOP-LV-04. Normal/Emergency change wajib; Standard change (rutin pre-approved) cukup record ringan.
**Framework:** ITIL Change Enablement, COBIT BAI06.
**Prinsip Tata:** no silent auto (semua perubahan tercatat), evidence-first, no Jumat sore kecuali critical.

---

## TEMPLATE (copy mulai sini)

```markdown
# Change Request CR-NNN

**Pemohon:** Levi · **Tanggal:** YYYY-MM-DD
**Tipe:** Standard / Normal / Emergency
**Risk level:** Low / Med / High

## Apa yang berubah
[deskripsi konkret: service/config/infra apa]

## Kenapa
[alasan bisnis/teknis]

## Dampak
- User kena? [ya/tidak — kalau ya → visible 🟡, butuh sign-off Tata]
- Data kena? [Data SACRED check]
- Reversible? [ya/tidak — kalau tidak → 🔴 ADR + escalate]

## Rollback plan
[langkah balik — referensi rollback-procedure.md]

## Window
[Senin–Rabu jam kerja · bukan Jumat sore kecuali critical]

## Approval (kontrol LV-C3)
- [ ] @kakashi (teknis): ...
- [ ] @l (QA, kalau nyentuh fungsi): ...
- [ ] @tata (go-live, kalau visible): ...

## Hasil (closure)
- [ ] Eksekusi: [waktu, hasil] · Evidence: [link]
```

---

## CONTOH TERISI (Proyek-Contoh — pasang env var WhatsApp number)

```markdown
# Change Request CR-001

**Pemohon:** Levi · **Tanggal:** 2026-06-02
**Tipe:** Normal · **Risk level:** Low

## Apa yang berubah
Set env var `VITE_WA_NUMBER` di Vercel production = nomor WhatsApp bisnis Proyek-Contoh
(sebelumnya placeholder). CTA "Chat WhatsApp" di landing arahin ke nomor ini.

## Kenapa
Landing go-live butuh CTA konversi yang beneran nyambung ke WA bisnis,
bukan nomor dummy.

## Dampak
- User kena? **Ya** — CTA yang user klik → visible 🟡, butuh sign-off Tata
- Data kena? Tidak (config, bukan data user) — no Data SACRED risk
- Reversible? Ya — tinggal ubah balik env var (Type-2)

## Rollback plan
Ubah env var balik ke nilai sebelumnya + redeploy (atau Vercel rollback). < 2 menit.

## Window
2026-06-02 jam kerja (Selasa ✅)

## Approval
- [x] @kakashi: config-only, aman
- [x] @tata: "ok, ini nomor WA bisnis gw" (sign-off, karena user-facing)

## Hasil
- [x] Eksekusi 2026-06-02 10:25 · CTA test → buka WA ke nomor benar · Evidence: screenshot
```

> Kenapa env var nomor WA butuh sign-off Tata padahal cuma config? Karena **user yang klik** (visible 🟡) + ini nomor bisnis Tata sendiri — salah nomor = leads nyasar. Config internal (mis. cache TTL) gak butuh sign-off (🟢 otonom). Bedanya: **user ngerasain atau nggak.**
