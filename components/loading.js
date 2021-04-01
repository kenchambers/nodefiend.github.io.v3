import { motion , AnimatePresence } from "framer-motion"
import { Box, Image, Grid, GridItem, useColorMode, Heading } from "@chakra-ui/react"
import Rings from '../public/rings.svg';

const circleStyles = {
  backgroundRepeat: 'repeat',
  backgroundPosition: '50%',
  // borderRadius: '50%',
  width: '100%',
  height: '100vh',
  backgroundImage: 'url(/popcatloader.gif)'
}

const ringsContainer = {
  top: 72,
  position: 'fixed',
  zIndex: '9999999',
  height: '100vh',
  display: 'inline-block',
  width: '100%',
  textAlign: 'center'
}

const loadingTextStyle = {
  fontFamily: 'PoiretOne-Regular',
  fontSize: 50,
  top: 100
}

const ringsStyles = {
  height: '100vh',
  margin: '0 auto',
}

export default function Loading () {
  return (
    <>
      <div style={{ backgroundColor: 'white', height: '100%'}}>
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1,transition: { duration: 1, delay: 1 }}}
          exit={{ opacity: 0 ,transition: {duration: 1, delay: 1} }}>
          <div style={circleStyles}/>
        </motion.div>
        <div style={ringsContainer}>
          <Heading size="lg"  style={loadingTextStyle}>
            Loading
          </Heading>
          <Image src="/rings.svg" alt="me" style={ringsStyles} />
        </div>
      </div>
    </>

  )
}
