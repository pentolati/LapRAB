# Tool: Usability Heuristic Eval Checklist

**Apa:** daftar periksa audit usability vs **Nielsen 10 Heuristics** + lethal check boomer-proof.
**Kapan dipake:** tiap flow sebelum handoff (SOP-BL-03).
**Framework:** Nielsen 10 Usability Heuristics, ISO 9241 (usability = effectiveness + efficiency + satisfaction).
**Aturan:** ada Blocker (flow rusak / a11y fail) → **gak boleh handoff**.

---

## Nielsen 10 — checklist

- [ ] **H1 Visibility of status** — empty / loading / error state designed; user tau sistem lagi apa
- [ ] **H2 Match real world** — copy bahasa warung (F-2), ikon familiar, no jargon
- [ ] **H3 User control & freedom** — ada "undo"/"back"/"batal" buat aksi
- [ ] **H4 Consistency & standards** — pakai token design-system; button identik lintas page
- [ ] **H5 Error prevention** — validasi visual; confirm aksi destructive
- [ ] **H6 Recognition > recall** — label jelas, ikon+teks, gak ngandelin hafalan
- [ ] **H7 Flexibility & efficiency** — shortcut buat power-user gak ganggu pemula
- [ ] **H8 Aesthetic & minimalist** — 1 section 1 fokus, hapus noise
- [ ] **H9 Help recover from error** — error state kasih tau *cara benerin*, bukan cuma merah
- [ ] **H10 Help & documentation** — hint/tooltip kalau perlu (idealnya gak butuh)

**Severity tiap temuan:** Blocker (flow rusak / a11y fail) · Major · Minor.

---

## Lethal check (boomer-proof, sebelum handoff)
- [ ] **3-detik mobile** — scroll cepat di HP, message utama masih sampai?
- [ ] **Ibu-warung test** — non-IT buka, ngerti CTA-nya apa?
- [ ] **Keep-3-element** — kalau cuma boleh 3 element di hero, yang mana? sisanya dipertanyakan

---

## CONTOH TERISI (Proyek-Contoh — flow "Buat undangan baru")

```
H1 Status   ✅ empty (belum ada undangan → ilustrasi + CTA), loading (skeleton), error (retry) designed
H2 Real     ✅ "Mulai Cerita Kalian" bukan "Initialize draft"; ikon amplop familiar
H4 Consist  ✅ Button colorScheme=brand rounded=full identik dgn landing
H5 Prevent  ✅ confirm sebelum hapus undangan; validasi tanggal acara
H8 Minimal  ⚠️ Major: form 1 layar kepadetan → split jadi 3 step (fixed)
H9 Recovery ✅ error upload foto: "Foto kegedean (max 5MB), coba kompres" — actionable

Lethal:
3-detik  ✅ "Bikin undangan, gratis" sampai di mobile
Ibu-warung ✅ "Mulai Cerita Kalian" + ikon → ngerti
Keep-3   ✅ headline + CTA + preview card

Severity: 0 Blocker, 1 Major (fixed), 0 Minor → LOLOS, lanjut a11y (accessibility-checklist).
```

Tercatat di log + jadi bukti audit kontrol BC4 (state coverage).
