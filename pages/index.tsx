import type { NextPage } from 'next'
import Layout from '../components/Layout'
// import AboutMe from '../components/Profile/AboutMe'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies'
import data from '../data/data.json'

const Home: NextPage = () => {
   return (
      <Layout metaData={data.metaData}>
         <>
            {/* <AboutMe about={data.profile.about} /> */}
            <Technologies techStack={data.tools} />
            <Projects projects={data.projects} />
         </>
      </Layout>
   )
}

export default Home
