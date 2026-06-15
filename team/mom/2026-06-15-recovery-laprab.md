# Notulen Rapat — Recovery LapRAB (bug data + redesign + governance)

> Owner: Nami. PDF: `python3 team/md2pdf.py mom/2026-06-15-recovery-laprab.md`.

<table class="meta">
<tr><td>Tanggal</td><td>2026-06-15, Senin</td></tr>
<tr><td>Jenis</td><td>Review / Recovery</td></tr>
<tr><td>Pemimpin</td><td>Nami</td></tr>
<tr><td>Peserta</td><td>@shikamaru, @killua, @bulma, @kakashi, @l</td></tr>
<tr><td>Stakeholder</td><td>@tata</td></tr>
<tr><td>Dokumen terkait</td><td>STATUS.md, ACTIVITY.md, app/</td></tr>
</table>

## 1. Ringkasan

<div class="callout" markdown="1">
Tata kesel: (1) Master Data (Harga/Item & Jenis Lapangan) kosong, (2) UI/UX jelek + ungu (bukan selera; minta kayak SEDUH — warm, mahal, no gradasi/border tebal), (3) gak kebaca siapa ngerjain apa karena governance tim gak diterapkan.

**Poin penting:**

- **Root cause bug data ketemu & FIXED** (Shikamaru): nama entity ≠ service-key.
- **UI di-overhaul** (Bulma): palet SEDUH coffee+cream, Inter, no ungu, no gradasi.
- **Governance diakui bolong** (Nami) — mulai sesi ini STATUS/ACTIVITY/MoM/log dipakai beneran.
</div>

## 2. Keputusan

| Keputusan | Alasan |
|---|---|
| Rename entity `ItemMaster→Item`, `JenisLapangan→Jenis` | Samakan nama entity dengan service-key biar `useList` baca koleksi yang benar |
| Palet final = SEDUH (coffee + cream, Inter, shadow lembut) | Tata tunjuk SEDUH; **ungu (Sajak) ditolak**; no gradasi, border minimal |
| Governance Tata-Eleven diterapkan beneran tiap balasan | Mandat Tata: tiap aksi ditag persona + dicatat ke file tim |

## 3. Siapa Ngerjain Apa (sesi ini)

| Persona | Peran | Kerjaan |
|---|---|---|
| **Nami** | Project Manager | Koordinasi recovery, restate, MoM, route |
| **Shikamaru** | Data/DB | Diagnosa + fix bug Master Data kosong (root cause entity vs service-key) |
| **Killua** | Frontend | Daftarin route Dashboard, bantu verifikasi render |
| **Bulma** | UI/UX | Overhaul tema (buang ungu+gradasi → SEDUH coffee), sidebar editorial |
| **L** | QA | Smoke test: login, master data terisi, dashboard, no error console |
| **Kakashi** | Tech Lead | Pre-Tata Gate sebelum hasil dibawa ke Tata |

## 4. Action Items

| Tugas | PIC | Status |
|---|---|---|
| Fix bug Master Data kosong | @shikamaru | ✅ Selesai |
| Buang ungu + gradasi, palet SEDUH | @bulma | ✅ Selesai |
| Route Dashboard | @killua | ✅ Selesai |
| Konfirmasi arah desain baru ke Tata | @nami | 🟡 Nunggu Tata |
| Verifikasi penuh alur (New Proposal → PDF) | @l | 🟡 Belum |

## 5. Catatan

- Governance sebelumnya cuma "nempel nama persona" tanpa nulis ke file tim — **diakui pelanggaran**, diperbaiki.
- Angka harga di seed = ballpark, editable di Master Data (bukan hardcode).

## 6. Checkpoint Log (SOP-NM-MoM-LIVE)

| Checkpoint | Tanggal | Status | Bukti |
|---|---|---|---|
| Scaffold app (React+Chakra v2+Zustand+Fauxbase) | 2026-06-14 | ✅ | app/ |
| Fix bug Master Data kosong (entity = service-key) | 2026-06-15 | ✅ | 52 item tampil |
| Redesign UI: palet SEDUH → final **sage airy** (no ungu/gradasi) | 2026-06-15 | ✅ | theme.js |
| Dashboard komprehensif (KPI, trend/bulan, pipeline, top klien) | 2026-06-15 | ✅ | DashboardPage |
| Master data diperkaya + item **GLOBAL** (lintas jenis) | 2026-06-15 | ✅ | seeds |
| Satuan jadi **dropdown** + bisa tambah satuan | 2026-06-15 | ✅ | MasterDataPage |
| Sales table: search, sort semua kolom, kolom Sales + update terakhir | 2026-06-15 | ✅ | SalesPage |
| Riwayat perubahan per proposal (modal, siapa/apa/kapan) | 2026-06-15 | ✅ | history modal |
| Proposal builder: zona (% / price-list), buffer+margin, item manual→master | 2026-06-15 | ✅ | ProposalBuilder |
| Zona/Wilayah harga (hybrid % indeks atau price-list) | 2026-06-15 | ✅ | Master→Zona |
| 2 PDF: Klien (markup) & Internal (modal+breakdown), nama file unik | 2026-06-15 | ✅ | PrintProposal |
| Responsive HP (bottom-nav + top-bar + tabel scroll) | 2026-06-15 | ✅ | AppLayout |
| Fix border kepotong (overflow card tabel) | 2026-06-15 | ✅ | — |
| Push ke GitHub | 2026-06-15 | ✅ | github.com/pentolati/LapRAB |

## 7. Rapat Berikutnya

Opsional lanjutan: verifikasi harga riil (riset), template jenis lapangan tambahan, struktur indoor (atap/rangka), PDF kop surat/logo klien.

---
*Generate PDF: `python3 team/md2pdf.py mom/2026-06-15-recovery-laprab.md`*
