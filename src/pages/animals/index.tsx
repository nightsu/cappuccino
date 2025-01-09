import { Slider } from "@/src/components/ui/slider"
import { Button } from "@chakra-ui/react"

const Index = () => {
  return (
    <>
      <Slider width="200px" defaultValue={[40]} />
      <Button bg={'red.500'}>123</Button>
    </>
  )
}

export default Index
