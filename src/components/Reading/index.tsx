import { Skeleton, Image, Box, Text, Flex } from '@chakra-ui/react'
import useSWR from 'swr'

import Background from '../../assets/reading-bg.png'
import Book from '../../assets/book.svg'
import fetcher from '../../services/fetcher'
import { IItem } from '../../types'
import randomIntFromInterval from '../../utils/randomInt'

interface IResponse {
  items: IItem[]
}

const Reading: React.FC = () => {
  const { data, isValidating } = useSWR(
    '/volumes?q=harry+potter',
    (url: string) => fetcher<IResponse>(url),
    { revalidateOnFocus: false }
  )

  const filteredItems = data?.items.filter(
    (item) =>
      !!item.volumeInfo.imageLinks &&
      item.volumeInfo.title.toLowerCase().includes('harry')
  )
  const item =
    filteredItems?.[randomIntFromInterval(0, filteredItems?.length - 1)]

  return (
    <Skeleton isLoaded={!isValidating}>
      <Box
        bgImage={Background}
        paddingLeft="20px"
        marginTop={isValidating ? '' : '-30px'}
        bgRepeat="no-repeat"
      >
        <Flex height="190px" alignItems="center">
          <Image
            src={item?.volumeInfo?.imageLinks?.thumbnail}
            width="88px"
            height="130px"
            left="20px"
            filter="drop-shadow(5px 7px 32px rgba(140, 170, 58, 0.193701))"
          />
          <Box ml="10px" mt="-10px">
            <Text
              fontFamily="Playfair Display"
              color="gray.700"
              fontWeight="700"
              fontSize="20px"
              width="215px"
              lineHeight="26px"
              letterSpacing="1px"
            >
              {`${item?.volumeInfo.title.split(' ')[0]} ${item?.volumeInfo.title
                .split(' ')[1]
                .replace(':', '')}`}
            </Text>
            <Text color="gray.200" fontSize="11px">
              by {item?.volumeInfo?.authors?.[0]}
            </Text>
            <Flex alignItems="center" mt="20px">
              <Image src={Book} />
              <Text fontSize="11px" lineHeight="11px">
                Chapter{' '}
                <Text as="span" color="pink" fontWeight="700">
                  {randomIntFromInterval(1, 5)}
                </Text>{' '}
                From {randomIntFromInterval(5, 12)}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Skeleton>
  )
}

export default Reading
