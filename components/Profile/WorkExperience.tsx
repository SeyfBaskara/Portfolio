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
      <>
         <ul>
            {experience.map((item, index) => (
               <li
                  key={item.id}
                  className={`mb-8 flex justify-between items-center ${
                     index % 2 == 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'
                  }`}
               >
                  <div className="order-1 w-5/12"></div>
                  <div className={`order-1 w-5/12 px-1 py-4 ${index % 2 == 0 ? 'text-right' : 'text-left'} `}>
                     <h4 className="text-md font-bold">{item.title}</h4>
                     <p className="text-base font-semibold">{item.company}</p>
                     <p className="text-[1rem] text-Grey">{item.date}</p>
                  </div>
               </li>
            ))}
         </ul>
      </>
   )
}

export default WorkExperience
