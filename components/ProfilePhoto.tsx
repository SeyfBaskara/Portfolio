import React from 'react'
import Image from 'next/image'

const ProfilePhoto = (): JSX.Element => {
   return (
      <div className="relative bottom-12">
         <Image src="/images/profile-IMG.jpg" alt="profile picture" width={302} height={400} priority={true} />
      </div>
   )
}

export default ProfilePhoto
