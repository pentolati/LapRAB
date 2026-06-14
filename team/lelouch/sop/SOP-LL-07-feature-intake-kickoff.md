# SOP-LL-07 — Feature Intake & Kickoff (PM Inisiator)

> Dokumen terkontrol. Owner: **Lelouch** (Product Manager). Trigger: **SETIAP** ada ide/permintaan fitur dari Tata. COBIT: BAI02.
> **Latar (2026-06-03):** Tata komplain "Lelouch (PM) kok gak pernah join". Akar masalah: gak ada pintu masuk resmi — kerjaan langsung loncat ke FE/desain tanpa PM. SOP ini bikin **tiap fitur WAJIB START dari Lelouch**. Standar: Marty Cagan (empowered product team — PM owner value+viability, kasih MASALAH bukan fitur).

## 1. Tujuan
Memastikan **tiap fitur dimulai oleh PM** dengan intake + kickoff yang jelas, supaya tim tau **apa, kenapa, untuk siapa, ukuran sukses** SEBELUM desain/koding. PM **selalu in-loop**, gak ilang.

## 2. Ruang Lingkup
Semua permintaan fitur/perubahan produk dari Tata (besar/kecil). Bug murni & typo boleh skip (langsung Kakashi/owner).

## 3. Prinsip (Cagan/empowered)
- PM bawa **masalah & outcome**, bukan daftar fitur jadi.
- Triad joint dari awal: **Value+Viability (Lelouch)** · **Usability (Bulma)** · **Feasibility (Kakashi)**.
- Tim = **missionary** (paham misi), bukan mercenary (disuruh doang).
- Outcome > output (ukur dampak, bukan jumlah fitur).

## 4. Prosedur (langkah + exit criteria)
1. **INTAKE** — Tata lempar ide → Lelouch tangkap di 1 tempat (context-log / intake). Catat: permintaan mentah + tanggal. → *exit:* tercatat.
2. **CLARIFY (probing)** — Lelouch probing Tata (AskUserQuestion) sampai jelas: masalah apa, untuk siapa, kenapa penting, batas. (pakai SOP-LL-01). → *exit:* masalah jelas.
3. **FRAME jadi outcome** — tulis 1-paragraf: *"Untuk [user], biar [outcome], kita selesaikan [masalah]. Sukses = [metrik]."* → *exit:* problem statement + ukuran sukses.
4. **TRIAD KICKOFF** — Lelouch panggil **Bulma (usability) + Kakashi (feasibility)** (+ Sogeking kalau ada implikasi arsitektur). Sepakati pendekatan & batasan. → *exit:* triad align.
5. **PRIORITAS & SCOPE** — Lelouch tentuin MoSCoW/RICE, MVP vs nanti (SOP-LL-03). → *exit:* scope locked.
6. **HANDOFF terstruktur** — Lelouch kasih ke Nami (delivery) buat dipecah jadi task + assign (grooming SOP-LL-06). → *exit:* task list + owner.
7. **STAY IN-LOOP** — Lelouch review tiap milestone (desain, sebelum gate), pastiin gak melenceng dari outcome. → *exit:* PM sign tiap fase.

## 5. Output wajib
- Problem statement + metrik sukses (1 paragraf)
- MoM kickoff (Nami) dengan triad hadir
- Scope + prioritas
- Entri di `team/tata-context-log.md`

## 6. RACI
R: Lelouch · A: Lelouch · C: Bulma, Kakashi, Sogeking, Senku · I: Nami, Tata. **Kickoff tanpa Lelouch = pelanggaran proses.**

## 7. KPI
- Fitur yang dimulai TANPA intake PM = **0**
- Fitur dengan problem statement + metrik sebelum build = 100%
- PM hadir di kickoff = 100%

## 8. Flowchart alur (level TIM)

> Flowchart lengkap "Request Tata → kemana → siapa pegang → output" itu **alur SAK TIM**, bukan punya Lelouch — ada di SOT level tim: **[`team/07-GOVERNANCE-COMPLIANCE-MANUAL.md`](../../07-GOVERNANCE-COMPLIANCE-MANUAL.md) §4** (diagram grafis). SOP-LL-07 ini cuma ngatur bagian **intake & kickoff (step 1-5)** di alur itu.

## 9. Riwayat Revisi
| Versi | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-06-03 | Dibuat — respons "PM gak pernah join". Mandat Tata. Standar Cagan. |
| 1.1 | 2026-06-03 | Tambah FLOWCHART request→output (mandat Tata). |
