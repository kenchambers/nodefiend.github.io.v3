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

// Controls main animation for transitions between pages

export const theme = extendTheme({ font, chakraConfig, styles})



function MyApp({ Component, pageProps, router }) {
  const routerLoading = useRouterLoading()

  return (
    <Provider>
      <ChakraProvider theme={theme}>
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Component key={router.route} {...allProps}/>
            </AnimatePresence>
          </Layout>
      </ChakraProvider>
    </Provider>
  )

  let allProps = { ...Component, ...pageProps, router}

  return (
    <Provider>
      <ChakraProvider theme={theme}>
          <Layout>
            <AnimatePresence>
              { routerLoading
                  ? (
                      <Loading {...allProps}/>
                  )
                  : (
                      <Component route={router.route} {...allProps}/>
                  )
              }
            </AnimatePresence>
          </Layout>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
