import Link from 'next/link'
import Head from 'next/head'
import { Container } from "@chakra-ui/react"

export default function Work() {
  return (
    <div style={{width: '100%', height: 'calc(100vh - 72px)', border: '5px dashed red', overflowY: 'scroll'}}>

      <Head>
        <title>Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <h1>Work</h1>
        <h2>
          <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      </div>
    </div>

  )
}