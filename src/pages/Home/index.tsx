import { Link } from 'react-router-dom'
import { AspectRatio, Box, Flex, Text } from '@chakra-ui/react'
import Discover from '../../components/Discover'
import Search from '../../components/Search'
import Reading from '../../components/Reading'

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

      <Box marginX="20px" mb="15px" mt="30px">
        <Flex justifyContent="space-between" alignItems="center">
          <Text
            lineHeight="21px"
            fontSize="18px"
            letterSpacing="0.5px"
            color="gray.700"
          >
            Currently Reading
          </Text>
          <Text color="blue" fontSize="14px" lineHeight="16px">
            <Link to="/search">All</Link>
          </Text>
        </Flex>
      </Box>

      <Reading />

      <Box marginX="20px" mb="25px" mt="10px">
        <Flex justifyContent="space-between" alignItems="center" mb="15px">
          <Text
            lineHeight="21px"
            fontSize="18px"
            letterSpacing="0.5px"
            color="gray.700"
          >
            Reviews of the Days
          </Text>
          <Text color="blue" fontSize="14px" lineHeight="16px">
            <a
              href="https://www.youtube.com/results?search_query=book+review"
              target="_blank"
              rel="noreferrer"
            >
              All Video
            </a>
          </Text>
        </Flex>

        {videos.map((video) => (
          <AspectRatio
            key={video}
            width="100%"
            ratio={16 / 9}
            border="1px solid #FEFAF6"
            borderRadius="10px"
            overflow="hidden"
            mb="10px"
          >
            <iframe
              src={video}
              title="Book review"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        ))}
      </Box>
    </>
  )
}

export default Home

const videos = [
  'https://www.youtube.com/embed/vBzBgewl4ac',
  'https://www.youtube.com/embed/gJ9NcxPUSPE',
  'https://www.youtube.com/embed/7R08MPXxiFQ',
]
