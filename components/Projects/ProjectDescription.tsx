import React from 'react'

interface IProps {
   description: string
}

const ProjectDescription: React.FC<IProps> = ({ description }) => {
   return (
      <>
         <p className="text-md p-3 text-center">{description}</p>
      </>
   )
}

export default ProjectDescription
