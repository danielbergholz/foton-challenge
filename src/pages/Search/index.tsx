/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Spinner, Center, Flex, Text, Image, Grid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavBar from '../../components/NavBar'

import SearchInput from '../../components/Search'
import api from '../../services/api'
import { IItem } from '../../types'

interface IResponse {
  items: IItem[]
}

interface IState {
  search: string
}

const Search = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const [books, setBooks] = useState<IItem[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const { state } = useLocation<IState>()

  const searchUsers = async () => {
    if (!hasMounted) return

    if (search === '') {
      setBooks([])
      return
    }

    setLoading(true)
    const { data } = await api.get<IResponse>(`/volumes?q=${search}`)
    setLoading(false)

    setBooks(data.items)
  }

  useEffect(() => {
    const timeout = setTimeout(searchUsers, 1000)

    return () => clearTimeout(timeout)
  }, [search])

  useEffect(() => {
    state?.search && setSearch(state.search)
  }, [state])

  useEffect(() => {
    document.getElementById('search-input')?.focus()
    setHasMounted(true)
  }, [])

  return (
    <>
      <Box marginX="20px" mb="120px">
        <SearchInput mt="50px" value={search} setValue={setSearch} />
        {loading ? (
          <Center height="400px">
            <Spinner
              thickness="5px"
              speed="0.65s"
              emptyColor="#FEFAF6"
              color="pink"
              size="xl"
            />
          </Center>
        ) : (
          <Grid
            mt="42px"
            gridTemplateColumns={{
              sm: 'repeat(3, 1fr)',
              base: 'repeat(2, 1fr)',
            }}
            justifyItems="center"
            gridGap="20px"
          >
            {books.map((book) => (
              <Link
                key={book.id}
                to={{ pathname: `/book/${book.id}`, state: { search } }}
              >
                <Box width="100px">
                  {book.volumeInfo.imageLinks ? (
                    <Image
                      src={
                        book.volumeInfo.imageLinks.thumbnail ||
                        book.volumeInfo.imageLinks.smallThumbnail
                      }
                      width="100px"
                      height="150px"
                      objectFit="cover"
                      borderRadius="4px"
                    />
                  ) : (
                    <Center
                      width="100px"
                      height="150px"
                      bg="#fff"
                      borderRadius="4px"
                    >
                      <Text>No image</Text>
                    </Center>
                  )}
                  <Text fontWeight="700" fontSize="12px" mt="10px">
                    {book.volumeInfo.title.slice(0, 25) +
                      (book.volumeInfo.title.length > 25 ? '...' : '')}
                  </Text>
                  <Text fontWeight="700" fontSize="10px" mt="3px">
                    by {book.volumeInfo.authors?.[0]}
                  </Text>
                </Box>
              </Link>
            ))}
          </Grid>
        )}
      </Box>

      <NavBar />
    </>
  )
}

export default Search
