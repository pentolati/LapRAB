# Tool: Code Review Rubric

**Apa:** rubrik + label standar buat code review, biar feedback konsisten & fokus root cause.
**Kapan dipake:** tiap PR / diff review.
**Framework:** IEEE 1028 (software review), ISO/IEC 25010 (quality dimensions).

---

## Label feedback (selalu prefix)

| Label | Arti | Author wajib fix? |
|---|---|---|
| **NIT** | Style minor, skippable | Tidak |
| **IDEA** | Alternatif/FYI | Tidak |
| **REQUEST** | Saran kuat, tapi judgment author | Pertimbangkan |
| **BLOCKER** | Wajib fix sebelum merge | Ya |

Format: `[LABEL] <deskripsi 1-2 baris>` → `Root cause:` → `Suggested fix:`

---

## Rubrik (dimensi ISO 25010)

- [ ] **Functional suitability** — logic benar, edge + error path ada
- [ ] **Security** — input validated, no injection (SQL/XSS/cmd), auth check, no secret, Data SACRED
- [ ] **Performance** — no N+1, no O(n²) kalau n besar, no re-render gak perlu (FE)
- [ ] **Maintainability** — SRP, coupling minimal, naming jelas, no dead code, pattern consistent
- [ ] **Reliability** — race condition safe, idempotent kalau mutation
- [ ] **Testability** — happy+edge+error covered, test name deskriptif
- [ ] **Tata mandate** — F-1/F-2, Reuse > Rebuild, no tambal-sulam, stack lock, evidence di PR

Verdict: **Approve** / **Request changes** — decisive, no half-pregnant.

---

## CONTOH TERISI

> PR: Killua — `WishlistSection.tsx` (USP wishlist landing v2)

```
[BLOCKER] Hard-coded gift list di component
Root cause: data di-inline, bukan dari Fauxbase service → drift + ngelanggar "no mock manual"
Suggested fix: pindah ke Fauxbase entity Gift + useList hook

[REQUEST] Map tanpa key stabil (pakai index)
Root cause: re-render bug potensial pas list berubah
Suggested fix: key={gift.id}

[NIT] `marginTop={8}` vs token spacing
Suggested fix: pakai theme token biar konsisten

Verdict: Request changes — 1 blocker (mock manual). Sisanya minor.
```

Hasil: Killua re-impl pakai Fauxbase → pass. Tercatat di log + jadi bukti audit (kontrol KK-C4 stack-lock).
