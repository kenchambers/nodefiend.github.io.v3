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
  const { navMenuOpen,showMainCanvas }  = state;

  const [ toggleButtonState , setToggleButtonState ] = useState(false)
  const { colorMode } = useColorMode()
  const boxBgColor = colorMode == "light" ? '#e3dfc8' : '#543864'

  const open = () => dispatch({type: "TOGGLE_NAV", payload: true})
  const close = () => dispatch({type: "TOGGLE_NAV", payload: false})
  const displayMainCanvas = () => dispatch({type: "SHOW_MAIN_CANVAS"})
  const hideMainCanvas = () => dispatch({type: "HIDE_MAIN_CANVAS"})

  const debounceToggleMenuNav = () => {
    const _disableToggle = () => {
      setToggleButtonState(true)
      setTimeout(()=>{
        setToggleButtonState(false)
        if (showMainCanvas){
          hideMainCanvas()
        }else{
          displayMainCanvas()
        }
      }, 1500)
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
    <div>
      <header className="shadow" style={{position: 'fixed', zIndex: 999999, width: '100%', backgroundColor: boxBgColor }}>
        <Box>
          <Flex>
            <Box p="4" bg="clear">
              <ToggleDarkModeButton/>
            </Box>
            <Spacer />
            <Box  p="4" bg="clear">
              <HamburgerButton toggleMenu={debounceToggleMenuNav} disabled={toggleButtonState}/>
            </Box>
          </Flex>
        </Box>
      </header>
      <main>

        <Box style={{paddingTop: 72}}>
          <NavigationMenu show={navMenuOpen}/>
          {children}
        </Box>
      </main>
    </div>
  )
}