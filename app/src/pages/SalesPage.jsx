import { useMemo, useState } from 'react'
import {
  Box, Button, Heading, HStack, Text, VStack, Table, Thead, Tbody, Tr, Th, Td,
  Card, CardBody, Icon, Badge, useToast, Input, InputGroup, InputLeftElement, Avatar, Tooltip,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure,
  Flex, IconButton,
} from '@chakra-ui/react'
import { FiPlus, FiFileText, FiSearch, FiClock, FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useList, useMutation } from 'fauxbase-react'
import { fb } from '../fauxbase'
import { useStore } from '../store/useStore'
import { hitungTotal } from '../lib/calc'
import { rupiah, tanggalID, tanggalWaktuID } from '../lib/format'
import StatusSelect, { STATUS_COLOR } from '../components/StatusBadge'

const COLS = [
  { key: 'nomor', label: 'Nomor' },
  { key: 'clientName', label: 'Klien' },
  { key: 'jenisLapanganName', label: 'Jenis' },
  { key: 'salesName', label: 'Sales' },
  { key: 'tanggal', label: 'Tgl Submit' },
  { key: '_updatedTs', label: 'Update Terakhir' },
  { key: '_total', label: 'Nilai', numeric: true },
  { key: 'status', label: 'Status' },
]

