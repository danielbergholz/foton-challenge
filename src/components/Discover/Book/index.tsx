import { Box, Text, Image, ChakraComponent, Flex } from '@chakra-ui/react'
import { memo } from 'react'

import Circle from '../../../assets/circle.png'
import Stats from '../../../assets/stats.svg'
import { IVolume } from '../../../types'

interface IProps {
  volumeInfo: IVolume
  index: number
}

const Book: ChakraComponent<'div', IProps> = ({
  volumeInfo,
  index,
  ...rest
}) => {
  const {
    title,
    authors,
    imageLinks: { thumbnail, smallThumbnail },
    pageCount,
  } = volumeInfo

  return (
    <Box
      borderRadius="5px"
      bgColor={bgColors[index % bgColors.length]}
      minWidth="272px"
      maxHeight="148px"
      position="relative"
      {...rest}
    >
      <Image
        src={Circle}
        position="absolute"
        bottom={randomIntFromInterval(-90, 90) + 'px'}
        right={randomIntFromInterval(0, 140) + 'px'}
      />
      <Flex
        zIndex={1}
        position="relative"
        paddingX="20px"
        paddingY="17px"
        justifyContent="space-between"
      >
        <Flex flexDir="column" justifyContent="space-between">
          <Box>
            <Text
              fontFamily="Playfair Display"
              color="#fff"
              fontWeight="700"
              fontSize="25px"
              lineHeight="28px"
              letterSpacing="2px"
              width="140px"
            >
              {title.substring(0, 14) + (title.length > 14 ? '...' : '')}
            </Text>
            <Text
              mt="5px"
              color="#E7E7E1"
              fontStyle="italic"
              fontSize="14px"
              lineHeight="16px"
              width="140px"
            >
              {authors?.[0]}
            </Text>
          </Box>
          <Flex alignItems="center">
            <Image src={Stats} mr="2px" />
            <Text color="#E7E7E1" fontSize="10px" lineHeight="11px">
              <Text as="span" color="#E7E7E1" fontWeight="700">
                {pageCount}+
              </Text>{' '}
              Read Now
            </Text>
          </Flex>
        </Flex>
        <Image
          src={thumbnail || smallThumbnail}
          borderRadius="4px"
          width="72px"
          height="111px"
          objectFit="cover"
        />
      </Flex>
    </Box>
  )
}

export default memo(Book)

const bgColors = [
  '#00173D',
  '#451475',
  '#0a3d00',
  '#3d0000',
  '#3d2f00',
  '#38003d',
  '#003d3d',
]

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
