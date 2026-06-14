# Tool: Root-Cause Analysis (RCA) — 5 Whys

**Apa:** alat bedah akar masalah pas ada incident — bug critical atau output jelek bocor ke Tata.
**Kapan dipake:** SOP-KK-05 (incident). Bukan buat nyari siapa-salah, tapi **kenapa sistemnya ngebolehin ini kejadian.**
**Framework:** ITIL Problem Management, COBIT DSS03 (Managed Problems), Toyota 5 Whys.
**Prinsip Tata:** anti-defensif (akui), fix root-cause (bukan band-aid), no blame ping-pong.

---

## TEMPLATE (copy mulai sini)

```markdown
# RCA-NNN: <judul incident>

**Tanggal:** YYYY-MM-DD · **Severity:** S1/S2/S3 · **Owner RCA:** Kakashi
**Terdampak:** <apa yang rusak / siapa yang kena>

## 1. Apa yang kejadian (fakta, bukan opini)
<kronologi singkat + bukti: log/screenshot>

## 2. Containment (langkah darurat)
<apa yang dilakuin biar gak makin parah — rollback/hotfix>

## 3. 5 Whys
1. Kenapa X? → karena ...
2. Kenapa itu? → karena ...
3. Kenapa itu? → karena ...
4. Kenapa itu? → karena ...
5. Kenapa itu? → **ROOT CAUSE:** ...

## 4. Corrective action (fix root, bukan band-aid)
| Action | Owner | Due | Tipe |
|---|---|---|---|
| ... | @... | YYYY-MM-DD | fix / preventive |

## 5. Systemic fix (biar gak terulang)
- [ ] Update checklist/SOP: ...
- [ ] Update tool: ...
- [ ] Save learning ke lessons.md

## 6. Akuntabilitas
<kalau bocor ke Tata: "gate gw bolong di X" — akui, gak throw tim>
```

---

## CONTOH TERISI (insiden nyata Proyek-Contoh)

```markdown
# RCA-001: Fake stats di landing page lolos sampai ke Tata

**Tanggal:** 2026-05-27 · **Severity:** S2 · **Owner RCA:** Kakashi
**Terdampak:** Kredibilitas landing v3 — angka statistik dibikin-bikin (gak verifiable)

## 1. Apa yang kejadian
Landing v3 nampilin "Stats" (jumlah user, undangan terkirim) yang angkanya
karangan, padahal produk belum launch. Lelouch gap-analysis nangkep ini:
ngelanggar mandate "evidence first".

## 2. Containment
Stats di-replace jadi klaim yang verifiable / dihapus di v4 (Killua re-impl).

## 3. 5 Whys
1. Kenapa fake stats tampil? → Bulma/Killua isi placeholder angka biar section "rame".
2. Kenapa placeholder lolos? → gak ada cek "klaim ini bisa dibuktiin gak?" di QC.
3. Kenapa gak ada cek itu? → Pre-Tata Gate checklist belum punya item "evidence-first / no fake data".
4. Kenapa belum punya? → checklist disusun fokus ke teknis (stack, a11y), belum ke integritas klaim.
5. Kenapa gitu? → **ROOT CAUSE:** mandate "evidence first" belum diterjemahin jadi item QC konkret yang dicek tiap deliverable.

## 4. Corrective action
| Action | Owner | Due | Tipe |
|---|---|---|---|
| Replace fake stats → verifiable claim | @killua | 2026-05-27 | fix |
| Tambah item "no fake data / evidence-first" di Gate checklist | @kakashi | 2026-05-27 | preventive |

## 5. Systemic fix
- [x] Update pre-tata-gate-checklist.md: tambah cek integritas klaim
- [x] Save learning ke nami/lessons.md (fake-stats violation)

## 6. Akuntabilitas
Gate gw bolong — gw lewatin cek "klaim verifiable". Bulma/Killua isi sesuai brief
yang gak nyebutin constraint ini. Itu gw yang harusnya gate lebih ketat.
```

> Insiden ini beneran kejadian (lihat ACTIVITY 2026-05-27 + nami/lessons.md). RCA ngubah 1 kesalahan jadi 1 perbaikan permanen di checklist. Itu gunanya.
