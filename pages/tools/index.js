import Head from 'next/head'
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, AddIcon,  Box, Container, Center, Heading, Stack, Divider, Text, useColorMode , Image} from "@chakra-ui/react"
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
const plaidIcon = <Image src="/plaid2.svg" alt="plaid" style={{height: 40, width: 40}} />

const toolArray = [
  {
    title: 'Ruby on Rails',
    icon: railsIcon,
    text: "Lorem ipsum dolor sit amet, consectetur"
  },
  {
    title: 'React',
    icon: reactIcon,
    text: "Lorem ipsum dolor sit amet, consectetur"
  },
  {
    title: 'Redux',
    icon: reduxIcon,
    text: "Lorem ipsum dolor sit amet, consectetur"
  },
  {
    title: 'Rspec',
    icon: rspecIcon,
    text: "Lorem ipsum dolor sit amet, consectetur"
  },
  {
    title: 'Amazon Web Services',
    icon: awsIcon,
    text: "Lorem ipsum dolor sit amet, consectetur"
  },
  {
    title: 'Next.JS',
    icon: nextIcon,
    text: "Lorem ipsum dolor sit amet, consectetur"
  },
  {
    title: 'Heroku',
    icon: herokuIcon,
    text: "Lorem ipsum dolor sit amet, consectetur"
  },
  {
    title: 'Firebase',
    icon: firebaseIcon,
    text: "Lorem ipsum dolor sit amet, consectetur"
  },
  {
    title: 'Stripe',
    icon: stripeIcon,
    text: "Lorem ipsum dolor sit amet, consectetur"
  },
]

const Tool = ({ tool: { icon, title, text }}) => {
  const { colorMode} = useColorMode()
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
        {text}
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
              { toolArray.map((tool,i)=>{
                return (
                    <Tool key={i} tool={tool}/>
                )
              })}
            </Accordion>
          </Container>
        </Center>
    </>
  )
}