import { motion } from "framer-motion"
import Link from 'next/link'
import { Text, Box, Heading } from "@chakra-ui/react"
import Layout from '../components/layout'
import Image from 'next/image'
function Logo() {
  return <Image src="/logo.png" alt="logo" width="100" height="100" />
}

export default function Index() {
  return (
      <Layout>
        <section>
          <Link href="/home" >
            <Box
              as="button"
              height="50px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              border="1px"
              px="8px"
              borderRadius="2px"
              fontSize="30px"
              fontWeight="semibold"
              bg="#f5f6f7"
              borderColor="#ccd0d5"
              color="#4b4f56"
              _hover={{ bg: "#ebedf0" }}
              _active={{
                bg: "#dddfe2",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >

              <h1>Click Here</h1>
            </Box>
          </Link>

          <motion.figure
            layoutId="logo">
            <Box boxSize="sm">
              <Logo/>
              <Heading size="lg" fontSize="50px" style={{fontFamily: 'PoiretOne-Regular'}}>
                I'm overriding this heading
              </Heading>

            </Box>
          </motion.figure>

        </section>
      </Layout>
  );
}
