import { Entity, field } from 'fauxbase'

// Login (klik langsung masuk, tanpa ketik)
export class User extends Entity {
  @field({ required: true }) name
  @field({ default: '' }) email
  @field({ default: 'Sales' }) role
  @field({ default: 'brand' }) color
  @field({ default: '' }) initials
}

// Calon customer / klien
export class Client extends Entity {
  @field({ required: true }) name
  @field({ default: '' }) company
  @field({ default: '' }) phone
  @field({ default: '' }) email
  @field({ default: '' }) address
}

// Kelompok / sub-kelompok pekerjaan (self-referencing via parentId)
// Acuan: AHSP Cipta Karya (SE DJBK No.68/2024 Lampiran VI)
export class Kelompok extends Entity {
  @field({ required: true }) name
  @field({ default: '' }) parentId // kosong = kelompok utama
  @field({ default: 0 }) sortOrder
  @field({ default: '' }) code
}

// Jenis lapangan olahraga
export class Jenis extends Entity {
  @field({ required: true }) name
  @field({ default: '' }) slug
  @field({ default: '🏟️' }) icon
  @field({ default: 0 }) defaultPanjang
  @field({ default: 0 }) defaultLebar
  @field({ default: 'Outdoor' }) indoorOutdoor
  @field({ default: '' }) permukaan
  @field({ default: '' }) catatan
  @field({ default: 'brand' }) color
}

// Item pekerjaan master (template per jenis lapangan + harga satuan)
// volumeMode: luas | volume | keliling | unit | ls
export class Item extends Entity {
  @field({ required: true }) nama
  @field({ default: '' }) jenisSlug
  @field({ default: '' }) kelompok
  @field({ default: 'm2' }) satuan
  @field({ default: 'luas' }) volumeMode
  @field({ default: 1 }) koef
  @field({ default: 0 }) hargaSatuan
  @field({ default: 0 }) sortOrder
}

// Satuan ukur (dropdown, bisa ditambah)
export class Satuan extends Entity {
  @field({ required: true }) nama
  @field({ default: 0 }) sortOrder
}

// Zona / wilayah harga. mode: 'persen' (pakai indexPct) | 'harga' (price-list sendiri via ZonaHarga)
export class Zona extends Entity {
  @field({ required: true }) name
  @field({ default: 'persen' }) mode
  @field({ default: 100 }) indexPct
  @field({ default: 0 }) sortOrder
}

// Override harga per item untuk zona ber-mode 'harga'
export class ZonaHarga extends Entity {
  @field({ default: '' }) zonaId
  @field({ default: '' }) jenisSlug
  @field({ default: '' }) nama
  @field({ default: 0 }) hargaSatuan
}

// Proposal / RAB (item disnapshot saat dibuat)
export class Proposal extends Entity {
  @field({ default: '' }) nomor
  @field({ default: '' }) clientId
  @field({ default: '' }) clientName
  @field({ default: '' }) jenisLapanganId
  @field({ default: '' }) jenisLapanganName
  @field({ default: '' }) zonaId
  @field({ default: '' }) zonaName
  @field({ default: '' }) tanggal
  @field({ default: 0 }) panjang
  @field({ default: 0 }) lebar
  @field({ default: 0 }) bufferPct
  @field({ default: 0 }) marginPct
  @field({ default: 0 }) ppnPct
  @field({ default: 'Prospek' }) status
  @field({ default: '' }) salesName
  @field({ default: '' }) catatan
  @field({ default: [] }) items // [{nama,satuan,volume,hargaSatuan,kelompok}]
  @field({ default: [] }) history // [{ts,user,action,detail}]
}
