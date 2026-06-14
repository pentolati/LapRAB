import { Box, Center, Heading, HStack, Text, VStack, Avatar, Icon } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'
import { useList } from 'fauxbase-react'
import { fb } from '../fauxbase'
import { useStore } from '../store/useStore'

export default function LoginPage() {
  const login = useStore((s) => s.login)
  const { items: users } = useList(fb.user, { size: 50 })

  return (
    <Center minH="100vh" bg="#F4F2F6" px={4}>
      <VStack spacing={10} w="full" maxW="400px">
        <VStack spacing={3}>
          <Text fontSize="xs" letterSpacing="0.22em" textTransform="uppercase" color="neutral.400">
            Konstruksi Lapangan Olahraga
          </Text>
          <Heading fontFamily="display" fontWeight="600" fontSize="44px" color="mauve.700" lineHeight="1">
            LapRAB
          </Heading>
          <Text color="neutral.500" fontSize="sm" textAlign="center" fontStyle="italic">
            Generator RAB &amp; penawaran — siap kirim ke klien.
          </Text>
        </VStack>

        <VStack spacing={2.5} w="full">
          <Text color="neutral.400" fontSize="11px" alignSelf="start" textTransform="uppercase" letterSpacing="0.12em" mb={1}>
            Masuk sebagai
          </Text>
          {(users || []).map((u) => (
            <HStack
              key={u.id} w="full" bg="white" borderRadius="2xl" px={4} py={3.5}
              boxShadow="floatingSm" cursor="pointer" justify="space-between" role="group"
              transition="all .18s" _hover={{ boxShadow: 'floatingLg', transform: 'translateY(-2px)' }}
              onClick={() => login(u)}
            >
              <HStack spacing={3}>
                <Avatar size="sm" name={u.name} bg={`${u.color}.400`} color="white" />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="600" color="neutral.800">{u.name}</Text>
                  <Text fontSize="xs" color="neutral.500">{u.role}</Text>
                </VStack>
              </HStack>
              <Icon as={FiArrowRight} color="neutral.300" _groupHover={{ color: 'mauve.500', transform: 'translateX(3px)' }} transition="all .18s" />
            </HStack>
          ))}
        </VStack>

        <Text color="neutral.400" fontSize="xs">Klik nama — langsung masuk, tanpa password.</Text>
      </VStack>
    </Center>
  )
}
