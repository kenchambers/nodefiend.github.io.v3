import Link from "next/link";
import Head from "next/head";
import ComponentContainer from "../../components/component-container";

import {
  Box,
  Container,
  Center,
  Stack,
  Divider,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";

const workArray = [
  {
    heading: "RVO Health",
    timeframe: "2019 - Present",
    title: "React / Next Senior Engineer / Team Lead",
    items: [
      "10x myself by leading more junior engineers to complete large complex projects",
      "Responsible for complex architectural foundations (including 1 AI project)",
      "Translate engineering tasks (in a digestible language) to stakeholders",
      "Finding broken windows* and helping fix and secure them for the future.",
      "Finding new tools and workflows to help other engineers, and demoing them to the broader organization",
      "Code ownership for various month long projects",
    ],
  },
  {
    heading: "Plannerly",
    timeframe: "2017 - 2019",
    title: "React / Rails Lead Engineer",
    items: [
      "Designed RSPEC Framework for our backend Rails API",
      "Built many React Components in ES6/7, inside of a Redux Framework",
      "Versioned Redux actions/reducers as our understanding of redux expanded",
      "Versioned RAILS API as our understanding of Best Practices expanded",
      "Helped implement a git workflow for making code contributions.",
      "Took ownership of codebase after Lead Engineer left company",
      "Wrote a migration script to transfer public S3 assets to a more secure bucket on AWS",
      "Changed upload process for existing app to use more secure CloudFront signed URLs",
      "Took charge of our localization initiative, localizing many of our 3rd party libraries, as well as building a custom app that utilizes Google Translate API",
      "Implemented Intercom into both our backend and our frontend.",
    ],
  },
  {
    heading: "Hire Iris",
    timeframe: "2015 - 2017",
    title: "React / Rails Engineer",
    items: [
      "Designed RSPEC Framework for our backend Rails API",
      "Built many React Components in ES6/7, inside of a Redux Framework",
      "Versioned Redux actions/reducers as our understanding of redux expanded",
      "Versioned RAILS API as our understanding of Best Practices expanded",
      "Helped implement a git workflow for making code contributions.",
      "Took ownership of codebase after Lead Engineer left company",
      "Wrote a migration script to transfer public S3 assets to a more secure bucket on AWS",
      "Changed upload process for existing app to use more secure CloudFront signed URLs",
      "Took charge of our localization initiative, localizing many of our 3rd party libraries, as well as building a custom app that utilizes Google Translate API",
      "Implemented Intercom into both our backend and our frontend.",
    ],
  },
];
const WorkSection = ({ work: { heading, timeframe, title, items } }) => {
  const { colorMode } = useColorMode();
  const accentColor = colorMode == "light" ? "#96bb7c" : "#ff6363";
  const dividerColor = colorMode == "light" ? "#C9C6B1" : "#2B2B57";
  return (
    <>
      <Divider
        style={{
          height: 3,
          backgroundColor: dividerColor,
          marginBottom: "2em",
        }}
        orientation="horizontal"
      />
      <Stack direction="row" style={{ marginBottom: "1em" }}>
        <Heading size={["3xl", "4xl"]} color={accentColor}>
          {heading}
        </Heading>
      </Stack>
      <Stack
        direction={["column", "column", "row"]}
        spacing={4}
        p={4}
        style={{ marginTop: "2em", paddingLeft: 0, marginBottom: "3em" }}
      >
        <Box minW={["100%", "100%", "150px"]} mb={[4, 4, 0]}>
          <Heading
            size="md"
            fontSize={["18px", "19px", "20px"]}
            color="gray.600"
            fontWeight="medium"
          >
            {timeframe}
          </Heading>
        </Box>

        <Stack flex="1" spacing={4}>
          <Text
            fontSize={["1.1rem", "1.3rem", "1.5rem", "1.8rem"]}
            color={accentColor}
            style={{ fontFamily: "Montserrat-Black" }}
            lineHeight="1.2"
          >
            {title}
          </Text>
          <UnorderedList
            pl={["16px", "20px"]}
            fontSize={["14px", "15px", "16px"]}
            spacing={2}
            lineHeight="1.6"
          >
            {items.map((item, i) => {
              return (
                <ListItem key={i} mb={2}>
                  {item}
                </ListItem>
              );
            })}
          </UnorderedList>
        </Stack>
      </Stack>
    </>
  );
};

export default function Work() {
  const { colorMode } = useColorMode();
  const accentColor = colorMode == "light" ? "#96bb7c" : "#ff6363";

  return (
    <ComponentContainer>
      <>
        <Head>
          <title>Work</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Center>
          <Container maxW="container.lg" py={8} px={[4, 6, 8]}>
            {workArray.map((work, i) => {
              return <WorkSection key={i} work={work} />;
            })}
          </Container>
        </Center>
      </>
    </ComponentContainer>
  );
}
