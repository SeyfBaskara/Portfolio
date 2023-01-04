import React from 'react'
import Image from 'next/image'
import data from '../../../data/data.json'

const Nav = () => {
   return (
      <div className="flex flex-col gap-6">
         <h1 className="font-bold text-md">SeyfettinBaskara</h1>
         <div className="flex items-center justify-around">
            {data.links.map((link, index) => {
               return (
                  <a key={index} href={link.url} target="_blank" rel="noreferrer">
                     <Image src={`/icons/${link.name}.svg`} alt="icons" width={25} height={25} />
                  </a>
               )
            })}
         </div>
      </div>
   )
}

export default Nav
