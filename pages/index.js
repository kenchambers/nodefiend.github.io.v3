import { motion } from "framer-motion"
import Link from 'next/link'
import { Text, Box, Heading, Center } from "@chakra-ui/react"
import Layout from '../components/layout'
import Logo from '../components/logo'

export default function Index() {
  return (
    <Layout>
      <section >
        <Center bg="clear" h="100vh" w="100%">
          <Heading size="lg" style={{ fontFamily: 'PoiretOne-Regular'}}>
            <Text fontSize={{ base: "30px", md: "76px", lg: "75px" }}>
              Hi, I'm Ken Chambers
            </Text>
          </Heading>
        </Center>
      </section>
    </Layout>
  );
}
