# Tool: Regression & Pre-Release Gate Checklist

**Apa:** daftar periksa yang L jalanin sebelum **kasih verdict PASS/FAIL** rilis — gabungan regression + cross-browser + a11y + data integrity + evidence.
**Kapan dipake:** tiap regresi (SOP-L-03) + QA gate rilis (SOP-L-05).
**Framework:** COBIT BAI07 (Change Acceptance) + MEA01 (Quality Monitoring), WCAG AA.
**Aturan:** PASS hanya kalau **semua S1/S2 closed + tiap item ada bukti.** "Should work" = haram.

---

## Functional
- [ ] **Happy path** end-to-end pass
- [ ] **Acceptance criteria** met (per PRD)
- [ ] **Edge case** (BVA/boundary) covered
- [ ] **Negative path** (error, validasi, abuse) works

## Cross-browser & device
- [ ] **Chrome desktop** + **Chrome mobile**
- [ ] **Safari desktop** + **Safari iOS**
- [ ] **Firefox** (selektif)
- [ ] **Responsive** breakpoint 375 / 768 / 1280
- [ ] **Screenshot per browser** tersimpan (evidence-first)

## a11y baseline (WCAG AA)
- [ ] **Keyboard navigation** — Tab tembus, Enter aktivasi
- [ ] **Focus visible** — focus ring tiap interactive
- [ ] **Color contrast** — automated check pass
- [ ] **Form label association** — `htmlFor` + `id`
- [ ] **Heading hierarchy** — h1 sekali, sequential
- [ ] **Lighthouse a11y ≥ 90**

## Performance baseline
- [ ] **Lighthouse** — Perf ≥ 80, SEO ≥ 90 (rough)
- [ ] **No console error/warning** di normal usage

## Data integrity (Data SACRED — Tata mandate)
- [ ] **No data loss** scenario tested
- [ ] **Soft delete** (`deleted_at`) verified, no hard delete
- [ ] **No overwrite tanpa audit** (merge, bukan replace)
- [ ] **Concurrent edit / double-submit** behavior tested (idempotent)

## Regression
- [ ] **Smoke** hijau (happy path critical)
- [ ] **Full regression** area tersentuh + dependent hijau (no partial)
- [ ] **Regression suite** passed di CI
- [ ] **No flaky** test di critical path (quarantine kalau ada)

## Evidence & sign-off
- [ ] **Screenshot per browser** saved
- [ ] **Test report dual-layer** published (awam + engineer)
- [ ] **Semua S1/S2 closed** (filter severity-matrix)
- [ ] **Verdict PASS/FAIL** ditulis di `log.md` + ACTIVITY

---

## CONTOH TERISI (Gate: Landing Proyek-Contoh v4, 2026-05-29)

```
Type: FE visible (landing re-impl)
✅ Functional — happy path + edge + negative pass
✅ Cross-browser — Chrome/Safari desktop+mobile, screenshot per browser tersimpan
✅ a11y — Lighthouse a11y 92 (≥90 ✓), keyboard nav + focus ring OK
✅ Perf — Lighthouse Perf 88 (hero 1.6MB→210KB optim kepake)
✅ Data integrity — N/A (landing static, no mutation)
✅ Regression — smoke + full area hijau, suite CI green, no flaky
⚠️ S3: FAQ accordion gak nutup di Firefox (workaround ada) — backlog, gak block
→ VERDICT: PASS. S1/S2 = 0 open. Forward @kakashi (Pre-Tata Gate). Visible 🟡 → go-live sign-off Tata.
```

> Tercatat di log L + ACTIVITY. Audit record kontrol QA-C1/QA-C5. PASS karena S1/S2 nihil + tiap item ada bukti.
