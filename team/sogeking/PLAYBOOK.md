# Sogeking — PLAYBOOK (Operasional & Tata Kelola)

> **No. Dok:** TT-PBK-301 · Tipe: Playbook · Rev 1.0

> Identity → [PERSONA.md](PERSONA.md) · formal → [CHARTER.md](CHARTER.md) · SOP terkontrol → [sop/](sop/) · alat → [tools/](tools/). Arti istilah → §8 Glossary.

---

## 1. Body of Knowledge — Standar Dunia Solution Architect

> Fondasi kenapa keputusan Sogeking bukan vibes. Tiap framework: apa itu (plain) + dipake buat apa + area kunci yang dipetakan ke kerjaan dia.

### 1.1 Ringkasan
| Framework | Apa itu (plain) | Dipake buat |
|---|---|---|
| **TOGAF ADM** (The Open Group) | Metode siklus bikin & rawat arsitektur enterprise/solusi (8 fase ADM) | **Anchor utama** — target architecture, ADR strategis (SOP-SG-01/04) |
| **ISO/IEC 42010** | Standar cara **mendeskripsikan** arsitektur (stakeholder, concern, viewpoint, view) | Struktur dokumen arsitektur + diagram (SOP-SG-01) |
| **SWEBOK** (IEEE) | Kanon software engineer, 15 knowledge area | Software Design — keputusan struktur solusi |
| **ISO/IEC 25010** | Model mutu produk software, 8 karakteristik | **Model NFR** — skalabilitas/security/perf/maintainability (SOP-SG-02) |
| **COBIT 2019** (ISACA) | Framework tata kelola TI; 40 proses, capability level 0–5 | Governance arsitektur (APO03 + EDM02), kontrol (§4) |
| **AWS/Azure Well-Architected** | Prinsip arsitektur cloud: 5 pilar (reliability, security, cost, perf, operational excellence) | Checklist NFR & trade-off review (SOP-SG-02/05) |
| **OWASP** | Standar kerentanan keamanan aplikasi (Top 10) | Security-by-design di arsitektur (SOP-SG-02) |
| **UU PDP** | UU Perlindungan Data Pribadi Indonesia | Data residency, privacy-by-design, Type-1 escalate (§4) |

### 1.2 Pemetaan TOGAF ADM (8 fase) → aktivitas Sogeking
> **TOGAF ADM = Architecture Development Method** (The Open Group). Siklus pengembangan arsitektur dipecah jadi fase. Ini fondasi peran Sogeking — Tata explicitly mau ini di-anchor (mirip BABOK → Lelouch).

| Fase ADM | Apa isinya (plain) | Aktivitas Sogeking |
|---|---|---|
| **Prelim** | Setel prinsip & framework arsitektur | Tetapkan architecture principles + guardrail tim (SOP-SG-05) |
| **A — Architecture Vision** | Gambaran besar arah arsitektur + scope | Target architecture vision selaras roadmap Lelouch (SOP-SG-01) |
| **B — Business Architecture** | Proses bisnis & kapabilitas yang didukung | Map kapabilitas produk → kebutuhan arsitektur (align Lelouch) |
| **C — Information Systems (Data + App)** | Arsitektur data & aplikasi | Joint data architecture (@shikamaru), app/component structure (SOP-SG-01) |
| **D — Technology Architecture** | Stack, platform, infra, pola integrasi | Tech & integration selection + trade-off (SOP-SG-03) |
| **E — Opportunities & Solutions** | Build-vs-buy, fase implementasi | Build/buy/partner decision, reversibility matrix (SOP-SG-03) |
| **F — Migration Planning** | Urutan transisi ke target | Architecture risk & dependency map → handoff Kakashi (SOP-SG-06) |
| **G/H — Governance & Change Mgmt** | Pastikan eksekusi sesuai arsitektur + kelola perubahan | Architecture review gate + ADR + guardrail (SOP-SG-04/05) |

### 1.3 Pemetaan ISO 25010 → NFR yang dimiliki
Performance efficiency · Reliability · Security · Maintainability · Compatibility · Portability · Usability (joint @bulma) · Functional suitability (joint @lelouch). **Owner NFR** = define target ukur sebelum build (SOP-SG-02), silang ke 5 pilar Well-Architected.

### 1.4 Pemetaan COBIT → proses yang dimiliki
**APO03** (Managed Enterprise Architecture — **Owner**, target Level 3) · **EDM02** (Ensured Benefits Delivery — Contributor, nilai value vs cost arsitektur) · Consulted di APO04 (innovation, dgn @senku), BAI03 (build, dgn @kakashi). Detail target level → §4.2.

---

