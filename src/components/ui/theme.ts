import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e6f2ff' },
          100: { value: '#e6f2ff' },
          200: { value: '#bfdeff' },
          300: { value: '#99caff' },
          500: { value: '#4dabf7' },
        },
      },
    },
  },
})
