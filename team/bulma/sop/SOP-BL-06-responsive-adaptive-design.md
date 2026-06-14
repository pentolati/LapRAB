# SOP-BL-06 — Responsive & Adaptive Design + Pemilihan Pola Navigasi

> Dokumen terkontrol. Owner: **Bulma** (UI/UX Lead). Trigger: tiap mendesain page/flow apa pun yang dibuka di >1 ukuran layar (HP + desktop). COBIT: BAI03.
> **Latar:** dibuat 2026-06-03 setelah dashboard nyempit di tengah (kanan-kiri kosong) + nav pakai tab atas yang gak scale. Itu kegagalan responsive + IA. SOP ini biar gak terulang.

## 1. Tujuan
Menjamin setiap UI **enak & proper di SEMUA ukuran** (HP, tablet, desktop) — bukan 1 layout dipaksa muat semua. Plus memilih **pola navigasi yang tepat** sesuai jumlah menu & device.

## 2. Ruang Lingkup
Semua page/flow user-facing & admin (undangan, dashboard, settings, auth). Wajib SEBELUM handoff ke Killua (gabung SOP-BL-04).

## 3. Definisi
- **Responsive** = layout fluid mengikuti lebar layar (breakpoint).
- **Adaptive** = layout/komponen BEDA per device (cth: sidebar di desktop → drawer di HP).
- **Mobile-first** = desain dari layar kecil dulu, lalu naik.
- **Breakpoint** = ambang lebar ganti layout (Chakra: base / sm 480 / md 768 / lg 992 / xl 1280).
- **Container vs Full-bleed** = konten dibatasi lebar max (form/teks) vs konten full lebar (app shell/dashboard).

## 4. Prinsip (best practice — wajib)
1. **Mobile-first**: mulai dari HP, lalu tambah ruang di layar besar — bukan kebalikannya.
2. **Jangan biarkan kanban kosong**: di desktop, **app shell / dashboard = FULL-WIDTH** (sidebar + konten isi lebar). Yang boleh di-center-max-width cuma **konten baca** (artikel, form login, undangan kartu) — bukan dashboard.
3. **Pola navigasi sesuai konteks** (lihat §5).
4. **Tap target ≥ 44px** di HP. Teks ≥16px body.
5. **Tiap komponen punya perilaku per-breakpoint** (stack di HP, grid di desktop).
6. **Tes minimal 2 viewport**: 390px (HP) + 1280px (desktop) sebelum lock.

## 5. Decision: Pola Navigasi (pilih, jangan asal tab)
| Konteks | Pola yang benar | JANGAN |
|---|---|---|
| **Dashboard/admin, banyak menu / ada submenu** | **Sidebar kiri** (desktop) + **Drawer/hamburger** (HP). Bisa grouping/section = submenu | ❌ tab atas (gak scale, submenu mati) |
| Menu sedikit (≤4), setara, no submenu | Tab atas / segmented OK | — |
| Navigasi utama app HP | **Bottom navigation** (≤5 item) | ❌ sidebar di HP |
| Sub-aksi dalam 1 halaman | Tabs / accordion lokal | — |
| Konten panjang 1 halaman | Anchor/scroll-spy | — |

## 6. Prosedur (langkah + exit criteria)
1. **IA dulu** — list semua menu + hierarki (ada submenu?). → *exit:* peta IA jelas.
2. **Pilih pola nav** per §5 (catat alasan). → *exit:* pola + alasan tertulis.
3. **Wireframe 2 ukuran** — sketsa HP (mobile-first) + desktop. Tentukan mana full-width, mana container-max. → *exit:* wireframe HP + desktop.
4. **Breakpoint plan** — tiap komponen: perilaku di base/md/lg. → *exit:* tabel breakpoint.
5. **Mockup** ikut wireframe, pakai token design system. → *exit:* mockup 2 ukuran.
6. **Feasibility @killua** (SOP-BL-04). → *exit:* Killua konfirmasi feasible.
7. **Self-test 2 viewport** (390 + 1280) — cek: kanan-kiri gak kosong di desktop? nav enak di HP? tap target cukup? → *exit:* lolos checklist §7.

## 7. Checklist QC (hard gate)
- [ ] Desktop: konten **gak nyempit di tengah dengan kanan-kiri kosong** (app shell full-width)
- [ ] HP: layout stack rapi, gak kepotong, gak perlu zoom
- [ ] Nav: pola sesuai konteks (sidebar/drawer untuk dashboard, bukan tab)
- [ ] Submenu: ke-handle (grouping/section), bukan mati
- [ ] Tap target ≥44px, teks ≥16px body di HP
- [ ] Tes nyata di 390px + 1280px (screenshot bukti)

## 8. Pengecualian
Halaman yang memang **konten-baca terpusat** (login, kartu undangan, artikel) boleh container-max-center — itu BUKAN pelanggaran. Yang dilarang = **dashboard/app shell** nyempit di tengah.

## 9. RACI
R: Bulma · A: Bulma · C: @killua (feasibility), @lelouch (IA dari requirement) · I: @kakashi (Gate), Tata (sign-off visible).

## 10. KPI
- Page di-revisi karena "kosong kanan-kiri / nav jelek" = **0**
- Coverage tes 2 viewport sebelum handoff = 100%

## 11. Riwayat Revisi
| Versi | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-06-03 | Dibuat — respons kegagalan dashboard (nyempit + tab nav). Mandat Tata. |
