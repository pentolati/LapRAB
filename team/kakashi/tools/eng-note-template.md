# Tool: Engineering Note (Tech Note high-level — gaya Notion)

**Apa:** catatan teknis **high-level** wajib tiap orang tech (Killua/Saitama/Shikamaru/Kakashi/Levi) tiap ngerjain unit kerja teknis. **Bukan** dump kode — ini **konteks + keputusan** biar gak hilang antar sesi & gampang dibaca orang lain (termasuk Tata yang non-engineer, dan auditor).
**Kenapa:** standar tim unicorn (Google/Meta "design doc / eng note") — keputusan teknis didokumentasi ringkas, bukan disimpan di kepala. **Mandat Tata 2026-06-03.**
**Kapan:** tiap selesai unit kerja teknis non-trivial. Simpan di `team/<nama>/notes/YYYY-MM-DD-<topik>.md`. Trivial (typo/one-liner) → cukup di `log.md`.
**Aturan:** **WAJIB ikut template ini** (seragam). Bahasa **plain** — jelasin "kenapa", bukan cuma "apa". Link ke PRD/ADR/SOP terkait.

---

## TEMPLATE (copy mulai sini)

```markdown
# Eng Note — <topik> (<persona>, YYYY-MM-DD)

> No. Dok: TT-REC-NOTE-<persona> · Status: <Draft/Final> · Terkait: <PRD/ADR/SOP yang relevan>

## 1. Konteks (1 paragraf)
Lagi ngerjain apa & kenapa. Request dari siapa, buat fitur apa.

## 2. Keputusan teknis (high-level)
- **Apa yang gua pilih:** <pendekatan/pattern/library>
- **Kenapa:** <alasan singkat — trade-off yang dimenangin>
- **Alternatif yang ditolak:** <opsi lain + kenapa gak dipilih>

## 3. Yang berubah
- File/komponen/endpoint/tabel yang disentuh (high-level, bukan diff)
- Dampak ke peran lain (cth: "API contract berubah → @killua perlu tau")

## 4. Risiko / catatan
- Hal yang belum kelar, asumsi, atau utang teknis (kalau ada)
- Edge case yang udah / belum di-handle

## 5. Handoff & verifikasi
- **→ @<persona>:** <kalau ada serah-terima / butuh dicek>
- **Bukti:** <test pass / screenshot / output — evidence first>
```

---

## Aturan isi (biar setara standar dunia)
- **High-level, bukan tutorial** — orang lain baca 2 menit langsung paham konteks + keputusan.
- **"Kenapa" > "apa"** — keputusan + trade-off yang penting, bukan langkah mekanis.
- **Link, jangan duplikat** — tunjuk PRD/ADR/SOP, jangan salin isinya (anti-redundan).
- **Suggestion arsitektur besar** → bukan di eng-note, naikin jadi **ADR** (`adr-template.md`) + kabarin @sogeking/@kakashi.
- Lewat **Pre-Tata Gate** kalau jadi bagian deliverable ke Tata.
