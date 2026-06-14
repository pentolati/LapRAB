import { useState } from 'react'
import {
  Box, Heading, Text, VStack, HStack, Card, CardBody, Table, Thead, Tbody, Tr, Th, Td,
  Button, IconButton, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,
  ModalFooter, useDisclosure, FormControl, FormLabel, Input, Icon,
} from '@chakra-ui/react'
import { FiPlus, FiTrash2, FiUsers } from 'react-icons/fi'
import { useList, useMutation } from 'fauxbase-react'
import { fb } from '../fauxbase'

export default function ClientsPage() {
  const toast = useToast()
  const { items, refetch } = useList(fb.client, { size: 200 })
  const { create, remove } = useMutation(fb.client)
  const modal = useDisclosure()
  const [c, setC] = useState({ name: '', company: '', phone: '', email: '', address: '' })

  const simpan = async () => {
    if (!c.name.trim()) return toast({ title: 'Nama wajib diisi', status: 'warning' })
    await create(c); refetch?.()
    setC({ name: '', company: '', phone: '', email: '', address: '' })
    modal.onClose(); toast({ title: 'Klien ditambahkan', status: 'success' })
  }

  return (
    <Box p={{ base: 4, md: 8 }} maxW="1000px" mx="auto">
      <HStack justify="space-between" mb={5}>
        <VStack align="start" spacing={0}>
          <Heading size="lg">Klien</Heading>
          <Text color="slate.500" fontSize="sm">Daftar calon &amp; existing customer</Text>
        </VStack>
        <Button leftIcon={<FiPlus />} onClick={modal.onOpen}>Add New Client</Button>
      </HStack>

      <Card overflow="hidden"><CardBody p={0}>
        <Table size="sm">
          <Thead bg="slate.50"><Tr><Th>Nama</Th><Th>Perusahaan</Th><Th>Telepon</Th><Th>Alamat</Th><Th></Th></Tr></Thead>
          <Tbody>
            {(items || []).length === 0 && (
              <Tr><Td colSpan={5}><VStack py={10} color="slate.400"><Icon as={FiUsers} boxSize={8} /><Text>Belum ada klien.</Text></VStack></Td></Tr>
            )}
            {(items || []).map((cl) => (
              <Tr key={cl.id}>
                <Td fontWeight="600">{cl.name}</Td>
                <Td color="slate.600">{cl.company || '-'}</Td>
                <Td color="slate.600">{cl.phone || '-'}</Td>
                <Td color="slate.600">{cl.address || '-'}</Td>
                <Td><IconButton aria-label="del" size="xs" variant="ghost" colorScheme="red" icon={<FiTrash2 />} onClick={async () => { await remove(cl.id); refetch?.() }} /></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody></Card>

      <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Klien Baru</ModalHeader>
          <ModalBody>
            <VStack spacing={3}>
              {[['Nama / PT', 'name'], ['Perusahaan', 'company'], ['Telepon', 'phone'], ['Email', 'email'], ['Alamat', 'address']].map(([lbl, key]) => (
                <FormControl key={key} isRequired={key === 'name'}>
                  <FormLabel fontSize="sm">{lbl}</FormLabel>
                  <Input value={c[key]} onChange={(e) => setC((x) => ({ ...x, [key]: e.target.value }))} />
                </FormControl>
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={modal.onClose}>Batal</Button>
            <Button onClick={simpan}>Simpan</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
