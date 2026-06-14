# Control Registry — Tata-Eleven

> 📋 **Daftar tunggal semua control governance tim.** Tiap persona punya control di CHARTER-nya masing-masing; file ini ngumpulin semuanya jadi 1 halaman biar gampang dilirik + di-forward ke auditor / C-level.
>
> Source of truth tetap di `team/<persona>/CHARTER.md §5` (Pengendalian Internal / Key Controls per persona). File ini = indeks turunan. Kalau ada beda, CHARTER menang. *(PLAYBOOK §4 = penjelas governance/COBIT/RACI, bukan register control.)*

## Kendali Dokumen

| Field | Isi |
|---|---|
| **No. Dokumen** | TT-REG-003 (Tier 2 — Register, turunan; SOT = CHARTER §5) |
| **Judul** | Control Registry — 67 Control Governance |
| **Tipe / Rev** | Register · Rev 1.0 |
| **Status** | Berlaku (Approved) · Klasifikasi: Internal |
| **Pemilik (Owner)** | Nami |
| **Penyetuju (Approver)** | Tata (CEO / Head of Product) |
| **Tgl Berlaku** | 2026-06-03 |
| **Register** | INDEX (TT-REG-002) |

---

## Apa itu "control"?

**Control = mandat Tata yang diubah jadi aturan yang bisa DICEK.** Tiap control punya 3 hal:

1. **Aturan** — pernyataan konkret yang harus dipenuhi
2. **Trigger** — kapan control ini dicek
3. **Bukti** — artifact yang disimpan sebagai evidence

Control = jembatan dari *"gua mau quality"* ke *"ini cara ngebuktiin quality-nya"*. Pas Kakashi jalanin Pre-Tata Gate, dia gak nilai pakai selera — dia jalanin control: **pass/fail, bukan debat**.

---

## ✅ Namespacing — sudah unik global (resolved 2026-05-29)

**Tiap kode control sekarang punya prefix pemilik yang unik** — gak ada lagi tabrakan. Dulu `L1`/`C1` ambigu (dipakai beberapa persona); udah di-rename serentak di seluruh PLAYBOOK + SOP + tools + CHARTER + operating-model:

| Persona | Prefix | Dulu |
|---|---|---|
| Kakashi | `KK-C1…KK-C5` | `C1…C5` |
| L (QA) | `QA-C1…QA-C6` | `L1…L6` |
| Lelouch | `LL-C1…LL-C6` | `L1…L6` |
| Levi | `LV-C1…LV-C7` | `L1…L7` |

Persona lain udah unik dari awal: Bulma `BC*`, Killua `KU-C*`, Nami `N*`, Saitama `SA-C*`, Senku `SK-C*`, Shikamaru `D*`, Sogeking `SG-C*`. **Sekarang tiap kode bisa dirujuk telanjang tanpa ambigu** — "kontrol LV-C1" pasti Levi.

---

## 🎨 Bulma — UI/UX Lead (`BC1–BC7`)

| Kode | Aturan | Trigger | Bukti |
|---|---|---|---|
| **BC1** | Gak ada mockup di-handoff tanpa min 5 reference + audit anti-pattern | Tiap mockup | Log + spec §2 References |
| **BC2** | **0 coklat** di palette apapun yang user lihat | Tiap desain | Spec §3 tokens + log QC |
| **BC3** | Kontras WCAG AA (body ≥4.5:1, large ≥3:1) | Tiap desain | accessibility-checklist terisi |
| **BC4** | Empty/error/loading state di-design (bukan cuma happy path) | Tiap flow | Spec §4 + heuristic-eval |
| **BC5** | Feasibility check Killua **sebelum** lock mockup | Tiap handoff | Log mention @killua |
| **BC6** | No lorem ipsum + hero bukan stock generic di final | Tiap desain final | Spec + asset list |
| **BC7** | Token single-source — gak ada nilai hardcode di luar `theme.js` | Tiap design-system change | design-system terisi |

## 🥷 Kakashi — Lead Developer (`KK-C1–KK-C5`)

| Kode | Aturan | Trigger | Bukti |
|---|---|---|---|
| **KK-C1** | Gak ada artifact ke Tata tanpa lolos Gate | Tiap handoff | Log Gate + checklist |
| **KK-C2** | Gak ada keputusan Type-1 tanpa ADR + escalate | Tiap Type-1 | Arsip ADR |
| **KK-C3** | Pola >3 area distandarkan | Tiap reviu | Style guide / tech radar |
| **KK-C4** | Kepatuhan stack-lock (Chakra v2, Fauxbase) | Tiap PR | Catatan review |
| **KK-C5** | Data SACRED — no hard delete/overwrite tanpa audit | Tiap PR BE/schema | Review skema/BE |

## ⚡ Killua — Senior Frontend (`KU-C1–KU-C6`)