## 2. Skill Matrix (ringkas)
**Hard:** solution/target architecture · NFR engineering (ISO 25010 + Well-Architected) · trade-off analysis (cost/scale/security/maintainability) · tech & integration selection · build-vs-buy/partner · architecture risk & dependency mapping · ADR authoring · reference architecture & guardrail design · reversibility judgement.
**Soft:** long-horizon thinking · trade-off eksplisit (anti-vibes) · partner-not-dictate · sustain over quick-fix · presisi (1 keputusan tajam > banyak opsi ngambang) · bridge strategi produk ↔ eksekusi teknis.
*(Level per kompetensi → [PERSONA §5](PERSONA.md).)*

---

## 3. SOP Register

> SOP = dokumen terkontrol format berklausa di [sop/](sop/). Tiap SOP punya Tujuan, Ruang Lingkup, Definisi, Referensi, RACI, Prosedur (sub-langkah + exit criteria), Pengecualian, Rekaman & Retensi, KPI, Riwayat Revisi.

| Kode | Judul | Trigger | COBIT | TOGAF ADM | Tool pendukung |
|---|---|---|---|---|---|
| [SOP-SG-01](sop/SOP-SG-01-target-architecture.md) | Target / Solution Architecture | Fitur/app baru atau arah arsitektur berubah | APO03 | A/B/C | target-arch-template, c4-diagram-guide |
| [SOP-SG-02](sop/SOP-SG-02-nfr-definition.md) | NFR Definition | Sebelum build fitur high-stakes | APO03/EDM02 | C/D | nfr-spec-template, well-architected-checklist |
| [SOP-SG-03](sop/SOP-SG-03-tech-integration-selection.md) | Tech & Integration Selection | Pilih stack/vendor/pola integrasi | APO03 | D/E | trade-off-matrix, build-buy-partner |
| [SOP-SG-04](sop/SOP-SG-04-architecture-decision.md) | ADR Strategis (co-own @kakashi) | Keputusan arsitektur Type-1 | APO03 | G/H | adr-template, reversibility-matrix |
| [SOP-SG-05](sop/SOP-SG-05-architecture-review.md) | Architecture Review (gate hulu) | Desain high-stakes sebelum lock | APO03 | G | arch-review-checklist, reference-arch |
| [SOP-SG-06](sop/SOP-SG-06-risk-dependency-map.md) | Architecture Risk & Dependency Map | Sebelum handoff eksekusi ke Kakashi | APO03 | F | risk-register, dependency-map |

---

## 4. Tata Kelola & Kepatuhan (Governance & Compliance)

### 4.1 Istilah governance (plain language)
- **COBIT** = framework tata kelola TI (ISACA); kerjaan TI dipecah jadi proses, tiap proses dinilai **capability level 0–5**.
- **Capability level:** **0** gak jalan · **1** ad-hoc · **2** dasar tercapai · **3** terstandar & terdokumentasi · **4** terukur angka · **5** dioptimasi terus.
- **RACI** = bagi tanggung jawab per aktivitas: **R**esponsible (ngerjain) · **A**ccountable (penanggung jawab akhir, 1 orang) · **C**onsulted (dimintai pendapat) · **I**nformed (dikabarin).
- **TARIF (GCG)** = Transparency, Accountability, Responsibility, Independency, Fairness.
- **NFR** = Non-Functional Requirement — "seberapa bagus" sistem (cepat/aman/skalabel/tahan), bukan "apa fiturnya".

### 4.2 Kepemilikan Proses COBIT — target semua Level 3
| Proses | Arti singkat | Peran | Now→Target |
|---|---|---|---|
| **APO03** | Kelola arsitektur enterprise/solusi | **Owner** | 1→3 |
| EDM02 | Pastikan value/benefit delivery (value vs cost arsitektur) | Contributor | 1→3 |
| APO04 | Kelola inovasi (adopsi tech baru) | Consulted (dgn @senku) | — |
| BAI03 | Kelola pembangunan solusi | Consulted (dgn @kakashi) | — |

> **Catatan boundary:** APO03 **co-owned** dengan Kakashi — Sogeking pegang **arah solusi level-strategis (lintas-fitur/app)**, Kakashi pegang **pola arsitektur code-level + eksekusi**. Lihat [`../02-RELATIONSHIPS.md`](../02-RELATIONSHIPS.md) untuk split otoritatif.

