import { Flex, Box, Icon, Text } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { memo } from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { FiBook } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'

const NavBar = () => {
  const { pathname } = useLocation()

  return (
    <Flex
      position="fixed"
      bg="#fff"
      bottom="0"
      width="100%"
      justifyContent="space-around"
      paddingY="10px"
    >
      <Link to="/">
        <Box textAlign="center">
          <Icon
            as={BiHomeAlt}
            color={pathname === '/' ? 'gray.700' : 'gray.150'}
          />
          <Text color={pathname === '/' ? 'gray.700' : 'gray.150'}>Home</Text>
        </Box>
      </Link>
      <Link to="/search">
        <Box textAlign="center">
          <Icon as={FiBook} color="gray.150" />
          <Text color="gray.150">Libraries</Text>
        </Box>
      </Link>
      <Link to="/">
        <Box textAlign="center">
          <Icon as={BsPerson} color="gray.150" />
          <Text color="gray.150">Profile</Text>
        </Box>
      </Link>
    </Flex>
  )
}

export default memo(NavBar)
