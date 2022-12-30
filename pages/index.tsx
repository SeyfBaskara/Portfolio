import type { NextPage } from 'next'
import Layout from '../components/Layout'
import data from '../data/data.json'

const Home: NextPage = () => {
   return (
      <Layout metaData={data.metaData}>
         <p>this is new portfolio</p>
      </Layout>
   )
}

export default Home
