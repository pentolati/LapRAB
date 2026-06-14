# SOP-LV-02 — Rollback

| | |
|---|---|
| **Kode** | SOP-LV-02 |
| **Pemilik** | Levi (Implementor / DevOps / SRE) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | ITIL 4 Release Management, Google SRE, [tools/rollback-procedure.md](../tools/rollback-procedure.md) |
| **COBIT** | BAI07 (Transitioning), DSS01 (Operations) |

## 1. Tujuan
Mengembalikan production ke **versi stabil terakhir secepat mungkin (< 5 menit) tanpa kehilangan data**, saat deploy bermasalah atau verifikasi gagal. Rollback bukan kegagalan — rollback **yang gak ada/gak ditest** itu kegagalan.

## 2. Ruang Lingkup
- **Berlaku:** semua deploy ke production. Tiap deploy WAJIB punya rollback path yang udah ditest (kontrol LV-C1).
- **Tidak berlaku:** perubahan yang murni additive & isolated di mana fix-forward < 30 menit lebih aman (lihat §6.2 decision).

## 3. Definisi & Istilah
- **Rollback path** — langkah konkret balik ke versi sebelumnya (revert deploy / switch blue-green / disable flag / restore).
- **Fix-forward** — perbaiki maju (deploy patch baru) ketimbang balik — hanya kalau cepat & risk rendah.
- **Data-loss risk** — bahaya data hilang/korup kalau rollback (terutama kalau ada migration schema).

## 4. Referensi
Google SRE (rollback as default reflex), ITIL Release, mandate Data SACRED (rollback gak boleh ngorbanin data), kontrol LV-C1.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Test rollback path (pra-deploy) | Levi | Levi | @shikamaru (kalau ada DDL) | Kakashi |
| Putusan rollback (saat incident) | Levi | Levi | Kakashi, @l | Tata (kalau visible) |
| Eksekusi rollback | Levi | Levi | @shikamaru (data) | @nami |

## 6. Prosedur

### 6.1 Pra-deploy (siapkan + uji)
- 6.1.1 Dokumentasikan **rollback steps** di [rollback-procedure](../tools/rollback-procedure.md).
- 6.1.2 **Test rollback di staging** — ukur waktu, target **< 5 menit**. Belum ditest → **deploy ditahan** (kontrol LV-C1).
- 6.1.3 Kalau ada **migration**: siapkan **rollback DDL** + cek **data-loss risk** bareng @shikamaru. Forward-only migration (gak bisa di-down) → wajib backup pra-deploy + plan terpisah.

### 6.2 Saat incident — putusan rollback
- 6.2.1 **Decision point** (PLAYBOOK §5.4):
  - **YA rollback** kalau: fungsi kritis rusak, risiko integritas data, error rate spike > 5%.
  - **TIDAK (fix-forward)** kalau: kosmetik, user terisolasi, patch feasible < 30 menit.
- 6.2.2 Putusan diambil **cepat** — jangan grinding sambil user kena. Ragu → rollback (lebih aman).

### 6.3 Eksekusi & verifikasi
- 6.3.1 Jalankan rollback path (revert/switch/flag-off/restore).
- 6.3.2 **Verifikasi:** `/health` 200, smoke test jalur kritis, error rate normal lagi.
- 6.3.3 Cek **integritas data** pasca-rollback (terutama kalau ada migration) — koord @shikamaru.
- 6.3.4 Announce rollback ke channel + lapor Tata (**bahasa manusia**: "gw balikin ke versi kemarin, aman, user gak kehilangan data").
- 6.3.5 **Exit criteria:** production stabil di versi sebelumnya + data utuh + waktu rollback tercatat + Tata dikabarin.
- 6.3.6 Trigger **postmortem** ([SOP-LV-03](SOP-LV-03-incident-response.md)) — rollback berarti ada yang salah, cari akar.

## 7. Pengecualian
- **Rollback gak feasible** (mis. migration irreversible udah jalan): switch ke mode contain lain (feature flag off / scale / maintenance page) + escalate @kakashi + Tata. Ini sinyal SOP-LV-01 §6.2.2 dilanggar — masuk postmortem.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Rollback test result (pra-deploy) | runbook / `log.md` | Permanen |
| Eksekusi rollback (waktu, alasan, hasil) | `log.md` | Permanen |
| Trigger postmortem | `log.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Rollback time | menit putusan → production pulih | **< 5 menit** |
| Data-loss saat rollback | # rollback yang ngilangin data | **0** |
| Rollback path coverage | # deploy dengan rollback tested ÷ total deploy | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
