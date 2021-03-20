import Link from 'next/link'
import Head from 'next/head'
import { Icon, useColorMode, Button, IconButton,Square, Flex, Box, Spacer, Heading } from "@chakra-ui/react"

import { motion } from "framer-motion"

const list = { hidden: { opacity: 1 } }
const item = { hidden: { x: -10, opacity: 1 } }


export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{border: '4px dashed green'}}>

        <Heading size="lg" fontSize="50px" style={{fontFamily: 'PoiretOne-Regular'}}>
          Ken Chambers
        </Heading>

      </div>
    </>
  )
}