import '../styles/globals.scss'
import { extendTheme } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';
import { AnimateSharedLayout, motion } from "framer-motion"
import { Skeleton, SkeletonCircle, SkeletonText, Box, Image } from "@chakra-ui/react"
import { Provider } from '../contexts'
import LoadingPage from '../components/loading'
import { chakraConfig, colors, font } from '../constants'
import useRouterLoading from '../hooks/use-router-loading'

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

function MyApp({ Component, pageProps }) {
  const loading = useRouterLoading()
  return (
    <Provider>
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
    </Provider>
  )
}

export default MyApp
