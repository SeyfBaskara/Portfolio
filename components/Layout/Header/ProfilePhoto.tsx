import Image from 'next/image'
import PlatformLinks from '../../Links/PlatformLinks'

const ProfilePhoto = (): JSX.Element => {
   return (
      <div className="sm:relative sm:bottom-10">
         <PlatformLinks header={true} />
         <div className="relative bottom-10">
            <Image src="/images/profile-IMG.jpg" alt="profile picture" width={302} height={400} priority={true} />
         </div>
      </div>
   )
}

export default ProfilePhoto
