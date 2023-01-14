import React from 'react'

interface IProps {
   techStack: Array<string>
   title: string
}

const ProjectTechStack: React.FC<IProps> = ({ techStack, title }) => {
   return (
      <div className="flex flex-col gap-2 mb-4">
         <h2 className="text-md font-semibold uppercase">{title}</h2>
         <ul className="flex flex-wrap gap-x-3">
            {techStack.map((tech, index) => (
               <li key={index} className="uppercase text-base text-Grey">
                  {tech}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ProjectTechStack
