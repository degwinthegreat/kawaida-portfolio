'use client'

import { ChakraProvider, ColorModeScript, extendTheme, Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

const config = {
  initialColorMode: 'system',
  useSystemColorMode: false,
}
const theme = extendTheme({ config })

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider resetCSS theme={theme}>
        <Container maxW='container.lg'>{children}</Container>
      </ChakraProvider>
    </>
  )
}

export default Providers
