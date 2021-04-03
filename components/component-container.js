import { useColorMode } from "@chakra-ui/react"
import { motion } from "framer-motion"

const ComponentContainer = ({ children, router, pageProps }) => {
  const { colorMode } = useColorMode()
  const boxBgColor2 = colorMode == "light" ? '#f5f1da' : '#202040'
  const containerStyles = {
    width: '100%',
    height: 'calc(100vh - 72px)',
    overflowY: 'scroll',
    backgroundColor: boxBgColor2
  }

  const containerVariants = {
    pageInitial: {
      opacity: 1,
      x: '-100vw',


      transition: {
        delay: 0.5,
        duration: 0.5
      },
    },
    pageAnimate: {
      opacity: 1,
      x: '0vw',

      transition: {
        delay: 0.1,
        duration: 0.5
      },
    },
    pageExit: {
      opacity: 1,
      x: '100vw',
      backgroundColor: boxBgColor2,
      transition: {
        delay: 0.0,
        duration: 0.5
      },
    }
  }

  return (
    <motion.div {...pageProps} style={containerStyles} initial={containerVariants.pageInitial} animate={containerVariants.pageAnimate} exit={containerVariants.pageExit} >
      {children}
    </motion.div>
  )
}

export default ComponentContainer