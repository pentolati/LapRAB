import { Fragment } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { hitungTotal, itemsForClient, groupByKelompok } from '../lib/calc'
import { rupiah, tanggalID } from '../lib/format'

// Dokumen cetak. mode 'client' = harga sudah markup (buffer+margin dilebur).
// mode 'internal' = harga modal asli + breakdown buffer/margin/profit (buat owner).
const SAGE = '#577d3a'
const SAGE_SOFT = '#f3f7ee'
const LINE = '#e1e5da'
const INK = '#2d322a'
const MUTE = '#6f7866'

export default function PrintProposal({ proposal, client, mode = 'client' }) {
  if (!proposal) return null
  const isInternal = mode === 'internal'
  const t = hitungTotal(proposal.items, proposal)
  const srcItems = isInternal ? (proposal.items || []) : itemsForClient(proposal.items, t.markup)
  const groups = groupByKelompok(srcItems)
  const subItem = (it) => Math.round((Number(it.volume) || 0) * (Number(it.hargaSatuan) || 0))
  const grand = (srcItems || []).reduce((s, it) => s + subItem(it), 0)
  const ppn = grand * (Number(proposal.ppnPct) || 0) / 100

  const Cell = (props) => <Box as="td" px={2.5} py="7px" fontSize="11px" color={INK} {...props} />
  const Num = (props) => <Cell textAlign="right" whiteSpace="nowrap" {...props} />

  return (
    <Box id="print-root" bg="white" color={INK} px={10} py={9} fontFamily="'Inter', sans-serif">
      {/* Header */}
      <Flex justify="space-between" align="flex-start" pb={4}>
        <Box>
          <Flex align="center" gap={2}>
            <Box fontSize="20px">🏟️</Box>
            <Text fontSize="22px" fontWeight="800" letterSpacing="-0.02em" color={INK}>LapRAB</Text>
          </Flex>
          <Text fontSize="11px" color={MUTE} mt={0.5}>Spesialis Konstruksi Lapangan Olahraga</Text>
        </Box>
        <Box textAlign="right">
          <Text fontSize="13px" fontWeight="700" letterSpacing="0.12em" color={isInternal ? '#b08a3c' : SAGE}>
            {isInternal ? 'RAB — HARGA MODAL (INTERNAL)' : 'PENAWARAN HARGA'}
          </Text>
          <Text fontSize="11px" color={MUTE} mt={1}>No. {proposal.nomor || '-'}</Text>
          <Text fontSize="11px" color={MUTE}>{tanggalID(proposal.tanggal)}</Text>
        </Box>
      </Flex>

      {isInternal && (
        <Box bg="#fbf3e0" border="1px solid #ecd59c" borderRadius="8px" px={3} py={1.5} mb={3}>
          <Text fontSize="10px" color="#8c6c2e" fontWeight="600">⚠ DOKUMEN INTERNAL — harga modal & margin. JANGAN dikirim ke klien.</Text>
        </Box>
      )}

      <Box h="2px" bg={isInternal ? '#cda447' : SAGE} borderRadius="full" />

      {/* Kepada + Proyek */}
      <Flex justify="space-between" gap={8} mt={5} mb={6}>
        <Box flex={1}>
          <Text fontSize="9px" letterSpacing="0.12em" textTransform="uppercase" color={MUTE} mb={1}>Kepada Yth.</Text>
          <Text fontSize="14px" fontWeight="700">{proposal.clientName}</Text>
          {client?.company && client.company !== proposal.clientName && <Text fontSize="11px" color={MUTE}>{client.company}</Text>}
          {client?.address && <Text fontSize="11px" color={MUTE}>{client.address}</Text>}
          {client?.phone && <Text fontSize="11px" color={MUTE}>{client.phone}</Text>}
        </Box>
        <Box flex={1} bg={SAGE_SOFT} borderRadius="10px" px={4} py={3}>
          <Text fontSize="9px" letterSpacing="0.12em" textTransform="uppercase" color={SAGE} mb={1}>Detail Proyek</Text>
          <Text fontSize="14px" fontWeight="700">Lapangan {proposal.jenisLapanganName}</Text>
          <Flex gap={5} mt={1} flexWrap="wrap">
            <Text fontSize="11px" color={MUTE}>Dimensi: <b style={{ color: INK }}>{proposal.panjang} × {proposal.lebar} m</b></Text>
            <Text fontSize="11px" color={MUTE}>Luas: <b style={{ color: INK }}>{(proposal.panjang * proposal.lebar).toLocaleString('id-ID')} m²</b></Text>
          </Flex>
          {proposal.zonaName && <Text fontSize="11px" color={MUTE}>Zona: <b style={{ color: INK }}>{proposal.zonaName}</b></Text>}
        </Box>
      </Flex>

      {/* Tabel */}
      <Box as="table" w="full" sx={{ borderCollapse: 'collapse' }}>
        <Box as="thead">
          <Box as="tr" borderBottom={`1.5px solid ${INK}`}>
            {['No', 'Uraian Pekerjaan', 'Vol', 'Sat', isInternal ? 'Harga Modal' : 'Harga Satuan', 'Jumlah'].map((h, i) => (
              <Box as="th" key={i} textAlign={i >= 2 && i !== 3 ? 'right' : 'left'} px={2.5} py="6px"
                fontSize="9px" letterSpacing="0.06em" textTransform="uppercase" color={MUTE}
                w={i === 0 ? '34px' : i === 2 ? '60px' : i === 3 ? '48px' : i >= 4 ? '110px' : undefined}>{h}</Box>
            ))}
          </Box>
        </Box>
        <Box as="tbody">
          {groups.map((g, gi) => {
            const sub = g.items.reduce((s, it) => s + subItem(it), 0)
            return (
              <Fragment key={gi}>
                <Box as="tr" bg={SAGE_SOFT}>
                  <Cell fontWeight="700" color={SAGE}>{String.fromCharCode(65 + gi)}</Cell>
                  <Cell fontWeight="700" color={SAGE} colSpan={4} textTransform="uppercase" fontSize="10px" letterSpacing="0.03em">{g.kelompok}</Cell>
                  <Num fontWeight="700" color={SAGE}>{rupiah(sub)}</Num>
                </Box>
                {g.items.map((it, i) => (
                  <Box as="tr" key={i} borderBottom={`1px solid ${LINE}`}>
                    <Cell color={MUTE}>{i + 1}</Cell>
                    <Cell>{it.nama}</Cell>
                    <Num>{Number(it.volume).toLocaleString('id-ID')}</Num>
                    <Cell color={MUTE}>{it.satuan}</Cell>
                    <Num color={MUTE}>{rupiah(it.hargaSatuan)}</Num>
                    <Num>{rupiah(subItem(it))}</Num>
                  </Box>
                ))}
              </Fragment>
            )
          })}
        </Box>
      </Box>

      {/* Total */}
      <Flex justify="flex-end" mt={5}>
        <Box w="300px">
          {isInternal ? (
            <>
              <TotalRow label="Subtotal modal" value={rupiah(grand)} />
              <TotalRow label={`Buffer (${proposal.bufferPct || 0}%)`} value={rupiah(t.buffer)} muted />
              <TotalRow label={`Margin (${proposal.marginPct || 0}%)`} value={rupiah(t.margin)} muted />
              {proposal.ppnPct > 0 && <TotalRow label={`PPN (${proposal.ppnPct}%)`} value={rupiah(t.ppn)} muted />}
              <Flex justify="space-between" align="center" mt={2} bg="#fbf3e0" borderRadius="10px" px={4} py={3}>
                <Text fontSize="12px" fontWeight="700" color="#8c6c2e">NILAI PENAWARAN (ke klien)</Text>
                <Text fontSize="15px" fontWeight="800" color="#8c6c2e">{rupiah(t.grandTotal)}</Text>
              </Flex>
              <Text fontSize="9px" color={MUTE} mt={1.5}>Profit kotor (buffer + margin): <b>{rupiah(t.buffer + t.margin)}</b></Text>
            </>
          ) : (
            <>
              {proposal.ppnPct > 0 && (
                <>
                  <TotalRow label="Subtotal" value={rupiah(grand)} />
                  <Flex justify="space-between" py={1.5} fontSize="12px" borderBottom={`1px solid ${LINE}`}>
                    <Text color={MUTE}>PPN {proposal.ppnPct}%</Text>
                    <Text fontWeight="600">{rupiah(ppn)}</Text>
                  </Flex>
                </>
              )}
              <Flex justify="space-between" align="center" mt={2} bg={SAGE} color="white" borderRadius="10px" px={4} py={3}>
                <Text fontSize="13px" fontWeight="700">TOTAL</Text>
                <Text fontSize="16px" fontWeight="800">{rupiah(grand + ppn)}</Text>
              </Flex>
            </>
          )}
        </Box>
      </Flex>

      {/* Footer */}
      {!isInternal && (
        <Flex justify="space-between" align="flex-end" mt={12} gap={8}>
          <Box fontSize="9.5px" color={MUTE} maxW="320px" lineHeight="1.7">
            <Text fontWeight="600" color={INK} mb={1}>Syarat &amp; Ketentuan</Text>
            <Text>• Harga penawaran, dapat berubah sesuai kondisi lapangan &amp; ketersediaan material.</Text>
            <Text>• Penawaran berlaku 30 hari sejak tanggal diterbitkan.</Text>
            <Text>• Pembayaran &amp; termin sesuai kesepakatan kontrak.</Text>
          </Box>
          <Box textAlign="center" fontSize="11px">
            <Text color={MUTE}>Hormat kami,</Text>
            <Box h="46px" />
            <Text fontWeight="700" borderTop={`1px solid ${LINE}`} pt={1.5}>{proposal.salesName || 'Sales'}</Text>
            <Text color={MUTE} fontSize="10px">LapRAB</Text>
          </Box>
        </Flex>
      )}
    </Box>
  )
}

function TotalRow({ label, value, muted }) {
  return (
    <Flex justify="space-between" py={1.5} fontSize="12px">
      <Text color={MUTE}>{label}</Text>
      <Text fontWeight={muted ? '500' : '600'} color={muted ? MUTE : INK}>{value}</Text>
    </Flex>
  )
}
