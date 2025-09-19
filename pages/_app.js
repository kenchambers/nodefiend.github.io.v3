import "../styles/globals.scss";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { AnimatePresence, motion } from "framer-motion";
import { Provider } from "../contexts";
import { chakraConfig, font } from "../constants";
import Layout from "../components/layout";

// Theme configuration
const styles = {
  global: (props) => ({
    body: {
      color: mode("#505050", "#E2E8F0")(props),
      bg: mode("#F5F1E6", "#0C161D")(props),
      fontFamily: "Montserrat-Light",
      fontSize: "1em",
      fontWeight: 300,
    },
  }),
};

export const theme = extendTheme({ font, chakraConfig, styles });

// Simple page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3,
};

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider>
      <ChakraProvider theme={theme}>
        <Layout>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={router.route}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ width: "100%" }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
