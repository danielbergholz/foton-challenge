import { Flex, Text } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/react'
import { BiHeadphone } from 'react-icons/bi'
import { FiBookOpen, FiShare } from 'react-icons/fi'

const OptionsBar = () => {
  return (
    <Flex
      position="fixed"
      bg="#fff"
      bottom="30px"
      width="335px"
      justifyContent="space-between"
      borderRadius="2px"
      padding="20px 22px"
      left="50%"
      transform="translate(-50%, -50%)"
      boxShadow="3px 3px 23px rgba(107, 103, 70, 0.125901)"
    >
      <Flex alignItems="center">
        <Icon as={FiBookOpen} mr="10px" color="gray.150" />
        <Text fontWeight="700" fontSize="14px">
          Read
        </Text>
      </Flex>

      <Text color="gray.150">|</Text>

      <Flex alignItems="center">
        <Icon as={BiHeadphone} color="gray.150" mr="10px" />
        <Text fontWeight="700" fontSize="14px">
          Listen
        </Text>
      </Flex>

      <Text color="gray.150">|</Text>

      <Flex alignItems="center">
        <Icon as={FiShare} color="gray.150" mr="10px" />
        <Text fontWeight="700" fontSize="14px">
          Share
        </Text>
      </Flex>
    </Flex>
  )
}

export default OptionsBar
