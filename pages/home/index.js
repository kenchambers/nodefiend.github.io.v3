import Head from 'next/head'
import styles from './Home.module.scss'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Image, Box, Text , Stack} from "@chakra-ui/react"

export default function Home() {
  return (
      <section style={{position: 'absolute', display: 'block'}}>
        <Box float={{md: 'left'}} bg="red.200" w={['100%', null, '50%']} h={['50vh', null, '80vh']}>
          This is a box
          <Head>
            <title>HOME TEST</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <h1>Home test</h1>
            <h2>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </h2>
            <Box bg="red.200" w={[300, 400, 560]}>
              This is a box
              <Text fontSize={{ base: "56px", md: "76px", lg: "75px" }}>
                This is responsive text
              </Text>
            </Box>

            <Box
              height={{
                base: "100%", // 0-48em
                md: "50%", // 48em-80em,
                xl: "25%", // 80em+
              }}
              bg="teal.400"
              width={[
                "100%", // 0-30em
                "50%", // 30em-48em
                "25%", // 48em-62em
                "15%", // 62em+
              ]}
            />
            {/* responsive font size */}
            <Box fontSize={["sm", "md", "lg", "xl"]}>Font Size</Box>
            {/* responsive margin */}
            <Box mt={[2, 4, 6, 8]} width="full" height="24px" bg="tomato" />
            {/* responsive padding */}
            <Box bg="papayawhip" p={[2, 4, 6, 8]}>
              Padding
            </Box>
            <motion.figure
              layoutId="catImage">
              <Box p={4} display={{ md: "flex" }}>
                <Image
                  borderRadius="lg"
                  width={{ md: 80 }}
                  src="https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg"
                  alt="Woman paying for a purchase"
                />
              </Box>
            </motion.figure>
          </div>

        </Box>

        <Box float={{md: 'right'}}  bg="blue.200" w={['100%', null, '50%']} h={['50vh', null, '80vh']}>

        </Box>
      </section>
  )
}

