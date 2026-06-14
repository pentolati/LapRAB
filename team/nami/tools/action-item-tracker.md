# Tool: Action Item Tracker

**Apa:** pelacak rencana tindak dari MoM/sprint — **action + owner + due + status** (action-triple), plus follow-up.
**Kapan dipake:** SOP-NM-01 (dari MoM), SOP-NM-04 (sprint), SOP-NM-05 (blocker). Follow-up H+3 untuk yang open.
**Aturan keras Nami:** action item tanpa **owner** atau **due date** = **bukan action item** (kontrol N1). Follow-up open item, jangan drift.
**Output:** rolling file; sinkron dengan MoM source + log persona owner (flag via `(@nami: action item dari MoM YYYY-MM-DD)`).

---

## Status legend
🔵 Open · 🟡 In Progress · ✅ Done · ⏸️ Blocked · ❌ Cancelled

---

## TEMPLATE (copy mulai sini)

```markdown
# Action Item Tracker — <project / sprint>

| # | Action | Owner | Due | Status | Source | Follow-up |
|---|---|---|---|---|---|---|
| 1 | **<action konkret>** | @persona | YYYY-MM-DD | 🔵 Open | MoM YYYY-MM-DD | — |
```

**Aturan kolom:**
- **Action** — konkret + bold (apa yang harus terjadi, bukan "bahas X").
- **Owner** — tepat 1 `@persona`. Gak boleh kosong / "tim".
- **Due** — tanggal jelas. "TBD" cuma boleh kalau eksplisit nunggu trigger (catat trigger-nya).
- **Status** — emoji legend di atas.
- **Source** — MoM/sprint/blocker mana.
- **Follow-up** — catatan ping H+3 kalau masih open.

---

## CONTOH TERISI (dari proyek contoh)

```markdown
# Action Item Tracker — Proyek-Contoh

| # | Action | Owner | Due | Status | Source | Follow-up |
|---|---|---|---|---|---|---|
| 1 | **Replace fake Stats → verifiable trust signal** | @bulma→@killua | 2026-05-27 | ✅ Done | MoM 2026-05-27 v4 | gate PASS |
| 2 | **WhatsApp prominence (hero trust row + step 3)** | @killua | 2026-05-27 | ✅ Done | MoM 2026-05-27 v4 | — |
| 3 | **Subtle motion (framer-motion fade-up)** | @killua | 2026-05-27 | ✅ Done | MoM 2026-05-27 v4 | — |
| 4 | **FAQ refine — bahasa warung** | @killua | 2026-05-27 | ✅ Done | MoM 2026-05-27 v4 | P2 |
| 5 | **Lead probing per-component interactive (C1..C8)** | @lelouch | 2026-05-28 | ✅ Done | MoM 2026-05-28 | 8/8 LOCKED |
| 6 | **Catat decision tiap jawaban Tata ke MoM** | @nami | 2026-05-28 | ✅ Done | MoM 2026-05-28 | — |
| 7 | **Jadwalin probing Fase 2 (dashboard/settings)** | @nami | TBD (nunggu aba-aba Tata) | 🔵 Open | MoM 2026-05-28 | trigger = Tata |
| 8 | **Update Pre-Tata Gate checklist: numeric-claim** | @kakashi | 2026-05-27 | ✅ Done | lesson fake-stats | preventive |
```

> **#7 due = "TBD"** tapi **eksplisit** trigger-nya ("nunggu aba-aba Tata") — itu boleh. Yang haram = action tanpa owner atau due gantung tanpa alasan. **#8** lahir dari lesson learned (SOP-NM-06) → ini contoh action item bukan cuma dari MoM, tapi dari pattern observation. Semua punya owner + tracking. Itu kenapa "action item tanpa owner/due = 0" (KPI).
