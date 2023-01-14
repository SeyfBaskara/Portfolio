import React from 'react'

interface IProps {
   projectUrl: string
   githubUrl: string
}

const ViewButtons: React.FC<IProps> = ({ projectUrl, githubUrl }) => {
   return (
      <div className="flex gap-x-4">
         <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            role="button"
            className="uppercase text-[1.2rem] font-semibold border-b-2 border-Green pb-2 outline-none hover:text-Green focus:text-Green "
         >
            View project
         </a>
         <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            role="button"
            className="uppercase text-[1.2rem] font-semibold border-b-2 border-Green pb-2 outline-none hover:text-Green focus:text-Green "
         >
            View Code
         </a>
      </div>
   )
}

export default ViewButtons
