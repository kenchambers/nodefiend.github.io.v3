import '../styles/globals.scss'
import { extendTheme } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import { Skeleton, SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react"
import { Provider } from '../contexts'
import Loading from '../components/loading'
import { chakraConfig, colors, font } from '../constants'
import useRouterLoading from '../hooks/use-router-loading'
import Layout from '../components/layout'

import Image from 'next/image'


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
      bg: mode('#f5f1da', '#202040')(props),
      fontFamily: 'Montserrat-Light',
      fontSize: '1em',
      fontWeight: 300,
    },
  }),
};

export const theme = extendTheme({ font, chakraConfig, styles})

function MyApp({ Component, pageProps, router }) {

  const routerLoading = useRouterLoading()

  return (
    <Provider>
      <ChakraProvider theme={theme}>
        {/* <AnimateSharedLayout > */}
          <Layout>
            <AnimatePresence exitBeforeEnter>
              {/* <motion.div
                style={{height: '100%'}}
                initial={{opacity: 1, x: -1890}}
                animate={{opacity: 1, x: 0, transition: {duration: 1, delay: 1.5}}}
                exit={{opacity: 1, x: -1890}}> */}
                <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit={"pageExit"} variants={{
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
                    }}>

                    { routerLoading
                        ? (
                        <Loading/>
                        )
                        : (
                        <Component {...pageProps} />
                        )
                    }
                  </motion.div>

              {/* </motion.div> */}
            </AnimatePresence>
          </Layout>
        {/* </AnimateSharedLayout> */}
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
