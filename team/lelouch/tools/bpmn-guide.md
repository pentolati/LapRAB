# Tool: BPMN 2.0 Guide + As-is/To-be Flow

**Apa:** panduan notasi BPMN 2.0 + cara gambar alur proses (as-is → to-be) pakai ASCII (gak perlu tool berat).
**Kapan dipake:** fitur yang ngubah alur proses multi-step / ada branching / lintas actor (SOP-LL-05).
**Framework:** BPMN 2.0 (OMG), BABOK KA4/KA5.
**Kenapa:** flow eksplisit = edge case & exception ketauan sebelum build; auto-behavior digambar terang (mandate Tata, no silent).

---

## 1. Notasi inti BPMN 2.0 (cukup ini buat prototype)

| Simbol | Nama | ASCII | Arti |
|---|---|---|---|
| ○ | Start event | `(start)` | proses mulai |
| ◎ | End event | `(end)` | proses selesai |
| ▭ | Task / activity | `[ Task ]` | langkah kerja |
| ◇ | Gateway (XOR) | `<decision?>` | percabangan keputusan (pilih 1) |
| ◇+ | Gateway (AND) | `<+ parallel>` | jalan paralel |
| → | Sequence flow | `-->` | urutan |
| ⌛ | Timer event | `(timer)` | trigger by waktu (auto) |
| ✉ | Message/notif | `(notif)` | kirim notifikasi |
| Lane | Pool/Lane | `=== Actor ===` | siapa yang ngerjain |

> **Aturan baca:** tiap gateway `<...?>` wajib punya **≥2 cabang** (mis. Ya/Tidak) + label. Exception path (error/timeout) **wajib** digambar, jangan cuma happy path.

## 2. Langkah
1. **As-is** (kalau ada existing/workaround) — gambar alur sekarang.
2. **To-be** — gambar alur ideal, lengkap gateway + exception + actor lane.
3. **Auto-behavior** — gambar eksplisit pakai `(timer)`/`(notif)` + audit (mandate Tata).
4. **Gap** — bandingin (pakai [gap-analysis-template](gap-analysis-template.md)).

---

## CONTOH TERISI (Proyek-Contoh — Gift Registry reserve→beli→konfirmasi, ADA auto-behavior)

**To-be flow (dengan auto-release 1 jam — eksplisit per mandate Tata):**

```
=== Tamu ===
(start)
   --> [ Buka wishlist via link unik ]
   --> [ Pilih item kado ]
   --> <item available?>
          | Tidak --> [ Tampil "sudah di-reserve tamu lain" ] --> (end)
          | Ya
   --> [ Reserve item ]  --(notif ke tamu: "ke-reserve, 1 jam buat konfirmasi")--
   --> <konfirmasi beli dalam 1 jam?>
          | Ya  --> [ Tandai "dibeli" ] --(notif couple)--> (end)
          | Tidak (timeout)
          v
=== Sistem (auto) ===
   (timer 1 jam) --> [ AUTO-RELEASE reservasi ]
                 --(notif tamu: "reservasi dilepas")--
                 --[ AUDIT LOG: item, tamu, waktu, source=auto-release ]--
                 --> [ Item available lagi ] --> (end)
```

**Kenapa auto-release digambar eksplisit:** mandate Tata "auto-everything silent = haram". Auto-release **bukan** sekadar `if timeout: release` di kode — di flow dia jadi task terang dengan **notif + audit log**. Saitama (BE owner) build sesuai ini.

**Gap (as-is = gak ada, greenfield):** seluruh flow = gap (dibangun baru). **Risk flag:** link-preview Tokped/Shopee (gambar OK via OG tag, harga unreliable) → **POC @senku** dulu sebelum lock detail item kado.

> Catatan: flow ini hasil elicitation C8 (Gift Registry) yang sengaja diprobe **last** karena paling kompleks. Auto-release & link-preview = 2 hal yang butuh konteks + POC, kelihatan jelas pas digambar BPMN.
