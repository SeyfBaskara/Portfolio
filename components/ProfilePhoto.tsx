import React from 'react'
import Image from 'next/image'

const ProfilePhoto = () => {
   return (
      <div>
         <Image src="/images/profile.jpg" alt="profile picture" width={200} height={250} priority={true} />
      </div>
   )
}

export default ProfilePhoto
