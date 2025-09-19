import {
  Box,
  Text,
  Heading,
  Icon,
  Center,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "../components/logo";
import HeroGraphic from "../components/hero-graphic";
import { useHasMounted } from "../hooks/use-has-mounted";
import { Context } from "../contexts";
import { useContext } from "react";
import ComponentContainer from "../components/component-container";
import { SiRubyonrails, SiReact } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";

const MotionCenter = motion(Center);

export default function Index() {
  const { colorMode } = useColorMode();
  const { state, dispatch } = useContext(Context);
  const { showMainCanvas } = state;

  const iconSize = [10, null, 20, null, 20];
  return (
    <ComponentContainer>
      <section>
        {showMainCanvas && <HeroGraphic />}
        <AnimatePresence mode="wait" initial={false}>
          {showMainCanvas && (
            <MotionCenter
              key="main-canvas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              h="100vh"
              w="100%"
            >
              <Heading
                size="lg"
                style={{
                  fontFamily: "PoiretOne-Regular",
                  position: "absolute",
                  zIndex: 999999,
                }}
              >
                <Box p="2em" w="100%">
                  <Text fontSize={{ base: "4rem", md: "76px", lg: "75px" }}>
                    Hi I'm Ken
                  </Text>

                  <Heading
                    size="lg"
                    fontSize={["1rem", "2rem", "2rem", "3rem"]}
                    style={{ fontFamily: "Montserrat-Black" }}
                    color={colorMode == "light" ? "#96bb7c" : "#ff6363"}
                  >
                    AI Enthusiast, Empathetic Mentor, Innovative Dreamer
                  </Heading>
                </Box>
              </Heading>
            </MotionCenter>
          )}
        </AnimatePresence>
      </section>
    </ComponentContainer>
  );
}
