# SOP-SK-01 — Research / POC

| | |
|---|---|
| **Kode** | SOP-SK-01 |
| **Pemilik** | Senku (R&D Engineer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | Systematic Research Methodology, evidence hierarchy, [tools/research-methodology.md](../tools/research-methodology.md), [tools/6q-critical-filter.md](../tools/6q-critical-filter.md), [tools/poc-report-template.md](../tools/poc-report-template.md) |
| **COBIT** | APO04 (Managed Innovation) |

## 1. Tujuan
Menjawab pertanyaan riset / memvalidasi hipotesis berbasis **bukti agresif (minimum 10 sumber, multi-angle)** yang lewat **6Q critical filter**, supaya rekomendasi ke produk bukan hype/vibes.

## 2. Ruang Lingkup
- **Berlaku:** semua pertanyaan riset, validasi hipotesis, eksplorasi tech/market, yang outputnya nyetir keputusan produk.
- **Tidak berlaku:** lookup fakta sepele (1 sumber cukup), pertanyaan yang udah dijawab di riset sebelumnya (reuse).

## 3. Definisi & Istilah
- **Evidence hierarchy** — tingkatan bobot bukti: primary > peer-reviewed paper > whitepaper/eng-blog > regulatory > competitor > blog/opini.
- **Hipotesis falsifiable** — pernyataan yang bisa dibuktikan SALAH (bukan opini).
- **Critical filter (6Q)** — saringan 6 pertanyaan: real problem / sustainable / fit stack / compliant / business-fit / reversible.
- **Sintesa** — ringkasan actionable; verbose untuk engineer/PM, 1-page untuk Tata.

## 4. Referensi
Systematic Research Methodology, evidence hierarchy, Tata mandate (abusively riset ≥10 sumber, critical thinking continuous, evidence first, verbose internal/sintesa external).

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Riset & sintesa | Senku | Senku | @lelouch (relevansi produk) | Tata |
| 6Q critical filter | Senku | Senku | — | tim |
| Kesimpulan nyetir keputusan produk | Senku (recommend) | **Tata** | @lelouch | tim |

## 6. Prosedur

### 6.1 Framing
- 6.1.1 Definisikan **pertanyaan riset** + kenapa relevan (kalau dijawab, decision apa yang berubah?).
- 6.1.2 Tulis **hipotesis falsifiable** ("kalau X, maka Y, karena Z") + **stop condition** (time-box / threshold bukti). Lewatkan hypothesis quality test (PLAYBOOK §5.5).
- 6.1.3 **Exit kalau hipotesis gak falsifiable / gak relevan** → revisi dulu, jangan mulai riset.

### 6.2 Pengumpulan bukti (≥10 sumber, multi-angle)
- 6.2.1 Kumpulkan **minimum 10 sumber** lintas tingkat evidence hierarchy: paper, whitepaper, engineering blog, GitHub repo (cek community health), regulatory doc, competitor product, primary interview kalau perlu.
- 6.2.2 Catat tiap sumber dengan **tingkat bukti + 1-line why relevant** (audit trail, kontrol SK-C2). Pakai daemon: `robin.call` (summarize), `oracle.extract` (PDF/non-text).
- 6.2.3 **Exit kalau < 10 sumber atau cuma 1 angle** → cari lagi sampai cukup multi-perspektif.

### 6.3 Analisis & filter
- 6.3.1 Sintesa finding (apa yang konvergen, apa yang konflik). Tandai finding high-confidence (sumber tingkat 1–4) vs inconclusive.
- 6.3.2 Lewatkan tiap finding / rekomendasi via **6Q critical filter** ([6q-critical-filter](../tools/6q-critical-filter.md)). Verdict per item: adopt / adopt-with-constraint / refuted / defer.
- 6.3.3 **Decision point:** ada item nyentuh data/payment? → trigger **SOP-SK-03 (Compliance Assessment)** sebelum recommend.
- 6.3.4 Cek **klaim/stat verifiable** (kontrol SK-C5) — flag fake/unverifiable stat.

### 6.4 Output & handoff
- 6.4.1 Tulis **verbose report** ([poc-report-template](../tools/poc-report-template.md)) + **sintesa 1-page Tata-friendly** (bullet, bold key number, skip catchphrase).
- 6.4.2 **Decision point:** kesimpulan nyetir keputusan produk? → **rekomendasi 🟡 ke Tata/Lelouch** (jangan main putus). Compliance red-flag? → **escalate 🔴**.
- 6.4.3 **Research note high-level WAJIB sebelum fitur dibangun** (kontrol SK-C7, GOVERNANCE §4.7) — kalau riset ini jadi dasar fitur, arsipkan **research note** (evidence + opsi + rekomendasi, ikut [poc-report-template](../tools/poc-report-template.md)) ke `senku/` + tautkan di `log.md`. **0 fitur boleh dibangun (@killua/@saitama) tanpa research note ter-arsip.**
- 6.4.4 **Exit criteria:** hipotesis ada verdict (confirmed/refuted/inconclusive) + ≥10 sumber ter-cite + 6Q filter lengkap + sintesa siap + (kalau jadi dasar fitur) research note ter-arsip + references saved untuk reuse @bulma/@lelouch.

## 7. Pengecualian
- **Riset urgent (Tata "jancok"):** boleh quick-scan < 10 sumber untuk arah awal, **tapi wajib disclaim "preliminary"** + follow-up full riset. Gak boleh diam-diam dianggap final.
- **Topik udah diriset sebelumnya:** reuse hasil + update delta, gak ulang dari nol (Reuse > Rebuild).

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Verbose report + sintesa | `log.md` | Permanen |
| Research note high-level (sebelum fitur dibangun, §4.7) | `senku/` + tautan `log.md` | Permanen |
| Source list (evidence trail) | `log.md` | Permanen |
| 6Q filter verdict | `log.md` / TADR | Permanen |
| Reference URLs (reuse) | `log.md` | Living |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Source depth | # sumber per riset | **≥ 10** |
| Filter coverage | # finding lewat 6Q ÷ total | **100%** |
| Hypothesis decisiveness | # riset kelar dengan verdict ÷ total | 100% (no ngambang) |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Contoh acuan: 10-competitor scan landing v4 |
