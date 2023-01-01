import type { NextPage } from 'next'
import Layout from '../components/Layout'
import data from '../data/data.json'

const Home: NextPage = () => {
   return (
      <Layout metaData={data.metaData}>
         <p className="">Main section </p>
      </Layout>
   )
}

export default Home
