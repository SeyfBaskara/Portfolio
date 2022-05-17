import About from '../components/About'
import Head from 'next/head'
import AboutWidget from '../components/AboutWidget'

const AboutPage = (): JSX.Element => {
   return (
      <>
         <Head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <About />
         <AboutWidget />
      </>
   )
}

export default AboutPage
