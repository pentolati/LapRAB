import { seed } from 'fauxbase'
import { User, Client, Kelompok, Jenis, Item, Proposal, Zona, ZonaHarga, Satuan } from '../entities'

// ── Login users (klik langsung masuk) ────────────────────────────────
export const userSeeds = seed(User, [
  { name: 'Indra', email: 'indra', role: 'Sales', color: 'brand', initials: 'IN' },
  { name: 'Rojir', email: 'rojir', role: 'Sales', color: 'gold', initials: 'RO' },
  { name: 'Rizky', email: 'rizky', role: 'Owner', color: 'sage', initials: 'RZ' },
])

// ── Kelompok pekerjaan (acuan AHSP Cipta Karya / SE DJBK 68-2024) ─────
export const kelompokSeeds = seed(Kelompok, [
  { name: 'Pekerjaan Persiapan', code: 'A', sortOrder: 1 },
  { name: 'Pekerjaan Tanah', code: 'B', sortOrder: 2 },
  { name: 'Pondasi & Base', code: 'C', sortOrder: 3 },
  { name: 'Struktur (Beton/Baja)', code: 'D', sortOrder: 4 },
  { name: 'Drainase', code: 'E', sortOrder: 5 },
  { name: 'Permukaan', code: 'F', sortOrder: 6 },
  { name: 'Pagar & Net', code: 'G', sortOrder: 7 },
  { name: 'Pencahayaan & Listrik', code: 'H', sortOrder: 8 },
  { name: 'Marka & Aksesori', code: 'I', sortOrder: 9 },
  { name: 'Finishing', code: 'J', sortOrder: 10 },
])

// ── Jenis lapangan ───────────────────────────────────────────────────
export const jenisSeeds = seed(Jenis, [
  { name: 'Padel', slug: 'padel', icon: '🎾', defaultPanjang: 20, defaultLebar: 10, indoorOutdoor: 'Keduanya', permukaan: 'Rumput sintetis + kaca tempered', color: 'brand', catatan: 'Ukuran FIP 20x10 m. Dinding kaca tempered 10/12 mm, tinggi 3 m + 1 m mesh.' },
  { name: 'Mini Soccer', slug: 'mini-soccer', icon: '⚽', defaultPanjang: 50, defaultLebar: 30, indoorOutdoor: 'Outdoor', permukaan: 'Rumput sintetis 50mm', color: 'sage', catatan: 'Ukuran lazim 40x20 s/d 50x30 m.' },
  { name: 'Futsal', slug: 'futsal', icon: '🥅', defaultPanjang: 26, defaultLebar: 16, indoorOutdoor: 'Keduanya', permukaan: 'Rumput sintetis / vinyl', color: 'gold', catatan: 'Indo lazim 16x26 / 15x25 m. Clearance min 4 m (FIFA).' },
  { name: 'Basket', slug: 'basket', icon: '🏀', defaultPanjang: 28, defaultLebar: 15, indoorOutdoor: 'Keduanya', permukaan: 'Akrilik / parket', color: 'brand', catatan: 'Standar FIBA 28x15 m. Tinggi ring 3,05 m.' },
  { name: 'Badminton', slug: 'badminton', icon: '🏸', defaultPanjang: 13.4, defaultLebar: 6.1, indoorOutdoor: 'Indoor', permukaan: 'Karpet vinyl PVC', color: 'sage', catatan: 'Standar BWF 13,40x6,10 m (ganda). Clearance plafon min 9 m.' },
])

// ── Zona / wilayah harga ─────────────────────────────────────────────
export const zonaSeeds = seed(Zona, [
  { name: 'Jabodetabek', mode: 'persen', indexPct: 100, sortOrder: 1 },
  { name: 'Jawa (non-Jabodetabek)', mode: 'persen', indexPct: 95, sortOrder: 2 },
  { name: 'Sumatera / Kalimantan', mode: 'persen', indexPct: 112, sortOrder: 3 },
  { name: 'Indonesia Timur', mode: 'persen', indexPct: 130, sortOrder: 4 },
  { name: 'Bali (price-list khusus)', mode: 'harga', indexPct: 100, sortOrder: 5 },
])
export const zonaHargaSeeds = seed(ZonaHarga, [])