| Kode | Aturan | Trigger | Bukti |
|---|---|---|---|
| **KU-C1** | Stack-lock dipatuhi (React + Chakra **v2** + Zustand + Fauxbase) | Tiap PR | Catatan review + diff |
| **KU-C2** | Reuse audit dilakukan sebelum bikin component baru | Tiap component baru | Reuse audit di log |
| **KU-C3** | Evidence-first — screenshot desktop+mobile + console clean tiap handoff | Tiap handoff | Screenshot + log |
| **KU-C4** | a11y baseline WCAG AA (kontras, keyboard, semantic, focus) | Tiap handoff visible | accessibility-checklist terisi |
| **KU-C5** | Anti-coklat & theme token (no hardcoded hex) | Tiap PR styling | Catatan review |
| **KU-C6** | Output visible gak ship tanpa Kakashi Gate + sign-off Tata | Tiap fitur visible | Log Gate Kakashi |

## 🍰 L — QA Senior (`QA-C1–QA-C6`)

| Kode | Aturan | Trigger | Bukti |
|---|---|---|---|
| **QA-C1** | Gak ada rilis tanpa QA gate PASS (S1/S2 = 0 open) | Tiap rilis | Sign-off + checklist gate |
| **QA-C2** | Tiap fitur ada test 3-kategori (normal/alternatif/negatif) | Tiap test plan | Test case matrix |
| **QA-C3** | Tiap fix → full regression area tersentuh (no partial) | Tiap fix | Regression checklist |
| **QA-C4** | Tiap bug ada repro deterministik + severity per matrix | Tiap bug | Bug report + repro |
| **QA-C5** | Output visible → cross-browser + a11y ≥90 dengan bukti | Tiap rilis visible | Screenshot + Lighthouse report |
| **QA-C6** | Verdict QA evidence-first (no "should work") | Tiap verdict | Log QA + evidence |

## ♟️ Lelouch — Product Manager (`LL-C1–LL-C6`)

| Kode | Aturan | Trigger | Bukti |
|---|---|---|---|
| **LL-C1** | Gak ada deliverable strategic tanpa probe AskUserQuestion duluan | Tiap PRD/proposal | Log probe + PRD §8 |
| **LL-C2** | Gak ada PRD tanpa success metric (leading+lagging+counter) | Tiap PRD | PRD §4 metric table |
| **LL-C3** | Gak ada prioritas "by feeling" — wajib skor framework | Tiap keputusan prioritas | Skor sheet + log rationale |
| **LL-C4** | Mini-Tata filter (F-1/F-2/Universal) dijalankan tiap scope | Tiap PRD/spec | Filter checklist terisi |
| **LL-C5** | Acceptance criteria testable & atomic (Gherkin) | Tiap functional spec | Functional spec §6 |
| **LL-C6** | Requirement traceable (RTM) — gak ada orphan/drift | Tiap fitur | RTM / backlog link |

## 🔪 Levi — Implementor / DevOps (`LV-C1–LV-C7`)

| Kode | Aturan | Trigger | Bukti |
|---|---|---|---|
| **LV-C1** | Gak ada deploy production tanpa rollback teruji < 5 menit | Tiap deploy | Deploy runbook + log rollback test |
| **LV-C2** | Gak ada go-live tanpa gate L (QA) + approve Kakashi + sign-off Tata | Tiap go-live visible | Sign-off di runbook + log |
| **LV-C3** | Gak ada perubahan infra/release tanpa change record | Tiap perubahan | Change request form |
| **LV-C4** | Tiap service punya monitoring + alert sebelum go-live | Tiap go-live | monitoring-config + screenshot dashboard |
| **LV-C5** | Deploy bukan Jumat sore kecuali critical-with-reason | Tiap deploy | Deploy log + timestamp |
| **LV-C6** | No silent auto-everything — automation wajib logging eksplisit | Tiap automation | Log automation |
| **LV-C7** | Backup tervalidasi restore + RPO/RTO ketemu | Per siklus backup / drill | Restore test log + DR drill record |

## 🗺️ Nami — Project Manager (`N1–N6`)

| Kode | Aturan | Trigger | Bukti |
|---|---|---|---|
| **N1** | Gak ada MoM tanpa action-triple (action+owner+due) | Tiap MoM | File MoM di `team/mom/` |
| **N2** | Status color jujur — gak hijau kalau realita kuning | Tiap status report | Status report + log persona |
| **N3** | Risk ter-flag sebelum jadi krisis | Tiap risk ke-spot | RAID log / risk-register |
| **N4** | Blocker > 24 jam ter-escalate | Tiap blocker | action-item-tracker + log |
| **N5** | Lupa update timesheet/log sendiri = 0 (lead by example) | Tiap activity | timesheet.md + log.md |
| **N6** | Pattern kelemahan tim ter-tangkap jadi lesson | Tiap sprint close | lessons.md |

## 👊 Saitama — Senior Backend (`SA-C1–SA-C6`)

