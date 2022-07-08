import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Preview from '../components/Preview'
import About from '../components/About'
import Project from '../components/Project'
import AboutWidget from '../components/AboutWidget'
const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>Seyfettin Baskara</title>
            <meta name="description" content="Hey, I'm a Fullstack developer." />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Preview />
         <About />
         <AboutWidget />
         <Project />
      </>
   )
}

export default Home
