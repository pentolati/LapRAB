import { Box, HStack, VStack, Text, Icon, Avatar, Flex, Tooltip } from '@chakra-ui/react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { FiGrid, FiFileText, FiDatabase, FiUsers, FiLogOut } from 'react-icons/fi'
import { useStore } from '../store/useStore'

const NAV = [
  { key: 'dashboard', label: 'Dashboard', short: 'Home', icon: FiGrid },
  { key: 'sales', label: 'Sales / RAB', short: 'Sales', icon: FiFileText },
  { key: 'master', label: 'Master Data', short: 'Master', icon: FiDatabase },
  { key: 'clients', label: 'Klien', short: 'Klien', icon: FiUsers },
]

export default function AppLayout() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const user = useStore((s) => s.user)
  const logout = useStore((s) => s.logout)
  const isActive = (key) => pathname.startsWith(`/${key}`)

  return (
    <Flex direction={{ base: 'column', lg: 'row' }} h="100vh" overflow="hidden" bg="#f5f7f1">
      {/* ── Sidebar (desktop) ── */}
      <VStack
        display={{ base: 'none', lg: 'flex' }}
        w="236px" bg="white" py={6} px={3} spacing={8}
        align="stretch" flexShrink={0} justify="space-between" boxShadow="floatingSm"
      >
        <VStack spacing={8} align="stretch">
          <HStack px={2} spacing={2.5}>
            <Flex w="34px" h="34px" borderRadius="lg" bg="brand.700" align="center" justify="center" fontSize="md">🏟️</Flex>
            <Text fontSize="lg" fontWeight="700" color="slate.900" letterSpacing="-0.02em">LapRAB</Text>
          </HStack>
          <VStack spacing={1} align="stretch">
            <Text px={3} fontSize="10px" fontWeight="600" color="slate.400" textTransform="uppercase" letterSpacing="0.1em" mb={1}>Menu</Text>
            {NAV.map((item) => (
              <HStack key={item.key} px={3} py={2.5} borderRadius="lg" cursor="pointer" spacing={3}
                bg={isActive(item.key) ? 'brand.50' : 'transparent'}
                color={isActive(item.key) ? 'brand.700' : 'slate.500'}
                _hover={{ bg: isActive(item.key) ? 'brand.50' : 'slate.50', color: isActive(item.key) ? 'brand.700' : 'slate.700' }}
                transition="all .15s" onClick={() => navigate(`/${item.key}`)}>
                <Icon as={item.icon} boxSize={5} />
                <Text fontSize="sm" fontWeight={isActive(item.key) ? '600' : '500'}>{item.label}</Text>
              </HStack>
            ))}
          </VStack>
        </VStack>
        <HStack px={2} py={2.5} borderRadius="xl" bg="slate.50" justify="space-between">
          <HStack spacing={2.5} minW={0}>
            <Avatar size="sm" name={user?.name} bg={`${user?.color || 'brand'}.400`} color="white" />
            <VStack align="start" spacing={0} minW={0}>
              <Text fontSize="sm" fontWeight="600" color="slate.800" noOfLines={1}>{user?.name}</Text>
              <Text fontSize="xs" color="slate.400" noOfLines={1}>{user?.role}</Text>
            </VStack>
          </HStack>
          <Tooltip label="Keluar" hasArrow>
            <Box as="button" onClick={logout} color="slate.400" _hover={{ color: 'brand.600' }} p={1}><Icon as={FiLogOut} boxSize={4} /></Box>
          </Tooltip>
        </HStack>
      </VStack>

      {/* ── Top bar (mobile) ── */}
      <HStack display={{ base: 'flex', lg: 'none' }} h="56px" px={4} bg="white" boxShadow="floatingSm"
        justify="space-between" flexShrink={0} zIndex={10}>
        <HStack spacing={2}>
          <Flex w="30px" h="30px" borderRadius="lg" bg="brand.700" align="center" justify="center" fontSize="sm">🏟️</Flex>
          <Text fontSize="md" fontWeight="700" color="slate.900">LapRAB</Text>
        </HStack>
        <HStack spacing={3}>
          <Avatar size="sm" name={user?.name} bg={`${user?.color || 'brand'}.400`} color="white" />
          <Box as="button" onClick={logout} color="slate.400" p={1}><Icon as={FiLogOut} boxSize={5} /></Box>
        </HStack>
      </HStack>

      {/* ── Content ── */}
      <Box flex={1} overflow="auto" pb={{ base: '76px', lg: 0 }}>
        <Outlet />
      </Box>

      {/* ── Bottom nav (mobile) ── */}
      <HStack display={{ base: 'flex', lg: 'none' }} position="fixed" bottom={0} left={0} right={0}
        h="68px" bg="white" borderTop="1px solid" borderColor="slate.200" px={2} spacing={0} zIndex={20}
        boxShadow="0 -2px 12px -6px rgba(45,50,42,0.12)">
        {NAV.map((item) => (
          <VStack key={item.key} flex={1} spacing={0.5} py={2} cursor="pointer" borderRadius="lg"
            color={isActive(item.key) ? 'brand.600' : 'slate.400'} onClick={() => navigate(`/${item.key}`)}>
            <Icon as={item.icon} boxSize={5} />
            <Text fontSize="10px" fontWeight={isActive(item.key) ? '700' : '500'}>{item.short}</Text>
          </VStack>
        ))}
      </HStack>
    </Flex>
  )
}
