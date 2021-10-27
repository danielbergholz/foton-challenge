import { Link } from 'react-router-dom'
import { Box, Flex, Text } from '@chakra-ui/react'
import Discover from '../../components/Discover'
import Search from '../../components/Search'

const Home = () => {
  return (
    <>
      <Box marginX="20px">
        <Search mt="50px" />

        <Text fontWeight="500" fontSize="24px" lineHeight="28px" my="20px">
          Hi,{' '}
          <Text as="span" color="pink">
            Daniel Bergholz
          </Text>
          <Text as="span" ml="11px">
            &#128075;
          </Text>
        </Text>

        <Flex mb="15px" justifyContent="space-between" alignItems="center">
          <Text
            lineHeight="21px"
            fontSize="18px"
            letterSpacing="0.5px"
            color="gray.700"
          >
            Discover new book
          </Text>
          <Text color="blue" fontSize="14px" lineHeight="16px">
            <Link to="/search">More</Link>
          </Text>
        </Flex>
      </Box>
      <Discover />
    </>
  )
}

export default Home
