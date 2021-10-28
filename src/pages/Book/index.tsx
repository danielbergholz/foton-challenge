import { Box, Image, Text, Icon, Skeleton } from '@chakra-ui/react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory, useLocation, useParams } from 'react-router-dom'

import Background from '../../assets/book-bg.png'
import { IItem } from '../../types'
import useSWR from 'swr'
import fetcher from '../../services/fetcher'
import OptionsBar from '../../components/OptionsBar'

interface IParams {
  id: string
}

interface IState {
  search: string
}

const Book = () => {
  const history = useHistory()
  const { id } = useParams<IParams>()
  const { state } = useLocation<IState>()

  const { data } = useSWR(
    `/volumes/${id}`,
    (url: string) => fetcher<IItem>(url),
    { revalidateOnFocus: false }
  )

  return (
    <Box position="relative">
      <Image src={Background} width="100%" position="absolute" zIndex={-1} />

      <Box paddingTop="55px" marginX="20px" mb="40px">
        <Icon
          as={FiArrowLeft}
          width="22px"
          height="22px"
          ml="10px"
          cursor="pointer"
          onClick={() =>
            state
              ? history.push('/search', { search: state.search })
              : history.goBack()
          }
        />

        <Skeleton isLoaded={!!data} width="153px" margin="0 auto">
          <Image
            src={data?.volumeInfo.imageLinks?.thumbnail}
            width="153px"
            height="229px"
            mt="15px"
            objectFit="cover"
          />
        </Skeleton>

        <Skeleton isLoaded={!!data}>
          <Text mt="36px" fontSize="24px" lineHeight="28px" color="gray.700">
            {data?.volumeInfo.title || 'Carregando título'}
          </Text>
        </Skeleton>

        <Skeleton isLoaded={!!data}>
          <Text mt="7px" fontSize="16px" lineHeight="18px" color="pink">
            {data?.volumeInfo.authors?.join(', ') || 'Carregando autores'}
          </Text>
        </Skeleton>

        <Skeleton isLoaded={!!data}>
          <Text
            mt="10px"
            fontSize="14px"
            lineHeight="25px"
            color="#31313199"
            dangerouslySetInnerHTML={{
              __html: data?.volumeInfo?.description || 'Carregando descrição',
            }}
          />
        </Skeleton>
      </Box>
      <OptionsBar />
    </Box>
  )
}

export default Book
