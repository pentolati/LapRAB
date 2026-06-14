import {
  Box, Heading, Text, VStack, HStack, SimpleGrid, Card, CardBody, Button, Icon, Flex,
  Progress, Badge, Divider, Table, Thead, Tbody, Tr, Th, Td, Tooltip,
} from '@chakra-ui/react'
import {
  FiPlus, FiFileText, FiTrendingUp, FiCheckCircle, FiAward, FiBarChart2, FiArrowRight, FiUser,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useList } from 'fauxbase-react'
import { fb } from '../fauxbase'
import { useStore } from '../store/useStore'
import { hitungTotal } from '../lib/calc'
import { rupiah, rupiahShort, tanggalID } from '../lib/format'
import { STATUS_COLOR } from '../components/StatusBadge'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
const monthLabel = (ym) => { const m = +ym.split('-')[1]; return MONTHS[m - 1] || ym }

export default function DashboardPage() {
  const navigate = useNavigate()
  const user = useStore((s) => s.user)
  const { items: proposals } = useList(fb.proposal, { size: 300, sort: { field: 'tanggal', direction: 'desc' } })

  const list = (proposals || []).map((p) => ({ ...p, _total: hitungTotal(p.items, p).grandTotal }))
  const byStatus = (s) => list.filter((p) => p.status === s)
  const prospek = byStatus('Prospek'), deal = byStatus('Deal'), rejected = byStatus('Rejected')
  const pipelineValue = prospek.reduce((s, p) => s + p._total, 0)
  const dealValue = deal.reduce((s, p) => s + p._total, 0)
  const totalValue = list.reduce((s, p) => s + p._total, 0)
  const avgValue = list.length ? totalValue / list.length : 0
  const closed = deal.length + rejected.length
  const winRate = closed ? Math.round((deal.length / closed) * 100) : 0

  // trend bulanan (nilai per bulan)
  const monthMap = {}
  list.forEach((p) => { const k = (p.tanggal || '').slice(0, 7); if (!k) return; monthMap[k] = (monthMap[k] || 0) + p._total })
  const months = Object.keys(monthMap).sort().slice(-6)
  const maxMonth = Math.max(1, ...months.map((m) => monthMap[m]))

  // per jenis & per klien
  const agg = (key) => {
    const m = {}; list.forEach((p) => { const k = p[key] || '—'; m[k] = m[k] || { count: 0, value: 0 }; m[k].count++; m[k].value += p._total })
    return Object.entries(m).map(([name, v]) => ({ name, ...v })).sort((a, b) => b.value - a.value)
  }
  const byJenis = agg('jenisLapanganName')
  const byClient = agg('clientName').slice(0, 5)
  const maxJenis = Math.max(1, ...byJenis.map((r) => r.value))
  const maxClient = Math.max(1, ...byClient.map((r) => r.value))

  const kpis = [
    { label: 'Total Proposal', value: list.length, icon: FiFileText, color: 'sage', sub: `${prospek.length} prospek aktif` },
    { label: 'Nilai Pipeline', value: rupiahShort(pipelineValue), icon: FiTrendingUp, color: 'gold', sub: 'penawaran prospek' },
    { label: 'Nilai Deal', value: rupiahShort(dealValue), icon: FiCheckCircle, color: 'sky', sub: `${deal.length} proyek menang` },
    { label: 'Win Rate', value: `${winRate}%`, icon: FiAward, color: 'rose', sub: `${closed} proposal selesai` },
    { label: 'Rata-rata Nilai', value: rupiahShort(avgValue), icon: FiBarChart2, color: 'gold', sub: 'per proposal' },
  ]

  const statusBars = [
    { label: 'Prospek', count: prospek.length, value: pipelineValue, color: 'gold' },
    { label: 'Deal', count: deal.length, value: dealValue, color: 'sage' },
    { label: 'Rejected', count: rejected.length, value: rejected.reduce((s, p) => s + p._total, 0), color: 'red' },
  ]
  const maxStatus = Math.max(1, ...statusBars.map((s) => s.count))

  return (
    <Box p={{ base: 4, md: 8 }} maxW="1240px" mx="auto">
      {/* Hero — terang & airy */}
      <Card mb={6} bg="sage.100" overflow="hidden">
        <CardBody py={8} px={{ base: 5, md: 9 }}>
          <Flex justify="space-between" align={{ base: 'start', md: 'center' }} flexWrap="wrap" gap={5}>
            <VStack align="start" spacing={2}>
              <Text color="sage.700" fontSize="xs" letterSpacing="0.15em" textTransform="uppercase" fontWeight="600">{tanggalID(new Date().toISOString())}</Text>
              <Heading size="lg" color="slate.900" fontWeight="700">Halo, {user?.name} 👋</Heading>
              <HStack spacing={5} pt={1} divider={<Box w="1px" h="28px" bg="sage.300" />}>
                <VStack align="start" spacing={0}>
                  <Text fontSize="xs" color="slate.500">Total nilai proyek</Text>
                  <Text fontSize="xl" fontWeight="700" color="sage.700">{rupiahShort(totalValue)}</Text>
                </VStack>
                <VStack align="start" spacing={0}>
                  <Text fontSize="xs" color="slate.500">Pipeline aktif</Text>
                  <Text fontSize="xl" fontWeight="700" color="sage.700">{rupiahShort(pipelineValue)}</Text>
                </VStack>
              </HStack>
            </VStack>
            <Button colorScheme="brand" size="lg" leftIcon={<FiPlus />}
              _hover={{ transform: 'translateY(-1px)' }} onClick={() => navigate('/sales/new')}>New Proposal</Button>
          </Flex>
        </CardBody>
      </Card>

      {/* KPI */}
      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={4} mb={6}>
        {kpis.map((k) => (
          <Card key={k.label} _hover={{ boxShadow: 'floatingLg', transform: 'translateY(-2px)' }} transition="all .18s">
            <CardBody py={5}>
              <Flex w="38px" h="38px" borderRadius="lg" bg={`${k.color}.50`} align="center" justify="center" mb={3}>
                <Icon as={k.icon} boxSize={5} color={`${k.color}.500`} />
              </Flex>
              <Text fontSize="2xl" fontWeight="700" color="slate.900" letterSpacing="-0.02em" lineHeight="1.1">{k.value}</Text>
              <Text fontSize="sm" color="slate.600" fontWeight="500" mt={1}>{k.label}</Text>
              <Text fontSize="xs" color="slate.400">{k.sub}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      {/* Trend + Pipeline */}
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4} mb={6}>
        <Card gridColumn={{ lg: 'span 2' }}>
          <CardBody>
            <Flex justify="space-between" align="center" mb={5}>
              <Heading size="sm">Nilai Penawaran per Bulan</Heading>
              <Text fontSize="xs" color="slate.400">6 bulan terakhir</Text>
            </Flex>
            <Flex align="end" gap={4} h="180px" px={2}>
              {months.map((m) => (
                <VStack key={m} flex={1} spacing={2} h="full" justify="end">
                  <Tooltip label={rupiah(monthMap[m])} hasArrow>
                    <Box w="full" maxW="48px" mx="auto" bg="brand.500" borderTopRadius="md"
                      h={`${Math.max(6, (monthMap[m] / maxMonth) * 140)}px`}
                      _hover={{ bg: 'brand.600' }} transition="all .15s" />
                  </Tooltip>
                  <Text fontSize="xs" color="slate.500" fontWeight="500">{monthLabel(m)}</Text>
                  <Text fontSize="10px" color="slate.400">{rupiahShort(monthMap[m])}</Text>
                </VStack>
              ))}
              {months.length === 0 && <Text color="slate.400" fontSize="sm">Belum ada data.</Text>}
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Heading size="sm" mb={5}>Pipeline per Status</Heading>
            <VStack align="stretch" spacing={4}>
              {statusBars.map((s) => (
                <Box key={s.label}>
                  <Flex justify="space-between" mb={1.5}>
                    <Badge colorScheme={s.color === 'gold' ? 'yellow' : s.color === 'sage' ? 'green' : 'red'}>{s.label}</Badge>
                    <Text fontSize="xs" color="slate.500">{s.count} • {rupiahShort(s.value)}</Text>
                  </Flex>
                  <Progress value={(s.count / maxStatus) * 100} size="sm" borderRadius="full" bg="slate.100"
                    colorScheme={s.color === 'gold' ? 'yellow' : s.color === 'sage' ? 'green' : 'red'} />
                </Box>
              ))}
            </VStack>
            <Divider my={4} />
            <Flex justify="space-between" align="center">
              <Text fontSize="sm" color="slate.500">Win rate</Text>
              <Text fontSize="lg" fontWeight="700" color="sage.600">{winRate}%</Text>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>

      {/* By jenis + Top klien */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4} mb={6}>
        <Card>
          <CardBody>
            <Heading size="sm" mb={4}>Nilai per Jenis Lapangan</Heading>
            <VStack align="stretch" spacing={3}>
              {byJenis.map((r) => (
                <Box key={r.name}>
                  <Flex justify="space-between" mb={1}>
                    <Text fontSize="sm" fontWeight="500" color="slate.700">{r.name}</Text>
                    <Text fontSize="xs" color="slate.500">{r.count} proyek • {rupiahShort(r.value)}</Text>
                  </Flex>
                  <Progress value={(r.value / maxJenis) * 100} colorScheme="brand" size="sm" borderRadius="full" bg="slate.100" />
                </Box>
              ))}
              {byJenis.length === 0 && <Text color="slate.400" fontSize="sm">Belum ada data.</Text>}
            </VStack>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Heading size="sm" mb={4}>Top Klien</Heading>
            <VStack align="stretch" spacing={3}>
              {byClient.map((r, i) => (
                <Box key={r.name}>
                  <Flex justify="space-between" mb={1}>
                    <HStack spacing={2}>
                      <Flex w="20px" h="20px" borderRadius="full" bg="brand.50" align="center" justify="center">
                        <Text fontSize="10px" fontWeight="700" color="brand.600">{i + 1}</Text>
                      </Flex>
                      <Text fontSize="sm" fontWeight="500" color="slate.700">{r.name}</Text>
                    </HStack>
                    <Text fontSize="xs" color="slate.500">{rupiahShort(r.value)}</Text>
                  </Flex>
                  <Progress value={(r.value / maxClient) * 100} colorScheme="gold" size="sm" borderRadius="full" bg="slate.100" />
                </Box>
              ))}
              {byClient.length === 0 && <Text color="slate.400" fontSize="sm">Belum ada data.</Text>}
            </VStack>
          </CardBody>
        </Card>
      </SimpleGrid>

      {/* Recent */}
      <Card overflow="hidden">
        <CardBody p={0}>
          <Flex justify="space-between" align="center" px={6} py={4}>
            <Heading size="sm">Proposal Terbaru</Heading>
            <Button size="sm" variant="ghost" rightIcon={<FiArrowRight />} onClick={() => navigate('/sales')}>Lihat semua</Button>
          </Flex>
          <Divider />
          <Table size="sm">
            <Thead bg="slate.50">
              <Tr><Th>Nomor</Th><Th>Klien</Th><Th>Jenis</Th><Th>Tanggal</Th><Th isNumeric>Nilai</Th><Th>Status</Th></Tr>
            </Thead>
            <Tbody>
              {list.slice(0, 6).map((p) => (
                <Tr key={p.id} _hover={{ bg: 'slate.50' }} cursor="pointer" onClick={() => navigate(`/sales/${p.id}`)}>
                  <Td fontWeight="600" color="brand.700">{p.nomor}</Td>
                  <Td>{p.clientName}</Td>
                  <Td><Badge bg="slate.100" color="slate.700">{p.jenisLapanganName}</Badge></Td>
                  <Td color="slate.500">{tanggalID(p.tanggal)}</Td>
                  <Td isNumeric fontWeight="600">{rupiah(p._total)}</Td>
                  <Td><Badge colorScheme={STATUS_COLOR[p.status] || 'gray'}>{p.status}</Badge></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  )
}
