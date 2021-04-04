import Head from 'next/head'
import {
          Box,
          useColorMode,
          Wrap,
          Text,
          WrapItem,
          Heading ,
          Center,
          VStack
        } from "@chakra-ui/react"
import ContactComponent from '../../components/contact-component'
import ComponentContainer from '../../components/component-container'
import Particles from 'react-particles-js'
import {particlesConfigDark, particlesConfigLight} from './particles-config'

const list = { hidden: { opacity: 1 } }
const item = { hidden: { x: -10, opacity: 1 } }

export default function About() {
  const {colorMode} = useColorMode()
  const boxBgColor2 = colorMode == "light" ? '#f5f1da' : '#202040'
  const fontColor = colorMode == "light" ? '#505050' : '#ffbd69'

  return (
    <ComponentContainer>
      <>
        <Head>
          <title>About</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Box w="100%" style={{overflow: 'hidden'}}>
          <Wrap>
            <WrapItem w={["100vw",null, null, "45vw", null]} >
              <Box>
                <Center w={["100vw",null,null,"50vw"]} h="calc(100vh - 72px)" bg={boxBgColor2}>
                  <VStack>
                    <Heading size="lg" fontSize={["2rem", '4rem', null, "5rem"]} style={{fontFamily: 'PoiretOne-Regular', position: 'absolute', top: '50%'}}>
                      Ken Chambers
                    </Heading>
                    <Particles
                      width="100%"
                      height="100vh"
                      style={{postion: 'absolute'}}
                      params={colorMode == "light" ? particlesConfigLight : particlesConfigDark} />
                    <ContactComponent/>
                  </VStack>
                </Center>
              </Box>
            </WrapItem>
            <WrapItem w={["100vw",null, null, "50vw", null]} >
              <Box>
                <Center w={["100vw",null,null,"50vw"]} h="calc(100vh - 72px)" bg={boxBgColor2}>
                  <Text p="2em" fontSize={['1.2rem']} color={fontColor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Auctor elit sed vulputate mi sit. Mattis vulputate enim nulla aliquet porttitor. Amet massa vitae tortor condimentum. Viverra aliquet eget sit amet tellus cras adipiscing enim. Viverra nam libero justo laoreet. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
                  </Text>
                </Center>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>

      </>
    </ComponentContainer>
  )
}


