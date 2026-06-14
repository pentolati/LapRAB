# SOP-SA-04 — Data SACRED Enforcement

| | |
|---|---|
| **Kode** | SOP-SA-04 |
| **Pemilik** | Saitama (Senior Backend Engineer) — joint @shikamaru (DBA) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Tata mandate Data SACRED, ISO/IEC 27001 (audit log), [tools/be-impl-checklist.md](../tools/be-impl-checklist.md) |
| **COBIT** | APO14 (Managed Data) |

## 1. Tujuan
Menegakkan mandate **Data SACRED**: **never overwrite, always merge, no hard delete, tiap auto-action di-log eksplisit.** Tiap perubahan data bisa ditelusur (siapa-kapan-ngapain) — comply F-1 Backend ALMIGHTY (audit-trail lengkap, accounting-comply).

## 2. Ruang Lingkup
- **Berlaku:** semua mutation (create/update/delete), terutama data sensitif: money/saldo/hutang, order, payment, cart tracking.
- **Tidak berlaku:** data ephemeral murni (cache, session) yang by-design gak perlu jejak — dicatat alasannya.

## 3. Definisi & Istilah
- **Soft delete** — "hapus" = set kolom `deleted_at`, baris tetap ada.
- **Audit trail** — jejak append-only siapa-kapan-ngapain tiap perubahan.
- **Merge vs overwrite** — gabung perubahan (jaga riwayat) vs timpa (data lama hilang = haram).
- **Silent auto-action** — auto-settle/auto-overwrite tanpa log/notif = haram (Tata mandate).

## 4. Referensi
Tata mandate Data SACRED + "Auto-everything silent = haram" + PO money isolasi STRICT, ISO/IEC 27001 (logging & monitoring), [RELATIONSHIPS §4](../../02-RELATIONSHIPS.md) (skema joint @shikamaru).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Desain audit/soft-delete di BE | Saitama | Saitama | **@shikamaru** (kolom audit di skema) | @kakashi |
| Lock skema audit (Type-1) | @shikamaru | **Tata** (via @kakashi) | Saitama, @kakashi | tim |
| Verifikasi no hard delete/overwrite | Saitama | Saitama | @kakashi (review C5) | — |

## 6. Prosedur

### 6.1 Desain (joint @shikamaru)
- 6.1.1 Tiap entity mutable wajib punya kolom: `created_at`, `updated_at`, **`deleted_at`** (soft delete), + **kolom audit** (siapa: `created_by`/`updated_by`).
- 6.1.2 Data sensitif (money/saldo) → **append-only event log** atau versioning, bukan in-place overwrite.
- 6.1.3 **Joint sama @shikamaru:** kolom audit + constraint dikunci di skema (Type-1 → escalate via @kakashi).

### 6.2 Enforcement delete
- 6.2.1 **Decision point:** ada operasi delete? → **WAJIB soft delete** (`deleted_at = now()`). **Hard delete (`DELETE FROM`) DILARANG** (kontrol SA-C4).
- 6.2.2 Query read default filter `WHERE deleted_at IS NULL`.

### 6.3 Enforcement update/overwrite
- 6.3.1 **Decision point:** update timpa nilai lama yang penting (saldo, status bayar)? → **jangan overwrite langsung** — catat perubahan di event log / versioning (merge strategy).
- 6.3.2 Concurrent edit → **optimistic locking** (kolom `version`) biar gak silent overwrite (anti lost-update).

### 6.4 Auto-action transparency
- 6.4.1 **Decision point:** ada auto-action (auto-settle, auto-dedup, auto-retry)? → **WAJIB log eksplisit** (siapa-trigger, kapan, kenapa) + **notif user-facing** kalau dampaknya user rasain (kontrol SA-C5). **Silent = haram.**
- 6.4.2 Money/saldo/hutang → isolasi STRICT, tiap pergerakan dana 1 entry audit.

### 6.5 Verifikasi
- 6.5.1 **Exit criteria:** grep migration/query — `DELETE FROM` = 0; `UPDATE` data sensitif tanpa jejak = 0; tiap auto-action ada log entry.
- 6.5.2 Test: soft-deleted row gak muncul di list, tapi masih ada di DB (riwayat terjaga).

## 7. Pengecualian
- **GDPR/legal hard-delete request:** kalau ada kewajiban hukum hapus permanen → **escalate Tata 🔴** (Type-1), dokumentasi alasan + persetujuan, bukan keputusan diam-diam.
- **Data ephemeral (cache/session):** boleh hard-evict, dicatat alasannya.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Desain audit/soft-delete (joint) | doc / `log.md` | Permanen |
| Verifikasi no hard delete (evidence grep/test) | `log.md` | Permanen |
| ADR skema audit (Type-1) | `adr/NNN-*.md` | Permanen |
| Audit trail data (di DB) | DB event log / kolom audit | Sesuai retensi data (permanen kecuali legal) |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Hard delete violation | # `DELETE FROM` di codebase/migration | **0** |
| Overwrite tanpa audit | # update data sensitif tanpa event log/versioning | **0** |
| Silent auto-action | # auto-action tanpa log eksplisit | **0** |
| Audit coverage entity sensitif | # entity sensitif ber-kolom-audit ÷ total | 100% |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama |
