'use client'

import { Button, Link, Box, Flex, Container, Heading, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      <Box>
        <Flex as='header' py='4' justifyContent='space-between' alignItems='center'>
          <Link as={NextLink} href='/'>
            <Heading
              as='h1'
              bgGradient='linear(to-r, green.200, pink.500)'
              bgClip='text'
              fontSize='2xl'
              fontWeight='extrabold'
              cursor='pointer'
            >
              Kawaida Dev🔨
            </Heading>
          </Link>
          <Link as={NextLink} href='/blogs'>
            blogs
          </Link>
          <Link href='/#socials'>socials</Link>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Flex>
      </Box>
    </header>
  )
}
