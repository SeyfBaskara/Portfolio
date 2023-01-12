import React from 'react'
import Image from 'next/image'

interface IProps {
   header: boolean
}

const PaternCircle: React.FC<IProps> = ({ header }) => {
   return (
      <section>
         {header && (
            <div className="absolute top-[21rem] -right-16 sm:top-64 md:right-72 md:top-72 lg:right-[23rem]">
               <Image src="/images/pattern-circle.svg" alt="pattern circle" width={129} height={129} />
            </div>
         )}
         <div className="absolute top-32 -left-[25rem] sm:top-16 sm:-left-[20rem] md:top-24 md:-left-48">
            <Image src="/images/pattern-rings.svg" alt="pattern circle" width={530} height={129} />
         </div>
      </section>
   )
}

export default PaternCircle
