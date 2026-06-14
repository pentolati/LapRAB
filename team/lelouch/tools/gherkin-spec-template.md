# Tool: Functional Spec + Gherkin AC Template

**Apa:** spesifikasi fungsional buildable — actor + scope + use case + acceptance criteria **Given-When-Then** + data requirement.
**Kapan dipake:** PRD udah lock, butuh detail behavior yang langsung bisa di-build (@killua/@saitama) & di-test (@l) (SOP-LL-04).
**Framework:** Gherkin (Given-When-Then), BABOK KA5.
**Kenapa:** AC testable & atomic = L bisa langsung bikin test, BE/FE gak balik nanya. Auto-behavior wajib eksplisit (mandate Tata).
**Output:** `team/lelouch/prd/<feature>-spec.md`.

---

## TEMPLATE (copy mulai sini)

```markdown
# Functional Spec: [Feature]

**Owner:** Lelouch · **Status:** Draft / In Review / Approved · **Date:** YYYY-MM-DD
**Stakeholders:** @tata, @bulma, @kakashi, @l, @saitama, @shikamaru

## 1. Context
[Business need + user pain]

## 2. Actor & Scope
- Primary actor: [...] · Secondary: [...]
- In scope: [...] · Out of scope: [...]

## 3. Use case — main scenario
**Given** [precondition] · **When** [action] · **Then** [outcome]

## 4. Alternate flows
| ID | Condition | Flow |
|---|---|---|

## 5. Exception flows
| ID | Trigger | Behavior |
|---|---|---|

## 6. User stories + AC (Gherkin)
- **US-01** As a [role], I want [goal], so that [benefit]
  - **AC-1** Given [X], When [Y], Then [Z]   (atomic — 1 perilaku)
  - **AC-2** Given [A], When [B], Then [C]

## 7. BPMN / process flow (link)
[link bpmn-guide output]

## 8. Data requirement (F-1 check)
| Entity | Field | Type | Constraint |
|---|---|---|---|
> Soft delete? audit col? no overwrite (Data SACRED)?

## 9. NFR
Performance / Security (link @senku assessment) / a11y (WCAG AA)

## 10. Mini-Tata filter check
[paste F-1/F-2/Universal terisi]

## 11. Stakeholder validation
- [ ] @tata sign-off · [ ] @kakashi feasibility · [ ] @bulma UX · [ ] @nami timeline
```

---

## CONTOH TERISI (Proyek-Contoh — RSVP, ada auto-behavior)

```markdown
## 6. User stories + AC (Gherkin)

- **US-RSVP-01** As a tamu, I want konfirmasi kehadiran, so that pasangan tau siapa datang.
  - **AC-1** Given tamu buka undangan via link unik, When pilih "Hadir" + isi jumlah pax,
            Then RSVP tersimpan & pax ke-record (≤ max pax yang di-set couple).
  - **AC-2** Given tamu pilih "Tidak hadir", When submit,
            Then status "tidak hadir" tersimpan, pesan opsional bisa diisi.
  - **AC-3** Given tamu udah RSVP, When buka link lagi,
            Then status sebelumnya muncul & bisa di-edit (sebelum deadline).

- **US-RSVP-02** (AUTO-BEHAVIOR — eksplisit per mandate Tata)
  As a couple, I want ucapan "hadir" otomatis ke-record sebagai RSVP hadir.
  - **AC-1** Given tamu kirim ucapan dengan flag "hadir", When ucapan submit,
            Then sistem auto-create RSVP "hadir" **DAN tampilkan notif ke tamu**
            ("kehadiranmu tercatat") **DAN tulis audit log** (siapa, kapan, source=ucapan).
  - ⚠️ NO silent — notif + audit log WAJIB (mandate "auto-everything silent = haram").

## 5. Exception flows
| ID | Trigger | Behavior |
|---|---|---|
| EXC-01 | Link token invalid/expired | Tampil "undangan tidak ditemukan", no data leak |
| EXC-02 | Pax > max | Tolak + pesan "maksimal N orang", no partial save |

## 8. Data requirement (F-1 check)
| Entity | Field | Type | Constraint |
|---|---|---|---|
| RSVP | guest_token | string | FK Guest, UNIQUE per event |
| RSVP | status | enum | hadir/tidak/maybe |
| RSVP | source | enum | manual/auto-ucapan (audit) |
| RSVP | deleted_at | timestamp | **soft delete (Data SACRED)** |
> ✅ soft delete, ✅ audit col (source + created_at), ✅ no overwrite (edit = new revision)
```

> Catatan: US-RSVP-02 = contoh **auto-behavior yang di-flag pas elicitation** (auto-RSVP "hadir"). Mandate Tata "auto-everything silent = haram" diterjemahin jadi AC konkret: notif + audit log eksplisit. Itu cara BA Lelouch bikin mandate jadi testable.
