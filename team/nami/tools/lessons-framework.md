# Tool: Lessons-Learned Framework

**Apa:** kerangka nangkep pelajaran dari pattern kelemahan tim → memori institusional. Bukan nyari siapa-salah, tapi **kenapa sistemnya ngebolehin pattern ini muncul**.
**Kapan dipake:** SOP-NM-06, pas pattern berulang ke-observe / sprint close / retro.
**5 pattern type yang Nami observe:** (a) **Slip** estimate optimistik · (b) **Quality** sering bocor ke Tata · (c) **Komunikasi** handoff butuh re-clarify · (d) **Burnout** silent padahal in_progress · (e) **Conflict** blame ping-pong.
**Prinsip Tata:** anti-defensif (fix root, bukan blame orang), institutional memory (gak ulang kesalahan), Fairness (framing sistem bukan individu).
**Output:** append ke `nami/lessons.md` — **permanen** (kontrol N6).

---

## TEMPLATE (copy mulai sini)

```markdown
## YYYY-MM-DD — [Title]

**Pattern observed**: [konkret behavior — apa yang berulang, bukti dari log/ACTIVITY]
**Root cause hypothesis**: [akar sistemik — kenapa proses ngebolehin ini, BUKAN "si A salah"]
**Recommendation**: [actionable — apa yang diubah di proses/checklist/SOP]
**Owner follow-up**: @persona
```

**Checklist sebelum tulis:**
- [ ] Ini **pattern (berulang)**, bukan one-off? (one-off → log aja)
- [ ] Root cause = **sistem/proses**, bukan nyalahin orang?
- [ ] Recommendation **actionable** (ada yang bisa dieksekusi)?
- [ ] Owner follow-up jelas?

---

## CONTOH TERISI (insiden contoh — pola yang lazim muncul)

```markdown
## YYYY-MM-DD — Fake stats placeholder violates "evidence first" mandate

**Pattern observed**: Landing v3 Stats section ditulis "10.000+ Pengguna aktif / 98% Tingkat kepuasan /
Rp 0 Biaya setup / 24/7 Support" — semua number TANPA data backing. Lelouch catch saat gap analysis
(mini-Tata filter), Senku confirm via competitor research (kompetitor show genuine 4.9/5 from
10k+ reviews Trustpilot).

**Root cause hypothesis**: Pas Bulma + Killua + Kakashi gate v3, tim assume "Stats section" =
standard SaaS landing pattern. Skip cross-check "apakah angka ini verifiable / accurate?". Tata
mandate "evidence first" gak di-trigger karena gak ada explicit checklist untuk numeric claim.

**Recommendation**:
- Untuk semua persona authoring landing copy: kalau ada angka/stat di-publish, MUST verifiable.
  Default: skip stat sampai data real ada. Alternatif: trust signal verifiable (founded year,
  location, milestone qualitative).
- Update PLAYBOOK Kakashi Pre-Tata Gate: tambah item "Cross-check numeric claim".

**Owner follow-up**: @kakashi update Pre-Tata Gate checklist. Gw (Nami) update report readability
rule "no fake number".
```

> **Kenapa ini lesson, bukan blame?** Root cause = "**checklist gak punya item verifiable-claim**", bukan "Bulma/Killua tukang ngarang". Itu beda penting: fix proses → permanen (Kakashi tambah item di Gate checklist). Fix orang → ke-ulang. Ini siklus penuh: pattern → root cause sistemik → recommendation → owner → **proses berubah**. Lesson ini juga jadi input RCA-001 Kakashi (SOP-KK-05). **Satu kesalahan jadi satu perbaikan permanen.**
