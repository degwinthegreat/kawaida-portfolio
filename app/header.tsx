'use client'

import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Button,
  Link,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  HStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { FC } from 'react'

const Links = () => {
  return (
    <>
      <Link as={NextLink} href='/blogs'>
        Blogs
      </Link>
      <Link href='/#bio'>Bio</Link>
      <Link href='/#socials'>Socials</Link>
    </>
  )
}

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)

  return (
    <Box>
      <Flex as='header' py='4' justifyContent='space-between'>
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
        <HStack flex='1' justifyContent='space-around' display={{ base: 'none', md: 'flex' }}>
          <Links />
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
        <Box display={{ base: 'block', md: 'none' }}>
          <Button ref={btnRef} onClick={onOpen}>
            <HamburgerIcon />
          </Button>
          <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <HStack justifyContent='space-around'>
                  <Text>kawaida dev</Text>
                  <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>
                </HStack>
              </DrawerHeader>
              <DrawerBody>
                <VStack>
                  <Links />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </Box>
  )
}
