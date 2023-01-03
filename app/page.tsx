'use client'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Card,
  CardHeader,
  Heading,
  Box,
  CardBody,
  Stack,
  StackDivider,
  Link,
  Container,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <Card id='socials'>
        <CardHeader>
          <Heading size='md'>Socials</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs'>
                <Link href='' isExternal>
                  Github <ExternalLinkIcon mx='2px' />
                </Link>
              </Heading>
            </Box>
            <Box>
              <Heading size='xs'>
                <Link href='' isExternal>
                  Twitter <ExternalLinkIcon mx='2px' />
                </Link>
              </Heading>
            </Box>
            <Box>
              <Heading size='xs'>
                <Link href='' isExternal>
                  Facebook <ExternalLinkIcon mx='2px' />
                </Link>
              </Heading>
            </Box>
            <Box>
              <Heading size='xs'>
                <Link href='' isExternal>
                  Note <ExternalLinkIcon mx='2px' />
                </Link>
              </Heading>
            </Box>
            <Box>
              <Heading size='xs'>
                <Link href='' isExternal>
                  Qiita <ExternalLinkIcon mx='2px' />
                </Link>
              </Heading>
            </Box>
            <Box>
              <Heading size='xs'>
                <Link href='' isExternal>
                  Zenn <ExternalLinkIcon mx='2px' />
                </Link>
              </Heading>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </main>
  )
}