export default function SalesPage() {
  const navigate = useNavigate()
  const toast = useToast()
  const user = useStore((s) => s.user)
  const { items: proposals, refetch } = useList(fb.proposal, { size: 300 })
  const { update } = useMutation(fb.proposal)

  const [q, setQ] = useState('')
  const [sortKey, setSortKey] = useState('_updatedTs')
  const [sortDir, setSortDir] = useState('desc')
  const histModal = useDisclosure()
  const [histProp, setHistProp] = useState(null)

  const rows = useMemo(() => {
    const base = (proposals || []).map((p) => {
      const last = (p.history || [])[(p.history || []).length - 1]
      return {
        ...p,
        _total: hitungTotal(p.items, p).grandTotal,
        _updatedTs: last?.ts || p.tanggal,
        _last: last,
      }
    })
    const term = q.trim().toLowerCase()
    const filtered = term
      ? base.filter((p) => [p.nomor, p.clientName, p.jenisLapanganName, p.salesName, p.status]
          .some((v) => (v || '').toLowerCase().includes(term)))
      : base
    const dir = sortDir === 'asc' ? 1 : -1
    return [...filtered].sort((a, b) => {
      let av = a[sortKey], bv = b[sortKey]
      if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * dir
      return String(av || '').localeCompare(String(bv || ''), 'id', { numeric: true }) * dir
    })
  }, [proposals, q, sortKey, sortDir])

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(key); setSortDir(key === '_total' || key === '_updatedTs' || key === 'tanggal' ? 'desc' : 'asc') }
  }

  const setStatus = async (p, status) => {
    if (p.status === status) return
    const entry = { ts: new Date().toISOString(), user: user?.name || '-', action: 'Ubah status', detail: `${p.status} → ${status}` }
    await update(p.id, { status, history: [...(p.history || []), entry] })
    refetch?.()
    toast({ title: `Status → ${status}`, description: `oleh ${user?.name}`, status: 'success', duration: 1800 })
  }

  const openHist = (p) => { setHistProp(p); histModal.onOpen() }

  return (
    <Box p={{ base: 4, md: 8 }} maxW="1280px" mx="auto">
      <HStack justify="space-between" align="start" mb={5} flexWrap="wrap" gap={3}>
        <VStack align="start" spacing={0}>
          <Heading size="lg">Sales / RAB</Heading>
          <Text color="slate.500" fontSize="sm">Daftar penawaran ke calon klien</Text>
        </VStack>
        <Button leftIcon={<FiPlus />} onClick={() => navigate('/sales/new')}>New Proposal</Button>
      </HStack>

      <Card overflow="hidden">
        <CardBody p={0}>
          <Flex p={3} px={4} justify="space-between" align="center" gap={3} flexWrap="wrap">
            <InputGroup size="sm" maxW="320px">
              <InputLeftElement pointerEvents="none"><Icon as={FiSearch} color="slate.400" /></InputLeftElement>
              <Input placeholder="Cari nomor, klien, jenis, sales…" value={q} onChange={(e) => setQ(e.target.value)} borderRadius="lg" />
            </InputGroup>
            <Text fontSize="xs" color="slate.400">{rows.length} proposal</Text>
          </Flex>

          <Box overflowX="auto">
            <Table size="sm">
              <Thead bg="slate.50">
                <Tr>
                  {COLS.map((c) => (
                    <Th key={c.key} isNumeric={c.numeric} cursor="pointer" userSelect="none"
                      onClick={() => toggleSort(c.key)} _hover={{ color: 'brand.600' }} whiteSpace="nowrap">
                      <HStack spacing={1} justify={c.numeric ? 'flex-end' : 'flex-start'}>
                        <Text>{c.label}</Text>
                        {sortKey === c.key && <Icon as={sortDir === 'asc' ? FiChevronUp : FiChevronDown} boxSize={3.5} color="brand.500" />}
                      </HStack>
                    </Th>
                  ))}
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {rows.length === 0 && (
                  <Tr><Td colSpan={9}><VStack py={10} spacing={2} color="slate.400">
                    <Icon as={FiFileText} boxSize={8} /><Text>Tidak ada proposal.</Text>
                  </VStack></Td></Tr>
                )}
                {rows.map((p) => (
                  <Tr key={p.id} _hover={{ bg: 'slate.50' }} cursor="pointer" onClick={() => navigate(`/sales/${p.id}`)}>
                    <Td fontWeight="600" color="brand.700" whiteSpace="nowrap">{p.nomor}</Td>
                    <Td>{p.clientName}</Td>
                    <Td><Badge bg="slate.100" color="slate.700">{p.jenisLapanganName}</Badge></Td>
                    <Td>
                      <HStack spacing={2}>
                        <Avatar size="2xs" name={p.salesName} bg="sage.400" color="white" />
                        <Text fontSize="sm">{p.salesName || '-'}</Text>
                      </HStack>
                    </Td>
                    <Td color="slate.500" whiteSpace="nowrap">{tanggalID(p.tanggal)}</Td>
                    <Td whiteSpace="nowrap">
                      <Tooltip label={p._last ? `${p._last.action}: ${p._last.detail} — oleh ${p._last.user}` : 'Belum ada perubahan'} hasArrow>
                        <Box>
                          <Text fontSize="sm" color="slate.600">{tanggalWaktuID(p._updatedTs)}</Text>
                          {p._last && <Text fontSize="11px" color="slate.400" noOfLines={1}>{p._last.action} • {p._last.user}</Text>}
                        </Box>
                      </Tooltip>
                    </Td>
                    <Td isNumeric fontWeight="600" whiteSpace="nowrap">{rupiah(p._total)}</Td>
                    <Td><StatusSelect value={p.status} onChange={(s) => setStatus(p, s)} /></Td>
                    <Td>
                      <Tooltip label="Riwayat perubahan" hasArrow>
                        <IconButton aria-label="riwayat" size="sm" variant="ghost" icon={<FiClock />}
                          onClick={(e) => { e.stopPropagation(); openHist(p) }} />
                      </Tooltip>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </CardBody>
      </Card>

      {/* Modal riwayat */}
      <Modal isOpen={histModal.isOpen} onClose={histModal.onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack><Icon as={FiClock} color="brand.500" /><Text>Riwayat — {histProp?.nomor}</Text></HStack>
            <Text fontSize="sm" fontWeight="400" color="slate.500">{histProp?.clientName}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack align="stretch" spacing={0}>
              {[...(histProp?.history || [])].reverse().map((h, i) => (
                <HStack key={i} align="start" spacing={3} py={3} borderBottomWidth={i < (histProp?.history?.length || 0) - 1 ? '1px' : 0} borderColor="slate.100">
                  <Avatar size="xs" name={h.user} bg="sage.400" color="white" mt={0.5} />
                  <Box flex={1}>
                    <HStack justify="space-between">
                      <Text fontSize="sm" fontWeight="600">{h.action}</Text>
                      <Text fontSize="xs" color="slate.400">{tanggalWaktuID(h.ts)}</Text>
                    </HStack>
                    <Text fontSize="sm" color="slate.600">{h.detail}</Text>
                    <Text fontSize="xs" color="slate.400">oleh {h.user}</Text>
                  </Box>
                </HStack>
              ))}
              {(!histProp?.history || histProp.history.length === 0) && (
                <Text color="slate.400" fontSize="sm" py={4}>Belum ada riwayat perubahan.</Text>
              )}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
