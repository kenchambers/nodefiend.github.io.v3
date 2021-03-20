import { motion , AnimatePresence } from "framer-motion"
import { Box, Image, Grid, GridItem, useColorMode, Heading } from "@chakra-ui/react"
import Rings from '../public/rings.svg';

const circleStyles = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  borderRadius: '50%',
  width: '100%',
  // maxWidth: '250px',
  height: '250px',
  backgroundImage: 'url(/popcatloader.gif)'
}

const ringsContainer = {
  top: 72,
  position: 'fixed',
  zIndex: '9999999',
  height: '100%',
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
  height: 300,
  margin: '0 auto',
}

export default function Loading () {
  return (
    <>
      <div style={{ backgroundColor: 'white', height: '100%'}}>
        <div style={circleStyles}/>
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
