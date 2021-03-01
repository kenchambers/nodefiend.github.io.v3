import '../styles/globals.scss'
import { extendTheme } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';

import { AnimateSharedLayout, motion } from "framer-motion"
import { useRouter } from 'next/router';
import {useEffect, useState, createContext} from 'react';
import { Skeleton, SkeletonCircle, SkeletonText, Box, Image } from "@chakra-ui/react"
import { Provider } from '../contexts'
import LoadingPage from '../components/loading'
import { chakraConfig, colors, font } from '../constants'

//
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

const components = {
  // Box: {
  //   // setup light/dark mode component defaults
  //   baseStyle: props => ({
  //     dialog: {
  //       bg: mode('#e3dfc8', '#543864')(props),
  //     },
  //   }),
  // },
};


export const theme = extendTheme({ font, chakraConfig, styles, components})

const useRouterLoading = () => {
  const Router = useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => setLoading(true)
    const end = () => setLoading(false)
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return loading
}

function MyApp({ Component, pageProps }) {

  const loading = useRouterLoading()

  return (
    <Provider>
    <>
      <ChakraProvider theme={theme}>
        <AnimateSharedLayout >

        { loading
            ? (<div><LoadingPage/></div>)
            : (
              <Component {...pageProps} />
            )
        }

        </AnimateSharedLayout>
      </ChakraProvider>
    </>
    </Provider>
  )
}

export default MyApp
