import React from 'react'

interface IProps {
   icon: {
      xmlns: string
      viewBox: string
      width: number
      height: number
      path: {
         d: string
      }
   }
}

const SvgLinks: React.FC<IProps> = ({ icon }) => {
   return (
      <svg
         xmlns={icon.xmlns}
         width={icon.width}
         height={icon.height}
         viewBox={icon.viewBox}
         fill="#FFF"
         className="cursor-pointer hover:fill-Green"
      >
         <path fillRule="evenodd" d={icon.path.d} />
      </svg>
   )
}

export default SvgLinks
