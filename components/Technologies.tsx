import React from 'react'
import data from '../data/data.json'
import PaternCircle from './PaternCircle'

const Technologies = (): JSX.Element => {
   return (
      <section aria-label="technologies" className="relative overflow-hidden p-4 mt-10 pb-14 sm:mt-0">
         <div className="md:w-11/12 md:m-auto lg:w-4/5">
            <ul className="border-b border-t py-10 flex flex-wrap items-center justify-center gap-6 sm:py-20 md:border-b-0">
               {data.tools.map((tool, index) => (
                  <li key={index} className="text-[1.7rem] font-semibold basis-[8rem] md:text-[2rem]">
                     {tool}
                  </li>
               ))}
            </ul>
         </div>
         <PaternCircle />
      </section>
   )
}

export default Technologies