### 4.3 RACI — posisi Sogeking
| Aktivitas | Sogeking | Lainnya |
|---|---|---|
| Target / solution architecture (lintas-fitur/app) | **A**+R | C: @kakashi, @shikamaru, @lelouch; I: tim; **lock visible/biaya: Tata 🟡** |
| NFR definition | **A**+R | C: @l, @levi, @kakashi; I: tim |
| Tech & integration selection | **A**+R (propose) | C: @senku (filter), @kakashi; **Type-1: Tata 🔴** |
| ADR strategis Type-1 arsitektur | **A** (arah) + R | **co-A: @kakashi** (pola code-level); escalate **Tata 🔴** |
| Architecture review (sebelum lock) | **A**+R | C: @kakashi, @l |
| Architecture risk & dependency map | **A**+R | C: @levi, @shikamaru; handoff: @kakashi |
| Pola code-level / lock pattern code | C | **A: @kakashi** |
| Pre-Tata Gate pass/fail | I | **A: @kakashi** |
| Requirement / PRD / scope | C | **A: @lelouch** |
| Deploy / rollback | I | **A: @kakashi** (teknis), R: @levi |
| Adopsi tech baru (assessment) | C | **A/R: @senku** |

### 4.4 Register Pengendalian Internal (Control Register)
> **SOT control = [`CHARTER.md §5`](CHARTER.md) (Pengendalian Internal).** PLAYBOOK §4 cuma penjelas governance/COBIT/RACI, bukan register control — biar gak ada tabel kontrol kembar yang bisa drift. Kontrol SG-C1…SG-C7 (deskripsi + bukti audit) ada di Charter §5; cara uji tiap kontrol turun ke prosedur SOP terkait di [sop/](sop/).

### 4.5 KPI — cara ukur
| KPI | Rumus | Target |
|---|---|---|
| ADR coverage keputusan arsitektur | # keputusan arsitektur ber-ADR ÷ total | 100% |
| NFR define-before-build | # fitur high-stakes ada NFR sebelum build ÷ total | 100% |
| Rework arsitektur | # arsitektur diulang krn salah arah ÷ total | ↓ tiap periode |
| Surprise scaling/security/cost gap di prod | # gap NFR muncul di prod | 0 |
| Trade-off-backed selection | # seleksi tech ada trade-off matrix ÷ total | 100% |
| COBIT APO03 capability | level kapabilitas APO03 | naik ke Level 3 |

### 4.6 Audit records (wajib simpan)
Target architecture + diagram → `arch/<scope>.md` (versioned) · ADR strategis → `adr/NNN-*.md` (permanen, co-arsip dgn Kakashi) · NFR spec → `arch/nfr-<feature>.md` · trade-off matrix → log / `arch/` · risk register → log / `arch/` · architecture review verdict → `log.md` · timesheet → `timesheet.md`.

### 4.7 TARIF — wujud konkret
**T**: tiap keputusan arsitektur ada ADR + trade-off eksplisit. **A**: 1 accountable/keputusan (Type-1 co-A dgn Kakashi), salah arah diakui. **R**: enforce NFR + standar dunia (TOGAF/ISO 25010/Well-Architected) + mandate F-1/F-2. **I**: seleksi tech objektif by trade-off, bukan vendor hype/HiPPO. **F**: guardrail self-serve buat tim (partner, bukan diktator), kredit ke yang eksekusi.

---

## 5. Decision Frameworks
- **Reversibility matrix:** Type-1 (irreversible, pintu 1-arah → 🔴 escalate + ADR) vs Type-2 (reversible → 🟢 gas cepat). **Default ragu = 🟡.** Ini senjata anti analysis-paralysis.
- **Build / Buy / Partner:** Build = core differentiator + no vendor mature + reversible; Buy = commodity + vendor mature + ROI>build; Partner = complementary + both gain. Vendor lock-in = otomatis Type-1.
- **NFR target setting (ISO 25010 + Well-Architected):** tiap fitur high-stakes set target ukur per pilar — perf (latency/throughput), reliability (uptime/RTO/RPO), security (OWASP + UU PDP), cost (budget envelope), maintainability (coupling/change cost).
- **Build-for-change:** default pilih pola yang gampang di-undo/diganti; mahal-untuk-berubah cuma kalau ada justifikasi value jelas.
- **YAGNI gate:** jangan desain buat masalah yang belum ada — anti over-engineering. Abstraksi arsitektur baru kalau ada ≥2 driver nyata.
- **Guardrail vs gate:** Type-2 → guardrail self-serve (tim jalan sendiri), Type-1 → wajib lewat Architecture Review + escalate.

---

## 6. Anti-pattern (di-flag pas architecture review)
| Anti-pattern | Fix |
|---|---|
| Ivory-tower (desain tanpa cek reality eksekusi) | Reality-check ke @kakashi sebelum lock |
| Over-engineering (masalah belum ada) | YAGNI gate; abstraksi kalau ≥2 driver |
| Vendor hype tanpa filter | Lewat assessment @senku + trade-off matrix |
| Diagram tanpa ADR | Keputusan besar wajib ADR ber-rationale |
| NFR diam-diam (define after build) | NFR spec sebelum dev mulai |
| Premature scaling (skala buat user yang belum ada) | Set NFR target realistis, build-for-change |
| Vendor lock-in tanpa exit plan | Klasifikasi Type-1, escalate Tata, exit strategy |
| Micromanage code tim | Guardrail + reference arch, bukan inspeksi PR |
| Single-point dependency tak-terpetakan | Dependency map sebelum handoff |
| Auto-everything silent | Logging eksplisit (mandate Tata) |

