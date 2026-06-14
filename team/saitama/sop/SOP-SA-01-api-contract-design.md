# SOP-SA-01 — API Contract Design

| | |
|---|---|
| **Kode** | SOP-SA-01 |
| **Pemilik** | Saitama (Senior Backend Engineer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | REST, OpenAPI, [tools/api-contract-template.md](../tools/api-contract-template.md), [tools/error-code-table.md](../tools/error-code-table.md) |
| **COBIT** | BAI03 (Managed Solutions Build) |

## 1. Tujuan
Menjamin tiap endpoint punya **kontrak yang disepakati Killua (FE) sebelum koding** — request, response, error code, auth, idempotency — supaya gak ada FE-BE integration bug gara-gara beda ekspektasi, dan kontrak gak berubah-ubah setelah di-lock.

## 2. Ruang Lingkup
- **Berlaku:** semua endpoint baru, atau perubahan kontrak endpoint existing yang FE consume.
- **Tidak berlaku:** endpoint internal-only yang gak ada consumer (cukup didokumentasi ringkas); prototype yang masih pakai Fauxbase service-level di FE (kontrak nanti pas pindah real BE).

## 3. Definisi & Istilah
- **Kontrak API** — kesepakatan request/response/error code antara BE & consumer; di-lock = Type-1.
- **Idempotency** — request sama dikirim ulang → efek samping cuma sekali (anti double-charge).
- **Error code** — kode stabil (cth `VALIDATION_ERROR`) yang jadi kontrak debugging FE/BE.

## 4. Referensi
REST (resource-oriented, verb+status), OpenAPI (format kontrak), Tata mandate F-1 (audit-trail), Data SACRED, [RELATIONSHIPS §4](../../02-RELATIONSHIPS.md) (kontrak API = joint FE+BE, no blame ping-pong).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Draft kontrak | Saitama | Saitama | @shikamaru (data fit) | — |
| Sepakati kontrak | Saitama | Saitama | **@killua** (joint agree) | @kakashi |
| Lock kontrak (Type-1) | Saitama | **Tata** (via @kakashi) | @kakashi | tim |

## 6. Prosedur

### 6.1 Framing
- 6.1.1 Baca **PRD/kebutuhan** dari @lelouch — pahami business need + siapa actor + data apa.
- 6.1.2 **Exit criteria:** tahu resource, actor, operasi (CRUD/aksi), dan auth requirement. Kalau belum jelas → tanya @lelouch, **jangan nebak**.

### 6.2 Draft kontrak
- 6.2.1 Tentukan **resource & path** (resource-oriented: `/orders`, `/payments`, `/checkout`) + **verb** (GET/POST/PUT/PATCH/DELETE) + **status code** (lihat [PLAYBOOK §5](../PLAYBOOK.md)).
- 6.2.2 Isi [api-contract-template](../tools/api-contract-template.md): request (headers/path/query/body), response sukses, **error code table** ([error-code-table](../tools/error-code-table.md)).
- 6.2.3 Tentukan **auth** (public / role X / scope Y) → trigger SOP-SA-03 kalau sensitif.
- 6.2.4 Tentukan **idempotency** (mutation sensitif wajib idempotency key) & **rate limit** (endpoint sensitif).
- 6.2.5 Tentukan **audit trail**: action apa yang di-log (Data SACRED — SOP-SA-04).

### 6.3 Sync data shape
- 6.3.1 **Joint sama @shikamaru:** kasih access pattern + cardinality, Shikamaru konfirmasi skema fit (gak throw-over-the-wall).
- 6.3.2 **Decision point:** data shape butuh skema baru/ubah? → ini Type-1 → koord SOP-SA-04 + escalate via @kakashi.

### 6.4 Agree & lock
- 6.4.1 **Negosiasi sama @killua** — request/response/error code disepakati. Killua bisa mulai mock Fauxbase, Saitama build real BE paralel.
- 6.4.2 **Exit criteria:** Killua sign-off kontrak (tertulis di log). Sebelum ini → **jangan mulai impl** (SOP-SA-02).
- 6.4.3 **Decision point:** kontrak ini publik/dipakai FE? → treat **Type-1**, lock + ADR via @kakashi. Perubahan setelah lock = breaking change, wajib koordinasi ulang Killua + versioning.

## 7. Pengecualian
- **Spike/eksplorasi:** boleh kontrak draft cepat tanpa lock, asal **gak di-consume FE** & ditandai DRAFT.
- **Hotfix incident:** kontrak bisa nyusul < 24 jam, tapi perubahan kontrak yang FE rasain tetap koord Killua.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Kontrak API (OpenAPI-style) | `tools/` / doc project | Living (versi di-track) |
| Sign-off Killua | `log.md` | Permanen |
| ADR lock kontrak (Type-1) | `adr/NNN-*.md` | Permanen |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Contract stability | # kontrak berubah setelah lock ÷ total kontrak | minimal |
| Integration bug krn beda ekspektasi | # bug FE-BE akar "kontrak beda" ÷ total integration bug | ≈ 0 |
| Kontrak terdokumentasi sebelum impl | # endpoint ber-kontrak sebelum koding ÷ total endpoint | 100% (kontrol SA-C1) |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
