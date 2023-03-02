import React from 'react'

interface IEducationProps {
   education: {
      id: number
      program: string
      school: string
      date: string
      description?: string
   }[]
}

const Education: React.FC<IEducationProps> = ({ education }) => {
   return (
      <>
         <ul>
            {education.map((item, index) => (
               <li
                  key={item.id}
                  className={`mb-8 flex justify-between items-center ${
                     index % 2 == 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'
                  }`}
               >
                  <div className="order-1 w-5/12"></div>
                  <div className={`order-1 w-5/12 px-1 py-4 ${index % 2 == 0 ? 'text-right' : 'text-left'} `}>
                     <p className="text-[1rem] text-Green">{item.date}</p>
                     <h4 className="text-[1.4rem] md:text-md font-bold">{item.program}</h4>
                     <p className="text-base font-semibold italic">{item.school}</p>
                     <p className="md:text-base">{item.description}</p>
                  </div>
               </li>
            ))}
         </ul>
      </>
   )
}

export default Education
