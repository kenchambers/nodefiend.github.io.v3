import { Icon, useColorMode, Center, Button, IconButton,Square, Flex, Box, Spacer, Heading } from "@chakra-ui/react"
import { motion, AnimatePresence, useAnimation , useMotionValue} from 'framer-motion'
import Links from './links'
import ContactComponent from './contact-component'
import {FaHome} from 'react-icons/fa'
import HeroGraphic from './hero-graphic'


export default function NavigationMenu({show}){

  const {colorMode} = useColorMode()

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
              animate={{ height: '100%', width: '100%',transition: {duration: 0.7}  }}
              exit={{ height: '0%', width: '0%',transition: {delay: 1.5, duration: 0.5} }}
            >
            <Box
              bg={accentColor}
              float={{md: 'left'}}
              w={['100%', '100%', '100%', '50%' ]}
              h={['100%', '100%', '100%','100%']}>
                <motion.div
                  initial={{ height: '0%', opacity: 1 }}
                  animate={{ height: '100%', opacity: 1, transition: {delay: 1.5} }}
                  exit={{ height: '0%', opacity: 1, transition: { delay: 1.5, duration: 1 } }}
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
                  animate={{ x: 0, height: '100%', opacity: 1 , transition: {delay:0.5, duration: 1}}}
                  exit={{ x: -500, height: '0%', opacity: 0, transition: {delay:0.5, duration: 1}}}
                >
                  <Center w={["100vw",null,null,"50vw"]} h="100%" bg={boxBgColor2} >

                    <Box p="2em" style={{position: 'relative'}} bg={boxBgColor} h={["100%", null, '40%', '100vh', '100vh']} w="100%" >
                        <HeroGraphic />
                        <Box w="100%" style={{position: 'relative', zIndex: 1000}}>
                          <Heading size="lg" fontSize="50px" style={{fontFamily: 'PoiretOne-Regular'}}>
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
