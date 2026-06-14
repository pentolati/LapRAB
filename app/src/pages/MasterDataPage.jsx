import { useState } from 'react'
import {
  Box, Heading, Text, VStack, HStack, Card, CardBody, Tabs, TabList, TabPanels, Tab, TabPanel,
  Table, Thead, Tbody, Tr, Th, Td, Input, Select, IconButton, Button, Badge, useToast, Flex,
} from '@chakra-ui/react'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import { useList, useMutation } from 'fauxbase-react'
import { fb } from '../fauxbase'
import { rupiah } from '../lib/format'

export default function MasterDataPage() {
  return (
    <Box p={{ base: 4, md: 8 }} maxW="1200px" mx="auto">
      <VStack align="start" spacing={0} mb={5}>
        <Heading size="lg">Master Data</Heading>
        <Text color="slate.500" fontSize="sm">Kelola harga, jenis lapangan, dan kelompok pekerjaan. Perubahan langsung dipakai saat bikin proposal baru.</Text>
      </VStack>
      <Tabs colorScheme="brand" variant="soft-rounded">
        <TabList mb={4} gap={2}>
          <Tab>💰 Harga / Item</Tab>
          <Tab>🏟️ Jenis Lapangan</Tab>
          <Tab>🗂️ Kelompok Pekerjaan</Tab>
          <Tab>🌍 Zona / Wilayah</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}><HargaTab /></TabPanel>
          <TabPanel p={0}><JenisTab /></TabPanel>
          <TabPanel p={0}><KelompokTab /></TabPanel>
          <TabPanel p={0}><ZonaTab /></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

const KELOMPOK_OPTS = [
  'Pekerjaan Persiapan', 'Pekerjaan Tanah', 'Pondasi & Base', 'Struktur (Beton/Baja)',
  'Drainase', 'Permukaan', 'Pagar & Net', 'Pencahayaan & Listrik', 'Marka & Aksesori', 'Finishing',
]
const VMODE = ['luas', 'volume', 'keliling', 'unit', 'ls']

function HargaTab() {
  const toast = useToast()
  const { items: jenisList } = useList(fb.jenis, { size: 50 })
  const { items, refetch } = useList(fb.item, { size: 500 })
  const { create, update, remove } = useMutation(fb.item)
  const { items: satuanList, refetch: refSat } = useList(fb.satuan, { size: 50, sort: { field: 'sortOrder', direction: 'asc' } })
  const { create: createSat } = useMutation(fb.satuan)
  const [slug, setSlug] = useState('')
  const [newSat, setNewSat] = useState('')

  const tambahSatuan = async () => {
    const v = newSat.trim()
    if (!v) return
    if ((satuanList || []).some((s) => s.nama === v)) return toast({ title: 'Satuan sudah ada', status: 'info', duration: 1200 })
    await createSat({ nama: v, sortOrder: (satuanList?.length || 0) + 1 })
    setNewSat(''); refSat?.(); toast({ title: `Satuan "${v}" ditambahkan`, status: 'success', duration: 1500 })
  }

  const rows = (items || [])
    .filter((m) => !slug || m.jenisSlug === slug)
    .sort((a, b) => (a.jenisSlug + a.sortOrder).localeCompare(b.jenisSlug + b.sortOrder))

  const save = async (m, key, val) => {
    const v = ['hargaSatuan', 'koef', 'sortOrder'].includes(key) ? Number(val) || 0 : val
    if (m[key] === v) return
    await update(m.id, { [key]: v })
    refetch?.()
  }
  const tambah = async () => {
    if (!slug) return toast({ title: 'Pilih jenis lapangan dulu untuk menambah item', status: 'warning' })
    await create({ nama: 'Item baru', jenisSlug: slug, kelompok: 'Lainnya', satuan: 'ls', volumeMode: 'ls', koef: 1, hargaSatuan: 0, sortOrder: rows.length })
    refetch?.()
  }
  const hapus = async (m) => { await remove(m.id); refetch?.(); toast({ title: 'Item dihapus', status: 'info', duration: 1200 }) }

  return (
    <Card overflow="hidden">
      <CardBody p={0}>
        <Flex p={3} gap={3} align="center" justify="space-between" flexWrap="wrap">
          <HStack gap={3} flexWrap="wrap">
            <Select w="240px" placeholder="Semua jenis lapangan" value={slug} onChange={(e) => setSlug(e.target.value)}>
              <option value="*">🌐 Global (semua jenis)</option>
              {(jenisList || []).map((j) => <option key={j.id} value={j.slug}>{j.icon} {j.name}</option>)}
            </Select>
            <HStack spacing={1}>
              <Input size="sm" w="120px" placeholder="+ satuan baru" value={newSat}
                onChange={(e) => setNewSat(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && tambahSatuan()} />
              <Button size="sm" variant="outline" onClick={tambahSatuan}>Tambah Satuan</Button>
            </HStack>
          </HStack>
          <Button size="sm" leftIcon={<FiPlus />} onClick={tambah}>Tambah Item</Button>
        </Flex>
        <Box overflowX="auto">
          <Table size="sm">
            <Thead bg="slate.50">
              <Tr>
                <Th>Item</Th><Th>Jenis</Th><Th>Kelompok</Th><Th>Sat.</Th>
                <Th>Vol. Mode</Th><Th isNumeric>Koef</Th><Th isNumeric>Harga Satuan</Th><Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((m) => (
                <Tr key={m.id}>
                  <Td minW="200px"><Input size="sm" variant="unstyled" defaultValue={m.nama} onBlur={(e) => save(m, 'nama', e.target.value)} /></Td>
                  <Td>{m.jenisSlug === '*'
                    ? <Badge colorScheme="green">🌐 global</Badge>
                    : <Badge colorScheme="slate" bg="slate.100">{m.jenisSlug}</Badge>}</Td>
                  <Td>
                    <Select size="sm" variant="unstyled" defaultValue={m.kelompok} onChange={(e) => save(m, 'kelompok', e.target.value)}>
                      {[...KELOMPOK_OPTS, 'Lainnya'].map((k) => <option key={k} value={k}>{k}</option>)}
                    </Select>
                  </Td>
                  <Td maxW="80px">
                    <Select size="sm" variant="unstyled" defaultValue={m.satuan} onChange={(e) => save(m, 'satuan', e.target.value)}>
                      {!(satuanList || []).some((s) => s.nama === m.satuan) && m.satuan && <option value={m.satuan}>{m.satuan}</option>}
                      {(satuanList || []).map((s) => <option key={s.id} value={s.nama}>{s.nama}</option>)}
                    </Select>
                  </Td>
                  <Td>
                    <Select size="sm" variant="unstyled" defaultValue={m.volumeMode} onChange={(e) => save(m, 'volumeMode', e.target.value)}>
                      {VMODE.map((v) => <option key={v} value={v}>{v}</option>)}
                    </Select>
                  </Td>
                  <Td isNumeric maxW="70px"><Input size="sm" type="number" textAlign="right" variant="unstyled" defaultValue={m.koef} onBlur={(e) => save(m, 'koef', e.target.value)} /></Td>
                  <Td isNumeric maxW="140px"><Input size="sm" type="number" textAlign="right" defaultValue={m.hargaSatuan} onBlur={(e) => save(m, 'hargaSatuan', e.target.value)} /></Td>
                  <Td><IconButton aria-label="del" size="xs" variant="ghost" colorScheme="red" icon={<FiTrash2 />} onClick={() => hapus(m)} /></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box p={3}><Text fontSize="xs" color="slate.400">Vol. mode: <b>luas</b>=p×l, <b>volume</b>=p×l×koef (m³, koef=tebal), <b>keliling</b>=2(p+l)×koef, <b>unit</b>=koef (jumlah tetap), <b>ls</b>=1.</Text></Box>
      </CardBody>
    </Card>
  )
}

function JenisTab() {
  const { items, refetch } = useList(fb.jenis, { size: 50 })
  const { create, update, remove } = useMutation(fb.jenis)
  const save = async (j, key, val) => {
    const v = ['defaultPanjang', 'defaultLebar'].includes(key) ? Number(val) || 0 : val
    if (j[key] === v) return
    await update(j.id, { [key]: v }); refetch?.()
  }
  const tambah = async () => { await create({ name: 'Lapangan Baru', slug: 'baru-' + Date.now(), icon: '🏟️', defaultPanjang: 0, defaultLebar: 0 }); refetch?.() }
  return (
    <Card overflow="hidden"><CardBody p={0} overflowX="auto">
      <Flex p={3} justify="flex-end"><Button size="sm" leftIcon={<FiPlus />} onClick={tambah}>Tambah Jenis</Button></Flex>
      <Table size="sm">
        <Thead bg="slate.50"><Tr><Th>Icon</Th><Th>Nama</Th><Th>Slug</Th><Th isNumeric>P (m)</Th><Th isNumeric>L (m)</Th><Th>In/Out</Th><Th>Permukaan</Th><Th></Th></Tr></Thead>
        <Tbody>
          {(items || []).map((j) => (
            <Tr key={j.id}>
              <Td maxW="50px"><Input size="sm" variant="unstyled" defaultValue={j.icon} onBlur={(e) => save(j, 'icon', e.target.value)} /></Td>
              <Td><Input size="sm" variant="unstyled" fontWeight="600" defaultValue={j.name} onBlur={(e) => save(j, 'name', e.target.value)} /></Td>
              <Td><Badge colorScheme="slate" bg="slate.100">{j.slug}</Badge></Td>
              <Td isNumeric maxW="70px"><Input size="sm" type="number" textAlign="right" variant="unstyled" defaultValue={j.defaultPanjang} onBlur={(e) => save(j, 'defaultPanjang', e.target.value)} /></Td>
              <Td isNumeric maxW="70px"><Input size="sm" type="number" textAlign="right" variant="unstyled" defaultValue={j.defaultLebar} onBlur={(e) => save(j, 'defaultLebar', e.target.value)} /></Td>
              <Td maxW="110px">
                <Select size="sm" variant="unstyled" defaultValue={j.indoorOutdoor} onChange={(e) => save(j, 'indoorOutdoor', e.target.value)}>
                  {['Outdoor', 'Indoor', 'Keduanya'].map((o) => <option key={o} value={o}>{o}</option>)}
                </Select>
              </Td>
              <Td><Input size="sm" variant="unstyled" defaultValue={j.permukaan} onBlur={(e) => save(j, 'permukaan', e.target.value)} /></Td>
              <Td><IconButton aria-label="del" size="xs" variant="ghost" colorScheme="red" icon={<FiTrash2 />} onClick={async () => { await remove(j.id); refetch?.() }} /></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </CardBody></Card>
  )
}

function KelompokTab() {
  const { items, refetch } = useList(fb.kelompok, { size: 100, sort: { field: 'sortOrder', direction: 'asc' } })
  const { create, update, remove } = useMutation(fb.kelompok)
  const save = async (k, key, val) => { if (k[key] === val) return; await update(k.id, { [key]: val }); refetch?.() }
  const tambah = async () => { await create({ name: 'Kelompok Baru', code: '', sortOrder: (items?.length || 0) + 1 }); refetch?.() }
  return (
    <Card overflow="hidden"><CardBody p={0} overflowX="auto">
      <Flex p={3} justify="flex-end"><Button size="sm" leftIcon={<FiPlus />} onClick={tambah}>Tambah Kelompok</Button></Flex>
      <Table size="sm">
        <Thead bg="slate.50"><Tr><Th maxW="60px">Kode</Th><Th>Nama Kelompok Pekerjaan</Th><Th isNumeric>Urutan</Th><Th></Th></Tr></Thead>
        <Tbody>
          {(items || []).map((k) => (
            <Tr key={k.id}>
              <Td maxW="60px"><Input size="sm" variant="unstyled" defaultValue={k.code} onBlur={(e) => save(k, 'code', e.target.value)} /></Td>
              <Td><Input size="sm" variant="unstyled" defaultValue={k.name} onBlur={(e) => save(k, 'name', e.target.value)} /></Td>
              <Td isNumeric maxW="80px"><Input size="sm" type="number" textAlign="right" variant="unstyled" defaultValue={k.sortOrder} onBlur={(e) => save(k, 'sortOrder', Number(e.target.value) || 0)} /></Td>
              <Td><IconButton aria-label="del" size="xs" variant="ghost" colorScheme="red" icon={<FiTrash2 />} onClick={async () => { await remove(k.id); refetch?.() }} /></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box p={3}><Text fontSize="xs" color="slate.400">Acuan: AHSP Bidang Cipta Karya (SE DJBK No.68/2024 Lampiran VI).</Text></Box>
    </CardBody></Card>
  )
}

function ZonaTab() {
  const { items: zonas, refetch } = useList(fb.zona, { size: 50, sort: { field: 'sortOrder', direction: 'asc' } })
  const { create, update, remove } = useMutation(fb.zona)
  const { items: jenisList } = useList(fb.jenis, { size: 50 })
  const { items: master } = useList(fb.item, { size: 500 })
  const { items: overrides, refetch: refOv } = useList(fb.zonaharga, { size: 1000 })
  const { create: createOv, update: updateOv } = useMutation(fb.zonaharga)
  const [hargaZonaId, setHargaZonaId] = useState('')
  const [slug, setSlug] = useState('')

  const saveZona = (z, k, v) => { const vv = k === 'indexPct' ? Number(v) || 0 : v; if (z[k] === vv) return; update(z.id, { [k]: vv }).then(refetch) }
  const tambah = () => create({ name: 'Zona Baru', mode: 'persen', indexPct: 100, sortOrder: (zonas?.length || 0) + 1 }).then(refetch)
  const ovFor = (m) => (overrides || []).find((o) => o.zonaId === hargaZonaId && o.jenisSlug === m.jenisSlug && o.nama === m.nama)
  const setOverride = async (m, val) => {
    const v = Number(val) || 0
    const ex = ovFor(m)
    if (ex) await updateOv(ex.id, { hargaSatuan: v })
    else await createOv({ zonaId: hargaZonaId, jenisSlug: m.jenisSlug, nama: m.nama, hargaSatuan: v })
    refOv()
  }
  const hargaZonas = (zonas || []).filter((z) => z.mode === 'harga')
  const rows = (master || []).filter((m) => !slug || m.jenisSlug === slug)

  return (
    <VStack align="stretch" spacing={4}>
      <Card overflow="hidden"><CardBody p={0} overflowX="auto">
        <Flex p={3} justify="space-between" align="center">
          <Text fontSize="sm" color="slate.500">Tiap zona bisa pakai <b>% indeks</b> atau <b>price-list sendiri</b>.</Text>
          <Button size="sm" leftIcon={<FiPlus />} onClick={tambah}>Tambah Zona</Button>
        </Flex>
        <Table size="sm">
          <Thead bg="slate.50"><Tr><Th>Nama Zona</Th><Th>Mode</Th><Th isNumeric>Indeks %</Th><Th isNumeric>Urutan</Th><Th></Th></Tr></Thead>
          <Tbody>
            {(zonas || []).map((z) => (
              <Tr key={z.id}>
                <Td><Input size="sm" variant="unstyled" fontWeight="600" defaultValue={z.name} onBlur={(e) => saveZona(z, 'name', e.target.value)} /></Td>
                <Td maxW="130px">
                  <Select size="sm" variant="unstyled" defaultValue={z.mode} onChange={(e) => saveZona(z, 'mode', e.target.value)}>
                    <option value="persen">% indeks</option>
                    <option value="harga">price-list</option>
                  </Select>
                </Td>
                <Td isNumeric maxW="90px">
                  {z.mode === 'persen'
                    ? <Input size="sm" type="number" textAlign="right" variant="unstyled" defaultValue={z.indexPct} onBlur={(e) => saveZona(z, 'indexPct', e.target.value)} />
                    : <Text fontSize="xs" color="slate.400">—</Text>}
                </Td>
                <Td isNumeric maxW="70px"><Input size="sm" type="number" textAlign="right" variant="unstyled" defaultValue={z.sortOrder} onBlur={(e) => saveZona(z, 'sortOrder', Number(e.target.value) || 0)} /></Td>
                <Td><IconButton aria-label="del" size="xs" variant="ghost" colorScheme="red" icon={<FiTrash2 />} onClick={async () => { await remove(z.id); refetch?.() }} /></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody></Card>

      {/* Editor price-list utk zona mode 'harga' */}
      <Card overflow="hidden"><CardBody p={0} overflowX="auto">
        <Flex p={3} gap={3} align="center" flexWrap="wrap">
          <Text fontSize="sm" fontWeight="600">Price-list khusus zona</Text>
          <Select size="sm" w="220px" placeholder="Pilih zona price-list" value={hargaZonaId} onChange={(e) => setHargaZonaId(e.target.value)}>
            {hargaZonas.map((z) => <option key={z.id} value={z.id}>{z.name}</option>)}
          </Select>
          {hargaZonaId && (
            <Select size="sm" w="200px" placeholder="Semua jenis" value={slug} onChange={(e) => setSlug(e.target.value)}>
              {(jenisList || []).map((j) => <option key={j.id} value={j.slug}>{j.icon} {j.name}</option>)}
            </Select>
          )}
        </Flex>
        {!hargaZonaId ? (
          <Box p={4}><Text fontSize="sm" color="slate.400">Pilih zona ber-mode <b>price-list</b> untuk atur harga khusus. Item yang tidak diisi memakai harga acuan.</Text></Box>
        ) : (
          <Box overflowX="auto">
            <Table size="sm">
              <Thead bg="slate.50"><Tr><Th>Item</Th><Th>Jenis</Th><Th isNumeric>Harga Acuan</Th><Th isNumeric>Harga Zona Ini</Th></Tr></Thead>
              <Tbody>
                {rows.map((m) => {
                  const ov = ovFor(m)
                  return (
                    <Tr key={m.id}>
                      <Td>{m.nama}</Td>
                      <Td><Badge colorScheme="slate" bg="slate.100">{m.jenisSlug}</Badge></Td>
                      <Td isNumeric color="slate.500">{rupiah(m.hargaSatuan)}</Td>
                      <Td isNumeric maxW="150px">
                        <Input size="sm" type="number" textAlign="right" placeholder={String(m.hargaSatuan)}
                          defaultValue={ov ? ov.hargaSatuan : ''} key={hargaZonaId + m.id}
                          onBlur={(e) => e.target.value !== '' && setOverride(m, e.target.value)} />
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </Box>
        )}
      </CardBody></Card>
    </VStack>
  )
}
