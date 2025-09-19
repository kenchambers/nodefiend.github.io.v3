import Head from "next/head";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AddIcon,
  Box,
  Container,
  Center,
  Heading,
  Stack,
  Divider,
  Text,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { SiReact } from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import { SiLangchain } from "react-icons/si";
import { RiClaudeLine } from "react-icons/ri";

import { TbBrandPython } from "react-icons/tb";

import ComponentContainer from "../../components/component-container";

const reactIcon = <Icon as={SiReact} w={12} h={12} color="grey.500" />;

const langchainIcon = <Icon as={SiLangchain} w={12} h={12} color="grey.500" />;
const pythonIcon = <Icon as={TbBrandPython} w={12} h={12} color="grey.500" />;
const llmIcon = <Icon as={FaRobot} w={12} h={12} color="grey.500" />;
const claudeIcon = <Icon as={RiClaudeLine} w={12} h={12} color="grey.500" />;

const toolArray = [
  {
    title: "React",
    icon: reactIcon,
    text: "My first choice for building production ready frontends. I've been using it so long It's API has become a second nature to me. (Plus LLM's are pretty well trained in it)",
  },
  {
    title: "Python",
    icon: pythonIcon,
    text: "My Main choice lately for complex backends. I've been working alot with agentic frameworks and i've found python to be the most well documented implementation of SDK's",
  },
  {
    title: "Langchain",
    icon: langchainIcon,
    text: "My goto for building agentic frameworks. It was a steep learning curve but i've found it to be extremely capable.",
  },
  {
    title: "LLMs",
    icon: llmIcon,
    text: "10x in productivity, but a double edged sword sometimes. I've found it best to focus it on smaller tasks, keeping in mind broader architecture. Currently using Gemini, Claude, and grok.",
  },
  {
    title: "Claude Code",
    icon: claudeIcon,
    text: "An interesting addition to my AI arsenal, I find that using it to handle tasks like git operations or deployments (after educating it) has where I've found the most benefit.",
  },
];

const Tool = ({ tool: { icon, title, text } }) => {
  const { colorMode } = useColorMode();
  const accentColor = colorMode == "light" ? "#96bb7c" : "#543864";
  const titleColor = colorMode == "light" ? "#202040" : "#ff6363";

  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: accentColor, color: "white" }}>
          <Box flex="1" textAlign="left">
            {icon}
            <Center>
              <Heading
                fontSize={["16px", "19px", "23px", "27px"]}
                style={{ color: titleColor }}
              >
                {title}
              </Heading>
            </Center>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{text}</AccordionPanel>
    </AccordionItem>
  );
};

export default function Tools() {
  return (
    <ComponentContainer>
      <>
        <Head>
          <title>Tools</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Center>
          <Container>
            <Accordion allowMultiple>
              {toolArray.map((tool, i) => {
                return <Tool key={i} tool={tool} />;
              })}
            </Accordion>
          </Container>
        </Center>
      </>
    </ComponentContainer>
  );
}
