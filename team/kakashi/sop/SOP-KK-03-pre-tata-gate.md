# SOP-KK-03 — Pre-Tata Gate

| | |
|---|---|
| **Kode** | SOP-KK-03 |
| **Pemilik** | Kakashi (Lead Developer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ITIL 4 Change Enablement, [tools/pre-tata-gate-checklist.md](../tools/pre-tata-gate-checklist.md) |
| **COBIT** | BAI07 (Change Acceptance & Transitioning), MEA02 (Internal Control) |

## 1. Tujuan
Menjamin tidak ada hasil kerja yang cacat, non-compliant, atau belum siap sampai ke Tata. Gate ini adalah kontrol internal KK-C1.

## 2. Ruang Lingkup
- **Berlaku:** semua artifact yang akan di-*consume* Tata (PRD, mockup, code, schema, deploy, MoM, status).
- **Tidak berlaku:** Tata memanggil persona langsung untuk tanya/klarifikasi (dialog, bukan serah-terima artifact).

## 3. Definisi & Istilah
- **Artifact** — hasil kerja konkret yang diserahkan (bukan obrolan).
- **Self-QC** — pengecekan mandiri oleh owner sebelum handoff.
- **Visible (🟡)** — output yang user akhir lihat/rasain → butuh sign-off Tata.

## 4. Referensi
ITIL Change Enablement (gate = CAB), checklist per-tipe deliverable, mandate Tata (universal check).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Jalankan Gate | Kakashi | Kakashi | — | owner |
| Perbaikan kalau FAIL | owner | Kakashi | Kakashi | — |
| Sign-off output visible | — | **Tata** | Kakashi | tim |

## 6. Prosedur

### 6.1 Penerimaan
- 6.1.1 Terima handoff + konfirmasi **owner sudah self-QC** (kalau belum → balikin).

### 6.2 Pemeriksaan
- 6.2.1 Jalankan **checklist per-tipe** ([pre-tata-gate-checklist](../tools/pre-tata-gate-checklist.md)) sesuai jenis artifact.
- 6.2.2 Jalankan **universal check**: mandate Tata (F-1/F-2, Data SACRED, Reuse>Rebuild, no tambal-sulam, no silent auto), evidence-first, bold key point, anti-jargon kalau non-IT, known limitation di-surface.
- 6.2.3 **Klasifikasi:** output ini **visible (🟡)** atau internal?

### 6.3 Verdict (exit)
- 6.3.1 **Decision point:** semua item lolos?
  - **PASS** → forward ke Tata. Kalau visible → **flag butuh sign-off Tata 🟡**.
  - **FAIL** → balikin ke owner dengan **feedback konkret** (item mana, kenapa) → loop sampai pass.

## 7. Pengecualian
- **Tidak ada bypass** untuk artifact. Satu-satunya jalur non-gate: Tata panggil persona langsung untuk konsultasi (§2).

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Verdict Gate + checklist evidence | `log.md` + ACTIVITY | Permanen |
| Feedback FAIL ke owner | `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| **Escaped defect ke Tata** | # output ditolak Tata krn cacat ÷ total handoff | **≈ 0** |
| First-pass Gate rate | # PASS sekali ÷ total handoff | ↑ tiap periode |
| Gate cycle time | rata-rata jam handoff → verdict | < 4 jam |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama (mengangkat §5.5 lama jadi SOP formal) |
