import { m } from "framer-motion"
import { Center, useColorMode, Heading } from "@chakra-ui/react"
import ComponentContainer from './component-container'
// import Rings from '../public/rings.svg';

// const circleStyles = {
//   backgroundRepeat: 'repeat',
//   backgroundPosition: '50%',
//   // borderRadius: '50%',
//   width: '100%',
//   height: '100vh',
//   backgroundImage: 'url(/popcatloader.gif)'
// }

// const ringsContainer = {
//   top: 72,
//   position: 'fixed',
//   zIndex: '9999999',
//   height: '100vh',
//   display: 'inline-block',
//   width: '100%',
//   textAlign: 'center'
// }

const loadingTextStyle = {
  fontFamily: 'PoiretOne-Regular',
  fontSize: '9em',
  top: 100
}
//
// const ringsStyles = {
//   height: '100vh',
//   margin: '0 auto',
// }

export default function Loading () {
  const { colorMode } = useColorMode()
  const boxBgColor2 = colorMode == "light" ? '#f5f1da' : '#202040'

  return (
    <ComponentContainer>
      <>
        <div style={{backgroundColor: boxBgColor2, width: '100%', height: '100vh'}}>
          <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1,transition: { duration: 0.5, delay: 0 }}}
            exit={{ opacity: 0 ,transition: { duration: 0.5, delay: 0} }}>
            <Center h="100vh">
              <Heading size="lg" style={loadingTextStyle}>
                Loading
              </Heading>
            </Center>
          </motion.div>
        </div>
      </>
    </ComponentContainer>
  )
}
