import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Preview from '../components/Preview'

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>Seyfettin Baskara</title>
            <meta name="description" content="Hey, I'm a Fullstack developer." />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Preview />
      </>
   )
}

export default Home
