import About from '../components/About'
import Head from 'next/head'

const AboutPage = (): JSX.Element => {
   return (
      <>
         <Head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <About />
      </>
   )
}

export default AboutPage
