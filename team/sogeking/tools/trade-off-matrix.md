# Tool: Trade-off Matrix

**Apa:** matriks skoring eksplisit buat banding opsi teknologi/integrasi — anti vendor-hype, anti HiPPO, anti vibes.
**Kapan dipake:** tiap seleksi tech/vendor/pola integrasi (SOP-SG-03, kontrol **SG-C3** — wajib ada trade-off matrix).
**Framework:** Well-Architected (cost/perf/security/ops) · reversibility (Type-1/2) · filter @senku untuk tech baru.

---

## Cara skor
- Tiap kriteria: **1 (jelek) – 5 (bagus)** dari sudut pandang kita.
- **Lock-in** dibalik: makin lock-in makin **rendah** skornya (lock-in = otomatis Type-1).
- Kasih **bobot** kalau ada kriteria yang lebih penting (cth time-to-market tinggi buat prototype).
- **Skor bukan hakim final** — tie-breaker = reversibility + mandate Tata + konteks. Tulis rekomendasi naratif.

| Kriteria | Arti |
|---|---|
| Cost | biaya uang (vendor fee, infra) |
| Complexity | usaha integrasi & maintenance |
| Time | time-to-ship |
| Scale | tahan saat user/data naik |
| Security | OWASP + UU PDP fit |
| Reversibility | gampang di-undo (Type-2 = tinggi) |
| Lock-in | ketergantungan vendor (dibalik: rendah lock-in = skor tinggi) |

---

## CONTOH TERISI — Kanal Notif Kado (Wedding App)

| Kriteria (bobot) | Opsi A: WhatsApp deep-link | Opsi B: Email | Opsi C: In-app notif |
|---|---|---|---|
| Cost | 5 (gratis, link) | 4 (SMTP murah) | 3 (butuh backend real) |
| Complexity | 5 (link `wa.me`, no infra) | 3 (perlu mailer) | 2 (perlu push infra) |
| Time (x2) | 5 (instan) | 3 | 2 |
| Scale | 4 (user kirim manual) | 4 | 3 |
| Security/UU PDP | 4 (no kontak disimpan server) | 3 (email = data pribadi) | 4 |
| Reversibility | 5 (Type-2, swap gampang) | 5 | 3 |
| Lock-in | 5 (no vendor) | 4 | 4 |
| **Total (Time x2)** | **38** | **29** | **24** |

### Rekomendasi
**Pilih Opsi A — WhatsApp deep-link** untuk Fase 1 prototype. Menang di time-to-ship (bobot
tinggi), $0, dan **BOOMER-PROOF** (semua tamu udah punya WA). Disembunyikan di balik interface
`NotifProvider` (maintainability NFR) → swap ke email/in-app saat go-live tanpa rombak UI (Type-2).

**Reversibility:** Type-2 — gak perlu escalate Tata. **Konsultasi @senku:** `wa.me` link =
teknik mature, lolos filter. **Catatan:** kalau nanti butuh notif otomatis terjadwal → re-evaluate
(masuk in-app + backend, naik jadi Type-1 krn data kontak tersimpan server → escalate).

> Matriks ini diarsip di log + jadi lampiran ADR-002. Bukti kontrol SG-C3.
