import React, { useState } from 'react'
import WorkExperience from './WorkExperience'
import Education from './Education'

interface IProfileProps {
   profile: {
      education: IEducation[]
      experience: IExperience[]
   }
}
interface IEducation {
   id: number
   program: string
   school: string
   date: string
   description?: string
}
interface IExperience {
   id: number
   title: string
   company: string
   date: string
   description: string
}

const TimeLine: React.FC<IProfileProps> = ({ profile }) => {
   const [isExperience, setIsExperience] = useState<boolean>(true)

   const handleShowButton = () => {
      setIsExperience(!isExperience)
   }

   return (
      <section className="p-4 md:w-11/12 md:m-auto lg:w-4/5">
         <div className="flex flex-col items-center my-12 md:items-start md:flex-row md:my-24">
            <header className="flex flex-col items-center max-w-sm gap-3 mb-10 sticky md:items-start md:mb-0 md:top-36 md:pr-6 lg:w-1/3">
               <h1 className="text-large font-bold">Timeline</h1>
               <p className="text-base ">
                  {`Timeline present my ${isExperience ? 'work experiences' : 'education background'}. Click show ${
                     isExperience ? 'education' : 'experience'
                  } button to preview ${isExperience ? 'education background' : 'work experiences'}.`}
               </p>
               <button
                  onClick={handleShowButton}
                  className="font-semibold tracking-widest border-b-2 border-Green pb-1 outline-none hover:text-Green focus:text-Green "
               >
                  {`SHOW ${isExperience ? 'EDUCATION' : 'EXPERIENCE'}`}
               </button>
            </header>

            <div className="mt-10 ml-0 md:mt-0 md:ml-12 lg:w-2/3 sticky">
               <div className="container mx-auto w-full h-full">
                  <div className="relative wrap overflow-hidden h-full">
                     <div className="border-2-2 border-yellow-555 absolute h-full border-2 border-Green right-1/2 "></div>
                     <div className="border-2-2 border-yellow-555 absolute h-full border-2 border-Green left-1/2 "></div>

                     {isExperience ? (
                        <WorkExperience experience={profile.experience} />
                     ) : (
                        <Education education={profile.education} />
                     )}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default TimeLine
