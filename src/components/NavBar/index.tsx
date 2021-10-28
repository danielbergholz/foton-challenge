import {
  Flex,
  Box,
  Icon,
  Text,
  useMediaQuery,
  ComponentWithAs,
  FlexProps,
} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { memo } from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { FiBook } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'

const NavBar: ComponentWithAs<'div', FlexProps> = ({ ...rest }) => {
  const [isMobile] = useMediaQuery('(max-width: 480px)')
  const { pathname } = useLocation()

  return (
    <Flex
      position="fixed"
      bg="#fff"
      bottom="0"
      width={isMobile ? '100%' : '480px'}
      justifyContent="space-around"
      paddingY="10px"
      {...rest}
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
          <Icon
            as={FiBook}
            color={pathname === '/search' ? 'gray.700' : 'gray.150'}
          />
          <Text color={pathname === '/search' ? 'gray.700' : 'gray.150'}>
            Libraries
          </Text>
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
