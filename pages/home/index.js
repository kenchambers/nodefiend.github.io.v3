import Head from 'next/head'
import styles from './Home.module.scss'
import { motion } from "framer-motion"
import Link from 'next/link'
import Layout from '../../components/layout'
import { Image, Box, Text , Stack} from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  )
}

// export default function Home() {
//   // let styles = {}
//   styles.parentContainer = {
//     border: '5px solid yellow',
//     display: 'flex',
//     flexDirection: 'row',
//     height: '100vh',
//   };
//   styles.leftContainer = {
//     width: '100%'
//   };
//   styles.leftContainer = {
//     width: '100%'
//   };
//
//   const homeContainerAnimation = {
//     hidden: {
//       opacity: 0,
//       height: '0vh',
//       y: -300
//     },
//     show: {
//       opacity: 1,
//       height: "100vh",
//       y: 0
//     }
//   }
//
//   return (
//       <Layout>
//         <motion.div
//           layoutId="homeMenu"
//           style={styles.menuContainer}
//           variants={homeContainerAnimation}
//           initial="hidden"
//           animate="show">
//             <div style={styles.parentContainer}>
//               <div style={styles.leftContainer}>
//                 <main className={styles.main}>
//                   <div className={styles.grid}>
//                     <LinksComponent/>
//                   </div>
//                 </main>
//               </div>
//               <div style={styles.rightContainer}>
//                 <Head>
//                   <title>Create Next App</title>
//                   <link rel="icon" href="/favicon.ico" />
//                 </Head>
//
//                 <main className={styles.main}>
//                   <h1 className={styles.title}>
//                     Nodefiend.github.io
//                   </h1>
//
//                   <p className={styles.description}>
//                     The internet is my canvas and {' '}
//                     <code className={styles.code}>code</code> is my paintbrush
//                   </p>
//
//                 </main>
//
//                 <footer className={styles.footer}>
//                   <a
//                     href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     >
//                       Powered by{' '}
//                       The dark lord
//                     </a>
//                 </footer>
//               </div>
//             </div>
//           </motion.div>
//         </Layout>
//         )
// }
