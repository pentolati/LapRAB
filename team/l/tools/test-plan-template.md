# Tool: Test Plan Template

**Apa:** rencana test berbasis risiko — scope, kategori test, browser matrix, a11y, acceptance link.
**Kapan dipake:** tiap fitur masuk test scope (SOP-L-01), sebelum desain test case.
**Framework:** ISTQB (test levels/types), ISO/IEC 29119, Risk-Based Testing.
**Output:** simpen di `team/l/test-plan/<feature>.md`.

---

## TEMPLATE (copy mulai sini)

```markdown
# Test Plan: <Feature>

**Owner:** L · **Date:** YYYY-MM-DD
**Scope:** <feature + version>
**Acceptance criteria (PRD):** <link>
**Risk scoring:** <area High/Med/Low — probabilitas × dampak>

## 1. Test categories
### Smoke (5 min)
- [ ] <critical happy path 1>
- [ ] <critical happy path 2>

### Functional (per acceptance)
| # | Scenario | Steps | Expected | Actual | Pass/Fail |
|---|---|---|---|---|---|

### Edge case (BVA / boundary)
| # | Scenario | Steps | Expected | Actual | Pass/Fail |
|---|---|---|---|---|---|

### Negative (error/abuse)
| # | Scenario | Steps | Expected | Actual | Pass/Fail |
|---|---|---|---|---|---|

### Cross-browser
| Browser | Smoke | Notes |
|---|---|---|
| Chrome desktop | | |
| Safari desktop | | |
| Chrome mobile | | |
| Safari iOS | | |

### a11y
| Check | Pass | Note |
|---|---|---|
| Keyboard nav | | |
| Focus visible | | |
| Contrast (WCAG AA) | | |
| Lighthouse a11y ≥90 | | |

## 2. Bugs found
<link ke bug report>

## 3. Sign-off (gate)
- [ ] All S1/S2 fixed
- [ ] All acceptance met
- [ ] Evidence captured (screenshot per browser)
- [ ] Sign-off by L → forward @kakashi (Pre-Tata Gate) → go-live Tata
```

---

## CONTOH TERISI (proyek contoh — fitur RSVP)

```markdown
# Test Plan: RSVP undangan interaktif (Fase 1)

**Owner:** L · **Date:** 2026-05-29
**Scope:** RSVP form + konfirmasi kehadiran v1
**Acceptance criteria (PRD):** lihat MoM Interactive Invitation Fase 1
**Risk scoring:** RSVP submit = HIGH (data tamu, Data SACRED); validasi input = HIGH; UI mobile = MED

## 1. Test categories
### Smoke (5 min)
- [x] Tamu buka link → form RSVP tampil
- [x] Isi nama + jumlah hadir + submit → tersimpan, konfirmasi muncul

### Functional
| # | Scenario | Steps | Expected | Actual | Pass/Fail |
|---|---|---|---|---|---|
| RSVP-N-001 | Submit hadir | nama+jumlah+submit | tersimpan, toast "terima kasih" | OK | ✅ |

### Edge case (BVA)
| RSVP-A-001 | Jumlah hadir = max (boundary) | input 99 | diterima | OK | ✅ |
| RSVP-A-002 | Nama unicode/emoji | "Tata 🎉" | tersimpan utuh | OK | ✅ |

### Negative
| RSVP-G-001 | Nama empty | submit kosong | inline error "nama wajib", request blocked | submit ke API, 400 | 🔴 S2 BUG-0051 |
| RSVP-G-002 | Submit 2× cepat (race) | klik submit 2× | 1 record, bukan dobel | 2 record kebuat | 🔴 S1 BUG-0052 (data!) |

### Cross-browser
| Chrome desktop | ✅ | |
| Safari iOS | ⚠️ | tombol submit ketutupan keyboard — BUG-0053 S3 |

### a11y
| Lighthouse a11y ≥90 | ⚠️ | 84 — label form belum ke-asosiasi |

## 2. Bugs found
BUG-0051 (S2), BUG-0052 (S1 data dobel), BUG-0053 (S3)

## 3. Sign-off
- [ ] FAIL — S1 (dobel record) + S2 (validasi) open. Tahan rilis. Balik @saitama+@killua.
```

> Verdict: **FAIL.** S1 race-condition (data dobel = Data SACRED violation) + S2 validasi. Blocking = otoritas gw. Ping @saitama (race) + @killua (validasi) + @nami (block release).
