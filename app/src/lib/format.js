export function rupiah(n) {
  const v = Math.round(Number(n) || 0)
  return 'Rp' + v.toLocaleString('id-ID')
}

export function rupiahShort(n) {
  const v = Number(n) || 0
  if (v >= 1e9) return 'Rp' + (v / 1e9).toFixed(1).replace('.0', '') + ' M'
  if (v >= 1e6) return 'Rp' + (v / 1e6).toFixed(1).replace('.0', '') + ' jt'
  return rupiah(v)
}

export function tanggalID(iso) {
  if (!iso) return '-'
  const d = new Date(iso)
  if (isNaN(d)) return iso
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

export function tanggalWaktuID(iso) {
  if (!iso) return '-'
  const d = new Date(iso)
  if (isNaN(d)) return iso
  return d.toLocaleString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}
