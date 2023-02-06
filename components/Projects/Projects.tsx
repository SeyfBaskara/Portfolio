import React, { useState } from 'react'
import ContactMe from '../Buttons/ContactMe'
import CustomImage from '../Image/CustomImage'
import ProjectTechStack from './ProjectTechStack'
import ViewButtons from '../Buttons/ViewButtons'
import ReadAbtProjectButton from '../Buttons/ReadAbtProjectButton'
import ProjectDescription from './ProjectDescription'

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
   const [isElement, setIsElement] = useState<number | null>(null)
   const [showDescription, setShowDescription] = useState<boolean>(false)

   const handleReadAbtProjectButton = () => {
      setShowDescription(true)
   }

   return (
      <section aria-label="projects" className="p-4 md:w-11/12 md:m-auto lg:w-4/5">
         <header className="flex items-center justify-between">
            <h1 className="text-large font-bold">Projects</h1>
            <ContactMe />
         </header>

         <article>
            <ul className="py-10 grid gap-10 md:grid-cols-2">
               {projects.map((project, index) => {
                  return (
                     <li key={index} className="flex flex-col gap-3 grow-1 last:mt-auto">
                        <div
                           className="relative cursor-pointer"
                           onMouseEnter={() => setIsElement(index)}
                           onMouseLeave={() => {
                              setIsElement(null)
                              setShowDescription(false)
                           }}
                           // onTouchStart={() => setIsElement(index)}
                           // onTouchEnd={() => setIsElement(null)}
                        >
                           {isElement === index && (
                              <div className="absolute flex items-center justify-center bg-black w-full h-full z-10 opacity-80">
                                 {showDescription ? (
                                    <ProjectDescription description={project.description} />
                                 ) : (
                                    <ReadAbtProjectButton handleFunc={handleReadAbtProjectButton} />
                                 )}
                              </div>
                           )}
                           <CustomImage srcImg={project.srcImg} fallbackImg={project.fallbackImg} alt={project.alt} />
                        </div>
                        <ProjectTechStack techStack={project.techStack} title={project.title} />
                        <ViewButtons projectUrl={project.liveUrl} githubUrl={project.githubUrl} />
                     </li>
                  )
               })}
            </ul>
         </article>
      </section>
   )
}

export default Projects

/**
 * TODO
 * should pops up project details on click of read abt project button
 */
