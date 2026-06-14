# Tool: Risk Register

**Apa:** risk yang udah di-**skor** (probabilitas × dampak) + di-prioritas + ada mitigasi. Lebih dalam dari kolom Risk di RAID log — ini buat risk yang butuh perhatian serius.
**Kapan dipake:** SOP-NM-03 §6.2, pas analisis risk (terutama yang Medium/High).
**Cara skor:** **Probabilitas** (L=jarang / M=mungkin / H=besar) × **Dampak** (L=kecil / M=ganggu / H=krisis). Skor = posisi di matriks → prioritas respon.
**Output:** living file. Risk H×H → surface ke Tata/Lelouch/Kakashi sesuai domain.

---

## Matriks prioritas (probabilitas × dampak)

| | Dampak L | Dampak M | Dampak H |
|---|---|---|---|
| **Prob H** | Sedang | **Tinggi** | **🔴 Kritis** |
| **Prob M** | Rendah | Sedang | **Tinggi** |
| **Prob L** | Rendah | Rendah | Sedang |

**Aturan respon:** 🔴 Kritis → surface Tata + mitigasi wajib + owner. Tinggi → mitigasi+owner+due. Sedang → monitor. Rendah → accept/watch.

---

## TEMPLATE (copy mulai sini)

```markdown
# Risk Register — <project>

| ID | Date | Risk | Prob | Dampak | Skor | Mitigasi | Owner | Due | Status |
|---|---|---|---|---|---|---|---|---|---|
| R1 | YYYY-MM-DD | <risk> | H | H | 🔴 Kritis | <mitigasi> | @persona | YYYY-MM-DD | Open |
```

**Strategi respon (pilih per risk):** **Avoid** (hindari sumbernya) · **Mitigate** (kurangi prob/dampak) · **Transfer** (pindah ke pihak lain) · **Accept** (terima, watch).

---

## CONTOH TERISI (dari proyek contoh)

```markdown
# Risk Register — Proyek-Contoh

| ID | Date | Risk | Prob | Dampak | Skor | Strategi | Mitigasi | Owner | Due | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| R1 | 2026-05-28 | Scope interactive-invitation RAKSASA (8 component + dashboard + auth + 2 tipe) → boil-the-ocean, tim overload | H | H | 🔴 Kritis | Mitigate | **Cap per-fase** — probing satu-satu, Fase 1 konten dulu, Fase 2 dashboard sesi terpisah | @nami | 2026-05-28 | Open (mitigated, Fase 1 LOCKED) |
| R2 | 2026-05-28 | Tim hardcode field padahal Tata mau semua on/off + editable → rework besar pas build | M | H | Tinggi | Avoid | Arsitektur **config-driven dari awal**, jangan hardcode field | @kakashi/@saitama | build phase | Open (watch) |
| R3 | 2026-05-27 | Over-iteration landing v4 — Tata bilang "kurang" → iterasi infinite | M | M | Sedang | Mitigate | Timeline **cap 4 jam total**, Kakashi gate strict | @nami | 2026-05-27 | Closed (v4 shipped) |
```

> **R1 di-skor 🔴 Kritis** (H×H) → makanya Nami **surface + mitigasi duluan** (pecah per-fase) sebelum tim mulai. Ini beda risk vs issue: R1 belum jadi krisis, di-cegah. Kalau dibiarin (gak di-cap), bakal jadi issue "tim overload, deliver semua sekaligus berantakan". **Mencegah > memadamkan.**
