import React from 'react'
import Image from 'next/image'
import data from '../data/data.json'

const ProfilePhoto = () => {
   return (
      <div>
         <div>
            {data.links.map((link, index) => {
               return (
                  <a key={index} href={link.url} target="_blank" rel="noreferrer">
                     <Image src={`/icons/${link.name}.svg`} alt="icons" width={25} height={25} />
                  </a>
               )
            })}
         </div>
         <div>
            <p>profile picture</p>
         </div>
      </div>
   )
}

export default ProfilePhoto
