import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'
import { Icon, useColorMode, Button, IconButton,Square, Flex, Box, Spacer, Heading } from "@chakra-ui/react"
import { useState, useContext } from 'react'
import { motion, useAnimation , useMotionValue} from 'framer-motion'
import Logo from './logo'
import HamburgerButton from './hamburger-button'
import ToggleDarkModeButton from './dark-mode-button'
import NavigationMenu from './navigation-menu'
import { Context } from '../contexts'

export default function Layout({ children, home }) {
  const { state, dispatch } = useContext(Context);
  const [ toggleButtonState , setToggleButtonState ] = useState(false)

  const open = () => dispatch({type: "TOGGLE_NAV", payload: true})
  const close = () => dispatch({type: "TOGGLE_NAV", payload: false})

  const { navMenuOpen }  = state;

  const debounceToggleMenuNav = () => {
    const _disableToggle = () => {
      setToggleButtonState(true)
      setTimeout(()=>{
        setToggleButtonState(false)
      }, 3000)
    }
    if (!navMenuOpen) {
      open()
      _disableToggle()

    } else {
      close()
      _disableToggle()
    }
  }

  return (
    <div className={styles.container}>
      <header>
        <Flex>
          <Box p="4" bg="clear">
            <ToggleDarkModeButton/>
          </Box>
          <Spacer />
          <Box p="4" bg="clear">
            <HamburgerButton toggleMenu={debounceToggleMenuNav} disabled={toggleButtonState}/>
          </Box>
        </Flex>
      </header>

      <NavigationMenu show={navMenuOpen}/>

      <main>{children}</main>
    </div>
  )
}