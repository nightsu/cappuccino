import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

type IconTextProps = {
  src: string
  text: string
  onClick?: () => void
}

const IconText: React.FC<IconTextProps> = ({ src, text, onClick }) => {
  return (
    <Box className="flex flex-col items-center justify-center" gap={2}>
      <Image src={src} onClick={onClick} alt="icon" width={60} rounded="full" _hover={{ boxShadow: 'lg' }} />
      <Text color="orange.600" fontWeight='bold' fontSize="xl" fontStretch="expanded">{text}</Text>
    </Box>
  )
}

export default IconText
