import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const projects = [
  {
    id: "kent-2-advanced-memory-architecture",
    title: "Kent 2: Advanced Memory Architecture for LLMs",
  },
  {
    id: "ken-gold-candle-scalping-bot",
    title: "Ken Gold Candle: Self-Evolving Scalping Bot",
  },
  {
    id: "llm-prophet-agentic-quant",
    title: "LLM Prophet: Self-Evolving Agentic Quant",
  },
];

const CurrentProjectsList = () => {
  const { colorMode } = useColorMode();
  const accentColor = colorMode === "light" ? "#96bb7c" : "#ff6363";
  const textColor = colorMode === "light" ? "#505050" : "#ffbd69";

  return (
    <Box mt={8} w="100%">
      <Heading
        size="md"
        fontSize={["1.2rem", "1.5rem", "1.8rem"]}
        style={{ fontFamily: "Montserrat-Black" }}
        color={accentColor}
        mb={4}
      >
        Currently working:
      </Heading>
      <List spacing={3}>
        {projects.map((project) => (
          <ListItem
            key={project.id}
            fontSize={["0.9rem", "1rem", "1.1rem"]}
            color={textColor}
            style={{
              fontFamily: "Montserrat-Light",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Link
              href={`/current-projects/${project.id}`}
              passHref
              legacyBehavior
            >
              <Box
                as="a"
                display="flex"
                alignItems="center"
                _hover={{
                  color: accentColor,
                  transform: "translateX(5px)",
                  cursor: "pointer",
                }}
              >
                <ListIcon as={MdArrowForward} color={accentColor} />
                {project.title}
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CurrentProjectsList;
