import { Box, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

type IconTextProps = {
  src: string
  text: string
  onClick?: () => void
}

const IconText: React.FC<IconTextProps> = ({ src, text, onClick }) => {
  const [showAnimation, setShowAnimation] = useState<boolean>(false)
  const handleClick = () => {
    setShowAnimation(true)
    setTimeout(() => {
      setShowAnimation(false)
      onClick?.()
    }, 2000)
  }
  return (
    <Box className="flex flex-col items-center justify-center" gap={2} onClick={handleClick}>
      <Image src={src} alt="icon" width={60} rounded="full" _hover={{ boxShadow: 'lg' }} animation={showAnimation ? 'spin 1s ease-in-out infinite' : ''} />
      <Text color="orange.600" fontWeight="bold" fontSize="xl" fontStretch="expanded">
        {text}
      </Text>
    </Box>
  )
}

export default IconText
