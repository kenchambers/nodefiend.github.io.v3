import { motion } from "framer-motion";
import { Center, useColorMode, Heading } from "@chakra-ui/react";

const loadingTextStyle = {
  fontFamily: "PoiretOne-Regular",
  fontSize: "2em",
  fontWeight: "normal",
};

export default function Loading() {
  const { colorMode } = useColorMode();
  const boxBgColor = colorMode === "light" ? "#f5f1da" : "#202040";

  return (
    <div
      style={{
        backgroundColor: boxBgColor,
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Center h="100vh">
          <Heading size="lg" style={loadingTextStyle}>
            Loading...
          </Heading>
        </Center>
      </motion.div>
    </div>
  );
}
