import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#FEFAF6',
        'h1, h2, h3, p, span, strong': {
          color: '#3F4043',
        },
      },
    },
  },
  fonts: {
    body: '"SF Pro Display", sans-serif',
  },
  colors: {
    gray: {
      100: '#7E7E7E',
      300: '#54565A',
      500: '#3F4043',
      700: '#36383A',
    },
    blue: '#4ABDF1',
    pink: '#FF6978',
  },
})
