import React from 'react'

interface IProps {
   description: string
}

const ProjectDescription: React.FC<IProps> = ({ description }) => {
   return (
      <>
         <p className="text-base sm:text-md md:text-base lg:text-[1.5rem] p-3 text-center">{description}</p>
      </>
   )
}

export default ProjectDescription
