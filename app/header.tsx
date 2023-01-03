'use client'

import { Button, Box, Flex, Container, Heading, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Container maxW='container.lg'>
        <Flex as='header' py='4' justifyContent='space-between' alignItems='center'>
          <NextLink href='/' passHref>
            <Heading
              as='h1'
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text'
              fontSize='2xl'
              fontWeight='extrabold'
              cursor='pointer'
            >
              Kawaida Dev🔨
            </Heading>
          </NextLink>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
