import React from 'react'
import ContactMe from '../Buttons/ContactMe'
import data from '../../data/data.json'
import Image from 'next/image'

const Projects = (): JSX.Element => {
   return (
      <section aria-label="projects" className="p-4">
         <div className="md:w-11/12 md:m-auto lg:w-4/5">
            <header className="flex items-center justify-between">
               <h1 className="text-large font-bold">Projects</h1>
               <ContactMe />
            </header>

            <article>
               <ul className="py-10 flex flex-col-reverse gap-10">
                  {data.projects.map((project, index) => (
                     <li key={index} className="flex flex-col gap-3">
                        <div>
                           <Image
                              src={project.img}
                              priority={true}
                              blurDataURL="blur"
                              alt={`${project.title} image`}
                              width={780}
                              height={660}
                              //   layout="fill"
                           />
                        </div>
                        <div className="flex flex-col gap-2 mb-4">
                           <h2 className="text-md font-semibold uppercase">{project.title}</h2>
                           <ul className="flex flex-wrap gap-x-3">
                              {project.techStack.map((tech, index) => (
                                 <li key={index} className="uppercase text-base text-Grey">
                                    {tech}
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="flex gap-x-4">
                           <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="uppercase text-[1.2rem] font-semibold border-b-2 border-Green pb-2"
                           >
                              View project
                           </a>
                           <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="uppercase text-[1.2rem] font-semibold border-b-2 border-Green pb-2"
                           >
                              View Code
                           </a>
                        </div>
                     </li>
                  ))}
               </ul>
            </article>
         </div>
      </section>
   )
}

export default Projects
