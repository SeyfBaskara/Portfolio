import ContactMe from '../Buttons/ContactMe'
import CustomImage from '../Image/CustomImage'
import ProjectTechStack from './ProjectTechStack'
import ViewButtons from '../Buttons/ViewButtons'

interface IProps {
   projects: {
      title: string
      description: string
      githubUrl: string
      liveUrl: string
      techStack: string[]
      srcImg: string
      fallbackImg: string
      alt: string
      id: string
   }[]
}

const Projects: React.FC<IProps> = ({ projects }) => {
   return (
      <section aria-label="projects" className="p-4">
         <div className="md:w-11/12 md:m-auto lg:w-4/5">
            <header className="flex items-center justify-between">
               <h1 className="text-large font-bold">Projects</h1>
               <ContactMe />
            </header>

            <article>
               <ul className="py-10 grid gap-10 md:grid-cols-2">
                  {projects.map((project, index) => (
                     <li key={index} className="flex flex-col gap-3">
                        <CustomImage srcImg={project.srcImg} fallbackImg={project.fallbackImg} alt={project.alt} />

                        <ProjectTechStack techStack={project.techStack} title={project.title} />

                        <ViewButtons projectUrl={project.liveUrl} githubUrl={project.githubUrl} />
                     </li>
                  ))}
               </ul>
            </article>
         </div>
      </section>
   )
}

export default Projects
