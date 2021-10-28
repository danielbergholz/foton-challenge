import { SearchIcon } from '@chakra-ui/icons'
import { ComponentWithAs, Flex, FlexProps, Input } from '@chakra-ui/react'

interface IProps extends FlexProps {
  value?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
}

const Search: ComponentWithAs<'div', IProps> = ({
  value,
  setValue,
  ...rest
}) => {
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
        id="search-input"
        placeholder="Search Book"
        _placeholder={{ color: 'gray.300' }}
        bg="#fff"
        border="none"
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
      />
    </Flex>
  )
}

export default Search
