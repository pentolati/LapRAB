# Tool: Architecture Risk Register

**Apa:** daftar risiko **arsitektur** yang udah di-skor (likelihood × impact) + dikategorikan + ada mitigasi & owner. Lebih fokus dari risk register umum @nami — ini khusus risiko struktural/teknis arsitektur.
**Kapan dipakai:** SOP-SG-06, sebelum handoff eksekusi ke @kakashi. Kontrol **SG-C5** (tiap arsitektur ada risk map sebelum handoff). Wajib dilampirkan di Architecture Review.
**Framework:** COBIT APO12 (Risk), AWS Well-Architected, TOGAF ADM F (Migration Planning).

**Kategori risiko arsitektur:** `scaling` · `security` · `cost` · `dependency` (+ `maintainability` kalau relevan).
**Skor:** Likelihood (L/M/H) × Impact (L/M/H). 🔴 Kritis (H×H) → surface Tata. Tinggi → mitigasi+owner+due. Sedang → monitor. Rendah → accept/watch.

---

## TEMPLATE (copy mulai sini)

```markdown
# Architecture Risk Register — <fitur/app>

| ID | Risiko | Kategori | Likelihood | Impact | Skor | Mitigasi | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| AR1 | <risiko> | scaling/security/cost/dependency | H | H | 🔴 Kritis | <mitigasi> | @persona | Open |
```

**Strategi (pilih per risk):** Avoid · Mitigate · Transfer · Accept.

---

## CONTOH TERISI — gift wishlist notif (wedding app)

```markdown
# Architecture Risk Register — gift wishlist notif

| ID | Risiko | Kategori | Likelihood | Impact | Skor | Mitigasi | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| AR1 | Push vendor eksternal = data tamu (foto/nama) nyebrang ke pihak ketiga, langgar UU PDP | security | M | H | **Tinggi** | Avoid — pakai polling client-side, data tetap di Fauxbase (ADR-001) | @sogeking | Mitigated (ADR-001) |
| AR2 | Image host CDN gratis bisa mati → foto undangan hilang (single dependency) | dependency | M | H | **Tinggi** | Mitigate — abstract di `ImageStore` interface, default simpan di Fauxbase, fallback siap | @sogeking | Open (watch) |
| AR3 | Polling boros kalau concurrent guest ratusan → cost/perf jeblok | scaling | L | M | Rendah | Accept + watch — re-evaluate via ADR baru kalau skala naik; build-for-change udah disiapin | @kakashi | Open (watch) |
| AR4 | Hardcode daftar section undangan → rework pas Tata minta on/off + editable | maintainability | M | H | **Tinggi** | Avoid — config-driven pattern dari awal (reference-arch Pola 2) | @kakashi | Mitigated |
| AR5 | Overwrite data RSVP tamu pas update → data tamu ilang (langgar Data SACRED) | security | L | H | Sedang | Mitigate — merge-not-overwrite + soft-delete + audit trail (reference-arch Pola 3) | @saitama | Mitigated |
```

> **AR1 & AR2 di-skor Tinggi** → di-mitigasi **sebelum** handoff ke @kakashi, bukan dibiarin meledak di build/prod. Risk register ini **dilampirkan ke Architecture Review** (SG-C5) — gak ada handoff tanpa peta risiko. Mencegah > memadamkan.