// ── Satuan ukur (dropdown) ───────────────────────────────────────────
export const satuanSeeds = seed(Satuan, [
  { nama: 'ls', sortOrder: 1 }, { nama: 'm2', sortOrder: 2 }, { nama: 'm3', sortOrder: 3 },
  { nama: "m'", sortOrder: 4 }, { nama: 'titik', sortOrder: 5 }, { nama: 'unit', sortOrder: 6 },
  { nama: 'btg', sortOrder: 7 }, { nama: 'kg', sortOrder: 8 }, { nama: 'lembar', sortOrder: 9 },
  { nama: 'sak', sortOrder: 10 }, { nama: 'set', sortOrder: 11 }, { nama: 'roll', sortOrder: 12 },
])

// ── Template item per jenis lapangan (volume otomatis dari dimensi) ───
// row: [nama, kelompok, satuan, volumeMode, koef, hargaSatuan]
// volumeMode: luas (p*l*koef) | volume (m3, koef=tebal) | keliling (2(p+l)*koef) | unit (qty=koef) | ls (qty=1)
// GLOBAL — aktivitas & harga sama di SEMUA jenis (qty auto dari dimensi). jenisSlug '*'
const GLOBAL_ITEMS = [
  ['Mobilisasi & demobilisasi alat', 'Pekerjaan Persiapan', 'ls', 'ls', 1, 4000000],
  ['Pembersihan & pengukuran lahan', 'Pekerjaan Persiapan', 'ls', 'ls', 1, 2500000],
  ['Galian tanah dasar', 'Pekerjaan Tanah', 'm3', 'volume', 0.2, 65000],
  ['Pemadatan tanah dasar (stamper)', 'Pekerjaan Tanah', 'm2', 'luas', 1, 25000],
  ['Buang tanah sisa galian', 'Pekerjaan Tanah', 'm3', 'volume', 0.2, 45000],
  ['Urugan sirtu/agregat padat', 'Pondasi & Base', 'm3', 'volume', 0.15, 220000],
  ['Lantai kerja beton B0', 'Pondasi & Base', 'm2', 'luas', 1, 75000],
  ['Saluran drainase keliling', 'Drainase', "m'", 'keliling', 1, 150000],
  ['Instalasi listrik + panel', 'Pencahayaan & Listrik', 'ls', 'ls', 1, 10000000],
  ['Pembersihan akhir & serah terima', 'Finishing', 'ls', 'ls', 1, 2000000],
]

// SPESIFIK per jenis (permukaan, struktur khas, aksesori, lampu, pagar)
const RAW_ITEMS = {
  padel: [
    ['Cor slab beton bertulang K-225 (t.12cm)', 'Struktur (Beton/Baja)', 'm3', 'volume', 0.12, 1250000],
    ['Anchor wall beton keliling 40x40cm', 'Struktur (Beton/Baja)', "m'", 'keliling', 1, 450000],
    ['Rangka baja galvanis + kaca tempered 10mm (kit padel)', 'Struktur (Beton/Baja)', 'ls', 'ls', 1, 320000000],
    ['Rumput sintetis padel + infill', 'Permukaan', 'm2', 'luas', 1, 270000],
    ['Lampu LED flood 200W + tiang', 'Pencahayaan & Listrik', 'titik', 'unit', 4, 4500000],
    ['Net padel + tiang + aksesori', 'Marka & Aksesori', 'unit', 'unit', 1, 8500000],
  ],
  'mini-soccer': [
    ['Geotextile non-woven', 'Permukaan', 'm2', 'luas', 1, 35000],
    ['Rumput sintetis 50mm + infill', 'Permukaan', 'm2', 'luas', 1, 195000],
    ['Gawang + net sepasang', 'Marka & Aksesori', 'unit', 'unit', 1, 12000000],
    ['Marka / line marking', 'Marka & Aksesori', 'ls', 'ls', 1, 3500000],
    ['Pagar jaring keliling (t.4m)', 'Pagar & Net', 'm2', 'keliling', 4, 145000],
    ['Lampu LED 400W + tiang', 'Pencahayaan & Listrik', 'titik', 'unit', 6, 6500000],
  ],
  futsal: [
    ['Beton rabat/screed base', 'Struktur (Beton/Baja)', 'm2', 'luas', 1, 95000],
    ['Rumput sintetis futsal + infill', 'Permukaan', 'm2', 'luas', 1, 175000],
    ['Gawang futsal sepasang', 'Marka & Aksesori', 'unit', 'unit', 1, 9000000],
    ['Jaring pengaman keliling (t.4m)', 'Pagar & Net', 'm2', 'keliling', 4, 135000],
    ['Lampu LED + tiang', 'Pencahayaan & Listrik', 'titik', 'unit', 6, 4000000],
  ],
  basket: [
    ['Cor slab beton bertulang (t.10cm)', 'Struktur (Beton/Baja)', 'm3', 'volume', 0.1, 1250000],
    ['Pembesian wiremesh M8', 'Struktur (Beton/Baja)', 'kg', 'luas', 3.5, 18000],
    ['Acrylic resurfacer + cushion + color coating', 'Permukaan', 'm2', 'luas', 1, 175000],
    ['Cat marka garis lapangan', 'Marka & Aksesori', 'ls', 'ls', 1, 2000000],
    ['Ring + papan pantul + tiang (sepasang)', 'Marka & Aksesori', 'unit', 'unit', 2, 7500000],
    ['Pagar pengaman keliling (t.3m)', 'Pagar & Net', 'm2', 'keliling', 3, 145000],
    ['Lampu LED + tiang', 'Pencahayaan & Listrik', 'titik', 'unit', 4, 4000000],
  ],
  badminton: [
    ['Cor beton lantai kerja + wiremesh', 'Struktur (Beton/Baja)', 'm2', 'luas', 1, 175000],
    ['Screed/leveling permukaan', 'Permukaan', 'm2', 'luas', 1, 65000],
    ['Karpet vinyl PVC sport (BWF)', 'Permukaan', 'm2', 'luas', 1, 385000],
    ['Cat marka garis lapangan', 'Marka & Aksesori', 'ls', 'ls', 1, 1200000],
    ['Net + tiang badminton', 'Marka & Aksesori', 'unit', 'unit', 1, 3500000],
    ['Lampu LED khusus badminton', 'Pencahayaan & Listrik', 'titik', 'unit', 8, 1800000],
  ],
}

