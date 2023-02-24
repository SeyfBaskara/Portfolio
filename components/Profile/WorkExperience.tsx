import React from 'react'

interface IExperinceProps {
   experience: {
      id: number
      title: string
      company: string
      date: string
   }[]
}

const WorkExperience: React.FC<IExperinceProps> = ({ experience }) => {
   return (
      <section>
         <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
               <p className="mb-3 text-base text-yellow-300">1-6 May, 2021</p>
               <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
               <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Pick your favourite event(s) and register in that event by filling the form corresponding to that
                  event. Its that easy :)
               </p>
            </div>
         </div>
         <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="order-1  w-5/12 px-1 py-4 text-left">
               <p className="mb-3 text-base text-yellow-300">6-9 May, 2021</p>
               <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
               <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Participate online. The links for your registered events will be sent to you via email and whatsapp
                  groups. Use those links and show your talent.
               </p>
            </div>
         </div>
      </section>
   )
}

export default WorkExperience
