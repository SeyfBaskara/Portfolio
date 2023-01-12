import React from 'react'
import Image from 'next/image'
import data from '../../../data/data.json'

interface IProps {
   header?: boolean
}

const Nav: React.FC<IProps> = ({ header }) => {
   return (
      <div className="flex flex-col items-center gap-4">
         {!header && <h1 className="font-bold text-md">SeyfettinBaskara</h1>}
         <div className="flex items-center justify-around w-36 z-50">
            {data.links.map((link, index) => {
               return (
                  <a key={index} href={link.url} target="_blank" rel="noreferrer">
                     <Image src={`/icons/${link.name}.svg`} alt={link.name} width={link.width} height={link.height} />
                  </a>
               )
            })}
         </div>
      </div>
   )
}

export default Nav
