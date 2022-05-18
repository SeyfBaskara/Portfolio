import Project from '../components/Project'
import Head from 'next/head'

const ProjectsPage: React.FC = () => {
   return (
      <>
         <Head>
            <title>Seyfettin Baskara</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Project />
      </>
   )
}

export default ProjectsPage
