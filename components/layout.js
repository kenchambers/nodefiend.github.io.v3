import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'
import { useColorMode, Button, IconButton,Square, Flex, Box, Spacer } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { GiUbisoftSun } from 'react-icons/gi'
import { CgMoon } from 'react-icons/cg'
import { TiThMenuOutline } from 'react-icons/ti'
import { useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'


function HamburgerButton({toggleMenu}){
  return (
    <IconButton onClick={toggleMenu}>
      <Icon as={TiThMenuOutline} w={8} h={8} color="grey.500"/>
    </IconButton>

  )
}

function NavigationMenu({ show }){



  return (
    <AnimatePresence>
      {
        show && (
          <>
            <motion.div
              initial={{ height: '0vh', opacity: 0 }}
              animate={{ height: '40vh', opacity: 1 }}
              exit={{ height: '0vh', opacity: 0 }}
            >
              <Box bg="cyan" w="100%" h="30vh">
                MENU 2
              </Box>
            </motion.div>
            <motion.div
              initial={{ height: '0vh', opacity: 0, bottom: 0 }}
              animate={{ height: '40vh', opacity: 1 }}
              exit={{ height: '0vh', opacity: 0, bottom: 0 }}
            >
              <Box bg="tomato" w="100%" h="30vh">
                Menu
              </Box>
            </motion.div>
          </>

        )
      }
    </AnimatePresence>
  )
}


function ToggleDarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode}>
      {
        colorMode === "light"
        ? (<Icon as={CgMoon} w={8} h={8} color="grey.500"/>)
        : (<Icon as={GiUbisoftSun} w={8} h={8} color="yellow.500"/>)
      }

       {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  )
}

export default function Layout({ children, home }) {

  const [ menuOpen, toggleMenu ] = useState(false)

  const open = () => toggleMenu(true)
  const close = () => toggleMenu(false)

  return (
    <div className={styles.container}>
      <h1>{menuOpen.toString()}</h1>
      <header>
        <Flex>
          <Box p="4" bg="red.400">
            <ToggleDarkModeButton/>
          </Box>
          <Spacer />
          <Box p="4" bg="green.400">
            <HamburgerButton toggleMenu={menuOpen ? close : open}/>
          </Box>
        </Flex>
      </header>

      <NavigationMenu show={menuOpen}/>

      <main>{children}</main>
    </div>
  )
}