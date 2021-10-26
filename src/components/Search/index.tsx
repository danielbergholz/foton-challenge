import { SearchIcon } from '@chakra-ui/icons'
import { ComponentWithAs, Flex, FlexProps, Input } from '@chakra-ui/react'

const Search: ComponentWithAs<'div', FlexProps> = ({ ...rest }) => {
  return (
    <Flex
      bg="#fff"
      alignItems="center"
      paddingX="16px"
      borderRadius="10px"
      {...rest}
    >
      <SearchIcon color="gray.100" transform="scaleX(-1)" />
      <Input
        placeholder="Search Book"
        _placeholder={{ color: 'gray.300' }}
        bg="#fff"
        border="none"
      />
    </Flex>
  )
}

export default Search
