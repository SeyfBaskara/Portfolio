import React from 'react'
import Link from 'next/link'

interface IProps {
   projectUrl: string
   githubUrl: string
}

const ViewButtons: React.FC<IProps> = ({ projectUrl, githubUrl }) => {
   return (
      <div className="flex gap-x-4">
         <Link href={projectUrl}>
            <a
               target="_blank"
               rel="noreferrer"
               role="button"
               className="uppercase text-[1.2rem] font-semibold border-b-2 border-Green pb-2 outline-none hover:text-Green focus:text-Green "
            >
               View project
            </a>
         </Link>
         <Link href={githubUrl}>
            <a
               target="_blank"
               rel="noreferrer"
               role="button"
               className="uppercase text-[1.2rem] font-semibold border-b-2 border-Green pb-2 outline-none hover:text-Green focus:text-Green "
            >
               View Code
            </a>
         </Link>
      </div>
   )
}

export default ViewButtons
