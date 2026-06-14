# Activity Feed

> Chronological feed semua update tim. Newest on top. Format: `YYYY-MM-DD HH:MM | <persona> | <ringkasan>`.

---

2026-06-15 07:00 | Bulma+Killua | Responsive HP: desktop pakai sidebar, mobile pakai TOP-BAR + BOTTOM-NAV (Home/Sales/Master/Klien) + konten full-width. Tabel lebar (Sales/Builder/Detail/Master) scroll horizontal. Verified di viewport 390px.
2026-06-15 06:45 | Killua | Item GLOBAL (jenisSlug '*') — komponen sama lintas jenis (galian/mobilisasi/urugan/drainase/dll) cukup didefinisiin 1×, auto muncul di semua jenis. Master Harga ada filter 🌐 Global. + Satuan jadi DROPDOWN (entity Satuan, bisa Tambah Satuan di master) menggantikan input teks. + 2 PDF: Klien (markup) & Internal (modal+breakdown), nama file unik. Fix hooks order ProposalDetail.
2026-06-15 06:25 | Killua | Fitur Zona/Wilayah harga (hybrid): tiap zona bisa mode "% indeks" ATAU "price-list sendiri". Builder ada dropdown Zona → harga auto-recompute. Master Data → tab Zona (kelola % + editor price-list per item). Verified: Indonesia Timur 130% → semua harga ×1.3. Entity Zona+ZonaHarga (Shikamaru).
2026-06-15 06:15 | Killua | Fix input angka (hapus 0 nyangkut → "01"); fix PDF: Subtotal cuma muncul kalau ada PPN, nama file PDF unik per proposal.
2026-06-15 06:05 | Killua | Sales table: search %like%, sort semua kolom (asc/desc + panah), kolom Sales (yang propose) + Update Terakhir (aksi+user), modal Riwayat per proposal. Status change & edit & create → tercatat di history (siapa/apa/kapan).
2026-06-15 06:02 | Killua | Proposal Builder: item manual via modal + checkbox "Simpan juga ke Master Data".
2026-06-15 06:00 | Bulma | Palet ENTENG sage (Tata: coklat boring/gak elegan). Hero terang, KPI multi-warna lembut (sage/emas/biru/rose), kartu rekap diterangin. Redesign PDF penawaran (header bersih, tabel ber-grup, total sage). + Shikamaru: field history + 6 proposal seed.
2026-06-15 05:30 | Bulma | Redesign Dashboard komprehensif+premium: hero ringkasan nilai, 5 KPI, bar chart nilai/bulan, pipeline per status (nilai), nilai per jenis, top klien, proposal terbaru.
2026-06-15 05:28 | Shikamaru | Perkaya master data: tiap kelompok pekerjaan 2-3 item (mobilisasi/galian/pemadatan/pembesian/dll), ~76 item total. Tambah 6 proposal sampel (varied jenis/status/tanggal) + 5 klien biar dashboard terisi.
2026-06-15 05:10 | Bulma | Buang tema ungu+gradasi → palet SEDUH (coffee+cream, Inter, shadow lembut). Sidebar editorial terang, hero solid. No gradasi, border minimal.
2026-06-15 05:08 | Killua | Daftarin route /dashboard (sempat kelempar ke /sales) + jadiin halaman default.
2026-06-15 05:05 | Shikamaru | FIX bug Master Data kosong. Root cause: nama entity (itemmaster/jenislapangan) ≠ service-key (item/jenis) → useList baca koleksi salah. Fix: rename entity ItemMaster→Item, JenisLapangan→Jenis. Verified: 52 item + 5 jenis tampil.
2026-06-15 05:00 | Nami | Tata kesel (UI ungu + bug data + tim gak kebaca). Ambil alih koordinasi recovery, restate a/b/c/d, route Shikamaru (data) + Bulma (redesign). MoM TT-MOM dibuat.
2026-06-14 ~22:00 | Killua | [LapRAB MVP] scaffold Vite+React+Chakra v2+Zustand+Fauxbase, login klik, layout, halaman Sales/Builder/Detail/Master/Klien, print PDF penawaran. (governance belum diterapkan — diperbaiki sesi ini)
