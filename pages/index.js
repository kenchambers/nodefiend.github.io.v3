import { Box,Text, Heading, Icon, Center, useColorMode } from "@chakra-ui/react"
import Logo from '../components/logo'
import HeroGraphic from '../components/hero-graphic'
import { useHasMounted } from '../hooks/use-has-mounted'
import { Context } from '../contexts'
import {useContext} from 'react'
import ComponentContainer from '../components/component-container'
import { SiRails, SiReact } from 'react-icons/si'

export default function Index() {

  const { colorMode } = useColorMode()
  const { state, dispatch } = useContext(Context);
  const { showMainCanvas }  = state;

  const iconSize = [10, null, 20 ,null, 20]


  return (
    <ComponentContainer>
      <section>
        {
          showMainCanvas &&
          <HeroGraphic/>
        }
        <Center bg="clear" h="100vh" w="100%">
          <Heading size="lg" style={{ fontFamily: 'PoiretOne-Regular', position: 'absolute', zIndex: 999999}}>
            <Box p="2em" w="100%">
              <Text fontSize={{ base: "4rem", md: "76px", lg: "75px" }}>
                Hi, I'm Ken Chambers
              </Text>

                <Heading size="lg" fontSize={['1rem', '2rem', '2rem',  '3rem']}  style={{fontFamily: 'Montserrat-Black'}}>
                A <span style={{fontFamily: 'Montserrat-Black', color: '#63b3ed'}}>React</span> <Icon as={SiReact} w={iconSize} h={iconSize} color="blue.300"/>  & <Icon as={SiRails} w={[20, null, null, 40]} h={[20, null, null, 40]} style={{marginBottom: '25px'}}color="red.500"/> Ninja
                </Heading>
            </Box>
          </Heading>
        </Center>
      </section>
    </ComponentContainer>


  );
}
