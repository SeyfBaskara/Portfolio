import React from 'react'
import Image from 'next/image'

interface IProps {
   fallbackImg: string
   srcImg: string
   alt: string
   type?: string
}

const CustomImage: React.FC<IProps> = ({ srcImg, fallbackImg, type = 'image/webp', alt }) => {
   return (
      <picture>
         <source srcSet={srcImg} type={type} />
         <Image src={fallbackImg} priority={true} blurDataURL="blur" alt={alt} width={770} height={530} />
      </picture>
   )
}

export default CustomImage
