import Link from 'next/link'
import Head from 'next/head'

export default function Tools() {
  return (
    <div style={{width: '100%', height: 'calc(100vh - 72px)', border: '5px dashed red', overflowY: 'scroll'}}>

      <Head>
        <title>Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <h1>Tools</h1>
        <h2>
          <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      </div>
    </div>
  )
}