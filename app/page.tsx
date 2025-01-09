'use client'

import { Slider } from '@/src/components/ui/slider'
import { Button, Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Box bg="brand.secondary" className="h-screen flex flex-col justify-center items-center">
      <Text fontSize="2xl" color="teal.500" fontWeight="bold">
        Welcome to the World!
      </Text>
      <Button mt={4} colorScheme="blue">
        Click Me
      </Button>
      <Link href="/animals">animals</Link>
      <Slider defaultValue={[40]} />
    </Box>
  )
}
