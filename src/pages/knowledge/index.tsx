import { Box, Text } from '@chakra-ui/react'
import IconText from '@/src/components/IconText'
import { useRouter } from 'next/router'
import { TKnowledgeType } from '@/src/types/knowledge'

const TYPE_CONFIG: { img: string; text: string; type: TKnowledgeType }[] = [
  {
    img: '/images/lion_icon.png',
    text: 'Animals',
    type: 'animals',
  },
  {
    img: '/images/car_icon.png',
    text: 'Traffic Vehicles',
    type: 'vehicles',
  },
  {
    img: '/images/guitar_icon.png',
    text: 'Instruments',
    type: 'instruments',
  },
]

const Knowledge = () => {
  const router = useRouter()
  const handleRouteChange = (type: TKnowledgeType) => {
    router.push(`/knowledge/content/${type}`)
  }
  return (
    <Box className="h-screen flex flex-col items-center justify-center">
      <Text bg="linear-gradient(135deg, #34d399, #4ade80, #22d3ee)" fontSize="8xl" fontWeight="bolder" backgroundClip="text" animation="bounce">
        Knowledge Land
      </Text>
      <Box display="flex" gap={8}>
        {TYPE_CONFIG.map((item) => (
          <IconText key={item.type} src={item.img} text={item.text} onClick={() => handleRouteChange(item.type)} />
        ))}
      </Box>
    </Box>
  )
}

export default Knowledge
