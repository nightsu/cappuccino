import { Box, Text } from '@chakra-ui/react'
import IconText from '@/src/components/IconText'

const Knowledge = () => {
  return (
    <Box className="h-screen flex flex-col items-center justify-center">
      <Text bg="linear-gradient(135deg, #34d399, #4ade80, #22d3ee)" fontSize="8xl" fontWeight="bolder" backgroundClip="text" animation="bounce">
        Knowledge Land
      </Text>
      <IconText src="/images/lion_icon.png" text="Animals" />
      <Box display="flex" gap={8}>
        <IconText src="/images/car_icon.png" text="Traffic Vehicles" />
        <IconText src="/images/guitar_icon.png" text="Instruments" />
      </Box>
    </Box>
  )
}

export default Knowledge
