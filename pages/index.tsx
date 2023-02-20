import type { NextPage } from 'next'
import Layout from '../components/Layout'
import AboutMe from '../components/Profile/AboutMe'
import TimeLine from '../components/Profile/TimeLine'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies'
import data from '../data/data.json'

const Home: NextPage = () => {
   return (
      <Layout metaData={data.metaData}>
         <>
            <AboutMe />
            <TimeLine />
            <Technologies techStack={data.tools} />
            <Projects projects={data.projects} />
         </>
      </Layout>
   )
}

export default Home
