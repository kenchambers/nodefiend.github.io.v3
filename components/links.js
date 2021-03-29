import { motion } from "framer-motion"
import Link from 'next/link'
import {Context} from '../contexts'
import { useState, useContext } from 'react'
import { Box, Grid, GridItem, useColorMode, Heading, Text } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import React from 'react'

export default function Links () {
  const { state, dispatch } = useContext(Context);
  const router = useRouter()
  const close = () => dispatch({type: "TOGGLE_NAV", payload: false})

  const { colorMode } = useColorMode()
  const boxBgColor = colorMode == "light" ? '#e3dfc8' : '#543864'
  const boxBgColor2 = colorMode == "light" ? '#f5f1da' : '#202040'
  const accentColor = colorMode == "light" ? '#96bb7c' : '#ff6363'
  const navHeadingColor = colorMode == "light" ? '#eebb4d' : '#ff6363'

  const onLinkClick = (e, href) => {
    e.preventDefault()

    close()

    setTimeout(()=>{
      router.push(href)
    }, 2000)
  }

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

  const headingFontSize = ['2em', null, '30px', '50px']
  const subHeadingFontSize = ["1.5em",null, '2em', null, '2.3em']
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
          h={['50vh', '50vh', '50vh', 'calc(100vh - 72px)']}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={[2,2,4,4]}
          style={{  overflow: 'hidden', backgroundColor: accentColor }}
        >
          <GridItem colSpan={2}>
            <motion.div
              style={{ backgroundColor: boxBgColor}}
              variants={item}
              initial={{ opacity: 0, y: 0, height: '0%' }}
              animate={{ opacity: 1, y: 0, height: '100%', transition: { duration: 1, delay: 0.8 }}}
              exit={{ opacity: 0 , x: 0, height: '0%', transition: {duration: 0.8, delay: 0.8} }}>
                <Box h={["30vw", "30vw", "20vw","42vh"]} w="100%" p="20px" onClick={(e)=> onLinkClick(e,'/about')}>
                  <Heading size="lg" fontSize={headingFontSize} color={navHeadingColor} style={{fontFamily: 'Montserrat-Black'}}>
                    About
                  </Heading>
                  <Text fontSize={subHeadingFontSize}>
                    who i think i am
                  </Text>
                </Box>
            </motion.div>
          </GridItem>
          <GridItem colSpan={2}>
            <motion.div
              style={{backgroundColor: boxBgColor2}}
              variants={item}
              initial={{ opacity: 0, y: 0, height: '0%' }}
              animate={{ opacity: 1, y: 0, height: '100%', transition: { duration: 1, delay: 1.2 }}}
              exit={{ opacity: 0 , x: 0 , height: '0%', transition: {duration: 0.8,  delay: 0.6 }}}>
              <Box h={["30vw", "30vw", "20vw","42vh"]} w="100%" p="20px" onClick={(e)=> onLinkClick(e,'/work')}>
                <Heading size="lg" fontSize={headingFontSize} color={navHeadingColor} style={{fontFamily: 'Montserrat-Black'}}>
                  Work
                </Heading>
                <Text fontSize={subHeadingFontSize}>
                  code I've committed
                </Text>
              </Box>
            </motion.div>
          </GridItem>
          <GridItem colSpan={2} >
            <motion.div
              style={{backgroundColor: boxBgColor2}}
              variants={item}
              initial={{ opacity: 0, y: 0, height: '0%' }}
              animate={{ opacity: 1, y: 0, height: '100%', transition: {duration: 1, delay: 1.6}}}
              exit={{ opacity: 0 , x: 0, height: '0%', transition: {duration: 0.8, delay: 0.4}  }}>
              <Box h={["30vw", "30vw", "30vw","42vh"]} w="100%" p="20px" onClick={(e)=> onLinkClick(e,'/posts')}>
                <Heading size="lg" fontSize={headingFontSize} color={navHeadingColor} style={{fontFamily: 'Montserrat-Black'}}>
                  Posts
                </Heading>
                <Text fontSize={subHeadingFontSize}>
                  Trying to help the Community
                </Text>
              </Box>
            </motion.div>
          </GridItem>
          <GridItem colSpan={2}>
            <motion.div
              style={{backgroundColor: boxBgColor}}
              variants={item}
              initial={{ opacity: 0, y: 0, height: '0%' }}
              animate={{ opacity: 1, y: 0, height: '100%', transition: {duration: 1, delay: 1.2} }}
              exit={{ opacity: 0 , x: 0, height: '0%', transition: {duration: 0.8, delay: 0.2}  }}>
              <Box h={["30vw", "30vw", "30vw","42vh"]} w="100%" p="20px" onClick={(e)=> onLinkClick(e,'/tools')}>
                <Heading size="lg" fontSize={headingFontSize} color={navHeadingColor} style={{fontFamily: 'Montserrat-Black'}}>
                  Tools
                </Heading>
                <Text fontSize={subHeadingFontSize}>
                  A little about what I use
                </Text>
              </Box>
            </motion.div>
          </GridItem>
        </Grid>
      </motion.div>
    </motion.div>
  )
}