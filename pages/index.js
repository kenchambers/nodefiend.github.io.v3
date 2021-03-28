import { Text, Heading, Center, useColorMode } from "@chakra-ui/react"
import Logo from '../components/logo'
import HeroGraphic from '../components/hero-graphic'
import { useHasMounted } from '../hooks/use-has-mounted'


const darkModeColors = [
  '#202040',
  '#543864',
  '#ff6363',
  '#ffbd69',
]

const lightModeColors = [
  '#e3dfc8',
  '#f5f1da',
  '#96bb7c',
  '#eebb4d',
]

export default function Index() {

  const { colorMode } = useColorMode()

  const colorArray = (colorMode == "light" ? lightModeColors : darkModeColors)

  return (
    <section>
      <HeroGraphic colors={colorArray}/>
      <Center bg="clear" h="100vh" w="100%">
        <Heading size="lg" style={{ fontFamily: 'PoiretOne-Regular', position: 'absolute', zIndex: 999999}}>
          <Text fontSize={{ base: "30px", md: "76px", lg: "75px" }}>
            Hi, I'm Ken Chambers
          </Text>
        </Heading>
      </Center>
    </section>
  );
}
