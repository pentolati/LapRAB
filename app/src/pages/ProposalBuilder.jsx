import { useEffect, useState } from 'react'
import {
  Box, Button, Heading, HStack, VStack, Text, SimpleGrid, Card, CardBody, Input, Select,
  Table, Thead, Tbody, Tr, Th, Td, IconButton, Divider, useToast, Flex, Tag, Textarea,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
  FormControl, FormLabel, InputGroup, InputRightAddon, Tooltip, Checkbox,
} from '@chakra-ui/react'
import { FiTrash2, FiPlus, FiArrowLeft, FiSave, FiInfo } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import { useList, useGet, useMutation } from 'fauxbase-react'
import { fb } from '../fauxbase'
import { hitungVolume, hitungTotal, hargaEfektif } from '../lib/calc'
import { rupiah, todayISO } from '../lib/format'
import { useStore } from '../store/useStore'

const KELOMPOK_OPTS = [
  'Pekerjaan Persiapan', 'Pekerjaan Tanah', 'Pondasi & Base', 'Struktur (Beton/Baja)',
  'Drainase', 'Permukaan', 'Pagar & Net', 'Pencahayaan & Listrik', 'Marka & Aksesori', 'Finishing',
]

export default function ProposalBuilder() {
  const { id } = useParams()
  const isEdit = !!id
  const navigate = useNavigate()
  const toast = useToast()
  const user = useStore((s) => s.user)

  const { items: jenisList } = useList(fb.jenis, { size: 50 })
  const { items: masterItems } = useList(fb.item, { size: 500 })
  const { items: zonas } = useList(fb.zona, { size: 50, sort: { field: 'sortOrder', direction: 'asc' } })
  const { items: zonaHargas } = useList(fb.zonaharga, { size: 1000 })
  const { items: satuanList } = useList(fb.satuan, { size: 50, sort: { field: 'sortOrder', direction: 'asc' } })
  const { items: clients, refetch: refetchClients } = useList(fb.client, { size: 200 })
  const { items: allProposals } = useList(fb.proposal, { size: 500 })
  const { data: existing } = useGet(fb.proposal, id, { enabled: isEdit })
  const { create, update } = useMutation(fb.proposal)
  const { create: createClient } = useMutation(fb.client)
  const { create: createItem } = useMutation(fb.item)

  const [form, setForm] = useState({
    clientId: '', clientName: '', tanggal: todayISO(),
    jenisSlug: '', jenisName: '', zonaId: '', zonaName: '', panjang: 0, lebar: 0,
    bufferPct: 5, marginPct: 15, ppnPct: 0, catatan: '', items: [],
  })
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const currentZona = (zonas || []).find((z) => z.id === form.zonaId)

  // default zona (Jabodetabek) saat zonas termuat (mode baru)
  useEffect(() => {
    if (!isEdit && !form.zonaId && (zonas || []).length) {
      const z = zonas[0]
      setForm((f) => ({ ...f, zonaId: z.id, zonaName: z.name }))
    }
  }, [zonas, isEdit, form.zonaId])

  // Load existing (edit mode)
  useEffect(() => {
    if (isEdit && existing) {
      setForm({
        clientId: existing.clientId || '', clientName: existing.clientName || '',
        tanggal: existing.tanggal || todayISO(),
        jenisSlug: existing.jenisLapanganId || '', jenisName: existing.jenisLapanganName || '',
        zonaId: existing.zonaId || '', zonaName: existing.zonaName || '',
        panjang: existing.panjang || 0, lebar: existing.lebar || 0,
        bufferPct: existing.bufferPct || 0, marginPct: existing.marginPct || 0, ppnPct: existing.ppnPct || 0,
        catatan: existing.catatan || '',
        items: (existing.items || []).map((it) => ({ ...it, volumeMode: 'manual', hargaBase: it.hargaBase ?? it.hargaSatuan })),
      })
    }
  }, [isEdit, existing])

  // Pilih jenis lapangan → load template + default dimensi (new mode)
  const pilihJenis = (slug) => {
    const j = (jenisList || []).find((x) => x.slug === slug)
    if (!j) return
    const p = j.defaultPanjang, l = j.defaultLebar
    const zona = (zonas || []).find((z) => z.id === form.zonaId)
    const tmpl = (masterItems || [])
      .filter((m) => m.jenisSlug === slug || m.jenisSlug === '*')
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((m) => ({
        nama: m.nama, kelompok: m.kelompok, satuan: m.satuan,
        volumeMode: m.volumeMode, koef: m.koef,
        hargaBase: m.hargaSatuan,
        hargaSatuan: hargaEfektif(m.hargaSatuan, slug, m.nama, zona, zonaHargas),
        volume: hitungVolume(m, p, l),
      }))
    setForm((f) => ({ ...f, jenisSlug: slug, jenisName: j.name, panjang: p, lebar: l, items: tmpl }))
  }

  // Ganti zona → recompute harga semua item dari hargaBase
  const ubahZona = (zonaId) => {
    const zona = (zonas || []).find((z) => z.id === zonaId)
    setForm((f) => ({
      ...f, zonaId, zonaName: zona?.name || '',
      items: f.items.map((it) => ({ ...it, hargaSatuan: hargaEfektif(it.hargaBase ?? it.hargaSatuan, f.jenisSlug, it.nama, zona, zonaHargas) })),
    }))
  }

  // Ubah dimensi → recompute volume (kecuali item manual)
  const ubahDimensi = (key, val) => {
    const v = Number(val) || 0
    setForm((f) => {
      const p = key === 'panjang' ? v : f.panjang
      const l = key === 'lebar' ? v : f.lebar
      const items = f.items.map((it) =>
        it.volumeMode && it.volumeMode !== 'manual'
          ? { ...it, volume: hitungVolume(it, p, l) } : it)
      return { ...f, [key]: v, items }
    })
  }

  const updateItem = (idx, key, val) => {
    setForm((f) => ({
      ...f,
      items: f.items.map((it, i) => i === idx
        ? { ...it, [key]: key === 'nama' || key === 'satuan' || key === 'kelompok' ? val : Number(val) || 0, ...(key === 'volume' ? { volumeMode: 'manual' } : {}), ...(key === 'hargaSatuan' ? { hargaBase: Number(val) || 0 } : {}) }
        : it),
    }))
  }
  const removeItem = (idx) => set('items', form.items.filter((_, i) => i !== idx))
  const addItem = () => { setManualItem({ nama: '', kelompok: 'Lainnya', satuan: 'ls', volume: 1, hargaSatuan: 0, saveToMaster: false }); itemModal.onOpen() }

  const t = hitungTotal(form.items, form)
  const luas = (Number(form.panjang) || 0) * (Number(form.lebar) || 0)

  // New client modal
  const clientModal = useDisclosure()
  const [newClient, setNewClient] = useState({ name: '', company: '', phone: '', address: '' })
  const saveNewClient = async () => {
    if (!newClient.name.trim()) return toast({ title: 'Nama klien wajib diisi', status: 'warning' })
    const c = await createClient(newClient)
    await refetchClients?.()
    setForm((f) => ({ ...f, clientId: c.id, clientName: c.name }))
    setNewClient({ name: '', company: '', phone: '', address: '' })
    clientModal.onClose()
    toast({ title: 'Klien ditambahkan', status: 'success' })
  }

  // Manual item modal (+ opsi simpan ke master)
  const itemModal = useDisclosure()
  const [manualItem, setManualItem] = useState({ nama: '', kelompok: 'Lainnya', satuan: 'ls', volume: 1, hargaSatuan: 0, saveToMaster: false })
  const setMI = (k, v) => setManualItem((m) => ({ ...m, [k]: v }))
  const submitManualItem = async () => {
    if (!manualItem.nama.trim()) return toast({ title: 'Nama item wajib diisi', status: 'warning' })
    const { nama, kelompok, satuan, volume, hargaSatuan, saveToMaster } = manualItem
    const base = Number(hargaSatuan) || 0
    set('items', [...form.items, { nama, kelompok, satuan, volume: Number(volume) || 0, hargaBase: base, hargaSatuan: hargaEfektif(base, form.jenisSlug, nama, currentZona, zonaHargas), volumeMode: 'manual' }])
    if (saveToMaster && form.jenisSlug) {
      await createItem({ nama, jenisSlug: form.jenisSlug, kelompok, satuan, volumeMode: 'unit', koef: Number(volume) || 1, hargaSatuan: Number(hargaSatuan) || 0, sortOrder: 99 })
      toast({ title: 'Item ditambahkan + disimpan ke Master Data', status: 'success' })
    } else {
      toast({ title: 'Item ditambahkan', status: 'success' })
    }
    itemModal.onClose()
  }

  const simpan = async () => {
    if (!form.clientName) return toast({ title: 'Pilih klien dulu', status: 'warning' })
    if (!form.jenisSlug) return toast({ title: 'Pilih jenis lapangan dulu', status: 'warning' })
    const snapItems = form.items.map(({ nama, kelompok, satuan, volume, hargaSatuan, hargaBase }) =>
      ({ nama, kelompok, satuan, volume, hargaSatuan, hargaBase: hargaBase ?? hargaSatuan }))
    const payload = {
      clientId: form.clientId, clientName: form.clientName, tanggal: form.tanggal,
      jenisLapanganId: form.jenisSlug, jenisLapanganName: form.jenisName,
      zonaId: form.zonaId, zonaName: form.zonaName,
      panjang: form.panjang, lebar: form.lebar,
      bufferPct: form.bufferPct, marginPct: form.marginPct, ppnPct: form.ppnPct,
      catatan: form.catatan, items: snapItems,
    }
    const now = new Date().toISOString()
    if (isEdit) {
      const entry = { ts: now, user: user?.name || '-', action: 'Edit proposal', detail: 'Detail RAB diperbarui' }
      await update(id, { ...payload, salesName: existing?.salesName || user?.name || '', history: [...(existing?.history || []), entry] })
      toast({ title: 'Proposal disimpan', status: 'success' })
      navigate(`/sales/${id}`)
    } else {
      const nomor = `RAB/2026/${String((allProposals?.length || 0) + 1).padStart(3, '0')}`
      const entry = { ts: now, user: user?.name || '-', action: 'Dibuat', detail: `Proposal ${nomor} dibuat` }
      const created = await create({ ...payload, nomor, status: 'Prospek', salesName: user?.name || '', history: [entry] })
      toast({ title: 'Proposal dibuat', status: 'success' })
      navigate(`/sales/${created.id}`)
    }
  }

  return (
    <Box p={{ base: 4, md: 8 }} maxW="1200px" mx="auto">
      <HStack mb={5} spacing={3}>
        <IconButton aria-label="back" icon={<FiArrowLeft />} variant="ghost" onClick={() => navigate('/sales')} />
        <Heading size="lg">{isEdit ? 'Edit Proposal' : 'New Proposal'}</Heading>
      </HStack>

      {/* Info dasar */}
      <Card mb={4}>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <FormControl>
              <FormLabel fontSize="sm">Klien</FormLabel>
              <HStack>
                <Select placeholder="Pilih klien" value={form.clientId}
                  onChange={(e) => {
                    const c = (clients || []).find((x) => x.id === e.target.value)
                    setForm((f) => ({ ...f, clientId: c?.id || '', clientName: c?.name || '' }))
                  }}>
                  {(clients || []).map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </Select>
                <Tooltip label="Klien baru"><IconButton aria-label="add client" icon={<FiPlus />} onClick={clientModal.onOpen} /></Tooltip>
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel fontSize="sm">Tanggal Generate</FormLabel>
              <Input type="date" value={form.tanggal} onChange={(e) => set('tanggal', e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="sm">Jenis Lapangan</FormLabel>
              <Select placeholder="Pilih jenis" value={form.jenisSlug} onChange={(e) => pilihJenis(e.target.value)}>
                {(jenisList || []).map((j) => <option key={j.id} value={j.slug}>{j.icon} {j.name}</option>)}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize="sm">Zona / Wilayah Harga</FormLabel>
              <Select value={form.zonaId} onChange={(e) => ubahZona(e.target.value)}>
                {(zonas || []).map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.name} {z.mode === 'persen' ? `(${z.indexPct}%)` : '(price-list)'}
                  </option>
                ))}
              </Select>
              {currentZona && (
                <Text fontSize="xs" color="slate.500" mt={1}>
                  {currentZona.mode === 'persen'
                    ? `Semua harga ×${currentZona.indexPct}% dari acuan`
                    : 'Pakai price-list khusus zona ini (atur di Master Data → Zona)'}
                </Text>
              )}
            </FormControl>
          </SimpleGrid>

          {form.jenisSlug && (
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mt={4}>
              <FormControl>
                <FormLabel fontSize="sm">Panjang (m)</FormLabel>
                <Input type="number" value={form.panjang === 0 ? '' : form.panjang} onChange={(e) => ubahDimensi('panjang', e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">Lebar (m)</FormLabel>
                <Input type="number" value={form.lebar === 0 ? '' : form.lebar} onChange={(e) => ubahDimensi('lebar', e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">Luas</FormLabel>
                <Input value={`${luas.toLocaleString('id-ID')} m²`} isReadOnly bg="slate.50" />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">Keliling</FormLabel>
                <Input value={`${(2 * (Number(form.panjang) + Number(form.lebar))).toLocaleString('id-ID')} m`} isReadOnly bg="slate.50" />
              </FormControl>
            </SimpleGrid>
          )}
        </CardBody>
      </Card>

      {form.jenisSlug && (
        <>
          {/* Item RAB */}
          <Card mb={4}>
            <CardBody p={0} overflowX="auto">
              <Table size="sm" minW="640px">
                <Thead bg="slate.50">
                  <Tr>
                    <Th>Item Pekerjaan</Th>
                    <Th>Kelompok</Th>
                    <Th isNumeric>Volume</Th>
                    <Th>Satuan</Th>
                    <Th isNumeric>Harga Satuan</Th>
                    <Th isNumeric>Subtotal</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {form.items.map((it, idx) => (
                    <Tr key={idx}>
                      <Td minW="220px">
                        <Input size="sm" variant="unstyled" value={it.nama} placeholder="nama item"
                          onChange={(e) => updateItem(idx, 'nama', e.target.value)} />
                      </Td>
                      <Td>
                        <Select size="sm" variant="unstyled" value={it.kelompok} onChange={(e) => updateItem(idx, 'kelompok', e.target.value)}>
                          {[...KELOMPOK_OPTS, 'Lainnya'].map((k) => <option key={k} value={k}>{k}</option>)}
                        </Select>
                      </Td>
                      <Td isNumeric maxW="90px">
                        <Input size="sm" type="number" textAlign="right" value={it.volume === 0 ? '' : it.volume}
                          onChange={(e) => updateItem(idx, 'volume', e.target.value)} />
                      </Td>
                      <Td maxW="80px">
                        <Select size="sm" value={it.satuan} onChange={(e) => updateItem(idx, 'satuan', e.target.value)}>
                          {!(satuanList || []).some((s) => s.nama === it.satuan) && it.satuan && <option value={it.satuan}>{it.satuan}</option>}
                          {(satuanList || []).map((s) => <option key={s.id} value={s.nama}>{s.nama}</option>)}
                        </Select>
                      </Td>
                      <Td isNumeric maxW="140px">
                        <Input size="sm" type="number" textAlign="right" value={it.hargaSatuan === 0 ? '' : it.hargaSatuan}
                          onChange={(e) => updateItem(idx, 'hargaSatuan', e.target.value)} />
                      </Td>
                      <Td isNumeric fontWeight="600" whiteSpace="nowrap">{rupiah((it.volume || 0) * (it.hargaSatuan || 0))}</Td>
                      <Td><IconButton aria-label="del" size="xs" variant="ghost" colorScheme="red" icon={<FiTrash2 />} onClick={() => removeItem(idx)} /></Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Box p={3}>
                <Button size="sm" variant="ghost" leftIcon={<FiPlus />} onClick={addItem}>Tambah item manual</Button>
              </Box>
            </CardBody>
          </Card>

          {/* Buffer / margin / total */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Card>
              <CardBody>
                <HStack mb={3}><Heading size="sm">Buffer &amp; Margin</Heading>
                  <Tooltip label="Buffer = cadangan kalau harga berubah. Margin = keuntungan. Keduanya TIDAK muncul terpisah di penawaran klien — sudah dilebur ke harga.">
                    <Box color="slate.400"><FiInfo /></Box></Tooltip>
                </HStack>
                <SimpleGrid columns={3} spacing={3}>
                  {[['Buffer', 'bufferPct'], ['Margin', 'marginPct'], ['PPN', 'ppnPct']].map(([lbl, key]) => (
                    <FormControl key={key}>
                      <FormLabel fontSize="xs">{lbl}</FormLabel>
                      <InputGroup size="sm">
                        <Input type="number" value={form[key] === 0 ? '' : form[key]}
                          onChange={(e) => set(key, e.target.value === '' ? 0 : Number(e.target.value))} />
                        <InputRightAddon>%</InputRightAddon>
                      </InputGroup>
                    </FormControl>
                  ))}
                </SimpleGrid>
                <Textarea mt={4} size="sm" placeholder="Catatan internal (opsional)" value={form.catatan}
                  onChange={(e) => set('catatan', e.target.value)} />
              </CardBody>
            </Card>

            <Card bg="sage.50">
              <CardBody>
                <Heading size="sm" mb={3}>Rekap (tampilan internal)</Heading>
                <VStack spacing={2} align="stretch" fontSize="sm">
                  <Row label="Subtotal (modal)" value={rupiah(t.base)} />
                  <Row label={`Buffer (${form.bufferPct}%)`} value={rupiah(t.buffer)} muted />
                  <Row label={`Margin (${form.marginPct}%)`} value={rupiah(t.margin)} muted />
                  {form.ppnPct > 0 && <Row label={`PPN (${form.ppnPct}%)`} value={rupiah(t.ppn)} muted />}
                  <Divider borderColor="sage.200" />
                  <Flex justify="space-between" align="center">
                    <Text fontWeight="600" color="slate.800">Nilai Penawaran ke Klien</Text>
                    <Text fontSize="xl" fontWeight="700" color="brand.700">{rupiah(t.grandTotal)}</Text>
                  </Flex>
                  <Tag size="sm" colorScheme="green" alignSelf="start">Margin {rupiah(t.buffer + t.margin)} dilebur ke harga</Tag>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          <HStack justify="flex-end" mt={6} spacing={3}>
            <Button variant="ghost" onClick={() => navigate('/sales')}>Batal</Button>
            <Button leftIcon={<FiSave />} onClick={simpan}>{isEdit ? 'Simpan Perubahan' : 'Simpan Proposal'}</Button>
          </HStack>
        </>
      )}

      {/* New client modal */}
      <Modal isOpen={clientModal.isOpen} onClose={clientModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Klien Baru</ModalHeader>
          <ModalBody>
            <VStack spacing={3}>
              {[['Nama / PT', 'name'], ['Perusahaan', 'company'], ['Telepon', 'phone'], ['Alamat', 'address']].map(([lbl, key]) => (
                <FormControl key={key} isRequired={key === 'name'}>
                  <FormLabel fontSize="sm">{lbl}</FormLabel>
                  <Input value={newClient[key]} onChange={(e) => setNewClient((c) => ({ ...c, [key]: e.target.value }))} />
                </FormControl>
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={clientModal.onClose}>Batal</Button>
            <Button onClick={saveNewClient}>Simpan</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Manual item modal */}
      <Modal isOpen={itemModal.isOpen} onClose={itemModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tambah Item Manual</ModalHeader>
          <ModalBody>
            <VStack spacing={3} align="stretch">
              <FormControl isRequired>
                <FormLabel fontSize="sm">Nama item</FormLabel>
                <Input value={manualItem.nama} onChange={(e) => setMI('nama', e.target.value)} placeholder="mis. Kanopi atap baja ringan" />
              </FormControl>
              <SimpleGrid columns={2} spacing={3}>
                <FormControl>
                  <FormLabel fontSize="sm">Kelompok</FormLabel>
                  <Select value={manualItem.kelompok} onChange={(e) => setMI('kelompok', e.target.value)}>
                    {[...KELOMPOK_OPTS, 'Lainnya'].map((k) => <option key={k} value={k}>{k}</option>)}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Satuan</FormLabel>
                  <Select value={manualItem.satuan} onChange={(e) => setMI('satuan', e.target.value)}>
                    {(satuanList || []).map((s) => <option key={s.id} value={s.nama}>{s.nama}</option>)}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Volume</FormLabel>
                  <Input type="number" value={manualItem.volume} onChange={(e) => setMI('volume', e.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Harga Satuan</FormLabel>
                  <Input type="number" value={manualItem.hargaSatuan} onChange={(e) => setMI('hargaSatuan', e.target.value)} />
                </FormControl>
              </SimpleGrid>
              <Checkbox isChecked={manualItem.saveToMaster} onChange={(e) => setMI('saveToMaster', e.target.checked)} colorScheme="brand" pt={1}>
                <Text fontSize="sm">Simpan juga ke <b>Master Data</b> (jenis {form.jenisName || 'ini'}) — biar bisa dipakai lagi</Text>
              </Checkbox>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={itemModal.onClose}>Batal</Button>
            <Button onClick={submitManualItem}>Tambah</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

function Row({ label, value, muted }) {
  return (
    <Flex justify="space-between">
      <Text color={muted ? 'slate.500' : 'slate.700'}>{label}</Text>
      <Text color={muted ? 'slate.600' : 'slate.900'} fontWeight={muted ? '400' : '600'}>{value}</Text>
    </Flex>
  )
}
