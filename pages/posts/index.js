// https://codesandbox.io/s/app-store-ui-using-react-and-framer-motion-ecgc2?file=/src/CardList.tsx:432-440
// https://chakra-ui.com/docs/layout/box

import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Context } from '../../contexts'
import { Container, useColorMode, Box, Wrap, WrapItem, Center } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image';

async function fetchDevArticles (dispatch) {
  const response = await axios.get('https://dev.to/api/articles?username=nodefiend')
  dispatch({type: "GET_ARTICLES", payload: response.data})
}

function PostLink({ children, href, id }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()

    router.push('/posts/[id]', `/posts/${id}`, {
      shallow: true,
    })
  }

  return (
    <a href={href} onClick={handleClick} >
      {children}
    </a>
  )
}

function PostsList({articles}){
  const { colorMode } = useColorMode()
  const accentColor = colorMode == "light" ? '#96bb7c' : '#ff6363'
  return (
    <Container centerContent>
      <Center id="blal" w={["100%","612px",'890px']}>
        <Container maxW="900px" centerContent>
          <Box>
            <Container maxW="900px" centerContent>
              <Wrap>
                <>
                  {
                    articles.map((post, i)=>{
                      return(
                        <div key={i}>
                          <WrapItem key={i}>
                            <Center m="10px" w={["100%","250px"]} mt="2vw">
                              <div
                                style={{
                                border: `4px solid ${accentColor}`,
                                }}>

                                <PostLink href={`posts/${post.id}`} id={post.id}>
                                  <Box>
                                      <Image key={i} width="250px" height="100%" src={post.cover_image} alt={post.cover_image} />
                                    {post.title}
                                  </Box>
                                </PostLink>

                              </div>
                            </Center>
                          </WrapItem>
                        </div>
                      )})
                  }
                </>
              </Wrap>
            </Container>
          </Box>
        </Container>
      </Center>
    </Container>
  )
}

export default function Blog() {
  const { state, dispatch } = useContext(Context);
  const router = useRouter()
  const { articles }  = state;
  const loaded = !!articles.length;

  useEffect(()=>{
    fetchDevArticles(dispatch)
  }, [dispatch])

  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <PostsList articles={articles}/>
      <Link href="/">
          <a>Back to home</a>
      </Link>
    </>
  )

}