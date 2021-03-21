import '../styles/globals.scss'
import {  extendTheme,
          ChakraProvider,
          useColorMode } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import { Provider } from '../contexts'
import Loading from '../components/loading'
import { chakraConfig, colors, font } from '../constants'
import useRouterLoading from '../hooks/use-router-loading'
import Layout from '../components/layout'

// darkmode:
// #202040
// #543864
// #ff6363
// #ffbd69
//
// lightmode:
// #e3dfc8
// #f5f1da
// #96bb7c
// #eebb4d

const styles = {
  global: props => ({
    body: {
      color: mode('#505050', '#ffbd69')(props),
      bg: mode('#96bb7c', '#ff6363')(props),
      fontFamily: 'Montserrat-Light',
      fontSize: '1em',
      fontWeight: 300,
    },
  }),
};

const ComponentContainer = ({ children }) => {
  const { colorMode } = useColorMode()
  const boxBgColor2 = colorMode == "light" ? '#f5f1da' : '#202040'
  const containerStyles = {
    width: '100%',
    height: 'calc(100vh - 72px)',
    overflowY: 'scroll',
    backgroundColor: boxBgColor2
  }

  return (
    <div style={containerStyles}>
      {children}
    </div>
  )
}

const containerVariants = {
  pageInitial: {
    opacity: 1,
    x: '-100vw',
    transition: {
      delay: 1,
      duration: 1
    },
  },
  pageAnimate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1
    },
    x: '0vw',

  },
  pageExit: {
    opacity: 1,
    x: '100vw',
    transition: {
      delay: 1,
      duration: 1
    },
  }
}

export const theme = extendTheme({ font, chakraConfig, styles})

function MyApp({ Component, pageProps, router }) {
  const routerLoading = useRouterLoading()
  return (
    <Provider>
      <ChakraProvider theme={theme}>
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit={"pageExit"} variants={containerVariants}>
                  { routerLoading
                      ? (
                        <ComponentContainer>
                          <Loading/>
                        </ComponentContainer>
                      )
                      : (
                        <ComponentContainer {...pageProps}>
                          <Component {...pageProps} />
                        </ComponentContainer>
                      )
                  }
                </motion.div>
            </AnimatePresence>
          </Layout>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
