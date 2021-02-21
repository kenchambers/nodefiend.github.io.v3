import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { motion, AnimatePresence } from "framer-motion"



const list = { hidden: { opacity: 1 } }
const item = { hidden: { x: -10, opacity: 1 } }


const MainViewAnimation = ({children}) => {

  return (
    <motion.div
      style={{
        opacity: 0 ,
        width: '1vw',
        height: '1vh'
      }}

      animate={{
        x: 0,
        opacity: 1 ,
        width: '80vw',
        height: '90vh'
      }}
      initial={true}
      transition={{ ease: "easeIn", duration: 2 }}
    >

      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <Layout>
      <MainViewAnimation>
        <>

        sfls;fdk;l
        <Head>
          <title>About</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>

          <motion.ul animate="hidden" variants={list}>
            <motion.li variants={item} >hi</motion.li>
            <motion.li variants={item} >hi</motion.li>
            <motion.li variants={item} >hi</motion.li>
          </motion.ul>

          <h1>About</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </div>

        </>
    </MainViewAnimation>

    </Layout>
  )
}