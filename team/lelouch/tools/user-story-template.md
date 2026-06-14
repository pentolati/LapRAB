# Tool: User Story Template + INVEST Check

**Apa:** format standar nulis requirement dari sudut user + checklist kualitas **INVEST**.
**Kapan dipake:** tiap backlog item (SOP-LL-06) atau saat nyusun functional spec (SOP-LL-04).
**Framework:** Agile, INVEST.
**Kenapa:** story yang konsisten + INVEST = bisa di-estimate, di-test, di-ship per-potong. Anti story raksasa yang gak ketebak.

---

## FORMAT STORY

```
US-NN: As a [role], I want [goal], so that [benefit].
```

## INVEST CHECK (tiap story wajib lolos)

| Huruf | Arti | Cek |
|---|---|---|
| **I**ndependent | Bisa dikerjain sendiri, gak nyangkut story lain | dependency minimal? |
| **N**egotiable | Bukan kontrak kaku — detail bisa didiskusiin | ruang nego ada? |
| **V**aluable | Ada value buat user/bisnis | "so that" jelas? |
| **E**stimable | Tim bisa estimate effort | scope ketebak? |
| **S**mall | Muat 1 sprint, idealnya beberapa hari | perlu split? |
| **T**estable | Ada AC yang bisa diuji | Given-When-Then bisa ditulis? |

> Gak lolos **S** → split. Gak lolos **T** → tambah AC (link [gherkin-spec-template](gherkin-spec-template.md)).

---

## CONTOH TERISI (Proyek-Contoh — Gift Registry / wishlist kado ⭐ USP)

```
US-01: As a tamu undangan, I want lihat wishlist kado pasangan,
       so that gw bisa kasih kado yang beneran mereka mau (gak dobel/random).
  INVEST: I ✅ (standalone) · N ✅ · V ✅ (solve "bingung kado") · E ✅ · S ✅ · T ✅
  → AC ada di gherkin-spec (reserve flow)

US-02: As a tamu, I want reserve 1 item kado,
       so that gak ada tamu lain beli barang yang sama.
  INVEST: S ✅ (atomic) · T ✅ (reserve state testable)
  ⚠️ Auto-behavior: reservasi auto-release 1 jam kalau gak di-konfirmasi beli
     → mandate Tata: WAJIB notif + audit log, NO silent (AC eksplisit di spec)

US-03: As a couple, I want hide/unhide ucapan tertentu,
       so that gw kontrol apa yang tampil di wall.
  INVEST: I ✅ · V ✅ · S ✅ · T ✅

US-04 (TOO BIG — di-split): As a couple, I want kelola seluruh undangan.
  ❌ gagal S (kebesaran) → split jadi: kelola About, kelola Event, kelola RSVP, kelola Gallery, ...
```

> Contoh US-04 nunjukin INVEST kepake: story "kelola seluruh undangan" gagal **Small** → di-split jadi story per-komponen (sejalan sama 8 clickable component yang udah di-lock di elicitation).
