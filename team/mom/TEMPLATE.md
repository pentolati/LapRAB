# Notulen Rapat — [Judul]

> Template standar MoM Tata-Eleven. Copy, ganti `[...]`, isi seperlunya. **Singkat & jelas.**
> Owner: Nami. Tiap MoM wajib PDF: `python3 team/md2pdf.py mom/<file>.md`.
> Aturan: tanggal = hari ini (cek `date`). **Jangan pakai simbol matematika** (tulis "perubahan", "total", dll).

<table class="meta">
<tr><td>Tanggal</td><td>[YYYY-MM-DD, Hari]</td></tr>
<tr><td>Jenis</td><td>[Requirement / Grooming / Planning / Review / Retro]</td></tr>
<tr><td>Pemimpin</td><td>Nami</td></tr>
<tr><td>Peserta</td><td>[@persona, @persona, ...]</td></tr>
<tr><td>Stakeholder</td><td>@tata</td></tr>
<tr><td>Dokumen terkait</td><td>[link]</td></tr>
</table>

## 1. Ringkasan

<div class="callout" markdown="1">
[1-2 kalimat konteks: apa yang dibahas + hasil utama.]

**Poin penting (sekali baca paham):**

- [hasil / keputusan utama]
- [status sekarang]
- [yang masih perlu / langkah berikutnya]
</div>

## 2. Timeline

<table class="gantt">
<thead>
<tr><th class="task">Pekerjaan</th><th>[Sen 1]</th><th>[Sel 2]</th><th>[Rab 3]</th><th>[Kam 4]</th><th>[Jum 5]</th></tr>
</thead>
<tbody>
<tr><td class="label">[Langkah 1]</td><td class="bar done">selesai</td><td></td><td></td><td></td><td></td></tr>
<tr><td class="label">[Langkah 2]</td><td></td><td class="bar now">jalan</td><td></td><td></td><td></td></tr>
<tr><td class="label">[Langkah 3]</td><td></td><td></td><td class="bar plan" colspan="2">rencana</td><td></td></tr>
<tr><td class="label">[Selesai / sign-off]</td><td></td><td></td><td></td><td></td><td class="bar plan">target</td></tr>
</tbody>
</table>

<div class="legend">
<span><i class="done"></i>Selesai</span>
<span><i class="now"></i>Sedang dikerjakan</span>
<span><i class="plan"></i>Rencana</span>
</div>

## 3. Keputusan

| Keputusan | Alasan |
|---|---|
| [apa yang diputuskan] | [kenapa] |

## 4. Action Items

| Tugas | Penanggung jawab | Deadline | Status |
|---|---|---|---|
| [tugas konkret, satu hal] | @[satu orang] | [YYYY-MM-DD] | Belum / Jalan / Selesai |

## 5. Tim & Tanggung Jawab

| Orang | Pegang apa |
|---|---|
| @[persona] | [tanggung jawab singkat] |

## 6. Alur Kerja

| Langkah | Yang masuk (input) | Yang keluar (output) | Owner |
|---|---|---|---|
| 1. [nama] | [bahan/input] | [hasil] | @[..] |

## 7. Risiko

| Risiko | Dampak | Cara tangani |
|---|---|---|
| [risiko] | Tinggi / Sedang / Rendah | [mitigasi] |

## 8. Catatan & Pertanyaan Terbuka

- [ ] [hal yang belum kelar / nunggu jawaban — siapa, apa]

## 9. Rapat Berikutnya

[Tanggal + apa yang dibahas]

---
*Punya versi PDF (mandat Tata). Generate: `python3 team/md2pdf.py mom/<file>.md`*
