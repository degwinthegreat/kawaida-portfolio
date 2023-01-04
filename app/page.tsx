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
                <Link href='https://github.com/degwinthegreat' isExternal>
                  Github <ExternalLinkIcon mx='2px' />
                </Link>
              </Heading>
            </Box>
            <Box>
              <Heading size='xs'>
                <Link href='https://twitter.com/tamamushi_2' isExternal>
                  Twitter <ExternalLinkIcon mx='2px' />
                </Link>
              </Heading>
            </Box>
            <Box>
              <Heading size='xs'>
                <Link href='https://www.facebook.com/shinsukekawaida/' isExternal>
                  Facebook <ExternalLinkIcon mx='2px' />
                </Link>
              </Heading>
            </Box>
            <Box>
              <Heading size='xs'>
                <Link href='https://note.com/tamamushi_' isExternal>
                  Note <ExternalLinkIcon mx='2px' />
                </Link>
              </Heading>
            </Box>
            <Box>
              <Heading size='xs'>
                <Link href='https://qiita.com/degwinthegreat' isExternal>
                  Qiita <ExternalLinkIcon mx='2px' />
                </Link>
              </Heading>
            </Box>
            <Box>
              <Heading size='xs'>
                <Link href='https://zenn.dev/degwinthegreat' isExternal>
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
