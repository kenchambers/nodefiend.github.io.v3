import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <h1>Contact</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>

    </Layout>
  )
}