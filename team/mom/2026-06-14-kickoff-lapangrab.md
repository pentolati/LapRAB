# Notulen Rapat — Kickoff LapangRAB

> Owner: Nami. PDF: `python3 team/md2pdf.py mom/2026-06-14-kickoff-lapangrab.md`.

<table class="meta">
<tr><td>Tanggal</td><td>2026-06-14, Minggu</td></tr>
<tr><td>Jenis</td><td>Requirement</td></tr>
<tr><td>Pemimpin</td><td>Nami</td></tr>
<tr><td>Peserta</td><td>@nami, @senku, @shikamaru, @killua, @kakashi</td></tr>
<tr><td>Stakeholder</td><td>@tata</td></tr>
<tr><td>Dokumen terkait</td><td>memory/lapangrab-rab-structure.md, CLAUDE.md</td></tr>
</table>

## 1. Ringkasan

<div class="callout" markdown="1">
Kickoff project LapangRAB: tool generator Rencana Anggaran Biaya untuk konstruksi lapangan olahraga (mini soccer, futsal, padel, badminton, softball). User utama: Tata sebagai kontraktor lapangan.

**Poin penting (sekali baca paham):**

- Nama produk diputuskan: **LapangRAB**. Tim Tata-Eleven sudah di-clone ke `RAB/team/`.
- Riset dasar (deep-research, 23 sumber) selesai: rumus RAB, template item pekerjaan, satuan, dan parameter input sudah terverifikasi untuk mini soccer.
- Langkah berikutnya: riset SUPER DETAIL per-jenis lapangan (padel, futsal, badminton, softball, struktur indoor, koefisien AHSP, faktor lokasi) sebelum desain model data.
- Keputusan desain dibutuhkan: cara handle item/harga yang TIDAK ada di database.
</div>

## 2. Keputusan

| Keputusan | Alasan |
|---|---|
| Nama produk: LapangRAB | Jelas niche (lapangan + RAB), lokal, mudah diingat |
| Stack: React + Zustand + Chakra v2 + Fauxbase | Default prototyping stack Tata |
| Riset super detail per-jenis dulu, baru desain model data | Item spesifik padel/futsal/badminton/softball belum terverifikasi kuat; desain entity butuh data ini biar gak salah struktur |
| Harga satuan disimpan di tabel terkonfigurasi (bukan hardcode) | Harga sangat lebar & cepat basi, harus mudah di-update |

## 3. Action Items

| Tugas | Penanggung jawab | Deadline | Status |
|---|---|---|---|
| Riset super detail per-jenis lapangan + indoor + AHSP + lokasi | @senku | 2026-06-14 | Jalan |
| Desain handling "item/harga tidak ada di database" | @shikamaru | 2026-06-15 | Belum |
| Desain model data Fauxbase (setelah riset) | @senku + @killua | 2026-06-15 | Belum |
| Git init + scaffold project | @killua | 2026-06-15 | Belum |

## 4. Risiko

| Risiko | Dampak | Cara tangani |
|---|---|---|
| Angka rupiah cepat basi / tidak akurat | Sedang | Harga di tabel terkonfigurasi, ada disclaimer estimasi, mudah edit user |
| Data per-jenis (padel/softball) tipis di sumber publik | Sedang | Riset detail + tandai item yang perlu validasi Tata dari pengalaman lapangan |
| User butuh item custom yang tak terduga | Tinggi | Desain database yang extensible + fitur tambah item manual (lihat §6) |

## 5. Catatan & Pertanyaan Terbuka

- [ ] Handling item/harga tidak ada di DB → @shikamaru desain (jawaban awal sudah dibahas di chat)
- [ ] Mode RAB: cepat (harga jadi/m2) dulu, AHSP-detail nyusul — konfirmasi Tata
- [ ] Faktor pengali harga per lokasi/provinsi belum ada data kuantitatif

## 6. Rapat Berikutnya

Setelah riset per-jenis selesai: review hasil + finalisasi model data Fauxbase.

---
*Generate PDF: `python3 team/md2pdf.py mom/2026-06-14-kickoff-lapangrab.md`*
