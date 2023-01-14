import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies'
import data from '../data/data.json'

const Home: NextPage = () => {
   return (
      <Layout metaData={data.metaData}>
         <>
            <Technologies techStack={data.tools} />
            <Projects projects={data.projects} />
         </>
      </Layout>
   )
}

export default Home
