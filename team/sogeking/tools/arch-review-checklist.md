# Tool: Architecture Review Checklist (Gate Hulu)

**Apa:** checklist gate **sebelum desain arsitektur di-lock** dan di-handoff eksekusi — mastiin desain sehat di semua dimensi sebelum tim ngoding.
**Kapan dipakai:** SOP-SG-05, tiap desain high-stakes sebelum lock. Kontrol **SG-C4**. Ini gate **hulu** (arsitektur) — beda dari Pre-Tata Gate @kakashi yang **hilir** (output ke Tata).
**Framework:** AWS/Azure Well-Architected (5 pilar), ISO/IEC 25010 (8 karakteristik), TOGAF ADM G, COBIT APO03.

---

## A. 5 Pilar Well-Architected
- [ ] **Reliability** — target uptime/RTO/RPO realistis; failure mode dipikir; gak ada single-point yang gak ke-handle
- [ ] **Security** — OWASP Top 10 dicek; UU PDP (data pribadi gak bocor/nyebrang tanpa consent); auth/authz jelas
- [ ] **Cost** — budget envelope masuk akal; gak premature scaling; 0 biaya vendor tersembunyi
- [ ] **Performance efficiency** — target latency/throughput di-set; gak over-fetch; bundle FE wajar
- [ ] **Operational excellence** — bisa di-monitor/log; rollback plan ada; gak "auto-everything silent"

## B. 8 Karakteristik ISO 25010
- [ ] **Functional suitability** (align @lelouch — sesuai requirement)
- [ ] **Performance efficiency** (target ukur, bukan vibes)
- [ ] **Compatibility** (komponen nyambung, no clash)
- [ ] **Usability** (F-2 BOOMER-PROOF, joint @bulma)
- [ ] **Reliability** (tahan gagal)
- [ ] **Security** (OWASP + UU PDP)
- [ ] **Maintainability** (coupling rendah, change cost murah)
- [ ] **Portability** (gak terkunci 1 environment tanpa exit)

## C. Reversibility & keputusan
- [ ] Tiap keputusan besar **diklasifikasi Type-1/Type-2** (pakai reversibility-matrix)
- [ ] Semua **Type-1 ada ADR + sign-off Tata** (SG-C1/SG-C6)
- [ ] Default ragu di-treat Type-1 🟡

## D. Mandate Tata
- [ ] **F-1 Backend ALMIGHTY** — data layer lengkap, audit-trail, accounting-comply kalau relevan
- [ ] **F-2 Frontend BOOMER-PROOF** — bahasa warung, no jargon, 3-detik-clear per page
- [ ] **Data SACRED** — never overwrite, always merge, no hard delete (R-DATA-MERGE)
- [ ] **No auto-everything silent** — semua aksi otomatis ada logging eksplisit

## E. Risk, dependency & sanity
- [ ] **Risk register + dependency map terlampir** (SOP-SG-06, SG-C5)
- [ ] **No ivory-tower** — reality-checked feasibility ke @kakashi
- [ ] **No over-engineering** — lewat YAGNI gate (abstraksi cuma kalau ≥2 driver nyata)
- [ ] **No vendor lock tanpa exit** — tiap dependency eksternal punya fallback/exit plan
- [ ] **Reuse > rebuild** — udah cek reference-arch + komponen existing sebelum bikin baru

---

## VERDICT
```
Reviewer: Sogeking · Tanggal: YYYY-MM-DD · Scope: <fitur/app>
Consulted: @kakashi (feasibility), @l (test pain), @levi (ops)

Verdict: [ ] PASS  →  lock + handoff eksekusi ke @kakashi
         [ ] REVISI →  catatan di bawah, gak boleh lock dulu

Catatan / blocker:
- ...
```

---

## CONTOH TERISI (verdict)

```
Reviewer: Sogeking · Tanggal: 2026-05-29 · Scope: gift wishlist notif (wedding app)
Consulted: @kakashi, @l, @senku

Verdict: [x] REVISI

Catatan / blocker:
- C-Security: rencana awal pakai push vendor → data tamu nyebrang (UU PDP). Type-1 belum ber-ADR. → bikin ADR-001, escalate Tata.
- E-vendor lock: belum ada exit plan dari push vendor. → abstract di balik NotifChannel interface.
- Sisanya PASS. Re-review setelah ADR-001 accepted.
```

> Gate hulu nangkep masalah arsitektur **sebelum** kode ditulis — jauh lebih murah daripada ketahuan di Pre-Tata Gate atau prod. Itu gunanya review hulu (SG-C4).
