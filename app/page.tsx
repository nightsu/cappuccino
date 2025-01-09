'use client'

import { Slider } from '@/src/components/ui/slider'
import { Button, Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Box p={4} textAlign="center">
      <Text fontSize="2xl" color="teal.500">
        Welcome to Chakra UI with Next.js 15!
      </Text>
      <Button mt={4} colorScheme="blue">
        Click Me
      </Button>
      <Link href="/animals">animals</Link>
      <Slider defaultValue={[40]} />
    </Box>
  )
}
