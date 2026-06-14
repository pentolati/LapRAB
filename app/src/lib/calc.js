// Harga satuan efektif menurut zona.
// zona.mode 'persen' → hargaBase × indexPct%. 'harga' → override dari ZonaHarga, fallback hargaBase.
export function hargaEfektif(hargaBase, jenisSlug, nama, zona, overrides) {
  const base = Number(hargaBase) || 0
  if (!zona) return base
  if (zona.mode === 'harga') {
    const ov = (overrides || []).find((o) => o.zonaId === zona.id && o.jenisSlug === jenisSlug && o.nama === nama)
    return ov ? (Number(ov.hargaSatuan) || 0) : base
  }
  return Math.round(base * (Number(zona.indexPct) || 100) / 100)
}

// Hitung volume sebuah item master dari dimensi lapangan
export function hitungVolume({ volumeMode, koef }, panjang, lebar) {
  const p = Number(panjang) || 0
  const l = Number(lebar) || 0
  const k = Number(koef) || 0
  const luas = p * l
  const keliling = 2 * (p + l)
  switch (volumeMode) {
    case 'luas': return round(luas * k, 2)
    case 'volume': return round(luas * k, 2) // koef = tebal (m) -> m3
    case 'keliling': return round(keliling * k, 2)
    case 'unit': return k
    case 'ls': return 1
    default: return round(luas * k, 2)
  }
}

function round(n, d = 2) {
  const f = Math.pow(10, d)
  return Math.round(n * f) / f
}

// Bangun daftar item RAB dari template master + dimensi
export function buildItems(masterItems, panjang, lebar) {
  return masterItems.map((m) => ({
    nama: m.nama,
    kelompok: m.kelompok,
    satuan: m.satuan,
    volume: hitungVolume(m, panjang, lebar),
    hargaSatuan: m.hargaSatuan,
  }))
}

// Hitung semua total (base, buffer, margin, ppn, client)
export function hitungTotal(items, { bufferPct = 0, marginPct = 0, ppnPct = 0 }) {
  const base = (items || []).reduce((s, it) => s + (Number(it.volume) || 0) * (Number(it.hargaSatuan) || 0), 0)
  const buffer = base * (Number(bufferPct) || 0) / 100
  const subtotalAfterBuffer = base + buffer
  const margin = subtotalAfterBuffer * (Number(marginPct) || 0) / 100
  const subtotalAfterMargin = subtotalAfterBuffer + margin
  const ppn = subtotalAfterMargin * (Number(ppnPct) || 0) / 100
  const grandTotal = subtotalAfterMargin + ppn

  // markup faktor utk "melebur" buffer+margin ke harga satuan client
  const markup = base > 0 ? subtotalAfterMargin / base : 1

  return { base, buffer, margin, subtotalAfterMargin, ppn, grandTotal, markup }
}

// Item untuk tampilan KLIEN (buffer + margin sudah dilebur ke harga satuan, tidak ada baris terpisah)
export function itemsForClient(items, markup) {
  return (items || []).map((it) => {
    const hargaClient = Math.round((Number(it.hargaSatuan) || 0) * markup)
    return {
      ...it,
      hargaSatuan: hargaClient,
      subtotal: Math.round((Number(it.volume) || 0) * hargaClient),
    }
  })
}

// Group item per kelompok pekerjaan (untuk tampilan bertingkat)
export function groupByKelompok(items) {
  const map = new Map()
  for (const it of items || []) {
    const key = it.kelompok || 'Lainnya'
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(it)
  }
  return Array.from(map.entries()).map(([kelompok, list]) => ({
    kelompok,
    items: list,
    subtotal: list.reduce((s, it) => s + (Number(it.volume) || 0) * (Number(it.hargaSatuan) || 0), 0),
  }))
}
