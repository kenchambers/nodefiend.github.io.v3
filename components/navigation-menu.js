import {useContext} from 'react'
import { useColorMode, Box, Center, Heading, Icon } from "@chakra-ui/react"
import ContactComponent from './contact-component'
import { useRouter } from 'next/router'
import Links from './links'
import {FaHome} from 'react-icons/fa'
import { useHasMounted } from '../hooks/use-has-mounted'
import useDeviceDetect from '../hooks/use-device-detect'
import {Context} from '../contexts'
import {AnimatePresence, motion} from 'framer-motion'
import HeroGraphic from './hero-graphic'


const r = Math.random()

const mobileScale = [20 + r * 14, 50 + r * 20, 1]

export default function NavigationMenu({show}){
  const {  dispatch } = useContext(Context);

  const hasMounted = useHasMounted()
  const isMobile = useDeviceDetect()
  const { colorMode } = useColorMode()
  const router = useRouter()
  const close = () => dispatch({type: "TOGGLE_NAV", payload: false})
  const showMainCanvas = () => dispatch({ type: "SHOW_MAIN_CANVAS"})

  const onLinkClick = (e, href, timeout = 0) => {
    e.preventDefault()

    showMainCanvas()
    close()

    setTimeout(()=>{
      router.push(href)
    }, timeout)
  }

  const boxBgColor = colorMode == "light" ? '#e3dfc8' : '#543864'
  const boxBgColor2 = colorMode == "light" ? '#f5f1da' : '#202040'
  const accentColor = colorMode == "light" ? '#96bb7c' : '#ff6363'

  return (
    <AnimatePresence exitBeforeEnter>
      {
        show && (
          <div style={{position: 'fixed', width: '100%', zIndex: 99999}}>
            <motion.div
              style={{position: 'relative'}}
              initial={{ height: '0%', width: '0%' }}
              animate={{ height: '100%', width: '100%',transition: {duration: 0.5}  }}
              exit={{ height: '0%', width: '0%',transition: {delay: 0.6, duration: 0.2} }}
            >
            <Box
              bg={accentColor}
              float={{md: 'left'}}
              w={['100%', '100%', '100%', '50%' ]}
              h={['100%', '100%', '100%','100%']}>
                <motion.div
                  initial={{ height: '0%', opacity: 1 }}
                  animate={{ height: '100%', opacity: 1, transition: {delay: 0.5} }}
                  exit={{ height: '0%', opacity: 1, transition: { delay: 0.5, duration: 0.2 } }}
                >
                  <Box h={["100%", null, '40%', '100vh', '100vh']} w="100%">
                    <Links/>
                  </Box>
              </motion.div>
            </Box>
              <Box
                bg={accentColor}
                float={{md: 'right'}}
                style={{overflow: 'hidden'}}
                w={['100%', '100%', '100%', '50%']}
                h={['100%', '100%', '100%','100%']}>
                <motion.div
                  initial={{ x: -500, height: '0%', opacity: 0 }}
                  animate={{ x: 0, height: '100%', opacity: 1 , transition: {delay: 1.2, duration: 0.7}}}
                  exit={{ x: -500, height: '0%', opacity: 0, transition: {delay:0.1, duration: 0.6}}}
                >
                  <Center
                    onClick={(e)=> onLinkClick(e,'/', 300)}
                    w={["100vw",null,null,"50vw"]}
                    h="100%" bg={boxBgColor2} >

                    <Box  style={{position: 'relative'}} bg={boxBgColor} h={["42vh", "42vh", "42vh", '100vh', '100vh']} w="100%" >
                        <HeroGraphic scale={isMobile ? mobileScale : null}/>
                        <Box p="2em" w="100%" style={{position: 'relative', zIndex: 1000}}>

                          <Heading size="lg" fontSize={["3.5em", null, "4.5em", '5.5em']} style={{fontFamily: 'PoiretOne-Regular'}}>
                            Ken Chambers
                            <Icon as={FaHome} w={10} h={10} color="grey.500"/>
                          </Heading>
                          <ContactComponent/>
                      </Box>
                    </Box>
                  </Center>
                </motion.div>
              </Box>
            </motion.div>
          </div>
        )
      }
    </AnimatePresence>
  )
}
