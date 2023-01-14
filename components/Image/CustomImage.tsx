import React from 'react'
import Image from 'next/image'

interface IProps {
   path: string
   title: string
}

const CustomImage: React.FC<IProps> = ({ path, title }) => {
   return (
      <div>
         <Image src={path} priority={true} blurDataURL="blur" alt={`${title} image`} width={770} height={530} />
      </div>
   )
}

export default CustomImage
