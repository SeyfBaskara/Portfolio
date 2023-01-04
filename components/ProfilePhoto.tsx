import React from 'react'
import Image from 'next/image'
import data from '../data/data.json'

const ProfilePhoto = () => {
   return (
      <div className="bg-neutral-900 w-[200px]">
         <div className="flex items-center justify-around">
            {data.links.map((link, index) => {
               return (
                  <a key={index} href={link.url} target="_blank" rel="noreferrer">
                     <Image src={`/icons/${link.name}.svg`} alt="icons" width={25} height={25} />
                  </a>
               )
            })}
         </div>
         <div className="">
            <Image src="/images/profile.jpg" alt="profile picture" width={200} height={250} priority={true} />
         </div>
      </div>
   )
}

export default ProfilePhoto
