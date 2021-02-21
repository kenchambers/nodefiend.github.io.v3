import Head from 'next/head'
import styles from './Home.module.scss'
import { motion } from "framer-motion"
import Link from 'next/link'
import Layout from '../../components/layout'
import { Image, Box, Text , Stack} from "@chakra-ui/react"


const menuContainerAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1
    }
  }
}

const itemAboutAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const itemExperienceAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const itemBlogAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const itemContactAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const LinksComponent = () => {
  const styles = {
    row: {
      display: 'flex',
       flexDirection: 'row',
       flexWrap: 'wrap',
       width: '100%',
    },
    column: {
      height : '20vh',
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '100%',
      flex: '1',
    },
    link: {
      border: '2px solid green'
    }
  }

  return (
    <motion.div
      className={styles.menuContainer}
      variants={menuContainerAnimation}
      initial="hidden"
      animate="show">
      <div style={styles.row}>
      <Link href="/about">
        <motion.div
          style={styles.column}
          variants={itemAboutAnimation}>
          <div >
            <h3>About &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
        </motion.div>
      </Link>

      <Link href="/experience" >
        <motion.div
          style={styles.column}
          variants={itemExperienceAnimation}>
          <div>
            <h3>Experience &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>
        </motion.div>
      </Link>
      </div>
      <div style={styles.row}>
        <Link href="/blog">
        <motion.div
          style={styles.column}
          variants={itemBlogAnimation}>
          <div>
            <h3>Blog &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>
        </motion.div>
      </Link>

      <Link href="/contact">
      <motion.div
        style={styles.column}
        variants={itemContactAnimation}>
        <div>
          <h3>Contact &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </div>
      </motion.div>
    </Link>
      </div>
    </motion.div>
  )
}


export default function Home() {
  return (
    <Layout>
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
        <LinksComponent/>
      </Box>
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
