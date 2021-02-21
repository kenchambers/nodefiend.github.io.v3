import '../styles/globals.scss'
import { extendTheme } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

import { AnimateSharedLayout, motion } from "framer-motion"
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import { Skeleton, SkeletonCircle, SkeletonText, Box, Image } from "@chakra-ui/react"




// https://coolors.co/palettes/trending
// https://chakra-ui.com/docs/theming/customize-theme
// OVERWRITE DARKMODE: https://stackoverflow.com/a/65104049

const LoadingPage = () => {
  return (
    <div>
      <h1>LOADING</h1>
      <motion.figure
        layoutId="catImage">
        <Box boxSize="sm">
          <Image src="https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg" alt="Segun Adebayo" />
        </Box>
      </motion.figure>
    </div>
  )
}

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const font = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "PoiretOne-Regular, serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

export const theme = extendTheme({ font, config })


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
  )
}

export default MyApp