const itemRows = []
GLOBAL_ITEMS.forEach(([nama, kelompok, satuan, volumeMode, koef, hargaSatuan], i) => {
  itemRows.push({ nama, jenisSlug: '*', kelompok, satuan, volumeMode, koef, hargaSatuan, sortOrder: i })
})
Object.entries(RAW_ITEMS).forEach(([slug, rows]) => {
  rows.forEach(([nama, kelompok, satuan, volumeMode, koef, hargaSatuan], i) => {
    itemRows.push({ nama, jenisSlug: slug, kelompok, satuan, volumeMode, koef, hargaSatuan, sortOrder: i + 100 })
  })
})
export const itemSeeds = seed(Item, itemRows)

// ── Klien ────────────────────────────────────────────────────────────
export const clientSeeds = seed(Client, [
  { name: 'PT Arena Sport Jaya', company: 'PT Arena Sport Jaya', phone: '0812-1111-2222', email: 'info@arenasport.id', address: 'Jakarta Selatan' },
  { name: 'Bpk. Hendra Wijaya', company: '', phone: '0813-3333-4444', email: '', address: 'Bandung' },
  { name: 'Sport Center Galaxy', company: 'CV Galaxy Sport', phone: '0811-5555-6677', email: 'galaxy@sport.id', address: 'Surabaya' },
  { name: 'Komunitas Badminton Sehat', company: '', phone: '0856-7788-9900', email: '', address: 'Depok' },
  { name: 'PT Mega Olahraga', company: 'PT Mega Olahraga Nusantara', phone: '0815-2233-4455', email: 'procurement@megaolahraga.co.id', address: 'Tangerang' },
])

// helper bikin item snapshot ringkas
const li = (nama, kelompok, satuan, volume, hargaSatuan) => ({ nama, kelompok, satuan, volume, hargaSatuan })

