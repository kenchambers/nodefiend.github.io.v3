// https://codesandbox.io/s/app-store-ui-using-react-and-framer-motion-ecgc2?file=/src/CardList.tsx:432-440
// https://chakra-ui.com/docs/layout/box

import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Context } from '../../contexts'
import { Tag, Heading, Container, useColorMode, Box, Wrap, WrapItem, Center, Text } from "@chakra-ui/react"
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

function TagGenerator({tags}) {


  if (tags.length > 0) {
    return(
      <>
        {
          tags.map((tag)=> {
            return (
              <Tag m="1" colorScheme="teal" size="md">
                {tag}
              </Tag>
            )
          })
        }
      </>
    )

  }

}

function PostComponent({post}) {
  const { colorMode } = useColorMode()
  const accentColor = colorMode == "light" ? '#96bb7c' : '#ff6363'
  const blogTitleFontSize = ['1.2em']
  const blogTitleColor = colorMode == "light" ? '#eebb4d' : '#ff6363'

  console.log(post);

  const heartsCount = post.positive_reactions_count + post.public_reactions_count
  const commentsCount = post.comments_count
  return (
    <Center m="10px" w={["100%","250px"]} mt="2vw">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" style={{ border: `5px solid ${accentColor}`}}>
        <PostLink href={`posts/${post.id}`} id={post.id}>
          <Box>
            <Image width="300px" height="100%" src={post.cover_image} alt={post.cover_image} />

            <Heading p={'0.6em'} size="lg" fontSize={blogTitleFontSize} color={blogTitleColor} style={{fontFamily: 'Montserrat-Black'}}>
              {post.title}
            </Heading>

            <Text p={'0.6em'}>
              Heart: {heartsCount.toString()}
            </Text>

            <Text p={'0.6em'}>
              Comments: {commentsCount.toString()}
            </Text>

            <Box p={'0.6em'}>
              {
                post.tag_list.length && (
                  <TagGenerator tags={post.tag_list}/>
                )
              }
            </Box>
          </Box>
        </PostLink>
      </Box>
    </Center>
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
                  {
                    articles.map((post, i)=>{
                      return(
                        <WrapItem key={i}>
                          <PostComponent post={post}/>
                        </WrapItem>
                      )})
                  }
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