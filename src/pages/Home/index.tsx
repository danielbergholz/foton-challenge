import { Box, Text } from '@chakra-ui/react'
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
          <Box display="inline" ml="11px">
            &#128075;
          </Box>
        </Text>

        <Text
          lineHeight="21px"
          fontSize="18px"
          letterSpacing="0.5px"
          color="gray.700"
          mb="15px"
        >
          Discover new book
        </Text>
      </Box>
    </>
  )
}

export default Home