// ── Proposal sampel (biar dashboard komprehensif) ────────────────────
const PROPOSALS = [
  {
    nomor: 'RAB/2026/001', clientName: 'PT Arena Sport Jaya', jenisLapanganId: 'padel', jenisLapanganName: 'Padel',
    tanggal: '2026-06-10', panjang: 20, lebar: 10, bufferPct: 5, marginPct: 15, ppnPct: 0, status: 'Prospek', salesName: 'Indra',
    items: [
      li('Rangka baja galvanis + kaca tempered 10mm (kit padel)', 'Struktur (Beton/Baja)', 'ls', 1, 320000000),
      li('Cor slab beton bertulang K-225 (t.12cm)', 'Struktur (Beton/Baja)', 'm3', 24, 1250000),
      li('Rumput sintetis padel (carpet)', 'Permukaan', 'm2', 200, 235000),
      li('Net padel + tiang', 'Marka & Aksesori', 'unit', 1, 6500000),
      li('Lampu LED flood 200W', 'Pencahayaan & Listrik', 'titik', 4, 2000000),
    ],
  },
  {
    nomor: 'RAB/2026/002', clientName: 'Bpk. Hendra Wijaya', jenisLapanganId: 'mini-soccer', jenisLapanganName: 'Mini Soccer',
    tanggal: '2026-05-22', panjang: 40, lebar: 20, bufferPct: 5, marginPct: 12, ppnPct: 0, status: 'Deal', salesName: 'Indra',
    items: [
      li('Rumput sintetis 50mm', 'Permukaan', 'm2', 800, 165000),
      li('Sub-base agregat batu pecah', 'Pondasi & Base', 'm3', 120, 220000),
      li('Gawang + net sepasang', 'Marka & Aksesori', 'unit', 1, 12000000),
      li('Pagar jaring keliling (t.4m)', 'Pagar & Net', 'm2', 480, 145000),
      li('Tiang lampu + lampu LED 400W', 'Pencahayaan & Listrik', 'titik', 6, 6500000),
    ],
  },
  {
    nomor: 'RAB/2026/003', clientName: 'PT Arena Sport Jaya', jenisLapanganId: 'futsal', jenisLapanganName: 'Futsal',
    tanggal: '2026-04-15', panjang: 26, lebar: 16, bufferPct: 5, marginPct: 15, ppnPct: 0, status: 'Deal', salesName: 'Rojir',
    items: [
      li('Rumput sintetis futsal', 'Permukaan', 'm2', 416, 145000),
      li('Beton rabat/screed base', 'Struktur (Beton/Baja)', 'm2', 416, 95000),
      li('Gawang futsal sepasang', 'Marka & Aksesori', 'unit', 1, 9000000),
      li('Jaring pengaman keliling (t.4m)', 'Pagar & Net', 'm2', 336, 135000),
    ],
  },
  {
    nomor: 'RAB/2026/004', clientName: 'Sport Center Galaxy', jenisLapanganId: 'basket', jenisLapanganName: 'Basket',
    tanggal: '2026-05-30', panjang: 28, lebar: 15, bufferPct: 8, marginPct: 15, ppnPct: 0, status: 'Rejected', salesName: 'Rojir',
    items: [
      li('Cor slab beton bertulang (t.10cm)', 'Struktur (Beton/Baja)', 'm3', 42, 1250000),
      li('Acrylic cushion + color coating', 'Permukaan', 'm2', 420, 110000),
      li('Ring + papan pantul + tiang (sepasang)', 'Marka & Aksesori', 'unit', 2, 7500000),
    ],
  },
  {
    nomor: 'RAB/2026/005', clientName: 'Komunitas Badminton Sehat', jenisLapanganId: 'badminton', jenisLapanganName: 'Badminton',
    tanggal: '2026-06-05', panjang: 13.4, lebar: 6.1, bufferPct: 5, marginPct: 18, ppnPct: 0, status: 'Prospek', salesName: 'Indra',
    items: [
      li('Karpet vinyl PVC sport (BWF)', 'Permukaan', 'm2', 82, 385000),
      li('Cor beton lantai kerja + wiremesh', 'Struktur (Beton/Baja)', 'm2', 82, 175000),
      li('Net + tiang badminton', 'Marka & Aksesori', 'unit', 1, 3500000),
    ],
  },
  {
    nomor: 'RAB/2026/006', clientName: 'PT Mega Olahraga', jenisLapanganId: 'padel', jenisLapanganName: 'Padel',
    tanggal: '2026-03-28', panjang: 20, lebar: 10, bufferPct: 5, marginPct: 15, ppnPct: 0, status: 'Deal', salesName: 'Rojir',
    items: [
      li('Rangka baja galvanis + kaca tempered 10mm (kit padel)', 'Struktur (Beton/Baja)', 'ls', 1, 320000000),
      li('Rumput sintetis padel (carpet)', 'Permukaan', 'm2', 200, 235000),
      li('Net padel + tiang', 'Marka & Aksesori', 'unit', 1, 6500000),
    ],
  },
]

// inject riwayat awal (Dibuat) ke tiap proposal
export const proposalSeeds = seed(Proposal, PROPOSALS.map((p) => ({
  ...p,
  history: [{ ts: p.tanggal + 'T09:00:00', user: p.salesName, action: 'Dibuat', detail: `Proposal ${p.nomor} dibuat` }],
})))
