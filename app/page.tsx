'use client'

import { ExternalLinkIcon, ArrowRightIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Card,
  CardHeader,
  Flex,
  Heading,
  Box,
  CardBody,
  Stack,
  StackDivider,
  Link,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'

const Socials = () => {
  return (
    <Card id='socials'>
      <CardHeader>
        <Heading size='md' as='h2'>
          Socials
        </Heading>
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
  )
}

const Bio = () => {
  return (
    <Box m='4'>
      <Heading size='md' as='h2' id='bio'>
        Bio
      </Heading>
      <List pl='2'>
        <ListItem>
          <ListIcon as={ArrowRightIcon} />
          hoge
        </ListItem>
        <ListItem>
          <ListIcon as={ArrowRightIcon} />
          hoge
        </ListItem>
        <ListItem>
          <ListIcon as={ArrowRightIcon} />
          hoge
        </ListItem>
      </List>
    </Box>
  )
}

export default function Home() {
  return (
    <Box as='main'>
      <Flex justifyContent='center' alignItems='center'>
        <Avatar name='Shinsuke Kawaida' size='2xl' src='/images/tamamushi_icon.jpg' />
      </Flex>
      <Bio />
      <Socials />
    </Box>
  )
}
