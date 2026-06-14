import { createClient } from 'fauxbase'
import {
  UserAuth, UserService, ClientService, KelompokService,
  JenisLapanganService, ItemMasterService, ProposalService,
  ZonaService, ZonaHargaService, SatuanService,
} from './services'
import {
  userSeeds, clientSeeds, kelompokSeeds, jenisSeeds, itemSeeds, proposalSeeds,
  zonaSeeds, zonaHargaSeeds, satuanSeeds,
} from './seeds'

// Reset data lokal saat seed/schema berubah (prototype dev convenience)
const SEED_VERSION = '9'
try {
  if (localStorage.getItem('laprab_seed_v') !== SEED_VERSION) {
    localStorage.clear()
    localStorage.setItem('laprab_seed_v', SEED_VERSION)
  }
} catch {}

export const fb = createClient({
  driver: { type: 'local', persist: 'localStorage' },
  services: {
    user: UserService,
    client: ClientService,
    kelompok: KelompokService,
    jenis: JenisLapanganService,
    item: ItemMasterService,
    proposal: ProposalService,
    zona: ZonaService,
    zonaharga: ZonaHargaService,
    satuan: SatuanService,
  },
  auth: UserAuth,
  seeds: [userSeeds, kelompokSeeds, jenisSeeds, itemSeeds, clientSeeds, proposalSeeds, zonaSeeds, zonaHargaSeeds, satuanSeeds],
  events: true,
})
