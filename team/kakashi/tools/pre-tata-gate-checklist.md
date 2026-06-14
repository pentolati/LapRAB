# Tool: Pre-Tata Gate Checklist

**Apa:** daftar periksa lintas-disiplin — gabungan QC tiap persona — yang Kakashi jalanin **sebelum artifact apapun nyampe Tata.**
**Kapan dipake:** tiap persona handoff deliverable buat Tata consume.
**Framework:** COBIT BAI07 (Change Acceptance) + MEA02 (Internal Control), ITIL Change Enablement.
**Aturan:** Pass → forward ke Tata. Fail → balik ke owner + feedback konkret. **Bocor jelek = Kakashi yang salah.**

---

## Per-type checklist

**PRD (Lelouch):** problem statement (bukan solusi) · hipotesis falsifiable · success metric (leading+lagging+counter) · scope TRUE MVP + non-goal · AskUserQuestion probe done · feasibility co-sign · open question surfaced

**Mockup (Bulma):** ≥5 reference URL · palette Tata (mauve/sage/cream, **0 coklat**) · typography ≤2 family · hierarchy clear · WCAG AA · responsive ≥2 breakpoint · microcopy boomer-proof · hero bukan stock · no lorem · empty/error/loading state

**FE (Killua):** reuse audit · stack lock (React+Chakra **v2**+Zustand+Fauxbase) · TS strict no `any` · no `console.log` · match mockup · responsive screenshot 375+1280 · a11y baseline · **screenshot evidence**

**BE (Saitama):** API contract documented · auth+role · input validation schema · no SQL concat · **no hard delete** (Data SACRED) · **no overwrite tanpa audit** · idempotent · structured log (req+user id) · error code table · test pass

**Schema (Shikamaru):** 3NF (denorm justified) · FK+UNIQUE+CHECK · **soft delete `deleted_at`** · audit columns · migration reversible (DOWN tested) · EXPLAIN ANALYZE critical query · index per pattern

**Test report (L):** smoke+functional+edge+negative · cross-browser · a11y ≥90 · severity per matrix · S1/S2 fixed · screenshot per browser

**Deploy (Levi):** pre-flight filled · migration tested staging · rollback < 5min tested · monitor+alert · sign-off L+Kakashi · **bukan Jumat sore** kecuali critical

**MoM/Status (Nami):** action triple (action+owner+due) · decision + rationale · status color jujur · risk surfaced · ask Tata explicit

---

## Universal check (semua deliverable)
- [ ] **Mandate Tata** — F-1, F-2, Data SACRED, Reuse>Rebuild, no tambal-sulam, no silent auto-everything
- [ ] **Evidence first** — link output/screenshot/log/test
- [ ] **Bold key point** (Tata scanner)
- [ ] **Anti-jargon** kalau audience non-IT
- [ ] **Anti-defensive** — known limitation di-surface awal
- [ ] **Visible/user-facing?** → ini 🟡, butuh sign-off Tata (bukan cuma gate teknis)

---

## CONTOH TERISI

> Gate: Landing v4 (Killua re-impl, 2026-05-27)

```
Type: FE + Mockup gabungan
✅ Reuse audit (4 mod + 1 new MotionSection, justified)
✅ Stack lock (Chakra v2, Fauxbase) — no violation
✅ Screenshot desktop + mobile attached
✅ Stats sekarang verifiable (FIX dari v3 — fake stats = evidence-first violation)
✅ WhatsApp prominence, framer-motion fade-up, FAQ refined, CTA anchor
✅ Bold key point, boomer-proof copy
→ VERDICT: PASS. Forward @tata. (Visible → Tata final sign-off go-live.)
```

Tercatat di log Kakashi + ACTIVITY. Audit record kontrol KK-C1.
