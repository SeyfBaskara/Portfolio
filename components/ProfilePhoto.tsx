import React from 'react'
import Image from 'next/image'
import Nav from './Layout/Header/Nav'

const ProfilePhoto = (): JSX.Element => {
   return (
      <article>
         <Nav header={true} />
         <div className="relative bottom-10">
            <Image src="/images/profile-IMG.jpg" alt="profile picture" width={302} height={400} priority={true} />
         </div>
      </article>
   )
}

export default ProfilePhoto
