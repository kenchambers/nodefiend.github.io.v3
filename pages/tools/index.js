import Link from 'next/link'
import Head from 'next/head'
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, AddIcon,  Box, Container, Center, Heading, Stack, Divider, Text, UnorderedList, ListItem, useColorMode } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { SiFirebase, SiHeroku, SiNextDotJs, SiRails, SiRedux , SiReact, SiAmazonaws } from 'react-icons/si'
import { FaStripe } from 'react-icons/fa'
import { DiRuby } from 'react-icons/di'


const railsIcon = <Icon as={SiRails} w={12} h={12} color="grey.500"/>
const reactIcon = <Icon as={SiReact} w={12} h={12} color="grey.500"/>
const awsIcon = <Icon as={SiAmazonaws} w={12} h={12} color="grey.500"/>
const stripeIcon = <Icon as={FaStripe} w={12} h={12} color="grey.500"/>
const rspecIcon = <Icon as={DiRuby} w={12} h={12} color="grey.500"/>
const reduxIcon = <Icon as={SiRedux} w={12} h={12} color="grey.500"/>
const nextIcon = <Icon as={SiNextDotJs} w={12} h={12} color="grey.500"/>
const herokuIcon = <Icon as={SiHeroku} w={12} h={12} color="grey.500"/>
const firebaseIcon = <Icon as={SiFirebase} w={12} h={12} color="grey.500"/>


const toolArray = [
  {
    id: 1,
    title: 'Ruby on Rails',
    icon: railsIcon,

  },
  {
    id: 2,
    title: 'React',
    icon: reactIcon
  },
  {
    id: 6,
    title: 'Redux',
    icon: reduxIcon,
  },
  {
    id: 5,
    title: 'Rspec',
    icon: rspecIcon
  },
  {
    id: 3,
    title: 'Amazon Web Services',
    icon: awsIcon
  },
  {
    id: 7,
    title: 'Next.JS',
    icon: nextIcon
  },
  {
    id: 8,
    title: 'Heroku',
    icon: herokuIcon,
  },
  {
    id: 4,
    title: 'Stripe',
    icon: stripeIcon
  },
  {
    id: 9,
    title: 'Firebase',
    icon: firebaseIcon
  }



]


const Tool = ({tool: {icon, title}}) => {
  const {colorMode} = useColorMode()

  const accentColor = colorMode == "light" ? '#96bb7c' : '#543864'
  const titleColor = colorMode == "light" ? '#202040' : '#ff6363'


  return (
    <AccordionItem >
      <h2>
        <AccordionButton _expanded={{ bg: accentColor, color: "white" }}>
          <Box flex="1" textAlign="left">
            {icon}
            <Center>
              <Heading fontSize={['16px', '19px', '23px', '27px']} style={{color: titleColor}}>
                {title}
              </Heading>
            </Center>

          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>

  )
}

export default function Tools() {

  return (
    <>
      <Head>
        <title>Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Center>
          <Container >
            <Accordion allowMultiple>

              { toolArray.map((tool)=>{

                return (

                    <Tool key={tool.id} tool={tool}/>
                )

              })}

            </Accordion>


          </Container>
        </Center>
    </>
  )
}