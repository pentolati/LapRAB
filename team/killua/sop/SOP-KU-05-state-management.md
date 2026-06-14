# SOP-KU-05 — State Management (Zustand) Convention

| | |
|---|---|
| **Kode** | SOP-KU-05 |
| **Pemilik** | Killua (Senior Frontend Engineer) |
| **Revisi** | 1.0 · **Berlaku** 2026-05-29 · **Reviu** per kuartal |
| **Referensi** | React best practices, Zustand docs, Fauxbase, SWEBOK (Design) |
| **COBIT** | BAI03 (Managed Solutions Build) |

## 1. Tujuan
Menetapkan **konvensi pemilihan & struktur state** biar konsisten lintas codebase: state ditaruh di tempat yang tepat (local / Zustand / server / URL), gak ada prop-drilling dalam, gak ada state bocor, gak ada duplikasi sumber kebenaran. Stack default Tata: **Zustand** (client) + **Fauxbase** (server-derived).

## 2. Ruang Lingkup
- **Berlaku:** keputusan penempatan & struktur state apa pun di FE.
- **Tidak berlaku:** style/theme (itu theme token, bukan state); konstanta statis.

## 3. Definisi & Istilah
- **Local state** — `useState`/`useReducer` di dalam 1 component.
- **Lifted state** — state dinaikin ke parent biar dishare ke beberapa child.
- **Prop drilling** — lewatin props turun banyak hop; >2 hop = smell.
- **Zustand store** — store global minimalis (hook-based), buat state cross-page persistent (auth/pref/cart).
- **Server-derived state** — data dari sumber data (Fauxbase) yang di-fetch/cache — **bukan** disimpen manual di Zustand.
- **Single source of truth** — tiap data cuma punya 1 tempat otoritatif; jangan duplikat.

## 4. Referensi
React best practices (lift state up, derive don't store, don't sync state via `useEffect`), Zustand patterns, Fauxbase hooks (`useList/useGet/useMutation`), mandate stack-lock.

## 5. Tanggung Jawab (RACI)
| Aktivitas | R | A | C | I |
|---|---|---|---|---|
| Keputusan state shape | Killua | Killua | @kakashi (kalau lintas-area) | — |
| Lock konvensi store (kalau >3 area) | Killua | @kakashi | Killua | tim |

## 6. Prosedur

### 6.1 Klasifikasi kebutuhan state
- 6.1.1 Tentukan **scope & sumber** state via decision tree:

| State | Solusi |
|---|---|
| 1 component, child gak butuh | `useState` local |
| Parent + 1–2 child butuh | Lift up (prop-drill 1–2 hop OK) |
| Deep tree, banyak descendant | `useContext` (ringan) **atau** Zustand store |
| Cross-page persistent (auth, user pref, cart) | **Zustand store** |
| Server-derived (data dari sumber, cached, refresh) | **Fauxbase `useList/useGet/useMutation`** |
| URL-driven (filter, page, tab) | `useSearchParams` / route param |

- 6.1.2 **Decision point — server-derived?** Kalau data dari sumber → **JANGAN** simpen manual di Zustand/`useState`; pakai Fauxbase hooks (single source of truth). Duplikat = drift bug.

### 6.2 Struktur (kalau Zustand)
- 6.2.1 1 store per **domain** (mis. `useAuthStore`, `useCartStore`) — bukan 1 mega-store global.
- 6.2.2 **Selector granular** — component subscribe field yang dipakai aja (`useStore(s => s.user)`), bukan seluruh store → cegah re-render gak perlu.
- 6.2.3 Action di dalam store (colocate state + mutator), bukan sebar di component.

### 6.3 Anti-leak & exit
- 6.3.1 **Cek bocor:** ada state yang harusnya local malah global? ada `useEffect` cuma buat sync state dari props (itu anti-pattern — derive di render)?
- 6.3.2 **Exit criteria:** prop-drilling ≤2 hop, single source of truth tiap data, no state-sync-via-effect, selector granular.
- 6.3.3 Catat keputusan state non-trivial di `log.md`. Kalau pola store sama muncul **>3 area** → koord @kakashi buat lock konvensi (SOP-KK-06).

## 7. Pengecualian
- **Fauxbase belum cover use-case:** boleh react-query / fetch+custom-hook sementara, tapi catat sebagai tech-debt + flag @kakashi (Type-2, reversible).
- **Server state mutasi optimistik:** boleh simpen sementara di local buat optimistic update + rollback `onError` — tapi sumber tetap Fauxbase.

## 8. Rekaman & Retensi
| Rekaman | Lokasi | Retensi |
|---|---|---|
| Keputusan state shape non-trivial | `log.md` | Permanen |
| Konvensi store yang di-lock (kalau >3 area) | style guide / repo | Living |

## 9. Indikator Kinerja (KPI)
| KPI | Rumus | Target |
|---|---|---|
| Prop-drilling depth | hop maksimal prop dilewatin | ≤ 2 |
| State bocor | # state global yang harusnya local (temuan review) | 0 |
| Duplikat source of truth | # data disimpen >1 tempat | 0 |

## 10. Riwayat Revisi
| Rev | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 2026-05-29 | Terbit pertama. Konteks: Zustand+Fauxbase scaffold Proyek-Contoh (auth/session pending sprint) |
