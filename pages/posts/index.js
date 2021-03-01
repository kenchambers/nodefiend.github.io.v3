import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { useEffect } from 'react'
import axios from 'axios'



async function fetchDevArticles () {
  const response = await axios.get('https://dev.to/api/articles?username=nodefiend')

  console.log(response)
}

export default function Blog() {

  useEffect(()=>{
    fetchDevArticles()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <h1>Blog</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>

    </Layout>
  )
}