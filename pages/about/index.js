import Link from 'next/link'
import Head from 'next/head'
import {
          useColorMode,
          Button,
          Wrap,
          Text,
          WrapItem,
          Heading ,
          Center
        } from "@chakra-ui/react"

import { motion } from "framer-motion"

const list = { hidden: { opacity: 1 } }
const item = { hidden: { x: -10, opacity: 1 } }


export default function About() {

  const {colorMode} = useColorMode()

  const boxBgColor2 = colorMode == "light" ? '#f5f1da' : '#202040'
  const fontColor = colorMode == "light" ? '#505050' : '#ffbd69'


  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrap>
        <WrapItem>
          <Center w={["100vw",null,null,"50vw"]} h="calc(100vh - 72px)" bg={boxBgColor2}>
            <Heading size="lg" fontSize="50px" style={{fontFamily: 'PoiretOne-Regular'}}>
              Ken Chambers
            </Heading>

          </Center>

        </WrapItem>
        <Center w={["100vw",null,null,"50vw"]} h="calc(100vh - 72px)" bg={boxBgColor2}>

          <Text p="2em" fontSize={["1.5em"]} color={fontColor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Auctor elit sed vulputate mi sit. Mattis vulputate enim nulla aliquet porttitor. Amet massa vitae tortor condimentum. Viverra aliquet eget sit amet tellus cras adipiscing enim. Viverra nam libero justo laoreet. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Viverra nibh cras pulvinar mattis. Ullamcorper eget nulla facilisi etiam. Turpis egestas maecenas pharetra convallis posuere. Magna fermentum iaculis eu non. Urna porttitor rhoncus dolor purus. At quis risus sed vulputate odio ut enim blandit. Lectus magna fringilla urna porttitor. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit.

          </Text>

        </Center>
        <WrapItem>

        </WrapItem>
      </Wrap>


    </>
  )
}