import { Flex, Skeleton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useSWR from 'swr'

import fetcher from '../../services/fetcher'
import { IItem } from '../../types'
import Book from './Book'

interface IResponse {
  items: IItem[]
}

const Discover = () => {
  const { data } = useSWR(
    '/volumes?q=machine+learning',
    (url: string) => fetcher<IResponse>(url),
    { revalidateOnFocus: false }
  )

  return (
    <Skeleton isLoaded={!!data}>
      <Flex
        overflowX="auto"
        overflowY="hidden"
        css={{
          gap: '10px',
          '&::-webkit-scrollbar': {
            width: '20px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#c5c5c5',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '6px solid transparent',
          },
        }}
      >
        {data?.items.map((item, index, self) => (
          <Link key={item.id} to={`/book/${item.id}`}>
            <Book
              ml={index === 0 ? '20px' : '0'}
              mr={index === self.length - 1 ? '20px' : '0'}
              index={index}
              volumeInfo={item.volumeInfo}
            />
          </Link>
        ))}
      </Flex>
    </Skeleton>
  )
}

export default Discover
