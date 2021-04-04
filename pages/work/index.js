import Link from 'next/link'
import Head from 'next/head'
import ComponentContainer from '../../components/component-container'

import {  Box,
          Container,
          Center,
          Stack,
          Divider,
          Text,
          Heading,
          UnorderedList,
          ListItem,
          useColorMode } from "@chakra-ui/react"

const workArray = [
  {
    heading: 'PlateJoy',
    timeframe: '2019 - Present',
    title: 'React / Rails Engineer',
    items: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ]
  },
  {
    heading: 'Plannerly',
    timeframe: '2017 - 2019',
    title: 'React / Rails Engineer',
    items: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ]
  },
  {
    heading: 'Hire Iris',
    timeframe: '2015 - 2017',
    title: 'React / Rails Engineer',
    items: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ]
  },
  {
    heading: 'Critique ^ It',
    timeframe: '2014 - 2015',
    title: 'React/Rails Engineer (PM)',
    items: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ]
  }

]
const WorkSection = ({ work: { heading, timeframe, title, items }}) => {
  const { colorMode } = useColorMode()
  const accentColor = colorMode == "light" ? '#96bb7c' : '#ff6363'
  const dividerColor = colorMode == "light" ?  '#C9C6B1' : '#2B2B57'
  return (
    <>
      <Divider style={{height: 10, backgroundColor: dividerColor}} orientation="horizontal" />
        <Stack direction="row" style={{paddingTop: 10}}>
          <Heading size={['4xl']} color={accentColor}>
            {heading}
          </Heading>
        </Stack>
        <Stack direction="row" h="300px" p={4} style={{paddingLeft: 0}}>

          <Heading style={{paddingTop: 7}} size="md" fontSize="20" >
            {timeframe}
          </Heading>

          <Stack h="200px" style={{paddingLeft: 20}}>
            <Text fontSize={['1.1rem', '1.5rem', '1.8rem']} color={accentColor} style={{fontFamily: 'Montserrat-Black'}}>
              {title}
            </Text>
            <UnorderedList pl="20px" fontSize={["16px"]}>
              {
                items.map((item, i)=>{
                  return (
                    <ListItem key={i}>{item}</ListItem>
                  )
                })
              }
            </UnorderedList>
          </Stack>
        </Stack>
    </>
  )
}

export default function Work() {
  const { colorMode } = useColorMode()
  const accentColor = colorMode == "light" ? '#96bb7c' : '#ff6363'

  return (
    <ComponentContainer>
      <>
        <Head>
          <title>Work</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Center>

          <Container >
            {
              workArray.map((work, i) => {

                return (
                  <WorkSection key={i} work={work}/>
                )
              })
            }
          </Container>
        </Center>
      </>
    </ComponentContainer>
  )
}