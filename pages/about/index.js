import Head from "next/head";
import {
  Box,
  useColorMode,
  Wrap,
  Text,
  WrapItem,
  Heading,
  Center,
  VStack,
} from "@chakra-ui/react";
import ContactComponent from "../../components/contact-component";
import ComponentContainer from "../../components/component-container";
import Particles from "@tsparticles/react";
import {
  particlesConfigDark,
  particlesConfigLight,
} from "../../constants/particles-config";

const list = { hidden: { opacity: 1 } };
const item = { hidden: { x: -10, opacity: 1 } };

export default function About() {
  const { colorMode } = useColorMode();
  const boxBgColor2 = colorMode == "light" ? "#f5f1da" : "#202040";
  const fontColor = colorMode == "light" ? "#505050" : "#ffbd69";

  return (
    <ComponentContainer>
      <>
        <Head>
          <title>About</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Box w="100%" style={{ overflow: "hidden" }}>
          <Wrap>
            <WrapItem w={["100vw", null, null, "50vw", null]}>
              <Box>
                <Center
                  w={["100vw", null, null, "50vw"]}
                  h="calc(100vh - 72px)"
                  bg={boxBgColor2}
                >
                  <VStack spacing={6} p="2em">
                    <Heading
                      size="lg"
                      fontSize={["1rem", "2rem", "2rem", "3rem"]}
                      style={{ fontFamily: "Montserrat-Black" }}
                    >
                      Passion for innovation
                    </Heading>
                    <Text
                      fontSize={["1.2rem"]}
                      color={fontColor}
                      textAlign="center"
                    >
                      I'd say my passion and purpose lately has been to help
                      others grow and learn. I like to see the light bulb turn
                      on in people, both personally and professionaly.
                    </Text>
                    <Text
                      fontSize={["1.2rem"]}
                      color={fontColor}
                      textAlign="center"
                    >
                      When I introspect, I see a forever student, open minded
                      and creative, finding joy in finding ways to innovate.
                    </Text>
                  </VStack>
                </Center>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </>
    </ComponentContainer>
  );
}
