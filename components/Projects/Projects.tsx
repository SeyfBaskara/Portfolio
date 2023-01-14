import ContactMe from '../Buttons/ContactMe'
import data from '../../data/data.json'
import CustomImage from '../Image/CustomImage'
import ProjectTechStack from './ProjectTechStack'
import ViewButtons from '../Buttons/ViewButtons'

const Projects = (): JSX.Element => {
   return (
      <section aria-label="projects" className="p-4">
         <div className="md:w-11/12 md:m-auto lg:w-4/5">
            <header className="flex items-center justify-between">
               <h1 className="text-large font-bold">Projects</h1>
               <ContactMe />
            </header>

            <article>
               <ul className="py-10 grid gap-10 md:grid-cols-2">
                  {data.projects.map((project, index) => (
                     <li key={index} className="flex flex-col gap-3">
                        <CustomImage path={project.img} title={project.title} />

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
