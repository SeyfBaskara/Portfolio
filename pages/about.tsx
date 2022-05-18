import About from '../components/About'
import Head from 'next/head'
import AboutWidget from '../components/AboutWidget'

const AboutPage: React.FC = () => {
   return (
      <>
         <Head>
            <title>Seyfettin Baskara</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <About />
         <AboutWidget />
      </>
   )
}

export default AboutPage
