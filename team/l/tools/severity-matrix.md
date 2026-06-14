# Tool: Severity Matrix (S1–S4)

**Apa:** klasifikasi keparahan bug + aturan block-release. Bikin verdict severity objektif & konsisten, gak debat.
**Kapan dipake:** tiap assign severity / triage bug (SOP-L-04, SOP-L-05).
**Framework:** ISTQB severity classification.
**Aturan emas:** **semua S1/S2 wajib closed sebelum sign-off rilis.** Blocking S1/S2 = otoritas L (lihat PERSONA §4).

---

## Matriks

| Severity | Definisi | Block release? | Contoh (Proyek-Contoh) |
|---|---|---|---|
| **S1 — Blocker / Critical** | Sistem down, data loss/corruption, security breach, semua user ke-blok, accounting rusak | **YA — hotfix** | DB corrupt; auth bypass; payment nominal negatif tersimpan; double-record transaksi (Data SACRED) |
| **S2 — Major** | Core feature rusak, gak ada workaround | **YA** | Gak bisa bikin order; checkout submit gagal total; login validasi bolong (BUG-0042) |
| **S3 — Minor** | Fitur rusak tapi ada workaround | TIDAK — schedule fix | Edit foto fail di Safari (pakai Chrome dulu); tombol ketutupan keyboard iOS |
| **S4 — Cosmetic** | Visual/edge sepele, gak ganggu fungsi | TIDAK — backlog | Typo; shadow off-by-1px; spacing inkonsisten |

---

## Severity vs Priority (jangan ketuker)

- **Severity** = seberapa **parah dampak teknis** (matriks di atas).
- **Priority** = seberapa **cepat harus difix** (keputusan produk/bisnis).
- **Bisa beda:** typo (S4) di hero landing yang dilihat semua user → priority bisa HIGH walau severity LOW.

---

## Aturan naik-severity (mandate Tata)

| Kondisi | Aksi |
|---|---|
| **Data SACRED** — potensi data loss / overwrite / dobel | Otomatis **S1** (sekecil apapun keliatannya) |
| **F-2 boomer-proof** — UI bug bikin user awam nyangkut total | Naikkan minimal **S2** |
| **F-1 backend almighty** — accounting / audit-trail rusak | Otomatis **S1** |
| Security (injection, auth bypass, IDOR) | Otomatis **S1** |

---

## CONTOH TRIAGE (proyek contoh)

```
BUG-0062 payment nominal negatif tersimpan
→ Data integrity + accounting (F-1) → S1. Block release. Hotfix.

BUG-0042 empty email lolos validasi
→ Core login flow, no workaround → S2. Block release.

BUG-0053 tombol submit ketutupan keyboard Safari iOS
→ ada workaround (scroll) → S3. Schedule fix, gak block.

BUG-0070 spacing FAQ off 4px desktop
→ cosmetic → S4. Backlog.
```

> Verdict rilis: ada S1 (BUG-0062) + S2 (BUG-0042) open → **FAIL, tahan.** S3/S4 gak block tapi tetap dicatat. Severity di-assign per matriks ini, **gak diturunin biar lolos** (anti-pattern §6 PLAYBOOK).
