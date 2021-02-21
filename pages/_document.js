import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import Link from "next/link";

// ADD CUSTOM FONTS: https://kirazhang.com/posts/nextjs-custom-fonts

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
           rel="preload"
           href="/fonts/PoiretOne/PoiretOne-Regular.ttf"
           as="font"
           crossOrigin=""
         />
        </Head>
        <body>
          <ColorModeScript initialColorMode={'light'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}