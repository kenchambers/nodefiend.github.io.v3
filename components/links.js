import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'
import {Context} from '../contexts'
import { useState, useContext } from 'react'
import { Box, Grid, GridItem, useColorMode, Heading } from "@chakra-ui/react"

export default function Links () {
  const { state, dispatch } = useContext(Context);
  const {colorMode} = useColorMode()
  const boxBgColor = colorMode == "light" ? '#e3dfc8' : '#543864'
  const boxBgColor2 = colorMode == "light" ? '#f5f1da' : '#202040'
  const accentColor = colorMode == "light" ? '#96bb7c' : '#ff6363'
  const navHeadingColor = colorMode == "light" ? '#eebb4d' : '#ff6363'

  const { navMenuOpen } = state;
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,

      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  const item = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        repeatType: "reverse",
      }
    },
    hidden: {
      opacity: 0,
      x: -100,
      transition: {
        repeatType: "reverse",
      }
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}>
      <motion.div
        initial={{ opacity: 0, height: '0%'}}
        animate={{ opacity: 1, height: '100%', transition: { duration: 1, delay: 0.4 }}}
        exit={{ opacity: 0, height: '0%', transition: { delay: 2 }}}>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
          style={{ overflow: 'hidden', backgroundColor: accentColor }}
        >
          <GridItem colSpan={2}>
            <motion.div
              style={{ backgroundColor: boxBgColor}}
              variants={item}
              initial={{ opacity: 0, y: 0, height: '0%' }}
              animate={{ opacity: 1, y: 0, height: '100%', transition: { duration: 1, delay: 0.8 }}}
              exit={{ opacity: 0 , x: 0, height: '0%', transition: {duration: 0.8, delay: 0.8} }}>
                <Link href="/about">
                  <Box h={["30vw", "45vw", "30vw","42vh"]} w="100%" p="20px">
                    <Heading size="lg" fontSize="50px" color={navHeadingColor} style={{fontFamily: 'Montserrat-Black'}}>
                      About
                    </Heading>
                    <p>Find in-depth information about Next.js features and API.</p>
                  </Box>
                </Link>
            </motion.div>
          </GridItem>
          <GridItem colSpan={2}>
            <motion.div
              style={{backgroundColor: boxBgColor2}}
              variants={item}
              initial={{ opacity: 0, y: 0, height: '0%' }}
              animate={{ opacity: 1, y: 0, height: '100%', transition: { duration: 1, delay: 1.2 }}}
              exit={{ opacity: 0 , x: 0 , height: '0%', transition: {duration: 0.8,  delay: 0.6 }}}>
              <Link href="/experience" >
                <Box h={["30vw", "45vw", "30vw","42vh"]} w="100%" p="20px">
                  <Heading size="lg" fontSize="50px" color={navHeadingColor} style={{fontFamily: 'Montserrat-Black'}}>
                    Work
                  </Heading>
                  <p>Coding I've done , People I've worked for.</p>
                </Box>
              </Link>
            </motion.div>
          </GridItem>
          <GridItem colSpan={2} >
            <motion.div
              style={{backgroundColor: boxBgColor2}}
              variants={item}
              initial={{ opacity: 0, y: 0, height: '0%' }}
              animate={{ opacity: 1, y: 0, height: '100%', transition: {duration: 1, delay: 1.6}}}
              exit={{ opacity: 0 , x: 0, height: '0%', transition: {duration: 0.8, delay: 0.4}  }}>
              <Link href="/blog">
                <Box h={["30vw", "45vw", "30vw","42vh"]} w="100%" p="20px">
                  <Heading size="lg" fontSize="50px" color={navHeadingColor} style={{fontFamily: 'Montserrat-Black'}}>
                    Posts
                  </Heading>
                  <p>Short posts about everything and anything</p>
                </Box>
              </Link>
            </motion.div>
          </GridItem>
          <GridItem colSpan={2}>
            <motion.div
              style={{backgroundColor: boxBgColor}}
              variants={item}
              initial={{ opacity: 0, y: 0, height: '0%' }}
              animate={{ opacity: 1, y: 0, height: '100%', transition: {duration: 1, delay: 1.2} }}
              exit={{ opacity: 0 , x: 0, height: '0%', transition: {duration: 0.8, delay: 0.2}  }}>
              <Link href="/contact">
                <Box h={["30vw", "45vw", "30vw","42vh"]} w="100%" p="20px">
                  <Heading size="lg" fontSize="50px" color={navHeadingColor} style={{fontFamily: 'Montserrat-Black'}}>
                    Tools
                  </Heading>
                  <p>
                    Tools and my experience using them
                  </p>
                </Box>
              </Link>
            </motion.div>
          </GridItem>
        </Grid>
      </motion.div>
    </motion.div>
  )
}