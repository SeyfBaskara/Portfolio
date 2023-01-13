import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Technologies from '../components/Technologies'
import data from '../data/data.json'

const Home: NextPage = () => {
   return (
      <Layout metaData={data.metaData}>
         <>
            <Technologies />
         </>
      </Layout>
   )
}

export default Home
