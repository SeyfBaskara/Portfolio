import Image from 'next/image'
import Nav from '../Nav'

const ProfilePhoto = (): JSX.Element => {
   return (
      <article className="sm:relative sm:bottom-10">
         <Nav header={true} />
         <div className="relative bottom-10">
            <Image src="/images/profile-IMG.jpg" alt="profile picture" width={302} height={400} priority={true} />
         </div>
      </article>
   )
}

export default ProfilePhoto