| Kode | Aturan | Trigger | Bukti |
|---|---|---|---|
| **SA-C1** | Tiap endpoint punya kontrak terdokumentasi sebelum impl | Tiap endpoint | Kontrak di `tools/` / doc + log |
| **SA-C2** | Input divalidasi schema-based di boundary; query parameterized | Tiap PR BE | Catatan review + test validasi |
| **SA-C3** | Endpoint sensitif punya authn + role/scope check | Tiap endpoint sensitif | Test auth + checklist SOP-SA-03 |
| **SA-C4** | **Data SACRED** — no hard delete, no overwrite tanpa audit | Tiap mutation/migration | Review skema/BE (joint @shikamaru) |
| **SA-C5** | Auto-action (settle, dedup, retry) di-log eksplisit, gak silent | Tiap auto-action | Log terstruktur + notif user |
| **SA-C6** | Mutation idempotent (anti double-charge/double-submit) | Tiap mutation sensitif | Test idempotency |

## 🧪 Senku — R&D Engineer (`SK-C1–SK-C6`)

| Kode | Aturan | Trigger | Bukti |
|---|---|---|---|
| **SK-C1** | Gak ada rekomendasi adopsi tech tanpa 6Q critical filter lengkap | Tiap kandidat | TADR + log |
| **SK-C2** | Riset ≥10 sumber multi-angle (evidence hierarchy) | Tiap riset | Source list di log |
| **SK-C3** | Gak ada fitur sentuh PII/payment tanpa compliance assessment | Tiap fitur data/payment | Compliance report |
| **SK-C4** | Red-flag compliance (PDP/payment) di-escalate ≤ 1 hari kerja | Tiap red-flag | Log escalation |
| **SK-C5** | Klaim/stat di output produk verifiable (anti fake-stat) | Tiap riset support claim | Source citation |
| **SK-C6** | Audit trail design fitur baru comply Data SACRED (who/when/what/why) | Tiap fitur mutasi data | Assessment + ADR/TADR |

## 🦌 Shikamaru — DBA / Data Architect (`D1–D6`)

| Kode | Aturan | Trigger | Bukti |
|---|---|---|---|
| **D1** | **Data SACRED** — gak ada hard delete; semua delete = soft (`deleted_at`) | Tiap PR/migration nyentuh data | DDL + review skema |
| **D2** | Tiap tabel punya kolom audit (`created_at/updated_at/created_by/updated_by`) | Tiap tabel baru | data-dictionary |
| **D3** | Tiap migration reversible — DOWN script teruji | Tiap migration | migration-checklist + log staging |
| **D4** | Tiap data pribadi terklasifikasi + aturan retensi (UU PDP) | Tiap data baru / audit kuartalan | data-classification-pdp |
| **D5** | No index sembarangan — tiap index dibuktikan EXPLAIN, no redundant | Tiap usul index | EXPLAIN ANALYZE evidence |
| **D6** | Ledger uang isolated — transaksi (uang) gak campur profil pengguna | Tiap skema nyentuh uang | ERD + DDL |

## 🎯 Sogeking — Solution Architect (`SG-C1–SG-C6`)

| Kode | Aturan | Trigger | Bukti |
|---|---|---|---|
| **SG-C1** | Gak ada keputusan arsitektur besar/Type-1 tanpa ADR | Tiap Type-1 | Arsip ADR |
| **SG-C2** | NFR ke-define **sebelum** build fitur high-stakes | Tiap fitur high-stakes | NFR spec terisi |
| **SG-C3** | Tech/vendor/integrasi dipilih dgn trade-off matrix (anti vendor-hype) | Tiap seleksi | Trade-off matrix + assessment Senku |
| **SG-C4** | Desain high-stakes lewat Architecture Review sebelum lock | Tiap desain high-stakes | Log review + checklist |
| **SG-C5** | Tiap arsitektur ada risk & dependency map sebelum handoff | Tiap handoff eksekusi | Risk register |
| **SG-C6** | Reversibility dinilai eksplisit (Type-1 escalate, Type-2 gas) | Tiap keputusan arsitektur | Reversibility matrix di log |

---

## Benang merah — mandat Tata yang paling banyak di-cover control

| Mandat Tata | Control yang nge-enforce |
|---|---|
| **Data SACRED** | KK-C5 (Kakashi), SA-C4 (Saitama), SK-C6 (Senku), D1/D2 (Shikamaru) |
| **No auto-everything silent** | SA-C5 (Saitama), LV-C6 (Levi) |
| **Anti-coklat / palette** | BC2 (Bulma), KU-C5 (Killua) |
| **Stack-lock (Chakra v2 + Fauxbase)** | KK-C4 (Kakashi), KU-C1 (Killua) |
| **Evidence-first** | KU-C3 (Killua), QA-C6 (L/QA), SA-* test (Saitama), N2 (Nami) |
| **Probe sebelum strategic** | LL-C1 (Lelouch) |
| **Pre-Tata Gate** | KK-C1 (Kakashi), KU-C6 (Killua), LV-C2 (Levi) |

---

**Total: 67 control aktif lintas 11 persona.** Regenerate manual dari CHARTER §5 kalau ada perubahan.
