import React from 'react'
import Link from 'next/link'

const MoreProjects = (): JSX.Element => {
   return (
      <>
         <Link href="https://github.com/SeyfBaskara" className="outline-offset-4 ">
            <a
               target="_blank"
               rel="noreferrer"
               className="font-semibold tracking-widest border-b-2 border-Green pb-1 outline-none hover:text-Green focus:text-Green"
            >
               MORE PROJECTS
            </a>
         </Link>
      </>
   )
}

export default MoreProjects
