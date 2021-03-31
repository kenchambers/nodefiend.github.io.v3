import { Box,Text, Heading, Center, useColorMode } from "@chakra-ui/react"
import Logo from '../components/logo'
import HeroGraphic from '../components/hero-graphic'
import { useHasMounted } from '../hooks/use-has-mounted'
import { Context } from '../contexts'

import {useContext} from 'react'

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
  const { state, dispatch } = useContext(Context);
  const { showMainCanvas }  = state;

  const colorArray = (colorMode == "light" ? lightModeColors : darkModeColors)

  return (
    <section>
      {
        showMainCanvas &&
        <HeroGraphic colors={colorArray}/>

      }
      <Center bg="clear" h="100vh" w="100%">
        <Heading size="lg" style={{ fontFamily: 'PoiretOne-Regular', position: 'absolute', zIndex: 999999}}>
          <Box p="2em" w="100%">
            <Text fontSize={{ base: "4rem", md: "76px", lg: "75px" }}>
              Hi, I'm Ken Chambers
            </Text>
          </Box>

        </Heading>
      </Center>
    </section>
  );
}
