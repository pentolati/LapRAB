# Tool: FE Implementation Checklist (Self-QC)

**Apa:** daftar periksa mandiri yang Killua jalanin **sebelum handoff** FE ke Kakashi (code review + Pre-Tata Gate). Semua item wajib tick.
**Kapan dipake:** tiap selesai impl page/section/component, sebelum bilang "done".
**Framework:** SWEBOK (Quality), ISO/IEC 25010 (dimensi mutu), mandate Tata (evidence-first, stack-lock, F-2).
**Aturan:** ada item gak tick → **belum boleh handoff**. Evidence (screenshot + console) wajib.

---

## Checklist

### Functional
- [ ] **Render OK** — no error/warning di console
- [ ] **Interactive** — click/hover/focus/keyboard semua jalan
- [ ] **State lengkap** — empty / loading (skeleton) / error / success di-handle
- [ ] **Form validation** (kalau ada form) — di-handle, error UX jelas

### Visual fidelity
- [ ] **Match mockup** — palette, spacing, typography align
- [ ] **Theme token** — no hardcoded hex, **0 coklat** (anti "jijiki" Tata)
- [ ] **No layout shift (CLS)** — load smooth, image ber-dimensi

### Code quality
- [ ] **Stack-lock** — React + Chakra **v2** + Zustand + Fauxbase (no v3 / mock manual / Express)
- [ ] **TS ketat** — no `any` tanpa argumen kuat
- [ ] **No `console.log`** leftover
- [ ] **Reuse audit done** (SOP-KU-02) — tercatat di log
- [ ] **Component split sensible** — gak god component, gak over-fragment
- [ ] **Sustain, no first-aid** — no band-aid flag, naming descriptive

### Responsive & a11y (SOP-KU-03)
- [ ] **≥2 breakpoint** — mobile (375/390) + desktop (1280/1400) bersih
- [ ] **Semantic HTML** + heading hierarchy bener
- [ ] **Keyboard nav** — Tab logis, no trap, focus visible
- [ ] **Kontras WCAG AA** — ≥4.5:1 teks normal

### Performance
- [ ] **Image optim** — lazy, sized, compressed (hero < 250KB)
- [ ] **Bundle check** — `npm run build` succeed

### Evidence (Tata mandate — wajib)
- [ ] **Screenshot desktop** (top + scroll) — path di log
- [ ] **Screenshot mobile** (top + scroll) — path di log
- [ ] **Console clean** — bukti no error/warning
- [ ] **Boomer-proof copy** — bahasa warung, no jargon, 3-detik-clear

---

## CONTOH TERISI

> Self-QC: Landing Proyek-Contoh v4 (re-impl action items, 2026-05-27)

```
Functional:
[x] Render OK, console clean (vite hot-reload)
[x] Interactive — accordion FAQ, drawer mobile nav
[x] State — N/A (landing static, no fetch)

Visual:
[x] Match mockup v4 spec
[x] Theme token (mauve/sage/cream/gold) — 0 coklat
[x] No layout shift

Code:
[x] Stack-lock: React 18 + Chakra v2 + Zustand/Fauxbase scaffold — no violation
[x] No console.log
[x] Reuse audit: 10 reused 100%, 4 modified, 1 new (MotionSection) — di log
[x] MotionSection extract (framer-motion wrapper reusable) — sensible split

Responsive & a11y:
[x] Desktop 1280 + mobile 390 — bersih
[x] Semantic header/section/footer, h1→h2→h3
[x] Accordion a11y built-in Chakra (aria-expanded, keyboard)

Performance:
[x] Hero JPEG optimized
[x] (prod build deferred — flagged)

Evidence:
[x] /tmp/wedding-shots/v4-hero.png
[x] /tmp/wedding-shots/v4-full.png
[x] /tmp/wedding-shots/v4-mobile.png
[x] Stats sekarang verifiable (FIX dari v3 fake-stats) — boomer-proof copy
→ HANDOFF @kakashi: Pre-Tata Gate, focus stats verifiable + WhatsApp visible.
```

Hasil: lolos Gate Kakashi → forward Tata (visible → Tata sign-off go-live). Tercatat di log (audit KU-C3).