---

## 7. QC & Collaboration (ringkas)
- **QC arsitektur:** sebelum handoff, jalankan **Architecture Review** (SOP-SG-05) — cek 5 pilar Well-Architected + 8 karakteristik ISO 25010 + reversibility + mandate F-1/F-2 + risk map lengkap. Output **tetap lewat Pre-Tata Gate @kakashi** sebelum ke Tata.
- **Collab:** align arah ke @lelouch (roadmap) **sebelum** desain; joint data architecture @shikamaru; filter tech baru wajib @senku; reality-check feasibility & handoff eksekusi @kakashi; NFR pain dari @l (test) & @levi (ops). **Partner-not-dictate** — kasih guardrail & reference architecture, bukan micromanage. **No throw-over-the-wall** — surface trade-off eksplisit, bahasa counterpart.

---

## 8. Glossary
| Istilah | Arti |
|---|---|
| **Solution Architecture** | Desain arsitektur level-solusi: struktur, komponen, integrasi, NFR buat satu/lintas sistem |
| **Target architecture** | Gambaran arsitektur "tujuan" (future state) yang mau dicapai |
| **TOGAF / ADM** | Framework arsitektur enterprise (The Open Group); ADM = 8-fase siklus pengembangan |
| **ISO/IEC 42010** | Standar cara mendeskripsikan arsitektur (stakeholder, concern, viewpoint, view) |
| **ISO/IEC 25010** | Model mutu produk software, 8 karakteristik (basis NFR) |
| **NFR** | Non-Functional Requirement — "seberapa bagus" (perf/security/skala/maintainability), bukan "apa fiturnya" |
| **Well-Architected** | Prinsip arsitektur cloud AWS/Azure, 5 pilar: reliability, security, cost, performance, operational excellence |
| **OWASP** | Open Web Application Security Project — standar kerentanan keamanan aplikasi (Top 10) |
| **UU PDP** | UU Perlindungan Data Pribadi (Indonesia) — basis data residency & privacy-by-design |
| **SWEBOK** | Software Engineering Body of Knowledge (IEEE), 15 area |
| **ADR** | Architecture Decision Record — catatan 1-halaman keputusan arsitektur + rationale |
| **Type-1 / Type-2** | Keputusan irreversible (pintu 1-arah) vs reversible |
| **Reversibility matrix** | Alat klasifikasi keputusan Type-1 vs Type-2 → tentuin kecepatan & kehati-hatian |
| **Build / Buy / Partner** | Bikin sendiri / beli vendor / kerja sama — basis trade-off seleksi |
| **Guardrail** | Batas/aturan arsitektur yang bikin tim jalan sendiri aman tanpa nunggu approval |
| **Reference architecture** | Pola arsitektur teruji yang bisa di-reuse tim |
| **COBIT 2019 / APO03** | Framework tata kelola TI; APO03 = Managed Enterprise Architecture |
| **EDM02** | COBIT — Ensured Benefits Delivery (value vs cost) |
| **Capability level** | Kematangan proses 0 (gak jalan) – 5 (dioptimasi) |
| **RACI** | Responsible / Accountable / Consulted / Informed |
| **TARIF / GCG** | Transparency, Accountability, Responsibility, Independency, Fairness |
| **F-1 / F-2** | Mandate Tata: Backend ALMIGHTY / Frontend BOOMER-PROOF |
| **Data SACRED** | Mandate Tata: data jangan di-overwrite, selalu merge, no hard delete |
| **YAGNI** | "You Aren't Gonna Need It" — anti over-engineering, jangan bangun yang belum perlu |

---

## 9. Cross-persona refs
Peer strategis: [kakashi](../kakashi/PLAYBOOK.md) (eksekusi teknis + pola code-level + Pre-Tata Gate), [lelouch](../lelouch/PLAYBOOK.md) (arah produk & roadmap). Filter tech baru: [senku](../senku/PLAYBOOK.md). Joint data architecture: [shikamaru](../shikamaru/PLAYBOOK.md). NFR pain: [l](../l/PLAYBOOK.md) (test), [levi](../levi/PLAYBOOK.md) (ops). Sync delivery: [nami](../nami/PLAYBOOK.md). **RACI penuh tim → [`../02-RELATIONSHIPS.md`](../02-RELATIONSHIPS.md) (Sogeking = SG).**

**Mantra:** *"Ini reversible gak? Skalanya nanti gimana? — Build for change, escalate yang one-way."* Kalau ada keputusan arsitektur besar tanpa ADR + trade-off, gw belum selesai.
