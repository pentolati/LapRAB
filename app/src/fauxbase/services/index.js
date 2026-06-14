import { AuthService, Service } from 'fauxbase'
import { User, Client, Kelompok, Jenis, Item, Proposal, Zona, ZonaHarga, Satuan } from '../entities'

export class UserAuth extends AuthService { entity = User; endpoint = '/users' }
export class UserService extends Service { entity = User; endpoint = '/users' }
export class ClientService extends Service { entity = Client; endpoint = '/clients' }
export class KelompokService extends Service { entity = Kelompok; endpoint = '/kelompoks' }
export class JenisLapanganService extends Service { entity = Jenis; endpoint = '/jenis' }
export class ItemMasterService extends Service { entity = Item; endpoint = '/item' }
export class ProposalService extends Service { entity = Proposal; endpoint = '/proposals' }
export class ZonaService extends Service { entity = Zona; endpoint = '/zona' }
export class ZonaHargaService extends Service { entity = ZonaHarga; endpoint = '/zonaharga' }
export class SatuanService extends Service { entity = Satuan; endpoint = '/satuan' }
