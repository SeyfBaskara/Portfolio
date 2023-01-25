import React from 'react'

const ReabAbtProjectButton = (): JSX.Element => {
   const handleReadAbtProject = () => {
      console.log('click read about project button')
   }
   return (
      <>
         <button
            onClick={handleReadAbtProject}
            className="font-semibold tracking-widest border-b-2 border-Green pb-1 outline-none hover:text-Green focus:text-Green "
         >
            READ ABOUT PROJECT
         </button>
      </>
   )
}

export default ReabAbtProjectButton
