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
                     <h4 className="mb-3 text-base text-yellow-300">{item.title}</h4>
                     <p className="mb-3 font-bold text-lg md:text-2xl">{item.date}</p>
                     <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">{item.company}</p>
                  </div>
               </li>
            ))}
         </ul>
      </section>
   )
}

export default WorkExperience
