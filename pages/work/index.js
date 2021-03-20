import Link from 'next/link'
import Head from 'next/head'
import { Box, Container, Center, Heading, Stack, Divider, Text, UnorderedList, ListItem, useColorMode } from "@chakra-ui/react"

export default function Work() {
  const {colorMode} = useColorMode()

  const accentColor = colorMode == "light" ? '#96bb7c' : '#ff6363'

  return (
    <>

      <Head>
        <title>Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Container >
          {/* <Heading size="lg" fontSize="50px" style={{fontFamily: 'PoiretOne-Regular'}}>
            Work
          </Heading> */}


          <Divider style={{height: 10, backgroundColor: accentColor}} orientation="horizontal" />
          <Stack direction="row">
            <Heading fontSize={['14px', '40px', '60px', '80px']} style={{color: accentColor}}>
              PlateJoy
            </Heading>
          </Stack>
          <Stack direction="row" h="300px" p={4}>
            <Divider orientation="vertical" />
            <Heading size="md" fontSize="20" >
              2019 - present
            </Heading>
            <Divider orientation="vertical" />
            <Stack h="200px">
              <Text style={{fontSize: '18px', color: accentColor}}>
                React / Ruby On Rails Engineer
              </Text>
              <UnorderedList pl="20px" fontSize={["16px"]}>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Stack>
          </Stack>



          <Divider style={{height: 10, backgroundColor: accentColor}} orientation="horizontal" />
          <Stack direction="row">
            <Heading fontSize={['14px', '40px', '60px', '80px']} style={{color: accentColor}}>
              Plannerly
            </Heading>
          </Stack>
          <Stack direction="row" h="300px" p={4}>
            <Divider orientation="vertical" />
              <Heading size="md" fontSize="20" >
                2017 - 2019
              </Heading>
            <Divider orientation="vertical" />
            <Stack h="200px">
              <Text style={{fontSize: '18px', color: accentColor}}>
                React / Ruby On Rails Engineer
              </Text>
              <UnorderedList pl="20px">
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Stack>
          </Stack>


          <Divider style={{height: 10, backgroundColor: accentColor}} orientation="horizontal" />
          <Stack direction="row">
            <Heading fontSize={['14px', '40px', '60px', '80px']} style={{color: accentColor}}>
              HireIris
            </Heading>
          </Stack>
          <Stack direction="row" h="300px" p={4}>
            <Divider orientation="vertical" />
              <Heading size="md" fontSize="20" >
                2015 - 2017
              </Heading>
            <Divider orientation="vertical" />
            <Stack h="200px" >
              <Text style={{fontSize: '18px', color: accentColor}}>
                React / Ruby On Rails Engineer
              </Text>
              <UnorderedList pl="20px">
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Stack>
          </Stack>



          <Divider style={{height: 10, backgroundColor: accentColor}} orientation="horizontal" />
          <Stack direction="row">
            <Heading fontSize={['14px', '40px', '60px', '80px']} style={{color: accentColor}}>
              Critique ^ it

            </Heading>
          </Stack>
          <Stack direction="row" h="300px" p={4}>
            <Divider orientation="vertical" />
              <Heading size="md" fontSize="20" >
                2014 - 2015

              </Heading>
            <Divider orientation="vertical" />
            <Stack h="200px">
              <Text style={{fontSize: '18px', color: accentColor}}>
                React / Ruby On Rails Engineer
              </Text>
              <UnorderedList pl="20px">
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Stack>
          </Stack>
        </Container>
      </Center>

    </>

  )
}