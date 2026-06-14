import {
  Box, Button, Heading, HStack, VStack, Text, Card, CardBody, Table, Thead, Tbody, Tr, Th, Td,
  IconButton, Divider, Flex, Badge, SimpleGrid, Tag, useToast,
} from '@chakra-ui/react'
import { FiArrowLeft, FiEdit2, FiDownload, FiInfo } from 'react-icons/fi'
import { Fragment, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGet, useList, useMutation } from 'fauxbase-react'
import { fb } from '../fauxbase'
import { useStore } from '../store/useStore'
import { hitungTotal, groupByKelompok } from '../lib/calc'
import { rupiah, tanggalID } from '../lib/format'
import StatusSelect, { STATUS_COLOR } from '../components/StatusBadge'
import PrintProposal from '../components/PrintProposal'

export default function ProposalDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const toast = useToast()
  const user = useStore((s) => s.user)
  const { data: p, refetch } = useGet(fb.proposal, id)
  const { items: clients } = useList(fb.client, { size: 200 })
  const { update } = useMutation(fb.proposal)
  const [printMode, setPrintMode] = useState('client')

  if (!p) return <Box p={8}><Text color="slate.500">Memuat…</Text></Box>

  const client = (clients || []).find((c) => c.id === p.clientId)
  const t = hitungTotal(p.items, p)
  const groups = groupByKelompok(p.items) // harga MODAL (internal)

  const setStatus = async (status) => {
    if (p.status === status) return
    const entry = { ts: new Date().toISOString(), user: user?.name || '-', action: 'Ubah status', detail: `${p.status} → ${status}` }
    await update(id, { status, history: [...(p.history || []), entry] })
    refetch?.()
    toast({ title: `Status → ${status}`, description: `oleh ${user?.name}`, status: 'success', duration: 1800 })
  }

  const handleDownload = (mode) => {
    setPrintMode(mode)
    const prev = document.title
    const slug = `${(p.nomor || 'RAB').replace(/[\\/]/g, '-')}_${(p.clientName || '').replace(/\s+/g, '-')}`
    setTimeout(() => {
      document.title = mode === 'internal' ? `RAB-Internal_${slug}` : `Penawaran_${slug}`
      window.print()
      setTimeout(() => { document.title = prev }, 800)
    }, 80)
  }

  return (
    <Box p={{ base: 4, md: 8 }} maxW="1100px" mx="auto">
      <HStack justify="space-between" mb={5} flexWrap="wrap" gap={3}>
        <HStack spacing={3}>
          <IconButton aria-label="back" icon={<FiArrowLeft />} variant="ghost" onClick={() => navigate('/sales')} />
          <VStack align="start" spacing={0}>
            <Heading size="lg">{p.nomor}</Heading>
            <Text color="slate.500" fontSize="sm">{p.clientName} • Lapangan {p.jenisLapanganName}</Text>
          </VStack>
        </HStack>
        <HStack spacing={2}>
          <StatusSelect value={p.status} onChange={setStatus} />
          <Button variant="outline" leftIcon={<FiEdit2 />} onClick={() => navigate(`/sales/${id}/edit`)}>Edit</Button>
          <Button variant="outline" leftIcon={<FiDownload />} onClick={() => handleDownload('internal')}>PDF Internal</Button>
          <Button leftIcon={<FiDownload />} onClick={() => handleDownload('client')}>PDF Klien</Button>
        </HStack>
      </HStack>

      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={5}>
        <InfoCard label="Klien" value={p.clientName} />
        <InfoCard label="Tanggal" value={tanggalID(p.tanggal)} />
        <InfoCard label="Dimensi" value={`${p.panjang} × ${p.lebar} m`} />
        <InfoCard label="Luas" value={`${(p.panjang * p.lebar).toLocaleString('id-ID')} m²`} />
      </SimpleGrid>

      <HStack mb={3} color="slate.500" fontSize="sm">
        <FiInfo />
        <Text>Tampilan internal — pakai harga modal. Angka di PDF klien sudah termasuk buffer + margin.</Text>
      </HStack>

      <Card mb={4}>
        <CardBody p={0} overflowX="auto">
          <Table size="sm" minW="560px">
            <Thead bg="slate.50">
              <Tr>
                <Th>Item Pekerjaan</Th>
                <Th isNumeric>Volume</Th>
                <Th>Sat.</Th>
                <Th isNumeric>Harga Modal</Th>
                <Th isNumeric>Subtotal</Th>
              </Tr>
            </Thead>
            <Tbody>
              {groups.map((g, gi) => (
                <Fragment key={gi}>
                  <Tr bg="brand.50">
                    <Td colSpan={4} fontWeight="700" color="brand.700">{g.kelompok}</Td>
                    <Td isNumeric fontWeight="700" color="brand.700">{rupiah(g.subtotal)}</Td>
                  </Tr>
                  {g.items.map((it, i) => (
                    <Tr key={i}>
                      <Td pl={6}>{it.nama}</Td>
                      <Td isNumeric>{Number(it.volume).toLocaleString('id-ID')}</Td>
                      <Td>{it.satuan}</Td>
                      <Td isNumeric>{rupiah(it.hargaSatuan)}</Td>
                      <Td isNumeric>{rupiah((it.volume || 0) * (it.hargaSatuan || 0))}</Td>
                    </Tr>
                  ))}
                </Fragment>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>

      <Flex justify="flex-end">
        <Card w={{ base: 'full', md: '380px' }} bg="sage.50">
          <CardBody>
            <VStack align="stretch" spacing={2} fontSize="sm">
              <Row label="Subtotal modal" value={rupiah(t.base)} />
              <Row label={`Buffer (${p.bufferPct}%)`} value={rupiah(t.buffer)} muted />
              <Row label={`Margin (${p.marginPct}%)`} value={rupiah(t.margin)} muted />
              {p.ppnPct > 0 && <Row label={`PPN (${p.ppnPct}%)`} value={rupiah(t.ppn)} muted />}
              <Divider borderColor="sage.200" />
              <Flex justify="space-between" align="center">
                <Text fontWeight="600" color="slate.800">Nilai Penawaran</Text>
                <Text fontSize="xl" fontWeight="700" color="brand.700">{rupiah(t.grandTotal)}</Text>
              </Flex>
              <Tag size="sm" colorScheme="green" alignSelf="start">Profit kotor {rupiah(t.buffer + t.margin)}</Tag>
            </VStack>
          </CardBody>
        </Card>
      </Flex>

      {p.catatan && (
        <Card mt={4}><CardBody>
          <Text fontSize="xs" color="slate.500" mb={1}>Catatan internal</Text>
          <Text fontSize="sm">{p.catatan}</Text>
        </CardBody></Card>
      )}

      {/* Dokumen cetak (tersembunyi di layar, muncul saat print). Mode: klien (markup) / internal (modal) */}
      <PrintProposal proposal={p} client={client} mode={printMode} />
    </Box>
  )
}

function InfoCard({ label, value }) {
  return (
    <Card><CardBody py={3} px={4}>
      <Text fontSize="xs" color="slate.500">{label}</Text>
      <Text fontWeight="600" color="slate.800" noOfLines={1}>{value}</Text>
    </CardBody></Card>
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
