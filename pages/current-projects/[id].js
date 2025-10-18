import { useRouter } from "next/router";
import {
  Container,
  useColorMode,
  Box,
  Heading,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import ComponentContainer from "../../components/component-container";
import { ArrowBackIcon } from "@chakra-ui/icons";

const CurrentProject = () => {
  const router = useRouter();
  const { id } = router.query;
  const { colorMode } = useColorMode();
  const accentColor = colorMode === "light" ? "#96bb7c" : "#ff6363";
  const textColor = colorMode === "light" ? "#505050" : "#e0e0e0";
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/current-projects/${id}.md`)
        .then((res) => res.text())
        .then((text) => {
          setContent(text);
          // Extract title from markdown (first H1)
          const titleMatch = text.match(/^#\s+(.+)$/m);
          if (titleMatch) {
            setTitle(titleMatch[1]);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading project:", error);
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <ComponentContainer>
      <Head>
        <title>{title || "Current Project"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="800px" py={8}>
        <VStack align="stretch" spacing={6}>
          <Link href="/" passHref legacyBehavior>
            <Button
              as="a"
              leftIcon={<ArrowBackIcon />}
              colorScheme="teal"
              variant="ghost"
              alignSelf="flex-start"
              color={accentColor}
              _hover={{ bg: colorMode === "light" ? "gray.100" : "gray.700" }}
            >
              Back to Home
            </Button>
          </Link>

          {loading ? (
            <Box color={textColor} fontSize="lg">
              Loading...
            </Box>
          ) : (
            <Box
              className="markdown-content"
              color={textColor}
              sx={{
                "& h1": {
                  fontSize: ["2xl", "3xl", "4xl"],
                  fontFamily: "Montserrat-Black",
                  color: accentColor,
                  mb: 4,
                },
                "& h2": {
                  fontSize: ["xl", "2xl"],
                  fontFamily: "Montserrat-Black",
                  color: accentColor,
                  mt: 6,
                  mb: 3,
                },
                "& h3": {
                  fontSize: ["lg", "xl"],
                  fontFamily: "Montserrat-Black",
                  color: accentColor,
                  mt: 4,
                  mb: 2,
                },
                "& p": {
                  fontSize: ["md", "lg"],
                  lineHeight: "1.8",
                  mb: 4,
                },
                "& ul, & ol": {
                  ml: 6,
                  mb: 4,
                },
                "& li": {
                  fontSize: ["md", "lg"],
                  lineHeight: "1.8",
                  mb: 2,
                },
                "& code": {
                  bg: colorMode === "light" ? "gray.100" : "gray.700",
                  px: 2,
                  py: 1,
                  borderRadius: "md",
                  fontSize: "sm",
                },
                "& pre": {
                  bg: colorMode === "light" ? "gray.100" : "gray.700",
                  p: 4,
                  borderRadius: "md",
                  overflowX: "auto",
                  mb: 4,
                },
                "& a": {
                  color: accentColor,
                  textDecoration: "underline",
                },
                "& blockquote": {
                  borderLeft: `4px solid ${accentColor}`,
                  pl: 4,
                  fontStyle: "italic",
                  my: 4,
                },
              }}
            >
              <ReactMarkdown>{content}</ReactMarkdown>
            </Box>
          )}
        </VStack>
      </Container>
    </ComponentContainer>
  );
};

export default CurrentProject;
