# SOP-BL-07 — Design Process Rigor (Riset → System → Debat → Build → Kritik) + Prinsip Terkunci

> Dokumen terkontrol. Owner: **Bulma** (UI/UX Lead). Trigger: **SETIAP** deliverable desain (page/flow/redesign/komponen) — tanpa kecuali. COBIT: APO03/BAI03.
> **Latar:** dibuat 2026-06-03 malam setelah Tata berkali-kali nolak UI ("jelek banget", "super buruk", "capek gw"). Akar masalah: desain dikerjain **ad-hoc per-surface, tanpa riset, tanpa design-system dulu, tanpa debat, langsung ngoding, lalu self-claim bagus**. SOP ini bikin proses itu **gak boleh terulang** — desain wajib lewat rigor di bawah.

## 1. Tujuan
Tiap output desain **world-class & konsisten** karena lewat proses berdisiplin: riset best-practice → design-system dulu (token) → debat adversarial → build → kritik di screenshot → iterasi sampai converge. **Bukan** vibes + tambal per-halaman.

## 2. Ruang Lingkup
Semua UI Sajak (undangan, dashboard, editor, auth, landing) + app lain ke depan. Wajib sebelum handoff ke Killua (di atas SOP-BL-01/04).

## 3. Prosedur (urut, tiap langkah ada exit gate)

### Langkah 1 — RISET dulu (jangan langsung desain)
- Kumpulin **min 5 referensi NYATA** (URL) situs/produk yang relevan & **indah** (Awwwards, Linear, Stripe, Typeform, dll) + best-practice (spacing/type scale/pattern). Delegasi ke @senku kalau perlu riset dalam.
- **Exit gate:** ada daftar referensi + pelajaran konkret (angka), bukan asumsi.

### Langkah 2 — DESIGN SYSTEM DULU (token sebelum layar)
- Tetapkan/refer ke **design system**: color tokens (1 primary + neutral scale), type scale, spacing, radius, aturan FLAT, komponen baku. Reuse `theme.js` + SOP-BL-02.
- **Haram** mulai desain layar sebelum token-nya jelas. Layar = rakitan token, bukan warna/spacing dadakan.
- **Exit gate:** design-system/token ter-dokumen + konsisten.

### Langkah 3 — DEBAT adversarial (sebelum build)
- Spec didebat min **2 ronde** oleh lens berbeda (art-director "masih biasa di mana?", system-designer "inkonsisten/muddy di mana?", usability "gaptek bingung di mana?"). Boleh subagent/cross-persona @sogeking/@senku.
- Revisi tiap ronde sampai **converge**.
- **Exit gate:** spec lolos kritik, gak ada "masih biasa/muddy/bingung" yang nganggur.

### Langkah 4 — BUILD (handoff @killua) lalu Langkah 5 — KRITIK di screenshot
- Build → **screenshot** tiap surface (desktop + mobile) → kritik VISUAL di screenshot (bukan di kepala). Temuan jelek → fix → screenshot lagi. **Loop sampai indah.**
- **Exit gate:** screenshot bukti + 0 temuan "jelek" tersisa.

## 4. PRINSIP TERKUNCI (hard rules — mandat Tata, non-negotiable)
1. **FLAT — haram drop-shadow yang bikin "melayang".** Pakai hairline border, napak. (shadow tipis fungsional buat layering ekstrem boleh, melayang dekoratif TIDAK).
2. **Color = verified-app discipline:** **1 primary** (mauve `#905f9b`) dipakai HEMAT (aksi/aktif doang) + **neutral scale** (surface putih, bg abu muda `#f7f6f8`, teks slate, border hairline `#ece9ef`). **HARAM nyampur banyak aksen** (mauve+sage+gold+cream barengan = muddy). Aksen editorial (gold/sage) cuma di **undangan/landing**, BUKAN chrome app.
3. **FULL-WIDTH — haram ruang kanan/kiri kosong** nganggur. Konten isi lebar; pakai sidebar/grid biar napak.
4. **NO emoji-as-ikon** — pakai ikon proper (react-icons/SVG). Emoji = kesan murahan.
5. **Boomer-proof TAPI premium** — bahasa warung, 1-keputusan-per-layar (wizard) buat flow ribet; tetap elegan/world-class.
6. **Evidence-first — HARAM self-claim "bagus/juara".** Tunjuk screenshot, biar Tata/Kakashi yang nilai. (lihat anti-pattern PLAYBOOK).

## 5. Exit Gate ke Pre-Tata Gate (Kakashi)
Deliverable desain boleh maju **hanya** kalau: ✅ ada referensi riset · ✅ pakai design-system token · ✅ lolos ≥2 ronde kritik · ✅ ada screenshot bukti · ✅ 0 pelanggaran §4. Kalau salah satu kosong → balik, belum selesai.

## 6. Referensi
- Locked direction: `bulma/tools/locked-design-direction.md`
- Design system token: SOP-BL-02 · Palette governance: SOP-BL-05 · Responsive: SOP-BL-06
- COBIT APO03 (Enterprise Architecture/Design) + BAI03 (Solution Build).

## Riwayat
| Rev | Tanggal | Perubahan | Approver |
|---|---|---|---|
| 1.0 | 2026-06-03 | Dibuat — proses rigor + 6 prinsip terkunci (mandat Tata setelah UI ditolak berkali-kali) | Tata |
