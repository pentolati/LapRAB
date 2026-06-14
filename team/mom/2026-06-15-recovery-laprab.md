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

## 6. Rapat Berikutnya

Setelah Tata konfirmasi arah desain: lanjut verifikasi alur penuh + polish per halaman.

---
*Generate PDF: `python3 team/md2pdf.py mom/2026-06-15-recovery-laprab.md`*
