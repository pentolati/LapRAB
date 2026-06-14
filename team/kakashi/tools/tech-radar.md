# Tool: Tech Radar

**Apa:** status tiap teknologi di stack tim — boleh dipake bebas, coba dulu, lagi dinilai, atau jangan.
**Kapan dipake:** reviu kuartalan, atau pas ada usulan tech baru.
**Framework:** ThoughtWorks Tech Radar, COBIT APO03/APO04 (architecture & innovation).

---

## Ring

| Ring | Arti |
|---|---|
| **ADOPT** | Default, pake ini. Locked. |
| **TRIAL** | Boleh dipake di scope terbatas, evaluasi |
| **ASSESS** | Lagi dinilai, jangan production dulu |
| **HOLD** | Jangan dipake (deprecated / dilarang Tata) |

---

## TEMPLATE

```markdown
| Tech | Ring | Catatan |
|---|---|---|
| <nama> | ADOPT/TRIAL/ASSESS/HOLD | <kenapa> |
```

---

## CONTOH TERISI (stack tim, posisi 2026-05-28)

| Tech | Ring | Catatan |
|---|---|---|
| React | **ADOPT** | Stack lock Tata |
| Zustand | **ADOPT** | State management default |
| **Chakra UI v2** | **ADOPT** | Mandate Tata — locked |
| Fauxbase + fauxbase-react | **ADOPT** | Data layer — no mock manual, no Express prototype |
| Vite + Babel decorator plugin | **ADOPT** | Build, butuh buat Fauxbase `@field` |
| framer-motion | **TRIAL** | Boleh buat motion (kepake di landing v4 fade-up), jangan over-use |
| **Chakra UI v3** | **HOLD** | ❌ Mandate Tata = haram |
| **Mock data manual** | **HOLD** | ❌ Pakai Fauxbase |
| **Backend Express (prototype)** | **HOLD** | ❌ Pakai Fauxbase driver local |
| TypeScript strict | **ADOPT** | No `any` unargued |
| Payment gateway (real) | **ASSESS** | Aplikasi web payment — Type-1, nunggu keputusan Tata (lihat reversibility-matrix contoh) |

> Perubahan ring tech = keputusan arsitektur → kalau ADOPT→HOLD atau sebaliknya, bikin ADR.
