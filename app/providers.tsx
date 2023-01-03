'use client'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { ReactNode } from 'react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider resetCSS theme={theme}>
        {children}
      </ChakraProvider>
    </>
  )
}

export default Providers
