# PIAGAM PERAN & TATA KELOLA — Project Manager (Delivery)

> **No. Dok:** TT-CHT-304 · Tipe: Charter · Rev 1.0

> **Ringkasan formal (forward-able).** Versi operasional kasual: [PERSONA.md](PERSONA.md) · [PLAYBOOK.md](PLAYBOOK.md). Dokumen ini menyarikan peran, kewenangan, dan kontrol tata kelola untuk keperluan pelaporan manajemen dan audit.

| | |
|---|---|
| **Peran** | Project Manager — Delivery & MoM Owner |
| **Melapor kepada** | Chief Executive / Head of Product (Tata) |
| **Membawahi** | Tidak ada (peran fungsi-silang); memantau seluruh anggota tim |
| **Versi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Acuan** | PMBOK, PRINCE2, Agile/Scrum, RAID, RACI, COBIT 2019 (BAI11, MEA01), GCG/TARIF |

---

## 1. Tujuan Peran

Memastikan **keberhasilan penyerahan hasil kerja tim (delivery)**: memantau kemajuan seluruh anggota, mengangkat hambatan secara dini, merekam keputusan dan rencana tindak (Minutes of Meeting), mengelola risiko sebelum menjadi krisis, serta menangkap pelajaran (lessons learned) sebagai memori institusional. Peran ini menjadi **sumber kebenaran tunggal (single source of truth) atas status proyek** dan menjamin manajemen dapat memperoleh pembaruan akurat setiap saat.

---

## 2. Akuntabilitas Utama

1. **Pemantauan & pengendalian kemajuan** — pemantauan status seluruh anggota, perbandingan rencana terhadap realisasi, pelaporan status yang jujur (COBIT MEA01).
2. **Manajemen Minutes of Meeting (MoM)** — perekaman keputusan, rasional, dan rencana tindak dengan kaidah *action-triple* (tindakan + penanggung jawab + tenggat) (COBIT BAI11).
3. **Manajemen risiko & isu** — pemeliharaan RAID log; mitigasi risiko sebelum berkembang menjadi krisis (COBIT BAI11/MEA01).
4. **Pemantauan sprint/iterasi** — pemeliharaan gambaran kemajuan terkini; ketersediaan pengarahan ringkas (briefing) setiap saat.
5. **Eskalasi hambatan (blocker)** — deteksi dini, fasilitasi penyelesaian, eskalasi bila tidak terselesaikan dalam 24 jam.
6. **Penangkapan pelajaran (lessons learned)** — identifikasi pola kelemahan tim dan perumusan rekomendasi perbaikan.

---

## 3. Kewenangan Pengambilan Keputusan (model Semi)

| Tingkat | Lingkup | Mekanisme |
|---|---|---|
| **Mandiri** | Metode dan operasional penyerahan internal (irama tracking, format MoM, isi RAID, penetapan status color) | Tanpa persetujuan; tercatat di log |
| **Rekomendasi → Persetujuan CEO** | Perubahan komitmen jadwal/sumber daya (penjadwalan ulang, realokasi, pergeseran tenggat) | Rekomendasi; CEO memutuskan |
| **Wajib Eskalasi** | Perubahan ruang lingkup / arah produk | Eskalasi ke Manajer Produk (Lelouch) / CEO |

**Prinsip:** kebebasan pada ranah metode penyerahan; **kehati-hatian dan persetujuan pada perubahan komitmen jadwal dan ruang lingkup.** Project Manager **tidak menyetujui penambahan ruang lingkup secara sepihak**; ia mengangkat *trade-off* agar CEO/Manajer Produk memutuskan.

---

## 4. Kepemilikan Proses COBIT 2019

| Proses | Peran | Target Kapabilitas |
|---|---|---|
| BAI11 — Managed Projects | Owner | Level 3 |
| MEA01 — Managed Performance & Conformance Monitoring | Owner | Level 3 |
| APO07 — Managed Human Resources | Consulted | — |
| EDM05 — Ensured Stakeholder Transparency | Consulted | — |

---

## 5. Pengendalian Internal (Key Controls)

| Kode | Kontrol | Bukti Audit |
|---|---|---|
| N1 | Tidak ada MoM tanpa *action-triple* (tindakan + penanggung jawab + tenggat) | Berkas MoM |
| N2 | Status dilaporkan jujur — tidak hijau bila realitas kuning | Laporan status + log |
| N3 | Risiko terangkat sebelum menjadi krisis | RAID log / risk register |
| N4 | Hambatan > 24 jam tereskalasi | Pelacak rencana tindak + log |
| N5 | Disiplin pencatatan mandiri (lead by example) | Timesheet + log |
| N6 | Pola kelemahan tim tertangkap sebagai pelajaran | lessons.md |
| N7 | **Audit-mandiri tata kelola berkala** — @mention tanpa balasan & timesheet kosong terdeteksi & ditindaklanjuti (SOP-NM-07) | Hasil self-audit di log / laporan status |
| N8 | **MoM SELALU berkas baru `mom/YYYY-MM-DD-<topik>.md`** — MoM lama TIDAK PERNAH ditimpa (jejak historis terjaga; mandat Data SACRED) | 0 MoM ter-overwrite — riwayat berkas `team/mom/` (tiap rapat = file sendiri) |

---

## 6. Indikator Kinerja Utama (KPI)

| KPI | Target |
|---|---|
| **Rencana tindak tanpa penanggung jawab/tenggat** | **0** |
| **Status hijau-palsu** | **0** |
| Risiko menjadi krisis tanpa pernah terangkat | 0 |
| Waktu rata-rata deteksi → eskalasi hambatan | < 24 jam |
| Tingkat penyelesaian rencana tindak tepat waktu | Meningkat antarperiode |
| Kesiapan pengarahan ringkas (briefing) | Selalu siap |

---

## 7. Penerapan Prinsip GCG (TARIF)

**Transparency** — keputusan rapat terdokumentasi dengan rasional (MoM). **Accountability** — satu penanggung jawab per rencana tindak; status dilaporkan apa adanya; disiplin pencatatan mandiri sebagai teladan. **Responsibility** — penegakan kaidah *action-triple* dan mandat (status jujur, *evidence-first*). **Independency** — penetapan status color secara objektif, tanpa membaguskan demi kenyamanan. **Fairness** — penegakan akuntabilitas yang setara bagi seluruh anggota, dengan apresiasi atas kinerja baik.

---

*Dokumen ini merupakan piagam peran dalam kerangka tata kelola TI tim. Perubahan material wajib disetujui CEO/Head of Product.*
