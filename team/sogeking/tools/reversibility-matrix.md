# Tool: Reversibility Matrix — Keputusan ARSITEKTUR

**Apa:** alat klasifikasi keputusan arsitektur **level-solusi** jadi Type-1 (irreversible) vs Type-2 (reversible) → nentuin kecepatan, kehati-hatian, dan apakah perlu ADR + escalate Tata.
**Kapan dipakai:** SOP-SG-04, sebelum lock keputusan arsitektur apapun. Kontrol **SG-C6** (reversibility dinilai eksplisit tiap keputusan).
**Framework:** Bezos one-way/two-way door, TOGAF ADM E (Opportunities & Solutions), COBIT APO03.
**Beda dari @kakashi:** versi @kakashi = code-level (refactor, naming, flag). Versi ini = **arsitektur** (vendor, data residency, integrasi, pola lintas-app).

---

## 1. Pertanyaan klasifikasi (jawab dulu sebelum gas)

1. Kalau salah, **bisa ditarik balik** tanpa rework besar / migrasi data? → ya = condong Type-2.
2. Ada **data pribadi user** yang nyebrang ke pihak ketiga? → Type-1 (UU PDP).
3. Ngiket **kontrak vendor / lock-in** yang mahal dilepas? → Type-1.
4. Ngubah **schema / data model** yang udah ada data live? → Type-1 (Data SACRED).
5. Cuma **internal / pola referensi** yang bisa diganti di iterasi berikut? → Type-2.

**Default kalau ragu = Type-1 (🟡 → treat as one-way).** Lebih aman escalate daripada nyesel.

---

## 2. Tabel contoh klasifikasi arsitektur

| Keputusan arsitektur | Tipe | Kenapa |
|---|---|---|
| Vendor lock-in (payment, push service, BaaS) | 🔴 **Type-1** | kontrak + data + migrasi mahal dilepas |
| Data residency / data pribadi keluar ke pihak ketiga | 🔴 **Type-1** | UU PDP, susah ditarik setelah user terdaftar |
| Ganti stack inti (mis. pindah dari Fauxbase) | 🔴 **Type-1** | migrasi data + rewrite besar |
| Public API / integration contract | 🔴 **Type-1** | konsumen luar udah depend |
| Schema / data model dengan data live | 🔴 **Type-1** | Data SACRED, butuh migrasi |
| Pilih **reference pattern** internal (cth Entity+Service layout) | 🟢 **Type-2** | bisa di-refactor, gak ngiket eksternal |
| Feature toggle config-driven on/off | 🟢 **Type-2** | tinggal flip |
| Struktur folder / naming komponen | 🟢 **Type-2** | internal, gampang rename |
| Library UI animasi tambahan (additive) | 🟢 **Type-2** | install/uninstall bebas |
| Pilih palette / styling | 🟢 **Type-2** | kosmetik, reversible |

---

## 3. Aksi per tipe

| Tipe | Simbol | Aksi |
|---|---|---|
| **Type-1 irreversible** | 🔴 | **Escalate Tata + ADR wajib** (SOP-SG-04). Reality-check @kakashi, filter @senku kalau vendor. Lengthy review OK. |
| **Type-2 reversible** | 🟢 | **Gas.** Kasih guardrail self-serve, gak perlu ADR, gak perlu sign-off. Build-for-change. |
| **Ragu / abu-abu** | 🟡 | **Treat as Type-1** sampai kebukti reversible. Mini-sign-off Tata kalau menyangkut visible/biaya. |

---

## CONTOH TERISI

> Keputusan: "Simpan foto undangan di image host eksternal (CDN gratis) atau base64 di Fauxbase?"

```
Pertanyaan: data pribadi keluar? (foto pasangan = data pribadi → ya) + vendor lock? (CDN gratis bisa mati → ya)
Klasifikasi: 🔴 Type-1 (UU PDP + dependency eksternal yang bisa hilang)
Aksi: ADR + escalate Tata. Reality-check @kakashi soal ukuran bundle base64.
      Default sementara: simpan di Fauxbase (Data SACRED, data gak nyebrang),
      abstract di balik `ImageStore` interface biar bisa swap ke CDN nanti (build-for-change).
```

Hasil: keputusan yang nyentuh privacy + dependency gak diambil diam-diam — naik ke Tata. Itu kontrol SG-C6 jalan.
