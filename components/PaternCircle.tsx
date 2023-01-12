import React from 'react'
import Image from 'next/image'

interface IProps {
   header?: boolean
   footer?: boolean
}

const style = {
   header: 'absolute top-32 -left-[25rem] sm:top-16 sm:-left-[20rem] md:top-24 md:-left-48',
   footer: 'absolute bottom-60 -left-[21rem] sm:bottom-28 lg:-left-48 lg:bottom-32',
}

const PaternCircle: React.FC<IProps> = ({ header, footer }) => {
   return (
      <section>
         {header && (
            <div className="absolute top-[21rem] -right-16 sm:top-64 md:right-72 md:top-72 lg:right-[23rem]">
               <Image src="/images/pattern-circle.svg" alt="pattern circle" width={129} height={129} />
            </div>
         )}
         <div className={`${header ? style.header : style.footer}`}>
            <Image src="/images/pattern-rings.svg" alt="pattern circle" width={530} height={129} />
         </div>
      </section>
   )
}

export default PaternCircle
